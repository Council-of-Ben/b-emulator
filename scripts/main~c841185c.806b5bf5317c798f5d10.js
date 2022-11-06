(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "/vfi": function(t, e, r) {
            var o = r("8b/J");
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, n);
            o.locals && (t.exports = o.locals)
        },
        "57Jf": function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                l = r("17x9"),
                c = r.n(l),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                h = r("FKJl"),
                p = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("/vfi"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("74sb"),
                E = r("qnYv"),
                k = r("dBIF");

            function C(t) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function j(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function O() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                O = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new j(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(S([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == C(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return N()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    k(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function S(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function N(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function B(t, e) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, o = P(t);
                    if (e) {
                        var n = P(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" === C(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function P(t) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var F = function(t) {
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
                }(l, t);
                var e, r, o, a, i, s = I(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = s.call(this, t)).state = {
                        name: "",
                        nameError: "",
                        loading: !1
                    }, e.loading = !1, e.name = "", e.onSubmit = e.onSubmit.bind(T(e)), e
                }
                return e = l, (r = [{
                    key: "componentDidMount",
                    value: (a = O().mark((function t() {
                        var e;
                        return O().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if (e = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return Object(h.b)("NamePage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                case 7:
                                    this.name = e.name;
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, o) {
                            var n = a.apply(t, e);

                            function i(t) {
                                S(n, r, o, i, s, "next", t)
                            }

                            function s(t) {
                                S(n, r, o, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = Object(x.t)(this.state.name);
                            this.setState({
                                nameError: r
                            }, (function() {
                                e.state.nameError ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : E.a.put("/api/users/change/name", {
                                    name: e.name,
                                    newName: e.state.name
                                }).then((function(t) {
                                    !0 === t.data.success ? Object(k.a)() : (e.loading = !1, e.setState(j({
                                        loading: !1
                                    }, "".concat(t.data.errType, "Error"), t.data.msg)))
                                })).catch((function(t) {
                                    Object(h.b)(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return n.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, n.a.createElement(v.a, {
                            title: "Change Name | Blooket",
                            desc: "Change the name for your Blooket account."
                        }), n.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), n.a.createElement("div", {
                            className: _.a.slantBackground
                        }), n.a.createElement("div", {
                            className: _.a.regularBody
                        }, n.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, n.a.createElement("div", {
                            className: g.a.containerHeader
                        }, "Change Name"), n.a.createElement("div", null, n.a.createElement("div", {
                            className: f()(g.a.inputContainer, j({}, g.a.inputFilled, this.state.name), j({}, g.a.inputError, this.state.nameError))
                        }, n.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-user", j({}, g.a.iconFilled, this.state.name), j({}, g.a.iconError, this.state.nameError))
                        }), n.a.createElement("input", {
                            className: f()(g.a.input, j({}, g.a.inputError, this.state.nameError)),
                            placeholder: "New Name",
                            onChange: function(e) {
                                return t.setState({
                                    name: e.target.value.trim().slice(0, 15),
                                    nameError: ""
                                })
                            },
                            value: this.state.name,
                            type: "text",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), this.state.loading ? n.a.createElement(w.a, null) : n.a.createElement("input", {
                            type: "submit",
                            value: "Change Name",
                            className: f()(g.a.button, j({}, g.a.buttonFilled, this.state.name), j({}, g.a.buttonError, this.state.nameError)),
                            tabIndex: 0
                        })), this.state.nameError ? n.a.createElement("div", {
                            className: g.a.errorContainer
                        }, n.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), n.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.nameError)) : null)))
                    }
                }]) && N(e.prototype, r), o && N(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            F.propTypes = {
                user: c.a.object
            };
            e.a = Object(p.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(F)))
        },
        "8b/J": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__container___d9MYU-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;border-radius:7px;text-align:center;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__containerHeader___2740i-camelCase{text-align:center;font-size:40px;line-height:40px;margin:20px;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__inputContainer___1lpQB-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1lpQB-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase[focus-within]>.styles__icon___2ZH9L-camelCase{color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase:focus-within>.styles__icon___2ZH9L-camelCase{color:#0bc2cf}.styles__inputFilled___2pDFI-camelCase{border-color:#3a3a3a}.styles__inputError___15dDm-camelCase{border-color:#ce1313}.styles__icon___2ZH9L-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___3JEbe-camelCase{color:#3a3a3a}.styles__iconError___1v0UD-camelCase{color:#ce1313}.styles__input___1x6Zg-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___1x6Zg-camelCase:-moz-placeholder,.styles__input___1x6Zg-camelCase:-ms-input-placeholder,.styles__input___1x6Zg-camelCase::-moz-placeholder,.styles__input___1x6Zg-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___sGUIc-camelCase:-moz-placeholder,.styles__mInput___sGUIc-camelCase:-ms-input-placeholder,.styles__mInput___sGUIc-camelCase::-moz-placeholder,.styles__mInput___sGUIc-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___15dDm-camelCase,.styles__inputError___15dDm-camelCase:-moz-placeholder,.styles__inputError___15dDm-camelCase:-ms-input-placeholder,.styles__inputError___15dDm-camelCase::-moz-placeholder,.styles__inputError___15dDm-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___1x6Zg-camelCase:focus,.styles__input___1x6Zg-camelCase:focus:-moz-placeholder,.styles__input___1x6Zg-camelCase:focus:-ms-input-placeholder,.styles__input___1x6Zg-camelCase:focus::-moz-placeholder,.styles__input___1x6Zg-camelCase:focus::-webkit-input-placeholder,.styles__mInput___sGUIc-camelCase:focus,.styles__mInput___sGUIc-camelCase:focus:-moz-placeholder,.styles__mInput___sGUIc-camelCase:focus:-ms-input-placeholder,.styles__mInput___sGUIc-camelCase:focus::-moz-placeholder,.styles__mInput___sGUIc-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___d9MYU-camelCase{width:320px}.styles__inputContainer___1lpQB-camelCase{width:280px}.styles__input___1x6Zg-camelCase{width:210px}}.styles__button___2e3MR-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___2e3MR-camelCase:focus,.styles__button___2e3MR-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___3Aa5b-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___xwiCq-camelCase,.styles__buttonError___xwiCq-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___xwiCq-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___3L947-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___27g6U-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1BA55-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__google___3QHN--camelCase{width:160px;margin:10px auto 30px}", ""]), e.locals = {
                container: "styles__container___d9MYU-camelCase",
                containerHeader: "styles__containerHeader___2740i-camelCase",
                inputContainer: "styles__inputContainer___1lpQB-camelCase",
                icon: "styles__icon___2ZH9L-camelCase",
                inputFilled: "styles__inputFilled___2pDFI-camelCase",
                inputError: "styles__inputError___15dDm-camelCase",
                iconFilled: "styles__iconFilled___3JEbe-camelCase",
                iconError: "styles__iconError___1v0UD-camelCase",
                input: "styles__input___1x6Zg-camelCase",
                mInput: "styles__mInput___sGUIc-camelCase",
                button: "styles__button___2e3MR-camelCase",
                buttonFilled: "styles__buttonFilled___3Aa5b-camelCase",
                buttonError: "styles__buttonError___xwiCq-camelCase",
                errorContainer: "styles__errorContainer___3L947-camelCase",
                errorIcon: "styles__errorIcon___27g6U-camelCase",
                errorText: "styles__errorText___1BA55-camelCase",
                google: "styles__google___3QHN--camelCase"
            }
        },
        "9ddr": function(t, e, r) {
            var o = r("o1xO");
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, n);
            o.locals && (t.exports = o.locals)
        },
        "C/JS": function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                l = r.n(s),
                c = r("Ty5D"),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                h = r("FKJl"),
                p = r("E8Bj"),
                m = r("XTAU"),
                _ = r("ca/f"),
                y = r("t/SN"),
                g = r.n(y),
                b = r("Xst1"),
                v = r.n(b),
                w = r("qnYv"),
                x = r("i4/Q"),
                E = r("lmLo");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new O(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(S([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == k(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return N()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, O.prototype = {
                    constructor: O,
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    j(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function j(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function O(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, o = L(t);
                    if (e) {
                        var n = L(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return B(this, r)
                }
            }

            function B(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return I(t)
            }

            function I(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && S(t, e)
                }(l, t);
                var e, r, o, a, i, s = N(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = s.call(this, t)).state = {
                        user: null,
                        classes: [],
                        isPlus: !1,
                        ready: !1,
                        isCreating: !1,
                        loading: !1,
                        className: "",
                        classColor: "#1f77b4",
                        classError: ""
                    }, e.here = !0, e.createClass = e.createClass.bind(I(e)), e
                }
                return e = l, (r = [{
                    key: "componentDidMount",
                    value: (a = C().mark((function t() {
                        var e, r, o = this;
                        return C().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if (e = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return Object(h.b)("ClassesPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                case 7:
                                    return this.setState({
                                        user: e
                                    }), t.next = 10, new Promise((function(t) {
                                        w.a.get("/api/users/plan").then((function(e) {
                                            o.here && t(e.data.hasPlus)
                                        })).catch((function() {
                                            t(!1)
                                        }))
                                    }));
                                case 10:
                                    (r = t.sent) ? w.a.get("/api/classes/user").then((function(t) {
                                        o.here && t && o.setState({
                                            classes: t.data,
                                            isPlus: r,
                                            ready: !0
                                        })
                                    })).catch((function(t) {
                                        Object(h.b)(t)
                                    })): this.setState({
                                        ready: !0,
                                        isPlus: r
                                    });
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, o) {
                            var n = a.apply(t, e);

                            function i(t) {
                                j(n, r, o, i, s, "next", t)
                            }

                            function s(t) {
                                j(n, r, o, i, s, "throw", t)
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
                    key: "createClass",
                    value: function(t) {
                        var e = this;
                        if (t && t.preventDefault(), !this.loading) {
                            if (this.loading = !0, !this.state.className) return this.loading = !1, void this.setState({
                                classError: "You need a class name."
                            });
                            this.setState({
                                loading: !0
                            }), w.a.post("/api/classes", {
                                name: this.state.className,
                                color: this.state.classColor
                            }).then((function(t) {
                                e.here && e.props.history.push("/class/".concat(t.data))
                            })).catch((function(t) {
                                e.here && (Object(h.b)(t), e.loading = !1, e.setState({
                                    isCreating: !1,
                                    loading: !1
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return n.a.createElement("div", {
                            className: d.isMobile ? v.a.mBody : v.a.body
                        }, n.a.createElement(m.a, {
                            title: "Classes | Blooket",
                            desc: "Create and manage your classes!"
                        }), n.a.createElement(x.a, {
                            user: this.state.user,
                            page: "Classes"
                        }), n.a.createElement("div", {
                            className: v.a.profileBody
                        }, n.a.createElement("div", {
                            className: g.a.header
                        }, "Classes"), this.state.ready ? this.state.isPlus ? 0 === this.state.classes.length ? n.a.createElement("div", {
                            className: g.a.bigContainer
                        }, n.a.createElement("div", {
                            className: g.a.bigText
                        }, "No Classes Yet"), n.a.createElement("div", {
                            className: g.a.addButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.setState({
                                    isCreating: !0
                                })
                            }
                        }, n.a.createElement("i", {
                            className: f()("fas fa-plus-circle", g.a.addIcon)
                        }), n.a.createElement("div", {
                            className: g.a.addText
                        }, "New Class"))) : n.a.createElement("div", {
                            className: g.a.container
                        }, this.state.classes.map((function(e) {
                            return n.a.createElement(E.a, {
                                key: e._id,
                                outsideClass: g.a.class,
                                color: e.color,
                                onClick: function() {
                                    return t.props.history.push("/class/".concat(e._id))
                                }
                            }, n.a.createElement("div", {
                                className: g.a.classInside
                            }, n.a.createElement("div", {
                                className: g.a.name
                            }, e.name), n.a.createElement("div", {
                                className: g.a.studentsText
                            }, "".concat(e.students.length, " Student").concat(1 === e.students.length ? "" : "s"))))
                        })), n.a.createElement(E.a, {
                            outsideClass: g.a.addButton,
                            color: "#fff",
                            onClick: function() {
                                return t.setState({
                                    isCreating: !0
                                })
                            }
                        }, n.a.createElement("div", {
                            className: g.a.addButtonInside
                        }, n.a.createElement("i", {
                            className: f()("fas fa-plus-circle", g.a.addIcon)
                        }), n.a.createElement("div", {
                            className: g.a.addText
                        }, "New Class")))) : n.a.createElement("div", {
                            className: g.a.bigContainer
                        }, n.a.createElement("div", {
                            className: g.a.bigText
                        }, "Blooket Plus Required"), n.a.createElement(E.a, {
                            outsideClass: g.a.upgradeButton,
                            color: "#ff7b24",
                            onClick: function() {
                                return t.props.history.push("/upgrade")
                            }
                        }, n.a.createElement("div", {
                            className: g.a.upgradeButtonInside
                        }, "Upgrade"))) : null, this.state.isCreating ? n.a.createElement(_.a, {
                            text: "Enter a class name and choose a color:",
                            loading: this.state.loading,
                            stringValue: this.state.className,
                            stringChange: function(e) {
                                return t.setState({
                                    className: e.target.value.slice(0, 60),
                                    classError: ""
                                })
                            },
                            colorChange: function(e) {
                                return t.setState({
                                    classColor: e
                                })
                            },
                            colorValue: this.state.classColor,
                            onSubmit: this.createClass,
                            error: this.state.classError,
                            buttonOne: {
                                text: "Create",
                                click: this.createClass,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return t.setState({
                                        isCreating: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : null))
                    }
                }]) && O(e.prototype, r), o && O(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            T.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            e.a = Object(p.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(T)))
        },
        bSFd: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__right___385mx-camelCase{position:absolute;top:50%;transform:translateY(-50%);right:2.5%;width:400px;overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:10px}.styles__rightBackground___36mp5-camelCase{width:100%;height:100%}.styles__rightBottom___F7qsO-camelCase{width:100%;position:absolute;bottom:0;left:0;height:50px;box-shadow:inset 0 -9px rgba(0,0,0,.2);border-bottom-left-radius:10px;border-bottom-right-radius:10px}.styles__rightBlook___1JkY7-camelCase{position:absolute;bottom:85px;left:105px;width:190px}.styles__rightTopText___2VrKK-camelCase{position:absolute;top:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center}.styles__highlightedName___2wOtf-camelCase{text-shadow:0 3px 3px rgba(0,0,0,.2);width:100%;height:50px;text-align:center}.styles__highlightedRarity___1EXx_-camelCase{font-size:30px;-webkit-text-stroke:#3a3a3a 1.5px}.styles__highlightedBottom___QmY2Y-camelCase{position:absolute;bottom:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center;font-size:30px;text-shadow:0 0 4px rgba(0,0,0,.4)}.styles__rightButtonRow___3a0GF-camelCase{position:absolute;top:calc(50% + 220px);right:2.5%;width:400px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.styles__rightButton___2_ZIX-camelCase{width:180px;margin:10px}.styles__rightButtonInside___14imT-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;height:40px;color:#fff;text-shadow:1px 2px rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:28px}.styles__rightButtonImg___1WJdo-camelCase{width:28px;height:28px;margin-right:7px;margin-top:3px}.styles__rightButtonIcon___29lC9-camelCase{font-size:28px;margin-right:7px}.styles__topButtonRow___2HIbg-camelCase{position:absolute;top:15px;left:2.5%;width:calc(95% - 430px);flex-flow:row wrap;justify-content:flex-end}.styles__settingButton___2xaQu-camelCase,.styles__topButtonRow___2HIbg-camelCase{display:flex;align-items:center}.styles__settingButton___2xaQu-camelCase{background-color:rgba(0,0,0,.1);color:#3a3a3a;border-radius:5px;font-size:12px;height:20px;padding:0 10px;margin:0 5px;flex-direction:row;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__settingButton___2xaQu-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__left___9beun-camelCase{position:absolute;top:45px;left:2.5%;height:calc(100% - 60px);width:calc(95% - 430px);border-radius:10px;background-color:#9a49aa;padding:10px 10px 19px;box-shadow:inset 0 -9px rgba(0,0,0,.2),0 5px rgba(0,0,0,.25)}.styles__blooksHolder___3qZR1-camelCase,.styles__left___9beun-camelCase{box-sizing:border-box}.styles__blooksHolder___3qZR1-camelCase{width:100%;height:100%;padding:5px;overflow-y:auto}.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar-thumb,.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__soloBlooksHolder___1f8ku-camelCase{width:100%;height:100%;padding:5px;box-sizing:border-box;overflow-y:auto;display:grid;justify-content:center;align-content:flex-start;grid-template-columns:repeat(auto-fill,60px);grid-gap:10px}.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar-thumb,.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__setHolder___rVq3Z-camelCase{margin-bottom:20px;position:relative}.styles__setTop___wIaVS-camelCase{margin-bottom:5px;position:relative;height:50px;width:100%;display:flex;flex-direction:column}.styles__setTopBackground___342Wr-camelCase{position:absolute;left:0;top:0;background-size:50px 50px;opacity:.15;width:100%;height:100%}.styles__setText___1PQLQ-camelCase{margin:auto 0;font-family:Titan One,sans-serif;color:#fff;text-shadow:3px 3px rgba(0,0,0,.2);font-size:26px}.styles__setDivider___3da0c-camelCase{width:100%;height:3px;background-color:#fff;border-radius:2px}.styles__setBlooks___3xamH-camelCase{display:grid;grid-template-columns:repeat(auto-fill,60px);grid-gap:10px}.styles__blookContainer___3JrKb-camelCase{width:60px;height:70px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;will-change:transform}.styles__blook___bNr_t-camelCase{width:55px}.styles__lockedBlook___3oGaX-camelCase{filter:brightness(0)}.styles__blookLock___3Kgua-camelCase{font-size:24px;opacity:.7;top:55%;left:50%;transform:translate(-50%,-50%)}.styles__blookLock___3Kgua-camelCase,.styles__blookText___3AMdK-camelCase{color:#fff;position:absolute}.styles__blookText___3AMdK-camelCase{font-size:10px;font-family:Titan One,sans-serif;font-size:12px;-webkit-text-stroke:#3a3a3a 1px;background-color:#fff;border-radius:7px;padding:0 5px;height:14px;line-height:14px;display:flex;justify-content:center;align-items:center;bottom:2px;left:-2px}@media only screen and (max-width:1000px){.styles__right___385mx-camelCase{width:300px}.styles__rightBlook___1JkY7-camelCase{bottom:64px;left:78.5px;width:143px}.styles__rightTopText___2VrKK-camelCase{top:5px;left:2.5%;width:95%}.styles__highlightedName___2wOtf-camelCase{height:30px}.styles__highlightedRarity___1EXx_-camelCase{font-size:20px}.styles__highlightedBottom___QmY2Y-camelCase{bottom:15px;font-size:20px}.styles__rightButtonRow___3a0GF-camelCase{top:calc(50% + 180px);width:300px}.styles__rightButton___2_ZIX-camelCase{width:140px}.styles__rightButtonInside___14imT-camelCase{height:30px;font-size:22px}.styles__rightButtonImg___1WJdo-camelCase{width:22px;height:22px;margin-top:3px}.styles__rightButtonIcon___29lC9-camelCase{font-size:20px}.styles__left___9beun-camelCase,.styles__topButtonRow___2HIbg-camelCase{width:calc(95% - 320px)}}.styles__mBlooksButton___3f-YA-camelCase{position:absolute!important;bottom:calc(50% + 180px);left:50%;transform:translateX(-50%);visibility:hidden}.styles__mBlooksButtonInside___2RBAk-camelCase{width:200px;height:30px;color:#fff;text-shadow:1px 2px rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:22px;display:flex;justify-content:center;align-items:center}@media only screen and (max-width:685px){.styles__left___9beun-camelCase,.styles__topButtonRow___2HIbg-camelCase{visibility:hidden}.styles__left___9beun-camelCase{top:15px;left:2.5%;height:calc(100% - 30px);width:95%;z-index:5}.styles__right___385mx-camelCase{right:calc(50% - 150px)}.styles__rightButtonRow___3a0GF-camelCase{right:5%;width:90%}.styles__mBlooksButton___3f-YA-camelCase,.styles__mShowLeft___1IXx3-camelCase{visibility:visible}}", ""]), e.locals = {
                right: "styles__right___385mx-camelCase",
                rightBackground: "styles__rightBackground___36mp5-camelCase",
                rightBottom: "styles__rightBottom___F7qsO-camelCase",
                rightBlook: "styles__rightBlook___1JkY7-camelCase",
                rightTopText: "styles__rightTopText___2VrKK-camelCase",
                highlightedName: "styles__highlightedName___2wOtf-camelCase",
                highlightedRarity: "styles__highlightedRarity___1EXx_-camelCase",
                highlightedBottom: "styles__highlightedBottom___QmY2Y-camelCase",
                rightButtonRow: "styles__rightButtonRow___3a0GF-camelCase",
                rightButton: "styles__rightButton___2_ZIX-camelCase",
                rightButtonInside: "styles__rightButtonInside___14imT-camelCase",
                rightButtonImg: "styles__rightButtonImg___1WJdo-camelCase",
                rightButtonIcon: "styles__rightButtonIcon___29lC9-camelCase",
                topButtonRow: "styles__topButtonRow___2HIbg-camelCase",
                settingButton: "styles__settingButton___2xaQu-camelCase",
                left: "styles__left___9beun-camelCase",
                blooksHolder: "styles__blooksHolder___3qZR1-camelCase",
                soloBlooksHolder: "styles__soloBlooksHolder___1f8ku-camelCase",
                setHolder: "styles__setHolder___rVq3Z-camelCase",
                setTop: "styles__setTop___wIaVS-camelCase",
                setTopBackground: "styles__setTopBackground___342Wr-camelCase",
                setText: "styles__setText___1PQLQ-camelCase",
                setDivider: "styles__setDivider___3da0c-camelCase",
                setBlooks: "styles__setBlooks___3xamH-camelCase",
                blookContainer: "styles__blookContainer___3JrKb-camelCase",
                blook: "styles__blook___bNr_t-camelCase",
                lockedBlook: "styles__lockedBlook___3oGaX-camelCase",
                blookLock: "styles__blookLock___3Kgua-camelCase",
                blookText: "styles__blookText___3AMdK-camelCase",
                mBlooksButton: "styles__mBlooksButton___3f-YA-camelCase",
                mBlooksButtonInside: "styles__mBlooksButtonInside___2RBAk-camelCase",
                mShowLeft: "styles__mShowLeft___1IXx3-camelCase"
            }
        },
        byOs: function(t, e, r) {
            var o = r("bSFd");
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, n);
            o.locals && (t.exports = o.locals)
        },
        fLDY: function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                l = r("17x9"),
                c = r.n(l),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                h = r("FKJl"),
                p = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("/vfi"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("74sb"),
                E = r("qnYv"),
                k = r("dBIF");

            function C(t) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function j(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function O() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                O = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new j(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(S([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == C(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return N()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    k(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function S(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function N(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function B(t, e) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, o = P(t);
                    if (e) {
                        var n = P(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" === C(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function P(t) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var F = function(t) {
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
                }(l, t);
                var e, r, o, a, i, s = I(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = s.call(this, t)).state = {
                        email: "",
                        emailError: "",
                        loading: !1
                    }, e.loading = !1, e.email = "", e.onSubmit = e.onSubmit.bind(T(e)), e
                }
                return e = l, (r = [{
                    key: "componentDidMount",
                    value: (a = O().mark((function t() {
                        var e;
                        return O().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if ((e = t.sent) && e.hasPassword) {
                                        t.next = 7;
                                        break
                                    }
                                    return Object(h.b)("EmailPage cannot proceed without user or user.hasPassword"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                case 7:
                                    this.email = e.email;
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, o) {
                            var n = a.apply(t, e);

                            function i(t) {
                                S(n, r, o, i, s, "next", t)
                            }

                            function s(t) {
                                S(n, r, o, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = Object(x.q)(this.state.email),
                                o = "";
                            this.state.password || (o = "Where's the password?"), this.setState({
                                emailError: r,
                                passwordError: o
                            }, (function() {
                                e.state.emailError || e.state.passwordError ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : E.a.put("/api/users/change/email", {
                                    email: e.email,
                                    newEmail: e.state.email.toLowerCase(),
                                    password: e.state.password
                                }).then((function(t) {
                                    !0 === t.data.success ? Object(k.a)() : (e.loading = !1, e.setState(j({
                                        loading: !1
                                    }, "".concat(t.data.errType, "Error"), t.data.msg)))
                                })).catch((function(t) {
                                    Object(h.b)(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return n.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, n.a.createElement(v.a, {
                            title: "Change Email | Blooket",
                            desc: "Change the email for your Blooket account."
                        }), n.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), n.a.createElement("div", {
                            className: _.a.slantBackground
                        }), n.a.createElement("div", {
                            className: _.a.regularBody
                        }, n.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, n.a.createElement("div", {
                            className: g.a.containerHeader
                        }, "Change Email"), n.a.createElement("div", null, n.a.createElement("div", {
                            className: f()(g.a.inputContainer, j({}, g.a.inputFilled, this.state.email), j({}, g.a.inputError, this.state.emailError))
                        }, n.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-envelope", j({}, g.a.iconFilled, this.state.email), j({}, g.a.iconError, this.state.emailError))
                        }), n.a.createElement("input", {
                            className: f()(g.a.input, j({}, g.a.inputError, this.state.emailError)),
                            placeholder: "New Email",
                            onChange: function(e) {
                                return t.setState({
                                    email: e.target.value.trim().slice(0, 50),
                                    emailError: ""
                                })
                            },
                            value: this.state.email,
                            type: "text",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), n.a.createElement("div", {
                            className: f()(g.a.inputContainer, j({}, g.a.inputFilled, this.state.password), j({}, g.a.inputError, this.state.passwordError))
                        }, n.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-lock", j({}, g.a.iconFilled, this.state.password), j({}, g.a.iconError, this.state.passwordError))
                        }), n.a.createElement("input", {
                            className: f()(g.a.input, j({}, g.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(e) {
                                return t.setState({
                                    password: e.target.value,
                                    passwordError: ""
                                })
                            },
                            type: "password"
                        })), this.state.loading ? n.a.createElement(w.a, null) : n.a.createElement("input", {
                            type: "submit",
                            value: "Change Email",
                            className: f()(g.a.button, j({}, g.a.buttonFilled, this.state.email && this.state.password), j({}, g.a.buttonError, this.state.emailError || this.state.passwordError)),
                            tabIndex: 0
                        })), this.state.emailError || this.state.passwordError ? n.a.createElement("div", {
                            className: g.a.errorContainer
                        }, n.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), n.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.emailError || this.state.passwordError)) : null)))
                    }
                }]) && N(e.prototype, r), o && N(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            F.propTypes = {
                user: c.a.object
            };
            e.a = Object(p.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(F)))
        },
        fuSh: function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                l = r("TSYQ"),
                c = r.n(l),
                u = r("H1WH"),
                f = r("FKJl"),
                d = r("E8Bj"),
                h = r("Xst1"),
                p = r.n(h),
                m = r("/vfi"),
                _ = r.n(m),
                y = r("oQ+7"),
                g = r("XTAU"),
                b = r("XOuL"),
                v = r("74sb"),
                w = r("qnYv");

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function k(t, e) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, o = S(t);
                    if (e) {
                        var n = S(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return j(this, r)
                }
            }

            function j(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return O(t)
            }

            function O(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function S(t) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && k(t, e)
                }(i, t);
                var e, r, o, a = C(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = a.call(this, t)).state = {
                        loading: !1,
                        success: !1,
                        done: !1
                    }, e.email = Object(v.h)("e"), e.onSubmit = e.onSubmit.bind(O(e)), e
                }
                return e = i, (r = [{
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        t.preventDefault(), this.state.loading || (this.setState({
                            loading: !0
                        }), w.a.put("/api/users/unsubscribe", {
                            email: decodeURIComponent(this.email).toLowerCase()
                        }).then((function(t) {
                            e.setState({
                                success: t.data.success,
                                done: !0
                            })
                        })).catch((function(t) {
                            Object(f.b)(t)
                        })))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.email ? n.a.createElement("div", {
                            className: u.isMobile ? p.a.mBody : p.a.body
                        }, n.a.createElement(g.a, {
                            title: "Unsubscribe | Blooket",
                            desc: "Unsubscribe from Blooket emails."
                        }), n.a.createElement(y.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), n.a.createElement("div", {
                            className: p.a.slantBackground
                        }), n.a.createElement("div", {
                            className: p.a.regularBody
                        }, n.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: _.a.container
                        }, n.a.createElement("div", {
                            className: _.a.containerHeader
                        }, this.state.done ? this.state.success ? "Successfully Unsubscribed!" : "Please Refresh and Try Again" : "Unsubscribe from Emails?"), this.state.done ? null : n.a.createElement("div", null, this.state.loading ? n.a.createElement(b.a, null) : n.a.createElement("input", {
                            type: "submit",
                            value: "Yes",
                            className: c()(_.a.button, _.a.buttonFilled),
                            tabIndex: 0
                        }))))) : (Object(f.b)("UnsubscribePage cannot be rendered without an email"), void(window.location.href = "".concat("https://id.blooket.com", "/login")))
                    }
                }]) && E(e.prototype, r), o && E(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(n.a.Component);
            N.propTypes = {};
            e.a = Object(d.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(N)))
        },
        kAC4: function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                l = r("17x9"),
                c = r.n(l),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                h = r("3HZZ"),
                p = r("FKJl"),
                m = r("E8Bj"),
                _ = r("Xst1"),
                y = r.n(_),
                g = r("/vfi"),
                b = r.n(g),
                v = r("oQ+7"),
                w = r("XTAU"),
                x = r("XOuL"),
                E = r("LHn/"),
                k = r("qnYv"),
                C = r("dBIF");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function S() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                S = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new C(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == j(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return N()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function C(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = O, C.prototype = {
                    constructor: C,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    k(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function N(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function B(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(o, n) {
                        var a = t.apply(e, r);

                        function i(t) {
                            N(a, o, n, i, s, "next", t)
                        }

                        function s(t) {
                            N(a, o, n, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }

            function I(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function L(t, e) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, o = M(t);
                    if (e) {
                        var n = M(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return F(t)
            }

            function F(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function M(t) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && L(t, e)
                }(s, t);
                var e, r, o, a, i = T(s);

                function s(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (e = i.call(this, t)).state = {
                        password: "",
                        passwordError: "",
                        loading: !1,
                        hasPassword: !1,
                        ready: !1,
                        googleClientId: ""
                    }, e.loading = !1, e.email = "", e.onSubmit = e.onSubmit.bind(F(e)), e.googleSuccess = e.googleSuccess.bind(F(e)), e.googleFailure = e.googleFailure.bind(F(e)), e
                }
                return e = s, (r = [{
                    key: "componentDidMount",
                    value: (a = B(S().mark((function t() {
                        var e, r = this;
                        return S().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if (e = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return Object(p.b)("DeletePage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                case 7:
                                    this.email = e.email, this.setState({
                                        hasPassword: e.hasPassword,
                                        ready: !0
                                    }), k.a.get("/api/config").then(function() {
                                        var t = B(S().mark((function t(e) {
                                            return S().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (e.data && e.data.googleClientId) {
                                                            t.next = 4;
                                                            break
                                                        }
                                                        throw Error("could not get googleClientId from backend");
                                                    case 4:
                                                        r.setState({
                                                            googleClientId: e.data.googleClientId
                                                        });
                                                    case 5:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }());
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = "";
                            this.state.password || (r = "Where's The Password?"), this.setState({
                                passwordError: r
                            }, (function() {
                                e.state.passwordError ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : k.a.delete("/api/users", {
                                    params: {
                                        email: e.email,
                                        password: e.state.password
                                    }
                                }).then((function(t) {
                                    t.data.success ? Object(C.a)() : (e.loading = !1, e.setState({
                                        loading: !1,
                                        passwordError: t.data.msg
                                    }))
                                })).catch((function(t) {
                                    Object(p.b)(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "googleSuccess",
                    value: function(t) {
                        var e = this;
                        this.setState({
                            loading: !0,
                            passwordError: ""
                        }), k.a.delete("/api/users/google", {
                            params: {
                                access_token: t.accessToken,
                                email: this.email
                            }
                        }).then((function(t) {
                            t.data.success ? Object(C.a)() : e.setState({
                                passwordError: t.data.msg,
                                loading: !1
                            })
                        })).catch((function() {
                            e.setState({
                                passwordError: "Failed to delete account. Please try again.",
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "googleFailure",
                    value: function() {
                        this.setState({
                            passwordError: "Failed to verify account with Google.",
                            loading: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return n.a.createElement("div", {
                            className: d.isMobile ? y.a.mBody : y.a.body
                        }, n.a.createElement(w.a, {
                            title: "Delete Account | Blooket",
                            desc: "Delete your Blooket account."
                        }), n.a.createElement(v.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), n.a.createElement("div", {
                            className: y.a.slantBackground
                        }), n.a.createElement("div", {
                            className: y.a.regularBody
                        }, this.state.ready ? n.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: b.a.container
                        }, n.a.createElement("div", {
                            className: b.a.containerHeader
                        }, "Delete Account"), n.a.createElement("div", null, this.state.hasPassword ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: f()(b.a.inputContainer, O({}, b.a.inputFilled, this.state.password), O({}, b.a.inputError, this.state.passwordError))
                        }, n.a.createElement("i", {
                            className: f()(b.a.icon, "fas fa-lock", O({}, b.a.iconFilled, this.state.password), O({}, b.a.iconError, this.state.passwordError))
                        }), n.a.createElement("input", {
                            className: f()(b.a.input, O({}, b.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(e) {
                                return t.setState({
                                    password: e.target.value.trim(),
                                    passwordError: ""
                                })
                            },
                            type: "password",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), this.state.loading ? n.a.createElement(x.a, null) : n.a.createElement("input", {
                            type: "submit",
                            value: "Delete",
                            className: f()(b.a.button, O({}, b.a.buttonFilled, this.state.password), O({}, b.a.buttonError, this.state.passwordError)),
                            tabIndex: 0
                        })) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", null, this.state.googleClientId ? n.a.createElement(h.GoogleLogin, {
                            clientId: this.state.googleClientId,
                            onSuccess: this.googleSuccess,
                            onFailure: this.googleFailure,
                            render: function(t) {
                                return n.a.createElement("div", {
                                    className: f()(y.a.googleButton, b.a.google),
                                    disabled: t.disabled,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: t.onClick
                                }, n.a.createElement("img", {
                                    src: E.a.basic.googleLogo,
                                    alt: "Google Logo",
                                    className: y.a.googleLogo,
                                    draggable: !1
                                }), "Delete Now")
                            }
                        }) : null), this.state.loading ? n.a.createElement(x.a, null) : null)), this.state.passwordError ? n.a.createElement("div", {
                            className: b.a.errorContainer
                        }, n.a.createElement("i", {
                            className: f()(b.a.errorIcon, "fas fa-times-circle")
                        }), n.a.createElement("div", {
                            className: b.a.errorText
                        }, this.state.passwordError)) : null) : null))
                    }
                }]) && I(e.prototype, r), o && I(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), s
            }(n.a.Component);
            A.propTypes = {
                user: c.a.object
            };
            e.a = Object(m.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(A)))
        },
        kVNV: function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                l = r.n(s),
                c = r("Ty5D"),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                h = r("FKJl"),
                p = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("/vfi"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("qnYv"),
                E = r("dBIF");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function C(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new O(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(S([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == k(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return N()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function C(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !t)
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), C(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    C(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function O(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function N(t, e) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function B(t) {
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
                    var r, o = T(t);
                    if (e) {
                        var n = T(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function T(t) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && N(t, e)
                }(l, t);
                var e, r, o, a, i, s = B(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = s.call(this, t)).state = {
                        password: "",
                        password2: "",
                        passwordError: "",
                        password2Error: "",
                        loading: !1
                    }, e.loading = !1, e.name = "", e.onSubmit = e.onSubmit.bind(L(e)), e
                }
                return e = l, (r = [{
                    key: "componentDidMount",
                    value: (a = j().mark((function t() {
                        var e;
                        return j().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if (e = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return Object(h.b)("AddPasswordPage cannot continue without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                case 7:
                                    this.name = e.name;
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, o) {
                            var n = a.apply(t, e);

                            function i(t) {
                                O(n, r, o, i, s, "next", t)
                            }

                            function s(t) {
                                O(n, r, o, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = "",
                                o = "";
                            this.state.password ? this.state.password.length < 8 ? r = "Password must have at least 8 characters." : this.state.password.length > 72 ? r = "Password is too long (trouble encrypting)." : /(?=.*[A-Z])/.test(this.state.password) ? /(?=.*[a-z])/.test(this.state.password) ? /(?=.*[0-9])/.test(this.state.password) || (r = "Password must have at least 1 number digit.") : r = "Password must have at least 1 lowercase letter." : r = "Password must have at least 1 uppercase letter." : r = "Where's The Password?", this.state.password !== this.state.password2 && (o = "The passwords don't match."), this.state.password2 || (o = "Where's The Confirming Password?"), this.setState({
                                passwordError: r,
                                password2Error: o
                            }, (function() {
                                e.state.passwordError || e.state.password2Error ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : x.a.put("/api/users/addpassword", {
                                    name: e.name,
                                    password: e.state.password
                                }).then((function(t) {
                                    !0 === t.data.success ? Object(E.a)() : (e.loading = !1, e.setState({
                                        loading: !1,
                                        passwordError: t.data.msg
                                    }))
                                })).catch((function(t) {
                                    Object(h.b)(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return n.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, n.a.createElement(v.a, {
                            title: "Add Password | Blooket",
                            desc: "Add a password for your Blooket account."
                        }), n.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), n.a.createElement("div", {
                            className: _.a.slantBackground
                        }), n.a.createElement("div", {
                            className: _.a.regularBody
                        }, n.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, n.a.createElement("div", {
                            className: g.a.containerHeader
                        }, "Add Password"), n.a.createElement("div", null, n.a.createElement("div", {
                            className: f()(g.a.inputContainer, C({}, g.a.inputFilled, this.state.password), C({}, g.a.inputError, this.state.passwordError))
                        }, n.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-lock", C({}, g.a.iconFilled, this.state.password), C({}, g.a.iconError, this.state.passwordError))
                        }), n.a.createElement("input", {
                            className: f()(g.a.input, C({}, g.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(e) {
                                return t.setState({
                                    password: e.target.value.trim(),
                                    passwordError: ""
                                })
                            },
                            type: "password",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), n.a.createElement("div", {
                            className: f()(g.a.inputContainer, C({}, g.a.inputFilled, this.state.password2), C({}, g.a.inputError, this.state.password2Error))
                        }, n.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-lock", C({}, g.a.iconFilled, this.state.password2), C({}, g.a.iconError, this.state.password2Error))
                        }), n.a.createElement("input", {
                            className: f()(g.a.input, C({}, g.a.inputError, this.state.password2Error)),
                            placeholder: "Confirm Password",
                            onChange: function(e) {
                                return t.setState({
                                    password2: e.target.value,
                                    password2Error: ""
                                })
                            },
                            type: "password"
                        })), this.state.loading ? n.a.createElement(w.a, null) : n.a.createElement("input", {
                            type: "submit",
                            value: "Add Password",
                            className: f()(g.a.button, C({}, g.a.buttonFilled, this.state.password && this.state.password2), C({}, g.a.buttonError, this.state.passwordError || this.state.password2Error)),
                            tabIndex: 0
                        })), this.state.passwordError || this.state.password2Error ? n.a.createElement("div", {
                            className: g.a.errorContainer
                        }, n.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), n.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.passwordError || this.state.password2Error)) : null)))
                    }
                }]) && S(e.prototype, r), o && S(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            P.propTypes = {
                user: l.a.object
            };
            e.a = Object(p.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(P)))
        },
        m4Vc: function(t, e, r) {
            var o = r("o7zh");
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, n);
            o.locals && (t.exports = o.locals)
        },
        mpcV: function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                l = r("17x9"),
                c = r.n(l),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                h = r("FKJl"),
                p = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("m4Vc"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("74sb"),
                E = r("qnYv");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function C(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new O(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(S([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == k(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return N()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function C(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function S(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = S, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !t)
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), C(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    C(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function O(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function N(t, e) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function B(t) {
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
                    var r, o = T(t);
                    if (e) {
                        var n = T(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function T(t) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && N(t, e)
                }(l, t);
                var e, r, o, a, i, s = B(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = s.call(this, t)).state = {
                        name: "",
                        nameError: "",
                        loading: !1,
                        className: "",
                        alreadyJoined: !1
                    }, e.classId = t.match.params.id, e.onSubmit = e.onSubmit.bind(L(e)), e
                }
                return e = l, (r = [{
                    key: "componentDidMount",
                    value: (a = j().mark((function t() {
                        var e, r = this;
                        return j().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if (e = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return Object(h.b)("ClassJoinPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                case 7:
                                    E.a.get("/api/classes", {
                                        params: {
                                            id: this.classId
                                        }
                                    }).then((function(t) {
                                        r.setState({
                                            className: t.data.name,
                                            alreadyJoined: !!t.data.students && t.data.students.map((function(t) {
                                                return t.id
                                            })).includes(e._id)
                                        })
                                    })).catch((function() {
                                        r.props.history.push("/404")
                                    }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, o) {
                            var n = a.apply(t, e);

                            function i(t) {
                                O(n, r, o, i, s, "next", t)
                            }

                            function s(t) {
                                O(n, r, o, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        if (t.preventDefault(), !this.state.loading) {
                            this.setState({
                                loading: !0
                            });
                            var r = Object(x.u)(this.state.name);
                            this.setState({
                                nameError: r
                            }, (function() {
                                e.state.nameError ? e.setState({
                                    loading: !1
                                }) : E.a.put("/api/classes/join", {
                                    id: e.classId,
                                    name: e.state.name
                                }).then((function(t) {
                                    !0 === t.data.success ? e.props.history.push("/stats") : e.setState({
                                        loading: !1,
                                        nameError: t.data.msg
                                    })
                                })).catch((function(t) {
                                    Object(h.b)(t), e.setState({
                                        loading: !1,
                                        nameError: t.response.data
                                    })
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e, r, o = this;
                        return n.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, n.a.createElement(v.a, {
                            title: "Join Class | Blooket",
                            desc: "Use an invite link to join a Blooket class."
                        }), n.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), n.a.createElement("div", {
                            className: _.a.slantBackground
                        }), n.a.createElement("div", {
                            className: _.a.regularBody
                        }, this.state.className ? n.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, n.a.createElement("div", {
                            className: g.a.header
                        }, "Join Class"), n.a.createElement("div", {
                            className: g.a.subheader
                        }, this.state.className), this.state.alreadyJoined ? n.a.createElement("div", {
                            className: g.a.subheader
                        }, "You are already in this class.") : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: g.a.miniHeader
                        }, "Enter your name", n.a.createElement("br", null), "(Make sure your teacher will recognize it):"), n.a.createElement("div", {
                            className: f()(g.a.inputContainer, (t = {}, C(t, g.a.inputFilled, this.state.name), C(t, g.a.inputError, this.state.nameError), t))
                        }, n.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-user", (e = {}, C(e, g.a.iconFilled, this.state.name), C(e, g.a.iconError, this.state.nameError), e))
                        }), n.a.createElement("input", {
                            className: f()(g.a.input, C({}, g.a.inputError, this.state.nameError)),
                            placeholder: "Name",
                            onChange: function(t) {
                                return o.setState({
                                    name: t.target.value.slice(0, 35),
                                    nameError: ""
                                })
                            },
                            value: this.state.name,
                            type: "text",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), this.state.loading ? n.a.createElement(w.a, null) : n.a.createElement("input", {
                            type: "submit",
                            value: "Join Class",
                            className: f()(g.a.button, (r = {}, C(r, g.a.buttonFilled, this.state.name), C(r, g.a.buttonError, this.state.nameError), r)),
                            tabIndex: 0
                        }), this.state.nameError ? n.a.createElement("div", {
                            className: g.a.errorContainer
                        }, n.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), n.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.nameError)) : null)) : null))
                    }
                }]) && S(e.prototype, r), o && S(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            P.propTypes = {
                history: c.a.object,
                user: c.a.object,
                match: c.a.object
            };
            e.a = Object(p.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(P)))
        },
        o1xO: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__fullContainer___qVeWI-camelCase{align-items:center;width:85%;margin:0 7.5% 10px;font-family:Nunito,sans-serif}.styles__fullContainer___qVeWI-camelCase,.styles__header___10sXq-camelCase{display:flex;flex-direction:column}.styles__header___10sXq-camelCase{width:100%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:30px auto 0;padding:10px 15px;box-sizing:border-box}.styles__headerText___3iLda-camelCase{color:#3a3a3a;font-size:52px;font-weight:700}.styles__headerBar___37IdV-camelCase{border-radius:5px;width:260px;height:8px}.styles__headerButtons___BkvE9-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:100%;margin:15px auto}.styles__button___1PoHi-camelCase{display:flex;flex-direction:row;align-items:center;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:#fff;color:#3a3a3a;font-weight:700;width:220px;height:50px;padding:0 15px;margin:10px;box-sizing:border-box;font-size:20px;position:relative;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;transition:.2s}.styles__button___1PoHi-camelCase:hover{transform:scale(.95)}.styles__buttonIcon___11KvZ-camelCase{font-size:24px;margin-right:7px}.styles__copiedNotification___2y4Z--camelCase{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:5px;font-family:Nunito,sans-serif;color:#fff;font-size:18px;padding:5px 10px}.styles__noStudentsText___2XNgE-camelCase{color:#3a3a3a;font-size:32px;font-weight:700;width:90%;margin:20px auto;text-align:center}.styles__studentsHeader___3RU3T-camelCase{color:#3a3a3a;font-size:30px;font-weight:700;width:100%;margin:10px auto}.styles__studentsContainer___1oDh1-camelCase{display:grid;justify-content:center;grid-template-columns:repeat(auto-fill,265px);grid-gap:20px;max-width:100%;margin:0 auto}.styles__studentInfo___1EX3a-camelCase{display:flex;flex-direction:row;align-items:center;background-color:#fff;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-width:260px;height:50px;padding:5px 10px;box-sizing:border-box;font-size:24px;position:relative;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__studentBlook___2nyGf-camelCase{height:40px;margin-right:10px}.styles__extra___3j4jP-camelCase{display:none;position:absolute;top:100%;left:0;width:100%;height:35px;justify-content:space-between;align-items:flex-end}.styles__extra___3j4jP-camelCase,.styles__extraRow___2oaCq-camelCase{flex-direction:row}.styles__extraRow___2oaCq-camelCase{display:flex;align-items:center;width:47.5%;height:30px;padding:0 10px;box-sizing:border-box;font-size:16px;color:#3a3a3a;background-color:#fff;box-shadow:0 0 4px 1.5px rgba(0,0,0,.2);border-radius:5px;margin:2px 0;outline:none;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;position:relative;transition:.2s}.styles__extraRow___2oaCq-camelCase:focus,.styles__extraRow___2oaCq-camelCase:hover{transform:scale(.95);color:#0bc2cf}.styles__extraRowRed___2Z9-l-camelCase:focus,.styles__extraRowRed___2Z9-l-camelCase:hover{color:#ce1313}.styles__extraRowIcon___157Zo-camelCase{margin-right:7px}.styles__studentInfo___1EX3a-camelCase:hover>.styles__extra___3j4jP-camelCase{display:flex}", ""]), e.locals = {
                fullContainer: "styles__fullContainer___qVeWI-camelCase",
                header: "styles__header___10sXq-camelCase",
                headerText: "styles__headerText___3iLda-camelCase",
                headerBar: "styles__headerBar___37IdV-camelCase",
                headerButtons: "styles__headerButtons___BkvE9-camelCase",
                button: "styles__button___1PoHi-camelCase",
                buttonIcon: "styles__buttonIcon___11KvZ-camelCase",
                copiedNotification: "styles__copiedNotification___2y4Z--camelCase",
                noStudentsText: "styles__noStudentsText___2XNgE-camelCase",
                studentsHeader: "styles__studentsHeader___3RU3T-camelCase",
                studentsContainer: "styles__studentsContainer___1oDh1-camelCase",
                studentInfo: "styles__studentInfo___1EX3a-camelCase",
                studentBlook: "styles__studentBlook___2nyGf-camelCase",
                extra: "styles__extra___3j4jP-camelCase",
                extraRow: "styles__extraRow___2oaCq-camelCase",
                extraRowRed: "styles__extraRowRed___2Z9-l-camelCase",
                extraRowIcon: "styles__extraRowIcon___157Zo-camelCase"
            }
        },
        o7zh: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__container___3CYK_-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__header___xrnFr-camelCase{font-size:40px;line-height:40px;margin:20px auto 10px;font-family:Titan One,sans-serif}.styles__subheader___fFYOC-camelCase{font-size:26px;margin:10px;font-weight:700}.styles__miniHeader___3giyw-camelCase,.styles__subheader___fFYOC-camelCase{font-family:Nunito,sans-serif}.styles__miniHeader___3giyw-camelCase{font-size:14px;margin:5px 30px}.styles__inputContainer___1Y8Pu-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1Y8Pu-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase[focus-within]>.styles__icon___1LE1v-camelCase{color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase:focus-within>.styles__icon___1LE1v-camelCase{color:#0bc2cf}.styles__inputFilled___3rfUA-camelCase{border-color:#3a3a3a}.styles__inputError___33z-v-camelCase{border-color:#ce1313}.styles__icon___1LE1v-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___3p2oj-camelCase{color:#3a3a3a}.styles__iconError___3Rt-G-camelCase{color:#ce1313}.styles__input___37wlC-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___37wlC-camelCase:-moz-placeholder,.styles__input___37wlC-camelCase:-ms-input-placeholder,.styles__input___37wlC-camelCase::-moz-placeholder,.styles__input___37wlC-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___1KupC-camelCase:-moz-placeholder,.styles__mInput___1KupC-camelCase:-ms-input-placeholder,.styles__mInput___1KupC-camelCase::-moz-placeholder,.styles__mInput___1KupC-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___33z-v-camelCase,.styles__inputError___33z-v-camelCase:-moz-placeholder,.styles__inputError___33z-v-camelCase:-ms-input-placeholder,.styles__inputError___33z-v-camelCase::-moz-placeholder,.styles__inputError___33z-v-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___37wlC-camelCase:focus,.styles__input___37wlC-camelCase:focus:-moz-placeholder,.styles__input___37wlC-camelCase:focus:-ms-input-placeholder,.styles__input___37wlC-camelCase:focus::-moz-placeholder,.styles__input___37wlC-camelCase:focus::-webkit-input-placeholder,.styles__mInput___1KupC-camelCase:focus,.styles__mInput___1KupC-camelCase:focus:-moz-placeholder,.styles__mInput___1KupC-camelCase:focus:-ms-input-placeholder,.styles__mInput___1KupC-camelCase:focus::-moz-placeholder,.styles__mInput___1KupC-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___3CYK_-camelCase{width:320px}.styles__inputContainer___1Y8Pu-camelCase{width:280px}.styles__input___37wlC-camelCase{width:210px}}.styles__button___SyFRq-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___SyFRq-camelCase:focus,.styles__button___SyFRq-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___k9wIF-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___3PfoI-camelCase,.styles__buttonError___3PfoI-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___3PfoI-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___1G46E-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___3csY5-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1mBGe-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}", ""]), e.locals = {
                container: "styles__container___3CYK_-camelCase",
                header: "styles__header___xrnFr-camelCase",
                subheader: "styles__subheader___fFYOC-camelCase",
                miniHeader: "styles__miniHeader___3giyw-camelCase",
                inputContainer: "styles__inputContainer___1Y8Pu-camelCase",
                icon: "styles__icon___1LE1v-camelCase",
                inputFilled: "styles__inputFilled___3rfUA-camelCase",
                inputError: "styles__inputError___33z-v-camelCase",
                iconFilled: "styles__iconFilled___3p2oj-camelCase",
                iconError: "styles__iconError___3Rt-G-camelCase",
                input: "styles__input___37wlC-camelCase",
                mInput: "styles__mInput___1KupC-camelCase",
                button: "styles__button___SyFRq-camelCase",
                buttonFilled: "styles__buttonFilled___k9wIF-camelCase",
                buttonError: "styles__buttonError___3PfoI-camelCase",
                errorContainer: "styles__errorContainer___1G46E-camelCase",
                errorIcon: "styles__errorIcon___3csY5-camelCase",
                errorText: "styles__errorText___1mBGe-camelCase"
            }
        },
        "oq/Q": function(t, e, r) {
            "use strict";
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                l = r.n(s),
                c = r("Ty5D"),
                u = r("55Ip"),
                f = r("H1WH"),
                d = r("TSYQ"),
                h = r.n(d),
                p = r("FKJl"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("9ddr"),
                g = r.n(y),
                b = r("VgLj"),
                v = r("XTAU"),
                w = r("ca/f"),
                x = r("0oXL"),
                E = r("E8Bj"),
                k = r("A92q"),
                C = r("qnYv");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t) {
                return function(t) {
                    if (Array.isArray(t)) return S(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return S(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
                return o
            }

            function N() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                N = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new C(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(O([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == j(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return S()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function C(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
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
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = O, C.prototype = {
                    constructor: C,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    k(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function B(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function I(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function L(t, e) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, o = M(t);
                    if (e) {
                        var n = M(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return F(t)
            }

            function F(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function M(t) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && L(t, e)
                }(l, t);
                var e, r, o, a, i, s = T(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = s.call(this, t)).state = {
                        ready: !1,
                        name: "",
                        color: "",
                        students: [],
                        isDeleting: !1,
                        isEditing: !1,
                        editName: "",
                        editColor: "",
                        editError: "",
                        loading: !1,
                        justCopied: !1,
                        kickUser: null
                    }, e.classId = "", e.here = !0, e.onDeleteConfirm = e.onDeleteConfirm.bind(F(e)), e.onEdit = e.onEdit.bind(F(e)), e.onKickUser = e.onKickUser.bind(F(e)), e.copyToClipboard = e.copyToClipboard.bind(F(e)), e
                }
                return e = l, (r = [{
                    key: "componentDidMount",
                    value: (a = N().mark((function t() {
                        var e = this;
                        return N().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.match.params.id) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.classId = this.props.match.params.id, t.next = 5, this.props.user.getData();
                                case 5:
                                    if (t.sent) {
                                        t.next = 10;
                                        break
                                    }
                                    return Object(p.b)("ClassPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                case 10:
                                    C.a.get("/api/classes", {
                                        params: {
                                            id: this.props.match.params.id
                                        }
                                    }).then((function(t) {
                                        if (e.here) {
                                            var r = t.data;
                                            console.log(r), r && r.name ? e.setState({
                                                ready: !0,
                                                name: r.name,
                                                color: r.color,
                                                students: r.students
                                            }) : e.setState({
                                                ready: !0
                                            })
                                        }
                                    })).catch((function(t) {
                                        e.setState({
                                            ready: !0
                                        }), Object(p.b)(t)
                                    }));
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, o) {
                            var n = a.apply(t, e);

                            function i(t) {
                                B(n, r, o, i, s, "next", t)
                            }

                            function s(t) {
                                B(n, r, o, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearTimeout(this.copyTimeout)
                    }
                }, {
                    key: "onDeleteConfirm",
                    value: function(t) {
                        var e = this;
                        this.state.loading || (t ? (this.setState({
                            loading: !0
                        }), C.a.delete("/api/classes", {
                            params: {
                                id: this.classId
                            }
                        }).then((function() {
                            e.here && e.props.history.push("/dashboard?p=Classes")
                        })).catch((function(t) {
                            Object(p.b)(t)
                        }))) : this.setState({
                            isDeleting: !1
                        }))
                    }
                }, {
                    key: "onEdit",
                    value: function(t) {
                        var e = this;
                        t && t.preventDefault(), this.state.loading || (this.state.editName ? (this.setState({
                            loading: !0
                        }), C.a.put("/api/classes/edit", {
                            id: this.classId,
                            name: this.state.editName,
                            color: this.state.editColor
                        }).then((function(t) {
                            e.here && e.setState({
                                name: t.data.name,
                                color: t.data.color,
                                isEditing: !1,
                                loading: !1
                            })
                        })).catch((function(t) {
                            e.here && (Object(p.b)(t), e.setState({
                                isEditing: !1,
                                loading: !1
                            }))
                        }))) : this.setState({
                            editError: "You need a class name."
                        }))
                    }
                }, {
                    key: "onKickUser",
                    value: function() {
                        var t = this;
                        this.state.loading || (this.setState({
                            loading: !0
                        }), C.a.put("/api/classes/remove", {
                            id: this.classId,
                            studentId: this.state.kickUser.id
                        }).then((function() {
                            if (t.here) {
                                var e = O(t.state.students),
                                    r = e.indexOf(t.state.kickUser); - 1 !== r && e.splice(r, 1), t.setState({
                                    loading: !1,
                                    kickUser: null,
                                    students: e
                                })
                            }
                        })).catch((function(e) {
                            Object(p.b)(e), t.setState({
                                loading: !1,
                                kickUser: null
                            })
                        })))
                    }
                }, {
                    key: "copyToClipboard",
                    value: function() {
                        var t = this,
                            e = document.createElement("textarea");
                        e.value = "".concat("https://dashboard.blooket.com", "/class/join/").concat(this.classId), e.setAttribute("readonly", ""), e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e);
                        var r = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                        e.select(), document.execCommand("copy"), document.body.removeChild(e), r && (document.getSelection().removeAllRanges(), document.getSelection().addRange(r)), clearTimeout(this.copyTimeout), this.setState({
                            justCopied: !0
                        }, (function() {
                            t.copyTimeout = setTimeout((function() {
                                t.setState({
                                    justCopied: !1
                                })
                            }), 1500)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.props.match.params.id ? this.state.ready && !this.state.name ? (Object(p.b)("ClassPage cannot be rendered without this.state.name"), n.a.createElement(c.a, {
                            to: "/404"
                        })) : n.a.createElement("div", {
                            className: f.isMobile ? _.a.mBody : _.a.body
                        }, n.a.createElement(v.a, {
                            title: "".concat(this.state.ready ? this.state.name : "Class", " | Blooket"),
                            desc: "Manage your class by adding students and tracking their progress or assigning live games and homework."
                        }), n.a.createElement(b.a, {
                            history: this.props.history,
                            page: "Dashboard"
                        }), n.a.createElement("div", {
                            className: _.a.regularBodyMax
                        }, this.state.ready ? n.a.createElement("div", {
                            className: g.a.fullContainer
                        }, n.a.createElement("div", {
                            className: g.a.header
                        }, n.a.createElement("div", {
                            className: g.a.headerText
                        }, this.state.name), n.a.createElement("div", {
                            className: g.a.headerBar,
                            style: {
                                backgroundColor: this.state.color
                            }
                        })), n.a.createElement("div", {
                            className: g.a.headerButtons
                        }, n.a.createElement("div", {
                            className: g.a.button,
                            style: {
                                color: "#fff",
                                backgroundColor: this.state.color
                            },
                            role: "button",
                            tabIndex: 0,
                            onClick: this.copyToClipboard
                        }, n.a.createElement("i", {
                            className: h()("fas fa-plus-square", g.a.buttonIcon)
                        }), "Invite Link", this.state.justCopied ? n.a.createElement("div", {
                            className: g.a.copiedNotification
                        }, "Copied!") : null), n.a.createElement("div", {
                            className: g.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.setState({
                                    isEditing: !0,
                                    editName: t.state.name,
                                    editColor: t.state.color,
                                    editError: ""
                                })
                            }
                        }, n.a.createElement("i", {
                            className: h()("fas fa-pencil-alt", g.a.buttonIcon)
                        }), "Edit Class Info"), n.a.createElement("div", {
                            className: g.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.setState({
                                    isDeleting: !0
                                })
                            }
                        }, n.a.createElement("i", {
                            className: h()("fas fa-trash-alt", g.a.buttonIcon)
                        }), "Delete Class"), n.a.createElement(u.b, {
                            className: g.a.button,
                            to: "/dashboard?p=Classes"
                        }, n.a.createElement("i", {
                            className: h()("fas fa-reply", g.a.buttonIcon)
                        }), "Back to Classes")), this.state.students.length > 0 ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: g.a.studentsHeader
                        }, "Students"), n.a.createElement("div", {
                            className: g.a.studentsContainer
                        }, this.state.students.map((function(e) {
                            return n.a.createElement("div", {
                                className: g.a.studentInfo,
                                key: e.name
                            }, n.a.createElement(x.a, {
                                name: e.blook,
                                className: g.a.studentBlook
                            }), e.name, n.a.createElement("div", {
                                className: g.a.extra
                            }, n.a.createElement("a", {
                                className: g.a.extraRow,
                                href: "".concat("https://dashboard.blooket.com", "/stats?id=").concat(e.id),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, n.a.createElement("i", {
                                className: h()(g.a.extraRowIcon, "fas fa-eye")
                            }), "View"), n.a.createElement("div", {
                                className: h()(g.a.extraRow, g.a.extraRowRed),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return t.setState({
                                        kickUser: e
                                    })
                                }
                            }, n.a.createElement("i", {
                                className: h()(g.a.extraRowIcon, "fas fa-user-slash")
                            }), "Kick")))
                        })))) : n.a.createElement("div", {
                            className: g.a.noStudentsText
                        }, "No Students Yet")) : null), this.state.isDeleting ? n.a.createElement(w.a, {
                            text: "Do you really want to delete this class?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return t.onDeleteConfirm(!0)
                                },
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return t.onDeleteConfirm(!1)
                                },
                                color: "blue"
                            }
                        }) : this.state.isEditing ? n.a.createElement(w.a, {
                            text: "Edit the class name and/or color:",
                            loading: this.state.loading,
                            stringValue: this.state.editName,
                            stringChange: function(e) {
                                return t.setState({
                                    editName: e.target.value.slice(0, k.a),
                                    editError: ""
                                })
                            },
                            colorChange: function(e) {
                                return t.setState({
                                    editColor: e
                                })
                            },
                            colorValue: this.state.editColor,
                            onSubmit: this.onEdit,
                            error: this.state.editError,
                            buttonOne: {
                                text: "Edit",
                                click: this.onEdit,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return t.setState({
                                        isEditing: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.kickUser ? n.a.createElement(w.a, {
                            text: "Kick ".concat(this.state.kickUser.name, " from the class?"),
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return t.onKickUser()
                                },
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return t.setState({
                                        kickUser: null
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : (Object(p.b)("ClassPage cannot be rendered without id"), void(window.location.href = "".concat("https://id.blooket.com", "/login")))
                    }
                }]) && I(e.prototype, r), o && I(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            A.propTypes = {
                match: l.a.object,
                history: l.a.object.isRequired,
                user: l.a.object
            };
            e.a = Object(E.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(A)))
        },
        rfo6: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__header___1mCVl-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__container___2A6Gp-camelCase{display:grid;align-items:flex-start;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:10px 5%}.styles__classInside___wK79a-camelCase{width:255px;min-height:190px;display:flex;flex-direction:column;justify-content:space-between;color:#fff}.styles__name___2jSjK-camelCase{font-size:34px;line-height:36px;font-weight:700;margin:10px 5% 30px;word-wrap:break-word}.styles__studentsText___1sgEM-camelCase{font-size:20px;margin:0 5%;text-align:right}.styles__addButtonInside___2jU2--camelCase{width:200px;height:30px;display:flex;flex-direction:row;align-items:center;color:#3a3a3a}.styles__addIcon___Wovoi-camelCase{font-size:22px;padding:0 5px;margin-right:3px}.styles__addText___3OeFB-camelCase{font-size:24px;font-weight:700}.styles__bigContainer___2yBVm-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:95%;margin:50px auto}.styles__bigText___2TwdE-camelCase{font-family:Nunito,sans-serif;font-size:40px;line-height:44px;font-weight:700;margin:50px 5% 30px;width:90%;text-align:center;color:#3a3a3a}.styles__upgradeButtonInside___2X4bP-camelCase{width:180px;height:50px;color:#fff;font-size:30px;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center}", ""]), e.locals = {
                header: "styles__header___1mCVl-camelCase",
                container: "styles__container___2A6Gp-camelCase",
                classInside: "styles__classInside___wK79a-camelCase",
                name: "styles__name___2jSjK-camelCase",
                studentsText: "styles__studentsText___1sgEM-camelCase",
                addButtonInside: "styles__addButtonInside___2jU2--camelCase",
                addIcon: "styles__addIcon___Wovoi-camelCase",
                addText: "styles__addText___3OeFB-camelCase",
                bigContainer: "styles__bigContainer___2yBVm-camelCase",
                bigText: "styles__bigText___2TwdE-camelCase",
                upgradeButtonInside: "styles__upgradeButtonInside___2X4bP-camelCase"
            }
        },
        "t/SN": function(t, e, r) {
            var o = r("rfo6");
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, n);
            o.locals && (t.exports = o.locals)
        },
        "xP+p": function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return q
            })), r.d(e, "c", (function() {
                return X
            }));
            var o = r("q1tI"),
                n = r.n(o),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                l = r.n(s),
                c = r("Ty5D"),
                u = r("H1WH"),
                f = r("4HzQ"),
                d = r("TSYQ"),
                h = r.n(d),
                p = r("FKJl"),
                m = r("E8Bj"),
                _ = r("byOs"),
                y = r.n(_),
                g = r("Xst1"),
                b = r.n(g),
                v = r("XTAU"),
                w = r("ca/f"),
                x = r("0oXL"),
                E = r("lmLo"),
                k = r("MDrD"),
                C = r("4otK"),
                j = r("sfIM"),
                O = r("1u4q"),
                S = r("pMTK"),
                N = r("74sb"),
                B = r("qnYv"),
                I = r("i4/Q"),
                L = r("LHn/");

            function T(t) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function P(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function F(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var o, n, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(i = (o = r.next()).done) && (a.push(o.value), !e || a.length !== e); i = !0);
                    } catch (t) {
                        s = !0, n = t
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw n
                        }
                    }
                    return a
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return M(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
                return o
            }

            function A() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                A = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function l(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var a = e && e.prototype instanceof d ? e : d,
                        i = Object.create(a.prototype),
                        s = new C(n || []);
                    return o(i, "_invoke", {
                        value: w(t, r, s)
                    }), i
                }

                function u(t, e, r) {
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
                var f = {};

                function d() {}

                function h() {}

                function p() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    y = _ && _(_(j([])));
                y && y !== e && r.call(y, a) && (m = y);
                var g = p.prototype = d.prototype = Object.create(m);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function v(t, e) {
                    var n;
                    o(this, "_invoke", {
                        value: function(o, a) {
                            function i() {
                                return new e((function(n, i) {
                                    ! function o(n, a, i, s) {
                                        var l = u(t[n], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == T(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                o("next", t, i, s)
                                            }), (function(t) {
                                                o("throw", t, i, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, i(c)
                                            }), (function(t) {
                                                return o("throw", t, i, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    })
                }

                function w(t, e, r) {
                    var o = "suspendedStart";
                    return function(n, a) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === n) throw a;
                            return O()
                        }
                        for (r.method = n, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var s = x(i, r);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === o) throw o = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = "executing";
                            var l = u(t, e, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
                    var n = o.arg;
                    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function C(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                n = function e() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
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
                return h.prototype = p, o(g, "constructor", {
                    value: p,
                    configurable: !0
                }), o(p, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(p, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, l(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(v.prototype), l(v.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = v, t.async = function(e, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new v(c(e, r, o, n), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, b(g), l(g, s, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var o in e) r.push(o);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var o = r.pop();
                                if (o in e) return t.value = o, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = j, C.prototype = {
                    constructor: C,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = t, e.next = r, o && (e.method = "next", e.arg = void 0), !!o
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n],
                                i = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var n = this.tryEntries[o];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    k(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function R(t, e, r, o, n, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(o, n)
            }

            function z(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function U(t, e) {
                return (U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function D(t) {
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
                    var r, o = Y(t);
                    if (e) {
                        var n = Y(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return H(this, r)
                }
            }

            function H(t, e) {
                if (e && ("object" === T(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return G(t)
            }

            function G(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Y(t) {
                return (Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var q = {
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
                K = {
                    Spooky: "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Spooky.svg",
                    Safari: "https://media.blooket.com/image/upload/v1658611113/Media/blooksUI/Array_Tile_Safari_2.svg",
                    "Forest Animal": "https://media.blooket.com/image/upload/v1657937256/Media/blooksUI/Array_Tile_Forest.svg",
                    Space: "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Space.svg",
                    "Arctic Animal": "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Arctic.svg",
                    Breakfast: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Breakfast.svg",
                    Dino: "https://media.blooket.com/image/upload/v1657937255/Media/blooksUI/Array_Tile_Dino.svg",
                    Aquatic: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Aquatic.svg",
                    Blizzard: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Blizzard.svg",
                    Medieval: "https://media.blooket.com/image/upload/v1658612399/Media/blooksUI/Array_Tile_Medieval.svg",
                    Pet: "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Pets.svg",
                    Wonderland: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Wonderland.svg",
                    Bot: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Bots.svg",
                    "Farm Animal": "https://media.blooket.com/image/upload/v1657937256/Media/blooksUI/Array_Tile_Farm.svg",
                    "Tropical Animal": "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Tropical.svg",
                    "Ice Monster": "https://media.blooket.com/image/upload/v1663063885/Media/blooksUI/Array_Tile_Ice_Monster.svg"
                },
                X = {
                    Spooky: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Spooky.svg",
                    Safari: "https://media.blooket.com/image/upload/v1658611113/Media/blooksUI/Nav_Icon_Safari_2.svg",
                    "Forest Animal": "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Forest.svg",
                    Space: "https://media.blooket.com/image/upload/v1657323226/Media/blooksUI/Nav_Icon_Space.svg",
                    "Arctic Animal": "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Arctic.svg",
                    Breakfast: "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Breakfast.svg",
                    Dino: "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Dino.svg",
                    Aquatic: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Aquatic.svg",
                    Blizzard: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Blizzard.svg",
                    Medieval: "https://media.blooket.com/image/upload/v1657323225/Media/blooksUI/Nav_Icon_Medieval.svg",
                    Pet: "https://media.blooket.com/image/upload/v1657323226/Media/blooksUI/Nav_Icon_Pets.svg",
                    Wonderland: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Wonderland.svg",
                    Bot: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Bots.svg",
                    "Farm Animal": "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Farm.svg",
                    "Tropical Animal": "https://media.blooket.com/image/upload/v1658099364/Media/blooksUI/Nav_Icon_Tropical.svg",
                    "Ice Monster": "https://media.blooket.com/image/upload/v1663063881/Media/blooksUI/Nav_Icon_Ice_Monster.svg"
                },
                Q = {
                    Spooky: {
                        visible: !1,
                        free: !1
                    },
                    Safari: {
                        visible: !0,
                        free: !1
                    },
                    "Forest Animal": {
                        visible: !0,
                        free: !0
                    },
                    Space: {
                        visible: !0,
                        free: !1
                    },
                    "Arctic Animal": {
                        visible: !0,
                        free: !0
                    },
                    Breakfast: {
                        visible: !0,
                        free: !1
                    },
                    Dino: {
                        visible: !0,
                        free: !1
                    },
                    Aquatic: {
                        visible: !0,
                        free: !1
                    },
                    Blizzard: {
                        visible: !1,
                        free: !1
                    },
                    Medieval: {
                        visible: !0,
                        free: !1
                    },
                    Pet: {
                        visible: !0,
                        free: !0
                    },
                    Wonderland: {
                        visible: !0,
                        free: !1
                    },
                    Bot: {
                        visible: !0,
                        free: !1
                    },
                    "Farm Animal": {
                        visible: !0,
                        free: !0
                    },
                    "Tropical Animal": {
                        visible: !0,
                        free: !0
                    },
                    "Ice Monster": {
                        visible: !0,
                        free: !1
                    },
                    Color: {
                        visible: !1
                    }
                },
                Z = function(t) {
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
                        }), e && U(t, e)
                    }(l, t);
                    var e, r, o, a, i, s = D(l);

                    function l(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (e = s.call(this, t)).state = {
                            user: null,
                            blookData: {},
                            allSets: [],
                            ready: !1,
                            blook: "",
                            selling: !1,
                            loadingSell: !1,
                            numToSell: 0,
                            showFree: !1,
                            showPacks: !0,
                            showMobileBlooks: !1
                        }, e.here = !0, e.setBlook = e.setBlook.bind(G(e)), e.setNewBlooks = e.setNewBlooks.bind(G(e)), e.sellBlook = e.sellBlook.bind(G(e)), e
                    }
                    return e = l, (r = [{
                        key: "componentDidMount",
                        value: (a = A().mark((function t() {
                            var e, r = this;
                            return A().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e = t.sent) {
                                            t.next = 7;
                                            break
                                        }
                                        return Object(p.b)("BlooksPage cannot mount without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), t.abrupt("return");
                                    case 7:
                                        this.setState({
                                            user: e
                                        }), B.a.get("/api/users/blooks").then((function(t) {
                                            r.setNewBlooks(t.data, r.state.showFree)
                                        })).catch((function(t) {
                                            Object(p.b)(t)
                                        }));
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })), i = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, o) {
                                var n = a.apply(t, e);

                                function i(t) {
                                    R(n, r, o, i, s, "next", t)
                                }

                                function s(t) {
                                    R(n, r, o, i, s, "throw", t)
                                }
                                i(void 0)
                            }))
                        }, function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1, clearTimeout(this.timeout)
                        }
                    }, {
                        key: "setBlook",
                        value: function(t) {
                            (this.state.blookData[t] || j.a.includes(t)) && this.setState({
                                blook: t,
                                showMobileBlooks: !1,
                                showFree: !this.state.showMobileBlooks && this.state.showFree,
                                showPacks: !this.state.showMobileBlooks && this.state.showPacks
                            })
                        }
                    }, {
                        key: "setNewBlooks",
                        value: function(t, e) {
                            var r = [];
                            if (Object.entries(k.a).forEach((function(o) {
                                    var n = F(o, 2),
                                        a = n[0],
                                        i = n[1];
                                    r.includes(i.set) || !t[a] && !Q[i.set].visible || Q[i.set].free && !e || r.push(i.set)
                                })), !this.state.blook || !t[this.state.blook]) {
                                var o = Object.keys(t);
                                0 === o.length ? this.setState({
                                    blook: Object(N.k)(j.a)
                                }) : this.setState({
                                    blook: Object(N.k)(o)
                                })
                            }
                            this.setState({
                                ready: !0,
                                selling: !1,
                                loadingSell: !1,
                                blookData: t,
                                allSets: r,
                                showFree: e
                            })
                        }
                    }, {
                        key: "sellBlook",
                        value: function(t, e) {
                            var r = this;
                            if (t.preventDefault(), !e || !this.state.numToSell) return this.setState({
                                selling: !1
                            });
                            this.setState({
                                loadingSell: !0
                            }), B.a.put("/api/users/sellblook", {
                                name: this.state.user.name,
                                blook: this.state.blook,
                                numSold: this.state.numToSell
                            }).then((function(t) {
                                r.here && r.setNewBlooks(t.data.unlocks, r.state.showFree)
                            })).catch((function(t) {
                                Object(p.b)(t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            return n.a.createElement("div", {
                                className: u.isMobile ? b.a.mBody : b.a.body,
                                id: "body"
                            }, n.a.createElement(v.a, {
                                title: "My Blooks | Blooket",
                                desc: "Blooks represent players and compete in races during games. Use this page to view, sell, and manage your Blooks."
                            }), n.a.createElement(I.a, {
                                user: this.state.user,
                                page: "Blooks"
                            }), this.state.ready ? n.a.createElement("div", {
                                className: b.a.profileBody
                            }, n.a.createElement("div", {
                                className: y.a.topButtonRow
                            }, n.a.createElement("div", {
                                className: y.a.settingButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return t.setNewBlooks(t.state.blookData, !t.state.showFree)
                                }
                            }, this.state.showFree ? "Hide Free Blooks" : "Show Free Blooks"), n.a.createElement("div", {
                                className: y.a.settingButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return t.setState({
                                        showPacks: !t.state.showPacks
                                    })
                                }
                            }, this.state.showPacks ? "Hide Packs" : "Show Packs")), n.a.createElement("div", {
                                className: h()(y.a.left, P({}, y.a.mShowLeft, this.state.showMobileBlooks))
                            }, this.state.showPacks ? n.a.createElement("div", {
                                className: y.a.blooksHolder
                            }, this.state.allSets.map((function(e) {
                                return n.a.createElement("div", {
                                    className: y.a.setHolder,
                                    key: e
                                }, n.a.createElement("div", {
                                    className: y.a.setTop
                                }, n.a.createElement("div", {
                                    className: y.a.setTopBackground,
                                    style: {
                                        backgroundImage: "url(".concat(K[e], ")")
                                    }
                                }), n.a.createElement("div", {
                                    className: y.a.setText
                                }, "".concat(e, " Pack")), n.a.createElement("div", {
                                    className: y.a.setDivider
                                })), n.a.createElement("div", {
                                    className: y.a.setBlooks
                                }, Object.entries(k.a).filter((function(r) {
                                    var o = F(r, 2),
                                        n = o[0];
                                    return o[1].set === e && (t.state.blookData[n] || !C.a.includes(n))
                                })).map((function(e) {
                                    var r = F(e, 1)[0];
                                    return n.a.createElement("div", {
                                        className: y.a.blookContainer,
                                        key: r,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return t.setBlook(r)
                                        }
                                    }, n.a.createElement(x.a, {
                                        name: r,
                                        className: h()(y.a.blook, P({}, y.a.lockedBlook, !j.a.includes(r) && !t.state.blookData[r]))
                                    }), j.a.includes(r) || t.state.blookData[r] ? j.a.includes(r) ? null : n.a.createElement("div", {
                                        className: y.a.blookText,
                                        style: {
                                            backgroundColor: N.n[Object(S.a)(r)]
                                        }
                                    }, t.state.blookData[r] ? Object(N.j)(t.state.blookData[r]) : 0) : n.a.createElement("i", {
                                        className: h()("fas fa-lock", y.a.blookLock)
                                    }))
                                }))))
                            }))) : n.a.createElement("div", {
                                className: y.a.soloBlooksHolder
                            }, Object.entries(k.a).filter((function(e) {
                                var r = F(e, 2),
                                    o = r[0],
                                    n = r[1];
                                return !(Q[n.set].free && !t.state.showFree) && (t.state.blookData[o] || !C.a.includes(o))
                            })).map((function(e) {
                                var r = F(e, 1)[0];
                                return n.a.createElement("div", {
                                    className: y.a.blookContainer,
                                    key: r,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return t.setBlook(r)
                                    }
                                }, n.a.createElement(x.a, {
                                    name: r,
                                    className: h()(y.a.blook, P({}, y.a.lockedBlook, !j.a.includes(r) && !t.state.blookData[r]))
                                }), j.a.includes(r) || t.state.blookData[r] ? j.a.includes(r) ? null : n.a.createElement("div", {
                                    className: y.a.blookText,
                                    style: {
                                        backgroundColor: N.n[Object(S.a)(r)]
                                    }
                                }, t.state.blookData[r] ? Object(N.j)(t.state.blookData[r]) : 0) : n.a.createElement("i", {
                                    className: h()("fas fa-lock", y.a.blookLock)
                                }))
                            })))), n.a.createElement(E.a, {
                                outsideClass: y.a.mBlooksButton,
                                onClick: function() {
                                    return t.setState({
                                        showMobileBlooks: !0,
                                        showFree: !0,
                                        showPacks: !1
                                    })
                                },
                                color: "#9a49aa"
                            }, n.a.createElement("div", {
                                className: y.a.mBlooksButtonInside
                            }, "Change Blook")), n.a.createElement("div", {
                                className: y.a.right
                            }, n.a.createElement("img", {
                                src: q[k.a[this.state.blook].set] || "https://media.blooket.com/image/upload/v1657825741/Media/blooksUI/Highlighted_Background_Generic.svg",
                                alt: "Background",
                                className: y.a.rightBackground,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: y.a.rightTopText
                            }, n.a.createElement(f.Textfit, {
                                className: y.a.highlightedName,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: 40
                            }, this.state.blook), n.a.createElement("div", {
                                className: y.a.highlightedRarity,
                                style: {
                                    color: N.n[Object(S.a)(this.state.blook)]
                                }
                            }, Object(S.a)(this.state.blook))), n.a.createElement(x.a, {
                                name: this.state.blook,
                                className: y.a.rightBlook
                            }), n.a.createElement("div", {
                                className: y.a.highlightedBottom
                            }, j.a.includes(this.state.blook) ? "Free Blook" : this.state.blookData[this.state.blook] ? "".concat(Object(N.j)(this.state.blookData[this.state.blook]), " Owned") : "Locked"), n.a.createElement("div", {
                                className: y.a.rightBottom
                            })), n.a.createElement("div", {
                                className: y.a.rightButtonRow
                            }, n.a.createElement(E.a, {
                                outsideClass: y.a.rightButton,
                                onClick: function() {
                                    return t.setState({
                                        selling: !0,
                                        numToSell: 1
                                    })
                                },
                                color: "#1f77b4"
                            }, n.a.createElement("div", {
                                className: y.a.rightButtonInside
                            }, n.a.createElement("img", {
                                src: L.a.basic.token,
                                alt: "Token",
                                className: y.a.rightButtonImg,
                                draggable: !1
                            }), "Sell")))) : null, this.state.selling ? n.a.createElement(w.a, {
                                text: "Sell ".concat(this.state.blook, " Blooks for ").concat(Object(O.a)(this.state.blook), " tokens each:"),
                                loading: this.state.loadingSell,
                                numValue: this.state.numToSell,
                                numChange: function(e) {
                                    return t.setState({
                                        numToSell: Math.max(Math.min(e.target.value, t.state.blookData[t.state.blook]), 0)
                                    })
                                },
                                numTotal: this.state.blookData[this.state.blook],
                                buttonOne: {
                                    text: "Yes",
                                    click: function(e) {
                                        return t.sellBlook(e, !0)
                                    },
                                    color: "red"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function(e) {
                                        return t.sellBlook(e, !1)
                                    },
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && z(e.prototype, r), o && z(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), l
                }(n.a.Component);
            Z.propTypes = {
                user: l.a.object
            };
            e.a = Object(m.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(Z)))
        }
    }
]);