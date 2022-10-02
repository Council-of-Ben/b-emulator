(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "0eKu": function(e, t, n) {
            var a = n("BNho");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(a, r);
            a.locals && (e.exports = a.locals)
        },
        "4Ao/": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n.n(a),
                o = n("ANjH"),
                i = n("/MKj"),
                s = n("17x9"),
                l = n.n(s),
                c = n("55Ip"),
                u = n("Ty5D"),
                f = n("wd/R"),
                m = n.n(f),
                d = n("TSYQ"),
                p = n.n(d),
                h = n("H1WH"),
                _ = n("FKJl"),
                y = n("E8Bj"),
                g = n("Xst1"),
                v = n.n(g),
                b = n("GZss"),
                w = n.n(b),
                x = n("i4/Q"),
                C = n("XTAU"),
                E = n("ca/f"),
                k = n("lmLo"),
                N = n("qnYv");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function I() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                I = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    r = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    i = a.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, a) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new C(a || []);
                    return o._invoke = function(e, t, n) {
                        var a = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === r) throw o;
                                return k()
                            }
                            for (n.method = r, n.arg = o;;) {
                                var i = n.delegate;
                                if (i) {
                                    var s = b(i, n);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, n, i), o
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

                function f() {}

                function m() {}

                function d() {}
                var p = {};
                s(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    _ = h && h(h(E([])));
                _ && _ !== t && n.call(_, r) && (p = _);
                var y = d.prototype = f.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var a;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(a, i) {
                                ! function a(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == S(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            a("next", e, i, s)
                                        }), (function(e) {
                                            a("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return a("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, a, i)
                            }))
                        }
                        return a = a ? a.then(i, i) : i()
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
                    var r = a.arg;
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

                function E(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return m.prototype = d, s(y, "constructor", d), s(d, "constructor", m), m.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, a, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(l(t, n, a, r), o);
                    return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, r, (function() {
                    return this
                })), s(y, "toString", (function() {
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
                }, e.values = E, C.prototype = {
                    constructor: C,
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
                            return i.type = "throw", i.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var s = n.call(o, "catchLoc"),
                                    l = n.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (s) {
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
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
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
                                    var r = a.arg;
                                    x(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function j(e, t, n, a, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function O(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var o = e.apply(t, n);

                        function i(e) {
                            j(o, a, r, i, s, "next", e)
                        }

                        function s(e) {
                            j(o, a, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function q(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function T(e, t) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, a = P(e);
                    if (t) {
                        var r = P(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return L(this, n)
                }
            }

            function L(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var A = function(e) {
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
                }(s, e);
                var t, n, a, o, i = B(s);

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
                return t = s, (n = [{
                    key: "componentDidMount",
                    value: (o = O(I().mark((function e() {
                        var t, n = this;
                        return I().wrap((function(e) {
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
                                        date: m()(t.dateCreated).format("dddd, MMMM Do, YYYY"),
                                        hasPassword: t.hasPassword
                                    }), this.name = t.name, N.a.put("/api/users/plan").then((function(e) {
                                        n.setState({
                                            plan: e.data.plan,
                                            planEnd: m()(e.data.planEnd).format("dddd, MMMM Do, YYYY"),
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
                        }).then(O(I().mark((function n() {
                            var a;
                            return I().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return e.props.user.getLoggedIn(), n.next = 3, e.props.user.getData();
                                    case 3:
                                        if (a = n.sent, e.here) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 6:
                                        e.setState({
                                            loading: !1,
                                            role: t,
                                            user: a
                                        });
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
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
                            window.open(e.data, "_self")
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
                        }), r.a.createElement(x.a, {
                            user: this.state.user,
                            page: "Settings"
                        }), r.a.createElement("div", {
                            className: v.a.profileBody
                        }, r.a.createElement("div", {
                            className: w.a.header
                        }, "Settings"), this.state.user ? r.a.createElement("div", {
                            className: w.a.mainContainer
                        }, r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("div", {
                            className: w.a.headerRow
                        }, r.a.createElement("i", {
                            className: p()("fas fa-user", w.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: w.a.infoHeader
                        }, "Profile")), r.a.createElement("div", {
                            className: w.a.text
                        }, r.a.createElement("b", null, "Blooket Emulator v1.0.0"), " ", " "), r.a.createElement("div", {
                            className: w.a.text,
                        }, r.a.createElement("b", null, "Username:"), " ", this.state.user.name), r.a.createElement("div", {
                            className: w.a.text
                        }, r.a.createElement("b", null, "Email:"), " ", this.state.user.email), r.a.createElement("div", {
                            className: w.a.text
                        }, r.a.createElement("b", null, "Role:"), " ", this.state.role), r.a.createElement("div", {
                            className: w.a.text
                        }, r.a.createElement("b", null, "Joined:"), " ", this.state.date)), r.a.createElement("div", {
                            className: w.a.infoContainer,
                        }, r.a.createElement("div", {
                            className: w.a.headerRow
                        }, r.a.createElement("i", {
                            className: p()("fas fa-clipboard-list", w.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: w.a.infoHeader
                        }, "Plan")), r.a.createElement("div", {
                            className: w.a.subscriptionText
                        }, r.a.createElement("div", {
                            className: w.a.blooketText
                        }, "Blooket"), r.a.createElement("div", {
                            className: w.a.planText,
                            style: {
                                color: "Starter" !== this.state.plan ? "#ff7b24" : "#0bc2cf"
                            }
                        }, this.state.plan)), "Starter" === this.state.plan ? r.a.createElement(k.a, {
                            color: "#ff7b24",
                            onClick: function() {
                                return e.props.history.push("/upgrade")
                            },
                            outsideClass: w.a.upgradeButton,
                            insideClass: w.a.upgradeButtonInside
                        }, "Upgrade Now!") : ["Plus", "Plus Flex"].includes(this.state.plan) ? r.a.createElement("div", null, r.a.createElement("div", {
                            className: w.a.text
                        }, r.a.createElement("b", null, "End Date:"), " ", this.state.planEnd), this.state.planRenew ? r.a.createElement("div", {
                            className: w.a.link,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.editStripe
                        }, "Edit Subscription") : null) : null), r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("div", {
                            className: w.a.headerRow
                        }, r.a.createElement("i", {
                            className: p()("fas fa-pencil-alt", w.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: w.a.infoHeader
                        }, "Edit Info")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: w.a.link,
                            to: "/change/name"
                        }, "Change Name")), r.a.createElement("div", null, r.a.createElement("div", {
                            className: w.a.link,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.switchRole
                        }, "Teacher" === this.state.role ? "Switch to Student Account" : "Switch to Teacher Account")), this.state.hasPassword ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement("a", {
                            className: w.a.link,
                            href: "".concat("https://id.blooket.com", "/forgot")
                        }, "Request Password Reset")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: w.a.link,
                            to: "/change/email"
                        }, "Change Email"))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: w.a.link,
                            to: "/add-password"
                        }, "Add Blooket Password")), r.a.createElement("div", {
                            className: w.a.text
                        }, r.a.createElement("u", null, "Change Email"), " (Add a Password First)")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: w.a.link,
                            to: "/delete"
                        }, "Delete Account"))), r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("div", {
                            className: w.a.headerRow
                        }, r.a.createElement("i", {
                            className: p()("fas fa-comments", w.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: w.a.infoHeader
                        }, "Social")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: w.a.link,
                            href: "https://twitter.com/playblooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-twitter-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Twitter (@PlayBlooket)")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: w.a.link,
                            href: "https://www.instagram.com/playblooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-instagram-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Instagram (@PlayBlooket)")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: w.a.link,
                            href: "https://www.facebook.com/PlayBlooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-facebook-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Facebook (@PlayBlooket)"))), r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("div", {
                            className: w.a.headerRow
                        }, r.a.createElement("i", {
                            className: p()("fas fa-question-circle", w.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: w.a.infoHeader
                        }, "Support")), r.a.createElement("div", {
                            className: w.a.text
                        }, "Contact us at: ", r.a.createElement("a", {
                            className: w.a.link,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: w.a.link,
                            to: "/faq"
                        }, "Frequently Asked Questions"))), r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("div", {
                            className: w.a.headerRow
                        }, r.a.createElement("i", {
                            className: p()("fas fa-lock", w.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: w.a.infoHeader
                        }, "Privacy")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: w.a.link,
                            href: "".concat("https://www.blooket.com", "/privacy")
                        }, "Privacy Policy")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: w.a.link,
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
                }]) && q(t.prototype, n), a && q(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            A.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(y.c)(Object(u.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(A)))
        },
        "6Zcq": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n.n(a),
                o = n("ANjH"),
                i = n("/MKj"),
                s = n("Ty5D"),
                l = n("E8Bj"),
                c = n("74sb");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                f = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    r = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    i = a.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, a) {
                    var r = t && t.prototype instanceof d ? t : d,
                        o = Object.create(r.prototype),
                        i = new k(a || []);
                    return o._invoke = function(e, t, n) {
                        var a = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === r) throw o;
                                return S()
                            }
                            for (n.method = r, n.arg = o;;) {
                                var i = n.delegate;
                                if (i) {
                                    var s = x(i, n);
                                    if (s) {
                                        if (s === m) continue;
                                        return s
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
                                    if (a = n.done ? "completed" : "suspendedYield", l.arg === m) continue;
                                    return {
                                        value: l.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                            }
                        }
                    }(e, n, i), o
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
                var m = {};

                function d() {}

                function p() {}

                function h() {}
                var _ = {};
                s(_, r, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    g = y && y(y(N([])));
                g && g !== t && n.call(g, r) && (_ = g);
                var v = h.prototype = d.prototype = Object.create(_);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var a;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(a, i) {
                                ! function a(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            m = f.value;
                                        return m && "object" == u(m) && n.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            a("next", e, i, s)
                                        }), (function(e) {
                                            a("throw", e, i, s)
                                        })) : t.resolve(m).then((function(e) {
                                            f.value = e, i(f)
                                        }), (function(e) {
                                            return a("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, a, i)
                            }))
                        }
                        return a = a ? a.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return m;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return m
                    }
                    var a = c(n, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, m;
                    var r = a.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, m) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m)
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
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(w.prototype), s(w.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, n, a, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new w(l(t, n, a, r), o);
                    return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, b(v), s(v, i, "Generator"), s(v, r, (function() {
                    return this
                })), s(v, "toString", (function() {
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
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
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
                            return i.type = "throw", i.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var s = n.call(o, "catchLoc"),
                                    l = n.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (s) {
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
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), m
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    E(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), m
                    }
                }, e
            }

            function m(e, t, n, a, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _(e) {
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
                    var n, a = g(e);
                    if (t) {
                        var r = g(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                if (t && ("object" === u(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var v = function(e) {
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
                    }), t && h(e, t)
                }(s, e);
                var t, n, a, r, o, i = _(s);

                function s() {
                    return d(this, s), i.apply(this, arguments)
                }
                return t = s, (n = [{
                    key: "componentDidMount",
                    value: (r = f().mark((function e() {
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    Object(c.j)(), window.location.href = "".concat("https://id.blooket.com", "/signup");
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), o = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, a) {
                            var o = r.apply(e, t);

                            function i(e) {
                                m(o, n, a, i, s, "next", e)
                            }

                            function s(e) {
                                m(o, n, a, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]) && p(t.prototype, n), a && p(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            v.propTypes = {};
            t.a = Object(l.c)(Object(s.g)(Object(i.b)((function(e) {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(v)))
        },
        BNho: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__mainRow___3T58f-camelCase{margin:20px 5%;width:90%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.styles__leftColumn___1iY1q-camelCase{background-color:#fff;border-radius:7px;width:330px;padding:15px 15px 22px;box-sizing:border-box;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:column;margin-bottom:20px}.styles__coverFillerContainer___3xH4j-camelCase,.styles__coverImageContainer___3mlyV-camelCase{width:100%;height:205px;margin:0 auto 10px;background-color:#333;border-radius:7px;overflow:hidden;display:flex;justify-content:center;align-items:center}.styles__coverImage___1sSHa-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__coverFillerContainer___3xH4j-camelCase{background-color:#0bc2cf}.styles__coverFillerImage___23G64-camelCase{margin:auto;width:80%;height:80%;max-width:400px;-o-object-fit:contain;object-fit:contain}.styles__headerTitle___gKy2Z-camelCase{font-size:30px;line-height:32px;font-weight:700}.styles__headerDesc___3OfnC-camelCase{font-size:18px;overflow-x:hidden;word-wrap:break-word;margin:7px 0}.styles__headerBottomContainer___2HQcH-camelCase{display:flex;flex-direction:row;align-items:center;height:30px;margin-top:auto}.styles__headerAuthorIcon___1fAWR-camelCase{font-size:18px;margin-right:7px}.styles__headerAuthorText___2jrIU-camelCase{font-family:Nunito,sans-serif;font-size:16px;color:#0bc2cf}.styles__deleteButton___IQMHR-camelCase{font-family:Nunito,sans-serif;font-size:20px;margin-left:15px;color:#cf180b;text-decoration:underline;cursor:pointer}.styles__headerStatsWrapper___34sB5-camelCase{width:100%;display:flex;flex-direction:row;align-items:center}.styles__headerStat___2_MCT-camelCase{font-size:18px;font-weight:700}.styles__headerStatDivider___3L50s-camelCase{font-size:10px;margin:0 5px;opacity:.8}.styles__headerStatSmall___3isMp-camelCase{font-size:12px;opacity:.8}.styles__headerButtonRow___15T4p-camelCase{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;margin:20px 0 10px}.styles__soloButton___lVCzA-camelCase{box-shadow:0 0 4px rgba(0,0,0,.15)}.styles__headerButtonInside___1A20f-camelCase{width:100px;height:35px;display:flex;flex-direction:row;align-items:center;justify-content:center;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:22px;font-weight:700}.styles__noHostText___No8Mu-camelCase{width:140px;font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;text-align:center}.styles__hostIcon___3BjGq-camelCase{font-size:20px;margin-right:7px}.styles__smallButtonsContainer___8783W-camelCase{width:100%;margin:5px 0;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.styles__smallButton___2fnLv-camelCase{width:90px;height:26px;margin:5px;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:12px;background-color:rgba(0,0,0,.1);border-radius:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;transition:.2s}.styles__smallButton___2fnLv-camelCase:focus,.styles__smallButton___2fnLv-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__smallIcon___2syMb-camelCase{font-size:10px;margin-right:5px}.styles__questionSection___3vBL6-camelCase{display:flex;flex-direction:column;width:calc(100% - 350px)}.styles__questionSectionTop___6Y00i-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:10px;width:310px}.styles__numQuestions___2_rh8-camelCase{width:160px;padding:10px 10px 17px;box-sizing:border-box;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#fff;border-radius:7px;font-size:18px;font-weight:700;text-align:center}.styles__showAnswersButtonInside___3pgzn-camelCase{width:120px;height:30px;display:flex;align-items:center;justify-content:center;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:16px;font-weight:700}.styles__questionContainer___2YC9r-camelCase{width:100%;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:10px 0;background-color:#fff;border-radius:7px;display:flex;flex-direction:column;transition:.2s}.styles__questionContainer___2YC9r-camelCase:hover{transform:scale(.98)}.styles__questionRow___381Uy-camelCase{justify-content:space-between;min-height:120px;width:100%;position:relative}.styles__questionInfoRow___3Dw_X-camelCase,.styles__questionRow___381Uy-camelCase{display:flex;flex-direction:row}.styles__questionInfoRow___3Dw_X-camelCase{position:absolute;bottom:5px;right:3px;height:22px}.styles__questionInfo___2KDqj-camelCase{margin:0 2px;background-color:rgba(0,0,0,.6);padding:0 7px;border-radius:5px;color:#fff;font-size:12px;height:100%}.styles__questionImageContainer___tYoyI-camelCase,.styles__questionInfo___2KDqj-camelCase{display:flex;justify-content:center;align-items:center}.styles__questionImageContainer___tYoyI-camelCase{width:165px;min-width:165px;height:120px;background-color:#333;overflow:hidden;border-top-right-radius:7px;border-bottom-right-radius:7px;margin:auto 0;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__questionImage___33pJw-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__questionTextContainer___2Mp1o-camelCase{display:flex;flex-direction:column;padding:5px 15px;flex-grow:1;box-sizing:border-box;outline:none;cursor:pointer}.styles__questionNum___2n7LQ-camelCase{font-size:18px;margin-bottom:5px;font-weight:700}.styles__questionTextRow___3ZAIS-camelCase{display:flex;flex-direction:row;align-items:center;min-height:70px}.styles__questionText___1gLDI-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;word-wrap:break-word;white-space:pre-line;margin-bottom:auto}.styles__questionFunc___2kG17-camelCase{margin:auto 0;width:120px;display:flex;justify-content:center;align-items:center}.styles__qMathField___BT4-f-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:16px!important}.styles__answerContainer___3A1qQ-camelCase{width:100%;display:flex;flex-flow:row wrap;justify-content:space-between;padding:5px 10px;box-sizing:border-box;outline:none;cursor:pointer}.styles__answer___gD6Vh-camelCase{min-height:60px;padding:5px 5px 10px;box-shadow:inset 0 -5px rgba(0,0,0,.2);margin:5px 0;border-radius:7px;width:48%;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__answerIcon___Rm_Gi-camelCase{font-size:28px;color:#fff;width:45px;text-align:center}.styles__answerMediaContainer___2EASb-camelCase{width:calc(100% - 35px);text-align:center;display:flex;justify-content:center;align-items:center}.styles__answerText___37qIQ-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#fff;word-wrap:break-word;overflow-x:hidden}.styles__answerImg___3DXal-camelCase{margin:auto;max-width:100%;max-height:80px;-o-object-fit:contain;object-fit:contain}.styles__answerImg___3DXal-camelCase,.styles__mathField___2R8OP-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mathField___2R8OP-camelCase{cursor:pointer!important;color:#fff;border-color:#fff;font-size:18px!important}.styles__faded___2yQHe-camelCase{opacity:.5}.styles__bottomSpacer___3BJoH-camelCase{height:30px}.styles__reportModal___1_Bcq-camelCase{display:block;position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6)}.styles__reportContainer___1F_dD-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__reportHeader___1WfcX-camelCase{margin:25px auto 15px}.styles__duplicateHeader___1aNN0-camelCase,.styles__reportHeader___1WfcX-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;color:#3a3a3a}.styles__duplicateHeader___1aNN0-camelCase{margin:25px auto}.styles__reportText___3Qmub-camelCase{margin:10px 25px 15px}.styles__reportInput___q6fb9-camelCase,.styles__reportText___3Qmub-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a}.styles__reportInput___q6fb9-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:10px auto;padding:15px;width:400px;height:100px;text-align:left;outline:none;resize:none}.styles__reportInput___q6fb9-camelCase:focus{border-color:#0bc2cf}.styles__reportInputFilled___2whfm-camelCase{border-color:#3a3a3a}.styles__reportButtonContainer___3Fkhm-camelCase{width:100%;margin-top:15px;margin-bottom:25px;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__reportYesButton___22wrf-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportYesButton___22wrf-camelCase:focus,.styles__reportYesButton___22wrf-camelCase:hover{border-color:#ce1313;color:#ce1313;font-weight:700}.styles__reportNoButton___3SmKY-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportNoButton___3SmKY-camelCase:focus,.styles__reportNoButton___3SmKY-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf;font-weight:700}.styles__smallScreen___28ZM3-camelCase{display:none}@media only screen and (max-width:600px){.styles__bigScreen___lcywH-camelCase{display:none}.styles__smallScreen___28ZM3-camelCase{display:flex}}.styles__highlight___1Mzyo-camelCase{background-color:#ff0}@media only screen and (max-width:1150px){.styles__mainRow___3T58f-camelCase{margin:20px 2.5%;width:95%;flex-direction:column;align-items:center}.styles__leftColumn___1iY1q-camelCase,.styles__questionSection___3vBL6-camelCase{width:100%}}@media only screen and (max-width:600px){.styles__questionRow___381Uy-camelCase{flex-direction:column;align-items:center}.styles__questionImageContainer___tYoyI-camelCase{width:100%;background-color:transparent!important;border-top-right-radius:0;border-bottom-right-radius:0;margin:0}.styles__questionTextContainer___2Mp1o-camelCase{width:100%}.styles__questionImage___33pJw-camelCase{-o-object-fit:contain;object-fit:contain}.styles__answer___gD6Vh-camelCase{width:100%;margin:2px 0}}", ""]), t.locals = {
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
        GZss: function(e, t, n) {
            var a = n("yFhE");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(a, r);
            a.locals && (e.exports = a.locals)
        },
        RLYa: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n.n(a),
                o = n("ANjH"),
                i = n("/MKj"),
                s = n("17x9"),
                l = n.n(s),
                c = n("Ty5D"),
                u = n("55Ip"),
                f = n("n5rO"),
                m = n.n(f),
                d = n("TSYQ"),
                p = n.n(d),
                h = n("JeI0"),
                _ = n.n(h),
                y = n("wd/R"),
                g = n.n(y),
                v = n("H1WH"),
                b = n("EDFO"),
                w = n("FKJl"),
                x = n("Xst1"),
                C = n.n(x),
                E = n("0eKu"),
                k = n.n(E),
                N = n("XTAU"),
                S = n("ca/f"),
                I = n("XOuL"),
                j = n("E8Bj"),
                O = n("74sb"),
                q = n("qnYv"),
                T = n("vCpj"),
                B = n("FVRk"),
                L = n("i4/Q"),
                R = n("LHn/"),
                P = n("lmLo");

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function F(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function D() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                D = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    r = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    i = a.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, a) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new C(a || []);
                    return o._invoke = function(e, t, n) {
                        var a = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === r) throw o;
                                return k()
                            }
                            for (n.method = r, n.arg = o;;) {
                                var i = n.delegate;
                                if (i) {
                                    var s = b(i, n);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, n, i), o
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

                function f() {}

                function m() {}

                function d() {}
                var p = {};
                s(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    _ = h && h(h(E([])));
                _ && _ !== t && n.call(_, r) && (p = _);
                var y = d.prototype = f.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var a;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(a, i) {
                                ! function a(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == A(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            a("next", e, i, s)
                                        }), (function(e) {
                                            a("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return a("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, a, i)
                            }))
                        }
                        return a = a ? a.then(i, i) : i()
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
                    var r = a.arg;
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

                function E(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return m.prototype = d, s(y, "constructor", d), s(d, "constructor", m), m.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, a, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(l(t, n, a, r), o);
                    return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, r, (function() {
                    return this
                })), s(y, "toString", (function() {
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
                }, e.values = E, C.prototype = {
                    constructor: C,
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
                            return i.type = "throw", i.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var s = n.call(o, "catchLoc"),
                                    l = n.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (s) {
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
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
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
                                    var r = a.arg;
                                    x(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function z(e) {
                return function(e) {
                    if (Array.isArray(e)) return Y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || M(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var a, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (n = n.call(e); !(i = (a = n.next()).done) && (o.push(a.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || M(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                if (e) {
                    if ("string" == typeof e) return Y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Y(e, t) : void 0
                }
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function G(e, t, n, a, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function Q(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function U(e, t) {
                return (U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, a = X(e);
                    if (t) {
                        var r = X(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return K(this, n)
                }
            }

            function K(e, t) {
                if (t && ("object" === A(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return V(e)
            }

            function V(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function X(e) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(b.addStyles)();
            var J = new m.a;
            J.removeWords.apply(J, ["god"]);
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
                        }), t && U(e, t)
                    }(l, e);
                    var t, n, a, o, i, s = W(l);

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
                        }, t.onShowAnswers = t.onShowAnswers.bind(V(t)), t.onHost = t.onHost.bind(V(t)), t.onSolo = t.onSolo.bind(V(t)), t.onFavorite = t.onFavorite.bind(V(t)), t.onReport = t.onReport.bind(V(t)), t.onCopy = t.onCopy.bind(V(t)), t.onCopyConfirm = t.onCopyConfirm.bind(V(t)), t.onDelete = t.onDelete.bind(V(t)), t.loading = !1, t.here = !0, t
                    }
                    return t = l, (n = [{
                        key: "componentDidMount",
                        value: (o = D().mark((function e() {
                            var t, n, a, r, o, i, s, l, c;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.props.match.params.id, e.next = 3, this.props.user.getData();
                                    case 3:
                                        if (n = e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return Object(w.b)("SetPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 8:
                                        return a = [new Promise((function(e) {
                                            q.a.get("/api/games", {
                                                params: {
                                                    gameId: t
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(null)
                                            }))
                                        })), new Promise((function(e) {
                                            q.a.get("/api/users/favorited", {
                                                params: {
                                                    id: t
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(!1)
                                            }))
                                        }))], e.next = 11, Promise.all(a);
                                    case 11:
                                        if (r = e.sent, o = H(r, 2), i = o[0], s = o[1], i) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("return", this.setState({
                                            ready: !0
                                        }));
                                    case 17:
                                        if ((l = z(i.questions)).sort((function(e, t) {
                                                return e.number - t.number
                                            })), c = [], "true" === Object(O.h)("open") && (c = l.map((function(e) {
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
                                            user: n,
                                            isAdmin: Z.includes(n.name),
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
                            return new Promise((function(n, a) {
                                var r = o.apply(e, t);

                                function i(e) {
                                    G(r, n, a, i, s, "next", e)
                                }

                                function s(e) {
                                    G(r, n, a, i, s, "throw", e)
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
                                n = t.indexOf(e); - 1 === n ? t.push(e) : t.splice(n, 1), this.setState({
                                showingAnswers: t
                            })
                        }
                    }, {
                        key: "onFavorite",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, q.a.put("/api/users/updatefavorites", {
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
                                Object(w.b)(t), e.loading = !1
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
                            }), q.a.post("/api/reports", {
                                id: this.state.game.id
                            }).then((function() {
                                t.here && (t.setState({
                                    reporting: !1,
                                    loadingReport: !1,
                                    report: ""
                                }), t.loading = !1)
                            })).catch((function(e) {
                                Object(w.b)(e)
                            }))) : this.loading = !1)
                        }
                    }, {
                        key: "onCopy",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, q.a.put("/api/users/plan").then((function(t) {
                                e.here && ("Starter" === t.data.plan ? e.setState({
                                    copying: !0
                                }) : e.setState({
                                    canCopy: !0,
                                    copying: !0
                                }), e.loading = !1)
                            })).catch((function(t) {
                                e.here && (Object(w.b)(t), e.loading = !1, e.setState({
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
                            }), q.a.post("/api/games/copy", {
                                id: this.state.game.id,
                                isDuplicate: !0
                            }).then((function(t) {
                                e.here && e.props.history.push("/edit?id=".concat(t.data._id))
                            })).catch((function(t) {
                                e.here && (Object(w.b)(t), e.loading = !1, e.setState({
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
                            }), q.a.delete("/api/games", {
                                params: {
                                    gameId: this.state.game.id
                                }
                            }).then((function() {
                                e.props.history.push("/discover"), window.close()
                            })).catch((function(t) {
                                Object(w.b)(t), e.setState({
                                    loadingDelete: !1
                                })
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.state.ready && !this.state.game.title ? (Object(w.b)("SetPage cannot be rendered without this.state.game.title"), r.a.createElement(c.a, {
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
                                src: Object(O.f)(this.state.game.coverImage.url),
                                alt: "Cover",
                                className: k.a.coverImage
                            })) : r.a.createElement("div", {
                                className: k.a.coverFillerContainer
                            }, r.a.createElement("img", {
                                src: R.a.basic.blooket,
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
                            }, "".concat(Object(O.k)(this.state.playCount), " ").concat(1 === this.state.playCount ? "Play" : "Plays")), r.a.createElement("div", {
                                className: k.a.headerStatDivider
                            }, "•"), r.a.createElement("div", {
                                className: k.a.headerStatSmall
                            }, "".concat(Object(O.k)(this.state.favoriteCount), " ").concat(1 === this.state.favoriteCount ? "Favorite" : "Favorites"))), r.a.createElement("div", {
                                className: k.a.headerButtonRow
                            }, r.a.createElement(P.a, {
                                color: "#f2f2f2",
                                onClick: this.onSolo,
                                outsideClass: k.a.soloButton
                            }, r.a.createElement("div", {
                                className: k.a.headerButtonInside,
                                style: {
                                    color: "#3a3a3a"
                                }
                            }, r.a.createElement("i", {
                                className: p()(k.a.hostIcon, "fas fa-user-astronaut")
                            }), "Solo")), r.a.createElement(P.a, {
                                color: "#0bc2cf",
                                onClick: this.onHost,
                                outsideClass: k.a.bigScreen
                            }, r.a.createElement("div", {
                                className: k.a.headerButtonInside
                            }, r.a.createElement("i", {
                                className: p()(k.a.hostIcon, "fas fa-play")
                            }), "Host")), r.a.createElement("div", {
                                className: p()(k.a.noHostText, k.a.smallScreen)
                            }, "No Hosting on Mobile")), r.a.createElement("div", {
                                className: k.a.smallButtonsContainer
                            }, r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.onFavorite
                            }, r.a.createElement("i", {
                                className: p()(k.a.smallIcon, this.state.isFavorited ? "fas fa-star" : "far fa-star")
                            }), this.state.isFavorited ? "Unfavorite" : "Favorite"), r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.onCopy
                            }, r.a.createElement("i", {
                                className: p()(k.a.smallIcon, "far fa-clone")
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
                                className: p()(k.a.smallIcon, "far fa-flag")
                            }), "Report")), r.a.createElement("div", {
                                className: k.a.headerBottomContainer
                            }, r.a.createElement("i", {
                                className: p()(k.a.headerAuthorIcon, "fas fa-user")
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
                            }, "".concat(Object(O.k)(this.state.game.questions.length), " Question").concat(1 === this.state.game.questions.length ? "" : "s")), r.a.createElement(P.a, {
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
                                    className: p()(k.a.questionText, F({}, k.a.highlight, e.state.isAdmin && J.isProfane(t.question)))
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
                                }, r.a.createElement(T.a, {
                                    audioUrl: t.audio.url,
                                    width: "60%"
                                })) : t.image && t.image.url ? v.isMobile ? r.a.createElement("img", {
                                    src: Object(O.f)(t.image.url),
                                    alt: "Question Background",
                                    className: k.a.questionImage
                                }) : r.a.createElement(_.a, {
                                    height: 120,
                                    width: 165
                                }, r.a.createElement("img", {
                                    src: Object(O.f)(t.image.url),
                                    alt: "Question Background",
                                    className: k.a.questionImage
                                })) : t.question.includes("`*`") ? r.a.createElement("div", {
                                    className: k.a.questionFunc
                                }, r.a.createElement(b.StaticMathField, {
                                    className: k.a.qMathField
                                }, t.question.slice(t.question.indexOf("`*`") + 3, t.question.length - 3))) : null) : null, r.a.createElement("div", {
                                    className: k.a.questionInfoRow
                                }, t.random ? r.a.createElement("i", {
                                    className: p()("fas fa-random", k.a.questionInfo)
                                }) : null, r.a.createElement("div", {
                                    className: k.a.questionInfo
                                }, "".concat(t.timeLimit, " sec")))), e.state.showingAnswers.includes(t.number) ? r.a.createElement("div", {
                                    className: k.a.answerContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onShowAnswers(t.number)
                                    }
                                }, t.answers.map((function(n, a) {
                                    return r.a.createElement("div", {
                                        className: p()(k.a.answer, F({}, k.a.faded, !(t.correctAnswers.includes(n) || e.state.isAdmin && J.isProfane(n)))),
                                        style: {
                                            backgroundColor: e.state.isAdmin && J.isProfane(n) ? "#e6e600" : B.a.default.answers[a].background
                                        },
                                        key: n
                                    }, r.a.createElement("i", {
                                        className: p()(t.correctAnswers.includes(n) ? "fas fa-check" : "fas fa-times", k.a.answerIcon)
                                    }), r.a.createElement("div", {
                                        className: k.a.answerMediaContainer,
                                        style: {
                                            maxHeight: 2 === n.split("`~`").length || "`*`" === n.slice(0, 3) ? "80px" : null
                                        }
                                    }, 2 === n.split("`~`").length ? r.a.createElement("img", {
                                        src: Object(O.f)(n.split("`~`")[1]),
                                        alt: "Answer",
                                        className: k.a.answerImg,
                                        draggable: !1
                                    }) : "`*`" === n.slice(0, 3) ? r.a.createElement(b.StaticMathField, {
                                        className: k.a.mathField
                                    }, n.slice(3, n.length - 3)) : r.a.createElement("div", {
                                        className: k.a.answerText
                                    }, n)))
                                }))) : null)
                            })), r.a.createElement("div", {
                                className: k.a.bottomSpacer
                            })))) : null, this.state.zoomedImage ? r.a.createElement("div", {
                                className: p()(C.a.modal, C.a.modalButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: ""
                                    })
                                }
                            }, r.a.createElement("img", {
                                src: Object(O.f)(this.state.zoomedImage),
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
                                className: p()(k.a.reportInput, F({}, k.a.reportInputFilled, this.state.report)),
                                onChange: function(t) {
                                    e.setState({
                                        report: t.target.value
                                    })
                                },
                                value: this.state.report,
                                "data-gramm_editor": "false"
                            }), this.state.loadingReport ? r.a.createElement(I.a, null) : r.a.createElement("div", {
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
                            }, "Cancel")))) : null, this.state.copying ? this.state.canCopy ? r.a.createElement(S.a, {
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
                            }) : r.a.createElement(S.a, {
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
                            }) : null, this.state.loadingDelete ? r.a.createElement(S.a, {
                                text: "Deleting set...",
                                loading: this.state.loadingDelete
                            }) : null)
                        }
                    }]) && Q(t.prototype, n), a && Q(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(r.a.Component);
            $.propTypes = {
                match: l.a.object,
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(j.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))($)))
        },
        yFhE: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__header___WE435-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__mainContainer___4TLvi-camelCase{display:flex;flex-flow:row wrap;justify-content:flex-start;margin:5px calc(5% - 12px);width:calc(90% - 24px);max-width:1200px}.styles__infoContainer___2uI-S-camelCase{border-radius:7px;background-color:#fff;padding:15px 20px 22px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:12px;min-width:460px;display:flex;flex-direction:column;color:#3a3a3a}.styles__headerRow___1tdPa-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:3px}.styles__headerIcon___1ykdN-camelCase{padding-right:10px;font-size:28px;color:#669}.styles__infoHeader___1lsZY-camelCase{font-size:30px;font-family:Nunito,sans-serif;font-weight:700}.styles__text___1x37n-camelCase{padding:2px 0}.styles__link___5UR6_-camelCase,.styles__text___1x37n-camelCase{text-align:left;font-size:20px;font-family:Nunito,sans-serif}.styles__link___5UR6_-camelCase{color:#0bc2cf;display:inline-block;text-decoration:underline;padding-top:4px;padding-bottom:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__subscriptionText___2BvF7-camelCase{display:flex;flex-direction:row;align-items:center;margin:2px 0;font-size:26px}.styles__blooketText___QMe9h-camelCase{font-family:Titan One,sans-serif;margin-right:5px;padding-bottom:3px}.styles__planText___1m0nS-camelCase{font-family:Nunito,sans-serif;font-weight:700}.styles__upgradeButton___3UQMv-camelCase{margin:10px 0;width:180px}.styles__upgradeButtonInside___396BT-camelCase{height:35px;font-size:22px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}@media only screen and (max-width:1200px){.styles__infoContainer___2uI-S-camelCase{flex-grow:1}}@media only screen and (max-width:600px){.styles__mainContainer___4TLvi-camelCase{min-width:320px;margin:auto;width:95%}.styles__infoContainer___2uI-S-camelCase{min-width:290px;padding:15px;flex-grow:1}}", ""]), t.locals = {
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