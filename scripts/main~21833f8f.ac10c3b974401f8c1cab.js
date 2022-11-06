(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        "/BoV": function(e, t, a) {
            var n = a("Ql8l");
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
        "0Oxh": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("H1WH"),
                i = a("17x9"),
                s = a.n(i),
                l = a("FKJl"),
                c = a("XTAU"),
                u = a("oQ+7"),
                p = a("E8Bj"),
                f = a("Xst1"),
                d = a.n(f),
                m = a("SY/F"),
                h = a.n(m),
                _ = a("qnYv"),
                y = a("lmLo"),
                g = a("ca/f");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                b = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: C(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == v(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function C(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = E(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function E(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, x(w.prototype), l(w.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new w(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, x(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function x(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function w(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function i(e) {
                            x(o, n, r, i, s, "next", e)
                        }

                        function s(e) {
                            x(o, n, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function C(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = O(e);
                    if (t) {
                        var r = O(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return N(this, a)
                }
            }

            function N(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return j(e)
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && E(e, t)
                }(m, e);
                var t, a, n, i, s, p, f = k(m);

                function m(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, m), (t = f.call(this, e)).state = {
                        inProgress: !1,
                        succeeded: !1,
                        isGroup: !1
                    }, t.checkSessionStatus = t.checkSessionStatus.bind(j(t)), t.handleUpgrade = t.handleUpgrade.bind(j(t)), t
                }
                return t = m, (a = [{
                    key: "componentDidMount",
                    value: (p = w(b().mark((function e() {
                        return b().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("cannot handle stripe checkout success without a user");
                                case 5:
                                    this.setState({
                                        inProgress: !0
                                    }), this.checkSessionStatus();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return p.apply(this, arguments)
                    })
                }, {
                    key: "handleUpgrade",
                    value: (s = w(b().mark((function e() {
                        var t = this;
                        return b().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    _.a.post("/api/subscriptions/checkout-sessions/completions").then((function(e) {
                                        t.setState({
                                            inProgress: !1,
                                            succeeded: !0,
                                            isGroup: e.data.isGroup
                                        })
                                    })).catch((function(e) {
                                        t.setState({
                                            inProgress: !1,
                                            succeeded: !1,
                                            errorMessage: "Something went wrong (".concat(e.response.status, ") while upgrading your account.  Please contact support and do not try again, as you will likely incur duplicate charges.")
                                        }), Object(l.b)("error handling upgrading account", e)
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "checkSessionStatus",
                    value: (i = w(b().mark((function e() {
                        var t = this;
                        return b().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    _.a.get("/api/subscriptions/checkout-sessions").then((function(e) {
                                        "paid" === e.data.paymentStatus ? t.handleUpgrade() : setTimeout((function() {
                                            t.checkSessionStatus()
                                        }), 3e3)
                                    })).catch((function(e) {
                                        404 === e.response.status ? t.setState({
                                            inProgress: !1,
                                            succeeded: !1,
                                            errorMessage: "It looks like you reached this page in error.  Please return to the dashboard!"
                                        }) : (t.setState({
                                            inProgress: !1,
                                            succeeded: !1,
                                            errorMessage: "Something went wrong (".concat(e.response.status, ") while while checking your payment status.  Please do not try again, and contact support.")
                                        }), Object(l.b)("checking payment status", e))
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: o.isMobile ? d.a.mBody : d.a.body
                        }, r.a.createElement(c.a, {
                            title: "Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), r.a.createElement(u.a, null), r.a.createElement("div", {
                            className: d.a.slantBackground
                        }), r.a.createElement("div", {
                            className: d.a.regularBody
                        }, this.state.inProgress ? r.a.createElement(g.a, {
                            text: "Processing...",
                            loading: this.state.inProgress
                        }) : r.a.createElement("div", {
                            className: h.a.container
                        }, r.a.createElement("div", {
                            className: h.a.header
                        }, this.state.succeeded ? "Success!" : "Failed"), r.a.createElement("div", {
                            className: h.a.subheader
                        }, this.state.succeeded ? "Thank you!" : this.state.errorMessage), r.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, r.a.createElement(y.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            linkTo: this.state.isGroup ? "".concat("https://dashboard.blooket.com", "/group-plan") : "".concat("https://dashboard.blooket.com", "/my-sets")
                        }, this.state.isGroup ? "Group Plan" : "Dashboard")))))
                    }
                }]) && C(t.prototype, a), n && C(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), m
            }(r.a.Component);
            S.propTypes = {
                user: s.a.object
            }, t.a = Object(p.c)(S)
        },
        "0eKu": function(e, t, a) {
            var n = a("BNho");
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
        "1JjF": function(e, t, a) {
            var n = a("xppP");
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
        "1OWE": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___2mKcW-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;text-align:center;color:#3a3a3a}.styles__header___2iiY1-camelCase{font-size:50px;line-height:50px;margin:20px auto 10px;font-family:Titan One,sans-serif}.styles__subheader___2fOn5-camelCase{font-size:24px;margin:10px;font-family:Nunito,sans-serif}.styles__buttonContainer___2_7ch-camelCase{width:150px;margin:15px auto 25px}.styles__button___3aqPp-camelCase{margin:auto}.styles__buttonInside___3BM3k-camelCase{min-width:100px;height:35px;font-size:22px;padding:5px 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}@media only screen and (max-width:500px){.styles__container___2mKcW-camelCase{width:320px}}", ""]), t.locals = {
                container: "styles__container___2mKcW-camelCase",
                header: "styles__header___2iiY1-camelCase",
                subheader: "styles__subheader___2fOn5-camelCase",
                buttonContainer: "styles__buttonContainer___2_7ch-camelCase",
                button: "styles__button___3aqPp-camelCase",
                buttonInside: "styles__buttonInside___3BM3k-camelCase"
            }
        },
        "1yxc": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__centerWrapper___1fmAs-camelCase{width:100%;min-height:100%;display:flex;flex-direction:column;align-items:center}.styles__header___1XfK4-camelCase{font-size:85px;margin:50px auto 5px;font-family:Titan One,sans-serif}.styles__header___1XfK4-camelCase,.styles__subheader___19fPg-camelCase{width:90%;text-align:center;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__subheader___19fPg-camelCase{font-size:32px;margin:20px auto;font-family:Nunito,sans-serif}.styles__groupsHolder___cUbIf-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;max-width:1000px;margin:0 auto}.styles__groupButton___uZVWV-camelCase{margin:10px}.styles__groupButtonInside___33PPt-camelCase{min-width:200px;min-height:180px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__groupName___1cWzF-camelCase{font-size:22px;font-weight:700}.styles__groupPlans___2H7KI-camelCase{font-size:16px}.styles__groupPrice___1NjAI-camelCase{font-family:Titan One,sans-serif;font-size:52px}.styles__descContainer___20GLD-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1000px;background-color:#fff;border-radius:7px;font-family:Nunito,sans-serif;box-sizing:border-box;padding:10px 20px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);color:#3a3a3a;text-align:center;font-size:18px;margin:30px auto}.styles__detailsHolder___2IThg-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:75%;max-width:1000px;margin:10px auto}.styles__detailContainer___KYss5-camelCase{flex-direction:row;justify-content:flex-start;background-color:#fff;border-radius:7px;margin:10px;width:calc(48% - 20px);box-sizing:border-box;padding:10px 20px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__detailCheck___1_WIw-camelCase,.styles__detailContainer___KYss5-camelCase{display:flex;align-items:center}.styles__detailCheck___1_WIw-camelCase{width:40px;height:40px;border-radius:5px;justify-content:center;background-color:#4bc22e;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:28px}.styles__detailText___3KVj--camelCase{font-family:Nunito,sans-serif;font-size:26px;width:calc(100% - 50px);font-weight:700;margin-left:10px}@media screen and (max-width:1050px){.styles__header___1XfK4-camelCase{font-size:55px;line-height:57px;margin:20px auto 5px}.styles__descContainer___20GLD-camelCase{max-width:90%}.styles__detailsHolder___2IThg-camelCase{width:90%}.styles__detailContainer___KYss5-camelCase{width:calc(100% - 20px)}}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___1fmAs-camelCase",
                header: "styles__header___1XfK4-camelCase",
                subheader: "styles__subheader___19fPg-camelCase",
                groupsHolder: "styles__groupsHolder___cUbIf-camelCase",
                groupButton: "styles__groupButton___uZVWV-camelCase",
                groupButtonInside: "styles__groupButtonInside___33PPt-camelCase",
                groupName: "styles__groupName___1cWzF-camelCase",
                groupPlans: "styles__groupPlans___2H7KI-camelCase",
                groupPrice: "styles__groupPrice___1NjAI-camelCase",
                descContainer: "styles__descContainer___20GLD-camelCase",
                detailsHolder: "styles__detailsHolder___2IThg-camelCase",
                detailContainer: "styles__detailContainer___KYss5-camelCase",
                detailCheck: "styles__detailCheck___1_WIw-camelCase",
                detailText: "styles__detailText___3KVj--camelCase"
            }
        },
        "4Ao/": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("55Ip"),
                u = a("Ty5D"),
                p = a("wd/R"),
                f = a.n(p),
                d = a("TSYQ"),
                m = a.n(d),
                h = a("H1WH"),
                _ = a("FKJl"),
                y = a("E8Bj"),
                g = a("Xst1"),
                v = a.n(g),
                b = a("GZss"),
                x = a.n(b),
                w = a("i4/Q"),
                C = a("XTAU"),
                E = a("ca/f"),
                k = a("lmLo"),
                N = a("qnYv");

            function j(e) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                O = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new k(r || []);
                    return n(i, "_invoke", {
                        value: x(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(N([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == j(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function x(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = w(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    E(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function S(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function P(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function i(e) {
                            S(o, n, r, i, s, "next", e)
                        }

                        function s(e) {
                            S(o, n, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function B(e, t) {
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
                    var a, n = q(e);
                    if (t) {
                        var r = q(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return T(this, a)
                }
            }

            function T(e, t) {
                if (t && ("object" === j(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && I(e, t)
                }(s, e);
                var t, a, n, o, i = L(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = i.call(this, e)).state = {
                        user: null,
                        role: "",
                        date: "",
                        plan: "",
                        planEnd: "",
                        planRenew: !1,
                        loading: !1,
                        end: "",
                        hasPassword: ""
                    }, t.name = "", t.here = !0, t.switchRole = t.switchRole.bind(R(t)), t.editStripe = t.editStripe.bind(R(t)), t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: (o = P(O().mark((function e() {
                        var t, a = this;
                        return O().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(_.b)("SettingsPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.setState({
                                        user: t,
                                        role: t.role,
                                        date: f()(t.dateCreated).format("dddd, MMMM Do, YYYY"),
                                        hasPassword: t.hasPassword
                                    }), this.name = t.name, N.a.get("/api/users/plan").then((function(e) {
                                        a.setState({
                                            plan: e.data.plan,
                                            planEnd: f()(e.data.planEnd).format("dddd, MMMM Do, YYYY"),
                                            planRenew: e.data.planRenew
                                        })
                                    })).catch((function(e) {
                                        Object(_.b)(e)
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "switchRole",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        });
                        var t = "Teacher" === this.state.role ? "Student" : "Teacher";
                        N.a.put("/api/users/setrole", {
                            name: this.name,
                            role: t
                        }).then(P(O().mark((function a() {
                            var n;
                            return O().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return e.props.user.getLoggedIn(), a.next = 3, e.props.user.getData();
                                    case 3:
                                        if (n = a.sent, e.here) {
                                            a.next = 6;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 6:
                                        e.setState({
                                            loading: !1,
                                            role: t,
                                            user: n
                                        });
                                    case 7:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))).catch((function(t) {
                            Object(_.b)(t), e.setState({
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "editStripe",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        }), N.a.post("/api/users/stripe/billing").then((function(e) {
                            window.open(e.data.url, "_self")
                        })).catch((function(t) {
                            Object(_.b)(t), e.setState({
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: h.isMobile ? v.a.mBody : v.a.body
                        }, r.a.createElement(C.a, {
                            title: "Settings | Blooket",
                            desc: "View your settings and basic information about your account. You can also request a password reset or contact the help team here."
                        }), r.a.createElement(w.a, {
                            user: this.state.user,
                            page: "Settings"
                        }), r.a.createElement("div", {
                            className: v.a.profileBody
                        }, r.a.createElement("div", {
                            className: x.a.header
                        }, "Settings"), this.state.user ? r.a.createElement("div", {
                            className: x.a.mainContainer
                        }, r.a.createElement("div", {
                            className: x.a.infoContainer
                        }, r.a.createElement("div", {
                            className: x.a.headerRow
                        }, r.a.createElement("i", {
                            className: m()("fas fa-user", x.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: x.a.infoHeader
                        }, "Profile")), r.a.createElement("div", {
                            className: x.a.text
                        }, r.a.createElement("b", null, "Username:"), " ", this.state.user.name), r.a.createElement("div", {
                            className: x.a.text
                        }, r.a.createElement("b", null, "Email:"), " ", this.state.user.email), r.a.createElement("div", {
                            className: x.a.text
                        }, r.a.createElement("b", null, "Role:"), " ", this.state.role), r.a.createElement("div", {
                            className: x.a.text
                        }, r.a.createElement("b", null, "Joined:"), " ", this.state.date)), r.a.createElement("div", {
                            className: x.a.infoContainer
                        }, r.a.createElement("div", {
                            className: x.a.headerRow
                        }, r.a.createElement("i", {
                            className: m()("fas fa-clipboard-list", x.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: x.a.infoHeader
                        }, "Plan")), r.a.createElement("div", {
                            className: x.a.subscriptionText
                        }, r.a.createElement("div", {
                            className: x.a.blooketText
                        }, "Blooket"), r.a.createElement("div", {
                            className: x.a.planText,
                            style: {
                                color: this.state.user.hasPlus ? "#ff7b24" : "#0bc2cf"
                            }
                        }, this.state.plan)), this.state.user.hasPlus ? r.a.createElement("div", null, r.a.createElement("div", {
                            className: x.a.text
                        }, r.a.createElement("b", null, "End Date:"), " ", this.state.planEnd), this.state.planRenew ? r.a.createElement("div", {
                            className: x.a.link,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.editStripe
                        }, "Edit Subscription") : null) : r.a.createElement(k.a, {
                            color: "#ff7b24",
                            onClick: function() {
                                return e.props.history.push("/upgrade")
                            },
                            outsideClass: x.a.upgradeButton,
                            insideClass: x.a.upgradeButtonInside
                        }, "Upgrade Now!")), r.a.createElement("div", {
                            className: x.a.infoContainer
                        }, r.a.createElement("div", {
                            className: x.a.headerRow
                        }, r.a.createElement("i", {
                            className: m()("fas fa-pencil-alt", x.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: x.a.infoHeader
                        }, "Edit Info")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: x.a.link,
                            to: "/change/name"
                        }, "Change Name")), r.a.createElement("div", null, r.a.createElement("div", {
                            className: x.a.link,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.switchRole
                        }, "Teacher" === this.state.role ? "Switch to Student Account" : "Switch to Teacher Account")), this.state.hasPassword ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement("a", {
                            className: x.a.link,
                            href: "".concat("https://id.blooket.com", "/forgot")
                        }, "Request Password Reset")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: x.a.link,
                            to: "/change/email"
                        }, "Change Email"))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: x.a.link,
                            to: "/add-password"
                        }, "Add Blooket Password")), r.a.createElement("div", {
                            className: x.a.text
                        }, r.a.createElement("u", null, "Change Email"), " (Add a Password First)")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: x.a.link,
                            to: "/delete"
                        }, "Delete Account"))), r.a.createElement("div", {
                            className: x.a.infoContainer
                        }, r.a.createElement("div", {
                            className: x.a.headerRow
                        }, r.a.createElement("i", {
                            className: m()("fas fa-comments", x.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: x.a.infoHeader
                        }, "Social")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: x.a.link,
                            href: "https://twitter.com/playblooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-twitter-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Twitter (@PlayBlooket)")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: x.a.link,
                            href: "https://www.instagram.com/playblooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-instagram-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Instagram (@PlayBlooket)")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: x.a.link,
                            href: "https://www.facebook.com/PlayBlooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-facebook-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Facebook (@PlayBlooket)"))), r.a.createElement("div", {
                            className: x.a.infoContainer
                        }, r.a.createElement("div", {
                            className: x.a.headerRow
                        }, r.a.createElement("i", {
                            className: m()("fas fa-question-circle", x.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: x.a.infoHeader
                        }, "Support")), r.a.createElement("div", {
                            className: x.a.text
                        }, "Contact us at: ", r.a.createElement("a", {
                            className: x.a.link,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: x.a.link,
                            to: "/faq"
                        }, "Frequently Asked Questions"))), r.a.createElement("div", {
                            className: x.a.infoContainer
                        }, r.a.createElement("div", {
                            className: x.a.headerRow
                        }, r.a.createElement("i", {
                            className: m()("fas fa-lock", x.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: x.a.infoHeader
                        }, "Privacy")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: x.a.link,
                            href: "".concat("https://www.blooket.com", "/privacy")
                        }, "Privacy Policy")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: x.a.link,
                            href: "".concat("https://www.blooket.com", "/terms")
                        }, "Terms of Service")))) : null), this.state.loading || this.state.end ? r.a.createElement(E.a, {
                            text: this.state.end || "Processing...",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Success!" === this.state.end ? "Thanks!" : "Refresh",
                                click: function() {
                                    return e.setState({
                                        loading: !1,
                                        end: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.referPop ? r.a.createElement(E.a, {
                            text: this.state.loading ? "Loading..." : "Enter Referrer's Username:",
                            loading: this.state.loading,
                            stringValue: this.state.referInput,
                            stringChange: function(t) {
                                return e.setState({
                                    referInput: t.target.value
                                })
                            },
                            onSubmit: this.onRefer,
                            buttonOne: {
                                text: "Done",
                                click: this.onRefer,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return e.setState({
                                        referPop: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.referRes ? r.a.createElement(E.a, {
                            text: this.state.referRes,
                            buttonOne: {
                                text: "Done",
                                click: function() {
                                    return e.setState({
                                        referRes: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && B(t.prototype, a), n && B(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            F.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(y.c)(Object(u.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(F)))
        },
        "8qja": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return n
            })), a.d(t, "a", (function() {
                return r
            }));
            var n = !1,
                r = !0
        },
        "9ZgN": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___2J-JA-camelCase{position:fixed;width:100%;height:100%;left:0;top:0;background-color:#0bc2cf;overflow:hidden}.styles__blooksBackground___3oQ7Y-camelCase{position:absolute;width:200%;height:200%;top:50%;left:50%;background-size:550px;background-position:-100px -100px;opacity:.1;transform:translate(-50%,-50%) rotate(15deg)}.styles__fullContainer___3Wl6C-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:10px 5%}.styles__headerRow___3mqZi-camelCase{display:flex;flex-flow:row wrap;align-items:flex-end;width:100%;margin:10px auto 20px}.styles__headerLeft___1Hu3N-camelCase{width:400px;display:flex;flex-direction:column}.styles__headerLeftRow___8vTJL-camelCase{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;width:100%}.styles__headerBlookContainer___36zY5-camelCase{width:100px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__headerBlook___DdSHd-camelCase{width:100%;filter:drop-shadow(0 4px rgba(0,0,0,.2))}.styles__headerBanner___3Uuuk-camelCase,.styles__headerInfo___1oWlb-camelCase{display:flex;flex-direction:column}.styles__headerBanner___3Uuuk-camelCase{width:280px;height:62px;padding-bottom:6px;box-sizing:border-box;color:#fff;text-shadow:1px 1px rgba(0,0,0,.2);margin-bottom:15px;justify-content:center;align-items:center;position:relative;outline:none;cursor:pointer}.styles__headerFiller___iqimf-camelCase{border-radius:10px;background-color:#655dca;box-shadow:inset 0 -6px rgba(0,0,0,.2)}.styles__headerBg___12ogR-camelCase,.styles__headerFiller___iqimf-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1}.styles__headerName___1GBcl-camelCase{font-weight:700;font-size:26px;line-height:26px}.styles__headerTitle___24Ox2-camelCase{font-size:14px;line-height:14px}.styles__editHeaderContainer___2G1ji-camelCase{position:absolute;top:50%;left:50%;height:80%;max-height:80%;width:95%;max-width:400px;border-radius:10px;background-color:#9a49aa;box-sizing:border-box;padding:10px 10px 19px;box-shadow:inset 0 -9px rgba(0,0,0,.2),0 5px rgba(0,0,0,.25);transform:translate(-50%,-50%);display:flex;flex-direction:column}.styles__editHeaderRow___2ekWR-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-top:10px}.styles__editHeaderButtonInside___23gJo-camelCase{font-size:24px;font-weight:700;width:130px}.styles__editHeaderColumn___2ye6v-camelCase{width:100%;margin-top:10px;padding:5px;box-sizing:border-box;overflow-y:auto;display:flex;flex-direction:column}.styles__editHeaderColumn___2ye6v-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__editHeaderColumn___2ye6v-camelCase::-webkit-scrollbar-thumb,.styles__editHeaderColumn___2ye6v-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__editBanner___vkKiZ-camelCase{width:90%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;will-change:transform;margin:5px auto}.styles__editBannerImg___2eCH9-camelCase{width:100%}.styles__editTitle___-J8dv-camelCase{width:90%;height:35px;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;will-change:transform;background-color:rgba(0,0,0,.2);font-size:20px;font-weight:700;border-radius:5px;margin:5px auto}.styles__editTitle___-J8dv-camelCase,.styles__noBannersText___1CBfZ-camelCase{text-align:center;color:#fff}.styles__noBannersText___1CBfZ-camelCase{font-size:28px;width:100%;margin:100px auto}.styles__levelBarContainer___1xi-9-camelCase{width:280px;height:18px;position:relative}.styles__levelStarContainer___7ABEf-camelCase{width:40px;height:40px;position:absolute;left:-10px;top:calc(50% - 20px);display:flex;justify-content:center;align-items:center}.styles__levelStar___LHq_y-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__levelStarText___2Myxg-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-family:Titan One,sans-serif;-webkit-text-stroke:1px #3a3a3a;font-size:20px}.styles__levelBar___2SU0x-camelCase{width:100%;height:100%;border-radius:10px;overflow:hidden;background-color:#50425b}.styles__levelBarInside___3FLAG-camelCase{background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);height:100%;width:100%;transform-origin:left center}.styles__headerLeftButtons___3zGk0-camelCase{width:100%;margin-top:15px;display:flex;flex-flow:row wrap;align-items:center;justify-content:space-between}.styles__headerButtonInside___26e_U-camelCase{width:115px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;font-size:12px;font-weight:700}.styles__headerButtonIcon___1pOun-camelCase{font-size:12px;margin-right:5px;margin-left:5px}.styles__featuredBlooksContainer___OHnma-camelCase{margin:0 30px;height:156px;width:308px;position:relative}.styles__featuredBlooksBg___M5r9M-camelCase{width:100%;height:100%;position:absolute}.styles__contestContainer___6gpD9-camelCase{margin:20px 30px 0;height:90px;width:250px;background-color:#3a3a3a;padding-bottom:7px;box-sizing:border-box;box-shadow:inset 0 -7px rgba(0,0,0,.2);border-radius:7px;color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__contestHeader___ly_oJ-camelCase{font-family:Titan One,sans-serif;font-size:22px}.styles__contestDesc___38OO0-camelCase{font-size:12px;margin-top:4px;text-align:center}.styles__bottomContainer___3kOrb-camelCase{display:flex;flex-flow:row wrap;justify-content:space-between;width:100%;margin:40px auto 10px}.styles__left___a1a11-camelCase{width:320px}.styles__right___13qxc-camelCase{width:calc(100% - 340px)}.styles__customBlookContainer___3wjWt-camelCase{background-color:#40115f;width:100%;padding:5px 5px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2);display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center;color:#fff;position:relative}.styles__containerHeader___3xghM-camelCase,.styles__customBlookContainer___3wjWt-camelCase{border-radius:7px;box-sizing:border-box}.styles__containerHeader___3xghM-camelCase{position:absolute;top:-28px;left:-10px;height:45px;background-color:#ef7426;padding:4px 4px 8px;box-shadow:0 4px rgba(0,0,0,.2),inset 0 -4px rgba(0,0,0,.2)}.styles__containerHeaderInside___2omQm-camelCase{height:100%;width:100%;box-sizing:border-box;background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);padding:0 15px;border-radius:5px;text-shadow:-1px -1px 0 #646464,1px -1px 0 #646464,-1px 1px 0 #646464,2px 2px 0 #646464;font-family:Titan One,sans-serif;color:#fff;font-size:26px}.styles__containerHeaderInside___2omQm-camelCase,.styles__noBlookContainer___1azSz-camelCase{display:flex;justify-content:center;align-items:center}.styles__noBlookContainer___1azSz-camelCase{width:18%;height:175px;font-size:16px;font-weight:700;opacity:.6;flex-direction:column;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__noBlookContainer___1azSz-camelCase:hover{transform:scale(.95)}.styles__noBlookIcon___HAmDA-camelCase{font-size:40px;margin-bottom:10px}.styles__blookContainer___1RJ4W-camelCase{width:18%;height:175px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__customBlook___1I-NI-camelCase{width:75%;max-width:110px;margin-bottom:5px}.styles__customIconRow___3FyUU-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:80%;margin-top:0;height:0;overflow:hidden;transition:.2s}.styles__blookContainer___1RJ4W-camelCase:hover>.styles__customIconRow___3FyUU-camelCase{height:20px;margin-top:7px}.styles__customIcon___2AL28-camelCase{width:20px;height:20px;display:flex;justify-content:center;align-items:center;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;opacity:.6;transition:.2s}.styles__customIcon___2AL28-camelCase:hover{opacity:1}.styles__blookUsageContainer___1skDN-camelCase{border-radius:7px;background-color:#9a49aa;width:100%;padding:30px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;position:relative}.styles__blookUsageRow___3BmOZ-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:45px}.styles__blookUsageBlook___20QoJ-camelCase{width:36px}.styles__blookUsageBarContainer___3he3D-camelCase{width:calc(100% - 50px);height:26px}.styles__blookUsageBar___iYjir-camelCase{width:100%;height:100%;transform-origin:left center;background:linear-gradient(transparent,transparent 50%,rgba(0,0,0,.1) 50.01%,rgba(0,0,0,.1));box-shadow:0 4px rgba(0,0,0,.3)}.styles__blookUsageScale___2g-Ky-camelCase{width:calc(100% - 40px);height:25px;margin-left:auto;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.styles__blookUsageNum___1v4U8-camelCase{font-size:12px;color:#fff;width:25px;text-align:center}.styles__blookUsageScaleBar___3w1PT-camelCase{background-color:#fff;height:3px;width:calc(100% - 45px)}.styles__blookUsageText___3s235-camelCase{width:calc(100% - 50px);margin-left:auto;margin-top:-5px;font-size:14px;text-align:center;color:#fff}.styles__historyContainer___kQ6kc-camelCase{background-color:#9a49aa;padding:30px 15px 16px;position:relative;margin:40px 0}.styles__historyContainer___kQ6kc-camelCase,.styles__historyGameContainer___1ncNG-camelCase{border-radius:7px;width:100%;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box}.styles__historyGameContainer___1ncNG-camelCase{background-color:#7a039d;margin:5px 0;padding:5px 10px 11px;display:flex;flex-direction:row;align-items:center;color:#fff}.styles__historyBlook___3dMsx-camelCase{width:32px}.styles__historyInfo___11Lo0-camelCase{margin:0 7px;display:flex;flex-direction:column;justify-content:center;font-size:14px}.styles__historyName___3REcG-camelCase{font-size:16px;font-weight:700}.styles__historyNothing___3Js4--camelCase{width:100%;text-align:center;font-size:20px;color:#fff;font-weight:700}.styles__gameStatContainer___lqtJn-camelCase{display:flex;flex-direction:row;align-items:center;height:100%;margin-left:auto}.styles__gameStatText___2PxtE-camelCase{font-weight:700;margin-right:5px}.styles__gameStatText___2PxtE-camelCase,.styles__snowIcon___c3oRi-camelCase{font-size:16px}.styles__fossilIcon___3JBcz-camelCase{font-size:14px;transform:rotate(-45deg)}.styles__gameStatImg___205th-camelCase{width:22px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__gameStatBlook___1Y-8C-camelCase{width:26px}.styles__pointsText___2tau--camelCase{font-size:16px;font-weight:700;text-align:right;margin:auto 0 auto auto}.styles__statsContainer___QnrRB-camelCase{border-radius:7px;background-color:#40115f;width:100%;padding:15px 5px 11px;margin:40px 0;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;color:#fff;position:relative}.styles__statsWrapper___r9VCh-camelCase,.styles__topStats___3qffP-camelCase{width:100%;display:flex;flex-flow:row wrap;justify-content:space-evenly}.styles__statContainer___QKuOF-camelCase{border-radius:7px;background-color:#9a49aa;margin:10px;width:200px;padding:5px 5px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__statTitle___z4wSV-camelCase{color:#fff;font-size:16px}.styles__statNum___5RYSd-camelCase{font-family:Titan One,sans-serif;color:#fff;font-size:28px}.styles__statImg___3DBXt-camelCase{width:50px;transform:translateY(-50%) rotate(-15deg)}.styles__statImg___3DBXt-camelCase,.styles__tokenImg___a08fY-camelCase{position:absolute;top:65%;left:-20px;filter:drop-shadow(0 0 6px rgba(0,0,0,.2))}.styles__tokenImg___a08fY-camelCase{width:44px;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translateY(-50%) rotate(-35deg)}@media only screen and (max-width:1150px){.styles__bottomContainer___3kOrb-camelCase{flex-flow:row-reverse wrap}.styles__left___a1a11-camelCase,.styles__right___13qxc-camelCase{width:100%}}@media only screen and (max-width:650px){.styles__headerRow___3mqZi-camelCase{justify-content:center}.styles__noBlookContainer___1azSz-camelCase{width:40%;height:135px;font-size:14px;margin:0 auto}.styles__noBlookIcon___HAmDA-camelCase{font-size:32px;margin-bottom:7px}.styles__blookContainer___1RJ4W-camelCase{width:40%;height:135px;margin:0 auto}.styles__customBlook___1I-NI-camelCase{width:65%;max-width:80px}}@media only screen and (max-width:450px){.styles__headerLeftRow___8vTJL-camelCase{flex-direction:column;align-items:center}.styles__headerBlookContainer___36zY5-camelCase{margin-bottom:15px}.styles__headerLeftButtons___3zGk0-camelCase{margin-top:20px;justify-content:space-evenly}.styles__headerButton___36TRh-camelCase{margin:5px}}", ""]), t.locals = {
                background: "styles__background___2J-JA-camelCase",
                blooksBackground: "styles__blooksBackground___3oQ7Y-camelCase",
                fullContainer: "styles__fullContainer___3Wl6C-camelCase",
                headerRow: "styles__headerRow___3mqZi-camelCase",
                headerLeft: "styles__headerLeft___1Hu3N-camelCase",
                headerLeftRow: "styles__headerLeftRow___8vTJL-camelCase",
                headerBlookContainer: "styles__headerBlookContainer___36zY5-camelCase",
                headerBlook: "styles__headerBlook___DdSHd-camelCase",
                headerBanner: "styles__headerBanner___3Uuuk-camelCase",
                headerInfo: "styles__headerInfo___1oWlb-camelCase",
                headerFiller: "styles__headerFiller___iqimf-camelCase",
                headerBg: "styles__headerBg___12ogR-camelCase",
                headerName: "styles__headerName___1GBcl-camelCase",
                headerTitle: "styles__headerTitle___24Ox2-camelCase",
                editHeaderContainer: "styles__editHeaderContainer___2G1ji-camelCase",
                editHeaderRow: "styles__editHeaderRow___2ekWR-camelCase",
                editHeaderButtonInside: "styles__editHeaderButtonInside___23gJo-camelCase",
                editHeaderColumn: "styles__editHeaderColumn___2ye6v-camelCase",
                editBanner: "styles__editBanner___vkKiZ-camelCase",
                editBannerImg: "styles__editBannerImg___2eCH9-camelCase",
                editTitle: "styles__editTitle___-J8dv-camelCase",
                noBannersText: "styles__noBannersText___1CBfZ-camelCase",
                levelBarContainer: "styles__levelBarContainer___1xi-9-camelCase",
                levelStarContainer: "styles__levelStarContainer___7ABEf-camelCase",
                levelStar: "styles__levelStar___LHq_y-camelCase",
                levelStarText: "styles__levelStarText___2Myxg-camelCase",
                levelBar: "styles__levelBar___2SU0x-camelCase",
                levelBarInside: "styles__levelBarInside___3FLAG-camelCase",
                headerLeftButtons: "styles__headerLeftButtons___3zGk0-camelCase",
                headerButtonInside: "styles__headerButtonInside___26e_U-camelCase",
                headerButtonIcon: "styles__headerButtonIcon___1pOun-camelCase",
                featuredBlooksContainer: "styles__featuredBlooksContainer___OHnma-camelCase",
                featuredBlooksBg: "styles__featuredBlooksBg___M5r9M-camelCase",
                contestContainer: "styles__contestContainer___6gpD9-camelCase",
                contestHeader: "styles__contestHeader___ly_oJ-camelCase",
                contestDesc: "styles__contestDesc___38OO0-camelCase",
                bottomContainer: "styles__bottomContainer___3kOrb-camelCase",
                left: "styles__left___a1a11-camelCase",
                right: "styles__right___13qxc-camelCase",
                customBlookContainer: "styles__customBlookContainer___3wjWt-camelCase",
                containerHeader: "styles__containerHeader___3xghM-camelCase",
                containerHeaderInside: "styles__containerHeaderInside___2omQm-camelCase",
                noBlookContainer: "styles__noBlookContainer___1azSz-camelCase",
                noBlookIcon: "styles__noBlookIcon___HAmDA-camelCase",
                blookContainer: "styles__blookContainer___1RJ4W-camelCase",
                customBlook: "styles__customBlook___1I-NI-camelCase",
                customIconRow: "styles__customIconRow___3FyUU-camelCase",
                customIcon: "styles__customIcon___2AL28-camelCase",
                blookUsageContainer: "styles__blookUsageContainer___1skDN-camelCase",
                blookUsageRow: "styles__blookUsageRow___3BmOZ-camelCase",
                blookUsageBlook: "styles__blookUsageBlook___20QoJ-camelCase",
                blookUsageBarContainer: "styles__blookUsageBarContainer___3he3D-camelCase",
                blookUsageBar: "styles__blookUsageBar___iYjir-camelCase",
                blookUsageScale: "styles__blookUsageScale___2g-Ky-camelCase",
                blookUsageNum: "styles__blookUsageNum___1v4U8-camelCase",
                blookUsageScaleBar: "styles__blookUsageScaleBar___3w1PT-camelCase",
                blookUsageText: "styles__blookUsageText___3s235-camelCase",
                historyContainer: "styles__historyContainer___kQ6kc-camelCase",
                historyGameContainer: "styles__historyGameContainer___1ncNG-camelCase",
                historyBlook: "styles__historyBlook___3dMsx-camelCase",
                historyInfo: "styles__historyInfo___11Lo0-camelCase",
                historyName: "styles__historyName___3REcG-camelCase",
                historyNothing: "styles__historyNothing___3Js4--camelCase",
                gameStatContainer: "styles__gameStatContainer___lqtJn-camelCase",
                gameStatText: "styles__gameStatText___2PxtE-camelCase",
                snowIcon: "styles__snowIcon___c3oRi-camelCase",
                fossilIcon: "styles__fossilIcon___3JBcz-camelCase",
                gameStatImg: "styles__gameStatImg___205th-camelCase",
                gameStatBlook: "styles__gameStatBlook___1Y-8C-camelCase",
                pointsText: "styles__pointsText___2tau--camelCase",
                statsContainer: "styles__statsContainer___QnrRB-camelCase",
                statsWrapper: "styles__statsWrapper___r9VCh-camelCase",
                topStats: "styles__topStats___3qffP-camelCase",
                statContainer: "styles__statContainer___QKuOF-camelCase",
                statTitle: "styles__statTitle___z4wSV-camelCase",
                statNum: "styles__statNum___5RYSd-camelCase",
                statImg: "styles__statImg___3DBXt-camelCase",
                tokenImg: "styles__tokenImg___a08fY-camelCase",
                headerButton: "styles__headerButton___36TRh-camelCase"
            }
        },
        BNho: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainRow___3T58f-camelCase{margin:20px 5%;width:90%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.styles__leftColumn___1iY1q-camelCase{background-color:#fff;border-radius:7px;width:330px;padding:15px 15px 22px;box-sizing:border-box;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:column;margin-bottom:20px}.styles__coverFillerContainer___3xH4j-camelCase,.styles__coverImageContainer___3mlyV-camelCase{width:100%;height:205px;margin:0 auto 10px;background-color:#333;border-radius:7px;overflow:hidden;display:flex;justify-content:center;align-items:center}.styles__coverImage___1sSHa-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__coverFillerContainer___3xH4j-camelCase{background-color:#0bc2cf}.styles__coverFillerImage___23G64-camelCase{margin:auto;width:80%;height:80%;max-width:400px;-o-object-fit:contain;object-fit:contain}.styles__headerTitle___gKy2Z-camelCase{font-size:30px;line-height:32px;font-weight:700}.styles__headerDesc___3OfnC-camelCase{font-size:18px;overflow-x:hidden;word-wrap:break-word;margin:7px 0}.styles__headerBottomContainer___2HQcH-camelCase{display:flex;flex-direction:row;align-items:center;height:30px;margin-top:auto}.styles__headerAuthorIcon___1fAWR-camelCase{font-size:18px;margin-right:7px}.styles__headerAuthorText___2jrIU-camelCase{font-family:Nunito,sans-serif;font-size:16px;color:#0bc2cf}.styles__deleteButton___IQMHR-camelCase{font-family:Nunito,sans-serif;font-size:20px;margin-left:15px;color:#cf180b;text-decoration:underline;cursor:pointer}.styles__headerStatsWrapper___34sB5-camelCase{width:100%;display:flex;flex-direction:row;align-items:center}.styles__headerStat___2_MCT-camelCase{font-size:18px;font-weight:700}.styles__headerStatDivider___3L50s-camelCase{font-size:10px;margin:0 5px;opacity:.8}.styles__headerStatSmall___3isMp-camelCase{font-size:12px;opacity:.8}.styles__headerButtonRow___15T4p-camelCase{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;margin:20px 0 10px}.styles__soloButton___lVCzA-camelCase{box-shadow:0 0 4px rgba(0,0,0,.15)}.styles__headerButtonInside___1A20f-camelCase{width:100px;height:35px;display:flex;flex-direction:row;align-items:center;justify-content:center;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:22px;font-weight:700}.styles__noHostText___No8Mu-camelCase{width:140px;font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;text-align:center}.styles__hostIcon___3BjGq-camelCase{font-size:20px;margin-right:7px}.styles__smallButtonsContainer___8783W-camelCase{width:100%;margin:5px 0;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.styles__smallButton___2fnLv-camelCase{width:90px;height:26px;margin:5px;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:12px;background-color:rgba(0,0,0,.1);border-radius:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;transition:.2s}.styles__smallButton___2fnLv-camelCase:focus,.styles__smallButton___2fnLv-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__smallIcon___2syMb-camelCase{font-size:10px;margin-right:5px}.styles__questionSection___3vBL6-camelCase{display:flex;flex-direction:column;width:calc(100% - 350px)}.styles__questionSectionTop___6Y00i-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:10px;width:310px}.styles__numQuestions___2_rh8-camelCase{width:160px;padding:10px 10px 17px;box-sizing:border-box;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#fff;border-radius:7px;font-size:18px;font-weight:700;text-align:center}.styles__showAnswersButtonInside___3pgzn-camelCase{width:120px;height:30px;display:flex;align-items:center;justify-content:center;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:16px;font-weight:700}.styles__questionContainer___2YC9r-camelCase{width:100%;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:10px 0;background-color:#fff;border-radius:7px;display:flex;flex-direction:column;transition:.2s}.styles__questionContainer___2YC9r-camelCase:hover{transform:scale(.98)}.styles__questionRow___381Uy-camelCase{justify-content:space-between;min-height:120px;width:100%;position:relative}.styles__questionInfoRow___3Dw_X-camelCase,.styles__questionRow___381Uy-camelCase{display:flex;flex-direction:row}.styles__questionInfoRow___3Dw_X-camelCase{position:absolute;bottom:5px;right:3px;height:22px}.styles__questionInfo___2KDqj-camelCase{margin:0 2px;background-color:rgba(0,0,0,.6);padding:0 7px;border-radius:5px;color:#fff;font-size:12px;height:100%}.styles__questionImageContainer___tYoyI-camelCase,.styles__questionInfo___2KDqj-camelCase{display:flex;justify-content:center;align-items:center}.styles__questionImageContainer___tYoyI-camelCase{width:165px;min-width:165px;height:120px;background-color:#333;overflow:hidden;border-top-right-radius:7px;border-bottom-right-radius:7px;margin:auto 0;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__questionImage___33pJw-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__questionTextContainer___2Mp1o-camelCase{display:flex;flex-direction:column;padding:5px 15px;flex-grow:1;box-sizing:border-box;outline:none;cursor:pointer}.styles__questionNum___2n7LQ-camelCase{font-size:18px;margin-bottom:5px;font-weight:700}.styles__questionTextRow___3ZAIS-camelCase{display:flex;flex-direction:row;align-items:center;min-height:70px}.styles__questionText___1gLDI-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;word-wrap:break-word;white-space:pre-line;margin-bottom:auto}.styles__questionFunc___2kG17-camelCase{margin:auto 0;width:120px;display:flex;justify-content:center;align-items:center}.styles__qMathField___BT4-f-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:16px!important}.styles__answerContainer___3A1qQ-camelCase{width:100%;display:flex;flex-flow:row wrap;justify-content:space-between;padding:5px 10px;box-sizing:border-box;outline:none;cursor:pointer}.styles__answer___gD6Vh-camelCase{min-height:60px;padding:5px 5px 10px;box-shadow:inset 0 -5px rgba(0,0,0,.2);margin:5px 0;border-radius:7px;width:48%;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__answerIcon___Rm_Gi-camelCase{font-size:28px;color:#fff;width:45px;text-align:center}.styles__answerMediaContainer___2EASb-camelCase{width:calc(100% - 35px);text-align:center;display:flex;justify-content:center;align-items:center}.styles__answerText___37qIQ-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#fff;word-wrap:break-word;overflow-x:hidden}.styles__answerImg___3DXal-camelCase{margin:auto;max-width:100%;max-height:80px;-o-object-fit:contain;object-fit:contain}.styles__answerImg___3DXal-camelCase,.styles__mathField___2R8OP-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mathField___2R8OP-camelCase{cursor:pointer!important;color:#fff;border-color:#fff;font-size:18px!important}.styles__faded___2yQHe-camelCase{opacity:.5}.styles__bottomSpacer___3BJoH-camelCase{height:30px}.styles__reportModal___1_Bcq-camelCase{display:block;position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6)}.styles__reportContainer___1F_dD-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__reportHeader___1WfcX-camelCase{margin:25px auto 15px}.styles__duplicateHeader___1aNN0-camelCase,.styles__reportHeader___1WfcX-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;color:#3a3a3a}.styles__duplicateHeader___1aNN0-camelCase{margin:25px auto}.styles__reportText___3Qmub-camelCase{margin:10px 25px 15px}.styles__reportInput___q6fb9-camelCase,.styles__reportText___3Qmub-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a}.styles__reportInput___q6fb9-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:10px auto;padding:15px;width:400px;height:100px;text-align:left;outline:none;resize:none}.styles__reportInput___q6fb9-camelCase:focus{border-color:#0bc2cf}.styles__reportInputFilled___2whfm-camelCase{border-color:#3a3a3a}.styles__reportButtonContainer___3Fkhm-camelCase{width:100%;margin-top:15px;margin-bottom:25px;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__reportYesButton___22wrf-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportYesButton___22wrf-camelCase:focus,.styles__reportYesButton___22wrf-camelCase:hover{border-color:#ce1313;color:#ce1313;font-weight:700}.styles__reportNoButton___3SmKY-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportNoButton___3SmKY-camelCase:focus,.styles__reportNoButton___3SmKY-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf;font-weight:700}.styles__smallScreen___28ZM3-camelCase{display:none}@media only screen and (max-width:600px){.styles__bigScreen___lcywH-camelCase{display:none}.styles__smallScreen___28ZM3-camelCase{display:flex}}.styles__highlight___1Mzyo-camelCase{background-color:#ff0}@media only screen and (max-width:1150px){.styles__mainRow___3T58f-camelCase{margin:20px 2.5%;width:95%;flex-direction:column;align-items:center}.styles__leftColumn___1iY1q-camelCase,.styles__questionSection___3vBL6-camelCase{width:100%}}@media only screen and (max-width:600px){.styles__questionRow___381Uy-camelCase{flex-direction:column;align-items:center}.styles__questionImageContainer___tYoyI-camelCase{width:100%;background-color:transparent!important;border-top-right-radius:0;border-bottom-right-radius:0;margin:0}.styles__questionTextContainer___2Mp1o-camelCase{width:100%}.styles__questionImage___33pJw-camelCase{-o-object-fit:contain;object-fit:contain}.styles__answer___gD6Vh-camelCase{width:100%;margin:2px 0}}", ""]), t.locals = {
                mainRow: "styles__mainRow___3T58f-camelCase",
                leftColumn: "styles__leftColumn___1iY1q-camelCase",
                coverFillerContainer: "styles__coverFillerContainer___3xH4j-camelCase",
                coverImageContainer: "styles__coverImageContainer___3mlyV-camelCase",
                coverImage: "styles__coverImage___1sSHa-camelCase",
                coverFillerImage: "styles__coverFillerImage___23G64-camelCase",
                headerTitle: "styles__headerTitle___gKy2Z-camelCase",
                headerDesc: "styles__headerDesc___3OfnC-camelCase",
                headerBottomContainer: "styles__headerBottomContainer___2HQcH-camelCase",
                headerAuthorIcon: "styles__headerAuthorIcon___1fAWR-camelCase",
                headerAuthorText: "styles__headerAuthorText___2jrIU-camelCase",
                deleteButton: "styles__deleteButton___IQMHR-camelCase",
                headerStatsWrapper: "styles__headerStatsWrapper___34sB5-camelCase",
                headerStat: "styles__headerStat___2_MCT-camelCase",
                headerStatDivider: "styles__headerStatDivider___3L50s-camelCase",
                headerStatSmall: "styles__headerStatSmall___3isMp-camelCase",
                headerButtonRow: "styles__headerButtonRow___15T4p-camelCase",
                soloButton: "styles__soloButton___lVCzA-camelCase",
                headerButtonInside: "styles__headerButtonInside___1A20f-camelCase",
                noHostText: "styles__noHostText___No8Mu-camelCase",
                hostIcon: "styles__hostIcon___3BjGq-camelCase",
                smallButtonsContainer: "styles__smallButtonsContainer___8783W-camelCase",
                smallButton: "styles__smallButton___2fnLv-camelCase",
                smallIcon: "styles__smallIcon___2syMb-camelCase",
                questionSection: "styles__questionSection___3vBL6-camelCase",
                questionSectionTop: "styles__questionSectionTop___6Y00i-camelCase",
                numQuestions: "styles__numQuestions___2_rh8-camelCase",
                showAnswersButtonInside: "styles__showAnswersButtonInside___3pgzn-camelCase",
                questionContainer: "styles__questionContainer___2YC9r-camelCase",
                questionRow: "styles__questionRow___381Uy-camelCase",
                questionInfoRow: "styles__questionInfoRow___3Dw_X-camelCase",
                questionInfo: "styles__questionInfo___2KDqj-camelCase",
                questionImageContainer: "styles__questionImageContainer___tYoyI-camelCase",
                questionImage: "styles__questionImage___33pJw-camelCase",
                questionTextContainer: "styles__questionTextContainer___2Mp1o-camelCase",
                questionNum: "styles__questionNum___2n7LQ-camelCase",
                questionTextRow: "styles__questionTextRow___3ZAIS-camelCase",
                questionText: "styles__questionText___1gLDI-camelCase",
                questionFunc: "styles__questionFunc___2kG17-camelCase",
                qMathField: "styles__qMathField___BT4-f-camelCase",
                answerContainer: "styles__answerContainer___3A1qQ-camelCase",
                answer: "styles__answer___gD6Vh-camelCase",
                answerIcon: "styles__answerIcon___Rm_Gi-camelCase",
                answerMediaContainer: "styles__answerMediaContainer___2EASb-camelCase",
                answerText: "styles__answerText___37qIQ-camelCase",
                answerImg: "styles__answerImg___3DXal-camelCase",
                mathField: "styles__mathField___2R8OP-camelCase",
                faded: "styles__faded___2yQHe-camelCase",
                bottomSpacer: "styles__bottomSpacer___3BJoH-camelCase",
                reportModal: "styles__reportModal___1_Bcq-camelCase",
                reportContainer: "styles__reportContainer___1F_dD-camelCase",
                reportHeader: "styles__reportHeader___1WfcX-camelCase",
                duplicateHeader: "styles__duplicateHeader___1aNN0-camelCase",
                reportText: "styles__reportText___3Qmub-camelCase",
                reportInput: "styles__reportInput___q6fb9-camelCase",
                reportInputFilled: "styles__reportInputFilled___2whfm-camelCase",
                reportButtonContainer: "styles__reportButtonContainer___3Fkhm-camelCase",
                reportYesButton: "styles__reportYesButton___22wrf-camelCase",
                reportNoButton: "styles__reportNoButton___3SmKY-camelCase",
                smallScreen: "styles__smallScreen___28ZM3-camelCase",
                bigScreen: "styles__bigScreen___lcywH-camelCase",
                highlight: "styles__highlight___1Mzyo-camelCase"
            }
        },
        EygS: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("Ty5D"),
                i = a("H1WH"),
                s = a("17x9"),
                l = a.n(s),
                c = a("TSYQ"),
                u = a.n(c),
                p = a("FKJl"),
                f = a("Xst1"),
                d = a.n(f),
                m = a("/BoV"),
                h = a.n(m),
                _ = a("XTAU"),
                y = a("oQ+7"),
                g = a("ca/f"),
                v = a("E8Bj"),
                b = a("LHn/"),
                x = a("qnYv"),
                w = a("lmLo"),
                C = a("74sb");

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                k = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: x(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == E(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function x(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = w(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function N(e, t) {
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
                    t % 2 ? N(Object(a), !0).forEach((function(t) {
                        O(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function O(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function S(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function P(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function i(e) {
                            S(o, n, r, i, s, "next", e)
                        }

                        function s(e) {
                            S(o, n, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function B(e, t) {
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
                    var a, n = R(e);
                    if (t) {
                        var r = R(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return T(this, a)
                }
            }

            function T(e, t) {
                if (t && ("object" === E(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function R(e) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var q = function(e) {
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
                }(c, e);
                var t, a, n, s, l = L(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = l.call(this, e)).state = {
                        plan: {},
                        groupName: "",
                        pdf: null,
                        loading: !1
                    }, t.here = !0, t.groupId = e.match.params.id, t
                }
                return t = c, (a = [{
                    key: "componentDidMount",
                    value: (s = P(k().mark((function e() {
                        var t, a = this;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (e.sent && this.groupId) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("RenewGroupPage cannot proceed without user and groupId"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    return e.next = 9, new Promise((function(e) {
                                        x.a.get("/api/groups", {
                                            params: {
                                                id: a.groupId
                                            }
                                        }).then(function() {
                                            var t = P(k().mark((function t(a) {
                                                var n, r, o, i, s;
                                                return k().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (n = null, "Custom" !== a.data.planName) {
                                                                t.next = 5;
                                                                break
                                                            }
                                                            n = {
                                                                name: "Custom",
                                                                numPlans: a.data.numPlans
                                                            }, t.next = 18;
                                                            break;
                                                        case 5:
                                                            return t.next = 7, x.a.get("/api/subscriptions/group-plans");
                                                        case 7:
                                                            if (200 === (r = t.sent).status) {
                                                                t.next = 10;
                                                                break
                                                            }
                                                            throw new Error("cannot proceed without group plans");
                                                        case 10:
                                                            if ((o = r.data.plans) && 0 !== o.length) {
                                                                t.next = 13;
                                                                break
                                                            }
                                                            throw new Error("cannot proceed without valid group plans");
                                                        case 13:
                                                            if (i = decodeURIComponent(Object(C.h)("groupPlanName")), (s = o.filter((function(e) {
                                                                    return e.name === i
                                                                }))) && 0 !== s.length) {
                                                                t.next = 17;
                                                                break
                                                            }
                                                            throw new Error("could not find a name named ".concat(i));
                                                        case 17:
                                                            n = s[0];
                                                        case 18:
                                                            e(j(j({}, a.data), {}, {
                                                                plan: n
                                                            }));
                                                        case 19:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()).catch((function(t) {
                                            Object(p.b)(t), e()
                                        }))
                                    }));
                                case 9:
                                    if (t = e.sent, this.here) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 12:
                                    if (t) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/group-plan"));
                                case 14:
                                    this.setState({
                                        plan: t.plan,
                                        groupName: t.groupName
                                    }), x.a.put("/api/groups/quote", {
                                        quote: {
                                            logo: b.a.basic.blooket180,
                                            from: "Blooket LLC\nBen Stewart\nben@blooket.com\n409 S Ridge Ave,\nMiddletown, DE 19709",
                                            to: t.groupName,
                                            header: "QUOTE",
                                            items: [{
                                                name: "Blooket Plus: ".concat(t.plan.name, " Plan (Renewal)"),
                                                quantity: 1,
                                                unit_cost: t.plan.price,
                                                description: "".concat(t.plan.numPlans, " One-Year Plus Plans")
                                            }],
                                            notes: "If you have any questions, please email contact-us@blooket.com.\n\nAll quotes, invoices and purchases are subject to the Terms of Service of Blooket LLC unless previously agreed to in writing by the parties. The Terms of Service are located on the www.blooket.com website.  Purchasers agree to be bound by the Terms of Service and comply with the Privacy Policy provisions of the website at all times."
                                        }
                                    }).then((function(e) {
                                        a.setState({
                                            pdf: e.data.pdf
                                        })
                                    })).catch((function(e) {
                                        return Object(p.b)(e)
                                    }));
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return this.groupId ? r.a.createElement("div", {
                            className: i.isMobile ? d.a.mBody : d.a.body
                        }, r.a.createElement(_.a, {
                            title: "Group Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), r.a.createElement(y.a, null), r.a.createElement("div", {
                            className: d.a.slantBackground
                        }), r.a.createElement("div", {
                            className: u()(d.a.regularBody, h.a.bodyContainer)
                        }, this.state.pdf ? r.a.createElement("object", {
                            data: "data:application/pdf;base64,".concat(this.state.pdf),
                            title: "Blooket Invoice",
                            className: h.a.quote
                        }, r.a.createElement("a", {
                            className: h.a.downloadButton,
                            download: "BlooketInvoice.pdf",
                            href: "data:application/pdf;base64,".concat(this.state.pdf)
                        }, "Download PDF")) : null, r.a.createElement("div", {
                            className: h.a.leftColumn
                        }, r.a.createElement("div", {
                            className: h.a.textContainer
                        }, r.a.createElement("div", {
                            className: h.a.textBigHeader
                        }, this.state.groupName), r.a.createElement("div", {
                            className: h.a.bigText
                        }, "Blooket Plus: ".concat(this.state.plan.name, " Plan")), "".concat(this.state.plan.numPlans, " One-Year Plus Plans")), r.a.createElement("div", {
                            className: h.a.textContainer
                        }, r.a.createElement("div", {
                            className: h.a.textHeader
                        }, "Renew With Purchase Order"), "Upload your PO and we'll renew your plans immediately!", r.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, r.a.createElement(w.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            linkTo: "/upgrade/group/po?groupPlanName=".concat("Custom" === this.state.plan.name ? "Custom" : this.state.plan.name, "&n=").concat(encodeURIComponent(this.state.groupName), "&r=true")
                        }, "Renew With Purchase Order"))), r.a.createElement("div", {
                            className: h.a.textContainer
                        }, r.a.createElement("div", {
                            className: h.a.textHeader
                        }, "Have Questions or Need to Request our W-9?"), r.a.createElement("div", {
                            className: h.a.bigText
                        }, "Send us an email at: ", r.a.createElement("a", {
                            className: h.a.linkText,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com"))))), this.state.loading ? r.a.createElement(g.a, {
                            text: "Loading...",
                            loading: !0
                        }) : null) : r.a.createElement(o.a, {
                            to: "/group-plan"
                        })
                    }
                }]) && B(t.prototype, a), n && B(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(r.a.Component);
            q.propTypes = {
                match: l.a.object,
                history: l.a.object,
                user: l.a.object
            }, t.a = Object(v.c)(q)
        },
        FXJY: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__centerWrapper___14t8J-camelCase{width:550px;margin:20px auto;display:flex;flex-direction:column}.styles__container___23vKM-camelCase{box-sizing:border-box;padding:10px 15px 15px;background-color:#fff;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#3a3a3a}.styles__header___3rLVH-camelCase{font-size:36px;font-weight:700}.styles__subtext___3iGoD-camelCase{font-size:20px}.styles__inputHeader___vnd6d-camelCase{font-size:24px;font-weight:700}.styles__inputContainer___5nyy3-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;width:80%;height:30px;margin-bottom:10px;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__inputContainer___5nyy3-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___5nyy3-camelCase:focus-within{border-color:#0bc2cf}.styles__input___25PKw-camelCase{padding:5px 10px;border-radius:5px;box-sizing:border-box;width:100%;height:100%;font-size:16px;text-align:left;outline:none;border:none}.styles__input___25PKw-camelCase:-moz-placeholder,.styles__input___25PKw-camelCase:-ms-input-placeholder,.styles__input___25PKw-camelCase::-moz-placeholder,.styles__input___25PKw-camelCase::-webkit-input-placeholder{color:#999}.styles__inputFilled___3FEha-camelCase{border-color:#3a3a3a}.styles__inputError___2ijT8-camelCase{border-color:#ce1313}.styles__dropContainer___tZDyw-camelCase{height:200px;width:100%;box-sizing:border-box;border:2px dashed #666;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#3a3a3a;font-size:14px;margin-top:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__activeDropContainer___2TI6F-camelCase,.styles__dropContainer___tZDyw-camelCase:hover{background-color:rgba(11,194,207,.3)}.styles__dropIcon___2VuPy-camelCase{font-size:48px;margin-bottom:10px}.styles__dropHeader___151oh-camelCase{font-size:16px;font-weight:700}.styles__pdfRow___Jp-lE-camelCase{display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;margin-top:10px;font-size:20px;color:#3a3a3a;border-bottom:2px solid #0bc2cf}.styles__removeIcon___10i9e-camelCase{margin-right:10px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__removeIcon___10i9e-camelCase:hover{color:#0bc2cf}.styles__errorContainer___35u9C-camelCase{box-sizing:border-box;padding:10px 15px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2);background-color:#cf180b;border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#fff;display:flex;flex-direction:row}.styles__errorIcon___u9icy-camelCase{font-size:20px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-right:10px}.styles__submitButton___2-Wwm-camelCase{width:100%;margin:10px 0 30px}.styles__submitButtonInside___3ApjA-camelCase{height:40px;font-size:20px;font-weight:700}@media only screen and (max-width:600px){.styles__centerWrapper___14t8J-camelCase{width:90%}.styles__inputContainer___5nyy3-camelCase{width:95%}}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___14t8J-camelCase",
                container: "styles__container___23vKM-camelCase",
                header: "styles__header___3rLVH-camelCase",
                subtext: "styles__subtext___3iGoD-camelCase",
                inputHeader: "styles__inputHeader___vnd6d-camelCase",
                inputContainer: "styles__inputContainer___5nyy3-camelCase",
                input: "styles__input___25PKw-camelCase",
                inputFilled: "styles__inputFilled___3FEha-camelCase",
                inputError: "styles__inputError___2ijT8-camelCase",
                dropContainer: "styles__dropContainer___tZDyw-camelCase",
                activeDropContainer: "styles__activeDropContainer___2TI6F-camelCase",
                dropIcon: "styles__dropIcon___2VuPy-camelCase",
                dropHeader: "styles__dropHeader___151oh-camelCase",
                pdfRow: "styles__pdfRow___Jp-lE-camelCase",
                removeIcon: "styles__removeIcon___10i9e-camelCase",
                errorContainer: "styles__errorContainer___35u9C-camelCase",
                errorIcon: "styles__errorIcon___u9icy-camelCase",
                submitButton: "styles__submitButton___2-Wwm-camelCase",
                submitButtonInside: "styles__submitButtonInside___3ApjA-camelCase"
            }
        },
        GZss: function(e, t, a) {
            var n = a("yFhE");
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
        HR5N: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___20rdi-camelCase{height:100vh;width:150vw;background-color:#0bc2cf;box-shadow:inset 0 -7px rgba(0,0,0,.2);position:absolute;top:calc(-30vh + 55px);left:-25vw;transform:rotate(-10deg);z-index:-1}.styles__header___1Boll-camelCase{font-size:85px;margin:50px auto 25px;width:90%;text-align:center;font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__planContainer___3Cj3J-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:100%;margin:45px auto;max-width:1200px}.styles__plan___1OEy4-camelCase{width:350px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:10px;margin:15px;overflow:hidden;display:flex;flex-direction:column;position:relative}.styles__plan___1OEy4-camelCase,.styles__planBackground___3Hn_x-camelCase{padding-bottom:7px;box-sizing:border-box}.styles__planBackground___3Hn_x-camelCase{height:125px;width:400px;box-shadow:inset 0 -7px rgba(0,0,0,.2);position:absolute;top:-30px;left:-25px;transform:rotate(5deg)}.styles__planTop___2JfpA-camelCase{font-size:65px;color:#fff;position:absolute;top:0;left:0;width:100%}.styles__planPrice___2fwN6-camelCase,.styles__planTop___2JfpA-camelCase{text-align:center;font-family:Nunito,sans-serif;font-weight:700}.styles__planPrice___2fwN6-camelCase{font-size:90px;color:#3a3a3a;margin-top:110px}.styles__planSubText___1fl5s-camelCase{font-size:16px;opacity:.8;margin-bottom:25px}.styles__planDetail___V2tYJ-camelCase,.styles__planSubText___1fl5s-camelCase{text-align:center;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__planDetail___V2tYJ-camelCase{font-size:22px}.styles__planSpacer___LF8cN-camelCase{width:80%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__planButton___2UTVa-camelCase{width:80%;margin:25px auto 20px}.styles__planButtonInside___wAgJI-camelCase{height:40px;font-size:30px;font-weight:700}.styles__groupContainer___RJh5K-camelCase{margin:10px auto 50px;box-sizing:border-box;width:90%;max-width:840px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:34px;font-weight:700;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px 20px 27px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#fff;border-radius:7px}.styles__groupButton___1Dv-n-camelCase{width:240px;margin:20px auto 0}.styles__middleWrapper___hjUyY-camelCase{width:100%;padding:20px;box-sizing:border-box;background-color:#40115f}.styles__middleHeader___1knI4-camelCase{font-size:65px;margin:15px auto 30px;width:90%;text-align:center;font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__middlePerks___3JJQv-camelCase{width:90%;margin:10px auto;display:flex;flex-flow:row wrap;justify-content:center}.styles__perkContainer___2rw2I-camelCase{border-radius:7px;background-color:#9a49aa;margin:10px;width:400px;height:120px;padding:10px 10px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;flex-direction:row;justify-content:space-between}.styles__perkContainer___2rw2I-camelCase,.styles__perkIcon___3Ke37-camelCase{display:flex;align-items:center}.styles__perkIcon___3Ke37-camelCase{min-width:75px;height:75px;justify-content:center;font-size:60px;text-shadow:2px 2px rgba(0,0,0,.2);color:#fff}.styles__perkInfo___1jvHA-camelCase{display:flex;flex-direction:column;color:#fff;font-size:18px;width:calc(100% - 90px)}.styles__perkTitle___3vmIt-camelCase{font-family:Titan One,sans-serif;font-size:26px;text-shadow:2px 2px rgba(0,0,0,.2)}.styles__questionsHeader___2DqH--camelCase{font-size:50px;width:80%;margin:60px auto 5px;text-align:center;font-weight:700}.styles__questionsWrapper___XkktX-camelCase{width:90%;margin:10px auto;display:flex;flex-flow:row wrap;justify-content:center}.styles__questionContainer___2heRn-camelCase{width:48%;background-color:#fff;padding:25px 25px 32px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);box-sizing:border-box;border-radius:7px;margin:10px auto;display:flex;flex-direction:column;text-align:left}.styles__questionHeader___1ZfHa-camelCase{font-size:32px;font-weight:700;margin-bottom:7px}.styles__questionText___2JwGo-camelCase{font-size:22px}@media screen and (max-width:1050px){.styles__header___1Boll-camelCase{font-size:55px}.styles__planContainer___3Cj3J-camelCase{flex-direction:column}}@media screen and (max-width:650px){.styles__questionContainer___2heRn-camelCase{width:100%}}@media screen and (max-width:550px){.styles__middleHeader___1knI4-camelCase{font-size:50px}.styles__middlePerks___3JJQv-camelCase{width:100%}.styles__perkContainer___2rw2I-camelCase{width:100%;height:160px}}", ""]), t.locals = {
                background: "styles__background___20rdi-camelCase",
                header: "styles__header___1Boll-camelCase",
                planContainer: "styles__planContainer___3Cj3J-camelCase",
                plan: "styles__plan___1OEy4-camelCase",
                planBackground: "styles__planBackground___3Hn_x-camelCase",
                planTop: "styles__planTop___2JfpA-camelCase",
                planPrice: "styles__planPrice___2fwN6-camelCase",
                planSubText: "styles__planSubText___1fl5s-camelCase",
                planDetail: "styles__planDetail___V2tYJ-camelCase",
                planSpacer: "styles__planSpacer___LF8cN-camelCase",
                planButton: "styles__planButton___2UTVa-camelCase",
                planButtonInside: "styles__planButtonInside___wAgJI-camelCase",
                groupContainer: "styles__groupContainer___RJh5K-camelCase",
                groupButton: "styles__groupButton___1Dv-n-camelCase",
                middleWrapper: "styles__middleWrapper___hjUyY-camelCase",
                middleHeader: "styles__middleHeader___1knI4-camelCase",
                middlePerks: "styles__middlePerks___3JJQv-camelCase",
                perkContainer: "styles__perkContainer___2rw2I-camelCase",
                perkIcon: "styles__perkIcon___3Ke37-camelCase",
                perkInfo: "styles__perkInfo___1jvHA-camelCase",
                perkTitle: "styles__perkTitle___3vmIt-camelCase",
                questionsHeader: "styles__questionsHeader___2DqH--camelCase",
                questionsWrapper: "styles__questionsWrapper___XkktX-camelCase",
                questionContainer: "styles__questionContainer___2heRn-camelCase",
                questionHeader: "styles__questionHeader___1ZfHa-camelCase",
                questionText: "styles__questionText___2JwGo-camelCase"
            }
        },
        IStp: function(e, t, a) {
            var n = a("1yxc");
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
        IuJg: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("H1WH"),
                i = a("17x9"),
                s = a.n(i),
                l = a("v4r+"),
                c = a("FKJl"),
                u = a("XTAU"),
                p = a("oQ+7"),
                f = a("ca/f"),
                d = a("E8Bj"),
                m = a("Xst1"),
                h = a.n(m),
                _ = a("1JjF"),
                y = a.n(_),
                g = a("qnYv"),
                v = a("lmLo");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function x() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                x = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: C(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == b(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function C(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = E(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function E(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(w.prototype), l(w.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new w(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function w(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function C(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function i(e) {
                            w(o, n, r, i, s, "next", e)
                        }

                        function s(e) {
                            w(o, n, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function E(e, t) {
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
                    var a, n = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return j(this, a)
                }
            }

            function j(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return O(e)
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && k(e, t)
                }(d, e);
                var t, a, n, i, s = N(d);

                function d(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), (t = s.call(this, e)).state = {
                        planSlug: "",
                        item: "",
                        desc: "",
                        priceLabel: "",
                        loading: !1,
                        end: ""
                    }, t.onCheckout = t.onCheckout.bind(O(t)), t
                }
                return t = d, (a = [{
                    key: "componentDidMount",
                    value: (i = C(x().mark((function e() {
                        var t, a, n, r, o;
                        return x().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(c.b)("UpgradeCheckoutPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    return e.next = 9, g.a.get("/api/subscriptions/individual-plans");
                                case 9:
                                    if (200 === (t = e.sent).status) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("cannot proceed without plan information");
                                case 12:
                                    if (a = t.data.plans, n = this.props.match.params.plan, r = a[n]) {
                                        e.next = 17;
                                        break
                                    }
                                    throw new Error("could not find plan with slug ".concat(n));
                                case 17:
                                    o = new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }), this.setState({
                                        planSlug: n,
                                        item: r.item,
                                        desc: r.desc,
                                        priceLabel: o.format(r.priceCents / 100)
                                    });
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onCheckout",
                    value: function() {
                        var e = this;
                        this.state.loading || (this.setState({
                            loading: !0
                        }), g.a.post("/api/subscriptions/checkout-sessions", {
                            planSlug: this.state.planSlug
                        }).then(function() {
                            var e = C(x().mark((function e(t) {
                                var a, n;
                                return x().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = t.data.stripeSessionId) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("cannot proceed to checkout with sessionId");
                                        case 3:
                                            if (n = t.data.stripePublishableKey) {
                                                e.next = 6;
                                                break
                                            }
                                            throw new Error("cannot proceed to checkout without stripePublishableKey");
                                        case 6:
                                            return e.next = 8, Object(l.a)(n);
                                        case 8:
                                            e.sent.redirectToCheckout({
                                                sessionId: a
                                            }).then((function(e) {
                                                e.error && Object(c.b)(e.error)
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            e.setState({
                                loading: !1
                            }), Object(c.b)(t)
                        })))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: o.isMobile ? h.a.mBody : h.a.body
                        }, r.a.createElement(u.a, {
                            title: "Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), r.a.createElement(p.a, null), r.a.createElement("div", {
                            className: h.a.slantBackground
                        }), r.a.createElement("div", {
                            className: h.a.regularBody
                        }, r.a.createElement("div", {
                            className: y.a.centerWrapper
                        }, r.a.createElement("div", {
                            style: {
                                height: 50
                            }
                        }), r.a.createElement("div", {
                            className: y.a.payContainer
                        }, r.a.createElement("div", {
                            className: y.a.payHeader
                        }, "Checkout"), r.a.createElement("div", {
                            className: y.a.paySpacer
                        }), r.a.createElement("div", {
                            className: y.a.payRow
                        }, r.a.createElement("div", {
                            className: y.a.payColumn
                        }, r.a.createElement("div", {
                            className: y.a.payItem
                        }, "Blooket ".concat(this.state.item)), r.a.createElement("div", {
                            className: y.a.payDesc
                        }, this.state.desc)), r.a.createElement("div", {
                            className: y.a.payPrice
                        }, "".concat(this.state.priceLabel))), r.a.createElement("div", {
                            className: y.a.paySpacer
                        }), r.a.createElement(v.a, {
                            color: "#0bc2cf",
                            outsideClass: y.a.payButton,
                            insideClass: y.a.payButtonInside,
                            onClick: this.onCheckout
                        }, "Checkout Now")), r.a.createElement("div", {
                            style: {
                                height: 50
                            }
                        }))), this.state.loading || this.state.end ? r.a.createElement(f.a, {
                            text: this.state.end || "Processing...",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Success!" === this.state.end ? "Thanks!" : "Refresh",
                                click: function() {
                                    return "Success!" === e.state.end ? e.props.history.push("/dashboard") : window.location.reload()
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && E(t.prototype, a), n && E(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }(r.a.Component);
            P.propTypes = {
                match: s.a.object,
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(d.c)(P)
        },
        LYWA: function(e, t, a) {
            var n = a("HR5N");
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
        N3JU: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("Ty5D"),
                u = a("TSYQ"),
                p = a.n(u),
                f = a("cpGi"),
                d = a("H1WH"),
                m = a("wd/R"),
                h = a.n(m),
                _ = a("FKJl"),
                y = a("LAIx"),
                g = a("OoaU"),
                v = a.n(g),
                b = a("Xst1"),
                x = a.n(b),
                w = a("i4/Q"),
                C = a("XTAU"),
                E = a("0oXL"),
                k = a("vL5Z"),
                N = a("lmLo"),
                j = a("EJZK"),
                O = a("Cc5n"),
                S = a("E8Bj"),
                P = a("LHn/"),
                B = a("HRwi"),
                I = a("74sb"),
                L = a("qnYv"),
                T = a("SURz"),
                R = [{
                    name: "Total Tokens",
                    desc: "Total Tokens Earned at Any Time",
                    stat: "totalTokens",
                    url: P.a.basic.token,
                    topStat: !0
                }, {
                    name: "Blooks Unlocked",
                    desc: "Total Unique Blooks Unlocked in the Market",
                    stat: "numUnlocks",
                    url: "https://media.blooket.com/image/upload/v1661496296/Media/uiTest/Blooks_Unlocked.svg",
                    topStat: !0
                }, {
                    name: "Wins",
                    desc: "1st Place Finishes in Any Game Mode",
                    stat: "wins",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Wins.svg"
                }, {
                    name: "Top 5s",
                    desc: "Top 5 Finishes in Any Game Mode",
                    stat: "topFives",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Top_5s.svg"
                }, {
                    name: "Total Points",
                    desc: "Total Points Earned in Classic",
                    stat: "classicPoints",
                    url: "https://media.blooket.com/image/upload/v1661496294/Media/uiTest/points.svg"
                }, {
                    name: "Racing Progress",
                    desc: "Total Correct Answers in Racing",
                    stat: "racingProgress",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg"
                }, {
                    name: "Total Cash",
                    desc: "Total Cash at the end of Factory Games",
                    stat: "totalCash",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Total_Cash.svg"
                }, {
                    name: "Players Defeated",
                    desc: "Players You've Placed Ahead of in Any Game Mode",
                    stat: "playersDefeated",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Players_Defeated.svg"
                }, {
                    name: "Correct Answers",
                    desc: "Total Correct Answers in Any Game Mode",
                    stat: "correctAnswers",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Correct_Answers.svg"
                }, {
                    name: "Games Played",
                    desc: "Total Games Played in Any Game Mode",
                    stat: "gamesPlayed",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Games_Played_2.svg"
                }, {
                    name: "Factory Upgrades",
                    desc: "Total Times You've Upgraded Blooks in Factory",
                    stat: "upgrades",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Factory_Upgrades.svg"
                }, {
                    name: "Showdown Wins",
                    desc: "Wins in Showdowns during Battle Royale",
                    stat: "showdownWins",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Showdown_Wins.svg"
                }, {
                    name: "Total Crypto",
                    desc: "Total Crypto at the end of Crypto Hack Games",
                    stat: "totalCrypto",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg"
                }, {
                    name: "Total Gold",
                    desc: "Total Gold at the end of Gold Quest Games",
                    stat: "totalGold",
                    url: "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg"
                }, {
                    name: "Total Fish Weight",
                    desc: "Total weight (lbs) of fish caught in Fishing Frenzy",
                    stat: "totalFishWeight",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg"
                }, {
                    name: "Daily Tokens Available",
                    desc: "Remaining Tokens before reaching Daily Limit",
                    stat: "tokensAvailable",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Days.svg"
                }, {
                    name: "Time Before Reset",
                    desc: "Time before Daily Token Limit resets",
                    stat: "timeLeft",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Time_Before_Reset.svg",
                    nonUser: !0
                }],
                q = a("gISs"),
                F = a("Dzm6"),
                H = a("8qja");

            function D(e) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new k(r || []);
                    return n(i, "_invoke", {
                        value: x(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(N([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == D(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function x(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return j()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = w(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    E(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
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

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(a), !0).forEach((function(t) {
                        U(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function U(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function Y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || W(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return J(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || W(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e, t) {
                if (e) {
                    if ("string" == typeof e) return J(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? J(e, t) : void 0
                }
            }

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function Q(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function K(e, t) {
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

            function V(e) {
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
                    var a, n = ee(e);
                    if (t) {
                        var r = ee(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Z(this, a)
                }
            }

            function Z(e, t) {
                if (t && ("object" === D(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return $(e)
            }

            function $(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ee(e) {
                return (ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var te = function(e) {
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
                var t, a, n, o, i, s = V(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = s.call(this, e)).state = {
                        ready: !1,
                        user: null,
                        mostUsedBlook: "Light Blue",
                        level: 0,
                        xp: 0,
                        tokensAvailable: 0,
                        timeLeft: "",
                        blookUsage: [],
                        gameHistory: [],
                        customBlooks: ["", "", "", "", ""],
                        editingBlook: -1,
                        editHeader: ""
                    }, t.here = !0, t.stopEditing = t.stopEditing.bind($(t)), t.deleteBlook = t.deleteBlook.bind($(t)), t.changeBlook = t.changeBlook.bind($(t)), t.changeBanner = t.changeBanner.bind($(t)), t.changeTitle = t.changeTitle.bind($(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (o = z().mark((function e() {
                        var t, a, n, r, o = this;
                        return z().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(I.h)("name"), a = Object(I.h)("id"), e.next = 4, this.props.user.getData();
                                case 4:
                                    if (n = e.sent) {
                                        e.next = 9;
                                        break
                                    }
                                    return Object(_.b)("StatsPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 9:
                                    this.setState({
                                        user: n
                                    }), r = a ? {
                                        params: {
                                            id: a
                                        }
                                    } : t ? {
                                        params: {
                                            name: t
                                        }
                                    } : null, L.a.get(a ? "/api/users/byid" : "/api/users", r).then((function(e) {
                                        if (e.data) {
                                            var t = M(e.data.gameHistory.slice(Math.max(e.data.gameHistory.length - 7, 0), e.data.gameHistory.length));
                                            t.reverse();
                                            var a = "Light Blue",
                                                r = M(Object.entries(e.data.blookUsage).map((function(e) {
                                                    var t = Y(e, 2);
                                                    return {
                                                        name: t[0],
                                                        uses: t[1]
                                                    }
                                                })));
                                            r.sort((function(e, t) {
                                                return t.uses - e.uses
                                            })), (r = r.slice(0, 5)).length > 0 && (a = r[0].name);
                                            var i = e.data.xp || 0,
                                                s = Object(B.b)(i);
                                            if (o.here) {
                                                var l = h.a.duration(h.a.utc().add(1, "day").startOf("day").diff(h.a.utc()));
                                                o.setState({
                                                    ready: !0,
                                                    level: s.level,
                                                    xp: s.xp,
                                                    mostUsedBlook: a,
                                                    user: A(A({}, n), e.data),
                                                    customBlooks: 5 === e.data.customBlooks.length ? e.data.customBlooks : o.state.customBlooks,
                                                    tokensAvailable: h.a.utc(e.data.lastTokenDay).isSame(h.a.utc(), "d") ? e.data.tokensAvailable : 500,
                                                    timeLeft: "".concat(l.hours(), ":").concat(l.minutes() < 10 ? "0" : "").concat(l.minutes()),
                                                    gameHistory: t,
                                                    blookUsage: r
                                                }, (function() {
                                                    o.timeInterval = setInterval((function() {
                                                        var e = h.a.duration(h.a.utc().add(1, "day").startOf("day").diff(h.a.utc()));
                                                        o.setState({
                                                            timeLeft: "".concat(e.hours(), ":").concat(e.minutes() < 10 ? "0" : "").concat(e.minutes())
                                                        })
                                                    }), 6e4)
                                                }))
                                            }
                                        }
                                    })).catch((function(e) {
                                        Object(_.b)(e)
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var r = o.apply(e, t);

                            function i(e) {
                                Q(r, a, n, i, s, "next", e)
                            }

                            function s(e) {
                                Q(r, a, n, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearInterval(this.timeInterval)
                    }
                }, {
                    key: "stopEditing",
                    value: function(e, t) {
                        var a = this;
                        if (!e) return this.setState({
                            editingBlook: -1
                        });
                        var n = M(this.state.customBlooks);
                        n[this.state.editingBlook] = "", this.setState({
                            customBlooks: n
                        }, (function() {
                            n[a.state.editingBlook] = t, a.setState({
                                customBlooks: n,
                                editingBlook: -1
                            })
                        })), L.a.put("/api/users/custom-blooks", {
                            blookIndex: this.state.editingBlook,
                            customBlook: t
                        }).catch((function(e) {
                            Object(_.b)(e)
                        }))
                    }
                }, {
                    key: "deleteBlook",
                    value: function(e) {
                        var t = M(this.state.customBlooks);
                        t[e] = "", this.setState({
                            customBlooks: t,
                            editingBlook: -1
                        }), L.a.put("/api/users/custom-blooks", {
                            blookIndex: e,
                            customBlook: ""
                        }).catch((function(e) {
                            Object(_.b)(e)
                        }))
                    }
                }, {
                    key: "changeBlook",
                    value: function(e) {
                        var t = this;
                        if (e === this.state.user.blook) return this.setState({
                            isChangingBlook: !1
                        });
                        this.setState({
                            user: A(A({}, this.state.user), {}, {
                                blook: e
                            }),
                            isChangingBlook: !1
                        }), L.a.put("/api/users/change/blook", {
                            blook: e
                        }).then((function() {
                            t.props.user.getLoggedIn()
                        })).catch((function(e) {
                            Object(_.b)(e)
                        }))
                    }
                }, {
                    key: "changeBanner",
                    value: function(e) {
                        if (e === this.state.user.banner) return this.setState({
                            editHeader: ""
                        });
                        this.setState({
                            user: A(A({}, this.state.user), {}, {
                                banner: e
                            }),
                            editHeader: ""
                        }), L.a.put("/api/users/change/banner", {
                            banner: e
                        }).then((function() {})).catch((function(e) {
                            Object(_.b)(e)
                        }))
                    }
                }, {
                    key: "changeTitle",
                    value: function(e) {
                        if (e === this.state.user.title) return this.setState({
                            editHeader: ""
                        });
                        this.setState({
                            user: A(A({}, this.state.user), {}, {
                                title: e
                            }),
                            editHeader: ""
                        }), L.a.put("/api/users/change/title", {
                            title: e
                        }).then((function() {})).catch((function(e) {
                            Object(_.b)(e)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: d.isMobile ? v.a.mBody : v.a.body
                        }, r.a.createElement(C.a, {
                            title: "".concat(this.state.user ? this.state.user.name : "Stats", " | Blooket")
                        }), r.a.createElement(w.a, {
                            user: this.state.user,
                            page: "Stats"
                        }), r.a.createElement("div", {
                            className: v.a.background
                        }, r.a.createElement("div", {
                            className: v.a.blooksBackground,
                            style: {
                                backgroundImage: "url(".concat(P.a.basic.blookCheckers, ")")
                            }
                        })), r.a.createElement("div", {
                            className: x.a.profileBodyMax,
                            style: {
                                maxWidth: 1266
                            }
                        }, this.state.ready ? r.a.createElement("div", {
                            className: v.a.fullContainer
                        }, r.a.createElement("div", {
                            className: v.a.headerRow
                        }, r.a.createElement("div", {
                            className: v.a.headerLeft
                        }, r.a.createElement("div", {
                            className: v.a.headerLeftRow
                        }, r.a.createElement("div", {
                            className: v.a.headerBlookContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isChangingBlook: !0
                                })
                            }
                        }, r.a.createElement(E.a, {
                            name: this.state.user.blook || "Chick",
                            className: v.a.headerBlook
                        })), r.a.createElement("div", {
                            className: v.a.headerInfo
                        }, r.a.createElement("div", {
                            className: v.a.headerBanner,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    editHeader: "banner"
                                })
                            }
                        }, this.state.user.banner ? r.a.createElement("img", {
                            src: q.a[this.state.user.banner].url,
                            alt: q.a[this.state.user.banner].name,
                            className: v.a.headerBg,
                            draggable: !1
                        }) : r.a.createElement("img", {
                            src: q.a.starter.url,
                            alt: "Starter Banner",
                            className: v.a.headerBg,
                            draggable: !1
                        }), r.a.createElement("div", {
                            className: v.a.headerName
                        }, this.state.user.name), r.a.createElement("div", {
                            className: v.a.headerTitle
                        }, this.state.user.title ? F.a[this.state.user.title].name : "Newbie")), r.a.createElement("div", {
                            className: v.a.levelBarContainer
                        }, r.a.createElement("div", {
                            className: v.a.levelBar
                        }, r.a.createElement("div", {
                            className: v.a.levelBarInside,
                            style: {
                                transform: "scaleX(".concat(100 === this.state.level ? 1 : this.state.xp / B.a[this.state.level].xp, ")")
                            }
                        })), r.a.createElement("div", {
                            className: v.a.levelStarContainer
                        }, r.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1660352045/Media/uiTest/LVL_Bar.svg",
                            alt: "Star",
                            className: v.a.levelStar,
                            draggable: !1
                        }), r.a.createElement("div", {
                            className: v.a.levelStarText
                        }, this.state.level))))), r.a.createElement("div", {
                            className: v.a.headerLeftButtons
                        }, r.a.createElement(N.a, {
                            color: "#9a49aa",
                            outsideClass: v.a.headerButton,
                            onClick: function() {
                                window.location.href = "https://play.blooket.com"
                            }
                        }, r.a.createElement("div", {
                            className: v.a.headerButtonInside
                        }, r.a.createElement("i", {
                            className: p()(v.a.headerButtonIcon, "fas fa-play")
                        }), "Play Now!")), r.a.createElement(N.a, {
                            color: "#ffa31e",
                            outsideClass: v.a.headerButton,
                            onClick: function() {
                                return e.props.history.push("/market")
                            }
                        }, r.a.createElement("div", {
                            className: v.a.headerButtonInside
                        }, r.a.createElement("i", {
                            className: p()(v.a.headerButtonIcon, "fas fa-store")
                        }), "Unlock Blooks")), r.a.createElement(N.a, {
                            color: "#1e92ff",
                            outsideClass: v.a.headerButton,
                            onClick: function() {
                                return e.props.history.push("/blooks")
                            }
                        }, r.a.createElement("div", {
                            className: v.a.headerButtonInside
                        }, r.a.createElement("i", {
                            className: p()(v.a.headerButtonIcon, "fas fa-suitcase")
                        }), "Manage Blooks"))))), r.a.createElement(O.a, {
                            level: this.state.level,
                            xp: this.state.xp
                        }), r.a.createElement("div", {
                            className: v.a.bottomContainer
                        }, r.a.createElement("div", {
                            className: v.a.left
                        }, this.state.blookUsage.length > 0 ? r.a.createElement("div", {
                            className: v.a.blookUsageContainer
                        }, r.a.createElement("div", {
                            className: v.a.containerHeader
                        }, r.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "Blook Usage")), this.state.blookUsage.map((function(t) {
                            return r.a.createElement("div", {
                                key: t.name,
                                className: v.a.blookUsageRow
                            }, r.a.createElement(E.a, {
                                name: t.name,
                                className: v.a.blookUsageBlook
                            }), r.a.createElement("div", {
                                className: v.a.blookUsageBarContainer
                            }, r.a.createElement("div", {
                                className: v.a.blookUsageBar,
                                style: {
                                    transform: "scaleX(".concat(t.uses / e.state.blookUsage[0].uses, ")"),
                                    backgroundColor: Object(y.a)(t.name)
                                }
                            })))
                        })), r.a.createElement("div", {
                            className: v.a.blookUsageScale
                        }, r.a.createElement("div", {
                            className: v.a.blookUsageNum
                        }, "0"), r.a.createElement("div", {
                            className: v.a.blookUsageScaleBar
                        }), r.a.createElement("div", {
                            className: v.a.blookUsageNum
                        }, this.state.blookUsage[0].uses)), r.a.createElement("div", {
                            className: v.a.blookUsageText
                        }, "Plays")) : null, r.a.createElement("div", {
                            className: v.a.historyContainer,
                            style: {
                                marginTop: 0 === this.state.blookUsage.length ? 0 : null
                            }
                        }, r.a.createElement("div", {
                            className: v.a.containerHeader
                        }, r.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "History")), this.state.gameHistory.length > 0 ? this.state.gameHistory.map((function(e, t) {
                            return r.a.createElement("div", {
                                key: t,
                                className: v.a.historyGameContainer
                            }, r.a.createElement(E.a, {
                                name: e.blookUsed,
                                className: v.a.historyBlook
                            }), r.a.createElement("div", {
                                className: v.a.historyInfo
                            }, r.a.createElement("div", {
                                className: v.a.historyName
                            }, e.name), r.a.createElement("div", {
                                className: v.a.historyPlace
                            }, "".concat(e.place).concat(Object(I.g)(e.place), " Place"))), void 0 !== e.candy ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.p)(e.candy)), r.a.createElement("img", {
                                src: P.a.basic.candyDark,
                                alt: "Candy",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.gold ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.p)(e.gold)), r.a.createElement("img", {
                                src: H.b ? P.a.basic.candy : P.a.basic.gold,
                                alt: "Gold",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.xp ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.p)(e.xp)), r.a.createElement("img", {
                                src: P.a.basic.xp,
                                alt: "Xp",
                                className: v.a.gameStatImg,
                                style: {
                                    width: 18
                                },
                                draggable: !1
                            })) : void 0 !== e.toys ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.p)(e.toys)), r.a.createElement("img", {
                                src: P.a.basic.toy,
                                alt: "Toy",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.shamrocks ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.p)(e.shamrocks)), r.a.createElement("img", {
                                src: P.a.shamrock.shamrockBlack,
                                alt: "Shamrock",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.snow ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.p)(e.snow)), r.a.createElement("i", {
                                className: p()(v.a.snowIcon, "fas fa-snowflake")
                            })) : void 0 !== e.cash ? r.a.createElement("div", {
                                className: v.a.pointsText
                            }, "$".concat(Object(I.p)(e.cash))) : void 0 !== e.crypto ? r.a.createElement("div", {
                                className: v.a.pointsText
                            }, "₿ ".concat(Object(I.p)(e.crypto))) : void 0 !== e.weight ? r.a.createElement("div", {
                                className: v.a.pointsText
                            }, "".concat(Object(I.p)(e.weight), " lbs")) : void 0 !== e.classicPoints ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.j)(e.classicPoints)), r.a.createElement("i", {
                                className: p()(v.a.snowIcon, "far fa-check-square")
                            })) : void 0 !== e.wins ? r.a.createElement("div", {
                                className: v.a.pointsText
                            }, "".concat(e.wins, " ").concat(1 === e.wins ? "Win" : "Wins")) : void 0 !== e.result ? r.a.createElement("div", {
                                className: v.a.pointsText
                            }, e.result) : void 0 !== e.guests ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.j)(e.guests)), r.a.createElement("i", {
                                className: p()(v.a.snowIcon, "fas fa-users")
                            })) : void 0 !== e.dmg ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.j)(e.dmg)), r.a.createElement("i", {
                                className: p()(v.a.snowIcon, "fas fa-splotch")
                            })) : void 0 !== e.numBlooks ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.j)(e.numBlooks)), r.a.createElement(E.a, {
                                name: e.blookUsed,
                                className: v.a.gameStatBlook
                            })) : void 0 !== e.fossils ? r.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, r.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(I.j)(e.fossils)), r.a.createElement("i", {
                                className: p()(v.a.fossilIcon, "fas fa-bone")
                            })) : null)
                        })) : r.a.createElement("div", {
                            className: v.a.historyNothing
                        }, "No Games Played Yet"))), r.a.createElement("div", {
                            className: v.a.right
                        }, r.a.createElement("div", {
                            className: v.a.customBlookContainer
                        }, r.a.createElement("div", {
                            className: v.a.containerHeader
                        }, r.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "Custom Blooks")), this.state.customBlooks.map((function(t, a) {
                            return t ? r.a.createElement("div", {
                                key: a,
                                className: v.a.blookContainer
                            }, r.a.createElement(j.c, {
                                code: t,
                                className: v.a.customBlook
                            }), r.a.createElement("div", {
                                className: v.a.customIconRow
                            }, r.a.createElement("i", {
                                className: p()("fas fa-pencil-alt", v.a.customIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        editingBlook: a
                                    })
                                }
                            }), r.a.createElement("i", {
                                className: p()("fas fa-trash-alt", v.a.customIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.deleteBlook(a)
                                }
                            }))) : r.a.createElement("div", {
                                key: a,
                                className: v.a.noBlookContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        editingBlook: a
                                    })
                                }
                            }, r.a.createElement("i", {
                                className: p()("fas fa-plus-square", v.a.noBlookIcon)
                            }), "New Blook")
                        }))), r.a.createElement("div", {
                            className: v.a.statsContainer
                        }, r.a.createElement("div", {
                            className: v.a.containerHeader
                        }, r.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "Stats")), r.a.createElement("div", {
                            className: v.a.topStats
                        }, r.a.createElement(f.a, {
                            place: "bottom",
                            effect: "solid",
                            className: x.a.tooltip
                        }), R.filter((function(e) {
                            return e.topStat
                        })).map((function(t) {
                            return r.a.createElement("div", {
                                key: t.name,
                                className: v.a.statContainer,
                                "data-tip": t.desc
                            }, r.a.createElement("div", {
                                className: v.a.statTitle
                            }, t.name), r.a.createElement("div", {
                                className: v.a.statNum
                            }, e.state.user[t.stat] > 9999999999 ? Object(I.p)(e.state.user[t.stat]) : Object(I.j)(e.state.user[t.stat])), t.url ? r.a.createElement("img", {
                                src: t.url,
                                alt: t.name,
                                className: "Total Tokens" === t.name ? v.a.tokenImg : v.a.statImg,
                                draggable: !1
                            }) : null)
                        }))), r.a.createElement("div", {
                            className: v.a.statsWrapper
                        }, R.filter((function(e) {
                            return !e.topStat
                        })).map((function(t) {
                            return r.a.createElement("div", {
                                key: t.name,
                                className: v.a.statContainer
                            }, r.a.createElement("div", {
                                className: v.a.statTitle
                            }, t.name), r.a.createElement("div", {
                                className: v.a.statNum
                            }, t.nonUser ? e.state[t.stat] : e.state.user[t.stat] > 9999999999 ? Object(I.p)(e.state.user[t.stat]) : Object(I.j)(e.state.user[t.stat])), t.url ? r.a.createElement("img", {
                                src: t.url,
                                alt: t.name,
                                className: v.a.statImg,
                                draggable: !1
                            }) : null)
                        }))))))) : null), this.state.editingBlook >= 0 ? r.a.createElement(k.a, {
                            startCode: this.state.customBlooks[this.state.editingBlook],
                            blookParts: this.state.user.blookParts,
                            close: this.stopEditing
                        }) : this.state.isChangingBlook ? r.a.createElement(T.a, {
                            unlocks: this.state.user.unlocks || {},
                            onSelect: function(t) {
                                return e.changeBlook(t)
                            },
                            onClose: function() {
                                return e.setState({
                                    isChangingBlook: !1
                                })
                            }
                        }) : this.state.editHeader ? r.a.createElement("div", {
                            className: x.a.modal
                        }, r.a.createElement("div", {
                            className: x.a.modalButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    editHeader: ""
                                })
                            }
                        }), r.a.createElement("div", {
                            className: v.a.editHeaderContainer
                        }, r.a.createElement("div", {
                            className: v.a.editHeaderRow
                        }, r.a.createElement(N.a, {
                            color: "#0bc2cf",
                            insideClass: v.a.editHeaderButtonInside,
                            onClick: function() {
                                return e.setState({
                                    editHeader: "banner"
                                })
                            }
                        }, "Banners"), r.a.createElement(N.a, {
                            color: "#0bc2cf",
                            insideClass: v.a.editHeaderButtonInside,
                            onClick: function() {
                                return e.setState({
                                    editHeader: "title"
                                })
                            }
                        }, "Titles")), r.a.createElement("div", {
                            className: v.a.editHeaderColumn
                        }, "banner" === this.state.editHeader ? this.state.user.banners ? Object.entries(q.a).filter((function(t) {
                            var a = Y(t, 1)[0];
                            return "starter" === a || e.state.user.banners.includes(a)
                        })).map((function(t) {
                            var a = Y(t, 2),
                                n = a[0],
                                o = a[1];
                            return r.a.createElement("div", {
                                key: n,
                                className: v.a.editBanner,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeBanner(n)
                                }
                            }, r.a.createElement("img", {
                                src: o.url,
                                alt: o.name,
                                className: v.a.editBannerImg,
                                draggable: !1
                            }))
                        })) : r.a.createElement("div", {
                            className: v.a.noBannersText
                        }, "No Banners Unlocked Yet") : this.state.user.titles ? Object.entries(F.a).filter((function(t) {
                            var a = Y(t, 1)[0];
                            return "newbie" === a || e.state.user.titles.includes(a)
                        })).map((function(t) {
                            var a = Y(t, 2),
                                n = a[0],
                                o = a[1];
                            return r.a.createElement("div", {
                                key: n,
                                className: v.a.editTitle,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeTitle(n)
                                }
                            }, o.name)
                        })) : r.a.createElement("div", {
                            className: v.a.noBannersText
                        }, "No Titles Unlocked Yet")))) : null)
                    }
                }]) && K(t.prototype, a), n && K(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(r.a.Component);
            te.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(S.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(te)))
        },
        OoaU: function(e, t, a) {
            var n = a("9ZgN");
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
        Ql8l: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__quote___3eu3i-camelCase{position:fixed;left:52.5%;top:calc(50% + 27.5px);height:80vh;transform:translateY(-50%)}.styles__leftColumn___3r3Gh-camelCase,.styles__quote___3eu3i-camelCase{max-width:500px;width:40%}.styles__leftColumn___3r3Gh-camelCase{position:absolute;top:35px;right:52.5%;display:flex;flex-direction:column}.styles__textContainer___3cx4T-camelCase{border-radius:5px;color:#3a3a3a;background-color:#fff;font-size:16px;font-family:Nunito,sans-serif;padding:15px 15px 20px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);box-sizing:border-box;width:100%;margin:10px 0}.styles__textBigHeader___1EKGt-camelCase{font-weight:700;font-size:28px}.styles__bigText___1iSnj-camelCase{font-size:18px}.styles__textHeader___3AeW0-camelCase{font-weight:700;font-size:22px}.styles__linkText___1pXMN-camelCase{color:#0bc2cf}.styles__button___18xiR-camelCase{margin-top:10px;width:230px}.styles__buttonInside___1V59O-camelCase{font-size:16px;padding:5px 10px}.styles__downloadButton___1LDDm-camelCase{display:flex;justify-content:center;align-items:center;width:100%;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:22px;font-weight:700;padding:10px;margin:15px 0 10px;box-sizing:border-box;border:2px solid #ff7b24;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;text-decoration:none;cursor:pointer;transition:.2s}.styles__downloadButton___1LDDm-camelCase:hover{transform:scale(.97)}@media only screen and (max-width:800px){.styles__bodyContainer___1vjut-camelCase{position:absolute;top:65px;left:5%;width:90%}.styles__quote___3eu3i-camelCase{margin:20px auto;height:400px;transform:none}.styles__leftColumn___3r3Gh-camelCase,.styles__quote___3eu3i-camelCase{position:static;width:100%}.styles__leftColumn___3r3Gh-camelCase{margin-bottom:20px}}", ""]), t.locals = {
                quote: "styles__quote___3eu3i-camelCase",
                leftColumn: "styles__leftColumn___3r3Gh-camelCase",
                textContainer: "styles__textContainer___3cx4T-camelCase",
                textBigHeader: "styles__textBigHeader___1EKGt-camelCase",
                bigText: "styles__bigText___1iSnj-camelCase",
                textHeader: "styles__textHeader___3AeW0-camelCase",
                linkText: "styles__linkText___1pXMN-camelCase",
                button: "styles__button___18xiR-camelCase",
                buttonInside: "styles__buttonInside___1V59O-camelCase",
                downloadButton: "styles__downloadButton___1LDDm-camelCase",
                bodyContainer: "styles__bodyContainer___1vjut-camelCase"
            }
        },
        RLYa: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("Ty5D"),
                u = a("55Ip"),
                p = a("n5rO"),
                f = a.n(p),
                d = a("TSYQ"),
                m = a.n(d),
                h = a("JeI0"),
                _ = a.n(h),
                y = a("wd/R"),
                g = a.n(y),
                v = a("H1WH"),
                b = a("EDFO"),
                x = a("FKJl"),
                w = a("Xst1"),
                C = a.n(w),
                E = a("0eKu"),
                k = a.n(E),
                N = a("XTAU"),
                j = a("ca/f"),
                O = a("XOuL"),
                S = a("E8Bj"),
                P = a("74sb"),
                B = a("qnYv"),
                I = a("vCpj"),
                L = a("i4/Q"),
                T = a("LHn/"),
                R = a("lmLo"),
                q = a("7yjp");

            function F(e) {
                return (F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function H(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function D() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                D = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new k(r || []);
                    return n(i, "_invoke", {
                        value: x(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(N([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == F(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function x(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return j()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = w(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    E(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function z(e) {
                return function(e) {
                    if (Array.isArray(e)) return U(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || A(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || A(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, t) {
                if (e) {
                    if ("string" == typeof e) return U(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? U(e, t) : void 0
                }
            }

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function Y(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function M(e, t) {
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
                    var a, n = X(e);
                    if (t) {
                        var r = X(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Q(this, a)
                }
            }

            function Q(e, t) {
                if (t && ("object" === F(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return K(e)
            }

            function K(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function X(e) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(b.addStyles)();
            var V = new f.a;
            V.removeWords.apply(V, ["god"]);
            var Z = ["Bot", "Tom@Blooket", "Spencer@Blooket"],
                $ = function(e) {
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
                    }(l, e);
                    var t, a, n, o, i, s = J(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = s.call(this, e)).state = {
                            game: {
                                title: "",
                                author: "",
                                desc: "",
                                id: t.props.match.params.id || "",
                                private: !1,
                                questions: [],
                                coverImage: {}
                            },
                            playCount: 0,
                            favoriteCount: 0,
                            isVerified: !1,
                            isFavorited: !1,
                            isAdmin: !1,
                            showingAnswers: [],
                            reporting: !1,
                            loadingReport: !1,
                            report: "",
                            copying: !1,
                            canCopy: !1,
                            loadingCopy: !1,
                            ready: !1,
                            loadingDelete: !1,
                            zoomedImage: ""
                        }, t.onShowAnswers = t.onShowAnswers.bind(K(t)), t.onHost = t.onHost.bind(K(t)), t.onSolo = t.onSolo.bind(K(t)), t.onFavorite = t.onFavorite.bind(K(t)), t.onReport = t.onReport.bind(K(t)), t.onCopy = t.onCopy.bind(K(t)), t.onCopyConfirm = t.onCopyConfirm.bind(K(t)), t.onDelete = t.onDelete.bind(K(t)), t.loading = !1, t.here = !0, t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (o = D().mark((function e() {
                            var t, a, n, r, o, i, s, l, c;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.props.match.params.id, e.next = 3, this.props.user.getData();
                                    case 3:
                                        if (a = e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return Object(x.b)("SetPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 8:
                                        return n = [new Promise((function(e) {
                                            B.a.get("/api/games", {
                                                params: {
                                                    gameId: t
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(null)
                                            }))
                                        })), new Promise((function(e) {
                                            B.a.get("/api/users/favorited", {
                                                params: {
                                                    id: t
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(!1)
                                            }))
                                        }))], e.next = 11, Promise.all(n);
                                    case 11:
                                        if (r = e.sent, o = G(r, 2), i = o[0], s = o[1], i) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("return", this.setState({
                                            ready: !0
                                        }));
                                    case 17:
                                        if ((l = z(i.questions)).sort((function(e, t) {
                                                return e.number - t.number
                                            })), c = [], "true" === Object(P.h)("open") && (c = l.map((function(e) {
                                                return e.number
                                            }))), this.here) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 23:
                                        this.setState({
                                            game: {
                                                title: i.title,
                                                author: i.author,
                                                desc: i.desc,
                                                id: t,
                                                questions: l,
                                                private: i.private,
                                                coverImage: i.coverImage
                                            },
                                            playCount: i.playCount,
                                            favoriteCount: i.favoriteCount,
                                            isVerified: i.verified,
                                            lastChecked: i.lastChecked,
                                            showingAnswers: c,
                                            user: a,
                                            isAdmin: Z.includes(a.name),
                                            isFavorited: s,
                                            ready: !0
                                        });
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), i = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var r = o.apply(e, t);

                                function i(e) {
                                    Y(r, a, n, i, s, "next", e)
                                }

                                function s(e) {
                                    Y(r, a, n, i, s, "throw", e)
                                }
                                i(void 0)
                            }))
                        }, function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1
                        }
                    }, {
                        key: "onShowAnswers",
                        value: function(e) {
                            var t = z(this.state.showingAnswers),
                                a = t.indexOf(e); - 1 === a ? t.push(e) : t.splice(a, 1), this.setState({
                                showingAnswers: t
                            })
                        }
                    }, {
                        key: "onFavorite",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, B.a.put("/api/users/updatefavorites", {
                                id: this.props.match.params.id,
                                isUnfavoriting: this.state.isFavorited
                            }).then((function() {
                                e.here && e.setState({
                                    isFavorited: !e.state.isFavorited,
                                    favoriteCount: e.state.isFavorited ? e.state.favoriteCount - 1 : e.state.favoriteCount + 1
                                }, (function() {
                                    e.loading = !1
                                }))
                            })).catch((function(t) {
                                Object(x.b)(t), e.loading = !1
                            })))
                        }
                    }, {
                        key: "onHost",
                        value: function() {
                            this.loading || (this.loading = !0, window.open("".concat("https://play.blooket.com", "/host?id=").concat(this.state.game.id), "_blank").focus(), window.location.reload())
                        }
                    }, {
                        key: "onSolo",
                        value: function() {
                            this.loading || (this.loading = !0, this.state.game.id && window ? (window.open("".concat("https://play.blooket.com", "/solo?id=").concat(this.state.game.id), "_blank").focus(), window.location.reload()) : this.loading = !1)
                        }
                    }, {
                        key: "onReport",
                        value: function(e) {
                            var t = this;
                            this.loading || (this.loading = !0, this.state.game.id ? !e || this.state.isVerified || this.state.lastChecked && g()(this.state.lastChecked).add(1, "week").isAfter() ? (this.loading = !1, this.setState({
                                reporting: !1,
                                loadingReport: !1
                            })) : (this.setState({
                                loadingReport: !0
                            }), B.a.post("/api/reports", {
                                id: this.state.game.id
                            }).then((function() {
                                t.here && (t.setState({
                                    reporting: !1,
                                    loadingReport: !1,
                                    report: ""
                                }), t.loading = !1)
                            })).catch((function(e) {
                                Object(x.b)(e)
                            }))) : this.loading = !1)
                        }
                    }, {
                        key: "onCopy",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, B.a.get("/api/users/plan").then((function(t) {
                                e.here && (t.data.hasPlus ? e.setState({
                                    canCopy: !0,
                                    copying: !0
                                }) : e.setState({
                                    copying: !0
                                }), e.loading = !1)
                            })).catch((function(t) {
                                e.here && (Object(x.b)(t), e.loading = !1, e.setState({
                                    copying: !1
                                }))
                            })))
                        }
                    }, {
                        key: "onCopyConfirm",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loadingCopy: !0
                            }), B.a.post("/api/games/copy", {
                                id: this.state.game.id,
                                isDuplicate: !0
                            }).then((function(t) {
                                e.here && e.props.history.push("/edit?id=".concat(t.data._id))
                            })).catch((function(t) {
                                e.here && (Object(x.b)(t), e.loading = !1, e.setState({
                                    copying: !1,
                                    loadingCopy: !1
                                }))
                            })))
                        }
                    }, {
                        key: "onDelete",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loadingDelete: !0
                            }), B.a.delete("/api/games", {
                                params: {
                                    gameId: this.state.game.id
                                }
                            }).then((function() {
                                e.props.history.push("/discover"), window.close()
                            })).catch((function(t) {
                                Object(x.b)(t), e.setState({
                                    loadingDelete: !1
                                })
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.state.ready && !this.state.game.title ? (Object(x.b)("SetPage cannot be rendered without this.state.game.title"), r.a.createElement(c.a, {
                                to: "/404"
                            })) : r.a.createElement("div", {
                                className: v.isMobile ? C.a.mBody : C.a.body
                            }, r.a.createElement(N.a, {
                                title: "".concat(this.state.ready ? this.state.game.title : "View Set", " | Blooket"),
                                desc: "View a Blooket question set to see the questions and their answers. Also, you can host, favorite, report, or duplicate a set here."
                            }), r.a.createElement(L.a, {
                                user: this.state.user,
                                page: "Discover"
                            }), this.state.ready ? r.a.createElement("div", {
                                className: C.a.profileBody
                            }, r.a.createElement("div", {
                                className: k.a.mainRow
                            }, r.a.createElement("div", {
                                className: k.a.leftColumn
                            }, this.state.game.coverImage ? r.a.createElement("div", {
                                className: k.a.coverImageContainer
                            }, r.a.createElement("img", {
                                src: Object(P.f)(this.state.game.coverImage.url),
                                alt: "Cover",
                                className: k.a.coverImage
                            })) : r.a.createElement("div", {
                                className: k.a.coverFillerContainer
                            }, r.a.createElement("img", {
                                src: T.a.basic.blooket,
                                alt: "Blooket",
                                className: k.a.coverFillerImage
                            })), r.a.createElement("div", {
                                className: k.a.headerTitle
                            }, this.state.game.title), r.a.createElement("div", {
                                className: k.a.headerDesc
                            }, this.state.game.desc), r.a.createElement("div", {
                                className: k.a.headerStatsWrapper
                            }, r.a.createElement("div", {
                                className: k.a.headerStat
                            }, "".concat(Object(P.j)(this.state.playCount), " ").concat(1 === this.state.playCount ? "Play" : "Plays")), r.a.createElement("div", {
                                className: k.a.headerStatDivider
                            }, "•"), r.a.createElement("div", {
                                className: k.a.headerStatSmall
                            }, "".concat(Object(P.j)(this.state.favoriteCount), " ").concat(1 === this.state.favoriteCount ? "Favorite" : "Favorites"))), r.a.createElement("div", {
                                className: k.a.headerButtonRow
                            }, r.a.createElement(R.a, {
                                color: "#f2f2f2",
                                onClick: this.onSolo,
                                outsideClass: k.a.soloButton
                            }, r.a.createElement("div", {
                                className: k.a.headerButtonInside,
                                style: {
                                    color: "#3a3a3a"
                                }
                            }, r.a.createElement("i", {
                                className: m()(k.a.hostIcon, "fas fa-user-astronaut")
                            }), "Solo")), r.a.createElement(R.a, {
                                color: "#0bc2cf",
                                onClick: this.onHost,
                                outsideClass: k.a.bigScreen
                            }, r.a.createElement("div", {
                                className: k.a.headerButtonInside
                            }, r.a.createElement("i", {
                                className: m()(k.a.hostIcon, "fas fa-play")
                            }), "Host")), r.a.createElement("div", {
                                className: m()(k.a.noHostText, k.a.smallScreen)
                            }, "No Hosting on Mobile")), r.a.createElement("div", {
                                className: k.a.smallButtonsContainer
                            }, r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.onFavorite
                            }, r.a.createElement("i", {
                                className: m()(k.a.smallIcon, this.state.isFavorited ? "fas fa-star" : "far fa-star")
                            }), this.state.isFavorited ? "Unfavorite" : "Favorite"), r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.onCopy
                            }, r.a.createElement("i", {
                                className: m()(k.a.smallIcon, "far fa-clone")
                            }), "Copy"), r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        reporting: !0
                                    })
                                }
                            }, r.a.createElement("i", {
                                className: m()(k.a.smallIcon, "far fa-flag")
                            }), "Report")), r.a.createElement("div", {
                                className: k.a.headerBottomContainer
                            }, r.a.createElement("i", {
                                className: m()(k.a.headerAuthorIcon, "fas fa-user")
                            }), r.a.createElement(u.b, {
                                className: k.a.headerAuthorText,
                                to: "/discover?n=".concat(encodeURIComponent(this.state.game.author))
                            }, this.state.game.author), this.state.isAdmin ? r.a.createElement("div", {
                                className: k.a.deleteButton,
                                role: "button",
                                tabIndex: 0,
                                onDoubleClick: this.onDelete
                            }, "Delete") : null)), r.a.createElement("div", {
                                className: k.a.questionSection
                            }, r.a.createElement("div", {
                                className: k.a.questionSectionTop
                            }, r.a.createElement("div", {
                                className: k.a.numQuestions
                            }, "".concat(Object(P.j)(this.state.game.questions.length), " Question").concat(1 === this.state.game.questions.length ? "" : "s")), r.a.createElement(R.a, {
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.setState({
                                        showingAnswers: e.state.showingAnswers.length === e.state.game.questions.length ? [] : e.state.game.questions.map((function(e) {
                                            return e.number
                                        }))
                                    })
                                }
                            }, r.a.createElement("div", {
                                className: k.a.showAnswersButtonInside
                            }, this.state.showingAnswers.length === this.state.game.questions.length ? "Hide Answers" : "Show Answers"))), this.state.game.questions.map((function(t) {
                                return r.a.createElement("div", {
                                    key: t.number,
                                    className: k.a.questionContainer
                                }, r.a.createElement("div", {
                                    className: k.a.questionRow
                                }, r.a.createElement("div", {
                                    className: k.a.questionTextContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onShowAnswers(t.number)
                                    }
                                }, r.a.createElement("div", {
                                    className: k.a.questionNum
                                }, "Question ".concat(t.number)), r.a.createElement("div", {
                                    className: k.a.questionTextRow
                                }, r.a.createElement("div", {
                                    className: m()(k.a.questionText, H({}, k.a.highlight, e.state.isAdmin && V.isProfane(t.question)))
                                }, t.question.includes("`*`") ? t.question.slice(0, t.question.indexOf("`*`")) : t.question))), t.image && t.image.url || t.audio && t.audio.url || t.question.includes("`*`") ? r.a.createElement("div", {
                                    className: k.a.questionImageContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: !t.image || !t.image.url || t.audio && t.audio.url ? function() {} : function() {
                                        return e.setState({
                                            zoomedImage: t.image.url
                                        })
                                    },
                                    style: {
                                        cursor: !t.image || !t.image.url || t.audio && t.audio.url ? "default" : "cursor",
                                        backgroundColor: !t.image || !t.image.url || t.audio && t.audio.url ? "#fff" : "#333333"
                                    }
                                }, t.audio && t.audio.url ? r.a.createElement("div", {
                                    className: k.a.questionFunc
                                }, r.a.createElement(I.a, {
                                    audioUrl: t.audio.url,
                                    width: "60%"
                                })) : t.image && t.image.url ? v.isMobile ? r.a.createElement("img", {
                                    src: Object(P.f)(t.image.url),
                                    alt: "Question Background",
                                    className: k.a.questionImage
                                }) : r.a.createElement(_.a, {
                                    height: 120,
                                    width: 165
                                }, r.a.createElement("img", {
                                    src: Object(P.f)(t.image.url),
                                    alt: "Question Background",
                                    className: k.a.questionImage
                                })) : t.question.includes("`*`") ? r.a.createElement("div", {
                                    className: k.a.questionFunc
                                }, r.a.createElement(b.StaticMathField, {
                                    className: k.a.qMathField
                                }, t.question.slice(t.question.indexOf("`*`") + 3, t.question.length - 3))) : null) : null, r.a.createElement("div", {
                                    className: k.a.questionInfoRow
                                }, t.random ? r.a.createElement("i", {
                                    className: m()("fas fa-random", k.a.questionInfo)
                                }) : null, r.a.createElement("div", {
                                    className: k.a.questionInfo
                                }, "".concat(t.timeLimit, " sec")))), e.state.showingAnswers.includes(t.number) ? r.a.createElement("div", {
                                    className: k.a.answerContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onShowAnswers(t.number)
                                    }
                                }, t.answers.map((function(a, n) {
                                    return r.a.createElement("div", {
                                        className: m()(k.a.answer, H({}, k.a.faded, !(t.correctAnswers.includes(a) || e.state.isAdmin && V.isProfane(a)))),
                                        style: {
                                            backgroundColor: e.state.isAdmin && V.isProfane(a) ? "#e6e600" : q.a.default.answers[n].background
                                        },
                                        key: a
                                    }, r.a.createElement("i", {
                                        className: m()(t.correctAnswers.includes(a) ? "fas fa-check" : "fas fa-times", k.a.answerIcon)
                                    }), r.a.createElement("div", {
                                        className: k.a.answerMediaContainer,
                                        style: {
                                            maxHeight: 2 === a.split("`~`").length || "`*`" === a.slice(0, 3) ? "80px" : null
                                        }
                                    }, 2 === a.split("`~`").length ? r.a.createElement("img", {
                                        src: Object(P.f)(a.split("`~`")[1]),
                                        alt: "Answer",
                                        className: k.a.answerImg,
                                        draggable: !1
                                    }) : "`*`" === a.slice(0, 3) ? r.a.createElement(b.StaticMathField, {
                                        className: k.a.mathField
                                    }, a.slice(3, a.length - 3)) : r.a.createElement("div", {
                                        className: k.a.answerText
                                    }, a)))
                                }))) : null)
                            })), r.a.createElement("div", {
                                className: k.a.bottomSpacer
                            })))) : null, this.state.zoomedImage ? r.a.createElement("div", {
                                className: m()(C.a.modal, C.a.modalButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: ""
                                    })
                                }
                            }, r.a.createElement("img", {
                                src: Object(P.f)(this.state.zoomedImage),
                                alt: "Upload",
                                className: C.a.bigImage,
                                draggable: !1
                            })) : null, this.state.reporting ? r.a.createElement("div", {
                                className: k.a.reportModal
                            }, r.a.createElement("div", {
                                className: k.a.reportContainer
                            }, r.a.createElement("div", {
                                className: k.a.reportHeader
                            }, "Report Set"), r.a.createElement("div", {
                                className: k.a.reportText
                            }, "If this set is offensive, abusive, inappropriate, misleading, and/or contains false information, please let us know below.", " We appreciate your time and hope that together we can make Blooket a safe place to learn."), r.a.createElement("textarea", {
                                className: m()(k.a.reportInput, H({}, k.a.reportInputFilled, this.state.report)),
                                onChange: function(t) {
                                    e.setState({
                                        report: t.target.value
                                    })
                                },
                                value: this.state.report,
                                "data-gramm_editor": "false"
                            }), this.state.loadingReport ? r.a.createElement(O.a, null) : r.a.createElement("div", {
                                className: k.a.reportButtonContainer
                            }, r.a.createElement("div", {
                                className: k.a.reportYesButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onReport(!0)
                                }
                            }, "Report"), r.a.createElement("div", {
                                className: k.a.reportNoButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onReport(!1)
                                }
                            }, "Cancel")))) : null, this.state.copying ? this.state.canCopy ? r.a.createElement(j.a, {
                                text: this.state.loadingCopy ? "Copying..." : "Do you want to create a copy of this question set?",
                                loading: this.state.loadingCopy,
                                buttonOne: {
                                    text: "Yes",
                                    click: this.onCopyConfirm,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        e.setState({
                                            copying: !1,
                                            loadingCopy: !1,
                                            canCopy: !1
                                        }), e.loading = !1
                                    },
                                    color: "blue"
                                }
                            }) : r.a.createElement(j.a, {
                                text: "Get Blooket Plus to Duplicate Sets",
                                buttonOne: {
                                    text: "Upgrade",
                                    click: function() {
                                        return e.props.history.push("/upgrade")
                                    },
                                    color: "orange"
                                },
                                buttonTwo: {
                                    text: "Not Now",
                                    click: function() {
                                        e.setState({
                                            copying: !1,
                                            loadingCopy: !1
                                        }), e.loading = !1
                                    },
                                    color: "blue"
                                }
                            }) : null, this.state.loadingDelete ? r.a.createElement(j.a, {
                                text: "Deleting set...",
                                loading: this.state.loadingDelete
                            }) : null)
                        }
                    }]) && M(t.prototype, a), n && M(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(r.a.Component);
            $.propTypes = {
                match: l.a.object,
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(S.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))($)))
        },
        "SY/F": function(e, t, a) {
            var n = a("YMPk");
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
        YMPk: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___3SSbI-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:420px;width:90%;box-sizing:border-box;background-color:#fff;border-radius:7px;text-align:center;padding:20px 10px 27px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);color:#3a3a3a}.styles__header___1rSfi-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:5px}.styles__subheader___2qsD6-camelCase{font-size:28px;line-height:30px;font-family:Nunito,sans-serif;margin-bottom:30px}.styles__button___3ADDq-camelCase{width:200px;margin:10px auto}.styles__buttonInside___2C0ee-camelCase{height:40px;font-size:30px;font-weight:700}@media only screen and (max-width:600px){.styles__container___3SSbI-camelCase{max-width:320px}}", ""]), t.locals = {
                container: "styles__container___3SSbI-camelCase",
                header: "styles__header___1rSfi-camelCase",
                subheader: "styles__subheader___2qsD6-camelCase",
                button: "styles__button___3ADDq-camelCase",
                buttonInside: "styles__buttonInside___2C0ee-camelCase"
            }
        },
        ZXWq: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("H1WH"),
                i = a("Ty5D"),
                s = a("17x9"),
                l = a.n(s),
                c = a("TSYQ"),
                u = a.n(c),
                p = a("FKJl"),
                f = a("XTAU"),
                d = a("oQ+7"),
                m = a("lmLo"),
                h = a("E8Bj"),
                _ = a("Xst1"),
                y = a.n(_),
                g = a("LYWA"),
                v = a.n(g),
                b = a("qnYv");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: C(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == x(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function C(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = E(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function E(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function C(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function E(e, t) {
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
                    var a, n = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return j(this, a)
                }
            }

            function j(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return O(e)
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = [{
                    title: "Folders",
                    desc: "Create folders to organize your question sets and favorites",
                    icon: "fas fa-folder"
                }, {
                    title: "Larger Live Games",
                    desc: "Host games with up to 300 players (60 player max with Starter)",
                    icon: "fas fa-users"
                }, {
                    title: "Enhanced Reports",
                    desc: "View question-by-question data and individual student breakdowns",
                    icon: "fas fa-chart-bar"
                }, {
                    title: "Early Game Access",
                    desc: "Gain access to game modes weeks before Starter users",
                    icon: "fas fa-gamepad"
                }, {
                    title: "Copy & Duplicate",
                    desc: "Create your own copy of any set to edit for yourself",
                    icon: "fas fa-copy"
                }, {
                    title: "Audio Questions",
                    desc: "Record or upload your own audio and add it to questions",
                    icon: "fas fa-microphone-alt"
                }, {
                    title: "Longer Deadlines",
                    desc: "Assign homeworks for up to 365 days (14 day max with Starter)",
                    icon: "fas fa-file-alt"
                }, {
                    title: "Merging Sets",
                    desc: "Combine two of your sets with only a few clicks",
                    icon: "fas fa-random"
                }, {
                    title: "Bonus Tokens",
                    desc: "10 extra tokens for students after every game",
                    icon: "fas fa-coins"
                }],
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
                        }), t && k(e, t)
                    }(c, e);
                    var t, a, n, i, s, l = N(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = l.call(this, e)).state = {
                            loggedIn: !1,
                            plan: "Starter",
                            idBase: "",
                            dashboardBase: "",
                            hasPlus: !1
                        }, t.goToUpgradeLink = t.goToUpgradeLink.bind(O(t)), t.plusUpgradeButtonText = t.plusUpgradeButtonText.bind(O(t)), t.plusFlexUpgradeButtonText = t.plusFlexUpgradeButtonText.bind(O(t)), t
                    }
                    return t = c, (a = [{
                        key: "componentDidMount",
                        value: (i = w().mark((function e() {
                            var t = this;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, b.a.get("/api/config").then((function(e) {
                                            t.setState({
                                                idBase: e.data.frontendIDBase,
                                                dashboardBase: e.data.frontendDashboardBase
                                            })
                                        }));
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        e.sent && b.a.get("/api/users/plan").then((function(e) {
                                            t.setState({
                                                loggedIn: !0,
                                                plan: e.data.plan,
                                                hasPlus: e.data.hasPlus
                                            })
                                        })).catch((function(e) {
                                            Object(p.b)(e)
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var r = i.apply(e, t);

                                function o(e) {
                                    C(r, a, n, o, s, "next", e)
                                }

                                function s(e) {
                                    C(r, a, n, o, s, "throw", e)
                                }
                                o(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "goToUpgradeLink",
                        value: function(e) {
                            var t = "";
                            if (this.state.loggedIn) t = this.state.hasPlus ? "/dashboard" : "/upgrade/checkout/".concat(e);
                            else {
                                var a = "".concat(this.state.dashboardBase, "/upgrade/checkout/").concat(e);
                                t = "".concat(this.state.idBase, "/signup?n=").concat(a)
                            }
                            window.location.href = t
                        }
                    }, {
                        key: "plusUpgradeButtonText",
                        value: function() {
                            return this.state.loggedIn ? "Plus" === this.state.plan ? "Already Owned" : "Plus Flex" === this.state.plan ? "Already On Plus Flex" : "Buy Now" : "Get Started"
                        }
                    }, {
                        key: "plusFlexUpgradeButtonText",
                        value: function() {
                            return this.state.loggedIn ? "Plus" === this.state.plan ? "Already On Plus" : "Plus Flex" === this.state.plan ? "Already Owned" : "Buy Now" : "Get Started"
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.a.createElement("div", {
                                className: o.isMobile ? y.a.mBody : y.a.body
                            }, r.a.createElement(f.a, {
                                title: "Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), r.a.createElement(d.a, null), r.a.createElement("div", {
                                className: v.a.background
                            }), r.a.createElement("div", {
                                className: y.a.regularBody
                            }, r.a.createElement("div", {
                                className: v.a.header
                            }, "Level Up Your Classroom"), r.a.createElement("div", {
                                className: v.a.planContainer
                            }, r.a.createElement("div", {
                                className: v.a.plan
                            }, r.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#7fba43"
                                }
                            }), r.a.createElement("div", {
                                className: v.a.planTop
                            }, "Starter"), r.a.createElement("div", {
                                className: v.a.planPrice
                            }, "Free"), r.a.createElement("div", {
                                className: v.a.planSubText
                            }, "forever"), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Unlimited Sets & Edits"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Unique Game Modes"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Question Set Search"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Up to 60 Players"), r.a.createElement(m.a, {
                                color: "#7fba43",
                                linkTo: this.state.loggedIn ? "/my-sets" : "".concat(this.state.idBase, "/signup"),
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.state.loggedIn ? "Already Owned" : "Get Started")), r.a.createElement("div", {
                                className: v.a.plan
                            }, r.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#ff7b24"
                                }
                            }), r.a.createElement("div", {
                                className: v.a.planTop
                            }, "Plus"), r.a.createElement("div", {
                                className: v.a.planPrice
                            }, "$2.99"), r.a.createElement("div", {
                                className: v.a.planSubText
                            }, "per month, charged yearly ($35.88)"), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "All Starter Features"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Enhanced Game Reports"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Early Event Access"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Question Set Folders"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Student Bonus Tokens"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Copy & Duplicate Sets"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Up to 300 Players"), r.a.createElement(m.a, {
                                color: "#ff7b24",
                                onClick: function() {
                                    return e.goToUpgradeLink("plus")
                                },
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.plusUpgradeButtonText())), r.a.createElement("div", {
                                className: v.a.plan
                            }, r.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#eb5726"
                                }
                            }), r.a.createElement("div", {
                                className: v.a.planTop
                            }, "Plus Flex"), r.a.createElement("div", {
                                className: v.a.planPrice
                            }, "$4.99"), r.a.createElement("div", {
                                className: v.a.planSubText
                            }, "per month"), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "All Plus Features"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Pay Monthly"), r.a.createElement("div", {
                                className: v.a.planSpacer
                            }), r.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Cancel Whenever"), r.a.createElement(m.a, {
                                color: "#eb5726",
                                onClick: function() {
                                    return e.goToUpgradeLink("plus-flex")
                                },
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.plusFlexUpgradeButtonText()))), r.a.createElement("div", {
                                className: v.a.groupContainer
                            }, "Looking for a discount? Try group subscriptions!", r.a.createElement(m.a, {
                                color: "#0bc2cf",
                                linkTo: "/upgrade/group/price",
                                outsideClass: v.a.groupButton,
                                insideClass: v.a.planButtonInside
                            }, "Group Pricing")), r.a.createElement("div", {
                                className: v.a.middleWrapper
                            }, r.a.createElement("div", {
                                className: v.a.middleHeader
                            }, "Perks of Plus"), r.a.createElement("div", {
                                className: v.a.middlePerks
                            }, P.map((function(e) {
                                return r.a.createElement("div", {
                                    key: e.title,
                                    className: v.a.perkContainer
                                }, r.a.createElement("i", {
                                    className: u()(e.icon, v.a.perkIcon)
                                }), r.a.createElement("div", {
                                    className: v.a.perkInfo
                                }, r.a.createElement("div", {
                                    className: v.a.perkTitle
                                }, e.title), e.desc))
                            })))), r.a.createElement("div", {
                                className: v.a.questionsHeader
                            }, "Common Questions"), r.a.createElement("div", {
                                className: v.a.questionsWrapper
                            }, r.a.createElement("div", {
                                className: v.a.questionContainer
                            }, r.a.createElement("div", {
                                className: v.a.questionHeader
                            }, "How do I pay?"), r.a.createElement("div", {
                                className: v.a.questionText
                            }, "\n                  We accept all major credits cards. Also, in order\n                  to keep your information secure, we use a trusted third party service\n                  to handle all payments. We will automatically renew Blooket Plus every\n                  year and Blooket Plus Flex every month unless you cancel the subscription\n                  in the Settings page of your profile.\n                ")), r.a.createElement("div", {
                                className: v.a.questionContainer
                            }, r.a.createElement("div", {
                                className: v.a.questionHeader
                            }, "Can I use a purchase order?"), r.a.createElement("div", {
                                className: v.a.questionText
                            }, "\n                  Unfortunately, we do not accept purchase orders for individual subscriptions.\n                  However, you can use a purchase order for group plans. We’ll generate a quote\n                  for you and send you a final invoice using your purchase order for these subscriptions.\n                "))), r.a.createElement("div", {
                                style: {
                                    height: 10
                                }
                            })))
                        }
                    }]) && E(t.prototype, a), n && E(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(r.a.Component);
            B.propTypes = {
                user: l.a.object
            }, t.a = Object(h.c)(Object(i.g)(B))
        },
        bm2Z: function(e, t, a) {
            var n = a("FXJY");
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
        fKgg: function(e, t, a) {
            var n = a("1OWE");
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
        fT0c: function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a("q1tI"),
                    r = a.n(n),
                    o = a("H1WH"),
                    i = a("17x9"),
                    s = a.n(i),
                    l = a("TSYQ"),
                    c = a.n(l),
                    u = a("wd/R"),
                    p = a.n(u),
                    f = a("yzbm"),
                    d = a("WjD0"),
                    m = a.n(d),
                    h = a("FKJl"),
                    _ = a("Xst1"),
                    y = a.n(_),
                    g = a("bm2Z"),
                    v = a.n(g),
                    b = a("XTAU"),
                    x = a("oQ+7"),
                    w = a("ca/f"),
                    C = a("74sb"),
                    E = a("E8Bj"),
                    k = a("swc+"),
                    N = a("qnYv"),
                    j = a("lmLo");

                function O(e) {
                    return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

                function P() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    P = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        a = t.hasOwnProperty,
                        n = Object.defineProperty || function(e, t, a) {
                            e[t] = a.value
                        },
                        r = "function" == typeof Symbol ? Symbol : {},
                        o = r.iterator || "@@iterator",
                        i = r.asyncIterator || "@@asyncIterator",
                        s = r.toStringTag || "@@toStringTag";

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

                    function c(e, t, a, r) {
                        var o = t && t.prototype instanceof f ? t : f,
                            i = Object.create(o.prototype),
                            s = new k(r || []);
                        return n(i, "_invoke", {
                            value: x(e, a, s)
                        }), i
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
                    var p = {};

                    function f() {}

                    function d() {}

                    function m() {}
                    var h = {};
                    l(h, o, (function() {
                        return this
                    }));
                    var _ = Object.getPrototypeOf,
                        y = _ && _(_(N([])));
                    y && y !== t && a.call(y, o) && (h = y);
                    var g = m.prototype = f.prototype = Object.create(h);

                    function v(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function b(e, t) {
                        var r;
                        n(this, "_invoke", {
                            value: function(n, o) {
                                function i() {
                                    return new t((function(r, i) {
                                        ! function n(r, o, i, s) {
                                            var l = u(e[r], e, o);
                                            if ("throw" !== l.type) {
                                                var c = l.arg,
                                                    p = c.value;
                                                return p && "object" == O(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                    n("next", e, i, s)
                                                }), (function(e) {
                                                    n("throw", e, i, s)
                                                })) : t.resolve(p).then((function(e) {
                                                    c.value = e, i(c)
                                                }), (function(e) {
                                                    return n("throw", e, i, s)
                                                }))
                                            }
                                            s(l.arg)
                                        }(n, o, r, i)
                                    }))
                                }
                                return r = r ? r.then(i, i) : i()
                            }
                        })
                    }

                    function x(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return j()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = w(i, a);
                                    if (s) {
                                        if (s === p) continue;
                                        return s
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = u(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }

                    function w(e, t) {
                        var a = e.iterator[t.method];
                        if (void 0 === a) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return p
                        }
                        var n = u(a, e.iterator, t.arg);
                        if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                        var r = n.arg;
                        return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                    }

                    function C(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function E(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function k(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(C, this), this.reset(!0)
                    }

                    function N(e) {
                        if (e) {
                            var t = e[o];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var n = -1,
                                    r = function t() {
                                        for (; ++n < e.length;)
                                            if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return r.next = r
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
                    return d.prototype = m, n(g, "constructor", {
                        value: m,
                        configurable: !0
                    }), n(m, "constructor", {
                        value: d,
                        configurable: !0
                    }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, v(b.prototype), l(b.prototype, i, (function() {
                        return this
                    })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                        void 0 === o && (o = Promise);
                        var i = new b(c(t, a, n, r), o);
                        return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                        return this
                    })), l(g, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = Object(e),
                            a = [];
                        for (var n in t) a.push(n);
                        return a.reverse(),
                            function e() {
                                for (; a.length;) {
                                    var n = a.pop();
                                    if (n in t) return e.value = n, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, e.values = N, k.prototype = {
                        constructor: k,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
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
                                return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                            }
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r],
                                    i = o.completion;
                                if ("root" === o.tryLoc) return n("end");
                                if (o.tryLoc <= this.prev) {
                                    var s = a.call(o, "catchLoc"),
                                        l = a.call(o, "finallyLoc");
                                    if (s && l) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                    } else {
                                        if (!l) throw new Error("try statement without catch or finally");
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
                            var i = o ? o.completion : {};
                            return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var a = this.tryEntries[t];
                                if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), p
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var a = this.tryEntries[t];
                                if (a.tryLoc === e) {
                                    var n = a.completion;
                                    if ("throw" === n.type) {
                                        var r = n.arg;
                                        E(a)
                                    }
                                    return r
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, a) {
                            return this.delegate = {
                                iterator: N(e),
                                resultName: t,
                                nextLoc: a
                            }, "next" === this.method && (this.arg = void 0), p
                        }
                    }, e
                }

                function B(e, t, a, n, r, o, i) {
                    try {
                        var s = e[o](i),
                            l = s.value
                    } catch (e) {
                        return void a(e)
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, r)
                }

                function I(e, t) {
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
                        var a, n = F(e);
                        if (t) {
                            var r = F(this).constructor;
                            a = Reflect.construct(n, arguments, r)
                        } else a = n.apply(this, arguments);
                        return R(this, a)
                    }
                }

                function R(e, t) {
                    if (t && ("object" === O(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return q(e)
                }

                function q(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function F(e) {
                    return (F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var H = function(t) {
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
                    }(d, t);
                    var a, n, i, s, l, u = T(d);

                    function d(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, d), (t = u.call(this, e)).state = {
                            plan: {},
                            groupName: "",
                            groupNameError: "",
                            poNumber: "",
                            poNumberError: "",
                            pdf: null,
                            pdfError: ""
                        }, t.isRenewal = Boolean(Object(C.h)("r")), t.onPdfDrop = t.onPdfDrop.bind(q(t)), t.onSubscribe = t.onSubscribe.bind(q(t)), t
                    }
                    return a = d, (n = [{
                        key: "componentDidMount",
                        value: (s = P().mark((function e() {
                            var t, a, n, r, o;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return Object(h.b)("UpgradeGroupPOPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 7:
                                        return e.next = 9, N.a.get("/api/subscriptions/group-plans");
                                    case 9:
                                        if (200 === (t = e.sent).status) {
                                            e.next = 12;
                                            break
                                        }
                                        throw new Error("cannot proceed without group plans");
                                    case 12:
                                        if ((a = t.data.plans) && 0 !== a.length) {
                                            e.next = 15;
                                            break
                                        }
                                        throw new Error("cannot proceed without valid group plans");
                                    case 15:
                                        if (n = decodeURIComponent(Object(C.h)("groupPlanName")), (r = a.filter((function(e) {
                                                return e.name === n
                                            }))) && 0 !== r.length) {
                                            e.next = 19;
                                            break
                                        }
                                        throw new Error("could not find a name named ".concat(n));
                                    case 19:
                                        o = r[0], this.setState({
                                            loading: !1,
                                            plan: o,
                                            groupName: decodeURIComponent(Object(C.h)("n"))
                                        });
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), l = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var r = s.apply(e, t);

                                function o(e) {
                                    B(r, a, n, o, i, "next", e)
                                }

                                function i(e) {
                                    B(r, a, n, o, i, "throw", e)
                                }
                                o(void 0)
                            }))
                        }, function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "onPdfDrop",
                        value: function(e) {
                            var t = e[0];
                            t ? this.setState({
                                pdfError: "",
                                pdf: t
                            }) : this.setState({
                                pdfError: "Error uploading the PDF",
                                pdf: null
                            })
                        }
                    }, {
                        key: "onSubscribe",
                        value: function(t) {
                            var a = this;
                            t.preventDefault(), this.setState({
                                loading: !0
                            });
                            var n = "",
                                r = "",
                                o = "";
                            if (this.state.groupName || (n = "Group Name is required."), this.state.poNumber || (r = "Purchase Order Number is required."), this.state.pdf || (o = "Purchase Order PDF is required."), this.setState({
                                    groupNameError: n,
                                    poNumberError: r,
                                    pdfError: o
                                }), n || r || o) this.setState({
                                loading: !1
                            });
                            else {
                                var i = new m.a;
                                i.append("file", this.state.pdf), i.append("folder", "POs"), i.append("upload_preset", "normal"), i.append("api_key", e.env.CLOUDINARY_API_KEY), i.append("timestamp", parseInt(Date.now() / 1e3, 10)), k.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", i, {
                                    headers: {
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    withCredentials: !1
                                }).then((function(e) {
                                    a.isRenewal ? N.a.put("/api/groups/renew", {
                                        groupName: a.state.groupName,
                                        poNumber: a.state.poNumber,
                                        pdfURL: e.data.secure_url,
                                        pdfID: e.data.public_id
                                    }).then((function() {
                                        a.props.history.push("/group-plan")
                                    })).catch((function(e) {
                                        Object(h.b)(e), a.setState({
                                            loading: !1,
                                            groupNameError: "Something went wrong. Make sure you uploaded a PDF, and if so then please contact support."
                                        })
                                    })) : N.a.post("/api/groups/po", {
                                        plan: a.state.plan,
                                        groupName: a.state.groupName,
                                        poNumber: a.state.poNumber,
                                        pdfURL: e.data.secure_url,
                                        pdfID: e.data.public_id
                                    }).then((function() {
                                        a.props.user.getLoggedIn(), a.props.history.push("/group-plan")
                                    })).catch((function(e) {
                                        Object(h.b)(e), a.setState({
                                            loading: !1,
                                            groupNameError: "Something went wrong. Make sure you uploaded a PDF, and if so then please contact support."
                                        })
                                    }))
                                })).catch((function(e) {
                                    Object(h.b)(e), a.setState({
                                        loading: !1,
                                        groupNameError: "Something went very wrong. Please contact support."
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this;
                            if (this.state.plan) return r.a.createElement("div", {
                                className: o.isMobile ? y.a.mBody : y.a.body
                            }, r.a.createElement(b.a, {
                                title: "Group Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), r.a.createElement(x.a, null), r.a.createElement("div", {
                                className: y.a.slantBackground
                            }), r.a.createElement("div", {
                                className: y.a.regularBody
                            }, this.state.plan && this.state.plan.name ? r.a.createElement("form", {
                                onSubmit: this.onSubscribe,
                                className: v.a.centerWrapper
                            }, r.a.createElement("div", {
                                className: v.a.container
                            }, r.a.createElement("div", {
                                className: v.a.header
                            }, "Pay With Purchase Order"), r.a.createElement("div", {
                                className: v.a.subtext
                            }, "Blooket Plus: ".concat(this.state.plan.name, " Plan"))), r.a.createElement("div", {
                                className: v.a.container
                            }, r.a.createElement("div", {
                                className: v.a.inputHeader
                            }, "Subscription Group Name"), r.a.createElement("div", {
                                className: c()(v.a.inputContainer, (e = {}, S(e, v.a.inputFilled, this.state.groupName), S(e, v.a.inputError, this.state.groupNameError), e))
                            }, r.a.createElement("input", {
                                className: v.a.input,
                                placeholder: "Group Name...",
                                onChange: function(e) {
                                    return a.setState({
                                        groupName: e.target.value.slice(0, 50),
                                        groupNameError: ""
                                    })
                                },
                                value: this.state.groupName,
                                type: "text"
                            })), r.a.createElement("div", {
                                className: v.a.inputHeader
                            }, "Purchase Order Number"), r.a.createElement("div", {
                                className: c()(v.a.inputContainer, (t = {}, S(t, v.a.inputFilled, this.state.poNumber), S(t, v.a.inputErorr, this.state.poNumberError), t)),
                                style: {
                                    marginBottom: 10
                                }
                            }, r.a.createElement("input", {
                                className: v.a.input,
                                placeholder: "Purchase Order Number...",
                                onChange: function(e) {
                                    return a.setState({
                                        poNumber: e.target.value.slice(0, 50),
                                        poNumberError: ""
                                    })
                                },
                                value: this.state.poNumber,
                                type: "text"
                            }))), r.a.createElement("div", {
                                className: v.a.container
                            }, this.isRenewal ? "\n                  Upload your purchase order below. We'll send you an email with the final invoice immediately after.\n                  The will extend the subscription for 1 year past the current end date.\n                " : "\n                  Upload your purchase order below. We'll send you an email with the final invoice immediately after.\n                  The subscription will last for 1 year until ".concat(p()().format("MM/DD/YYYY"), ".\n                "), r.a.createElement("br", null), r.a.createElement("br", null), this.isRenewal ? "\n                  Your members' plans will automatically be extended, but all plans will\n                  be canceled if payment is not received within 30 days.\n                " : "\n                  You'll be able to distribute the plans as soon as you upload the PO, but all plans will\n                  be canceled if payment is not received within 30 days.\n                ", r.a.createElement("br", null), r.a.createElement("br", null), "\n                  WARNING: Uploading a fake purchase order can be punished through the deletion of your account.\n                "), r.a.createElement("div", {
                                className: v.a.container
                            }, r.a.createElement("div", {
                                className: v.a.inputHeader
                            }, "Upload Purchase Order PDF"), this.state.pdf ? r.a.createElement("div", {
                                className: v.a.pdfRow
                            }, r.a.createElement("i", {
                                className: c()("fas fa-times", v.a.removeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.setState({
                                        pdf: null,
                                        pdfError: ""
                                    })
                                }
                            }), this.state.pdf.name) : r.a.createElement(f.a, {
                                multiple: !1,
                                accept: "application/pdf",
                                onDropAccepted: this.onPdfDrop,
                                onDropRejected: function() {
                                    return a.setState({
                                        pdfError: "PDF Denied (Check PDF Format & Size < 2.5 MB)"
                                    })
                                },
                                className: v.a.dropContainer,
                                activeClassName: v.a.activeDropContainer,
                                maxSize: 25e5
                            }, r.a.createElement("i", {
                                className: c()("fas fa-file-upload", v.a.dropIcon)
                            }), r.a.createElement("div", {
                                className: v.a.dropHeader
                            }, "Drag a PDF or Click to Upload"), "File must be less than 5MB")), this.state.groupNameError || this.state.poNumberError || this.state.pdfError ? r.a.createElement("div", {
                                className: v.a.errorContainer
                            }, r.a.createElement("i", {
                                className: c()("fas fa-times-circle", v.a.errorIcon)
                            }), this.state.groupNameError || this.state.poNumberError || this.state.pdfError) : null, r.a.createElement(j.a, {
                                color: "#0bc2cf",
                                outsideClass: v.a.submitButton,
                                insideClass: v.a.submitButtonInside,
                                onClick: this.onSubscribe
                            }, this.isRenewal ? "Renew Now" : "Subscribe Now"), r.a.createElement("input", {
                                type: "submit",
                                style: {
                                    opacity: 0,
                                    display: "none"
                                }
                            })) : null), this.state.loading ? r.a.createElement(w.a, {
                                text: "Processing...",
                                loading: !0
                            }) : null)
                        }
                    }]) && I(a.prototype, n), i && I(a, i), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), d
                }(r.a.Component);
                H.propTypes = {
                    history: s.a.object,
                    user: s.a.object
                }, t.a = Object(E.c)(H)
            }).call(this, a("8oxB"))
        },
        mOsA: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("H1WH"),
                i = a("TSYQ"),
                s = a.n(i),
                l = a("17x9"),
                c = a.n(l),
                u = a("Xst1"),
                p = a.n(u),
                f = a("IStp"),
                d = a.n(f),
                m = a("XTAU"),
                h = a("oQ+7"),
                _ = a("ca/f"),
                y = a("E8Bj"),
                g = a("74sb"),
                v = a("lmLo"),
                b = a("qnYv");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: C(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == x(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function C(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = E(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function E(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function C(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function E(e, t) {
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
                    var a, n = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return j(this, a)
                }
            }

            function j(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return O(e)
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = {
                    Friends: "#1f77b4",
                    Department: "#ffa31e",
                    "Small School": "#9467bd",
                    School: "#2ca02c"
                },
                B = ["Get Quote Immediately", "Huge Discount", "Admin Page to Manage Plans", "Pay With PO or Credit Card"],
                I = function(e) {
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
                    }(u, e);
                    var t, a, n, i, l, c = N(u);

                    function u(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (t = c.call(this, e)).state = {
                            loggedIn: !1,
                            popShown: "",
                            groupName: "",
                            groupPlans: []
                        }, t.groupPlanName = "", t.choosePlan = t.choosePlan.bind(O(t)), t.goToQuote = t.goToQuote.bind(O(t)), t
                    }
                    return t = u, (a = [{
                        key: "componentDidMount",
                        value: (i = w().mark((function e() {
                            var t, a;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        return e.sent && this.setState({
                                            loggedIn: !0
                                        }), e.next = 6, b.a.get("/api/subscriptions/group-plans");
                                    case 6:
                                        if (200 === (t = e.sent).status) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new Error("cannot proceed without group plans");
                                    case 9:
                                        if ((a = t.data.plans) && 0 !== a.length) {
                                            e.next = 12;
                                            break
                                        }
                                        throw new Error("cannot proceed wthout any valid group plans");
                                    case 12:
                                        this.setState({
                                            groupPlans: a
                                        });
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), l = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var r = i.apply(e, t);

                                function o(e) {
                                    C(r, a, n, o, s, "next", e)
                                }

                                function s(e) {
                                    C(r, a, n, o, s, "throw", e)
                                }
                                o(void 0)
                            }))
                        }, function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "choosePlan",
                        value: function(e) {
                            this.groupPlanName = e, this.setState({
                                popShown: this.state.loggedIn ? "name" : "login"
                            })
                        }
                    }, {
                        key: "goToQuote",
                        value: function(e) {
                            e.preventDefault(), this.props.history.push("/upgrade/group?groupPlanName=".concat(encodeURIComponent(this.groupPlanName), "&n=").concat(encodeURIComponent(this.state.groupName)))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.a.createElement("div", {
                                className: o.isMobile ? p.a.mBody : p.a.body
                            }, r.a.createElement(m.a, {
                                title: "Group Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), r.a.createElement(h.a, null), r.a.createElement("div", {
                                className: p.a.slantBackground
                            }), r.a.createElement("div", {
                                className: p.a.regularBody
                            }, r.a.createElement("div", {
                                className: d.a.centerWrapper
                            }, r.a.createElement("div", {
                                className: d.a.header
                            }, "Group Plans"), r.a.createElement("div", {
                                className: d.a.subheader
                            }, "Choose a Plan"), r.a.createElement("div", {
                                className: d.a.groupsHolder
                            }, this.state.groupPlans.map((function(t) {
                                return r.a.createElement(v.a, {
                                    outsideClass: d.a.groupButton,
                                    key: t.name,
                                    color: P[t.name],
                                    onClick: function() {
                                        return e.choosePlan(t.name)
                                    }
                                }, r.a.createElement("div", {
                                    className: d.a.groupButtonInside
                                }, r.a.createElement("div", {
                                    className: d.a.groupName
                                }, t.name), r.a.createElement("div", {
                                    className: d.a.groupPlans
                                }, "".concat(t.numPlans, " Plus Plans")), r.a.createElement("div", {
                                    className: d.a.groupPrice
                                }, "$".concat(Object(g.j)(t.priceCents / 100))), r.a.createElement("div", {
                                    className: d.a.groupPlans
                                }, "Per Year")))
                            }))), r.a.createElement("div", {
                                className: d.a.descContainer
                            }, "Choose a Plan. Pay with Credit Card or Purchase Order. Distribute Plus Plans Immediately.", r.a.createElement("b", null, "It's that simple.")), r.a.createElement("div", {
                                className: d.a.detailsHolder
                            }, B.map((function(e, t) {
                                return r.a.createElement("div", {
                                    className: d.a.detailContainer,
                                    key: t
                                }, r.a.createElement("i", {
                                    className: s()("fas fa-check", d.a.detailCheck)
                                }), r.a.createElement("div", {
                                    className: d.a.detailText
                                }, e))
                            }))), r.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))), "login" === this.state.popShown ? r.a.createElement(_.a, {
                                text: "You'll need an account to purchase a group plan.",
                                buttonOne: {
                                    text: "Ok",
                                    click: function() {
                                        window.location.href = "".concat("https://id.blooket.com", "/login")
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return e.setState({
                                            popShown: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : "name" === this.state.popShown ? r.a.createElement(_.a, {
                                text: "Enter the name of your group/school:",
                                stringValue: this.state.groupName,
                                stringChange: function(t) {
                                    return e.setState({
                                        groupName: t.target.value.slice(0, 50)
                                    })
                                },
                                onSubmit: this.goToQuote,
                                buttonOne: {
                                    text: "Get Quote",
                                    click: this.goToQuote,
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && E(t.prototype, a), n && E(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), u
                }(r.a.Component);
            I.propTypes = {
                history: c.a.object,
                user: c.a.object
            }, t.a = Object(y.c)(I)
        },
        oIDt: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("H1WH"),
                i = a("17x9"),
                s = a.n(i),
                l = a("FKJl"),
                c = a("XTAU"),
                u = a("oQ+7"),
                p = a("E8Bj"),
                f = a("Xst1"),
                d = a.n(f),
                m = a("SY/F"),
                h = a.n(m),
                _ = a("74sb"),
                y = a("lmLo");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                v = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: C(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var b = m.prototype = f.prototype = Object.create(h);

                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == g(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function C(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = E(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function E(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(b, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, x(w.prototype), l(w.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new w(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, x(b), l(b, s, "Generator"), l(b, o, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function b(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function x(e, t) {
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

            function C(e) {
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
                    var a, n = k(e);
                    if (t) {
                        var r = k(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return E(this, a)
                }
            }

            function E(e, t) {
                if (t && ("object" === g(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function k(e) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var N = function(e) {
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
                }(f, e);
                var t, a, n, i, s, p = C(f);

                function f(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), (t = p.call(this, e)).state = {
                        isGroup: "group" === Object(_.h)("t")
                    }, t
                }
                return t = f, (a = [{
                    key: "componentDidMount",
                    value: (i = v().mark((function e() {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    e.sent || (Object(l.b)("UpgradeCancelPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var r = i.apply(e, t);

                            function o(e) {
                                b(r, a, n, o, s, "next", e)
                            }

                            function s(e) {
                                b(r, a, n, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: o.isMobile ? d.a.mBody : d.a.body
                        }, r.a.createElement(c.a, {
                            title: "Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), r.a.createElement(u.a, null), r.a.createElement("div", {
                            className: d.a.slantBackground
                        }), r.a.createElement("div", {
                            className: d.a.regularBody
                        }, r.a.createElement("div", {
                            className: h.a.container
                        }, r.a.createElement("div", {
                            className: h.a.header
                        }, "Cancelled"), r.a.createElement("div", {
                            className: h.a.subheader
                        }, "We were unable to process your payment"), r.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, r.a.createElement(y.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            linkTo: this.state.isGroup ? "/upgrade/group/price" : "/upgrade"
                        }, "Go Back")))))
                    }
                }]) && x(t.prototype, a), n && x(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), f
            }(r.a.Component);
            N.propTypes = {
                user: s.a.object
            }, t.a = Object(p.c)(N)
        },
        qitz: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("H1WH"),
                i = a("17x9"),
                s = a.n(i),
                l = a("wd/R"),
                c = a.n(l),
                u = a("FKJl"),
                p = a("E8Bj"),
                f = a("Xst1"),
                d = a.n(f),
                m = a("fKgg"),
                h = a.n(m),
                _ = a("XTAU"),
                y = a("oQ+7"),
                g = a("XOuL"),
                v = a("qnYv"),
                b = a("lmLo");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: C(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == x(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function C(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = E(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function E(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function C(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function E(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function i(e) {
                            C(o, n, r, i, s, "next", e)
                        }

                        function s(e) {
                            C(o, n, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function k(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function N(e, t) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = P(e);
                    if (t) {
                        var r = P(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return O(this, a)
                }
            }

            function O(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return S(e)
            }

            function S(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var B = function(e) {
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
                }(l, e);
                var t, a, n, i, s = j(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = s.call(this, e)).state = {
                        groupName: "",
                        isFull: !1,
                        isActive: !1,
                        isLoggedIn: !1,
                        ready: !1,
                        loading: !1,
                        done: "",
                        isAlreadyIn: !1,
                        isAlreadyGrouped: !1
                    }, t.here = !0, t.email = "", t.groupId = e.match.params.id, t.joinGroup = t.joinGroup.bind(S(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (i = E(w().mark((function e() {
                        var t, a = this;
                        return w().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    (t = e.sent) ? (this.email = t.email, v.a.get("/api/groups", {
                                        params: {
                                            id: this.groupId
                                        }
                                    }).then(function() {
                                        var e = E(w().mark((function e(t) {
                                            var n, r, o, i, s;
                                            return w().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (n = t.data.planName, r = null, "Custom" !== t.data.planName) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        r = {
                                                            name: "Custom",
                                                            numPlans: t.data.numPlans
                                                        }, e.next = 18;
                                                        break;
                                                    case 6:
                                                        return e.next = 8, v.a.get("/api/subscriptions/group-plans");
                                                    case 8:
                                                        if (200 === (o = e.sent).status) {
                                                            e.next = 11;
                                                            break
                                                        }
                                                        throw new Error("cannot proceed without group plans");
                                                    case 11:
                                                        if ((i = o.data.plans) && 0 !== i.length) {
                                                            e.next = 14;
                                                            break
                                                        }
                                                        throw new Error("cannot proceed without valid group plans");
                                                    case 14:
                                                        if ((s = i.filter((function(e) {
                                                                return e.name === n
                                                            }))) && 0 !== s.length) {
                                                            e.next = 17;
                                                            break
                                                        }
                                                        throw new Error("could not find a name named ".concat(n));
                                                    case 17:
                                                        r = s[0];
                                                    case 18:
                                                        v.a.get("/api/users/plan").then((function(e) {
                                                            var n = e.data.planSource;
                                                            a.here && a.setState({
                                                                ready: !0,
                                                                isLoggedIn: !0,
                                                                groupName: t.data.groupName,
                                                                isActive: c()(t.data.lastDate).add(1, "year").isAfter(c.a.utc()),
                                                                isFull: r.numPlans - t.data.members.length <= 0,
                                                                isAlreadyIn: t.data.members.includes(a.email),
                                                                isAlreadyGrouped: Boolean(n)
                                                            })
                                                        })).catch((function(e) {
                                                            Object(u.b)(e)
                                                        }));
                                                    case 19:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        Object(u.b)(e), a.props.history.push("/404")
                                    }))) : this.setState({
                                        ready: !0
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "joinGroup",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        }), v.a.put("/api/groups/join", {
                            email: this.email,
                            groupId: this.groupId
                        }).then((function(t) {
                            t.data.success ? (e.props.user.getLoggedIn(), e.setState({
                                done: "Success",
                                loading: !1
                            })) : e.setState({
                                done: "Failed",
                                loading: !1
                            })
                        })).catch((function(t) {
                            e.setState({
                                loading: !1
                            }), Object(u.b)(t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: o.isMobile ? d.a.mBody : d.a.body
                        }, r.a.createElement(_.a, {
                            title: "Join Group | Blooket",
                            desc: "Join a Upgrade Group to unlock the benefits of Blooket Plus."
                        }), r.a.createElement(y.a, null), r.a.createElement("div", {
                            className: d.a.slantBackground
                        }), this.state.ready ? r.a.createElement("div", {
                            className: d.a.regularBody
                        }, r.a.createElement("div", {
                            className: h.a.container
                        }, this.state.done ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: h.a.header
                        }, this.state.done), "Failed" === this.state.done ? r.a.createElement("div", {
                            className: h.a.subheader
                        }, "Please refresh and try again or contact support.") : null, r.a.createElement("div", {
                            className: h.a.buttonContainer
                        }, r.a.createElement(b.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            onClick: "Failed" === this.state.done ? function() {
                                return window.location.reload()
                            } : function() {
                                return e.props.history.push("/dashboard")
                            }
                        }, "Ok"))) : this.state.isLoggedIn ? !this.state.isActive || this.state.isFull || this.state.isAlreadyIn || this.state.isAlreadyGrouped ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: h.a.header
                        }, "Failed"), r.a.createElement("div", {
                            className: h.a.subheader
                        }, this.state.isAlreadyIn ? "You're already in this group." : this.state.isAlreadyGrouped ? "You already are in a group!" : this.state.isFull ? "There are no more subscription plans in this group." : "This group is no longer active."), r.a.createElement("div", {
                            className: h.a.buttonContainer
                        }, r.a.createElement(b.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            onClick: function() {
                                return e.props.history.push("/dashboard")
                            }
                        }, "Ok"))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: h.a.header
                        }, "Join Group:"), r.a.createElement("div", {
                            className: h.a.subheader
                        }, this.state.groupName), r.a.createElement("div", {
                            className: h.a.buttonContainer
                        }, this.state.loading ? r.a.createElement(g.a, null) : r.a.createElement(b.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            onClick: this.joinGroup
                        }, "Join Now"))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: h.a.header
                        }, "Failed"), r.a.createElement("div", {
                            className: h.a.subheader
                        }, "You must be logged in to join a group."), r.a.createElement("div", {
                            className: h.a.buttonContainer
                        }, r.a.createElement(b.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            onClick: function() {
                                window.location.href = "".concat("https://id.blooket.com", "/login")
                            }
                        }, "Login"))))) : null)
                    }
                }]) && k(t.prototype, a), n && k(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(r.a.Component);
            B.propTypes = {
                match: s.a.object,
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(p.c)(B)
        },
        "v/ol": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("H1WH"),
                i = a("17x9"),
                s = a.n(i),
                l = a("v4r+"),
                c = a("TSYQ"),
                u = a.n(c),
                p = a("FKJl"),
                f = a("Xst1"),
                d = a.n(f),
                m = a("/BoV"),
                h = a.n(m),
                _ = a("XTAU"),
                y = a("oQ+7"),
                g = a("ca/f"),
                v = a("74sb"),
                b = a("E8Bj"),
                x = a("LHn/"),
                w = a("qnYv"),
                C = a("lmLo");

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                k = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return n(i, "_invoke", {
                        value: x(e, a, s)
                    }), i
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
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = f.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, o) {
                            function i() {
                                return new t((function(r, i) {
                                    ! function n(r, o, i, s) {
                                        var l = u(e[r], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                p = c.value;
                                            return p && "object" == E(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                c.value = e, i(c)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, o, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }

                function x(e, t, a) {
                    var n = "suspendedStart";
                    return function(r, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw o;
                            return S()
                        }
                        for (a.method = r, a.arg = o;;) {
                            var i = a.delegate;
                            if (i) {
                                var s = w(i, a);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(g), l(g, s, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), N(a), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    N(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function N(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function j(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function i(e) {
                            N(o, n, r, i, s, "next", e)
                        }

                        function s(e) {
                            N(o, n, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function O(e, t) {
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

            function P(e) {
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
                    var a, n = L(e);
                    if (t) {
                        var r = L(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return B(this, a)
                }
            }

            function B(e, t) {
                if (t && ("object" === E(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return I(e)
            }

            function I(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function L(e) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && S(e, t)
                }(c, e);
                var t, a, n, i, s = P(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        plan: {},
                        groupName: "",
                        pdf: null,
                        loading: !1,
                        hasGroup: !1
                    }, t.onCheckout = t.onCheckout.bind(I(t)), t
                }
                return t = c, (a = [{
                    key: "componentDidMount",
                    value: (i = j(k().mark((function e() {
                        var t, a, n, r, o, i, s = this;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("UpgradeGroupPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    return e.next = 9, w.a.get("/api/subscriptions/group-plans");
                                case 9:
                                    if (200 === (t = e.sent).status) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("cannot proceed without group plans");
                                case 12:
                                    if ((a = t.data.plans) && 0 !== a.length) {
                                        e.next = 15;
                                        break
                                    }
                                    throw new Error("cannot proceed without valid group plans");
                                case 15:
                                    if (n = decodeURIComponent(Object(v.h)("groupPlanName")), (r = a.filter((function(e) {
                                            return e.name === n
                                        }))) && 0 !== r.length) {
                                        e.next = 19;
                                        break
                                    }
                                    throw new Error("could not find a name named ".concat(n));
                                case 19:
                                    o = r[0], i = decodeURIComponent(Object(v.h)("n")), this.setState({
                                        plan: o,
                                        groupName: i
                                    }), w.a.put("/api/groups/quote", {
                                        quote: {
                                            logo: x.a.basic.blooket180,
                                            from: "Blooket LLC\nBen Stewart\nben@blooket.com\n409 S Ridge Ave,\nMiddletown, DE 19709",
                                            to: i,
                                            header: "QUOTE",
                                            items: [{
                                                name: "Blooket Plus: ".concat(o.name, " Plan"),
                                                quantity: 1,
                                                unit_cost: o.priceCents / 100,
                                                description: "".concat(o.numPlans, " One-Year Plus Plans")
                                            }],
                                            notes: "If you have any questions, please email contact-us@blooket.com.\n\nAll quotes, invoices and purchases are subject to the Terms of Service of Blooket LLC unless previously agreed to in writing by the parties. The Terms of Service are located on the www.blooket.com website.  Purchasers agree to be bound by the Terms of Service and comply with the Privacy Policy provisions of the website at all times."
                                        }
                                    }).then((function(e) {
                                        s.setState({
                                            pdf: e.data.pdf,
                                            hasGroup: e.data.hasGroup
                                        })
                                    })).catch((function(e) {
                                        return Object(p.b)(e)
                                    }));
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onCheckout",
                    value: function() {
                        var e = this;
                        if (!this.state.plan || !this.state.plan.name) throw new Error("cannot checkout group plan without a valid plan");
                        this.setState({
                            loading: !0
                        }), w.a.post("/api/subscriptions/checkout-sessions", {
                            planSlug: this.state.plan.name,
                            groupName: this.state.groupName
                        }).then(function() {
                            var e = j(k().mark((function e(t) {
                                var a, n;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.data.stripeSessionId, n = t.data.stripePublishableKey, e.next = 4, Object(l.a)(n);
                                        case 4:
                                            e.sent.redirectToCheckout({
                                                sessionId: a
                                            }).then((function(e) {
                                                e.error && Object(p.b)(e.error)
                                            }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            e.setState({
                                loading: !1
                            }), Object(p.b)(t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: o.isMobile ? d.a.mBody : d.a.body
                        }, r.a.createElement(_.a, {
                            title: "Group Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), r.a.createElement(y.a, null), r.a.createElement("div", {
                            className: d.a.slantBackground
                        }), r.a.createElement("div", {
                            className: u()(d.a.regularBody, h.a.bodyContainer)
                        }, this.state.pdf ? r.a.createElement("object", {
                            data: "data:application/pdf;base64,".concat(this.state.pdf),
                            title: "Blooket Quote",
                            className: h.a.quote
                        }, r.a.createElement("a", {
                            className: h.a.downloadButton,
                            download: "BlooketQuote.pdf",
                            href: "data:application/pdf;base64,".concat(this.state.pdf)
                        }, "Download PDF")) : null, r.a.createElement("div", {
                            className: h.a.leftColumn
                        }, r.a.createElement("div", {
                            className: h.a.textContainer
                        }, r.a.createElement("div", {
                            className: h.a.textBigHeader
                        }, this.state.groupName), r.a.createElement("div", {
                            className: h.a.bigText
                        }, "Blooket Plus: ".concat(this.state.plan.name, " Plan")), "".concat(this.state.plan.numPlans, " One-Year Plus Plans")), r.a.createElement("div", {
                            className: h.a.textContainer
                        }, r.a.createElement("div", {
                            className: h.a.textHeader
                        }, "Pay With Purchase Order"), r.a.createElement("div", null, "Upload your PO and we'll get your plans started immediately!"), r.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, r.a.createElement(C.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            linkTo: "/upgrade/group/po?groupPlanName=".concat(this.state.plan.name, "&n=").concat(encodeURIComponent(this.state.groupName))
                        }, "Pay With Purchase Order"))), r.a.createElement("div", {
                            className: h.a.textContainer
                        }, r.a.createElement("div", {
                            className: h.a.textHeader
                        }, "Pay With Credit Card"), r.a.createElement("div", null, "Use a credit card to pay and get things done quickly!"), r.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, r.a.createElement(C.a, {
                            color: "#0bc2cf",
                            outsideClass: h.a.button,
                            insideClass: h.a.buttonInside,
                            onClick: this.onCheckout
                        }, "Pay With Credit Card"))), r.a.createElement("div", {
                            className: h.a.textContainer
                        }, r.a.createElement("div", {
                            className: h.a.textHeader
                        }, "Have Questions or Need to Request our W-9?"), r.a.createElement("div", {
                            className: h.a.bigText
                        }, "Send us an email at: ", r.a.createElement("a", {
                            className: h.a.linkText,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com"))))), this.state.loading ? r.a.createElement(g.a, {
                            text: "Loading...",
                            loading: !0
                        }) : this.state.hasGroup ? r.a.createElement(g.a, {
                            text: "You already have a group plan.",
                            buttonOne: {
                                text: "Go to Group",
                                click: function() {
                                    return e.props.history.push("/group-plan")
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && O(t.prototype, a), n && O(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(r.a.Component);
            T.propTypes = {
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(b.c)(T)
        },
        xppP: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__centerWrapper___KTRFs-camelCase{width:100%;min-height:100%;justify-content:center}.styles__centerWrapper___KTRFs-camelCase,.styles__payContainer___1YTNx-camelCase{display:flex;flex-direction:column}.styles__payContainer___1YTNx-camelCase{width:85%;max-width:600px;min-width:320px;margin:auto;background-color:#fff;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;align-items:center;color:#3a3a3a}.styles__payHeader___26Aou-camelCase{font-family:Nunito,sans-serif;text-align:center;font-size:45px;font-weight:700;margin:10px auto 0}.styles__paySpacer___1aale-camelCase{width:90%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__payMessage___xCCU1-camelCase{text-align:left;font-size:18px;padding:10px;margin:0 auto}.styles__payMessage___xCCU1-camelCase,.styles__payRow___2aaw0-camelCase{font-family:Nunito,sans-serif;width:90%}.styles__payRow___2aaw0-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:#3a3a3a}.styles__payColumn___2OFxz-camelCase{display:flex;flex-direction:column;height:90px;justify-content:center}.styles__payItem___2-aRp-camelCase{font-size:32px;font-weight:700}.styles__payDesc___2HNie-camelCase{font-size:18px;opacity:.8;font-weight:700}.styles__payPrice___2HpX0-camelCase{margin:auto 0;font-size:28px;font-weight:700}.styles__payButton___22hET-camelCase{width:240px;margin:25px auto 20px}.styles__payButtonInside___2X9zX-camelCase{height:40px;font-size:30px;font-weight:700}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___KTRFs-camelCase",
                payContainer: "styles__payContainer___1YTNx-camelCase",
                payHeader: "styles__payHeader___26Aou-camelCase",
                paySpacer: "styles__paySpacer___1aale-camelCase",
                payMessage: "styles__payMessage___xCCU1-camelCase",
                payRow: "styles__payRow___2aaw0-camelCase",
                payColumn: "styles__payColumn___2OFxz-camelCase",
                payItem: "styles__payItem___2-aRp-camelCase",
                payDesc: "styles__payDesc___2HNie-camelCase",
                payPrice: "styles__payPrice___2HpX0-camelCase",
                payButton: "styles__payButton___22hET-camelCase",
                payButtonInside: "styles__payButtonInside___2X9zX-camelCase"
            }
        },
        yFhE: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___WE435-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__mainContainer___4TLvi-camelCase{display:flex;flex-flow:row wrap;justify-content:flex-start;margin:5px calc(5% - 12px);width:calc(90% - 24px);max-width:1200px}.styles__infoContainer___2uI-S-camelCase{border-radius:7px;background-color:#fff;padding:15px 20px 22px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:12px;min-width:460px;display:flex;flex-direction:column;color:#3a3a3a}.styles__headerRow___1tdPa-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:3px}.styles__headerIcon___1ykdN-camelCase{padding-right:10px;font-size:28px;color:#669}.styles__infoHeader___1lsZY-camelCase{font-size:30px;font-family:Nunito,sans-serif;font-weight:700}.styles__text___1x37n-camelCase{padding:2px 0}.styles__link___5UR6_-camelCase,.styles__text___1x37n-camelCase{text-align:left;font-size:20px;font-family:Nunito,sans-serif}.styles__link___5UR6_-camelCase{color:#0bc2cf;display:inline-block;text-decoration:underline;padding-top:4px;padding-bottom:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__subscriptionText___2BvF7-camelCase{display:flex;flex-direction:row;align-items:center;margin:2px 0;font-size:26px}.styles__blooketText___QMe9h-camelCase{font-family:Titan One,sans-serif;margin-right:5px;padding-bottom:3px}.styles__planText___1m0nS-camelCase{font-family:Nunito,sans-serif;font-weight:700}.styles__upgradeButton___3UQMv-camelCase{margin:10px 0;width:180px}.styles__upgradeButtonInside___396BT-camelCase{height:35px;font-size:22px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}@media only screen and (max-width:1200px){.styles__infoContainer___2uI-S-camelCase{flex-grow:1}}@media only screen and (max-width:600px){.styles__mainContainer___4TLvi-camelCase{min-width:320px;margin:auto;width:95%}.styles__infoContainer___2uI-S-camelCase{min-width:290px;padding:15px;flex-grow:1}}", ""]), t.locals = {
                header: "styles__header___WE435-camelCase",
                mainContainer: "styles__mainContainer___4TLvi-camelCase",
                infoContainer: "styles__infoContainer___2uI-S-camelCase",
                headerRow: "styles__headerRow___1tdPa-camelCase",
                headerIcon: "styles__headerIcon___1ykdN-camelCase",
                infoHeader: "styles__infoHeader___1lsZY-camelCase",
                text: "styles__text___1x37n-camelCase",
                link: "styles__link___5UR6_-camelCase",
                subscriptionText: "styles__subscriptionText___2BvF7-camelCase",
                blooketText: "styles__blooketText___QMe9h-camelCase",
                planText: "styles__planText___1m0nS-camelCase",
                upgradeButton: "styles__upgradeButton___3UQMv-camelCase",
                upgradeButtonInside: "styles__upgradeButtonInside___396BT-camelCase"
            }
        }
    }
]);