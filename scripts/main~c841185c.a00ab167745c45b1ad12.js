(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        "/vfi": function(e, t, r) {
            var o = r("8b/J");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        "57Jf": function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                l = r.n(c),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                p = r("FKJl"),
                h = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("/vfi"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("VWYR"),
                C = r("74sb"),
                E = r("qnYv");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function j(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function O() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                O = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return j()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(E([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == k(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
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

            function S(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function N(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
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
                    var r, o = P(e);
                    if (t) {
                        var a = P(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return B(this, r)
                }
            }

            function B(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return T(e)
            }

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var R = function(e) {
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
                var t, r, o, n, i, s = L(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        name: "",
                        nameError: "",
                        loading: !1
                    }, t.loading = !1, t.name = "", t.onSubmit = t.onSubmit.bind(T(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (n = O().mark((function e() {
                        var t;
                        return O().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("NamePage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.name = t.name;
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, o) {
                            var a = n.apply(e, t);

                            function i(e) {
                                S(a, r, o, i, s, "next", e)
                            }

                            function s(e) {
                                S(a, r, o, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(e) {
                        var t = this;
                        if (e.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = Object(C.u)(this.state.name);
                            this.setState({
                                nameError: r
                            }, (function() {
                                t.state.nameError ? (t.loading = !1, t.setState({
                                    loading: !1
                                })) : E.a.put("/api/users/change/name", {
                                    name: t.name,
                                    newName: t.state.name
                                }).then((function(e) {
                                    !0 === e.data.success ? Object(x.b)() : (t.loading = !1, t.setState(j({
                                        loading: !1
                                    }, "".concat(e.data.errType, "Error"), e.data.msg)))
                                })).catch((function(e) {
                                    Object(p.b)(e)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return a.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, a.a.createElement(v.a, {
                            title: "Change Name | Blooket",
                            desc: "Change the name for your Blooket account."
                        }), a.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), a.a.createElement("div", {
                            className: _.a.slantBackground
                        }), a.a.createElement("div", {
                            className: _.a.regularBody
                        }, a.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, a.a.createElement("div", {
                            className: g.a.containerHeader
                        }, "Change Name"), a.a.createElement("div", null, a.a.createElement("div", {
                            className: f()(g.a.inputContainer, j({}, g.a.inputFilled, this.state.name), j({}, g.a.inputError, this.state.nameError))
                        }, a.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-user", j({}, g.a.iconFilled, this.state.name), j({}, g.a.iconError, this.state.nameError))
                        }), a.a.createElement("input", {
                            className: f()(g.a.input, j({}, g.a.inputError, this.state.nameError)),
                            placeholder: "New Name",
                            onChange: function(t) {
                                return e.setState({
                                    name: t.target.value.trim().slice(0, 15),
                                    nameError: ""
                                })
                            },
                            value: this.state.name,
                            type: "text",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), this.state.loading ? a.a.createElement(w.a, null) : a.a.createElement("input", {
                            type: "submit",
                            value: "Change Name",
                            className: f()(g.a.button, j({}, g.a.buttonFilled, this.state.name), j({}, g.a.buttonError, this.state.nameError)),
                            tabIndex: 0
                        })), this.state.nameError ? a.a.createElement("div", {
                            className: g.a.errorContainer
                        }, a.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), a.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.nameError)) : null)))
                    }
                }]) && N(t.prototype, r), o && N(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            R.propTypes = {
                user: l.a.object
            };
            t.a = Object(h.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(R)))
        },
        "8b/J": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__container___d9MYU-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;border-radius:7px;text-align:center;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__containerHeader___2740i-camelCase{text-align:center;font-size:40px;line-height:40px;margin:20px;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__inputContainer___1lpQB-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1lpQB-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase[focus-within]>.styles__icon___2ZH9L-camelCase{color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase:focus-within>.styles__icon___2ZH9L-camelCase{color:#0bc2cf}.styles__inputFilled___2pDFI-camelCase{border-color:#3a3a3a}.styles__inputError___15dDm-camelCase{border-color:#ce1313}.styles__icon___2ZH9L-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___3JEbe-camelCase{color:#3a3a3a}.styles__iconError___1v0UD-camelCase{color:#ce1313}.styles__input___1x6Zg-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___1x6Zg-camelCase:-moz-placeholder,.styles__input___1x6Zg-camelCase:-ms-input-placeholder,.styles__input___1x6Zg-camelCase::-moz-placeholder,.styles__input___1x6Zg-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___sGUIc-camelCase:-moz-placeholder,.styles__mInput___sGUIc-camelCase:-ms-input-placeholder,.styles__mInput___sGUIc-camelCase::-moz-placeholder,.styles__mInput___sGUIc-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___15dDm-camelCase,.styles__inputError___15dDm-camelCase:-moz-placeholder,.styles__inputError___15dDm-camelCase:-ms-input-placeholder,.styles__inputError___15dDm-camelCase::-moz-placeholder,.styles__inputError___15dDm-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___1x6Zg-camelCase:focus,.styles__input___1x6Zg-camelCase:focus:-moz-placeholder,.styles__input___1x6Zg-camelCase:focus:-ms-input-placeholder,.styles__input___1x6Zg-camelCase:focus::-moz-placeholder,.styles__input___1x6Zg-camelCase:focus::-webkit-input-placeholder,.styles__mInput___sGUIc-camelCase:focus,.styles__mInput___sGUIc-camelCase:focus:-moz-placeholder,.styles__mInput___sGUIc-camelCase:focus:-ms-input-placeholder,.styles__mInput___sGUIc-camelCase:focus::-moz-placeholder,.styles__mInput___sGUIc-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___d9MYU-camelCase{width:320px}.styles__inputContainer___1lpQB-camelCase{width:280px}.styles__input___1x6Zg-camelCase{width:210px}}.styles__button___2e3MR-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___2e3MR-camelCase:focus,.styles__button___2e3MR-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___3Aa5b-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___xwiCq-camelCase,.styles__buttonError___xwiCq-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___xwiCq-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___3L947-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___27g6U-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1BA55-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__google___3QHN--camelCase{width:160px;margin:10px auto 30px}", ""]), t.locals = {
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
        "9ddr": function(e, t, r) {
            var o = r("o1xO");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        "C/JS": function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                p = r("FKJl"),
                h = r("E8Bj"),
                m = r("XTAU"),
                _ = r("ca/f"),
                y = r("t/SN"),
                g = r.n(y),
                b = r("Xst1"),
                v = r.n(b),
                w = r("qnYv"),
                x = r("i4/Q"),
                C = r("lmLo");

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
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return O()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(j([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == E(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function j(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = j, C.prototype = {
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: j(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function j(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function O(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function S(e, t) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, o = B(e);
                    if (t) {
                        var a = B(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(e, t) {
                if (t && ("object" === E(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return L(e)
            }

            function L(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function B(e) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                var t, r, o, n, i, s = N(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        user: null,
                        classes: [],
                        isPlus: !1,
                        ready: !1,
                        isCreating: !1,
                        loading: !1,
                        className: "",
                        classColor: "#1f77b4",
                        classError: ""
                    }, t.here = !0, t.createClass = t.createClass.bind(L(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (n = k().mark((function e() {
                        var t, r, o = this;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("ClassesPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    return this.setState({
                                        user: t
                                    }), e.next = 10, new Promise((function(e) {
                                        w.a.put("/api/users/plan").then((function(t) {
                                            o.here && e("Starter" !== t.data.plan)
                                        })).catch((function() {
                                            e(!1)
                                        }))
                                    }));
                                case 10:
                                    (r = e.sent) ? w.a.get("/api/classes/user").then((function(e) {
                                        o.here && e && o.setState({
                                            classes: e.data,
                                            isPlus: r,
                                            ready: !0
                                        })
                                    })).catch((function(e) {
                                        Object(p.b)(e)
                                    })): this.setState({
                                        ready: !0,
                                        isPlus: r
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, o) {
                            var a = n.apply(e, t);

                            function i(e) {
                                j(a, r, o, i, s, "next", e)
                            }

                            function s(e) {
                                j(a, r, o, i, s, "throw", e)
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
                    value: function(e) {
                        var t = this;
                        if (e && e.preventDefault(), !this.loading) {
                            if (this.loading = !0, !this.state.className) return this.loading = !1, void this.setState({
                                classError: "You need a class name."
                            });
                            this.setState({
                                loading: !0
                            }), w.a.post("/api/classes", {
                                name: this.state.className,
                                color: this.state.classColor
                            }).then((function(e) {
                                t.here && t.props.history.push("/class/".concat(e.data))
                            })).catch((function(e) {
                                t.here && (Object(p.b)(e), t.loading = !1, t.setState({
                                    isCreating: !1,
                                    loading: !1
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return a.a.createElement("div", {
                            className: d.isMobile ? v.a.mBody : v.a.body
                        }, a.a.createElement(m.a, {
                            title: "Classes | Blooket",
                            desc: "Create and manage your classes!"
                        }), a.a.createElement(x.a, {
                            user: this.state.user,
                            page: "Classes"
                        }), a.a.createElement("div", {
                            className: v.a.profileBody
                        }, a.a.createElement("div", {
                            className: g.a.header
                        }, "Classes"), this.state.ready ? this.state.isPlus ? 0 === this.state.classes.length ? a.a.createElement("div", {
                            className: g.a.bigContainer
                        }, a.a.createElement("div", {
                            className: g.a.bigText
                        }, "No Classes Yet"), a.a.createElement("div", {
                            className: g.a.addButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isCreating: !0
                                })
                            }
                        }, a.a.createElement("i", {
                            className: f()("fas fa-plus-circle", g.a.addIcon)
                        }), a.a.createElement("div", {
                            className: g.a.addText
                        }, "New Class"))) : a.a.createElement("div", {
                            className: g.a.container
                        }, this.state.classes.map((function(t) {
                            return a.a.createElement(C.a, {
                                key: t._id,
                                outsideClass: g.a.class,
                                color: t.color,
                                onClick: function() {
                                    return e.props.history.push("/class/".concat(t._id))
                                }
                            }, a.a.createElement("div", {
                                className: g.a.classInside
                            }, a.a.createElement("div", {
                                className: g.a.name
                            }, t.name), a.a.createElement("div", {
                                className: g.a.studentsText
                            }, "".concat(t.students.length, " Student").concat(1 === t.students.length ? "" : "s"))))
                        })), a.a.createElement(C.a, {
                            outsideClass: g.a.addButton,
                            color: "#fff",
                            onClick: function() {
                                return e.setState({
                                    isCreating: !0
                                })
                            }
                        }, a.a.createElement("div", {
                            className: g.a.addButtonInside
                        }, a.a.createElement("i", {
                            className: f()("fas fa-plus-circle", g.a.addIcon)
                        }), a.a.createElement("div", {
                            className: g.a.addText
                        }, "New Class")))) : a.a.createElement("div", {
                            className: g.a.bigContainer
                        }, a.a.createElement("div", {
                            className: g.a.bigText
                        }, "Blooket Plus Required"), a.a.createElement(C.a, {
                            outsideClass: g.a.upgradeButton,
                            color: "#ff7b24",
                            onClick: function() {
                                return e.props.history.push("/upgrade")
                            }
                        }, a.a.createElement("div", {
                            className: g.a.upgradeButtonInside
                        }, "Upgrade"))) : null, this.state.isCreating ? a.a.createElement(_.a, {
                            text: "Enter a class name and choose a color:",
                            loading: this.state.loading,
                            stringValue: this.state.className,
                            stringChange: function(t) {
                                return e.setState({
                                    className: t.target.value.slice(0, 60),
                                    classError: ""
                                })
                            },
                            colorChange: function(t) {
                                return e.setState({
                                    classColor: t
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
                                    return e.setState({
                                        isCreating: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : null))
                    }
                }]) && O(t.prototype, r), o && O(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            T.propTypes = {
                history: c.a.object,
                user: c.a.object
            };
            t.a = Object(h.c)(Object(l.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(T)))
        },
        Eb3v: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__header___2zcdQ-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5%;color:#3a3a3a}.styles__wideContainer___Ulh4C-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:90%;margin:5px auto}.styles__dropHolder___-ooT2-camelCase{width:34%;min-height:280px;flex:1;padding:15px 15px 22px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px}.styles__dropContainer___368Bu-camelCase{height:100%;width:100%;border:2px dashed #666;box-sizing:border-box;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-content:center}.styles__activeDropContainer___3MiKb-camelCase{background-color:rgba(11,194,207,.3)}.styles__dropHeader___PH8wO-camelCase{font-size:32px;font-weight:700;margin:5px auto}.styles__dropHeader___PH8wO-camelCase,.styles__dropText___2pIPc-camelCase{font-family:Nunito,sans-serif;text-align:center;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__dropText___2pIPc-camelCase{font-size:20px;margin:10px auto 15px;padding:0 20px}.styles__uploadButtonContainer___1VVhA-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:0 auto}.styles__uploadButton___2Ukj--camelCase{margin:10px 15px;box-shadow:0 0 4px rgba(0,0,0,.15)}.styles__uploadButtonInside___3akbb-camelCase{width:110px;height:40px;display:flex;flex-direction:row;align-items:center;color:#3a3a3a}.styles__uploadIcon___2lU9o-camelCase{font-size:24px;padding-left:10px;width:28px;text-align:center}.styles__uploadText___1ihq5-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:15px;line-height:20px}.styles__imgContainer___2INQH-camelCase{width:100%;height:280px;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#333;border-radius:5px;overflow:hidden}.styles__coverImage___YXUxS-camelCase{max-width:100%;max-height:100%;margin:auto;-o-object-fit:contain;object-fit:contain}.styles__removeImageContainer___1tyj8-camelCase{width:100%;height:40px;margin-top:-40px;background-color:rgba(0,0,0,.6);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.styles__removeImageButton___3H-UO-camelCase{display:flex;flex-direction:row;align-self:flex-start;height:40px;width:135px;margin-left:30px;margin-top:-40px;cursor:pointer;outline:none;z-index:3}.styles__removeImageIcon___108Yb-camelCase{font-size:26px;color:#fff;line-height:40px;width:30px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__removeImageText___2t5Ue-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:24px;color:#fff;line-height:40px}.styles__upperRightContainer___2B7fN-camelCase{display:flex;flex-direction:column;padding:10px 15px;flex-grow:1;margin-left:3%;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px}.styles__titleHeader___2P9Do-camelCase{font-size:34px}.styles__descHeader___3hvo5-camelCase,.styles__titleHeader___2P9Do-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:left;color:#3a3a3a}.styles__descHeader___3hvo5-camelCase{font-size:24px}.styles__input___3o2VJ-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 0 20px;padding:4px 15px;width:calc(100% - 34px);height:40px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;display:flex;flex-direction:row;align-items:center}.styles__input___3o2VJ-camelCase:focus{border-color:#0bc2cf}.styles__descInput___2KAcC-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:10px 0;padding:10px 15px;width:calc(100% - 34px);height:100px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;resize:none}.styles__descInput___2KAcC-camelCase:focus{border-color:#0bc2cf}.styles__inputFilled___14_Ke-camelCase{border-color:#3a3a3a}.styles__inputError___2DIDG-camelCase{border-color:#ce1313}.styles__categoryContainer___SPS2t-camelCase{width:48.5%;box-sizing:border-box;margin:15px 0;padding:10px 15px 17px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px}.styles__categoryHeader___1j3f2-camelCase{font-size:24px;font-weight:700}.styles__categoryDesc___35ndo-camelCase,.styles__categoryHeader___1j3f2-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__categoryDesc___35ndo-camelCase{font-size:18px;opacity:.8}.styles__privacyRow___1Alas-camelCase{margin:10px 0;width:100%}.styles__privacyCheckbox___1EvU4-camelCase,.styles__privacyRow___1Alas-camelCase{display:flex;flex-direction:row;align-items:center}.styles__privacyCheckbox___1EvU4-camelCase{width:60px;height:25px;border-radius:5px;background-color:rgba(0,0,0,.1);position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__privacyCheckboxChecked___G4Gwd-camelCase{background-color:#0bc2cf}.styles__privacyCheckboxSquare___lmt_S-camelCase{height:20px;width:20px;background-color:#fff;box-shadow:inset 0 -3px rgba(0,0,0,.2);border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(calc(-50% - 15px),-50%);transition:.2s}.styles__privacyCheckboxChecked___G4Gwd-camelCase>.styles__privacyCheckboxSquare___lmt_S-camelCase{transform:translate(calc(-50% + 15px),-50%)}.styles__privacyText___19pqj-camelCase{font-size:20px;font-weight:700;margin:0 10px}.styles__privacyTextDesc___1j5Gm-camelCase{font-size:12px}.styles__methodContainer___1ADyH-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:100%;margin:5px 0;background-color:rgba(0,0,0,.1);border-radius:5px;padding:7px 0}.styles__methodButton___1HxjD-camelCase{box-shadow:0 0 4px rgba(0,0,0,.15);margin:7px 5px}.styles__methodButtonInside___nfBO4-camelCase{width:180px;height:40px;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#3a3a3a}.styles__methodSelected___1XsGp-camelCase{color:#fff}.styles__methodIcon___-y7BW-camelCase{font-size:24px;padding-left:0;width:30px;text-align:center}.styles__methodHeader___ZRYGR-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:18px;line-height:20px;margin-left:10px}.styles__quizletImage___38sJo-camelCase{width:30px;height:30px;filter:grayscale(90%)}.styles__quizletImageSelected___1dqYG-camelCase{filter:none}.styles__bottomRow___1N743-camelCase{display:flex;flex-direction:row;justify-content:flex-end;align-items:center;width:90%;margin:5px auto}.styles__buttonWrapper___AVKOZ-camelCase{width:150px}.styles__buttonWrapper___AVKOZ-camelCase,.styles__createButton___1VF39-camelCase{display:flex;justify-content:center;align-items:center}.styles__createButton___1VF39-camelCase{font-family:Titan One,sans-serif;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:28px;width:140px;height:50px}.styles__buttonFilled___2Vx8C-camelCase{color:#fff;background-color:#0bc2cf}.styles__buttonError___14Ma8-camelCase{color:#fff;background-color:#ce1313}.styles__errorContainer___3bgcc-camelCase{background-color:#cf180b;border-radius:7px;box-sizing:border-box;padding:5px 10px 12px;box-shadow:inset 0 -7px rgba(0,0,0,.2);margin-right:15px;display:flex;flex-direction:row;align-items:center;color:#fff;font-size:18px}.styles__errorIcon___32yDg-camelCase{font-size:20px;margin-right:10px}@media only screen and (max-width:1050px){.styles__wideContainer___Ulh4C-camelCase{flex-direction:column}.styles__dropHolder___-ooT2-camelCase{width:calc(100% - 30px);min-height:240px;flex:0}.styles__dropContainer___368Bu-camelCase{min-height:277px}.styles__uploadButtonContainer___1VVhA-camelCase{margin:0 auto 15px}.styles__upperRightContainer___2B7fN-camelCase{margin:20px 0 10px}.styles__descInput___2KAcC-camelCase,.styles__input___3o2VJ-camelCase{width:calc(100% - 34px)}.styles__descInput___2KAcC-camelCase{height:102px}.styles__categoryContainer___SPS2t-camelCase{width:100%;margin:10px 0}.styles__bottomRow___1N743-camelCase{margin-top:10px;justify-content:center}}", ""]), t.locals = {
                header: "styles__header___2zcdQ-camelCase",
                wideContainer: "styles__wideContainer___Ulh4C-camelCase",
                dropHolder: "styles__dropHolder___-ooT2-camelCase",
                dropContainer: "styles__dropContainer___368Bu-camelCase",
                activeDropContainer: "styles__activeDropContainer___3MiKb-camelCase",
                dropHeader: "styles__dropHeader___PH8wO-camelCase",
                dropText: "styles__dropText___2pIPc-camelCase",
                uploadButtonContainer: "styles__uploadButtonContainer___1VVhA-camelCase",
                uploadButton: "styles__uploadButton___2Ukj--camelCase",
                uploadButtonInside: "styles__uploadButtonInside___3akbb-camelCase",
                uploadIcon: "styles__uploadIcon___2lU9o-camelCase",
                uploadText: "styles__uploadText___1ihq5-camelCase",
                imgContainer: "styles__imgContainer___2INQH-camelCase",
                coverImage: "styles__coverImage___YXUxS-camelCase",
                removeImageContainer: "styles__removeImageContainer___1tyj8-camelCase",
                removeImageButton: "styles__removeImageButton___3H-UO-camelCase",
                removeImageIcon: "styles__removeImageIcon___108Yb-camelCase",
                removeImageText: "styles__removeImageText___2t5Ue-camelCase",
                upperRightContainer: "styles__upperRightContainer___2B7fN-camelCase",
                titleHeader: "styles__titleHeader___2P9Do-camelCase",
                descHeader: "styles__descHeader___3hvo5-camelCase",
                input: "styles__input___3o2VJ-camelCase",
                descInput: "styles__descInput___2KAcC-camelCase",
                inputFilled: "styles__inputFilled___14_Ke-camelCase",
                inputError: "styles__inputError___2DIDG-camelCase",
                categoryContainer: "styles__categoryContainer___SPS2t-camelCase",
                categoryHeader: "styles__categoryHeader___1j3f2-camelCase",
                categoryDesc: "styles__categoryDesc___35ndo-camelCase",
                privacyRow: "styles__privacyRow___1Alas-camelCase",
                privacyCheckbox: "styles__privacyCheckbox___1EvU4-camelCase",
                privacyCheckboxChecked: "styles__privacyCheckboxChecked___G4Gwd-camelCase",
                privacyCheckboxSquare: "styles__privacyCheckboxSquare___lmt_S-camelCase",
                privacyText: "styles__privacyText___19pqj-camelCase",
                privacyTextDesc: "styles__privacyTextDesc___1j5Gm-camelCase",
                methodContainer: "styles__methodContainer___1ADyH-camelCase",
                methodButton: "styles__methodButton___1HxjD-camelCase",
                methodButtonInside: "styles__methodButtonInside___nfBO4-camelCase",
                methodSelected: "styles__methodSelected___1XsGp-camelCase",
                methodIcon: "styles__methodIcon___-y7BW-camelCase",
                methodHeader: "styles__methodHeader___ZRYGR-camelCase",
                quizletImage: "styles__quizletImage___38sJo-camelCase",
                quizletImageSelected: "styles__quizletImageSelected___1dqYG-camelCase",
                bottomRow: "styles__bottomRow___1N743-camelCase",
                buttonWrapper: "styles__buttonWrapper___AVKOZ-camelCase",
                createButton: "styles__createButton___1VF39-camelCase",
                buttonFilled: "styles__buttonFilled___2Vx8C-camelCase",
                buttonError: "styles__buttonError___14Ma8-camelCase",
                errorContainer: "styles__errorContainer___3bgcc-camelCase",
                errorIcon: "styles__errorIcon___32yDg-camelCase"
            }
        },
        IhNm: function(e, t, r) {
            var o = r("XPYX");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        Uba3: function(e, t, r) {
            var o = r("Eb3v");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        XPYX: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__mainContainer___zAX5c-camelCase{display:flex;flex-direction:column;margin:25px auto;width:90%;min-width:400px;max-width:800px}.styles__mainHeader___1R_BT-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;color:#3a3a3a}.styles__testContainer___2OJWp-camelCase{border-radius:5px;background-color:#fff;margin:10px auto;width:100%;box-sizing:border-box;padding:10px 10px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);min-width:400px;display:flex;flex-direction:row;align-items:center}.styles__text___3354--camelCase{color:#3a3a3a;text-align:left;font-size:18px;font-family:Nunito,sans-serif;margin:10px 0 20px}.styles__testIcon___bQNeY-camelCase{font-size:40px;width:50px;height:50px;display:flex;justify-content:center;align-items:center;margin:auto 15px;color:#0bc2cf}.styles__spin___usdoa-camelCase{animation:styles__spin___usdoa-camelCase 2s linear infinite}@keyframes styles__spin___usdoa-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.styles__testInfo___21vVC-camelCase{color:#3a3a3a;text-align:left;font-size:18px;font-family:Nunito,sans-serif}.styles__testTitle___2BEGm-camelCase{font-weight:700;font-size:22px}@media only screen and (max-width:600px){.styles__mainContainer___zAX5c-camelCase{min-width:320px;margin:auto}.styles__testContainer___2OJWp-camelCase{min-width:290px;padding:15px 15px 20px}}", ""]), t.locals = {
                mainContainer: "styles__mainContainer___zAX5c-camelCase",
                mainHeader: "styles__mainHeader___1R_BT-camelCase",
                testContainer: "styles__testContainer___2OJWp-camelCase",
                text: "styles__text___3354--camelCase",
                testIcon: "styles__testIcon___bQNeY-camelCase",
                spin: "styles__spin___usdoa-camelCase",
                testInfo: "styles__testInfo___21vVC-camelCase",
                testTitle: "styles__testTitle___2BEGm-camelCase"
            }
        },
        YUq3: function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("H1WH"),
                l = r("TSYQ"),
                u = r.n(l),
                f = r("Xst1"),
                d = r.n(f),
                p = r("IhNm"),
                h = r.n(p),
                m = r("oQ+7"),
                _ = r("XTAU"),
                y = r("dOT4"),
                g = r("qnYv");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function w(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function x(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var o, a, n = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        s = !0, a = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
                return o
            }

            function E(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
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
                    var r, o = N(e);
                    if (t) {
                        var a = N(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return O(this, r)
                }
            }

            function O(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return S(e)
            }

            function S(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var I = window.ShopData = [{
                    id: "blooket-firewall",
                    title: "Firewall check on *.blooket.com",
                    desc: "Used to join games, view images, and access the site",
                    test: function() {
                        return new Promise((function(e, t) {
                            g.a.get("/api/firewall-check").then(e).catch((function(e) {
                                console.log(e), t()
                            }))
                        }))
                    }
                }, {
                    id: "localstorage",
                    title: "LocalStorage Access",
                    desc: "Used to track login access",
                    test: function() {
                        return new Promise((function(e, t) {
                            if (window && window.localStorage && window.localStorage.setItem && window.localStorage.getItem) {
                                if (window.localStorage.setItem("TEST-KEY", "test"), "test" !== window.localStorage.getItem("TEST-KEY")) return void t();
                                e()
                            } else t()
                        }))
                    }
                }, {
                    id: "websocket",
                    title: "Browser WebSocket connection",
                    desc: "Used to participate in live games",
                    test: function() {
                        return new Promise((function(e, t) {
                            "WebSocket" in window || "MozWebSocket" in window ? e() : t()
                        }))
                    }
                }, {
                    id: "unsplash",
                    title: "Firewall check on images.unsplash.com",
                    desc: "Used to view Unsplash.com images",
                    test: function() {
                        return new Promise((function(e, t) {
                            y.a.get("https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NjkzOH0").then(e).catch(t)
                        }))
                    }
                }, {
                    id: "fontawesome",
                    title: "Firewall check on *.fontawesome.com",
                    desc: "Used to view icons",
                    test: function() {
                        return new Promise((function(e, t) {
                            y.a.get("https://kit.fontawesome.com/984809ea42.js").then(e).catch(t)
                        }))
                    }
                }],
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
                        }), t && k(e, t)
                    }(i, e);
                    var t, r, o, n = j(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = n.call(this, e)).state = {
                            tests: {}
                        }, t.checkTest = t.checkTest.bind(S(t)), t
                    }
                    return t = i, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = [];
                            I.forEach((function(e) {
                                t[e.id] = {
                                    title: e.title,
                                    desc: e.desc,
                                    test: e.test,
                                    status: "loading"
                                }
                            })), this.setState({
                                tests: t
                            }, (function() {
                                Object.entries(e.state.tests).forEach((function(t) {
                                    var r = x(t, 2),
                                        o = r[0];
                                    r[1].test(e).then((function() {
                                        e.checkTest(o, "passed")
                                    })).catch((function() {
                                        e.checkTest(o, "failed")
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "checkTest",
                        value: function(e, t) {
                            var r = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                                        w(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }({}, this.state.tests);
                            r[e].status = t, this.setState({
                                tests: r,
                                allPassed: Object.values(r).filter((function(e) {
                                    return "passed" === e.status
                                })).length === I.length
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return a.a.createElement("div", {
                                className: c.isMobile ? d.a.mBody : d.a.body
                            }, a.a.createElement(_.a, {
                                title: "Debug | Blooket",
                                desc: "Debug common Blooket issues by making sure you can connect to all pages."
                            }), a.a.createElement(m.a, null), a.a.createElement("div", {
                                className: d.a.regularBody
                            }, a.a.createElement("div", {
                                className: h.a.mainContainer
                            }, a.a.createElement("div", {
                                className: h.a.mainHeader
                            }, "Debug Page"), a.a.createElement("div", {
                                className: h.a.text
                            }, "\n                This page can be used to debug Blooket issues. If any of the below tests fail,\n                then contact your school’s tech department with this page so that they can\n                change browser or firewall settings. Doing this will allow all the below\n                tests to pass and Blooket to work!\n              "), this.state.allPassed ? a.a.createElement("div", {
                                className: h.a.testContainer,
                                style: {
                                    backgroundColor: "#b9ecac"
                                }
                            }, a.a.createElement("i", {
                                className: u()("fas fa-check", h.a.testIcon),
                                style: {
                                    color: "#4bc22e"
                                }
                            }), a.a.createElement("div", {
                                className: h.a.testInfo
                            }, a.a.createElement("div", {
                                className: h.a.testTitle
                            }, "All Tests Passed!"), "You are correctly set up to use Blooket!")) : null, Object.entries(this.state.tests).map((function(e) {
                                var t = x(e, 2),
                                    r = t[0],
                                    o = t[1];
                                return a.a.createElement("div", {
                                    className: h.a.testContainer,
                                    key: r
                                }, "loading" === o.status ? a.a.createElement("i", {
                                    className: u()("fas fa-spinner", h.a.testIcon, h.a.spin)
                                }) : "passed" === o.status ? a.a.createElement("i", {
                                    className: u()("fas fa-check", h.a.testIcon),
                                    style: {
                                        color: "#4bc22e"
                                    }
                                }) : a.a.createElement("i", {
                                    className: u()("fas fa-times", h.a.testIcon),
                                    style: {
                                        color: "#c43a35"
                                    }
                                }), a.a.createElement("div", {
                                    className: h.a.testInfo
                                }, a.a.createElement("div", {
                                    className: h.a.testTitle
                                }, o.title), o.desc))
                            })), a.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))))
                        }
                    }]) && E(t.prototype, r), o && E(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), i
                }(a.a.Component);
            L.propTypes = {};
            t.a = Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(L))
        },
        bSFd: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__right___385mx-camelCase{position:absolute;top:50%;transform:translateY(-50%);right:2.5%;width:400px;overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:10px}.styles__rightBackground___36mp5-camelCase{width:100%;height:100%}.styles__rightBottom___F7qsO-camelCase{width:100%;position:absolute;bottom:0;left:0;height:50px;box-shadow:inset 0 -9px rgba(0,0,0,.2);border-bottom-left-radius:10px;border-bottom-right-radius:10px}.styles__rightBlook___1JkY7-camelCase{position:absolute;bottom:85px;left:105px;width:190px}.styles__rightTopText___2VrKK-camelCase{position:absolute;top:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center}.styles__highlightedName___2wOtf-camelCase{text-shadow:0 3px 3px rgba(0,0,0,.2);width:100%;height:50px;text-align:center}.styles__highlightedRarity___1EXx_-camelCase{font-size:30px;-webkit-text-stroke:#3a3a3a 1.5px}.styles__highlightedBottom___QmY2Y-camelCase{position:absolute;bottom:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center;font-size:30px;text-shadow:0 0 4px rgba(0,0,0,.4)}.styles__rightButtonRow___3a0GF-camelCase{position:absolute;top:calc(50% + 220px);right:2.5%;width:400px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.styles__rightButton___2_ZIX-camelCase{width:180px;margin:10px}.styles__rightButtonInside___14imT-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;height:40px;color:#fff;text-shadow:1px 2px rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:28px}.styles__rightButtonImg___1WJdo-camelCase{width:28px;height:28px;margin-right:7px;margin-top:3px}.styles__rightButtonIcon___29lC9-camelCase{font-size:28px;margin-right:7px}.styles__topButtonRow___2HIbg-camelCase{position:absolute;top:15px;left:2.5%;width:calc(95% - 430px);flex-flow:row wrap;justify-content:flex-end}.styles__settingButton___2xaQu-camelCase,.styles__topButtonRow___2HIbg-camelCase{display:flex;align-items:center}.styles__settingButton___2xaQu-camelCase{background-color:rgba(0,0,0,.1);color:#3a3a3a;border-radius:5px;font-size:12px;height:20px;padding:0 10px;margin:0 5px;flex-direction:row;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__settingButton___2xaQu-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__left___9beun-camelCase{position:absolute;top:45px;left:2.5%;height:calc(100% - 60px);width:calc(95% - 430px);border-radius:10px;background-color:#9a49aa;padding:10px 10px 19px;box-shadow:inset 0 -9px rgba(0,0,0,.2),0 5px rgba(0,0,0,.25)}.styles__blooksHolder___3qZR1-camelCase,.styles__left___9beun-camelCase{box-sizing:border-box}.styles__blooksHolder___3qZR1-camelCase{width:100%;height:100%;padding:5px;overflow-y:auto}.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar-thumb,.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__soloBlooksHolder___1f8ku-camelCase{width:100%;height:100%;padding:5px;box-sizing:border-box;overflow-y:auto;display:grid;justify-content:center;align-content:flex-start;grid-template-columns:repeat(auto-fill,60px);grid-gap:10px}.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar-thumb,.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__setHolder___rVq3Z-camelCase{margin-bottom:20px;position:relative}.styles__setTop___wIaVS-camelCase{margin-bottom:5px;position:relative;height:50px;width:100%;display:flex;flex-direction:column}.styles__setTopBackground___342Wr-camelCase{position:absolute;left:0;top:0;background-size:50px 50px;opacity:.15;width:100%;height:100%}.styles__setText___1PQLQ-camelCase{margin:auto 0;font-family:Titan One,sans-serif;color:#fff;text-shadow:3px 3px rgba(0,0,0,.2);font-size:26px}.styles__setDivider___3da0c-camelCase{width:100%;height:3px;background-color:#fff;border-radius:2px}.styles__setBlooks___3xamH-camelCase{display:grid;grid-template-columns:repeat(auto-fill,60px);grid-gap:10px}.styles__blookContainer___3JrKb-camelCase{width:60px;height:70px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;will-change:transform}.styles__blook___bNr_t-camelCase{width:55px}.styles__lockedBlook___3oGaX-camelCase{filter:brightness(0)}.styles__blookLock___3Kgua-camelCase{font-size:24px;opacity:.7;top:55%;left:50%;transform:translate(-50%,-50%)}.styles__blookLock___3Kgua-camelCase,.styles__blookText___3AMdK-camelCase{color:#fff;position:absolute}.styles__blookText___3AMdK-camelCase{font-size:10px;font-family:Titan One,sans-serif;font-size:12px;-webkit-text-stroke:#3a3a3a 1px;background-color:#fff;border-radius:7px;padding:0 5px;height:14px;line-height:14px;display:flex;justify-content:center;align-items:center;bottom:2px;left:-2px}@media only screen and (max-width:1000px){.styles__right___385mx-camelCase{width:300px}.styles__rightBlook___1JkY7-camelCase{bottom:64px;left:78.5px;width:143px}.styles__rightTopText___2VrKK-camelCase{top:5px;left:2.5%;width:95%}.styles__highlightedName___2wOtf-camelCase{height:30px}.styles__highlightedRarity___1EXx_-camelCase{font-size:20px}.styles__highlightedBottom___QmY2Y-camelCase{bottom:15px;font-size:20px}.styles__rightButtonRow___3a0GF-camelCase{top:calc(50% + 180px);width:300px}.styles__rightButton___2_ZIX-camelCase{width:140px}.styles__rightButtonInside___14imT-camelCase{height:30px;font-size:22px}.styles__rightButtonImg___1WJdo-camelCase{width:22px;height:22px;margin-top:3px}.styles__rightButtonIcon___29lC9-camelCase{font-size:20px}.styles__left___9beun-camelCase,.styles__topButtonRow___2HIbg-camelCase{width:calc(95% - 320px)}}.styles__mBlooksButton___3f-YA-camelCase{position:absolute!important;bottom:calc(50% + 180px);left:50%;transform:translateX(-50%);visibility:hidden}.styles__mBlooksButtonInside___2RBAk-camelCase{width:200px;height:30px;color:#fff;text-shadow:1px 2px rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:22px;display:flex;justify-content:center;align-items:center}@media only screen and (max-width:685px){.styles__left___9beun-camelCase,.styles__topButtonRow___2HIbg-camelCase{visibility:hidden}.styles__left___9beun-camelCase{top:15px;left:2.5%;height:calc(100% - 30px);width:95%;z-index:5}.styles__right___385mx-camelCase{right:calc(50% - 150px)}.styles__rightButtonRow___3a0GF-camelCase{right:5%;width:90%}.styles__mBlooksButton___3f-YA-camelCase,.styles__mShowLeft___1IXx3-camelCase{visibility:visible}}", ""]), t.locals = {
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
        byOs: function(e, t, r) {
            var o = r("bSFd");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        fLDY: function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                l = r.n(c),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                p = r("FKJl"),
                h = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("/vfi"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("VWYR"),
                C = r("74sb"),
                E = r("qnYv");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function j(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function O() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                O = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return j()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(E([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == k(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
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

            function S(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function N(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
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
                    var r, o = P(e);
                    if (t) {
                        var a = P(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return B(this, r)
                }
            }

            function B(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return T(e)
            }

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var R = function(e) {
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
                var t, r, o, n, i, s = L(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        email: "",
                        emailError: "",
                        loading: !1
                    }, t.loading = !1, t.email = "", t.onSubmit = t.onSubmit.bind(T(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (n = O().mark((function e() {
                        var t;
                        return O().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if ((t = e.sent) && t.hasPassword) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("EmailPage cannot proceed without user or user.hasPassword"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.email = t.email;
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, o) {
                            var a = n.apply(e, t);

                            function i(e) {
                                S(a, r, o, i, s, "next", e)
                            }

                            function s(e) {
                                S(a, r, o, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(e) {
                        var t = this;
                        if (e.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = Object(C.r)(this.state.email),
                                o = "";
                            this.state.password || (o = "Where's the password?"), this.setState({
                                emailError: r,
                                passwordError: o
                            }, (function() {
                                t.state.emailError || t.state.passwordError ? (t.loading = !1, t.setState({
                                    loading: !1
                                })) : E.a.put("/api/users/change/email", {
                                    email: t.email,
                                    newEmail: t.state.email.toLowerCase(),
                                    password: t.state.password
                                }).then((function(e) {
                                    !0 === e.data.success ? Object(x.b)() : (t.loading = !1, t.setState(j({
                                        loading: !1
                                    }, "".concat(e.data.errType, "Error"), e.data.msg)))
                                })).catch((function(e) {
                                    Object(p.b)(e)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return a.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, a.a.createElement(v.a, {
                            title: "Change Email | Blooket",
                            desc: "Change the email for your Blooket account."
                        }), a.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), a.a.createElement("div", {
                            className: _.a.slantBackground
                        }), a.a.createElement("div", {
                            className: _.a.regularBody
                        }, a.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, a.a.createElement("div", {
                            className: g.a.containerHeader
                        }, "Change Email"), a.a.createElement("div", null, a.a.createElement("div", {
                            className: f()(g.a.inputContainer, j({}, g.a.inputFilled, this.state.email), j({}, g.a.inputError, this.state.emailError))
                        }, a.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-envelope", j({}, g.a.iconFilled, this.state.email), j({}, g.a.iconError, this.state.emailError))
                        }), a.a.createElement("input", {
                            className: f()(g.a.input, j({}, g.a.inputError, this.state.emailError)),
                            placeholder: "New Email",
                            onChange: function(t) {
                                return e.setState({
                                    email: t.target.value.trim().slice(0, 50),
                                    emailError: ""
                                })
                            },
                            value: this.state.email,
                            type: "text",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), a.a.createElement("div", {
                            className: f()(g.a.inputContainer, j({}, g.a.inputFilled, this.state.password), j({}, g.a.inputError, this.state.passwordError))
                        }, a.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-lock", j({}, g.a.iconFilled, this.state.password), j({}, g.a.iconError, this.state.passwordError))
                        }), a.a.createElement("input", {
                            className: f()(g.a.input, j({}, g.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(t) {
                                return e.setState({
                                    password: t.target.value,
                                    passwordError: ""
                                })
                            },
                            type: "password"
                        })), this.state.loading ? a.a.createElement(w.a, null) : a.a.createElement("input", {
                            type: "submit",
                            value: "Change Email",
                            className: f()(g.a.button, j({}, g.a.buttonFilled, this.state.email && this.state.password), j({}, g.a.buttonError, this.state.emailError || this.state.passwordError)),
                            tabIndex: 0
                        })), this.state.emailError || this.state.passwordError ? a.a.createElement("div", {
                            className: g.a.errorContainer
                        }, a.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), a.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.emailError || this.state.passwordError)) : null)))
                    }
                }]) && N(t.prototype, r), o && N(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            R.propTypes = {
                user: l.a.object
            };
            t.a = Object(h.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(R)))
        },
        fuSh: function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("TSYQ"),
                l = r.n(c),
                u = r("H1WH"),
                f = r("FKJl"),
                d = r("E8Bj"),
                p = r("Xst1"),
                h = r.n(p),
                m = r("/vfi"),
                _ = r.n(m),
                y = r("oQ+7"),
                g = r("XTAU"),
                b = r("XOuL"),
                v = r("74sb"),
                w = r("qnYv");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
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
                    var r, o = S(e);
                    if (t) {
                        var a = S(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return j(this, r)
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
                    }), t && E(e, t)
                }(i, e);
                var t, r, o, n = k(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = n.call(this, e)).state = {
                        loading: !1,
                        success: !1,
                        done: !1
                    }, t.email = Object(v.h)("e"), t.onSubmit = t.onSubmit.bind(O(t)), t
                }
                return t = i, (r = [{
                    key: "onSubmit",
                    value: function(e) {
                        var t = this;
                        e.preventDefault(), this.state.loading || (this.setState({
                            loading: !0
                        }), w.a.put("/api/users/unsubscribe", {
                            email: decodeURIComponent(this.email).toLowerCase()
                        }).then((function(e) {
                            t.setState({
                                success: e.data.success,
                                done: !0
                            })
                        })).catch((function(e) {
                            Object(f.b)(e)
                        })))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.email ? a.a.createElement("div", {
                            className: u.isMobile ? h.a.mBody : h.a.body
                        }, a.a.createElement(g.a, {
                            title: "Unsubscribe | Blooket",
                            desc: "Unsubscribe from Blooket emails."
                        }), a.a.createElement(y.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), a.a.createElement("div", {
                            className: h.a.slantBackground
                        }), a.a.createElement("div", {
                            className: h.a.regularBody
                        }, a.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: _.a.container
                        }, a.a.createElement("div", {
                            className: _.a.containerHeader
                        }, this.state.done ? this.state.success ? "Successfully Unsubscribed!" : "Please Refresh and Try Again" : "Unsubscribe from Emails?"), this.state.done ? null : a.a.createElement("div", null, this.state.loading ? a.a.createElement(b.a, null) : a.a.createElement("input", {
                            type: "submit",
                            value: "Yes",
                            className: l()(_.a.button, _.a.buttonFilled),
                            tabIndex: 0
                        }))))) : (Object(f.b)("UnsubscribePage cannot be rendered without an email"), void(window.location.href = "".concat("https://id.blooket.com", "/login")))
                    }
                }]) && C(t.prototype, r), o && C(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(a.a.Component);
            N.propTypes = {};
            t.a = Object(d.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(N)))
        },
        kAC4: function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                l = r.n(c),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                p = r("3HZZ"),
                h = r("FKJl"),
                m = r("E8Bj"),
                _ = r("Xst1"),
                y = r.n(_),
                g = r("/vfi"),
                b = r.n(g),
                v = r("oQ+7"),
                w = r("XTAU"),
                x = r("XOuL"),
                C = r("LHn/"),
                E = r("VWYR"),
                k = r("qnYv");

            function j(e) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function S() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                S = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return k()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(E([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == j(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
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

            function N(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function I(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(o, a) {
                        var n = e.apply(t, r);

                        function i(e) {
                            N(n, o, a, i, s, "next", e)
                        }

                        function s(e) {
                            N(n, o, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function L(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, o = U(e);
                    if (t) {
                        var a = U(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(e, t) {
                if (t && ("object" === j(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && B(e, t)
                }(s, e);
                var t, r, o, n, i = T(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = i.call(this, e)).state = {
                        password: "",
                        passwordError: "",
                        loading: !1,
                        hasPassword: !1,
                        ready: !1,
                        googleClientId: ""
                    }, t.loading = !1, t.email = "", t.onSubmit = t.onSubmit.bind(R(t)), t.googleSuccess = t.googleSuccess.bind(R(t)), t.googleFailure = t.googleFailure.bind(R(t)), t
                }
                return t = s, (r = [{
                    key: "componentDidMount",
                    value: (n = I(S().mark((function e() {
                        var t, r = this;
                        return S().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(h.b)("DeletePage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.email = t.email, this.setState({
                                        hasPassword: t.hasPassword,
                                        ready: !0
                                    }), k.a.get("/api/users/check-auth").then((function() {
                                        k.a.get("/api/config").then(function() {
                                            var e = I(S().mark((function e(t) {
                                                return S().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (t.data && t.data.googleClientId) {
                                                                e.next = 4;
                                                                break
                                                            }
                                                            throw Error("could not get googleClientId from backend");
                                                        case 4:
                                                            r.setState({
                                                                googleClientId: t.data.googleClientId
                                                            });
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(e) {
                        var t = this;
                        if (e.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = "";
                            this.state.password || (r = "Where's The Password?"), this.setState({
                                passwordError: r
                            }, (function() {
                                t.state.passwordError ? (t.loading = !1, t.setState({
                                    loading: !1
                                })) : k.a.delete("/api/users", {
                                    params: {
                                        email: t.email,
                                        password: t.state.password
                                    }
                                }).then((function(e) {
                                    e.data.success ? Object(E.b)() : (t.loading = !1, t.setState({
                                        loading: !1,
                                        passwordError: e.data.msg
                                    }))
                                })).catch((function(e) {
                                    Object(h.b)(e)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "googleSuccess",
                    value: function(e) {
                        var t = this;
                        this.setState({
                            loading: !0,
                            passwordError: ""
                        }), k.a.delete("/api/users/google", {
                            params: {
                                access_token: e.accessToken,
                                email: this.email
                            }
                        }).then((function(e) {
                            e.data.success ? Object(E.b)() : t.setState({
                                passwordError: e.data.msg,
                                loading: !1
                            })
                        })).catch((function() {
                            t.setState({
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
                        var e = this;
                        return a.a.createElement("div", {
                            className: d.isMobile ? y.a.mBody : y.a.body
                        }, a.a.createElement(w.a, {
                            title: "Delete Account | Blooket",
                            desc: "Delete your Blooket account."
                        }), a.a.createElement(v.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), a.a.createElement("div", {
                            className: y.a.slantBackground
                        }), a.a.createElement("div", {
                            className: y.a.regularBody
                        }, this.state.ready ? a.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: b.a.container
                        }, a.a.createElement("div", {
                            className: b.a.containerHeader
                        }, "Delete Account"), a.a.createElement("div", null, this.state.hasPassword ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: f()(b.a.inputContainer, O({}, b.a.inputFilled, this.state.password), O({}, b.a.inputError, this.state.passwordError))
                        }, a.a.createElement("i", {
                            className: f()(b.a.icon, "fas fa-lock", O({}, b.a.iconFilled, this.state.password), O({}, b.a.iconError, this.state.passwordError))
                        }), a.a.createElement("input", {
                            className: f()(b.a.input, O({}, b.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(t) {
                                return e.setState({
                                    password: t.target.value.trim(),
                                    passwordError: ""
                                })
                            },
                            type: "password",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), this.state.loading ? a.a.createElement(x.a, null) : a.a.createElement("input", {
                            type: "submit",
                            value: "Delete",
                            className: f()(b.a.button, O({}, b.a.buttonFilled, this.state.password), O({}, b.a.buttonError, this.state.passwordError)),
                            tabIndex: 0
                        })) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", null, this.state.googleClientId ? a.a.createElement(p.GoogleLogin, {
                            clientId: this.state.googleClientId,
                            onSuccess: this.googleSuccess,
                            onFailure: this.googleFailure,
                            render: function(e) {
                                return a.a.createElement("div", {
                                    className: f()(y.a.googleButton, b.a.google),
                                    disabled: e.disabled,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: e.onClick
                                }, a.a.createElement("img", {
                                    src: C.a.basic.googleLogo,
                                    alt: "Google Logo",
                                    className: y.a.googleLogo,
                                    draggable: !1
                                }), "Delete Now")
                            }
                        }) : null), this.state.loading ? a.a.createElement(x.a, null) : null)), this.state.passwordError ? a.a.createElement("div", {
                            className: b.a.errorContainer
                        }, a.a.createElement("i", {
                            className: f()(b.a.errorIcon, "fas fa-times-circle")
                        }), a.a.createElement("div", {
                            className: b.a.errorText
                        }, this.state.passwordError)) : null) : null))
                    }
                }]) && L(t.prototype, r), o && L(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(a.a.Component);
            F.propTypes = {
                user: l.a.object
            };
            t.a = Object(m.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(F)))
        },
        kVNV: function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                p = r("FKJl"),
                h = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("/vfi"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("VWYR"),
                C = r("qnYv");

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return O()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(k([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == E(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
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

            function O(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function S(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function N(e, t) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, o = T(e);
                    if (t) {
                        var a = T(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(e, t) {
                if (t && ("object" === E(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return B(e)
            }

            function B(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && N(e, t)
                }(c, e);
                var t, r, o, n, i, s = I(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        password: "",
                        password2: "",
                        passwordError: "",
                        password2Error: "",
                        loading: !1
                    }, t.loading = !1, t.name = "", t.onSubmit = t.onSubmit.bind(B(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (n = j().mark((function e() {
                        var t;
                        return j().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("AddPasswordPage cannot continue without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.name = t.name;
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, o) {
                            var a = n.apply(e, t);

                            function i(e) {
                                O(a, r, o, i, s, "next", e)
                            }

                            function s(e) {
                                O(a, r, o, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(e) {
                        var t = this;
                        if (e.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = "",
                                o = "";
                            this.state.password ? this.state.password.length < 8 ? r = "Password must have at least 8 characters." : this.state.password.length > 72 ? r = "Password is too long (trouble encrypting)." : /(?=.*[A-Z])/.test(this.state.password) ? /(?=.*[a-z])/.test(this.state.password) ? /(?=.*[0-9])/.test(this.state.password) || (r = "Password must have at least 1 number digit.") : r = "Password must have at least 1 lowercase letter." : r = "Password must have at least 1 uppercase letter." : r = "Where's The Password?", this.state.password !== this.state.password2 && (o = "The passwords don't match."), this.state.password2 || (o = "Where's The Confirming Password?"), this.setState({
                                passwordError: r,
                                password2Error: o
                            }, (function() {
                                t.state.passwordError || t.state.password2Error ? (t.loading = !1, t.setState({
                                    loading: !1
                                })) : C.a.put("/api/users/addpassword", {
                                    name: t.name,
                                    password: t.state.password
                                }).then((function(e) {
                                    !0 === e.data.success ? Object(x.b)() : (t.loading = !1, t.setState({
                                        loading: !1,
                                        passwordError: e.data.msg
                                    }))
                                })).catch((function(e) {
                                    Object(p.b)(e)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return a.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, a.a.createElement(v.a, {
                            title: "Add Password | Blooket",
                            desc: "Add a password for your Blooket account."
                        }), a.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), a.a.createElement("div", {
                            className: _.a.slantBackground
                        }), a.a.createElement("div", {
                            className: _.a.regularBody
                        }, a.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, a.a.createElement("div", {
                            className: g.a.containerHeader
                        }, "Add Password"), a.a.createElement("div", null, a.a.createElement("div", {
                            className: f()(g.a.inputContainer, k({}, g.a.inputFilled, this.state.password), k({}, g.a.inputError, this.state.passwordError))
                        }, a.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-lock", k({}, g.a.iconFilled, this.state.password), k({}, g.a.iconError, this.state.passwordError))
                        }), a.a.createElement("input", {
                            className: f()(g.a.input, k({}, g.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(t) {
                                return e.setState({
                                    password: t.target.value.trim(),
                                    passwordError: ""
                                })
                            },
                            type: "password",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), a.a.createElement("div", {
                            className: f()(g.a.inputContainer, k({}, g.a.inputFilled, this.state.password2), k({}, g.a.inputError, this.state.password2Error))
                        }, a.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-lock", k({}, g.a.iconFilled, this.state.password2), k({}, g.a.iconError, this.state.password2Error))
                        }), a.a.createElement("input", {
                            className: f()(g.a.input, k({}, g.a.inputError, this.state.password2Error)),
                            placeholder: "Confirm Password",
                            onChange: function(t) {
                                return e.setState({
                                    password2: t.target.value,
                                    password2Error: ""
                                })
                            },
                            type: "password"
                        })), this.state.loading ? a.a.createElement(w.a, null) : a.a.createElement("input", {
                            type: "submit",
                            value: "Add Password",
                            className: f()(g.a.button, k({}, g.a.buttonFilled, this.state.password && this.state.password2), k({}, g.a.buttonError, this.state.passwordError || this.state.password2Error)),
                            tabIndex: 0
                        })), this.state.passwordError || this.state.password2Error ? a.a.createElement("div", {
                            className: g.a.errorContainer
                        }, a.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), a.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.passwordError || this.state.password2Error)) : null)))
                    }
                }]) && S(t.prototype, r), o && S(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            P.propTypes = {
                user: c.a.object
            };
            t.a = Object(h.c)(Object(l.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(P)))
        },
        m4Vc: function(e, t, r) {
            var o = r("o7zh");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        mpcV: function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                l = r.n(c),
                u = r("TSYQ"),
                f = r.n(u),
                d = r("H1WH"),
                p = r("FKJl"),
                h = r("E8Bj"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("m4Vc"),
                g = r.n(y),
                b = r("oQ+7"),
                v = r("XTAU"),
                w = r("XOuL"),
                x = r("74sb"),
                C = r("qnYv");

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return O()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(k([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == E(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
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

            function O(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function S(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function N(e, t) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, o = T(e);
                    if (t) {
                        var a = T(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(e, t) {
                if (t && ("object" === E(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return B(e)
            }

            function B(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && N(e, t)
                }(c, e);
                var t, r, o, n, i, s = I(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        name: "",
                        nameError: "",
                        loading: !1,
                        className: "",
                        alreadyJoined: !1
                    }, t.classId = e.match.params.id, t.onSubmit = t.onSubmit.bind(B(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (n = j().mark((function e() {
                        var t, r = this;
                        return j().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("ClassJoinPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    C.a.get("/api/classes", {
                                        params: {
                                            id: this.classId
                                        }
                                    }).then((function(e) {
                                        r.setState({
                                            className: e.data.name,
                                            alreadyJoined: !!e.data.students && e.data.students.map((function(e) {
                                                return e.id
                                            })).includes(t._id)
                                        })
                                    })).catch((function() {
                                        r.props.history.push("/404")
                                    }));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, o) {
                            var a = n.apply(e, t);

                            function i(e) {
                                O(a, r, o, i, s, "next", e)
                            }

                            function s(e) {
                                O(a, r, o, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(e) {
                        var t = this;
                        if (e.preventDefault(), !this.state.loading) {
                            this.setState({
                                loading: !0
                            });
                            var r = Object(x.v)(this.state.name);
                            this.setState({
                                nameError: r
                            }, (function() {
                                t.state.nameError ? t.setState({
                                    loading: !1
                                }) : C.a.put("/api/classes/join", {
                                    id: t.classId,
                                    name: t.state.name
                                }).then((function(e) {
                                    !0 === e.data.success ? t.props.history.push("/stats") : t.setState({
                                        loading: !1,
                                        nameError: e.data.msg
                                    })
                                })).catch((function(e) {
                                    Object(p.b)(e), t.setState({
                                        loading: !1,
                                        nameError: e.response.data
                                    })
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, r, o = this;
                        return a.a.createElement("div", {
                            className: d.isMobile ? _.a.mBody : _.a.body
                        }, a.a.createElement(v.a, {
                            title: "Join Class | Blooket",
                            desc: "Use an invite link to join a Blooket class."
                        }), a.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), a.a.createElement("div", {
                            className: _.a.slantBackground
                        }), a.a.createElement("div", {
                            className: _.a.regularBody
                        }, this.state.className ? a.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, a.a.createElement("div", {
                            className: g.a.header
                        }, "Join Class"), a.a.createElement("div", {
                            className: g.a.subheader
                        }, this.state.className), this.state.alreadyJoined ? a.a.createElement("div", {
                            className: g.a.subheader
                        }, "You are already in this class.") : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: g.a.miniHeader
                        }, "Enter your name", a.a.createElement("br", null), "(Make sure your teacher will recognize it):"), a.a.createElement("div", {
                            className: f()(g.a.inputContainer, (e = {}, k(e, g.a.inputFilled, this.state.name), k(e, g.a.inputError, this.state.nameError), e))
                        }, a.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-user", (t = {}, k(t, g.a.iconFilled, this.state.name), k(t, g.a.iconError, this.state.nameError), t))
                        }), a.a.createElement("input", {
                            className: f()(g.a.input, k({}, g.a.inputError, this.state.nameError)),
                            placeholder: "Name",
                            onChange: function(e) {
                                return o.setState({
                                    name: e.target.value.slice(0, 35),
                                    nameError: ""
                                })
                            },
                            value: this.state.name,
                            type: "text",
                            autoFocus: d.isMobile ? "" : "autofocus"
                        })), this.state.loading ? a.a.createElement(w.a, null) : a.a.createElement("input", {
                            type: "submit",
                            value: "Join Class",
                            className: f()(g.a.button, (r = {}, k(r, g.a.buttonFilled, this.state.name), k(r, g.a.buttonError, this.state.nameError), r)),
                            tabIndex: 0
                        }), this.state.nameError ? a.a.createElement("div", {
                            className: g.a.errorContainer
                        }, a.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), a.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.nameError)) : null)) : null))
                    }
                }]) && S(t.prototype, r), o && S(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            P.propTypes = {
                history: l.a.object,
                user: l.a.object,
                match: l.a.object
            };
            t.a = Object(h.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(P)))
        },
        o1xO: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__fullContainer___qVeWI-camelCase{align-items:center;width:85%;margin:0 7.5% 10px;font-family:Nunito,sans-serif}.styles__fullContainer___qVeWI-camelCase,.styles__header___10sXq-camelCase{display:flex;flex-direction:column}.styles__header___10sXq-camelCase{width:100%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:30px auto 0;padding:10px 15px;box-sizing:border-box}.styles__headerText___3iLda-camelCase{color:#3a3a3a;font-size:52px;font-weight:700}.styles__headerBar___37IdV-camelCase{border-radius:5px;width:260px;height:8px}.styles__headerButtons___BkvE9-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:100%;margin:15px auto}.styles__button___1PoHi-camelCase{display:flex;flex-direction:row;align-items:center;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:#fff;color:#3a3a3a;font-weight:700;width:220px;height:50px;padding:0 15px;margin:10px;box-sizing:border-box;font-size:20px;position:relative;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;transition:.2s}.styles__button___1PoHi-camelCase:hover{transform:scale(.95)}.styles__buttonIcon___11KvZ-camelCase{font-size:24px;margin-right:7px}.styles__copiedNotification___2y4Z--camelCase{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:5px;font-family:Nunito,sans-serif;color:#fff;font-size:18px;padding:5px 10px}.styles__noStudentsText___2XNgE-camelCase{color:#3a3a3a;font-size:32px;font-weight:700;width:90%;margin:20px auto;text-align:center}.styles__studentsHeader___3RU3T-camelCase{color:#3a3a3a;font-size:30px;font-weight:700;width:100%;margin:10px auto}.styles__studentsContainer___1oDh1-camelCase{display:grid;justify-content:center;grid-template-columns:repeat(auto-fill,265px);grid-gap:20px;max-width:100%;margin:0 auto}.styles__studentInfo___1EX3a-camelCase{display:flex;flex-direction:row;align-items:center;background-color:#fff;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-width:260px;height:50px;padding:5px 10px;box-sizing:border-box;font-size:24px;position:relative;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__studentBlook___2nyGf-camelCase{height:40px;margin-right:10px}.styles__extra___3j4jP-camelCase{display:none;position:absolute;top:100%;left:0;width:100%;height:35px;justify-content:space-between;align-items:flex-end}.styles__extra___3j4jP-camelCase,.styles__extraRow___2oaCq-camelCase{flex-direction:row}.styles__extraRow___2oaCq-camelCase{display:flex;align-items:center;width:47.5%;height:30px;padding:0 10px;box-sizing:border-box;font-size:16px;color:#3a3a3a;background-color:#fff;box-shadow:0 0 4px 1.5px rgba(0,0,0,.2);border-radius:5px;margin:2px 0;outline:none;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;position:relative;transition:.2s}.styles__extraRow___2oaCq-camelCase:focus,.styles__extraRow___2oaCq-camelCase:hover{transform:scale(.95);color:#0bc2cf}.styles__extraRowRed___2Z9-l-camelCase:focus,.styles__extraRowRed___2Z9-l-camelCase:hover{color:#ce1313}.styles__extraRowIcon___157Zo-camelCase{margin-right:7px}.styles__studentInfo___1EX3a-camelCase:hover>.styles__extra___3j4jP-camelCase{display:flex}", ""]), t.locals = {
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
        o7zh: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__container___3CYK_-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__header___xrnFr-camelCase{font-size:40px;line-height:40px;margin:20px auto 10px;font-family:Titan One,sans-serif}.styles__subheader___fFYOC-camelCase{font-size:26px;margin:10px;font-weight:700}.styles__miniHeader___3giyw-camelCase,.styles__subheader___fFYOC-camelCase{font-family:Nunito,sans-serif}.styles__miniHeader___3giyw-camelCase{font-size:14px;margin:5px 30px}.styles__inputContainer___1Y8Pu-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1Y8Pu-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase[focus-within]>.styles__icon___1LE1v-camelCase{color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase:focus-within>.styles__icon___1LE1v-camelCase{color:#0bc2cf}.styles__inputFilled___3rfUA-camelCase{border-color:#3a3a3a}.styles__inputError___33z-v-camelCase{border-color:#ce1313}.styles__icon___1LE1v-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___3p2oj-camelCase{color:#3a3a3a}.styles__iconError___3Rt-G-camelCase{color:#ce1313}.styles__input___37wlC-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___37wlC-camelCase:-moz-placeholder,.styles__input___37wlC-camelCase:-ms-input-placeholder,.styles__input___37wlC-camelCase::-moz-placeholder,.styles__input___37wlC-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___1KupC-camelCase:-moz-placeholder,.styles__mInput___1KupC-camelCase:-ms-input-placeholder,.styles__mInput___1KupC-camelCase::-moz-placeholder,.styles__mInput___1KupC-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___33z-v-camelCase,.styles__inputError___33z-v-camelCase:-moz-placeholder,.styles__inputError___33z-v-camelCase:-ms-input-placeholder,.styles__inputError___33z-v-camelCase::-moz-placeholder,.styles__inputError___33z-v-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___37wlC-camelCase:focus,.styles__input___37wlC-camelCase:focus:-moz-placeholder,.styles__input___37wlC-camelCase:focus:-ms-input-placeholder,.styles__input___37wlC-camelCase:focus::-moz-placeholder,.styles__input___37wlC-camelCase:focus::-webkit-input-placeholder,.styles__mInput___1KupC-camelCase:focus,.styles__mInput___1KupC-camelCase:focus:-moz-placeholder,.styles__mInput___1KupC-camelCase:focus:-ms-input-placeholder,.styles__mInput___1KupC-camelCase:focus::-moz-placeholder,.styles__mInput___1KupC-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___3CYK_-camelCase{width:320px}.styles__inputContainer___1Y8Pu-camelCase{width:280px}.styles__input___37wlC-camelCase{width:210px}}.styles__button___SyFRq-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___SyFRq-camelCase:focus,.styles__button___SyFRq-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___k9wIF-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___3PfoI-camelCase,.styles__buttonError___3PfoI-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___3PfoI-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___1G46E-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___3csY5-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1mBGe-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}", ""]), t.locals = {
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
        "oq/Q": function(e, t, r) {
            "use strict";
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("55Ip"),
                f = r("H1WH"),
                d = r("TSYQ"),
                p = r.n(d),
                h = r("FKJl"),
                m = r("Xst1"),
                _ = r.n(m),
                y = r("9ddr"),
                g = r.n(y),
                b = r("VgLj"),
                v = r("XTAU"),
                w = r("ca/f"),
                x = r("0oXL"),
                C = r("E8Bj"),
                E = r("A92q"),
                k = r("qnYv");

            function j(e) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
                return o
            }

            function N() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                N = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return k()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(E([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == j(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
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

            function I(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function L(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, o = U(e);
                    if (t) {
                        var a = U(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(e, t) {
                if (t && ("object" === j(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && B(e, t)
                }(c, e);
                var t, r, o, n, i, s = T(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
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
                    }, t.classId = "", t.here = !0, t.onDeleteConfirm = t.onDeleteConfirm.bind(R(t)), t.onEdit = t.onEdit.bind(R(t)), t.onKickUser = t.onKickUser.bind(R(t)), t.copyToClipboard = t.copyToClipboard.bind(R(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (n = N().mark((function e() {
                        var t = this;
                        return N().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.match.params.id) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.classId = this.props.match.params.id, e.next = 5, this.props.user.getData();
                                case 5:
                                    if (e.sent) {
                                        e.next = 10;
                                        break
                                    }
                                    return Object(h.b)("ClassPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 10:
                                    k.a.get("/api/classes", {
                                        params: {
                                            id: this.props.match.params.id
                                        }
                                    }).then((function(e) {
                                        if (t.here) {
                                            var r = e.data;
                                            console.log(r), r && r.name ? t.setState({
                                                ready: !0,
                                                name: r.name,
                                                color: r.color,
                                                students: r.students
                                            }) : t.setState({
                                                ready: !0
                                            })
                                        }
                                    })).catch((function(e) {
                                        t.setState({
                                            ready: !0
                                        }), Object(h.b)(e)
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, o) {
                            var a = n.apply(e, t);

                            function i(e) {
                                I(a, r, o, i, s, "next", e)
                            }

                            function s(e) {
                                I(a, r, o, i, s, "throw", e)
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
                    value: function(e) {
                        var t = this;
                        this.state.loading || (e ? (this.setState({
                            loading: !0
                        }), k.a.delete("/api/classes", {
                            params: {
                                id: this.classId
                            }
                        }).then((function() {
                            t.here && t.props.history.push("/dashboard?p=Classes")
                        })).catch((function(e) {
                            Object(h.b)(e)
                        }))) : this.setState({
                            isDeleting: !1
                        }))
                    }
                }, {
                    key: "onEdit",
                    value: function(e) {
                        var t = this;
                        e && e.preventDefault(), this.state.loading || (this.state.editName ? (this.setState({
                            loading: !0
                        }), k.a.put("/api/classes/edit", {
                            id: this.classId,
                            name: this.state.editName,
                            color: this.state.editColor
                        }).then((function(e) {
                            t.here && t.setState({
                                name: e.data.name,
                                color: e.data.color,
                                isEditing: !1,
                                loading: !1
                            })
                        })).catch((function(e) {
                            t.here && (Object(h.b)(e), t.setState({
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
                        var e = this;
                        this.state.loading || (this.setState({
                            loading: !0
                        }), k.a.put("/api/classes/remove", {
                            id: this.classId,
                            studentId: this.state.kickUser.id
                        }).then((function() {
                            if (e.here) {
                                var t = O(e.state.students),
                                    r = t.indexOf(e.state.kickUser); - 1 !== r && t.splice(r, 1), e.setState({
                                    loading: !1,
                                    kickUser: null,
                                    students: t
                                })
                            }
                        })).catch((function(t) {
                            Object(h.b)(t), e.setState({
                                loading: !1,
                                kickUser: null
                            })
                        })))
                    }
                }, {
                    key: "copyToClipboard",
                    value: function() {
                        var e = this,
                            t = document.createElement("textarea");
                        t.value = "".concat("https://dashboard.blooket.com", "/class/join/").concat(this.classId), t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t);
                        var r = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                        t.select(), document.execCommand("copy"), document.body.removeChild(t), r && (document.getSelection().removeAllRanges(), document.getSelection().addRange(r)), clearTimeout(this.copyTimeout), this.setState({
                            justCopied: !0
                        }, (function() {
                            e.copyTimeout = setTimeout((function() {
                                e.setState({
                                    justCopied: !1
                                })
                            }), 1500)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.match.params.id ? this.state.ready && !this.state.name ? (Object(h.b)("ClassPage cannot be rendered without this.state.name"), a.a.createElement(l.a, {
                            to: "/404"
                        })) : a.a.createElement("div", {
                            className: f.isMobile ? _.a.mBody : _.a.body
                        }, a.a.createElement(v.a, {
                            title: "".concat(this.state.ready ? this.state.name : "Class", " | Blooket"),
                            desc: "Manage your class by adding students and tracking their progress or assigning live games and homework."
                        }), a.a.createElement(b.a, {
                            history: this.props.history,
                            page: "Dashboard"
                        }), a.a.createElement("div", {
                            className: _.a.regularBodyMax
                        }, this.state.ready ? a.a.createElement("div", {
                            className: g.a.fullContainer
                        }, a.a.createElement("div", {
                            className: g.a.header
                        }, a.a.createElement("div", {
                            className: g.a.headerText
                        }, this.state.name), a.a.createElement("div", {
                            className: g.a.headerBar,
                            style: {
                                backgroundColor: this.state.color
                            }
                        })), a.a.createElement("div", {
                            className: g.a.headerButtons
                        }, a.a.createElement("div", {
                            className: g.a.button,
                            style: {
                                color: "#fff",
                                backgroundColor: this.state.color
                            },
                            role: "button",
                            tabIndex: 0,
                            onClick: this.copyToClipboard
                        }, a.a.createElement("i", {
                            className: p()("fas fa-plus-square", g.a.buttonIcon)
                        }), "Invite Link", this.state.justCopied ? a.a.createElement("div", {
                            className: g.a.copiedNotification
                        }, "Copied!") : null), a.a.createElement("div", {
                            className: g.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isEditing: !0,
                                    editName: e.state.name,
                                    editColor: e.state.color,
                                    editError: ""
                                })
                            }
                        }, a.a.createElement("i", {
                            className: p()("fas fa-pencil-alt", g.a.buttonIcon)
                        }), "Edit Class Info"), a.a.createElement("div", {
                            className: g.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isDeleting: !0
                                })
                            }
                        }, a.a.createElement("i", {
                            className: p()("fas fa-trash-alt", g.a.buttonIcon)
                        }), "Delete Class"), a.a.createElement(u.b, {
                            className: g.a.button,
                            to: "/dashboard?p=Classes"
                        }, a.a.createElement("i", {
                            className: p()("fas fa-reply", g.a.buttonIcon)
                        }), "Back to Classes")), this.state.students.length > 0 ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: g.a.studentsHeader
                        }, "Students"), a.a.createElement("div", {
                            className: g.a.studentsContainer
                        }, this.state.students.map((function(t) {
                            return a.a.createElement("div", {
                                className: g.a.studentInfo,
                                key: t.name
                            }, a.a.createElement(x.a, {
                                name: t.blook,
                                className: g.a.studentBlook
                            }), t.name, a.a.createElement("div", {
                                className: g.a.extra
                            }, a.a.createElement("a", {
                                className: g.a.extraRow,
                                href: "".concat("https://dashboard.blooket.com", "/stats?id=").concat(t.id),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, a.a.createElement("i", {
                                className: p()(g.a.extraRowIcon, "fas fa-eye")
                            }), "View"), a.a.createElement("div", {
                                className: p()(g.a.extraRow, g.a.extraRowRed),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        kickUser: t
                                    })
                                }
                            }, a.a.createElement("i", {
                                className: p()(g.a.extraRowIcon, "fas fa-user-slash")
                            }), "Kick")))
                        })))) : a.a.createElement("div", {
                            className: g.a.noStudentsText
                        }, "No Students Yet")) : null), this.state.isDeleting ? a.a.createElement(w.a, {
                            text: "Do you really want to delete this class?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return e.onDeleteConfirm(!0)
                                },
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.onDeleteConfirm(!1)
                                },
                                color: "blue"
                            }
                        }) : this.state.isEditing ? a.a.createElement(w.a, {
                            text: "Edit the class name and/or color:",
                            loading: this.state.loading,
                            stringValue: this.state.editName,
                            stringChange: function(t) {
                                return e.setState({
                                    editName: t.target.value.slice(0, E.a),
                                    editError: ""
                                })
                            },
                            colorChange: function(t) {
                                return e.setState({
                                    editColor: t
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
                                    return e.setState({
                                        isEditing: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.kickUser ? a.a.createElement(w.a, {
                            text: "Kick ".concat(this.state.kickUser.name, " from the class?"),
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return e.onKickUser()
                                },
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        kickUser: null
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : (Object(h.b)("ClassPage cannot be rendered without id"), void(window.location.href = "".concat("https://id.blooket.com", "/login")))
                    }
                }]) && L(t.prototype, r), o && L(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            F.propTypes = {
                match: c.a.object,
                history: c.a.object.isRequired,
                user: c.a.object
            };
            t.a = Object(C.c)(Object(l.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(F)))
        },
        p64V: function(e, t, r) {
            "use strict";
            (function(e) {
                var o = r("q1tI"),
                    a = r.n(o),
                    n = r("ANjH"),
                    i = r("/MKj"),
                    s = r("17x9"),
                    c = r.n(s),
                    l = r("Ty5D"),
                    u = r("TSYQ"),
                    f = r.n(u),
                    d = r("yzbm"),
                    p = r("WjD0"),
                    h = r.n(p),
                    m = r("H1WH"),
                    _ = r("FKJl"),
                    y = r("Xst1"),
                    g = r.n(y),
                    b = r("Uba3"),
                    v = r.n(b),
                    w = r("Ip1f"),
                    x = r("AwcY"),
                    C = r("XTAU"),
                    E = r("XOuL"),
                    k = r("pkss"),
                    j = r("ca/f"),
                    O = r("74sb"),
                    S = r("E8Bj"),
                    N = r("swc+"),
                    I = r("qnYv"),
                    L = r("i4/Q"),
                    B = r("lmLo");

                function T(e) {
                    return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function P(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, o)
                    }
                    return r
                }

                function R(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? P(Object(r), !0).forEach((function(t) {
                            U(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function U(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function F() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    F = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        r = t.hasOwnProperty,
                        o = "function" == typeof Symbol ? Symbol : {},
                        a = o.iterator || "@@iterator",
                        n = o.asyncIterator || "@@asyncIterator",
                        i = o.toStringTag || "@@toStringTag";

                    function s(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        s({}, "")
                    } catch (e) {
                        s = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function c(e, t, r, o) {
                        var a = t && t.prototype instanceof f ? t : f,
                            n = Object.create(a.prototype),
                            i = new C(o || []);
                        return n._invoke = function(e, t, r) {
                            var o = "suspendedStart";
                            return function(a, n) {
                                if ("executing" === o) throw new Error("Generator is already running");
                                if ("completed" === o) {
                                    if ("throw" === a) throw n;
                                    return k()
                                }
                                for (r.method = a, r.arg = n;;) {
                                    var i = r.delegate;
                                    if (i) {
                                        var s = v(i, r);
                                        if (s) {
                                            if (s === u) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if ("suspendedStart" === o) throw o = "completed", r.arg;
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    o = "executing";
                                    var c = l(e, t, r);
                                    if ("normal" === c.type) {
                                        if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                        return {
                                            value: c.arg,
                                            done: r.done
                                        }
                                    }
                                    "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                                }
                            }
                        }(e, r, i), n
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

                    function f() {}

                    function d() {}

                    function p() {}
                    var h = {};
                    s(h, a, (function() {
                        return this
                    }));
                    var m = Object.getPrototypeOf,
                        _ = m && m(m(E([])));
                    _ && _ !== t && r.call(_, a) && (h = _);
                    var y = p.prototype = f.prototype = Object.create(h);

                    function g(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            s(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function b(e, t) {
                        var o;
                        this._invoke = function(a, n) {
                            function i() {
                                return new t((function(o, i) {
                                    ! function o(a, n, i, s) {
                                        var c = l(e[a], e, n);
                                        if ("throw" !== c.type) {
                                            var u = c.arg,
                                                f = u.value;
                                            return f && "object" == T(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                                o("next", e, i, s)
                                            }), (function(e) {
                                                o("throw", e, i, s)
                                            })) : t.resolve(f).then((function(e) {
                                                u.value = e, i(u)
                                            }), (function(e) {
                                                return o("throw", e, i, s)
                                            }))
                                        }
                                        s(c.arg)
                                    }(a, n, o, i)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    }

                    function v(e, t) {
                        var r = e.iterator[t.method];
                        if (void 0 === r) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return u
                        }
                        var o = l(r, e.iterator, t.arg);
                        if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                        var a = o.arg;
                        return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                            var t = e[a];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var o = -1,
                                    n = function t() {
                                        for (; ++o < e.length;)
                                            if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return n.next = n
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
                    return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, g(b.prototype), s(b.prototype, n, (function() {
                        return this
                    })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                        void 0 === n && (n = Promise);
                        var i = new b(c(t, r, o, a), n);
                        return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                        return this
                    })), s(y, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var r in e) t.push(r);
                        return t.reverse(),
                            function r() {
                                for (; t.length;) {
                                    var o = t.pop();
                                    if (o in e) return r.value = o, r.done = !1, r
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

                            function o(r, o) {
                                return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var n = this.tryEntries[a],
                                    i = n.completion;
                                if ("root" === n.tryLoc) return o("end");
                                if (n.tryLoc <= this.prev) {
                                    var s = r.call(n, "catchLoc"),
                                        c = r.call(n, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                        if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o];
                                if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                    var n = a;
                                    break
                                }
                            }
                            n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                            var i = n ? n.completion : {};
                            return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                    var o = r.completion;
                                    if ("throw" === o.type) {
                                        var a = o.arg;
                                        x(r)
                                    }
                                    return a
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

                function D(e, t, r, o, a, n, i) {
                    try {
                        var s = e[n](i),
                            c = s.value
                    } catch (e) {
                        return void r(e)
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, a)
                }

                function z(e) {
                    return function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(o, a) {
                            var n = e.apply(t, r);

                            function i(e) {
                                D(n, o, a, i, s, "next", e)
                            }

                            function s(e) {
                                D(n, o, a, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }
                }

                function A(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function H(e, t) {
                    return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function M(e) {
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
                        var r, o = q(e);
                        if (t) {
                            var a = q(this).constructor;
                            r = Reflect.construct(o, arguments, a)
                        } else r = o.apply(this, arguments);
                        return G(this, r)
                    }
                }

                function G(e, t) {
                    if (t && ("object" === T(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return Y(e)
                }

                function Y(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function q(e) {
                    return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var K = function(t) {
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
                    }(l, t);
                    var r, o, n, i, s, c = M(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = c.call(this, e)).state = {
                            game: {
                                title: "",
                                author: "",
                                desc: "",
                                id: "",
                                coverImage: {},
                                private: !1
                            },
                            user: null,
                            importing: !1,
                            coverImageFile: {},
                            coverImageURL: "",
                            titleError: "",
                            descError: "",
                            imageError: "",
                            uploadingURL: !1,
                            tempURL: "",
                            urlError: "",
                            method: 3,
                            loading: !1,
                            showUnsplash: !1,
                            unsplashURL: ""
                        }, t.onCreate = t.onCreate.bind(Y(t)), t.onTitleUpdate = t.onTitleUpdate.bind(Y(t)), t.onDescUpdate = t.onDescUpdate.bind(Y(t)), t.onURLUpdate = t.onURLUpdate.bind(Y(t)), t.onImageDrop = t.onImageDrop.bind(Y(t)), t.onURLSubmit = t.onURLSubmit.bind(Y(t)), t
                    }
                    return r = l, (o = [{
                        key: "componentDidMount",
                        value: (s = z(F().mark((function e() {
                            var t;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (t = e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return Object(_.b)("CreatePage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 7:
                                        this.setState({
                                            user: t
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "onCreate",
                        value: function(t, r, o, a) {
                            var n = this;
                            if (t && t.preventDefault(), !this.state.loading) {
                                this.setState({
                                    loading: !0
                                });
                                var i = Object(O.t)(this.state.game.title),
                                    s = Object(O.s)(this.state.game.desc);
                                if (this.setState({
                                        titleError: i,
                                        descError: s
                                    }), i || s) this.setState({
                                    loading: !1
                                });
                                else {
                                    if (1 === this.state.method && !r) return void this.setState({
                                        importing: !0,
                                        loading: !1
                                    });
                                    if (2 === this.state.method && !a) return void this.setState({
                                        importing: !0,
                                        loading: !1
                                    });
                                    this.setState({
                                        game: R(R({}, this.state.game), {}, {
                                            author: this.state.user.name
                                        })
                                    }, (function() {
                                        if (n.state.coverImageFile && n.state.coverImageFile.size) {
                                            var t = new h.a;
                                            t.append("file", n.state.coverImageFile), t.append("tags", ""), t.append("upload_preset", "normal"), t.append("api_key", e.env.CLOUDINARY_API_KEY), t.append("timestamp", parseInt(Date.now() / 1e3, 10)), N.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", t, {
                                                headers: {
                                                    "X-Requested-With": "XMLHttpRequest"
                                                },
                                                withCredentials: !1
                                            }).then((function(e) {
                                                var t = {};
                                                t.url = e.data.secure_url, t.id = e.data.public_id, I.a.post("/api/games", {
                                                    title: n.state.game.title.trim(),
                                                    author: n.state.game.author,
                                                    desc: n.state.game.desc.trim(),
                                                    coverImage: t,
                                                    private: n.state.game.private
                                                }).then((function(e) {
                                                    n.setState({
                                                        game: R(R({}, n.state.game), {}, {
                                                            id: e.data._id,
                                                            coverImage: t
                                                        })
                                                    }, (function() {
                                                        r ? I.a.put("/api/games/quizlet-import", {
                                                            text: r,
                                                            isFlipped: o,
                                                            gameId: n.state.game.id,
                                                            startNum: 0
                                                        }).then((function() {
                                                            n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                        })).catch((function() {
                                                            n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                        })) : a ? I.a.put("/api/games/spreadsheet-import", {
                                                            gameId: n.state.game.id,
                                                            spreadsheetData: a
                                                        }).then((function() {
                                                            n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                        })).catch((function() {
                                                            n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                        })) : n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                    }))
                                                })).catch((function(e) {
                                                    if (Object(_.b)(e), e.response) {
                                                        var t = {};
                                                        e.response.data.includes("description") ? t.descError = e.response.data : t.titleError = e.response.data, n.setState(R(R({}, t), {}, {
                                                            loading: !1
                                                        }))
                                                    }
                                                }))
                                            })).catch((function(e) {
                                                Object(_.b)(e)
                                            }))
                                        } else {
                                            var i = {};
                                            n.state.coverImageURL ? i.url = n.state.coverImageURL : n.state.unsplashURL && (i.url = n.state.unsplashURL, i.id = "u"), I.a.post("/api/games", {
                                                title: n.state.game.title.trim(),
                                                author: n.state.game.author,
                                                desc: n.state.game.desc.trim(),
                                                coverImage: i,
                                                private: n.state.game.private
                                            }).then((function(e) {
                                                n.setState({
                                                    game: R(R({}, n.state.game), {}, {
                                                        id: e.data._id,
                                                        coverImage: i
                                                    })
                                                }, (function() {
                                                    r ? I.a.put("/api/games/quizlet-import", {
                                                        text: r,
                                                        isFlipped: o,
                                                        gameId: n.state.game.id,
                                                        startNum: 0
                                                    }).then((function() {
                                                        n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                    })).catch((function() {
                                                        n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                    })) : a ? I.a.put("/api/games/spreadsheet-import", {
                                                        gameId: n.state.game.id,
                                                        spreadsheetData: a
                                                    }).then((function() {
                                                        n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                    })).catch((function() {
                                                        n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                    })) : n.props.history.push("/edit?id=".concat(n.state.game.id))
                                                }))
                                            })).catch((function(e) {
                                                if (Object(_.b)(e), e.response) {
                                                    var t = {};
                                                    e.response.data.includes("description") ? t.descError = e.response.data : t.titleError = e.response.data, n.setState(R(R({}, t), {}, {
                                                        loading: !1
                                                    }))
                                                }
                                            }))
                                        }
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "onTitleUpdate",
                        value: function(e) {
                            this.setState({
                                game: R(R({}, this.state.game), {}, {
                                    title: e.target.value.slice(0, O.b)
                                }),
                                titleError: ""
                            })
                        }
                    }, {
                        key: "onDescUpdate",
                        value: function(e) {
                            this.setState({
                                game: R(R({}, this.state.game), {}, {
                                    desc: e.target.value.slice(0, O.a)
                                }),
                                descError: ""
                            })
                        }
                    }, {
                        key: "onURLUpdate",
                        value: function(e) {
                            this.setState({
                                tempURL: e.target.value,
                                urlError: ""
                            })
                        }
                    }, {
                        key: "onURLSubmit",
                        value: (i = z(F().mark((function e(t) {
                            var r, o = this;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), !this.loading) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return this.loading = !0, this.setState({
                                            loading: !0
                                        }), r = "", this.state.tempURL || (r = "Where's the URL?"), e.next = 9, new Promise((function(e) {
                                            I.a.get("/api/games/is-image", {
                                                params: {
                                                    url: o.state.tempURL
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(!1)
                                            }))
                                        }));
                                    case 9:
                                        e.sent || (r = "We can't find a supported image for that URL."), r ? this.setState({
                                            imageError: "",
                                            urlError: r,
                                            loading: !1
                                        }) : this.setState({
                                            imageError: "",
                                            coverImageURL: this.state.tempURL,
                                            coverImageFile: {},
                                            urlError: "",
                                            tempURL: "",
                                            uploadingURL: !1,
                                            loading: !1
                                        }), this.loading = !1;
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "onImageDrop",
                        value: function(e) {
                            var t = e[0];
                            t ? this.setState({
                                imageError: "",
                                coverImageFile: t,
                                coverImageURL: URL.createObjectURL(t)
                            }) : this.setState({
                                imageError: "Error Uploading the File.",
                                coverImageFile: {},
                                coverImageURL: ""
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, r = this,
                                o = a.a.createRef();
                            return a.a.createElement("div", {
                                className: m.isMobile ? g.a.mBody : g.a.body
                            }, a.a.createElement(C.a, {
                                title: "Set Creator | Blooket",
                                desc: "Sets are groups of questions that are used in games. Use this page to create a set with a title, description, cover image, and privacy setting."
                            }), a.a.createElement(L.a, {
                                user: this.state.user,
                                page: "Set Creator"
                            }), a.a.createElement("div", {
                                className: g.a.profileBody
                            }, a.a.createElement("div", {
                                className: v.a.header
                            }, "Question Set Creator"), a.a.createElement("form", {
                                onSubmit: this.onCreate,
                                className: v.a.inputContainer
                            }, a.a.createElement("div", {
                                className: v.a.wideContainer
                            }, a.a.createElement("div", {
                                className: v.a.dropHolder
                            }, this.state.coverImageURL || this.state.unsplashURL ? a.a.createElement("div", {
                                className: v.a.imgContainer
                            }, a.a.createElement("img", {
                                src: this.state.coverImageURL || this.state.unsplashURL,
                                alt: "Upload",
                                className: v.a.coverImage
                            }), a.a.createElement("div", {
                                className: v.a.removeImageContainer
                            }), a.a.createElement("div", {
                                className: v.a.removeImageButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return r.setState({
                                        coverImageURL: "",
                                        coverImageFile: {},
                                        unsplashURL: ""
                                    })
                                }
                            }, a.a.createElement("i", {
                                className: f()(v.a.removeImageIcon, "fas fa-times")
                            }), a.a.createElement("div", {
                                className: v.a.removeImageText
                            }, "Remove"))) : a.a.createElement(d.a, {
                                multiple: !1,
                                accept: "image/jpeg, image/png, image/gif",
                                onDropAccepted: this.onImageDrop,
                                onDropRejected: function() {
                                    return r.setState({
                                        imageError: "Image Denied (Check Size < 2.5 MB)"
                                    })
                                },
                                className: v.a.dropContainer,
                                activeClassName: v.a.activeDropContainer,
                                ref: o,
                                maxSize: 25e5,
                                disableClick: !0
                            }, a.a.createElement("div", {
                                className: v.a.dropHeader
                            }, "Cover Image"), a.a.createElement("div", {
                                className: v.a.dropText
                            }, "Drag and Drop or"), a.a.createElement("div", {
                                className: v.a.uploadButtonContainer
                            }, a.a.createElement(B.a, {
                                outsideClass: v.a.uploadButton,
                                color: "#fff",
                                onClick: function() {
                                    return r.setState({
                                        showUnsplash: !0
                                    })
                                }
                            }, a.a.createElement("div", {
                                className: v.a.uploadButtonInside
                            }, a.a.createElement("i", {
                                className: f()(v.a.uploadIcon, "fas fa-image")
                            }), a.a.createElement("div", {
                                className: v.a.uploadText
                            }, "Image", a.a.createElement("br", null), "Gallery"))), a.a.createElement(B.a, {
                                outsideClass: v.a.uploadButton,
                                color: "#fff",
                                onClick: function() {
                                    return o.current.open()
                                }
                            }, a.a.createElement("div", {
                                className: v.a.uploadButtonInside
                            }, a.a.createElement("i", {
                                className: f()(v.a.uploadIcon, "fas fa-file-upload")
                            }), a.a.createElement("div", {
                                className: v.a.uploadText
                            }, "Upload", a.a.createElement("br", null), "a File"))), a.a.createElement(B.a, {
                                outsideClass: v.a.uploadButton,
                                color: "#fff",
                                onClick: function() {
                                    return r.setState({
                                        uploadingURL: !0,
                                        urlError: ""
                                    })
                                }
                            }, a.a.createElement("div", {
                                className: v.a.uploadButtonInside
                            }, a.a.createElement("i", {
                                className: f()(v.a.uploadIcon, "fas fa-link")
                            }), a.a.createElement("div", {
                                className: v.a.uploadText
                            }, "Upload", a.a.createElement("br", null), "by URL")))))), a.a.createElement("div", {
                                className: v.a.upperRightContainer
                            }, a.a.createElement("div", {
                                className: v.a.titleHeader
                            }, "Title ", a.a.createElement("span", {
                                style: {
                                    fontSize: 24,
                                    opacity: .8
                                }
                            }, "(required)")), a.a.createElement("input", {
                                className: f()(v.a.input, (e = {}, U(e, v.a.inputFilled, this.state.game.title), U(e, v.a.inputError, this.state.titleError), e)),
                                onChange: this.onTitleUpdate,
                                value: this.state.game.title,
                                type: "text",
                                placeholder: "Add a descriptive title",
                                autoFocus: m.isMobile ? "" : "autofocus"
                            }), a.a.createElement("div", {
                                className: v.a.descHeader
                            }, "Description"), a.a.createElement("textarea", {
                                className: f()(v.a.descInput, (t = {}, U(t, v.a.inputFilled, this.state.game.desc), U(t, v.a.inputError, this.state.descError), t)),
                                onChange: this.onDescUpdate,
                                value: this.state.game.desc,
                                placeholder: "Tell users about your question set",
                                "data-gramm_editor": "false"
                            }))), a.a.createElement("div", {
                                className: v.a.wideContainer,
                                style: {
                                    alignItems: "flex-start"
                                }
                            }, a.a.createElement("div", {
                                className: v.a.categoryContainer
                            }, a.a.createElement("div", {
                                className: v.a.categoryHeader
                            }, "Privacy Setting"), a.a.createElement("div", {
                                className: v.a.categoryDesc
                            }, "This decides who can find and play your question set"), a.a.createElement("div", {
                                className: v.a.privacyRow
                            }, a.a.createElement("div", {
                                className: f()(v.a.privacyCheckbox, U({}, v.a.privacyCheckboxChecked, !this.state.game.private)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    r.setState({
                                        game: R(R({}, r.state.game), {}, {
                                            private: !r.state.game.private
                                        })
                                    })
                                }
                            }, a.a.createElement("div", {
                                className: v.a.privacyCheckboxSquare
                            })), a.a.createElement("div", {
                                className: v.a.privacyText
                            }, this.state.game.private ? "Private" : "Public"), a.a.createElement("div", {
                                className: v.a.privacyTextDesc
                            }, this.state.game.private ? "Only Playable by You" : "Playable by Everyone"))), a.a.createElement("div", {
                                className: v.a.categoryContainer
                            }, a.a.createElement("div", {
                                className: v.a.categoryHeader
                            }, "Creation Method"), a.a.createElement("div", {
                                className: v.a.categoryDesc
                            }, "This decides how you will start adding questions to your set"), a.a.createElement("div", {
                                className: v.a.methodContainer
                            }, a.a.createElement(B.a, {
                                outsideClass: v.a.methodButton,
                                color: 3 === this.state.method ? "#0bc2cf" : "#fff",
                                onClick: function() {
                                    return r.setState({
                                        method: 3
                                    })
                                }
                            }, a.a.createElement("div", {
                                className: f()(v.a.methodButtonInside, U({}, v.a.methodSelected, 3 === this.state.method))
                            }, a.a.createElement("i", {
                                className: f()(v.a.methodIcon, "fas fa-edit")
                            }), a.a.createElement("div", {
                                className: v.a.methodHeader
                            }, "Manual"))), a.a.createElement(B.a, {
                                outsideClass: v.a.methodButton,
                                color: 1 === this.state.method ? "#4053b3" : "#fff",
                                onClick: function() {
                                    return r.setState({
                                        method: 1
                                    })
                                }
                            }, a.a.createElement("div", {
                                className: f()(v.a.methodButtonInside, U({}, v.a.methodSelected, 1 === this.state.method))
                            }, a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1560736878/Media/QuizletLogo.png",
                                alt: "Quizlet",
                                className: f()(v.a.quizletImage, U({}, v.a.quizletImageSelected, 1 === this.state.method)),
                                draggable: !1
                            }), a.a.createElement("div", {
                                className: v.a.methodHeader
                            }, "Quizlet Import"))), a.a.createElement(B.a, {
                                outsideClass: v.a.methodButton,
                                color: 2 === this.state.method ? "#007337" : "#fff",
                                onClick: function() {
                                    return r.setState({
                                        method: 2
                                    })
                                }
                            }, a.a.createElement("div", {
                                className: f()(v.a.methodButtonInside, U({}, v.a.methodSelected, 2 === this.state.method))
                            }, a.a.createElement("i", {
                                className: f()(v.a.methodIcon, "fas fa-table")
                            }), a.a.createElement("div", {
                                className: v.a.methodHeader
                            }, "CSV Import")))))), a.a.createElement("div", {
                                className: v.a.bottomRow
                            }, this.state.titleError || this.state.descError || this.state.imageError ? a.a.createElement("div", {
                                className: v.a.errorContainer
                            }, a.a.createElement("i", {
                                className: f()(v.a.errorIcon, "fas fa-times-circle")
                            }), this.state.titleError || this.state.descError || this.state.imageError) : null, a.a.createElement("div", {
                                className: v.a.buttonWrapper
                            }, this.state.loading ? a.a.createElement(E.a, null) : a.a.createElement(B.a, {
                                color: "#0bc2cf",
                                onClick: this.onCreate
                            }, a.a.createElement("div", {
                                className: v.a.createButton
                            }, "Create")))), a.a.createElement("div", {
                                style: {
                                    height: 30
                                }
                            }), a.a.createElement("input", {
                                type: "submit",
                                style: {
                                    opacity: 0,
                                    display: "none"
                                }
                            })), this.state.uploadingURL ? a.a.createElement(j.a, {
                                text: "Enter Image URL Address:",
                                loading: this.state.loading,
                                stringValue: this.state.tempURL,
                                stringChange: this.onURLUpdate,
                                stringPlaceholder: "Image URL",
                                onSubmit: this.onURLSubmit,
                                error: this.state.urlError,
                                buttonOne: {
                                    text: "Upload",
                                    click: this.onURLSubmit,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return r.setState({
                                            uploadingURL: !1,
                                            tempURL: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null), this.state.importing ? 1 === this.state.method ? a.a.createElement("div", {
                                className: g.a.modal
                            }, a.a.createElement(w.a, {
                                done: this.onCreate,
                                close: function() {
                                    return r.setState({
                                        importing: !1
                                    })
                                }
                            })) : a.a.createElement("div", {
                                className: g.a.modal
                            }, a.a.createElement(x.a, {
                                done: this.onCreate,
                                close: function() {
                                    return r.setState({
                                        importing: !1
                                    })
                                }
                            })) : null, this.state.showUnsplash ? a.a.createElement(k.a, {
                                select: function(e) {
                                    return r.setState({
                                        showUnsplash: !1,
                                        unsplashURL: e
                                    })
                                },
                                close: function() {
                                    return r.setState({
                                        showUnsplash: !1
                                    })
                                }
                            }) : null)
                        }
                    }]) && A(r.prototype, o), n && A(r, n), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
                K.propTypes = {
                    history: c.a.object.isRequired,
                    user: c.a.object
                };
                t.a = Object(S.c)(Object(l.g)(Object(i.b)((function() {
                    return {}
                }), (function(e) {
                    return Object(n.b)({}, e)
                }))(K)))
            }).call(this, r("8oxB"))
        },
        rfo6: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__header___1mCVl-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__container___2A6Gp-camelCase{display:grid;align-items:flex-start;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:10px 5%}.styles__classInside___wK79a-camelCase{width:255px;min-height:190px;display:flex;flex-direction:column;justify-content:space-between;color:#fff}.styles__name___2jSjK-camelCase{font-size:34px;line-height:36px;font-weight:700;margin:10px 5% 30px;word-wrap:break-word}.styles__studentsText___1sgEM-camelCase{font-size:20px;margin:0 5%;text-align:right}.styles__addButtonInside___2jU2--camelCase{width:200px;height:30px;display:flex;flex-direction:row;align-items:center;color:#3a3a3a}.styles__addIcon___Wovoi-camelCase{font-size:22px;padding:0 5px;margin-right:3px}.styles__addText___3OeFB-camelCase{font-size:24px;font-weight:700}.styles__bigContainer___2yBVm-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:95%;margin:50px auto}.styles__bigText___2TwdE-camelCase{font-family:Nunito,sans-serif;font-size:40px;line-height:44px;font-weight:700;margin:50px 5% 30px;width:90%;text-align:center;color:#3a3a3a}.styles__upgradeButtonInside___2X4bP-camelCase{width:180px;height:50px;color:#fff;font-size:30px;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center}", ""]), t.locals = {
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
        "t/SN": function(e, t, r) {
            var o = r("rfo6");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        "xP+p": function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return q
            })), r.d(t, "c", (function() {
                return X
            }));
            var o = r("q1tI"),
                a = r.n(o),
                n = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("4HzQ"),
                d = r("TSYQ"),
                p = r.n(d),
                h = r("FKJl"),
                m = r("E8Bj"),
                _ = r("byOs"),
                y = r.n(_),
                g = r("Xst1"),
                b = r.n(g),
                v = r("XTAU"),
                w = r("ca/f"),
                x = r("0oXL"),
                C = r("lmLo"),
                E = r("MDrD"),
                k = r("4otK"),
                j = r("sfIM"),
                O = r("1u4q"),
                S = r("pMTK"),
                N = r("74sb"),
                I = r("qnYv"),
                L = r("i4/Q"),
                B = r("LHn/");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function P(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var o, a, n = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        s = !0, a = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return U(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return U(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
                return o
            }

            function F() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                F = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        n = Object.create(a.prototype),
                        i = new C(o || []);
                    return n._invoke = function(e, t, r) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return k()
                            }
                            for (r.method = a, r.arg = n;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = v(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === o) throw o = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), n
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

                function f() {}

                function d() {}

                function p() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(E([])));
                _ && _ !== t && r.call(_, a) && (h = _);
                var y = p.prototype = f.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function i() {
                            return new t((function(o, i) {
                                ! function o(a, n, i, s) {
                                    var c = l(e[a], e, n);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == T(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, i, s)
                                        }), (function(e) {
                                            o("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return o("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, n, o, i)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = p, s(y, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, o, a, n) {
                    void 0 === n && (n = Promise);
                    var i = new b(c(t, r, o, a), n);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, a, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
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

                        function o(r, o) {
                            return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                i = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var s = r.call(n, "catchLoc"),
                                    c = r.call(n, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (s) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var i = n ? n.completion : {};
                        return i.type = e, i.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(i)
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
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(r)
                                }
                                return a
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

            function D(e, t, r, o, a, n, i) {
                try {
                    var s = e[n](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function z(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function A(e, t) {
                return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, o = Y(e);
                    if (t) {
                        var a = Y(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return M(this, r)
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

            function Y(e) {
                return (Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
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
                W = {
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
                V = function(e) {
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
                        }), t && A(e, t)
                    }(c, e);
                    var t, r, o, n, i, s = H(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = s.call(this, e)).state = {
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
                        }, t.here = !0, t.setBlook = t.setBlook.bind(G(t)), t.setNewBlooks = t.setNewBlooks.bind(G(t)), t.sellBlook = t.sellBlook.bind(G(t)), t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: (n = F().mark((function e() {
                            var t, r = this;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (t = e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return Object(h.b)("BlooksPage cannot mount without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 7:
                                        this.setState({
                                            user: t
                                        }), I.a.get("/api/users/blooks").then((function(e) {
                                            r.setNewBlooks(e.data, r.state.showFree)
                                        })).catch((function(e) {
                                            Object(h.b)(e)
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), i = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, o) {
                                var a = n.apply(e, t);

                                function i(e) {
                                    D(a, r, o, i, s, "next", e)
                                }

                                function s(e) {
                                    D(a, r, o, i, s, "throw", e)
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
                        value: function(e) {
                            (this.state.blookData[e] || j.a.includes(e)) && this.setState({
                                blook: e,
                                showMobileBlooks: !1,
                                showFree: !this.state.showMobileBlooks && this.state.showFree,
                                showPacks: !this.state.showMobileBlooks && this.state.showPacks
                            })
                        }
                    }, {
                        key: "setNewBlooks",
                        value: function(e, t) {
                            var r = [];
                            if (Object.entries(E.a).forEach((function(o) {
                                    var a = R(o, 2),
                                        n = a[0],
                                        i = a[1];
                                    r.includes(i.set) || !e[n] && !W[i.set].visible || W[i.set].free && !t || r.push(i.set)
                                })), !this.state.blook || !e[this.state.blook]) {
                                var o = Object.keys(e);
                                0 === o.length ? this.setState({
                                    blook: Object(N.l)(j.a)
                                }) : this.setState({
                                    blook: Object(N.l)(o)
                                })
                            }
                            this.setState({
                                ready: !0,
                                selling: !1,
                                loadingSell: !1,
                                blookData: e,
                                allSets: r,
                                showFree: t
                            })
                        }
                    }, {
                        key: "sellBlook",
                        value: function(e, t) {
                            var r = this;
                            if (e.preventDefault(), !t || !this.state.numToSell) return this.setState({
                                selling: !1
                            });
                            this.setState({
                                loadingSell: !0
                            }), I.a.put("/api/users/sellblook", {
                                name: this.state.user.name,
                                blook: this.state.blook,
                                numSold: this.state.numToSell
                            }).then((function(e) {
                                r.here && r.setNewBlooks(e.data.unlocks, r.state.showFree)
                            })).catch((function(e) {
                                Object(h.b)(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return a.a.createElement("div", {
                                className: u.isMobile ? b.a.mBody : b.a.body,
                                id: "body"
                            }, a.a.createElement(v.a, {
                                title: "My Blooks | Blooket",
                                desc: "Blooks represent players and compete in races during games. Use this page to view, sell, and manage your Blooks."
                            }), a.a.createElement(L.a, {
                                user: this.state.user,
                                page: "Blooks"
                            }), this.state.ready ? a.a.createElement("div", {
                                className: b.a.profileBody
                            }, a.a.createElement("div", {
                                className: y.a.topButtonRow
                            }, a.a.createElement("div", {
                                className: y.a.settingButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setNewBlooks(e.state.blookData, !e.state.showFree)
                                }
                            }, this.state.showFree ? "Hide Free Blooks" : "Show Free Blooks"), a.a.createElement("div", {
                                className: y.a.settingButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showPacks: !e.state.showPacks
                                    })
                                }
                            }, this.state.showPacks ? "Hide Packs" : "Show Packs")), a.a.createElement("div", {
                                className: p()(y.a.left, P({}, y.a.mShowLeft, this.state.showMobileBlooks))
                            }, this.state.showPacks ? a.a.createElement("div", {
                                className: y.a.blooksHolder
                            }, this.state.allSets.map((function(t) {
                                return a.a.createElement("div", {
                                    className: y.a.setHolder,
                                    key: t
                                }, a.a.createElement("div", {
                                    className: y.a.setTop
                                }, a.a.createElement("div", {
                                    className: y.a.setTopBackground,
                                    style: {
                                        backgroundImage: "url(".concat(K[t], ")")
                                    }
                                }), a.a.createElement("div", {
                                    className: y.a.setText
                                }, "".concat(t, " Pack")), a.a.createElement("div", {
                                    className: y.a.setDivider
                                })), a.a.createElement("div", {
                                    className: y.a.setBlooks
                                }, Object.entries(E.a).filter((function(r) {
                                    var o = R(r, 2),
                                        a = o[0];
                                    return o[1].set === t && (e.state.blookData[a] || !k.a.includes(a))
                                })).map((function(t) {
                                    var r = R(t, 1)[0];
                                    return a.a.createElement("div", {
                                        className: y.a.blookContainer,
                                        key: r,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return e.setBlook(r)
                                        }
                                    }, a.a.createElement(x.a, {
                                        name: r,
                                        className: p()(y.a.blook, P({}, y.a.lockedBlook, !j.a.includes(r) && !e.state.blookData[r]))
                                    }), j.a.includes(r) || e.state.blookData[r] ? j.a.includes(r) ? null : a.a.createElement("div", {
                                        className: y.a.blookText,
                                        style: {
                                            backgroundColor: N.o[Object(S.a)(r)]
                                        }
                                    }, e.state.blookData[r] ? Object(N.k)(e.state.blookData[r]) : 0) : a.a.createElement("i", {
                                        className: p()("fas fa-lock", y.a.blookLock)
                                    }))
                                }))))
                            }))) : a.a.createElement("div", {
                                className: y.a.soloBlooksHolder
                            }, Object.entries(E.a).filter((function(t) {
                                var r = R(t, 2),
                                    o = r[0],
                                    a = r[1];
                                return !(W[a.set].free && !e.state.showFree) && (e.state.blookData[o] || !k.a.includes(o))
                            })).map((function(t) {
                                var r = R(t, 1)[0];
                                return a.a.createElement("div", {
                                    className: y.a.blookContainer,
                                    key: r,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setBlook(r)
                                    }
                                }, a.a.createElement(x.a, {
                                    name: r,
                                    className: p()(y.a.blook, P({}, y.a.lockedBlook, !j.a.includes(r) && !e.state.blookData[r]))
                                }), j.a.includes(r) || e.state.blookData[r] ? j.a.includes(r) ? null : a.a.createElement("div", {
                                    className: y.a.blookText,
                                    style: {
                                        backgroundColor: N.o[Object(S.a)(r)]
                                    }
                                }, e.state.blookData[r] ? Object(N.k)(e.state.blookData[r]) : 0) : a.a.createElement("i", {
                                    className: p()("fas fa-lock", y.a.blookLock)
                                }))
                            })))), a.a.createElement(C.a, {
                                outsideClass: y.a.mBlooksButton,
                                onClick: function() {
                                    return e.setState({
                                        showMobileBlooks: !0,
                                        showFree: !0,
                                        showPacks: !1
                                    })
                                },
                                color: "#9a49aa"
                            }, a.a.createElement("div", {
                                className: y.a.mBlooksButtonInside
                            }, "Change Blook")), a.a.createElement("div", {
                                className: y.a.right
                            }, a.a.createElement("img", {
                                src: q[E.a[this.state.blook].set] || "https://media.blooket.com/image/upload/v1657825741/Media/blooksUI/Highlighted_Background_Generic.svg",
                                alt: "Background",
                                className: y.a.rightBackground,
                                draggable: !1
                            }), a.a.createElement("div", {
                                className: y.a.rightTopText
                            }, a.a.createElement(f.Textfit, {
                                className: y.a.highlightedName,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: 40
                            }, this.state.blook), a.a.createElement("div", {
                                className: y.a.highlightedRarity,
                                style: {
                                    color: N.o[Object(S.a)(this.state.blook)]
                                }
                            }, Object(S.a)(this.state.blook))), a.a.createElement(x.a, {
                                name: this.state.blook,
                                className: y.a.rightBlook
                            }), a.a.createElement("div", {
                                className: y.a.highlightedBottom
                            }, j.a.includes(this.state.blook) ? "Free Blook" : this.state.blookData[this.state.blook] ? "".concat(Object(N.k)(this.state.blookData[this.state.blook]), " Owned") : "Locked"), a.a.createElement("div", {
                                className: y.a.rightBottom
                            })), a.a.createElement("div", {
                                className: y.a.rightButtonRow
                            }, a.a.createElement(C.a, {
                                outsideClass: y.a.rightButton,
                                onClick: function() {
                                    return e.setState({
                                        selling: !0,
                                        numToSell: 1
                                    })
                                },
                                color: "#1f77b4"
                            }, a.a.createElement("div", {
                                className: y.a.rightButtonInside
                            }, a.a.createElement("img", {
                                src: B.a.basic.token,
                                alt: "Token",
                                className: y.a.rightButtonImg,
                                draggable: !1
                            }), "Sell")))) : null, this.state.selling ? a.a.createElement(w.a, {
                                text: "Sell ".concat(this.state.blook, " Blooks for ").concat(Object(O.a)(this.state.blook), " tokens each:"),
                                loading: this.state.loadingSell,
                                numValue: this.state.numToSell,
                                numChange: function(t) {
                                    return e.setState({
                                        numToSell: Math.max(Math.min(t.target.value, e.state.blookData[e.state.blook]), 0)
                                    })
                                },
                                numTotal: this.state.blookData[this.state.blook],
                                buttonOne: {
                                    text: "Yes",
                                    click: function(t) {
                                        return e.sellBlook(t, !0)
                                    },
                                    color: "red"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function(t) {
                                        return e.sellBlook(t, !1)
                                    },
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && z(t.prototype, r), o && z(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(a.a.Component);
            V.propTypes = {
                user: c.a.object
            };
            t.a = Object(m.c)(Object(l.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(n.b)({}, e)
            }))(V)))
        }
    }
]);