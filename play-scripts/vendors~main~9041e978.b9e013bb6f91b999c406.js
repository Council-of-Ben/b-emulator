(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        UbBO: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Qi
                })), n.d(t, "b", (function() {
                    return Vi
                })), n.d(t, "c", (function() {
                    return Dt
                })), n.d(t, "d", (function() {
                    return $i
                })), n.d(t, "e", (function() {
                    return Qo
                })), n.d(t, "f", (function() {
                    return E
                })), n.d(t, "g", (function() {
                    return si
                })), n.d(t, "h", (function() {
                    return ui
                })), n.d(t, "i", (function() {
                    return eo
                })), n.d(t, "j", (function() {
                    return $o
                })), n.d(t, "k", (function() {
                    return Zo
                })), n.d(t, "l", (function() {
                    return ko
                })), n.d(t, "m", (function() {
                    return bo
                })), n.d(t, "n", (function() {
                    return Wo
                })), n.d(t, "o", (function() {
                    return Ko
                })), n.d(t, "p", (function() {
                    return Go
                })), n.d(t, "q", (function() {
                    return so
                })), n.d(t, "r", (function() {
                    return Jo
                })), n.d(t, "s", (function() {
                    return Xo
                })), n.d(t, "t", (function() {
                    return na
                })), n.d(t, "u", (function() {
                    return Po
                })), n.d(t, "v", (function() {
                    return No
                })), n.d(t, "w", (function() {
                    return yo
                })), n.d(t, "x", (function() {
                    return fo
                })), n.d(t, "y", (function() {
                    return vo
                })), n.d(t, "z", (function() {
                    return po
                })), n.d(t, "A", (function() {
                    return _o
                })), n.d(t, "B", (function() {
                    return ho
                })), n.d(t, "C", (function() {
                    return Ro
                })), n.d(t, "D", (function() {
                    return Do
                })), n.d(t, "E", (function() {
                    return Lo
                })), n.d(t, "F", (function() {
                    return Fo
                })), n.d(t, "G", (function() {
                    return to
                })), n.d(t, "H", (function() {
                    return Uo
                })), n.d(t, "I", (function() {
                    return Xi
                })), n.d(t, "J", (function() {
                    return Zi
                })), n.d(t, "K", (function() {
                    return no
                })), n.d(t, "L", (function() {
                    return ia
                })), n.d(t, "M", (function() {
                    return ta
                })), n.d(t, "N", (function() {
                    return ro
                })), n.d(t, "O", (function() {
                    return io
                })), n.d(t, "P", (function() {
                    return oo
                })), n.d(t, "Q", (function() {
                    return Eo
                })), n.d(t, "R", (function() {
                    return To
                })), n.d(t, "S", (function() {
                    return ao
                }));
                var r = n("WJvL"),
                    i = n("IuUc"),
                    o = n("H9WU"),
                    a = n("5pEQ");

                function s() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    s = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        n = t.hasOwnProperty,
                        r = "function" == typeof Symbol ? Symbol : {},
                        i = r.iterator || "@@iterator",
                        o = r.asyncIterator || "@@asyncIterator",
                        a = r.toStringTag || "@@toStringTag";

                    function u(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        u({}, "")
                    } catch (e) {
                        u = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function l(e, t, n, r) {
                        var i = t && t.prototype instanceof d ? t : d,
                            o = Object.create(i.prototype),
                            a = new I(r || []);
                        return o._invoke = function(e, t, n) {
                            var r = "suspendedStart";
                            return function(i, o) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === i) throw o;
                                    return S()
                                }
                                for (n.method = i, n.arg = o;;) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = b(a, n);
                                        if (s) {
                                            if (s === h) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if ("suspendedStart" === r) throw r = "completed", n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = "executing";
                                    var u = c(e, t, n);
                                    if ("normal" === u.type) {
                                        if (r = n.done ? "completed" : "suspendedYield", u.arg === h) continue;
                                        return {
                                            value: u.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                                }
                            }
                        }(e, n, a), o
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
                    var h = {};

                    function d() {}

                    function f() {}

                    function v() {}
                    var p = {};
                    u(p, i, (function() {
                        return this
                    }));
                    var _ = Object.getPrototypeOf,
                        y = _ && _(_(E([])));
                    y && y !== t && n.call(y, i) && (p = y);
                    var m = v.prototype = d.prototype = Object.create(p);

                    function g(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            u(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function w(e, t) {
                        var r;
                        this._invoke = function(i, o) {
                            function a() {
                                return new t((function(r, a) {
                                    ! function r(i, o, a, s) {
                                        var u = c(e[i], e, o);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                h = l.value;
                                            return h && "object" == k(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                                r("next", e, a, s)
                                            }), (function(e) {
                                                r("throw", e, a, s)
                                            })) : t.resolve(h).then((function(e) {
                                                l.value = e, a(l)
                                            }), (function(e) {
                                                return r("throw", e, a, s)
                                            }))
                                        }
                                        s(u.arg)
                                    }(i, o, r, a)
                                }))
                            }
                            return r = r ? r.then(a, a) : a()
                        }
                    }

                    function b(e, t) {
                        var n = e.iterator[t.method];
                        if (void 0 === n) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return h;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return h
                        }
                        var r = c(n, e.iterator, t.arg);
                        if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h;
                        var i = r.arg;
                        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                    }

                    function C(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function T(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function I(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(C, this), this.reset(!0)
                    }

                    function E(e) {
                        if (e) {
                            var t = e[i];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var r = -1,
                                    o = function t() {
                                        for (; ++r < e.length;)
                                            if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
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
                    return f.prototype = v, u(m, "constructor", v), u(v, "constructor", f), f.displayName = u(v, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, u(e, a, "GeneratorFunction")), e.prototype = Object.create(m), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, g(w.prototype), u(w.prototype, o, (function() {
                        return this
                    })), e.AsyncIterator = w, e.async = function(t, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new w(l(t, n, r, i), o);
                        return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                            return e.done ? e.value : a.next()
                        }))
                    }, g(m), u(m, a, "Generator"), u(m, i, (function() {
                        return this
                    })), u(m, "toString", (function() {
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
                    }, e.values = E, I.prototype = {
                        constructor: I,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e)
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
                                return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var o = this.tryEntries[i],
                                    a = o.completion;
                                if ("root" === o.tryLoc) return r("end");
                                if (o.tryLoc <= this.prev) {
                                    var s = n.call(o, "catchLoc"),
                                        u = n.call(o, "finallyLoc");
                                    if (s && u) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var i = this.tryEntries[r];
                                if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(a)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), h
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        T(n)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, n) {
                            return this.delegate = {
                                iterator: E(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = void 0), h
                        }
                    }, e
                }

                function u(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null == n) return;
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
                        } catch (e) {
                            s = !0, i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }(e, t) || m(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function l(e, t, n, r, i, o, a) {
                    try {
                        var s = e[o](a),
                            u = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    s.done ? t(u) : Promise.resolve(u).then(r, i)
                }

                function c(e, t) {
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
                }

                function h(e, t) {
                    return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function d(e) {
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
                        var n, r = p(e);
                        if (t) {
                            var i = p(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else n = r.apply(this, arguments);
                        return f(this, n)
                    }
                }

                function f(e, t) {
                    if (t && ("object" === k(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return v(e)
                }

                function v(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function p(e) {
                    return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function _(e) {
                    return function(e) {
                        if (Array.isArray(e)) return g(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || m(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function y(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = m(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, a = !0,
                        s = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return a = e.done, e
                        },
                        e: function(e) {
                            s = !0, o = e
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                    }
                }

                function m(e, t) {
                    if (e) {
                        if ("string" == typeof e) return g(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                    }
                }

                function g(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function k(e) {
                    return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function w(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function b(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function C(e, t, n) {
                    return t && b(e.prototype, t), n && b(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }
                var T = "@firebase/database",
                    I = "";

                function E(e) {
                    I = e
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var S, P = function() {
                        function e(t) {
                            w(this, e), this.domStorage_ = t, this.prefix_ = "firebase:"
                        }
                        return C(e, [{
                            key: "set",
                            value: function(e, t) {
                                null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Object(o.Q)(t))
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                var t = this.domStorage_.getItem(this.prefixedName_(e));
                                return null == t ? null : Object(o.J)(t)
                            }
                        }, {
                            key: "remove",
                            value: function(e) {
                                this.domStorage_.removeItem(this.prefixedName_(e))
                            }
                        }, {
                            key: "prefixedName_",
                            value: function(e) {
                                return this.prefix_ + e
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return this.domStorage_.toString()
                            }
                        }]), e
                    }(),
                    O = function() {
                        function e() {
                            w(this, e), this.cache_ = {}, this.isInMemoryStorage = !0
                        }
                        return C(e, [{
                            key: "set",
                            value: function(e, t) {
                                null == t ? delete this.cache_[e] : this.cache_[e] = t
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                return Object(o.k)(this.cache_, e) ? this.cache_[e] : null
                            }
                        }, {
                            key: "remove",
                            value: function(e) {
                                delete this.cache_[e]
                            }
                        }]), e
                    }(),
                    N = function(e) {
                        try {
                            if ("undefined" != typeof window && void 0 !== window[e]) {
                                var t = window[e];
                                return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new P(t)
                            }
                        } catch (e) {}
                        return new O
                    },
                    x = N("localStorage"),
                    R = N("sessionStorage"),
                    j = new a.b("@firebase/database"),
                    D = (S = 1, function() {
                        return S++
                    }),
                    A = function(e) {
                        var t = Object(o.P)(e),
                            n = new o.d;
                        n.update(t);
                        var r = n.digest();
                        return o.g.encodeByteArray(r)
                    },
                    L = function e() {
                        for (var t = "", n = 0; n < arguments.length; n++) {
                            var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                            Array.isArray(r) || r && "object" === k(r) && "number" == typeof r.length ? t += e.apply(null, r) : "object" === k(r) ? t += Object(o.Q)(r) : t += r, t += " "
                        }
                        return t
                    },
                    q = null,
                    F = !0,
                    M = function(e, t) {
                        Object(o.e)(!t || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (j.logLevel = a.a.VERBOSE, q = j.log.bind(j), t && R.set("logging_enabled", !0)) : "function" == typeof e ? q = e : (q = null, R.remove("logging_enabled"))
                    },
                    W = function() {
                        if (!0 === F && (F = !1, null === q && !0 === R.get("logging_enabled") && M(!0)), q) {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var r = L.apply(null, t);
                            q(r)
                        }
                    },
                    U = function(e) {
                        return function() {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            W.apply(void 0, [e].concat(n))
                        }
                    },
                    B = function() {
                        var e = "FIREBASE INTERNAL ERROR: " + L.apply(void 0, arguments);
                        j.error(e)
                    },
                    H = function() {
                        var e = "FIREBASE FATAL ERROR: ".concat(L.apply(void 0, arguments));
                        throw j.error(e), new Error(e)
                    },
                    z = function() {
                        var e = "FIREBASE WARNING: " + L.apply(void 0, arguments);
                        j.warn(e)
                    },
                    Q = function(e) {
                        return "number" == typeof e && (e != e || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY)
                    },
                    V = "[MIN_NAME]",
                    Y = "[MAX_NAME]",
                    G = function(e, t) {
                        if (e === t) return 0;
                        if (e === V || t === Y) return -1;
                        if (t === V || e === Y) return 1;
                        var n = ne(e),
                            r = ne(t);
                        return null !== n ? null !== r ? n - r == 0 ? e.length - t.length : n - r : -1 : null !== r ? 1 : e < t ? -1 : 1
                    },
                    K = function(e, t) {
                        return e === t ? 0 : e < t ? -1 : 1
                    },
                    $ = function(e, t) {
                        if (t && e in t) return t[e];
                        throw new Error("Missing required key (" + e + ") in object: " + Object(o.Q)(t))
                    },
                    J = function e(t) {
                        if ("object" !== k(t) || null === t) return Object(o.Q)(t);
                        var n = [];
                        for (var r in t) n.push(r);
                        n.sort();
                        for (var i = "{", a = 0; a < n.length; a++) 0 !== a && (i += ","), i += Object(o.Q)(n[a]), i += ":", i += e(t[n[a]]);
                        return i += "}"
                    },
                    X = function(e, t) {
                        var n = e.length;
                        if (n <= t) return [e];
                        for (var r = [], i = 0; i < n; i += t) i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
                        return r
                    };
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function Z(e, t) {
                    for (var n in e) e.hasOwnProperty(n) && t(n, e[n])
                }
                var ee = function(e) {
                    Object(o.e)(!Q(e), "Invalid JSON number");
                    var t, n, r, i, a;
                    0 === e ? (n = 0, r = 0, t = 1 / e == -1 / 0 ? 1 : 0) : (t = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) + 1023, r = Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, r = Math.round(e / Math.pow(2, -1074))));
                    var s = [];
                    for (a = 52; a; a -= 1) s.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
                    for (a = 11; a; a -= 1) s.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                    s.push(t ? 1 : 0), s.reverse();
                    var u = s.join(""),
                        l = "";
                    for (a = 0; a < 64; a += 8) {
                        var c = parseInt(u.substr(a, 8), 2).toString(16);
                        1 === c.length && (c = "0" + c), l += c
                    }
                    return l.toLowerCase()
                };
                var te = new RegExp("^-?(0*)\\d{1,10}$"),
                    ne = function(e) {
                        if (te.test(e)) {
                            var t = Number(e);
                            if (t >= -2147483648 && t <= 2147483647) return t
                        }
                        return null
                    },
                    re = function(e) {
                        try {
                            e()
                        } catch (e) {
                            setTimeout((function() {
                                var t = e.stack || "";
                                throw z("Exception was thrown by user callback.", t), e
                            }), Math.floor(0))
                        }
                    },
                    ie = function(e, t) {
                        var n = setTimeout(e, t);
                        return "number" == typeof n && "undefined" != typeof Deno && Deno.unrefTimer ? Deno.unrefTimer(n) : "object" === k(n) && n.unref && n.unref(), n
                    },
                    oe = function() {
                        function e(t, n) {
                            var r = this;
                            w(this, e), this.appName_ = t, this.appCheckProvider = n, this.appCheck = null == n ? void 0 : n.getImmediate({
                                optional: !0
                            }), this.appCheck || null == n || n.get().then((function(e) {
                                return r.appCheck = e
                            }))
                        }
                        return C(e, [{
                            key: "getToken",
                            value: function(e) {
                                var t = this;
                                return this.appCheck ? this.appCheck.getToken(e) : new Promise((function(n, r) {
                                    setTimeout((function() {
                                        t.appCheck ? t.getToken(e).then(n, r) : n(null)
                                    }), 0)
                                }))
                            }
                        }, {
                            key: "addTokenChangeListener",
                            value: function(e) {
                                var t;
                                null === (t = this.appCheckProvider) || void 0 === t || t.get().then((function(t) {
                                    return t.addTokenListener(e)
                                }))
                            }
                        }, {
                            key: "notifyForInvalidToken",
                            value: function() {
                                z('Provided AppCheck credentials for the app named "'.concat(this.appName_, '" ') + "are invalid. This usually indicates your app was not initialized correctly.")
                            }
                        }]), e
                    }(),
                    ae = function() {
                        function e(t, n, r) {
                            var i = this;
                            w(this, e), this.appName_ = t, this.firebaseOptions_ = n, this.authProvider_ = r, this.auth_ = null, this.auth_ = r.getImmediate({
                                optional: !0
                            }), this.auth_ || r.onInit((function(e) {
                                return i.auth_ = e
                            }))
                        }
                        return C(e, [{
                            key: "getToken",
                            value: function(e) {
                                var t = this;
                                return this.auth_ ? this.auth_.getToken(e).catch((function(e) {
                                    return e && "auth/token-not-initialized" === e.code ? (W("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e)
                                })) : new Promise((function(n, r) {
                                    setTimeout((function() {
                                        t.auth_ ? t.getToken(e).then(n, r) : n(null)
                                    }), 0)
                                }))
                            }
                        }, {
                            key: "addTokenChangeListener",
                            value: function(e) {
                                this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then((function(t) {
                                    return t.addAuthTokenListener(e)
                                }))
                            }
                        }, {
                            key: "removeTokenChangeListener",
                            value: function(e) {
                                this.authProvider_.get().then((function(t) {
                                    return t.removeAuthTokenListener(e)
                                }))
                            }
                        }, {
                            key: "notifyForInvalidToken",
                            value: function() {
                                var e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
                                "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', z(e)
                            }
                        }]), e
                    }(),
                    se = function() {
                        function e(t) {
                            w(this, e), this.accessToken = t
                        }
                        return C(e, [{
                            key: "getToken",
                            value: function(e) {
                                return Promise.resolve({
                                    accessToken: this.accessToken
                                })
                            }
                        }, {
                            key: "addTokenChangeListener",
                            value: function(e) {
                                e(this.accessToken)
                            }
                        }, {
                            key: "removeTokenChangeListener",
                            value: function(e) {}
                        }, {
                            key: "notifyForInvalidToken",
                            value: function() {}
                        }]), e
                    }();
                se.OWNER = "owner";
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ue = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
                    le = function() {
                        function e(t, n, r, i) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                                s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                            w(this, e), this.secure = n, this.namespace = r, this.webSocketOnly = i, this.nodeAdmin = o, this.persistenceKey = a, this.includeNamespaceInQueryParams = s, this._host = t.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = x.get("host:" + t) || this._host
                        }
                        return C(e, [{
                            key: "isCacheableHost",
                            value: function() {
                                return "s-" === this.internalHost.substr(0, 2)
                            }
                        }, {
                            key: "isCustomHost",
                            value: function() {
                                return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain
                            }
                        }, {
                            key: "host",
                            get: function() {
                                return this._host
                            },
                            set: function(e) {
                                e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && x.set("host:" + this._host, this.internalHost))
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                var e = this.toURLString();
                                return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
                            }
                        }, {
                            key: "toURLString",
                            value: function() {
                                var e = this.secure ? "https://" : "http://",
                                    t = this.includeNamespaceInQueryParams ? "?ns=".concat(this.namespace) : "";
                                return "".concat(e).concat(this.host, "/").concat(t)
                            }
                        }]), e
                    }();

                function ce(e, t, n) {
                    var r;
                    if (Object(o.e)("string" == typeof t, "typeof type must == string"), Object(o.e)("object" === k(n), "typeof params must == object"), "websocket" === t) r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
                    else {
                        if ("long_polling" !== t) throw new Error("Unknown connection type: " + t);
                        r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?"
                    }(function(e) {
                        return e.host !== e.internalHost || e.isCustomHost() || e.includeNamespaceInQueryParams
                    })(e) && (n.ns = e.namespace);
                    var i = [];
                    return Z(n, (function(e, t) {
                        i.push(e + "=" + t)
                    })), r + i.join("&")
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var he = function() {
                        function e() {
                            w(this, e), this.counters_ = {}
                        }
                        return C(e, [{
                            key: "incrementCounter",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                Object(o.k)(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
                            }
                        }, {
                            key: "get",
                            value: function() {
                                return Object(o.n)(this.counters_)
                            }
                        }]), e
                    }(),
                    de = {},
                    fe = {};
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function ve(e) {
                    var t = e.toString();
                    return de[t] || (de[t] = new he), de[t]
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var pe = function() {
                        function e(t) {
                            w(this, e), this.onMessage_ = t, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
                        }
                        return C(e, [{
                            key: "closeAfter",
                            value: function(e, t) {
                                this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
                            }
                        }, {
                            key: "handleResponse",
                            value: function(e, t) {
                                var n = this;
                                this.pendingResponses[e] = t;
                                for (var r = function() {
                                        var e = n.pendingResponses[n.currentResponseNum];
                                        delete n.pendingResponses[n.currentResponseNum];
                                        for (var t = function(t) {
                                                e[t] && re((function() {
                                                    n.onMessage_(e[t])
                                                }))
                                            }, r = 0; r < e.length; ++r) t(r);
                                        if (n.currentResponseNum === n.closeAfterResponse) return n.onClose && (n.onClose(), n.onClose = null), "break";
                                        n.currentResponseNum++
                                    }; this.pendingResponses[this.currentResponseNum];) {
                                    if ("break" === r()) break
                                }
                            }
                        }]), e
                    }(),
                    _e = function() {
                        function e(t, n, r, i, o, a, s) {
                            var u = this;
                            w(this, e), this.connId = t, this.repoInfo = n, this.applicationId = r, this.appCheckToken = i, this.authToken = o, this.transportSessionId = a, this.lastSessionId = s, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = U(t), this.stats_ = ve(n), this.urlFn = function(e) {
                                return u.appCheckToken && (e.ac = u.appCheckToken), ce(n, "long_polling", e)
                            }
                        }
                        return C(e, [{
                            key: "open",
                            value: function(e, t) {
                                var n = this;
                                this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new pe(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout((function() {
                                        n.log_("Timed out trying to connect."), n.onClosed_(), n.connectTimeoutTimer_ = null
                                    }), Math.floor(3e4)),
                                    function(e) {
                                        if (Object(o.G)() || "complete" === document.readyState) e();
                                        else {
                                            var t = !1,
                                                n = function n() {
                                                    document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10))
                                                };
                                            document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", (function() {
                                                "complete" === document.readyState && n()
                                            })), window.attachEvent("onload", n))
                                        }
                                    }((function() {
                                        if (!n.isClosed_) {
                                            n.scriptTagHolder = new ye((function() {
                                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                                var i = t[0],
                                                    o = t[1],
                                                    a = t[2];
                                                t[3], t[4];
                                                if (n.incrementIncomingBytes_(t), n.scriptTagHolder)
                                                    if (n.connectTimeoutTimer_ && (clearTimeout(n.connectTimeoutTimer_), n.connectTimeoutTimer_ = null), n.everConnected_ = !0, "start" === i) n.id = o, n.password = a;
                                                    else {
                                                        if ("close" !== i) throw new Error("Unrecognized command received: " + i);
                                                        o ? (n.scriptTagHolder.sendNewPolls = !1, n.myPacketOrderer.closeAfter(o, (function() {
                                                            n.onClosed_()
                                                        }))) : n.onClosed_()
                                                    }
                                            }), (function() {
                                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                                var i = t[0],
                                                    o = t[1];
                                                n.incrementIncomingBytes_(t), n.myPacketOrderer.handleResponse(i, o)
                                            }), (function() {
                                                n.onClosed_()
                                            }), n.urlFn);
                                            var e = {
                                                start: "t"
                                            };
                                            e.ser = Math.floor(1e8 * Math.random()), n.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = n.scriptTagHolder.uniqueCallbackIdentifier), e.v = "5", n.transportSessionId && (e.s = n.transportSessionId), n.lastSessionId && (e.ls = n.lastSessionId), n.applicationId && (e.p = n.applicationId), n.appCheckToken && (e.ac = n.appCheckToken), "undefined" != typeof location && location.hostname && ue.test(location.hostname) && (e.r = "f");
                                            var t = n.urlFn(e);
                                            n.log_("Connecting via long-poll to " + t), n.scriptTagHolder.addTag(t, (function() {}))
                                        }
                                    }))
                            }
                        }, {
                            key: "start",
                            value: function() {
                                this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                            }
                        }, {
                            key: "markConnectionHealthy",
                            value: function() {}
                        }, {
                            key: "shutdown_",
                            value: function() {
                                this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                            }
                        }, {
                            key: "onClosed_",
                            value: function() {
                                this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                            }
                        }, {
                            key: "close",
                            value: function() {
                                this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                            }
                        }, {
                            key: "send",
                            value: function(e) {
                                var t = Object(o.Q)(e);
                                this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
                                for (var n = Object(o.i)(t), r = X(n, 1840), i = 0; i < r.length; i++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, r.length, r[i]), this.curSegmentNum++
                            }
                        }, {
                            key: "addDisconnectPingFrame",
                            value: function(e, t) {
                                if (!Object(o.G)()) {
                                    this.myDisconnFrame = document.createElement("iframe");
                                    var n = {
                                        dframe: "t"
                                    };
                                    n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                                }
                            }
                        }, {
                            key: "incrementIncomingBytes_",
                            value: function(e) {
                                var t = Object(o.Q)(e).length;
                                this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
                            }
                        }], [{
                            key: "forceAllow",
                            value: function() {
                                e.forceAllow_ = !0
                            }
                        }, {
                            key: "forceDisallow",
                            value: function() {
                                e.forceDisallow_ = !0
                            }
                        }, {
                            key: "isAvailable",
                            value: function() {
                                return !Object(o.G)() && (!!e.forceAllow_ || !(e.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" === ("undefined" == typeof window ? "undefined" : k(window)) && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" === ("undefined" == typeof Windows ? "undefined" : k(Windows)) && "object" === k(Windows.UI)))
                            }
                        }]), e
                    }(),
                    ye = function() {
                        function e(t, n, r, i) {
                            if (w(this, e), this.onDisconnect = r, this.urlFn = i, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, Object(o.G)()) this.commandCB = t, this.onMessageCB = n;
                            else {
                                this.uniqueCallbackIdentifier = D(), window["pLPCommand" + this.uniqueCallbackIdentifier] = t, window["pRTLPCB" + this.uniqueCallbackIdentifier] = n, this.myIFrame = e.createIFrame_();
                                var a = "";
                                if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) a = '<script>document.domain="' + document.domain + '";<\/script>';
                                var s = "<html><body>" + a + "</body></html>";
                                try {
                                    this.myIFrame.doc.open(), this.myIFrame.doc.write(s), this.myIFrame.doc.close()
                                } catch (e) {
                                    W("frame writing exception"), e.stack && W(e.stack), W(e)
                                }
                            }
                        }
                        return C(e, [{
                            key: "close",
                            value: function() {
                                var e = this;
                                this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout((function() {
                                    null !== e.myIFrame && (document.body.removeChild(e.myIFrame), e.myIFrame = null)
                                }), Math.floor(0)));
                                var t = this.onDisconnect;
                                t && (this.onDisconnect = null, t())
                            }
                        }, {
                            key: "startLongPoll",
                            value: function(e, t) {
                                for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
                            }
                        }, {
                            key: "newRequest_",
                            value: function() {
                                if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
                                    this.currentSerial++;
                                    var e = {};
                                    e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
                                    for (var t = this.urlFn(e), n = "", r = 0; this.pendingSegs.length > 0;) {
                                        if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
                                        var i = this.pendingSegs.shift();
                                        n = n + "&seg" + r + "=" + i.seg + "&ts" + r + "=" + i.ts + "&d" + r + "=" + i.d, r++
                                    }
                                    return t += n, this.addLongPollTag_(t, this.currentSerial), !0
                                }
                                return !1
                            }
                        }, {
                            key: "enqueueSegment",
                            value: function(e, t, n) {
                                this.pendingSegs.push({
                                    seg: e,
                                    ts: t,
                                    d: n
                                }), this.alive && this.newRequest_()
                            }
                        }, {
                            key: "addLongPollTag_",
                            value: function(e, t) {
                                var n = this;
                                this.outstandingRequests.add(t);
                                var r = function() {
                                        n.outstandingRequests.delete(t), n.newRequest_()
                                    },
                                    i = setTimeout(r, Math.floor(25e3));
                                this.addTag(e, (function() {
                                    clearTimeout(i), r()
                                }))
                            }
                        }, {
                            key: "addTag",
                            value: function(e, t) {
                                var n = this;
                                Object(o.G)() ? this.doNodeLongPoll(e, t) : setTimeout((function() {
                                    try {
                                        if (!n.sendNewPolls) return;
                                        var r = n.myIFrame.doc.createElement("script");
                                        r.type = "text/javascript", r.async = !0, r.src = e, r.onload = r.onreadystatechange = function() {
                                            var e = r.readyState;
                                            e && "loaded" !== e && "complete" !== e || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), t())
                                        }, r.onerror = function() {
                                            W("Long-poll script failed to load: " + e), n.sendNewPolls = !1, n.close()
                                        }, n.myIFrame.doc.body.appendChild(r)
                                    } catch (e) {}
                                }), Math.floor(1))
                            }
                        }], [{
                            key: "createIFrame_",
                            value: function() {
                                var e = document.createElement("iframe");
                                if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                                document.body.appendChild(e);
                                try {
                                    e.contentWindow.document || W("No IE domain setting required")
                                } catch (n) {
                                    var t = document.domain;
                                    e.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())"
                                }
                                return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
                            }
                        }]), e
                    }(),
                    me = null;
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                "undefined" != typeof MozWebSocket ? me = MozWebSocket : "undefined" != typeof WebSocket && (me = WebSocket);
                var ge = function() {
                    function t(e, n, r, i, o, a, s) {
                        w(this, t), this.connId = e, this.applicationId = r, this.appCheckToken = i, this.authToken = o, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = U(this.connId), this.stats_ = ve(n), this.connURL = t.connectionURL_(n, a, s, i, r), this.nodeAdmin = n.nodeAdmin
                    }
                    return C(t, [{
                        key: "open",
                        value: function(t, n) {
                            var r = this;
                            this.onDisconnect = n, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, x.set("previous_websocket_failure", !0);
                            try {
                                var i;
                                if (Object(o.G)()) {
                                    var a = this.nodeAdmin ? "AdminNode" : "Node";
                                    i = {
                                        headers: {
                                            "User-Agent": "Firebase/".concat("5", "/").concat(I, "/").concat(e.platform, "/").concat(a),
                                            "X-Firebase-GMPID": this.applicationId || ""
                                        }
                                    }, this.authToken && (i.headers.Authorization = "Bearer ".concat(this.authToken)), this.appCheckToken && (i.headers["X-Firebase-AppCheck"] = this.appCheckToken);
                                    var s = e.env,
                                        u = 0 === this.connURL.indexOf("wss://") ? s.HTTPS_PROXY || s.https_proxy : s.HTTP_PROXY || s.http_proxy;
                                    u && (i.proxy = {
                                        origin: u
                                    })
                                }
                                this.mySock = new me(this.connURL, [], i)
                            } catch (e) {
                                this.log_("Error instantiating WebSocket.");
                                var l = e.message || e.data;
                                return l && this.log_(l), void this.onClosed_()
                            }
                            this.mySock.onopen = function() {
                                r.log_("Websocket connected."), r.everConnected_ = !0
                            }, this.mySock.onclose = function() {
                                r.log_("Websocket connection was disconnected."), r.mySock = null, r.onClosed_()
                            }, this.mySock.onmessage = function(e) {
                                r.handleIncomingFrame(e)
                            }, this.mySock.onerror = function(e) {
                                r.log_("WebSocket error.  Closing connection.");
                                var t = e.message || e.data;
                                t && r.log_(t), r.onClosed_()
                            }
                        }
                    }, {
                        key: "start",
                        value: function() {}
                    }, {
                        key: "markConnectionHealthy",
                        value: function() {
                            x.remove("previous_websocket_failure")
                        }
                    }, {
                        key: "appendFrame_",
                        value: function(e) {
                            if (this.frames.push(e), this.frames.length === this.totalFrames) {
                                var t = this.frames.join("");
                                this.frames = null;
                                var n = Object(o.J)(t);
                                this.onMessage(n)
                            }
                        }
                    }, {
                        key: "handleNewFrameCount_",
                        value: function(e) {
                            this.totalFrames = e, this.frames = []
                        }
                    }, {
                        key: "extractFrameCount_",
                        value: function(e) {
                            if (Object(o.e)(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
                                var t = Number(e);
                                if (!isNaN(t)) return this.handleNewFrameCount_(t), null
                            }
                            return this.handleNewFrameCount_(1), e
                        }
                    }, {
                        key: "handleIncomingFrame",
                        value: function(e) {
                            if (null !== this.mySock) {
                                var t = e.data;
                                if (this.bytesReceived += t.length, this.stats_.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(t);
                                else {
                                    var n = this.extractFrameCount_(t);
                                    null !== n && this.appendFrame_(n)
                                }
                            }
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            this.resetKeepAlive();
                            var t = Object(o.Q)(e);
                            this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
                            var n = X(t, 16384);
                            n.length > 1 && this.sendString_(String(n.length));
                            for (var r = 0; r < n.length; r++) this.sendString_(n[r])
                        }
                    }, {
                        key: "shutdown_",
                        value: function() {
                            this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
                        }
                    }, {
                        key: "onClosed_",
                        value: function() {
                            this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
                        }
                    }, {
                        key: "resetKeepAlive",
                        value: function() {
                            var e = this;
                            clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval((function() {
                                e.mySock && e.sendString_("0"), e.resetKeepAlive()
                            }), Math.floor(45e3))
                        }
                    }, {
                        key: "sendString_",
                        value: function(e) {
                            try {
                                this.mySock.send(e)
                            } catch (e) {
                                this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                            }
                        }
                    }], [{
                        key: "connectionURL_",
                        value: function(e, t, n, r, i) {
                            var a = {
                                v: "5"
                            };
                            return !Object(o.G)() && "undefined" != typeof location && location.hostname && ue.test(location.hostname) && (a.r = "f"), t && (a.s = t), n && (a.ls = n), r && (a.ac = r), i && (a.p = i), ce(e, "websocket", a)
                        }
                    }, {
                        key: "forceDisallow",
                        value: function() {
                            t.forceDisallow_ = !0
                        }
                    }, {
                        key: "isAvailable",
                        value: function() {
                            var e = !1;
                            if ("undefined" != typeof navigator && navigator.userAgent) {
                                var n = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
                                n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
                            }
                            return !e && null !== me && !t.forceDisallow_
                        }
                    }, {
                        key: "previouslyFailed",
                        value: function() {
                            return x.isInMemoryStorage || !0 === x.get("previous_websocket_failure")
                        }
                    }]), t
                }();
                ge.responsesRequiredToBeHealthy = 2, ge.healthyTimeout = 3e4;
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ke = function() {
                    function e(t) {
                        w(this, e), this.initTransports_(t)
                    }
                    return C(e, [{
                        key: "initTransports_",
                        value: function(t) {
                            var n = ge && ge.isAvailable(),
                                r = n && !ge.previouslyFailed();
                            if (t.webSocketOnly && (n || z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r) this.transports_ = [ge];
                            else {
                                var i, o = this.transports_ = [],
                                    a = y(e.ALL_TRANSPORTS);
                                try {
                                    for (a.s(); !(i = a.n()).done;) {
                                        var s = i.value;
                                        s && s.isAvailable() && o.push(s)
                                    }
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }
                                e.globalTransportInitialized_ = !0
                            }
                        }
                    }, {
                        key: "initialTransport",
                        value: function() {
                            if (this.transports_.length > 0) return this.transports_[0];
                            throw new Error("No transports available")
                        }
                    }, {
                        key: "upgradeTransport",
                        value: function() {
                            return this.transports_.length > 1 ? this.transports_[1] : null
                        }
                    }], [{
                        key: "ALL_TRANSPORTS",
                        get: function() {
                            return [_e, ge]
                        }
                    }, {
                        key: "IS_TRANSPORT_INITIALIZED",
                        get: function() {
                            return this.globalTransportInitialized_
                        }
                    }]), e
                }();
                ke.globalTransportInitialized_ = !1;
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var we = function() {
                        function e(t, n, r, i, o, a, s, u, l, c) {
                            w(this, e), this.id = t, this.repoInfo_ = n, this.applicationId_ = r, this.appCheckToken_ = i, this.authToken_ = o, this.onMessage_ = a, this.onReady_ = s, this.onDisconnect_ = u, this.onKill_ = l, this.lastSessionId = c, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = U("c:" + this.id + ":"), this.transportManager_ = new ke(n), this.log_("Connection created"), this.start_()
                        }
                        return C(e, [{
                            key: "start_",
                            value: function() {
                                var e = this,
                                    t = this.transportManager_.initialTransport();
                                this.conn_ = new t(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
                                var n = this.connReceiver_(this.conn_),
                                    r = this.disconnReceiver_(this.conn_);
                                this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout((function() {
                                    e.conn_ && e.conn_.open(n, r)
                                }), Math.floor(0));
                                var i = t.healthyTimeout || 0;
                                i > 0 && (this.healthyTimeout_ = ie((function() {
                                    e.healthyTimeout_ = null, e.isHealthy_ || (e.conn_ && e.conn_.bytesReceived > 102400 ? (e.log_("Connection exceeded healthy timeout but has received " + e.conn_.bytesReceived + " bytes.  Marking connection healthy."), e.isHealthy_ = !0, e.conn_.markConnectionHealthy()) : e.conn_ && e.conn_.bytesSent > 10240 ? e.log_("Connection exceeded healthy timeout but has sent " + e.conn_.bytesSent + " bytes.  Leaving connection alive.") : (e.log_("Closing unhealthy connection after timeout."), e.close()))
                                }), Math.floor(i)))
                            }
                        }, {
                            key: "nextTransportId_",
                            value: function() {
                                return "c:" + this.id + ":" + this.connectionCount++
                            }
                        }, {
                            key: "disconnReceiver_",
                            value: function(e) {
                                var t = this;
                                return function(n) {
                                    e === t.conn_ ? t.onConnectionLost_(n) : e === t.secondaryConn_ ? (t.log_("Secondary connection lost."), t.onSecondaryConnectionLost_()) : t.log_("closing an old connection")
                                }
                            }
                        }, {
                            key: "connReceiver_",
                            value: function(e) {
                                var t = this;
                                return function(n) {
                                    2 !== t.state_ && (e === t.rx_ ? t.onPrimaryMessageReceived_(n) : e === t.secondaryConn_ ? t.onSecondaryMessageReceived_(n) : t.log_("message on old connection"))
                                }
                            }
                        }, {
                            key: "sendRequest",
                            value: function(e) {
                                var t = {
                                    t: "d",
                                    d: e
                                };
                                this.sendData_(t)
                            }
                        }, {
                            key: "tryCleanupConnection",
                            value: function() {
                                this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
                            }
                        }, {
                            key: "onSecondaryControl_",
                            value: function(e) {
                                if ("t" in e) {
                                    var t = e.t;
                                    "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" === t ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === t && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
                                }
                            }
                        }, {
                            key: "onSecondaryMessageReceived_",
                            value: function(e) {
                                var t = $("t", e),
                                    n = $("d", e);
                                if ("c" === t) this.onSecondaryControl_(n);
                                else {
                                    if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
                                    this.pendingDataMessages.push(n)
                                }
                            }
                        }, {
                            key: "upgradeIfSecondaryHealthy_",
                            value: function() {
                                this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                                    t: "c",
                                    d: {
                                        t: "p",
                                        d: {}
                                    }
                                }))
                            }
                        }, {
                            key: "proceedWithUpgrade_",
                            value: function() {
                                this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                                    t: "c",
                                    d: {
                                        t: "a",
                                        d: {}
                                    }
                                }), this.log_("Ending transmission on primary"), this.conn_.send({
                                    t: "c",
                                    d: {
                                        t: "n",
                                        d: {}
                                    }
                                }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
                            }
                        }, {
                            key: "onPrimaryMessageReceived_",
                            value: function(e) {
                                var t = $("t", e),
                                    n = $("d", e);
                                "c" === t ? this.onControl_(n) : "d" === t && this.onDataMessage_(n)
                            }
                        }, {
                            key: "onDataMessage_",
                            value: function(e) {
                                this.onPrimaryResponse_(), this.onMessage_(e)
                            }
                        }, {
                            key: "onPrimaryResponse_",
                            value: function() {
                                this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
                            }
                        }, {
                            key: "onControl_",
                            value: function(e) {
                                var t = $("t", e);
                                if ("d" in e) {
                                    var n = e.d;
                                    if ("h" === t) this.onHandshake_(n);
                                    else if ("n" === t) {
                                        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                                        for (var r = 0; r < this.pendingDataMessages.length; ++r) this.onDataMessage_(this.pendingDataMessages[r]);
                                        this.pendingDataMessages = [], this.tryCleanupConnection()
                                    } else "s" === t ? this.onConnectionShutdown_(n) : "r" === t ? this.onReset_(n) : "e" === t ? B("Server Error: " + n) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : B("Unknown control packet command: " + t)
                                }
                            }
                        }, {
                            key: "onHandshake_",
                            value: function(e) {
                                var t = e.ts,
                                    n = e.v,
                                    r = e.h;
                                this.sessionId = e.s, this.repoInfo_.host = r, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), "5" !== n && z("Protocol version mismatch detected"), this.tryStartUpgrade_())
                            }
                        }, {
                            key: "tryStartUpgrade_",
                            value: function() {
                                var e = this.transportManager_.upgradeTransport();
                                e && this.startUpgrade_(e)
                            }
                        }, {
                            key: "startUpgrade_",
                            value: function(e) {
                                var t = this;
                                this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                                var n = this.connReceiver_(this.secondaryConn_),
                                    r = this.disconnReceiver_(this.secondaryConn_);
                                this.secondaryConn_.open(n, r), ie((function() {
                                    t.secondaryConn_ && (t.log_("Timed out trying to upgrade."), t.secondaryConn_.close())
                                }), Math.floor(6e4))
                            }
                        }, {
                            key: "onReset_",
                            value: function(e) {
                                this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
                            }
                        }, {
                            key: "onConnectionEstablished_",
                            value: function(e, t) {
                                var n = this;
                                this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : ie((function() {
                                    n.sendPingOnPrimaryIfNecessary_()
                                }), Math.floor(5e3))
                            }
                        }, {
                            key: "sendPingOnPrimaryIfNecessary_",
                            value: function() {
                                this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                                    t: "c",
                                    d: {
                                        t: "p",
                                        d: {}
                                    }
                                }))
                            }
                        }, {
                            key: "onSecondaryConnectionLost_",
                            value: function() {
                                var e = this.secondaryConn_;
                                this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
                            }
                        }, {
                            key: "onConnectionLost_",
                            value: function(e) {
                                this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (x.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
                            }
                        }, {
                            key: "onConnectionShutdown_",
                            value: function(e) {
                                this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
                            }
                        }, {
                            key: "sendData_",
                            value: function(e) {
                                if (1 !== this.state_) throw "Connection is not connected";
                                this.tx_.send(e)
                            }
                        }, {
                            key: "close",
                            value: function() {
                                2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
                            }
                        }, {
                            key: "closeConnections_",
                            value: function() {
                                this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
                            }
                        }]), e
                    }(),
                    be = function() {
                        function e() {
                            w(this, e)
                        }
                        return C(e, [{
                            key: "put",
                            value: function(e, t, n, r) {}
                        }, {
                            key: "merge",
                            value: function(e, t, n, r) {}
                        }, {
                            key: "refreshAuthToken",
                            value: function(e) {}
                        }, {
                            key: "refreshAppCheckToken",
                            value: function(e) {}
                        }, {
                            key: "onDisconnectPut",
                            value: function(e, t, n) {}
                        }, {
                            key: "onDisconnectMerge",
                            value: function(e, t, n) {}
                        }, {
                            key: "onDisconnectCancel",
                            value: function(e, t) {}
                        }, {
                            key: "reportStats",
                            value: function(e) {}
                        }]), e
                    }(),
                    Ce = function() {
                        function e(t) {
                            w(this, e), this.allowedEvents_ = t, this.listeners_ = {}, Object(o.e)(Array.isArray(t) && t.length > 0, "Requires a non-empty array")
                        }
                        return C(e, [{
                            key: "trigger",
                            value: function(e) {
                                if (Array.isArray(this.listeners_[e])) {
                                    for (var t = _(this.listeners_[e]), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                                    for (var o = 0; o < t.length; o++) t[o].callback.apply(t[o].context, r)
                                }
                            }
                        }, {
                            key: "on",
                            value: function(e, t, n) {
                                this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                                    callback: t,
                                    context: n
                                });
                                var r = this.getInitialEvent(e);
                                r && t.apply(n, r)
                            }
                        }, {
                            key: "off",
                            value: function(e, t, n) {
                                this.validateEventType_(e);
                                for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
                                    if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
                            }
                        }, {
                            key: "validateEventType_",
                            value: function(e) {
                                Object(o.e)(this.allowedEvents_.find((function(t) {
                                    return t === e
                                })), "Unknown event: " + e)
                            }
                        }]), e
                    }(),
                    Te = function(e) {
                        c(n, e);
                        var t = d(n);

                        function n() {
                            var e;
                            return w(this, n), (e = t.call(this, ["online"])).online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || Object(o.E)() || (window.addEventListener("online", (function() {
                                e.online_ || (e.online_ = !0, e.trigger("online", !0))
                            }), !1), window.addEventListener("offline", (function() {
                                e.online_ && (e.online_ = !1, e.trigger("online", !1))
                            }), !1)), e
                        }
                        return C(n, [{
                            key: "getInitialEvent",
                            value: function(e) {
                                return Object(o.e)("online" === e, "Unknown event type: " + e), [this.online_]
                            }
                        }, {
                            key: "currentlyOnline",
                            value: function() {
                                return this.online_
                            }
                        }], [{
                            key: "getInstance",
                            value: function() {
                                return new n
                            }
                        }]), n
                    }(Ce),
                    Ie = function() {
                        function e(t, n) {
                            if (w(this, e), void 0 === n) {
                                this.pieces_ = t.split("/");
                                for (var r = 0, i = 0; i < this.pieces_.length; i++) this.pieces_[i].length > 0 && (this.pieces_[r] = this.pieces_[i], r++);
                                this.pieces_.length = r, this.pieceNum_ = 0
                            } else this.pieces_ = t, this.pieceNum_ = n
                        }
                        return C(e, [{
                            key: "toString",
                            value: function() {
                                for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
                                return e || "/"
                            }
                        }]), e
                    }();

                function Ee() {
                    return new Ie("")
                }

                function Se(e) {
                    return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_]
                }

                function Pe(e) {
                    return e.pieces_.length - e.pieceNum_
                }

                function Oe(e) {
                    var t = e.pieceNum_;
                    return t < e.pieces_.length && t++, new Ie(e.pieces_, t)
                }

                function Ne(e) {
                    return e.pieceNum_ < e.pieces_.length ? e.pieces_[e.pieces_.length - 1] : null
                }

                function xe(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return e.pieces_.slice(e.pieceNum_ + t)
                }

                function Re(e) {
                    if (e.pieceNum_ >= e.pieces_.length) return null;
                    for (var t = [], n = e.pieceNum_; n < e.pieces_.length - 1; n++) t.push(e.pieces_[n]);
                    return new Ie(t, 0)
                }

                function je(e, t) {
                    for (var n = [], r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r]);
                    if (t instanceof Ie)
                        for (var i = t.pieceNum_; i < t.pieces_.length; i++) n.push(t.pieces_[i]);
                    else
                        for (var o = t.split("/"), a = 0; a < o.length; a++) o[a].length > 0 && n.push(o[a]);
                    return new Ie(n, 0)
                }

                function De(e) {
                    return e.pieceNum_ >= e.pieces_.length
                }

                function Ae(e, t) {
                    var n = Se(e),
                        r = Se(t);
                    if (null === n) return t;
                    if (n === r) return Ae(Oe(e), Oe(t));
                    throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")")
                }

                function Le(e, t) {
                    for (var n = xe(e, 0), r = xe(t, 0), i = 0; i < n.length && i < r.length; i++) {
                        var o = G(n[i], r[i]);
                        if (0 !== o) return o
                    }
                    return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
                }

                function qe(e, t) {
                    if (Pe(e) !== Pe(t)) return !1;
                    for (var n = e.pieceNum_, r = t.pieceNum_; n <= e.pieces_.length; n++, r++)
                        if (e.pieces_[n] !== t.pieces_[r]) return !1;
                    return !0
                }

                function Fe(e, t) {
                    var n = e.pieceNum_,
                        r = t.pieceNum_;
                    if (Pe(e) > Pe(t)) return !1;
                    for (; n < e.pieces_.length;) {
                        if (e.pieces_[n] !== t.pieces_[r]) return !1;
                        ++n, ++r
                    }
                    return !0
                }
                var Me = C((function e(t, n) {
                    w(this, e), this.errorPrefix_ = n, this.parts_ = xe(t, 0), this.byteLength_ = Math.max(1, this.parts_.length);
                    for (var r = 0; r < this.parts_.length; r++) this.byteLength_ += Object(o.O)(this.parts_[r]);
                    We(this)
                }));

                function We(e) {
                    if (e.byteLength_ > 768) throw new Error(e.errorPrefix_ + "has a key path longer than 768 bytes (" + e.byteLength_ + ").");
                    if (e.parts_.length > 32) throw new Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + Ue(e))
                }

                function Ue(e) {
                    return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'"
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Be = function(e) {
                        c(n, e);
                        var t = d(n);

                        function n() {
                            var e, r, i;
                            return w(this, n), e = t.call(this, ["visible"]), "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (i = "visibilitychange", r = "hidden") : void 0 !== document.mozHidden ? (i = "mozvisibilitychange", r = "mozHidden") : void 0 !== document.msHidden ? (i = "msvisibilitychange", r = "msHidden") : void 0 !== document.webkitHidden && (i = "webkitvisibilitychange", r = "webkitHidden")), e.visible_ = !0, i && document.addEventListener(i, (function() {
                                var t = !document[r];
                                t !== e.visible_ && (e.visible_ = t, e.trigger("visible", t))
                            }), !1), e
                        }
                        return C(n, [{
                            key: "getInitialEvent",
                            value: function(e) {
                                return Object(o.e)("visible" === e, "Unknown event type: " + e), [this.visible_]
                            }
                        }], [{
                            key: "getInstance",
                            value: function() {
                                return new n
                            }
                        }]), n
                    }(Ce),
                    He = function(e) {
                        c(i, e);
                        var t, n, r = d(i);

                        function i(e, t, n, a, s, u, l, c) {
                            var h;
                            if (w(this, i), (h = r.call(this)).repoInfo_ = e, h.applicationId_ = t, h.onDataUpdate_ = n, h.onConnectStatus_ = a, h.onServerInfoUpdate_ = s, h.authTokenProvider_ = u, h.appCheckTokenProvider_ = l, h.authOverride_ = c, h.id = i.nextPersistentConnectionId_++, h.log_ = U("p:" + h.id + ":"), h.interruptReasons_ = {}, h.listens = new Map, h.outstandingPuts_ = [], h.outstandingGets_ = [], h.outstandingPutCount_ = 0, h.outstandingGetCount_ = 0, h.onDisconnectRequestQueue_ = [], h.connected_ = !1, h.reconnectDelay_ = 1e3, h.maxReconnectDelay_ = 3e5, h.securityDebugCallback_ = null, h.lastSessionId = null, h.establishConnectionTimer_ = null, h.visible_ = !1, h.requestCBHash_ = {}, h.requestNumber_ = 0, h.realtime_ = null, h.authToken_ = null, h.appCheckToken_ = null, h.forceTokenRefresh_ = !1, h.invalidAuthTokenCount_ = 0, h.invalidAppCheckTokenCount_ = 0, h.firstConnection_ = !0, h.lastConnectionAttemptTime_ = null, h.lastConnectionEstablishedTime_ = null, c && !Object(o.G)()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                            return Be.getInstance().on("visible", h.onVisible_, v(h)), -1 === e.host.indexOf("fblocal") && Te.getInstance().on("online", h.onOnline_, v(h)), h
                        }
                        return C(i, [{
                            key: "sendRequest",
                            value: function(e, t, n) {
                                var r = ++this.requestNumber_,
                                    i = {
                                        r: r,
                                        a: e,
                                        b: t
                                    };
                                this.log_(Object(o.Q)(i)), Object(o.e)(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n)
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                this.initConnection_();
                                var t = new o.a,
                                    n = {
                                        action: "g",
                                        request: {
                                            p: e._path.toString(),
                                            q: e._queryObject
                                        },
                                        onComplete: function(e) {
                                            var n = e.d;
                                            "ok" === e.s ? t.resolve(n) : t.reject(n)
                                        }
                                    };
                                this.outstandingGets_.push(n), this.outstandingGetCount_++;
                                var r = this.outstandingGets_.length - 1;
                                return this.connected_ && this.sendGet_(r), t.promise
                            }
                        }, {
                            key: "listen",
                            value: function(e, t, n, r) {
                                this.initConnection_();
                                var i = e._queryIdentifier,
                                    a = e._path.toString();
                                this.log_("Listen called for " + a + " " + i), this.listens.has(a) || this.listens.set(a, new Map), Object(o.e)(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), Object(o.e)(!this.listens.get(a).has(i), "listen() called twice for same path/queryId.");
                                var s = {
                                    onComplete: r,
                                    hashFn: t,
                                    query: e,
                                    tag: n
                                };
                                this.listens.get(a).set(i, s), this.connected_ && this.sendListen_(s)
                            }
                        }, {
                            key: "sendGet_",
                            value: function(e) {
                                var t = this,
                                    n = this.outstandingGets_[e];
                                this.sendRequest("g", n.request, (function(r) {
                                    delete t.outstandingGets_[e], t.outstandingGetCount_--, 0 === t.outstandingGetCount_ && (t.outstandingGets_ = []), n.onComplete && n.onComplete(r)
                                }))
                            }
                        }, {
                            key: "sendListen_",
                            value: function(e) {
                                var t = this,
                                    n = e.query,
                                    r = n._path.toString(),
                                    o = n._queryIdentifier;
                                this.log_("Listen on " + r + " for " + o);
                                var a = {
                                    p: r
                                };
                                e.tag && (a.q = n._queryObject, a.t = e.tag), a.h = e.hashFn(), this.sendRequest("q", a, (function(a) {
                                    var s = a.d,
                                        u = a.s;
                                    i.warnOnListenWarnings_(s, n), (t.listens.get(r) && t.listens.get(r).get(o)) === e && (t.log_("listen response", a), "ok" !== u && t.removeListen_(r, o), e.onComplete && e.onComplete(u, s))
                                }))
                            }
                        }, {
                            key: "refreshAuthToken",
                            value: function(e) {
                                this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, (function() {})), this.reduceReconnectDelayIfAdminCredential_(e)
                            }
                        }, {
                            key: "reduceReconnectDelayIfAdminCredential_",
                            value: function(e) {
                                (e && 40 === e.length || Object(o.y)(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
                            }
                        }, {
                            key: "refreshAppCheckToken",
                            value: function(e) {
                                this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, (function() {}))
                            }
                        }, {
                            key: "tryAuth",
                            value: function() {
                                var e = this;
                                if (this.connected_ && this.authToken_) {
                                    var t = this.authToken_,
                                        n = Object(o.I)(t) ? "auth" : "gauth",
                                        r = {
                                            cred: t
                                        };
                                    null === this.authOverride_ ? r.noauth = !0 : "object" === k(this.authOverride_) && (r.authvar = this.authOverride_), this.sendRequest(n, r, (function(n) {
                                        var r = n.s,
                                            i = n.d || "error";
                                        e.authToken_ === t && ("ok" === r ? e.invalidAuthTokenCount_ = 0 : e.onAuthRevoked_(r, i))
                                    }))
                                }
                            }
                        }, {
                            key: "tryAppCheck",
                            value: function() {
                                var e = this;
                                this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
                                    token: this.appCheckToken_
                                }, (function(t) {
                                    var n = t.s,
                                        r = t.d || "error";
                                    "ok" === n ? e.invalidAppCheckTokenCount_ = 0 : e.onAppCheckRevoked_(n, r)
                                }))
                            }
                        }, {
                            key: "unlisten",
                            value: function(e, t) {
                                var n = e._path.toString(),
                                    r = e._queryIdentifier;
                                this.log_("Unlisten called for " + n + " " + r), Object(o.e)(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e._queryObject, t)
                            }
                        }, {
                            key: "sendUnlisten_",
                            value: function(e, t, n, r) {
                                this.log_("Unlisten on " + e + " for " + t);
                                var i = {
                                    p: e
                                };
                                r && (i.q = n, i.t = r), this.sendRequest("n", i)
                            }
                        }, {
                            key: "onDisconnectPut",
                            value: function(e, t, n) {
                                this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
                                    pathString: e,
                                    action: "o",
                                    data: t,
                                    onComplete: n
                                })
                            }
                        }, {
                            key: "onDisconnectMerge",
                            value: function(e, t, n) {
                                this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
                                    pathString: e,
                                    action: "om",
                                    data: t,
                                    onComplete: n
                                })
                            }
                        }, {
                            key: "onDisconnectCancel",
                            value: function(e, t) {
                                this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                                    pathString: e,
                                    action: "oc",
                                    data: null,
                                    onComplete: t
                                })
                            }
                        }, {
                            key: "sendOnDisconnect_",
                            value: function(e, t, n, r) {
                                var i = {
                                    p: t,
                                    d: n
                                };
                                this.log_("onDisconnect " + e, i), this.sendRequest(e, i, (function(e) {
                                    r && setTimeout((function() {
                                        r(e.s, e.d)
                                    }), Math.floor(0))
                                }))
                            }
                        }, {
                            key: "put",
                            value: function(e, t, n, r) {
                                this.putInternal("p", e, t, n, r)
                            }
                        }, {
                            key: "merge",
                            value: function(e, t, n, r) {
                                this.putInternal("m", e, t, n, r)
                            }
                        }, {
                            key: "putInternal",
                            value: function(e, t, n, r, i) {
                                this.initConnection_();
                                var o = {
                                    p: t,
                                    d: n
                                };
                                void 0 !== i && (o.h = i), this.outstandingPuts_.push({
                                    action: e,
                                    request: o,
                                    onComplete: r
                                }), this.outstandingPutCount_++;
                                var a = this.outstandingPuts_.length - 1;
                                this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + t)
                            }
                        }, {
                            key: "sendPut_",
                            value: function(e) {
                                var t = this,
                                    n = this.outstandingPuts_[e].action,
                                    r = this.outstandingPuts_[e].request,
                                    i = this.outstandingPuts_[e].onComplete;
                                this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(n, r, (function(r) {
                                    t.log_(n + " response", r), delete t.outstandingPuts_[e], t.outstandingPutCount_--, 0 === t.outstandingPutCount_ && (t.outstandingPuts_ = []), i && i(r.s, r.d)
                                }))
                            }
                        }, {
                            key: "reportStats",
                            value: function(e) {
                                var t = this;
                                if (this.connected_) {
                                    var n = {
                                        c: e
                                    };
                                    this.log_("reportStats", n), this.sendRequest("s", n, (function(e) {
                                        if ("ok" !== e.s) {
                                            var n = e.d;
                                            t.log_("reportStats", "Error sending stats: " + n)
                                        }
                                    }))
                                }
                            }
                        }, {
                            key: "onDataMessage_",
                            value: function(e) {
                                if ("r" in e) {
                                    this.log_("from server: " + Object(o.Q)(e));
                                    var t = e.r,
                                        n = this.requestCBHash_[t];
                                    n && (delete this.requestCBHash_[t], n(e.b))
                                } else {
                                    if ("error" in e) throw "A server-side error has occurred: " + e.error;
                                    "a" in e && this.onDataPush_(e.a, e.b)
                                }
                            }
                        }, {
                            key: "onDataPush_",
                            value: function(e, t) {
                                this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) : "apc" === e ? this.onAppCheckRevoked_(t.s, t.d) : "sd" === e ? this.onSecurityDebugPacket_(t) : B("Unrecognized action received from server: " + Object(o.Q)(e) + "\nAre you using the latest client?")
                            }
                        }, {
                            key: "onReady_",
                            value: function(e, t) {
                                this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                            }
                        }, {
                            key: "scheduleConnect_",
                            value: function(e) {
                                var t = this;
                                Object(o.e)(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout((function() {
                                    t.establishConnectionTimer_ = null, t.establishConnection_()
                                }), Math.floor(e))
                            }
                        }, {
                            key: "initConnection_",
                            value: function() {
                                !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
                            }
                        }, {
                            key: "onVisible_",
                            value: function(e) {
                                e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
                            }
                        }, {
                            key: "onOnline_",
                            value: function(e) {
                                e ? (this.log_("Browser went online."), this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                            }
                        }, {
                            key: "onRealtimeDisconnect_",
                            value: function() {
                                if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                                    if (this.visible_) {
                                        if (this.lastConnectionEstablishedTime_) {
                                            (new Date).getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = 1e3), this.lastConnectionEstablishedTime_ = null
                                        }
                                    } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
                                    var e = (new Date).getTime() - this.lastConnectionAttemptTime_,
                                        t = Math.max(0, this.reconnectDelay_ - e);
                                    t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
                                }
                                this.onConnectStatus_(!1)
                            }
                        }, {
                            key: "establishConnection_",
                            value: (t = s().mark((function e() {
                                var t, n, r, a, l, c, h, d, f, v, p, _, y, m, g = this;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.shouldReconnect_()) {
                                                e.next = 30;
                                                break
                                            }
                                            return this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null, t = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), r = this.onRealtimeDisconnect_.bind(this), a = this.id + ":" + i.nextConnectionId_++, l = this.lastSessionId, c = !1, h = null, d = function() {
                                                h ? h.close() : (c = !0, r())
                                            }, f = function(e) {
                                                Object(o.e)(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(e)
                                            }, this.realtime_ = {
                                                close: d,
                                                sendRequest: f
                                            }, v = this.forceTokenRefresh_, this.forceTokenRefresh_ = !1, e.prev = 16, e.next = 19, Promise.all([this.authTokenProvider_.getToken(v), this.appCheckTokenProvider_.getToken(v)]);
                                        case 19:
                                            p = e.sent, _ = u(p, 2), y = _[0], m = _[1], c ? W("getToken() completed but was canceled") : (W("getToken() completed. Creating connection."), this.authToken_ = y && y.accessToken, this.appCheckToken_ = m && m.token, h = new we(a, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, t, n, r, (function(e) {
                                                z(e + " (" + g.repoInfo_.toString() + ")"), g.interrupt("server_kill")
                                            }), l)), e.next = 30;
                                            break;
                                        case 26:
                                            e.prev = 26, e.t0 = e.catch(16), this.log_("Failed to get token: " + e.t0), c || (this.repoInfo_.nodeAdmin && z(e.t0), d());
                                        case 30:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [16, 26]
                                ])
                            })), n = function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(r, i) {
                                    var o = t.apply(e, n);

                                    function a(e) {
                                        l(o, r, i, a, s, "next", e)
                                    }

                                    function s(e) {
                                        l(o, r, i, a, s, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            }, function() {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "interrupt",
                            value: function(e) {
                                W("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                            }
                        }, {
                            key: "resume",
                            value: function(e) {
                                W("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Object(o.B)(this.interruptReasons_) && (this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0))
                            }
                        }, {
                            key: "handleTimestamp_",
                            value: function(e) {
                                var t = e - (new Date).getTime();
                                this.onServerInfoUpdate_({
                                    serverTimeOffset: t
                                })
                            }
                        }, {
                            key: "cancelSentTransactions_",
                            value: function() {
                                for (var e = 0; e < this.outstandingPuts_.length; e++) {
                                    var t = this.outstandingPuts_[e];
                                    t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--)
                                }
                                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                            }
                        }, {
                            key: "onListenRevoked_",
                            value: function(e, t) {
                                var n;
                                n = t ? t.map((function(e) {
                                    return J(e)
                                })).join("$") : "default";
                                var r = this.removeListen_(e, n);
                                r && r.onComplete && r.onComplete("permission_denied")
                            }
                        }, {
                            key: "removeListen_",
                            value: function(e, t) {
                                var n, r = new Ie(e).toString();
                                if (this.listens.has(r)) {
                                    var i = this.listens.get(r);
                                    n = i.get(t), i.delete(t), 0 === i.size && this.listens.delete(r)
                                } else n = void 0;
                                return n
                            }
                        }, {
                            key: "onAuthRevoked_",
                            value: function(e, t) {
                                W("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
                            }
                        }, {
                            key: "onAppCheckRevoked_",
                            value: function(e, t) {
                                W("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= 3 && this.appCheckTokenProvider_.notifyForInvalidToken())
                            }
                        }, {
                            key: "onSecurityDebugPacket_",
                            value: function(e) {
                                this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "))
                            }
                        }, {
                            key: "restoreState_",
                            value: function() {
                                this.tryAuth(), this.tryAppCheck();
                                var e, t = y(this.listens.values());
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        var n, r = y(e.value.values());
                                        try {
                                            for (r.s(); !(n = r.n()).done;) {
                                                var i = n.value;
                                                this.sendListen_(i)
                                            }
                                        } catch (e) {
                                            r.e(e)
                                        } finally {
                                            r.f()
                                        }
                                    }
                                } catch (e) {
                                    t.e(e)
                                } finally {
                                    t.f()
                                }
                                for (var o = 0; o < this.outstandingPuts_.length; o++) this.outstandingPuts_[o] && this.sendPut_(o);
                                for (; this.onDisconnectRequestQueue_.length;) {
                                    var a = this.onDisconnectRequestQueue_.shift();
                                    this.sendOnDisconnect_(a.action, a.pathString, a.data, a.onComplete)
                                }
                                for (var s = 0; s < this.outstandingGets_.length; s++) this.outstandingGets_[s] && this.sendGet_(s)
                            }
                        }, {
                            key: "sendConnectStats_",
                            value: function() {
                                var e = {},
                                    t = "js";
                                Object(o.G)() && (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"), e["sdk." + t + "." + I.replace(/\./g, "-")] = 1, Object(o.E)() ? e["framework.cordova"] = 1 : Object(o.H)() && (e["framework.reactnative"] = 1), this.reportStats(e)
                            }
                        }, {
                            key: "shouldReconnect_",
                            value: function() {
                                var e = Te.getInstance().currentlyOnline();
                                return Object(o.B)(this.interruptReasons_) && e
                            }
                        }], [{
                            key: "warnOnListenWarnings_",
                            value: function(e, t) {
                                if (e && "object" === k(e) && Object(o.k)(e, "w")) {
                                    var n = Object(o.N)(e, "w");
                                    if (Array.isArray(n) && ~n.indexOf("no_index")) {
                                        var r = '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
                                            i = t._path.toString();
                                        z("Using an unspecified index. Your data will be downloaded and " + "filtered on the client. Consider adding ".concat(r, " at ") + "".concat(i, " to your security rules for better performance."))
                                    }
                                }
                            }
                        }]), i
                    }(be);
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                He.nextPersistentConnectionId_ = 0, He.nextConnectionId_ = 0;
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ze, Qe = function() {
                        function e(t, n) {
                            w(this, e), this.name = t, this.node = n
                        }
                        return C(e, null, [{
                            key: "Wrap",
                            value: function(t, n) {
                                return new e(t, n)
                            }
                        }]), e
                    }(),
                    Ve = function() {
                        function e() {
                            w(this, e)
                        }
                        return C(e, [{
                            key: "getCompare",
                            value: function() {
                                return this.compare.bind(this)
                            }
                        }, {
                            key: "indexedValueChanged",
                            value: function(e, t) {
                                var n = new Qe(V, e),
                                    r = new Qe(V, t);
                                return 0 !== this.compare(n, r)
                            }
                        }, {
                            key: "minPost",
                            value: function() {
                                return Qe.MIN
                            }
                        }]), e
                    }(),
                    Ye = function(e) {
                        c(n, e);
                        var t = d(n);

                        function n() {
                            return w(this, n), t.apply(this, arguments)
                        }
                        return C(n, [{
                            key: "compare",
                            value: function(e, t) {
                                return G(e.name, t.name)
                            }
                        }, {
                            key: "isDefinedOn",
                            value: function(e) {
                                throw Object(o.f)("KeyIndex.isDefinedOn not expected to be called.")
                            }
                        }, {
                            key: "indexedValueChanged",
                            value: function(e, t) {
                                return !1
                            }
                        }, {
                            key: "minPost",
                            value: function() {
                                return Qe.MIN
                            }
                        }, {
                            key: "maxPost",
                            value: function() {
                                return new Qe(Y, ze)
                            }
                        }, {
                            key: "makePost",
                            value: function(e, t) {
                                return Object(o.e)("string" == typeof e, "KeyIndex indexValue must always be a string."), new Qe(e, ze)
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return ".key"
                            }
                        }], [{
                            key: "__EMPTY_NODE",
                            get: function() {
                                return ze
                            },
                            set: function(e) {
                                ze = e
                            }
                        }]), n
                    }(Ve),
                    Ge = new Ye,
                    Ke = function() {
                        function e(t, n, r, i) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                            w(this, e), this.isReverse_ = i, this.resultGenerator_ = o, this.nodeStack_ = [];
                            for (var a = 1; !t.isEmpty();)
                                if (t = t, a = n ? r(t.key, n) : 1, i && (a *= -1), a < 0) t = this.isReverse_ ? t.left : t.right;
                                else {
                                    if (0 === a) {
                                        this.nodeStack_.push(t);
                                        break
                                    }
                                    this.nodeStack_.push(t), t = this.isReverse_ ? t.right : t.left
                                }
                        }
                        return C(e, [{
                            key: "getNext",
                            value: function() {
                                if (0 === this.nodeStack_.length) return null;
                                var e, t = this.nodeStack_.pop();
                                if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                                        key: t.key,
                                        value: t.value
                                    }, this.isReverse_)
                                    for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
                                else
                                    for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
                                return e
                            }
                        }, {
                            key: "hasNext",
                            value: function() {
                                return this.nodeStack_.length > 0
                            }
                        }, {
                            key: "peek",
                            value: function() {
                                if (0 === this.nodeStack_.length) return null;
                                var e = this.nodeStack_[this.nodeStack_.length - 1];
                                return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                                    key: e.key,
                                    value: e.value
                                }
                            }
                        }]), e
                    }(),
                    $e = function() {
                        function e(t, n, r, i, o) {
                            w(this, e), this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : Ze.EMPTY_NODE, this.right = null != o ? o : Ze.EMPTY_NODE
                        }
                        return C(e, [{
                            key: "copy",
                            value: function(t, n, r, i, o) {
                                return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
                            }
                        }, {
                            key: "count",
                            value: function() {
                                return this.left.count() + 1 + this.right.count()
                            }
                        }, {
                            key: "isEmpty",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "inorderTraversal",
                            value: function(e) {
                                return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
                            }
                        }, {
                            key: "reverseTraversal",
                            value: function(e) {
                                return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                            }
                        }, {
                            key: "min_",
                            value: function() {
                                return this.left.isEmpty() ? this : this.left.min_()
                            }
                        }, {
                            key: "minKey",
                            value: function() {
                                return this.min_().key
                            }
                        }, {
                            key: "maxKey",
                            value: function() {
                                return this.right.isEmpty() ? this.key : this.right.maxKey()
                            }
                        }, {
                            key: "insert",
                            value: function(e, t, n) {
                                var r = this,
                                    i = n(e, r.key);
                                return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp_()
                            }
                        }, {
                            key: "removeMin_",
                            value: function() {
                                if (this.left.isEmpty()) return Ze.EMPTY_NODE;
                                var e = this;
                                return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), (e = e.copy(null, null, null, e.left.removeMin_(), null)).fixUp_()
                            }
                        }, {
                            key: "remove",
                            value: function(e, t) {
                                var n, r;
                                if (t(e, (n = this).key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
                                else {
                                    if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                                        if (n.right.isEmpty()) return Ze.EMPTY_NODE;
                                        r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_())
                                    }
                                    n = n.copy(null, null, null, null, n.right.remove(e, t))
                                }
                                return n.fixUp_()
                            }
                        }, {
                            key: "isRed_",
                            value: function() {
                                return this.color
                            }
                        }, {
                            key: "fixUp_",
                            value: function() {
                                var e = this;
                                return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
                            }
                        }, {
                            key: "moveRedLeft_",
                            value: function() {
                                var e = this.colorFlip_();
                                return e.right.left.isRed_() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight_())).rotateLeft_()).colorFlip_()), e
                            }
                        }, {
                            key: "moveRedRight_",
                            value: function() {
                                var e = this.colorFlip_();
                                return e.left.left.isRed_() && (e = (e = e.rotateRight_()).colorFlip_()), e
                            }
                        }, {
                            key: "rotateLeft_",
                            value: function() {
                                var t = this.copy(null, null, e.RED, null, this.right.left);
                                return this.right.copy(null, null, this.color, t, null)
                            }
                        }, {
                            key: "rotateRight_",
                            value: function() {
                                var t = this.copy(null, null, e.RED, this.left.right, null);
                                return this.left.copy(null, null, this.color, null, t)
                            }
                        }, {
                            key: "colorFlip_",
                            value: function() {
                                var e = this.left.copy(null, null, !this.left.color, null, null),
                                    t = this.right.copy(null, null, !this.right.color, null, null);
                                return this.copy(null, null, !this.color, e, t)
                            }
                        }, {
                            key: "checkMaxDepth_",
                            value: function() {
                                var e = this.check_();
                                return Math.pow(2, e) <= this.count() + 1
                            }
                        }, {
                            key: "check_",
                            value: function() {
                                if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                                if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                                var e = this.left.check_();
                                if (e !== this.right.check_()) throw new Error("Black depths differ");
                                return e + (this.isRed_() ? 0 : 1)
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                $e.RED = !0, $e.BLACK = !1;
                var Je, Xe = function() {
                        function e() {
                            w(this, e)
                        }
                        return C(e, [{
                            key: "copy",
                            value: function(e, t, n, r, i) {
                                return this
                            }
                        }, {
                            key: "insert",
                            value: function(e, t, n) {
                                return new $e(e, t, null)
                            }
                        }, {
                            key: "remove",
                            value: function(e, t) {
                                return this
                            }
                        }, {
                            key: "count",
                            value: function() {
                                return 0
                            }
                        }, {
                            key: "isEmpty",
                            value: function() {
                                return !0
                            }
                        }, {
                            key: "inorderTraversal",
                            value: function(e) {
                                return !1
                            }
                        }, {
                            key: "reverseTraversal",
                            value: function(e) {
                                return !1
                            }
                        }, {
                            key: "minKey",
                            value: function() {
                                return null
                            }
                        }, {
                            key: "maxKey",
                            value: function() {
                                return null
                            }
                        }, {
                            key: "check_",
                            value: function() {
                                return 0
                            }
                        }, {
                            key: "isRed_",
                            value: function() {
                                return !1
                            }
                        }]), e
                    }(),
                    Ze = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.EMPTY_NODE;
                            w(this, e), this.comparator_ = t, this.root_ = n
                        }
                        return C(e, [{
                            key: "insert",
                            value: function(t, n) {
                                return new e(this.comparator_, this.root_.insert(t, n, this.comparator_).copy(null, null, $e.BLACK, null, null))
                            }
                        }, {
                            key: "remove",
                            value: function(t) {
                                return new e(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, $e.BLACK, null, null))
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                for (var t, n = this.root_; !n.isEmpty();) {
                                    if (0 === (t = this.comparator_(e, n.key))) return n.value;
                                    t < 0 ? n = n.left : t > 0 && (n = n.right)
                                }
                                return null
                            }
                        }, {
                            key: "getPredecessorKey",
                            value: function(e) {
                                for (var t, n = this.root_, r = null; !n.isEmpty();) {
                                    if (0 === (t = this.comparator_(e, n.key))) {
                                        if (n.left.isEmpty()) return r ? r.key : null;
                                        for (n = n.left; !n.right.isEmpty();) n = n.right;
                                        return n.key
                                    }
                                    t < 0 ? n = n.left : t > 0 && (r = n, n = n.right)
                                }
                                throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
                            }
                        }, {
                            key: "isEmpty",
                            value: function() {
                                return this.root_.isEmpty()
                            }
                        }, {
                            key: "count",
                            value: function() {
                                return this.root_.count()
                            }
                        }, {
                            key: "minKey",
                            value: function() {
                                return this.root_.minKey()
                            }
                        }, {
                            key: "maxKey",
                            value: function() {
                                return this.root_.maxKey()
                            }
                        }, {
                            key: "inorderTraversal",
                            value: function(e) {
                                return this.root_.inorderTraversal(e)
                            }
                        }, {
                            key: "reverseTraversal",
                            value: function(e) {
                                return this.root_.reverseTraversal(e)
                            }
                        }, {
                            key: "getIterator",
                            value: function(e) {
                                return new Ke(this.root_, null, this.comparator_, !1, e)
                            }
                        }, {
                            key: "getIteratorFrom",
                            value: function(e, t) {
                                return new Ke(this.root_, e, this.comparator_, !1, t)
                            }
                        }, {
                            key: "getReverseIteratorFrom",
                            value: function(e, t) {
                                return new Ke(this.root_, e, this.comparator_, !0, t)
                            }
                        }, {
                            key: "getReverseIterator",
                            value: function(e) {
                                return new Ke(this.root_, null, this.comparator_, !0, e)
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function et(e, t) {
                    return G(e.name, t.name)
                }

                function tt(e, t) {
                    return G(e, t)
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                Ze.EMPTY_NODE = new Xe;
                var nt, rt, it, ot = function(e) {
                        return "number" == typeof e ? "number:" + ee(e) : "string:" + e
                    },
                    at = function(e) {
                        if (e.isLeafNode()) {
                            var t = e.val();
                            Object(o.e)("string" == typeof t || "number" == typeof t || "object" === k(t) && Object(o.k)(t, ".sv"), "Priority must be a string or number.")
                        } else Object(o.e)(e === Je || e.isEmpty(), "priority of unexpected type.");
                        Object(o.e)(e === Je || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
                    },
                    st = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.__childrenNodeConstructor.EMPTY_NODE;
                            w(this, e), this.value_ = t, this.priorityNode_ = n, this.lazyHash_ = null, Object(o.e)(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), at(this.priorityNode_)
                        }
                        return C(e, [{
                            key: "isLeafNode",
                            value: function() {
                                return !0
                            }
                        }, {
                            key: "getPriority",
                            value: function() {
                                return this.priorityNode_
                            }
                        }, {
                            key: "updatePriority",
                            value: function(t) {
                                return new e(this.value_, t)
                            }
                        }, {
                            key: "getImmediateChild",
                            value: function(t) {
                                return ".priority" === t ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE
                            }
                        }, {
                            key: "getChild",
                            value: function(t) {
                                return De(t) ? this : ".priority" === Se(t) ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE
                            }
                        }, {
                            key: "hasChild",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "getPredecessorChildName",
                            value: function(e, t) {
                                return null
                            }
                        }, {
                            key: "updateImmediateChild",
                            value: function(t, n) {
                                return ".priority" === t ? this.updatePriority(n) : n.isEmpty() && ".priority" !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, n).updatePriority(this.priorityNode_)
                            }
                        }, {
                            key: "updateChild",
                            value: function(t, n) {
                                var r = Se(t);
                                return null === r ? n : n.isEmpty() && ".priority" !== r ? this : (Object(o.e)(".priority" !== r || 1 === Pe(t), ".priority must be the last token in a path"), this.updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(t), n)))
                            }
                        }, {
                            key: "isEmpty",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "numChildren",
                            value: function() {
                                return 0
                            }
                        }, {
                            key: "forEachChild",
                            value: function(e, t) {
                                return !1
                            }
                        }, {
                            key: "val",
                            value: function(e) {
                                return e && !this.getPriority().isEmpty() ? {
                                    ".value": this.getValue(),
                                    ".priority": this.getPriority().val()
                                } : this.getValue()
                            }
                        }, {
                            key: "hash",
                            value: function() {
                                if (null === this.lazyHash_) {
                                    var e = "";
                                    this.priorityNode_.isEmpty() || (e += "priority:" + ot(this.priorityNode_.val()) + ":");
                                    var t = k(this.value_);
                                    e += t + ":", e += "number" === t ? ee(this.value_) : this.value_, this.lazyHash_ = A(e)
                                }
                                return this.lazyHash_
                            }
                        }, {
                            key: "getValue",
                            value: function() {
                                return this.value_
                            }
                        }, {
                            key: "compareTo",
                            value: function(t) {
                                return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof e.__childrenNodeConstructor ? -1 : (Object(o.e)(t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(t))
                            }
                        }, {
                            key: "compareToLeafNode_",
                            value: function(t) {
                                var n = k(t.value_),
                                    r = k(this.value_),
                                    i = e.VALUE_TYPE_ORDER.indexOf(n),
                                    a = e.VALUE_TYPE_ORDER.indexOf(r);
                                return Object(o.e)(i >= 0, "Unknown leaf type: " + n), Object(o.e)(a >= 0, "Unknown leaf type: " + r), i === a ? "object" === r ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : a - i
                            }
                        }, {
                            key: "withIndex",
                            value: function() {
                                return this
                            }
                        }, {
                            key: "isIndexed",
                            value: function() {
                                return !0
                            }
                        }, {
                            key: "equals",
                            value: function(e) {
                                if (e === this) return !0;
                                if (e.isLeafNode()) {
                                    var t = e;
                                    return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
                                }
                                return !1
                            }
                        }], [{
                            key: "__childrenNodeConstructor",
                            get: function() {
                                return nt
                            },
                            set: function(e) {
                                nt = e
                            }
                        }]), e
                    }();
                st.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
                var ut, lt, ct = new(function(e) {
                        c(n, e);
                        var t = d(n);

                        function n() {
                            return w(this, n), t.apply(this, arguments)
                        }
                        return C(n, [{
                            key: "compare",
                            value: function(e, t) {
                                var n = e.node.getPriority(),
                                    r = t.node.getPriority(),
                                    i = n.compareTo(r);
                                return 0 === i ? G(e.name, t.name) : i
                            }
                        }, {
                            key: "isDefinedOn",
                            value: function(e) {
                                return !e.getPriority().isEmpty()
                            }
                        }, {
                            key: "indexedValueChanged",
                            value: function(e, t) {
                                return !e.getPriority().equals(t.getPriority())
                            }
                        }, {
                            key: "minPost",
                            value: function() {
                                return Qe.MIN
                            }
                        }, {
                            key: "maxPost",
                            value: function() {
                                return new Qe(Y, new st("[PRIORITY-POST]", it))
                            }
                        }, {
                            key: "makePost",
                            value: function(e, t) {
                                var n = rt(e);
                                return new Qe(t, new st("[PRIORITY-POST]", n))
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return ".priority"
                            }
                        }]), n
                    }(Ve)),
                    ht = Math.log(2),
                    dt = function() {
                        function e(t) {
                            w(this, e);
                            var n;
                            this.count = (n = t + 1, parseInt(Math.log(n) / ht, 10)), this.current_ = this.count - 1;
                            var r, i = (r = this.count, parseInt(Array(r + 1).join("1"), 2));
                            this.bits_ = t + 1 & i
                        }
                        return C(e, [{
                            key: "nextBitIsOne",
                            value: function() {
                                var e = !(this.bits_ & 1 << this.current_);
                                return this.current_--, e
                            }
                        }]), e
                    }(),
                    ft = function(e, t, n, r) {
                        e.sort(t);
                        var i = function(t) {
                            for (var r = null, i = null, o = e.length, a = function(t, r) {
                                    var i = o - t,
                                        a = o;
                                    o -= t;
                                    var u = function t(r, i) {
                                            var o, a, s = i - r;
                                            if (0 === s) return null;
                                            if (1 === s) return o = e[r], a = n ? n(o) : o, new $e(a, o.node, $e.BLACK, null, null);
                                            var u = parseInt(s / 2, 10) + r,
                                                l = t(r, u),
                                                c = t(u + 1, i);
                                            return o = e[u], a = n ? n(o) : o, new $e(a, o.node, $e.BLACK, l, c)
                                        }(i + 1, a),
                                        l = e[i],
                                        c = n ? n(l) : l;
                                    s(new $e(c, l.node, r, null, u))
                                }, s = function(e) {
                                    r ? (r.left = e, r = e) : (i = e, r = e)
                                }, u = 0; u < t.count; ++u) {
                                var l = t.nextBitIsOne(),
                                    c = Math.pow(2, t.count - (u + 1));
                                l ? a(c, $e.BLACK) : (a(c, $e.BLACK), a(c, $e.RED))
                            }
                            return i
                        }(new dt(e.length));
                        return new Ze(r || t, i)
                    },
                    vt = {},
                    pt = function() {
                        function e(t, n) {
                            w(this, e), this.indexes_ = t, this.indexSet_ = n
                        }
                        return C(e, [{
                            key: "get",
                            value: function(e) {
                                var t = Object(o.N)(this.indexes_, e);
                                if (!t) throw new Error("No index defined for " + e);
                                return t instanceof Ze ? t : null
                            }
                        }, {
                            key: "hasIndex",
                            value: function(e) {
                                return Object(o.k)(this.indexSet_, e.toString())
                            }
                        }, {
                            key: "addIndex",
                            value: function(t, n) {
                                Object(o.e)(t !== Ge, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                                for (var r, i = [], a = !1, s = n.getIterator(Qe.Wrap), u = s.getNext(); u;) a = a || t.isDefinedOn(u.node), i.push(u), u = s.getNext();
                                r = a ? ft(i, t.getCompare()) : vt;
                                var l = t.toString(),
                                    c = Object.assign({}, this.indexSet_);
                                c[l] = t;
                                var h = Object.assign({}, this.indexes_);
                                return h[l] = r, new e(h, c)
                            }
                        }, {
                            key: "addToIndexes",
                            value: function(t, n) {
                                var r = this;
                                return new e(Object(o.K)(this.indexes_, (function(e, i) {
                                    var a = Object(o.N)(r.indexSet_, i);
                                    if (Object(o.e)(a, "Missing index implementation for " + i), e === vt) {
                                        if (a.isDefinedOn(t.node)) {
                                            for (var s = [], u = n.getIterator(Qe.Wrap), l = u.getNext(); l;) l.name !== t.name && s.push(l), l = u.getNext();
                                            return s.push(t), ft(s, a.getCompare())
                                        }
                                        return vt
                                    }
                                    var c = n.get(t.name),
                                        h = e;
                                    return c && (h = h.remove(new Qe(t.name, c))), h.insert(t, t.node)
                                })), this.indexSet_)
                            }
                        }, {
                            key: "removeFromIndexes",
                            value: function(t, n) {
                                return new e(Object(o.K)(this.indexes_, (function(e) {
                                    if (e === vt) return e;
                                    var r = n.get(t.name);
                                    return r ? e.remove(new Qe(t.name, r)) : e
                                })), this.indexSet_)
                            }
                        }], [{
                            key: "Default",
                            get: function() {
                                return Object(o.e)(vt && ct, "ChildrenNode.ts has not been loaded"), ut = ut || new e({
                                    ".priority": vt
                                }, {
                                    ".priority": ct
                                })
                            }
                        }]), e
                    }(),
                    _t = function() {
                        function e(t, n, r) {
                            w(this, e), this.children_ = t, this.priorityNode_ = n, this.indexMap_ = r, this.lazyHash_ = null, this.priorityNode_ && at(this.priorityNode_), this.children_.isEmpty() && Object(o.e)(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
                        }
                        return C(e, [{
                            key: "isLeafNode",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "getPriority",
                            value: function() {
                                return this.priorityNode_ || lt
                            }
                        }, {
                            key: "updatePriority",
                            value: function(t) {
                                return this.children_.isEmpty() ? this : new e(this.children_, t, this.indexMap_)
                            }
                        }, {
                            key: "getImmediateChild",
                            value: function(e) {
                                if (".priority" === e) return this.getPriority();
                                var t = this.children_.get(e);
                                return null === t ? lt : t
                            }
                        }, {
                            key: "getChild",
                            value: function(e) {
                                var t = Se(e);
                                return null === t ? this : this.getImmediateChild(t).getChild(Oe(e))
                            }
                        }, {
                            key: "hasChild",
                            value: function(e) {
                                return null !== this.children_.get(e)
                            }
                        }, {
                            key: "updateImmediateChild",
                            value: function(t, n) {
                                if (Object(o.e)(n, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(n);
                                var r, i, a = new Qe(t, n);
                                n.isEmpty() ? (r = this.children_.remove(t), i = this.indexMap_.removeFromIndexes(a, this.children_)) : (r = this.children_.insert(t, n), i = this.indexMap_.addToIndexes(a, this.children_));
                                var s = r.isEmpty() ? lt : this.priorityNode_;
                                return new e(r, s, i)
                            }
                        }, {
                            key: "updateChild",
                            value: function(e, t) {
                                var n = Se(e);
                                if (null === n) return t;
                                Object(o.e)(".priority" !== Se(e) || 1 === Pe(e), ".priority must be the last token in a path");
                                var r = this.getImmediateChild(n).updateChild(Oe(e), t);
                                return this.updateImmediateChild(n, r)
                            }
                        }, {
                            key: "isEmpty",
                            value: function() {
                                return this.children_.isEmpty()
                            }
                        }, {
                            key: "numChildren",
                            value: function() {
                                return this.children_.count()
                            }
                        }, {
                            key: "val",
                            value: function(t) {
                                if (this.isEmpty()) return null;
                                var n = {},
                                    r = 0,
                                    i = 0,
                                    o = !0;
                                if (this.forEachChild(ct, (function(a, s) {
                                        n[a] = s.val(t), r++, o && e.INTEGER_REGEXP_.test(a) ? i = Math.max(i, Number(a)) : o = !1
                                    })), !t && o && i < 2 * r) {
                                    var a = [];
                                    for (var s in n) a[s] = n[s];
                                    return a
                                }
                                return t && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n
                            }
                        }, {
                            key: "hash",
                            value: function() {
                                if (null === this.lazyHash_) {
                                    var e = "";
                                    this.getPriority().isEmpty() || (e += "priority:" + ot(this.getPriority().val()) + ":"), this.forEachChild(ct, (function(t, n) {
                                        var r = n.hash();
                                        "" !== r && (e += ":" + t + ":" + r)
                                    })), this.lazyHash_ = "" === e ? "" : A(e)
                                }
                                return this.lazyHash_
                            }
                        }, {
                            key: "getPredecessorChildName",
                            value: function(e, t, n) {
                                var r = this.resolveIndex_(n);
                                if (r) {
                                    var i = r.getPredecessorKey(new Qe(e, t));
                                    return i ? i.name : null
                                }
                                return this.children_.getPredecessorKey(e)
                            }
                        }, {
                            key: "getFirstChildName",
                            value: function(e) {
                                var t = this.resolveIndex_(e);
                                if (t) {
                                    var n = t.minKey();
                                    return n && n.name
                                }
                                return this.children_.minKey()
                            }
                        }, {
                            key: "getFirstChild",
                            value: function(e) {
                                var t = this.getFirstChildName(e);
                                return t ? new Qe(t, this.children_.get(t)) : null
                            }
                        }, {
                            key: "getLastChildName",
                            value: function(e) {
                                var t = this.resolveIndex_(e);
                                if (t) {
                                    var n = t.maxKey();
                                    return n && n.name
                                }
                                return this.children_.maxKey()
                            }
                        }, {
                            key: "getLastChild",
                            value: function(e) {
                                var t = this.getLastChildName(e);
                                return t ? new Qe(t, this.children_.get(t)) : null
                            }
                        }, {
                            key: "forEachChild",
                            value: function(e, t) {
                                var n = this.resolveIndex_(e);
                                return n ? n.inorderTraversal((function(e) {
                                    return t(e.name, e.node)
                                })) : this.children_.inorderTraversal(t)
                            }
                        }, {
                            key: "getIterator",
                            value: function(e) {
                                return this.getIteratorFrom(e.minPost(), e)
                            }
                        }, {
                            key: "getIteratorFrom",
                            value: function(e, t) {
                                var n = this.resolveIndex_(t);
                                if (n) return n.getIteratorFrom(e, (function(e) {
                                    return e
                                }));
                                for (var r = this.children_.getIteratorFrom(e.name, Qe.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) r.getNext(), i = r.peek();
                                return r
                            }
                        }, {
                            key: "getReverseIterator",
                            value: function(e) {
                                return this.getReverseIteratorFrom(e.maxPost(), e)
                            }
                        }, {
                            key: "getReverseIteratorFrom",
                            value: function(e, t) {
                                var n = this.resolveIndex_(t);
                                if (n) return n.getReverseIteratorFrom(e, (function(e) {
                                    return e
                                }));
                                for (var r = this.children_.getReverseIteratorFrom(e.name, Qe.Wrap), i = r.peek(); null != i && t.compare(i, e) > 0;) r.getNext(), i = r.peek();
                                return r
                            }
                        }, {
                            key: "compareTo",
                            value: function(e) {
                                return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === yt ? -1 : 0
                            }
                        }, {
                            key: "withIndex",
                            value: function(t) {
                                if (t === Ge || this.indexMap_.hasIndex(t)) return this;
                                var n = this.indexMap_.addIndex(t, this.children_);
                                return new e(this.children_, this.priorityNode_, n)
                            }
                        }, {
                            key: "isIndexed",
                            value: function(e) {
                                return e === Ge || this.indexMap_.hasIndex(e)
                            }
                        }, {
                            key: "equals",
                            value: function(e) {
                                if (e === this) return !0;
                                if (e.isLeafNode()) return !1;
                                var t = e;
                                if (this.getPriority().equals(t.getPriority())) {
                                    if (this.children_.count() === t.children_.count()) {
                                        for (var n = this.getIterator(ct), r = t.getIterator(ct), i = n.getNext(), o = r.getNext(); i && o;) {
                                            if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                                            i = n.getNext(), o = r.getNext()
                                        }
                                        return null === i && null === o
                                    }
                                    return !1
                                }
                                return !1
                            }
                        }, {
                            key: "resolveIndex_",
                            value: function(e) {
                                return e === Ge ? null : this.indexMap_.get(e.toString())
                            }
                        }], [{
                            key: "EMPTY_NODE",
                            get: function() {
                                return lt || (lt = new e(new Ze(tt), null, pt.Default))
                            }
                        }]), e
                    }();
                _t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
                var yt = new(function(e) {
                    c(n, e);
                    var t = d(n);

                    function n() {
                        return w(this, n), t.call(this, new Ze(tt), _t.EMPTY_NODE, pt.Default)
                    }
                    return C(n, [{
                        key: "compareTo",
                        value: function(e) {
                            return e === this ? 0 : 1
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return e === this
                        }
                    }, {
                        key: "getPriority",
                        value: function() {
                            return this
                        }
                    }, {
                        key: "getImmediateChild",
                        value: function(e) {
                            return _t.EMPTY_NODE
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return !1
                        }
                    }]), n
                }(_t));
                Object.defineProperties(Qe, {
                        MIN: {
                            value: new Qe(V, _t.EMPTY_NODE)
                        },
                        MAX: {
                            value: new Qe(Y, yt)
                        }
                    }), Ye.__EMPTY_NODE = _t.EMPTY_NODE, st.__childrenNodeConstructor = _t, Je = yt,
                    function(e) {
                        it = e
                    }(yt);

                function mt(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null === e) return _t.EMPTY_NODE;
                    if ("object" === k(e) && ".priority" in e && (t = e[".priority"]), Object(o.e)(null === t || "string" == typeof t || "number" == typeof t || "object" === k(t) && ".sv" in t, "Invalid priority type found: " + k(t)), "object" === k(e) && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" !== k(e) || ".sv" in e) {
                        var n = e;
                        return new st(n, mt(t))
                    }
                    if (e instanceof Array) {
                        var r = _t.EMPTY_NODE;
                        return Z(e, (function(t, n) {
                            if (Object(o.k)(e, t) && "." !== t.substring(0, 1)) {
                                var i = mt(n);
                                !i.isLeafNode() && i.isEmpty() || (r = r.updateImmediateChild(t, i))
                            }
                        })), r.updatePriority(mt(t))
                    }
                    var i = [],
                        a = !1,
                        s = e;
                    if (Z(s, (function(e, t) {
                            if ("." !== e.substring(0, 1)) {
                                var n = mt(t);
                                n.isEmpty() || (a = a || !n.getPriority().isEmpty(), i.push(new Qe(e, n)))
                            }
                        })), 0 === i.length) return _t.EMPTY_NODE;
                    var u = ft(i, et, (function(e) {
                        return e.name
                    }), tt);
                    if (a) {
                        var l = ft(i, ct.getCompare());
                        return new _t(u, mt(t), new pt({
                            ".priority": l
                        }, {
                            ".priority": ct
                        }))
                    }
                    return new _t(u, mt(t), pt.Default)
                }! function(e) {
                    rt = e
                }(mt);
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var gt, kt, wt = function(e) {
                        c(n, e);
                        var t = d(n);

                        function n(e) {
                            var r;
                            return w(this, n), (r = t.call(this)).indexPath_ = e, Object(o.e)(!De(e) && ".priority" !== Se(e), "Can't create PathIndex with empty path or .priority key"), r
                        }
                        return C(n, [{
                            key: "extractChild",
                            value: function(e) {
                                return e.getChild(this.indexPath_)
                            }
                        }, {
                            key: "isDefinedOn",
                            value: function(e) {
                                return !e.getChild(this.indexPath_).isEmpty()
                            }
                        }, {
                            key: "compare",
                            value: function(e, t) {
                                var n = this.extractChild(e.node),
                                    r = this.extractChild(t.node),
                                    i = n.compareTo(r);
                                return 0 === i ? G(e.name, t.name) : i
                            }
                        }, {
                            key: "makePost",
                            value: function(e, t) {
                                var n = mt(e),
                                    r = _t.EMPTY_NODE.updateChild(this.indexPath_, n);
                                return new Qe(t, r)
                            }
                        }, {
                            key: "maxPost",
                            value: function() {
                                var e = _t.EMPTY_NODE.updateChild(this.indexPath_, yt);
                                return new Qe(Y, e)
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return xe(this.indexPath_, 0).join("/")
                            }
                        }]), n
                    }(Ve),
                    bt = new(function(e) {
                        c(n, e);
                        var t = d(n);

                        function n() {
                            return w(this, n), t.apply(this, arguments)
                        }
                        return C(n, [{
                            key: "compare",
                            value: function(e, t) {
                                var n = e.node.compareTo(t.node);
                                return 0 === n ? G(e.name, t.name) : n
                            }
                        }, {
                            key: "isDefinedOn",
                            value: function(e) {
                                return !0
                            }
                        }, {
                            key: "indexedValueChanged",
                            value: function(e, t) {
                                return !e.equals(t)
                            }
                        }, {
                            key: "minPost",
                            value: function() {
                                return Qe.MIN
                            }
                        }, {
                            key: "maxPost",
                            value: function() {
                                return Qe.MAX
                            }
                        }, {
                            key: "makePost",
                            value: function(e, t) {
                                var n = mt(e);
                                return new Qe(t, n)
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return ".value"
                            }
                        }]), n
                    }(Ve)),
                    Ct = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
                    Tt = (gt = 0, kt = [], function(e) {
                        var t, n = e === gt;
                        gt = e;
                        var r = new Array(8);
                        for (t = 7; t >= 0; t--) r[t] = Ct.charAt(e % 64), e = Math.floor(e / 64);
                        Object(o.e)(0 === e, "Cannot push at time == 0");
                        var i = r.join("");
                        if (n) {
                            for (t = 11; t >= 0 && 63 === kt[t]; t--) kt[t] = 0;
                            kt[t]++
                        } else
                            for (t = 0; t < 12; t++) kt[t] = Math.floor(64 * Math.random());
                        for (t = 0; t < 12; t++) i += Ct.charAt(kt[t]);
                        return Object(o.e)(20 === i.length, "nextPushId: Length should be 20."), i
                    }),
                    It = function(e) {
                        if ("2147483647" === e) return "-";
                        var t = ne(e);
                        if (null != t) return "" + (t + 1);
                        for (var n = new Array(e.length), r = 0; r < n.length; r++) n[r] = e.charAt(r);
                        if (n.length < 786) return n.push("-"), n.join("");
                        for (var i = n.length - 1; i >= 0 && "z" === n[i];) i--;
                        if (-1 === i) return Y;
                        var o = n[i],
                            a = Ct.charAt(Ct.indexOf(o) + 1);
                        return n[i] = a, n.slice(0, i + 1).join("")
                    },
                    Et = function(e) {
                        if ("-2147483648" === e) return V;
                        var t = ne(e);
                        if (null != t) return "" + (t - 1);
                        for (var n = new Array(e.length), r = 0; r < n.length; r++) n[r] = e.charAt(r);
                        return "-" === n[n.length - 1] ? 1 === n.length ? "2147483647" : (delete n[n.length - 1], n.join("")) : (n[n.length - 1] = Ct.charAt(Ct.indexOf(n[n.length - 1]) - 1), n.join("") + "z".repeat(786 - n.length))
                    };
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function St(e) {
                    return {
                        type: "value",
                        snapshotNode: e
                    }
                }

                function Pt(e, t) {
                    return {
                        type: "child_added",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function Ot(e, t) {
                    return {
                        type: "child_removed",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function Nt(e, t, n) {
                    return {
                        type: "child_changed",
                        snapshotNode: t,
                        childName: e,
                        oldSnap: n
                    }
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var xt = function() {
                        function e(t) {
                            w(this, e), this.index_ = t
                        }
                        return C(e, [{
                            key: "updateChild",
                            value: function(e, t, n, r, i, a) {
                                Object(o.e)(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                                var s = e.getImmediateChild(t);
                                return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() === n.isEmpty() ? e : (null != a && (n.isEmpty() ? e.hasChild(t) ? a.trackChildChange(Ot(t, s)) : Object(o.e)(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : s.isEmpty() ? a.trackChildChange(Pt(t, n)) : a.trackChildChange(Nt(t, n, s))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_))
                            }
                        }, {
                            key: "updateFullNode",
                            value: function(e, t, n) {
                                return null != n && (e.isLeafNode() || e.forEachChild(ct, (function(e, r) {
                                    t.hasChild(e) || n.trackChildChange(Ot(e, r))
                                })), t.isLeafNode() || t.forEachChild(ct, (function(t, r) {
                                    if (e.hasChild(t)) {
                                        var i = e.getImmediateChild(t);
                                        i.equals(r) || n.trackChildChange(Nt(t, r, i))
                                    } else n.trackChildChange(Pt(t, r))
                                }))), t.withIndex(this.index_)
                            }
                        }, {
                            key: "updatePriority",
                            value: function(e, t) {
                                return e.isEmpty() ? _t.EMPTY_NODE : e.updatePriority(t)
                            }
                        }, {
                            key: "filtersNodes",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "getIndexedFilter",
                            value: function() {
                                return this
                            }
                        }, {
                            key: "getIndex",
                            value: function() {
                                return this.index_
                            }
                        }]), e
                    }(),
                    Rt = function() {
                        function e(t) {
                            w(this, e), this.indexedFilter_ = new xt(t.getIndex()), this.index_ = t.getIndex(), this.startPost_ = e.getStartPost_(t), this.endPost_ = e.getEndPost_(t)
                        }
                        return C(e, [{
                            key: "getStartPost",
                            value: function() {
                                return this.startPost_
                            }
                        }, {
                            key: "getEndPost",
                            value: function() {
                                return this.endPost_
                            }
                        }, {
                            key: "matches",
                            value: function(e) {
                                return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0
                            }
                        }, {
                            key: "updateChild",
                            value: function(e, t, n, r, i, o) {
                                return this.matches(new Qe(t, n)) || (n = _t.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, i, o)
                            }
                        }, {
                            key: "updateFullNode",
                            value: function(e, t, n) {
                                t.isLeafNode() && (t = _t.EMPTY_NODE);
                                var r = t.withIndex(this.index_);
                                r = r.updatePriority(_t.EMPTY_NODE);
                                var i = this;
                                return t.forEachChild(ct, (function(e, t) {
                                    i.matches(new Qe(e, t)) || (r = r.updateImmediateChild(e, _t.EMPTY_NODE))
                                })), this.indexedFilter_.updateFullNode(e, r, n)
                            }
                        }, {
                            key: "updatePriority",
                            value: function(e, t) {
                                return e
                            }
                        }, {
                            key: "filtersNodes",
                            value: function() {
                                return !0
                            }
                        }, {
                            key: "getIndexedFilter",
                            value: function() {
                                return this.indexedFilter_
                            }
                        }, {
                            key: "getIndex",
                            value: function() {
                                return this.index_
                            }
                        }], [{
                            key: "getStartPost_",
                            value: function(e) {
                                if (e.hasStart()) {
                                    var t = e.getIndexStartName();
                                    return e.getIndex().makePost(e.getIndexStartValue(), t)
                                }
                                return e.getIndex().minPost()
                            }
                        }, {
                            key: "getEndPost_",
                            value: function(e) {
                                if (e.hasEnd()) {
                                    var t = e.getIndexEndName();
                                    return e.getIndex().makePost(e.getIndexEndValue(), t)
                                }
                                return e.getIndex().maxPost()
                            }
                        }]), e
                    }(),
                    jt = function() {
                        function e(t) {
                            w(this, e), this.rangedFilter_ = new Rt(t), this.index_ = t.getIndex(), this.limit_ = t.getLimit(), this.reverse_ = !t.isViewFromLeft()
                        }
                        return C(e, [{
                            key: "updateChild",
                            value: function(e, t, n, r, i, o) {
                                return this.rangedFilter_.matches(new Qe(t, n)) || (n = _t.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, i, o) : this.fullLimitUpdateChild_(e, t, n, i, o)
                            }
                        }, {
                            key: "updateFullNode",
                            value: function(e, t, n) {
                                var r;
                                if (t.isLeafNode() || t.isEmpty()) r = _t.EMPTY_NODE.withIndex(this.index_);
                                else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                                    var i;
                                    r = _t.EMPTY_NODE.withIndex(this.index_), i = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                                    for (var o = 0; i.hasNext() && o < this.limit_;) {
                                        var a = i.getNext();
                                        if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), a) <= 0 : this.index_.compare(a, this.rangedFilter_.getEndPost()) <= 0)) break;
                                        r = r.updateImmediateChild(a.name, a.node), o++
                                    }
                                } else {
                                    var s, u, l, c;
                                    if (r = (r = t.withIndex(this.index_)).updatePriority(_t.EMPTY_NODE), this.reverse_) {
                                        c = r.getReverseIterator(this.index_), s = this.rangedFilter_.getEndPost(), u = this.rangedFilter_.getStartPost();
                                        var h = this.index_.getCompare();
                                        l = function(e, t) {
                                            return h(t, e)
                                        }
                                    } else c = r.getIterator(this.index_), s = this.rangedFilter_.getStartPost(), u = this.rangedFilter_.getEndPost(), l = this.index_.getCompare();
                                    for (var d = 0, f = !1; c.hasNext();) {
                                        var v = c.getNext();
                                        !f && l(s, v) <= 0 && (f = !0), f && d < this.limit_ && l(v, u) <= 0 ? d++ : r = r.updateImmediateChild(v.name, _t.EMPTY_NODE)
                                    }
                                }
                                return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n)
                            }
                        }, {
                            key: "updatePriority",
                            value: function(e, t) {
                                return e
                            }
                        }, {
                            key: "filtersNodes",
                            value: function() {
                                return !0
                            }
                        }, {
                            key: "getIndexedFilter",
                            value: function() {
                                return this.rangedFilter_.getIndexedFilter()
                            }
                        }, {
                            key: "getIndex",
                            value: function() {
                                return this.index_
                            }
                        }, {
                            key: "fullLimitUpdateChild_",
                            value: function(e, t, n, r, i) {
                                var a;
                                if (this.reverse_) {
                                    var s = this.index_.getCompare();
                                    a = function(e, t) {
                                        return s(t, e)
                                    }
                                } else a = this.index_.getCompare();
                                var u = e;
                                Object(o.e)(u.numChildren() === this.limit_, "");
                                var l = new Qe(t, n),
                                    c = this.reverse_ ? u.getFirstChild(this.index_) : u.getLastChild(this.index_),
                                    h = this.rangedFilter_.matches(l);
                                if (u.hasChild(t)) {
                                    for (var d = u.getImmediateChild(t), f = r.getChildAfterChild(this.index_, c, this.reverse_); null != f && (f.name === t || u.hasChild(f.name));) f = r.getChildAfterChild(this.index_, f, this.reverse_);
                                    var v = null == f ? 1 : a(f, l);
                                    if (h && !n.isEmpty() && v >= 0) return null != i && i.trackChildChange(Nt(t, n, d)), u.updateImmediateChild(t, n);
                                    null != i && i.trackChildChange(Ot(t, d));
                                    var p = u.updateImmediateChild(t, _t.EMPTY_NODE);
                                    return null != f && this.rangedFilter_.matches(f) ? (null != i && i.trackChildChange(Pt(f.name, f.node)), p.updateImmediateChild(f.name, f.node)) : p
                                }
                                return n.isEmpty() ? e : h && a(c, l) >= 0 ? (null != i && (i.trackChildChange(Ot(c.name, c.node)), i.trackChildChange(Pt(t, n))), u.updateImmediateChild(t, n).updateImmediateChild(c.name, _t.EMPTY_NODE)) : e
                            }
                        }]), e
                    }(),
                    Dt = function() {
                        function e() {
                            w(this, e), this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = ct
                        }
                        return C(e, [{
                            key: "hasStart",
                            value: function() {
                                return this.startSet_
                            }
                        }, {
                            key: "hasStartAfter",
                            value: function() {
                                return this.startAfterSet_
                            }
                        }, {
                            key: "hasEndBefore",
                            value: function() {
                                return this.endBeforeSet_
                            }
                        }, {
                            key: "isViewFromLeft",
                            value: function() {
                                return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_
                            }
                        }, {
                            key: "getIndexStartValue",
                            value: function() {
                                return Object(o.e)(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
                            }
                        }, {
                            key: "getIndexStartName",
                            value: function() {
                                return Object(o.e)(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : V
                            }
                        }, {
                            key: "hasEnd",
                            value: function() {
                                return this.endSet_
                            }
                        }, {
                            key: "getIndexEndValue",
                            value: function() {
                                return Object(o.e)(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
                            }
                        }, {
                            key: "getIndexEndName",
                            value: function() {
                                return Object(o.e)(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : Y
                            }
                        }, {
                            key: "hasLimit",
                            value: function() {
                                return this.limitSet_
                            }
                        }, {
                            key: "hasAnchoredLimit",
                            value: function() {
                                return this.limitSet_ && "" !== this.viewFrom_
                            }
                        }, {
                            key: "getLimit",
                            value: function() {
                                return Object(o.e)(this.limitSet_, "Only valid if limit has been set"), this.limit_
                            }
                        }, {
                            key: "getIndex",
                            value: function() {
                                return this.index_
                            }
                        }, {
                            key: "loadsAllData",
                            value: function() {
                                return !(this.startSet_ || this.endSet_ || this.limitSet_)
                            }
                        }, {
                            key: "isDefault",
                            value: function() {
                                return this.loadsAllData() && this.index_ === ct
                            }
                        }, {
                            key: "copy",
                            value: function() {
                                var t = new e;
                                return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_, t.startSet_ = this.startSet_, t.indexStartValue_ = this.indexStartValue_, t.startNameSet_ = this.startNameSet_, t.indexStartName_ = this.indexStartName_, t.endSet_ = this.endSet_, t.indexEndValue_ = this.indexEndValue_, t.endNameSet_ = this.endNameSet_, t.indexEndName_ = this.indexEndName_, t.index_ = this.index_, t.viewFrom_ = this.viewFrom_, t
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function At(e, t, n) {
                    var r = e.copy();
                    return r.startSet_ = !0, void 0 === t && (t = null), r.indexStartValue_ = t, null != n ? (r.startNameSet_ = !0, r.indexStartName_ = n) : (r.startNameSet_ = !1, r.indexStartName_ = ""), r
                }

                function Lt(e, t, n) {
                    var r = e.copy();
                    return r.endSet_ = !0, void 0 === t && (t = null), r.indexEndValue_ = t, void 0 !== n ? (r.endNameSet_ = !0, r.indexEndName_ = n) : (r.endNameSet_ = !1, r.indexEndName_ = ""), r
                }

                function qt(e, t) {
                    var n = e.copy();
                    return n.index_ = t, n
                }

                function Ft(e) {
                    var t, n = {};
                    return e.isDefault() || (e.index_ === ct ? t = "$priority" : e.index_ === bt ? t = "$value" : e.index_ === Ge ? t = "$key" : (Object(o.e)(e.index_ instanceof wt, "Unrecognized index type!"), t = e.index_.toString()), n.orderBy = Object(o.Q)(t), e.startSet_ && (n.startAt = Object(o.Q)(e.indexStartValue_), e.startNameSet_ && (n.startAt += "," + Object(o.Q)(e.indexStartName_))), e.endSet_ && (n.endAt = Object(o.Q)(e.indexEndValue_), e.endNameSet_ && (n.endAt += "," + Object(o.Q)(e.indexEndName_))), e.limitSet_ && (e.isViewFromLeft() ? n.limitToFirst = e.limit_ : n.limitToLast = e.limit_)), n
                }

                function Mt(e) {
                    var t = {};
                    if (e.startSet_ && (t.sp = e.indexStartValue_, e.startNameSet_ && (t.sn = e.indexStartName_)), e.endSet_ && (t.ep = e.indexEndValue_, e.endNameSet_ && (t.en = e.indexEndName_)), e.limitSet_) {
                        t.l = e.limit_;
                        var n = e.viewFrom_;
                        "" === n && (n = e.isViewFromLeft() ? "l" : "r"), t.vf = n
                    }
                    return e.index_ !== ct && (t.i = e.index_.toString()), t
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Wt = function(e) {
                        c(n, e);
                        var t = d(n);

                        function n(e, r, i, o) {
                            var a;
                            return w(this, n), (a = t.call(this)).repoInfo_ = e, a.onDataUpdate_ = r, a.authTokenProvider_ = i, a.appCheckTokenProvider_ = o, a.log_ = U("p:rest:"), a.listens_ = {}, a
                        }
                        return C(n, [{
                            key: "reportStats",
                            value: function(e) {
                                throw new Error("Method not implemented.")
                            }
                        }, {
                            key: "listen",
                            value: function(e, t, r, i) {
                                var a = this,
                                    s = e._path.toString();
                                this.log_("Listen called for " + s + " " + e._queryIdentifier);
                                var u = n.getListenId_(e, r),
                                    l = {};
                                this.listens_[u] = l;
                                var c = Ft(e._queryParams);
                                this.restRequest_(s + ".json", c, (function(e, t) {
                                    var n = t;
                                    (404 === e && (n = null, e = null), null === e && a.onDataUpdate_(s, n, !1, r), Object(o.N)(a.listens_, u) === l) && i(e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", null)
                                }))
                            }
                        }, {
                            key: "unlisten",
                            value: function(e, t) {
                                var r = n.getListenId_(e, t);
                                delete this.listens_[r]
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                var t = this,
                                    n = Ft(e._queryParams),
                                    r = e._path.toString(),
                                    i = new o.a;
                                return this.restRequest_(r + ".json", n, (function(e, n) {
                                    var o = n;
                                    404 === e && (o = null, e = null), null === e ? (t.onDataUpdate_(r, o, !1, null), i.resolve(o)) : i.reject(new Error(o))
                                })), i.promise
                            }
                        }, {
                            key: "refreshAuthToken",
                            value: function(e) {}
                        }, {
                            key: "restRequest_",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = arguments.length > 2 ? arguments[2] : void 0;
                                return n.format = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then((function(i) {
                                    var a = u(i, 2),
                                        s = a[0],
                                        l = a[1];
                                    s && s.accessToken && (n.auth = s.accessToken), l && l.token && (n.ac = l.token);
                                    var c = (t.repoInfo_.secure ? "https://" : "http://") + t.repoInfo_.host + e + "?ns=" + t.repoInfo_.namespace + Object(o.L)(n);
                                    t.log_("Sending REST request for " + c);
                                    var h = new XMLHttpRequest;
                                    h.onreadystatechange = function() {
                                        if (r && 4 === h.readyState) {
                                            t.log_("REST Response for " + c + " received. status:", h.status, "response:", h.responseText);
                                            var e = null;
                                            if (h.status >= 200 && h.status < 300) {
                                                try {
                                                    e = Object(o.J)(h.responseText)
                                                } catch (e) {
                                                    z("Failed to parse JSON response for " + c + ": " + h.responseText)
                                                }
                                                r(null, e)
                                            } else 401 !== h.status && 404 !== h.status && z("Got unsuccessful REST response for " + c + " Status: " + h.status), r(h.status);
                                            r = null
                                        }
                                    }, h.open("GET", c, !0), h.send()
                                }))
                            }
                        }], [{
                            key: "getListenId_",
                            value: function(e, t) {
                                return void 0 !== t ? "tag$" + t : (Object(o.e)(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString())
                            }
                        }]), n
                    }(be),
                    Ut = function() {
                        function e() {
                            w(this, e), this.rootNode_ = _t.EMPTY_NODE
                        }
                        return C(e, [{
                            key: "getNode",
                            value: function(e) {
                                return this.rootNode_.getChild(e)
                            }
                        }, {
                            key: "updateSnapshot",
                            value: function(e, t) {
                                this.rootNode_ = this.rootNode_.updateChild(e, t)
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function Bt() {
                    return {
                        value: null,
                        children: new Map
                    }
                }

                function Ht(e, t, n) {
                    if (De(t)) e.value = n, e.children.clear();
                    else if (null !== e.value) e.value = e.value.updateChild(t, n);
                    else {
                        var r = Se(t);
                        e.children.has(r) || e.children.set(r, Bt()), Ht(e.children.get(r), t = Oe(t), n)
                    }
                }

                function zt(e, t, n) {
                    null !== e.value ? n(t, e.value) : function(e, t) {
                        e.children.forEach((function(e, n) {
                            t(n, e)
                        }))
                    }
                    /**
                     * @license
                     * Copyright 2017 Google LLC
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    (e, (function(e, r) {
                        zt(r, new Ie(t.toString() + "/" + e), n)
                    }))
                }
                var Qt, Vt = function() {
                        function e(t) {
                            w(this, e), this.collection_ = t, this.last_ = null
                        }
                        return C(e, [{
                            key: "get",
                            value: function() {
                                var e = this.collection_.get(),
                                    t = Object.assign({}, e);
                                return this.last_ && Z(this.last_, (function(e, n) {
                                    t[e] = t[e] - n
                                })), this.last_ = e, t
                            }
                        }]), e
                    }(),
                    Yt = function() {
                        function e(t, n) {
                            w(this, e), this.server_ = n, this.statsToReport_ = {}, this.statsListener_ = new Vt(t);
                            var r = 1e4 + 2e4 * Math.random();
                            ie(this.reportStats_.bind(this), Math.floor(r))
                        }
                        return C(e, [{
                            key: "reportStats_",
                            value: function() {
                                var e = this,
                                    t = this.statsListener_.get(),
                                    n = {},
                                    r = !1;
                                Z(t, (function(t, i) {
                                    i > 0 && Object(o.k)(e.statsToReport_, t) && (n[t] = i, r = !0)
                                })), r && this.server_.reportStats(n), ie(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function Gt(e) {
                    return {
                        fromUser: !1,
                        fromServer: !0,
                        queryId: e,
                        tagged: !0
                    }
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                ! function(e) {
                    e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
                }(Qt || (Qt = {}));
                var Kt, $t = function() {
                        function e(t, n, r) {
                            w(this, e), this.path = t, this.affectedTree = n, this.revert = r, this.type = Qt.ACK_USER_WRITE, this.source = {
                                fromUser: !0,
                                fromServer: !1,
                                queryId: null,
                                tagged: !1
                            }
                        }
                        return C(e, [{
                            key: "operationForChild",
                            value: function(t) {
                                if (De(this.path)) {
                                    if (null != this.affectedTree.value) return Object(o.e)(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
                                    var n = this.affectedTree.subtree(new Ie(t));
                                    return new e(Ee(), n, this.revert)
                                }
                                return Object(o.e)(Se(this.path) === t, "operationForChild called for unrelated child."), new e(Oe(this.path), this.affectedTree, this.revert)
                            }
                        }]), e
                    }(),
                    Jt = function() {
                        function e(t, n) {
                            w(this, e), this.source = t, this.path = n, this.type = Qt.LISTEN_COMPLETE
                        }
                        return C(e, [{
                            key: "operationForChild",
                            value: function(t) {
                                return De(this.path) ? new e(this.source, Ee()) : new e(this.source, Oe(this.path))
                            }
                        }]), e
                    }(),
                    Xt = function() {
                        function e(t, n, r) {
                            w(this, e), this.source = t, this.path = n, this.snap = r, this.type = Qt.OVERWRITE
                        }
                        return C(e, [{
                            key: "operationForChild",
                            value: function(t) {
                                return De(this.path) ? new e(this.source, Ee(), this.snap.getImmediateChild(t)) : new e(this.source, Oe(this.path), this.snap)
                            }
                        }]), e
                    }(),
                    Zt = function() {
                        function e(t, n, r) {
                            w(this, e), this.source = t, this.path = n, this.children = r, this.type = Qt.MERGE
                        }
                        return C(e, [{
                            key: "operationForChild",
                            value: function(t) {
                                if (De(this.path)) {
                                    var n = this.children.subtree(new Ie(t));
                                    return n.isEmpty() ? null : n.value ? new Xt(this.source, Ee(), n.value) : new e(this.source, Ee(), n)
                                }
                                return Object(o.e)(Se(this.path) === t, "Can't get a merge for a child not on the path of the operation"), new e(this.source, Oe(this.path), this.children)
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
                            }
                        }]), e
                    }(),
                    en = function() {
                        function e(t, n, r) {
                            w(this, e), this.node_ = t, this.fullyInitialized_ = n, this.filtered_ = r
                        }
                        return C(e, [{
                            key: "isFullyInitialized",
                            value: function() {
                                return this.fullyInitialized_
                            }
                        }, {
                            key: "isFiltered",
                            value: function() {
                                return this.filtered_
                            }
                        }, {
                            key: "isCompleteForPath",
                            value: function(e) {
                                if (De(e)) return this.isFullyInitialized() && !this.filtered_;
                                var t = Se(e);
                                return this.isCompleteForChild(t)
                            }
                        }, {
                            key: "isCompleteForChild",
                            value: function(e) {
                                return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
                            }
                        }, {
                            key: "getNode",
                            value: function() {
                                return this.node_
                            }
                        }]), e
                    }(),
                    tn = C((function e(t) {
                        w(this, e), this.query_ = t, this.index_ = this.query_._queryParams.getIndex()
                    }));
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function nn(e, t, n, r, i, a) {
                    var s = r.filter((function(e) {
                        return e.type === n
                    }));
                    s.sort((function(t, n) {
                        return function(e, t, n) {
                            if (null == t.childName || null == n.childName) throw Object(o.f)("Should only compare child_ events.");
                            var r = new Qe(t.childName, t.snapshotNode),
                                i = new Qe(n.childName, n.snapshotNode);
                            return e.index_.compare(r, i)
                        }
                        /**
                         * @license
                         * Copyright 2017 Google LLC
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        (e, t, n)
                    })), s.forEach((function(n) {
                        var r = function(e, t, n) {
                            return "value" === t.type || "child_removed" === t.type || (t.prevName = n.getPredecessorChildName(t.childName, t.snapshotNode, e.index_)), t
                        }(e, n, a);
                        i.forEach((function(i) {
                            i.respondsTo(n.type) && t.push(i.createEvent(r, e.query_))
                        }))
                    }))
                }

                function rn(e, t) {
                    return {
                        eventCache: e,
                        serverCache: t
                    }
                }

                function on(e, t, n, r) {
                    return rn(new en(t, n, r), e.serverCache)
                }

                function an(e, t, n, r) {
                    return rn(e.eventCache, new en(t, n, r))
                }

                function sn(e) {
                    return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null
                }

                function un(e) {
                    return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ln = function() {
                        return Kt || (Kt = new Ze(K)), Kt
                    },
                    cn = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ln();
                            w(this, e), this.value = t, this.children = n
                        }
                        return C(e, [{
                            key: "isEmpty",
                            value: function() {
                                return null === this.value && this.children.isEmpty()
                            }
                        }, {
                            key: "findRootMostMatchingPathAndValue",
                            value: function(e, t) {
                                if (null != this.value && t(this.value)) return {
                                    path: Ee(),
                                    value: this.value
                                };
                                if (De(e)) return null;
                                var n = Se(e),
                                    r = this.children.get(n);
                                if (null !== r) {
                                    var i = r.findRootMostMatchingPathAndValue(Oe(e), t);
                                    return null != i ? {
                                        path: je(new Ie(n), i.path),
                                        value: i.value
                                    } : null
                                }
                                return null
                            }
                        }, {
                            key: "findRootMostValueAndPath",
                            value: function(e) {
                                return this.findRootMostMatchingPathAndValue(e, (function() {
                                    return !0
                                }))
                            }
                        }, {
                            key: "subtree",
                            value: function(t) {
                                if (De(t)) return this;
                                var n = Se(t),
                                    r = this.children.get(n);
                                return null !== r ? r.subtree(Oe(t)) : new e(null)
                            }
                        }, {
                            key: "set",
                            value: function(t, n) {
                                if (De(t)) return new e(n, this.children);
                                var r = Se(t),
                                    i = (this.children.get(r) || new e(null)).set(Oe(t), n),
                                    o = this.children.insert(r, i);
                                return new e(this.value, o)
                            }
                        }, {
                            key: "remove",
                            value: function(t) {
                                if (De(t)) return this.children.isEmpty() ? new e(null) : new e(null, this.children);
                                var n = Se(t),
                                    r = this.children.get(n);
                                if (r) {
                                    var i, o = r.remove(Oe(t));
                                    return i = o.isEmpty() ? this.children.remove(n) : this.children.insert(n, o), null === this.value && i.isEmpty() ? new e(null) : new e(this.value, i)
                                }
                                return this
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                if (De(e)) return this.value;
                                var t = Se(e),
                                    n = this.children.get(t);
                                return n ? n.get(Oe(e)) : null
                            }
                        }, {
                            key: "setTree",
                            value: function(t, n) {
                                if (De(t)) return n;
                                var r, i = Se(t),
                                    o = (this.children.get(i) || new e(null)).setTree(Oe(t), n);
                                return r = o.isEmpty() ? this.children.remove(i) : this.children.insert(i, o), new e(this.value, r)
                            }
                        }, {
                            key: "fold",
                            value: function(e) {
                                return this.fold_(Ee(), e)
                            }
                        }, {
                            key: "fold_",
                            value: function(e, t) {
                                var n = {};
                                return this.children.inorderTraversal((function(r, i) {
                                    n[r] = i.fold_(je(e, r), t)
                                })), t(e, this.value, n)
                            }
                        }, {
                            key: "findOnPath",
                            value: function(e, t) {
                                return this.findOnPath_(e, Ee(), t)
                            }
                        }, {
                            key: "findOnPath_",
                            value: function(e, t, n) {
                                var r = !!this.value && n(t, this.value);
                                if (r) return r;
                                if (De(e)) return null;
                                var i = Se(e),
                                    o = this.children.get(i);
                                return o ? o.findOnPath_(Oe(e), je(t, i), n) : null
                            }
                        }, {
                            key: "foreachOnPath",
                            value: function(e, t) {
                                return this.foreachOnPath_(e, Ee(), t)
                            }
                        }, {
                            key: "foreachOnPath_",
                            value: function(t, n, r) {
                                if (De(t)) return this;
                                this.value && r(n, this.value);
                                var i = Se(t),
                                    o = this.children.get(i);
                                return o ? o.foreachOnPath_(Oe(t), je(n, i), r) : new e(null)
                            }
                        }, {
                            key: "foreach",
                            value: function(e) {
                                this.foreach_(Ee(), e)
                            }
                        }, {
                            key: "foreach_",
                            value: function(e, t) {
                                this.children.inorderTraversal((function(n, r) {
                                    r.foreach_(je(e, n), t)
                                })), this.value && t(e, this.value)
                            }
                        }, {
                            key: "foreachChild",
                            value: function(e) {
                                this.children.inorderTraversal((function(t, n) {
                                    n.value && e(t, n.value)
                                }))
                            }
                        }], [{
                            key: "fromObject",
                            value: function(t) {
                                var n = new e(null);
                                return Z(t, (function(e, t) {
                                    n = n.set(new Ie(e), t)
                                })), n
                            }
                        }]), e
                    }(),
                    hn = function() {
                        function e(t) {
                            w(this, e), this.writeTree_ = t
                        }
                        return C(e, null, [{
                            key: "empty",
                            value: function() {
                                return new e(new cn(null))
                            }
                        }]), e
                    }();

                function dn(e, t, n) {
                    if (De(t)) return new hn(new cn(n));
                    var r = e.writeTree_.findRootMostValueAndPath(t);
                    if (null != r) {
                        var i = r.path,
                            o = r.value,
                            a = Ae(i, t);
                        return o = o.updateChild(a, n), new hn(e.writeTree_.set(i, o))
                    }
                    var s = new cn(n),
                        u = e.writeTree_.setTree(t, s);
                    return new hn(u)
                }

                function fn(e, t, n) {
                    var r = e;
                    return Z(n, (function(e, n) {
                        r = dn(r, je(t, e), n)
                    })), r
                }

                function vn(e, t) {
                    if (De(t)) return hn.empty();
                    var n = e.writeTree_.setTree(t, new cn(null));
                    return new hn(n)
                }

                function pn(e, t) {
                    return null != _n(e, t)
                }

                function _n(e, t) {
                    var n = e.writeTree_.findRootMostValueAndPath(t);
                    return null != n ? e.writeTree_.get(n.path).getChild(Ae(n.path, t)) : null
                }

                function yn(e) {
                    var t = [],
                        n = e.writeTree_.value;
                    return null != n ? n.isLeafNode() || n.forEachChild(ct, (function(e, n) {
                        t.push(new Qe(e, n))
                    })) : e.writeTree_.children.inorderTraversal((function(e, n) {
                        null != n.value && t.push(new Qe(e, n.value))
                    })), t
                }

                function mn(e, t) {
                    if (De(t)) return e;
                    var n = _n(e, t);
                    return new hn(null != n ? new cn(n) : e.writeTree_.subtree(t))
                }

                function gn(e) {
                    return e.writeTree_.isEmpty()
                }

                function kn(e, t) {
                    return function e(t, n, r) {
                        if (null != n.value) return r.updateChild(t, n.value);
                        var i = null;
                        return n.children.inorderTraversal((function(n, a) {
                            ".priority" === n ? (Object(o.e)(null !== a.value, "Priority writes must always be leaf nodes"), i = a.value) : r = e(je(t, n), a, r)
                        })), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(je(t, ".priority"), i)), r
                    }
                    /**
                     * @license
                     * Copyright 2017 Google LLC
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    (Ee(), e.writeTree_, t)
                }

                function wn(e, t) {
                    return An(t, e)
                }

                function bn(e, t) {
                    for (var n = 0; n < e.allWrites.length; n++) {
                        var r = e.allWrites[n];
                        if (r.writeId === t) return r
                    }
                    return null
                }

                function Cn(e, t) {
                    var n = e.allWrites.findIndex((function(e) {
                        return e.writeId === t
                    }));
                    Object(o.e)(n >= 0, "removeWrite called with nonexistent writeId.");
                    var r = e.allWrites[n];
                    e.allWrites.splice(n, 1);
                    for (var i = r.visible, a = !1, s = e.allWrites.length - 1; i && s >= 0;) {
                        var u = e.allWrites[s];
                        u.visible && (s >= n && Tn(u, r.path) ? i = !1 : Fe(r.path, u.path) && (a = !0)), s--
                    }
                    if (i) {
                        if (a) return function(e) {
                            e.visibleWrites = En(e.allWrites, In, Ee()), e.allWrites.length > 0 ? e.lastWriteId = e.allWrites[e.allWrites.length - 1].writeId : e.lastWriteId = -1
                        }(e), !0;
                        r.snap ? e.visibleWrites = vn(e.visibleWrites, r.path) : Z(r.children, (function(t) {
                            e.visibleWrites = vn(e.visibleWrites, je(r.path, t))
                        }));
                        return !0
                    }
                    return !1
                }

                function Tn(e, t) {
                    if (e.snap) return Fe(e.path, t);
                    for (var n in e.children)
                        if (e.children.hasOwnProperty(n) && Fe(je(e.path, n), t)) return !0;
                    return !1
                }

                function In(e) {
                    return e.visible
                }

                function En(e, t, n) {
                    for (var r = hn.empty(), i = 0; i < e.length; ++i) {
                        var a = e[i];
                        if (t(a)) {
                            var s = a.path,
                                u = void 0;
                            if (a.snap) Fe(n, s) ? r = dn(r, u = Ae(n, s), a.snap) : Fe(s, n) && (u = Ae(s, n), r = dn(r, Ee(), a.snap.getChild(u)));
                            else {
                                if (!a.children) throw Object(o.f)("WriteRecord should have .snap or .children");
                                if (Fe(n, s)) r = fn(r, u = Ae(n, s), a.children);
                                else if (Fe(s, n))
                                    if (De(u = Ae(s, n))) r = fn(r, Ee(), a.children);
                                    else {
                                        var l = Object(o.N)(a.children, Se(u));
                                        if (l) {
                                            var c = l.getChild(Oe(u));
                                            r = dn(r, Ee(), c)
                                        }
                                    }
                            }
                        }
                    }
                    return r
                }

                function Sn(e, t, n, r, i) {
                    if (r || i) {
                        var o = mn(e.visibleWrites, t);
                        if (!i && gn(o)) return n;
                        if (i || null != n || pn(o, Ee())) {
                            return kn(En(e.allWrites, (function(e) {
                                return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (Fe(e.path, t) || Fe(t, e.path))
                            }), t), n || _t.EMPTY_NODE)
                        }
                        return null
                    }
                    var a = _n(e.visibleWrites, t);
                    if (null != a) return a;
                    var s = mn(e.visibleWrites, t);
                    return gn(s) ? n : null != n || pn(s, Ee()) ? kn(s, n || _t.EMPTY_NODE) : null
                }

                function Pn(e, t, n, r) {
                    return Sn(e.writeTree, e.treePath, t, n, r)
                }

                function On(e, t) {
                    return function(e, t, n) {
                        var r = _t.EMPTY_NODE,
                            i = _n(e.visibleWrites, t);
                        if (i) return i.isLeafNode() || i.forEachChild(ct, (function(e, t) {
                            r = r.updateImmediateChild(e, t)
                        })), r;
                        if (n) {
                            var o = mn(e.visibleWrites, t);
                            return n.forEachChild(ct, (function(e, t) {
                                var n = kn(mn(o, new Ie(e)), t);
                                r = r.updateImmediateChild(e, n)
                            })), yn(o).forEach((function(e) {
                                r = r.updateImmediateChild(e.name, e.node)
                            })), r
                        }
                        return yn(mn(e.visibleWrites, t)).forEach((function(e) {
                            r = r.updateImmediateChild(e.name, e.node)
                        })), r
                    }(e.writeTree, e.treePath, t)
                }

                function Nn(e, t, n, r) {
                    return function(e, t, n, r, i) {
                        Object(o.e)(r || i, "Either existingEventSnap or existingServerSnap must exist");
                        var a = je(t, n);
                        if (pn(e.visibleWrites, a)) return null;
                        var s = mn(e.visibleWrites, a);
                        return gn(s) ? i.getChild(n) : kn(s, i.getChild(n))
                    }(e.writeTree, e.treePath, t, n, r)
                }

                function xn(e, t) {
                    return function(e, t) {
                        return _n(e.visibleWrites, t)
                    }(e.writeTree, je(e.treePath, t))
                }

                function Rn(e, t, n, r, i, o) {
                    return function(e, t, n, r, i, o, a) {
                        var s, u = mn(e.visibleWrites, t),
                            l = _n(u, Ee());
                        if (null != l) s = l;
                        else {
                            if (null == n) return [];
                            s = kn(u, n)
                        }
                        if ((s = s.withIndex(a)).isEmpty() || s.isLeafNode()) return [];
                        for (var c = [], h = a.getCompare(), d = o ? s.getReverseIteratorFrom(r, a) : s.getIteratorFrom(r, a), f = d.getNext(); f && c.length < i;) 0 !== h(f, r) && c.push(f), f = d.getNext();
                        return c
                    }(e.writeTree, e.treePath, t, n, r, i, o)
                }

                function jn(e, t, n) {
                    return function(e, t, n, r) {
                        var i = je(t, n),
                            o = _n(e.visibleWrites, i);
                        return null != o ? o : r.isCompleteForChild(n) ? kn(mn(e.visibleWrites, i), r.getNode().getImmediateChild(n)) : null
                    }(e.writeTree, e.treePath, t, n)
                }

                function Dn(e, t) {
                    return An(je(e.treePath, t), e.writeTree)
                }

                function An(e, t) {
                    return {
                        treePath: e,
                        writeTree: t
                    }
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Ln = function() {
                        function e() {
                            w(this, e), this.changeMap = new Map
                        }
                        return C(e, [{
                            key: "trackChildChange",
                            value: function(e) {
                                var t = e.type,
                                    n = e.childName;
                                Object(o.e)("child_added" === t || "child_changed" === t || "child_removed" === t, "Only child changes supported for tracking"), Object(o.e)(".priority" !== n, "Only non-priority child changes can be tracked.");
                                var r = this.changeMap.get(n);
                                if (r) {
                                    var i = r.type;
                                    if ("child_added" === t && "child_removed" === i) this.changeMap.set(n, Nt(n, e.snapshotNode, r.snapshotNode));
                                    else if ("child_removed" === t && "child_added" === i) this.changeMap.delete(n);
                                    else if ("child_removed" === t && "child_changed" === i) this.changeMap.set(n, Ot(n, r.oldSnap));
                                    else if ("child_changed" === t && "child_added" === i) this.changeMap.set(n, Pt(n, e.snapshotNode));
                                    else {
                                        if ("child_changed" !== t || "child_changed" !== i) throw Object(o.f)("Illegal combination of changes: " + e + " occurred after " + r);
                                        this.changeMap.set(n, Nt(n, e.snapshotNode, r.oldSnap))
                                    }
                                } else this.changeMap.set(n, e)
                            }
                        }, {
                            key: "getChanges",
                            value: function() {
                                return Array.from(this.changeMap.values())
                            }
                        }]), e
                    }(),
                    qn = new(function() {
                        function e() {
                            w(this, e)
                        }
                        return C(e, [{
                            key: "getCompleteChild",
                            value: function(e) {
                                return null
                            }
                        }, {
                            key: "getChildAfterChild",
                            value: function(e, t, n) {
                                return null
                            }
                        }]), e
                    }()),
                    Fn = function() {
                        function e(t, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            w(this, e), this.writes_ = t, this.viewCache_ = n, this.optCompleteServerCache_ = r
                        }
                        return C(e, [{
                            key: "getCompleteChild",
                            value: function(e) {
                                var t = this.viewCache_.eventCache;
                                if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
                                var n = null != this.optCompleteServerCache_ ? new en(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
                                return jn(this.writes_, e, n)
                            }
                        }, {
                            key: "getChildAfterChild",
                            value: function(e, t, n) {
                                var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : un(this.viewCache_),
                                    i = Rn(this.writes_, r, t, 1, n, e);
                                return 0 === i.length ? null : i[0]
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function Mn(e, t, n, r, i) {
                    var a, s, u = new Ln;
                    if (n.type === Qt.OVERWRITE) {
                        var l = n;
                        l.source.fromUser ? a = Bn(e, t, l.path, l.snap, r, i, u) : (Object(o.e)(l.source.fromServer, "Unknown source."), s = l.source.tagged || t.serverCache.isFiltered() && !De(l.path), a = Un(e, t, l.path, l.snap, r, i, s, u))
                    } else if (n.type === Qt.MERGE) {
                        var c = n;
                        c.source.fromUser ? a = function(e, t, n, r, i, o, a) {
                            var s = t;
                            return r.foreach((function(r, u) {
                                var l = je(n, r);
                                Hn(t, Se(l)) && (s = Bn(e, s, l, u, i, o, a))
                            })), r.foreach((function(r, u) {
                                var l = je(n, r);
                                Hn(t, Se(l)) || (s = Bn(e, s, l, u, i, o, a))
                            })), s
                        }(e, t, c.path, c.children, r, i, u) : (Object(o.e)(c.source.fromServer, "Unknown source."), s = c.source.tagged || t.serverCache.isFiltered(), a = Qn(e, t, c.path, c.children, r, i, s, u))
                    } else if (n.type === Qt.ACK_USER_WRITE) {
                        var h = n;
                        a = h.revert ? function(e, t, n, r, i, a) {
                            var s;
                            if (null != xn(r, n)) return t;
                            var u, l = new Fn(r, t, i),
                                c = t.eventCache.getNode();
                            if (De(n) || ".priority" === Se(n)) {
                                var h;
                                if (t.serverCache.isFullyInitialized()) h = Pn(r, un(t));
                                else {
                                    var d = t.serverCache.getNode();
                                    Object(o.e)(d instanceof _t, "serverChildren would be complete if leaf node"), h = On(r, d)
                                }
                                h = h, u = e.filter.updateFullNode(c, h, a)
                            } else {
                                var f = Se(n),
                                    v = jn(r, f, t.serverCache);
                                null == v && t.serverCache.isCompleteForChild(f) && (v = c.getImmediateChild(f)), (u = null != v ? e.filter.updateChild(c, f, v, Oe(n), l, a) : t.eventCache.getNode().hasChild(f) ? e.filter.updateChild(c, f, _t.EMPTY_NODE, Oe(n), l, a) : c).isEmpty() && t.serverCache.isFullyInitialized() && (s = Pn(r, un(t))).isLeafNode() && (u = e.filter.updateFullNode(u, s, a))
                            }
                            return s = t.serverCache.isFullyInitialized() || null != xn(r, Ee()), on(t, u, s, e.filter.filtersNodes())
                        }
                        /**
                         * @license
                         * Copyright 2017 Google LLC
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        (e, t, h.path, r, i, u): function(e, t, n, r, i, o, a) {
                            if (null != xn(i, n)) return t;
                            var s = t.serverCache.isFiltered(),
                                u = t.serverCache;
                            if (null != r.value) {
                                if (De(n) && u.isFullyInitialized() || u.isCompleteForPath(n)) return Un(e, t, n, u.getNode().getChild(n), i, o, s, a);
                                if (De(n)) {
                                    var l = new cn(null);
                                    return u.getNode().forEachChild(Ge, (function(e, t) {
                                        l = l.set(new Ie(e), t)
                                    })), Qn(e, t, n, l, i, o, s, a)
                                }
                                return t
                            }
                            var c = new cn(null);
                            return r.foreach((function(e, t) {
                                var r = je(n, e);
                                u.isCompleteForPath(r) && (c = c.set(e, u.getNode().getChild(r)))
                            })), Qn(e, t, n, c, i, o, s, a)
                        }(e, t, h.path, h.affectedTree, r, i, u)
                    } else {
                        if (n.type !== Qt.LISTEN_COMPLETE) throw Object(o.f)("Unknown operation type: " + n.type);
                        a = function(e, t, n, r, i) {
                            var o = t.serverCache,
                                a = an(t, o.getNode(), o.isFullyInitialized() || De(n), o.isFiltered());
                            return Wn(e, a, n, r, qn, i)
                        }(e, t, n.path, r, u)
                    }
                    var d = u.getChanges();
                    return function(e, t, n) {
                        var r = t.eventCache;
                        if (r.isFullyInitialized()) {
                            var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                                o = sn(e);
                            (n.length > 0 || !e.eventCache.isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(St(sn(t)))
                        }
                    }(t, a, d), {
                        viewCache: a,
                        changes: d
                    }
                }

                function Wn(e, t, n, r, i, a) {
                    var s, u, l = t.eventCache;
                    if (null != xn(r, n)) return t;
                    if (De(n))
                        if (Object(o.e)(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), t.serverCache.isFiltered()) {
                            var c = un(t),
                                h = On(r, c instanceof _t ? c : _t.EMPTY_NODE);
                            s = e.filter.updateFullNode(t.eventCache.getNode(), h, a)
                        } else {
                            var d = Pn(r, un(t));
                            s = e.filter.updateFullNode(t.eventCache.getNode(), d, a)
                        }
                    else {
                        var f = Se(n);
                        if (".priority" === f) {
                            Object(o.e)(1 === Pe(n), "Can't have a priority with additional path components");
                            var v = l.getNode(),
                                p = Nn(r, n, v, u = t.serverCache.getNode());
                            s = null != p ? e.filter.updatePriority(v, p) : l.getNode()
                        } else {
                            var _, y = Oe(n);
                            if (l.isCompleteForChild(f)) {
                                u = t.serverCache.getNode();
                                var m = Nn(r, n, l.getNode(), u);
                                _ = null != m ? l.getNode().getImmediateChild(f).updateChild(y, m) : l.getNode().getImmediateChild(f)
                            } else _ = jn(r, f, t.serverCache);
                            s = null != _ ? e.filter.updateChild(l.getNode(), f, _, y, i, a) : l.getNode()
                        }
                    }
                    return on(t, s, l.isFullyInitialized() || De(n), e.filter.filtersNodes())
                }

                function Un(e, t, n, r, i, o, a, s) {
                    var u, l = t.serverCache,
                        c = a ? e.filter : e.filter.getIndexedFilter();
                    if (De(n)) u = c.updateFullNode(l.getNode(), r, null);
                    else if (c.filtersNodes() && !l.isFiltered()) {
                        var h = l.getNode().updateChild(n, r);
                        u = c.updateFullNode(l.getNode(), h, null)
                    } else {
                        var d = Se(n);
                        if (!l.isCompleteForPath(n) && Pe(n) > 1) return t;
                        var f = Oe(n),
                            v = l.getNode().getImmediateChild(d).updateChild(f, r);
                        u = ".priority" === d ? c.updatePriority(l.getNode(), v) : c.updateChild(l.getNode(), d, v, f, qn, null)
                    }
                    var p = an(t, u, l.isFullyInitialized() || De(n), c.filtersNodes());
                    return Wn(e, p, n, i, new Fn(i, p, o), s)
                }

                function Bn(e, t, n, r, i, o, a) {
                    var s, u, l = t.eventCache,
                        c = new Fn(i, t, o);
                    if (De(n)) u = e.filter.updateFullNode(t.eventCache.getNode(), r, a), s = on(t, u, !0, e.filter.filtersNodes());
                    else {
                        var h = Se(n);
                        if (".priority" === h) u = e.filter.updatePriority(t.eventCache.getNode(), r), s = on(t, u, l.isFullyInitialized(), l.isFiltered());
                        else {
                            var d, f = Oe(n),
                                v = l.getNode().getImmediateChild(h);
                            if (De(f)) d = r;
                            else {
                                var p = c.getCompleteChild(h);
                                d = null != p ? ".priority" === Ne(f) && p.getChild(Re(f)).isEmpty() ? p : p.updateChild(f, r) : _t.EMPTY_NODE
                            }
                            if (v.equals(d)) s = t;
                            else s = on(t, e.filter.updateChild(l.getNode(), h, d, f, c, a), l.isFullyInitialized(), e.filter.filtersNodes())
                        }
                    }
                    return s
                }

                function Hn(e, t) {
                    return e.eventCache.isCompleteForChild(t)
                }

                function zn(e, t, n) {
                    return n.foreach((function(e, n) {
                        t = t.updateChild(e, n)
                    })), t
                }

                function Qn(e, t, n, r, i, o, a, s) {
                    if (t.serverCache.getNode().isEmpty() && !t.serverCache.isFullyInitialized()) return t;
                    var u, l = t;
                    u = De(n) ? r : new cn(null).setTree(n, r);
                    var c = t.serverCache.getNode();
                    return u.children.inorderTraversal((function(n, r) {
                        if (c.hasChild(n)) {
                            var u = zn(0, t.serverCache.getNode().getImmediateChild(n), r);
                            l = Un(e, l, new Ie(n), u, i, o, a, s)
                        }
                    })), u.children.inorderTraversal((function(n, r) {
                        var u = !t.serverCache.isCompleteForChild(n) && null === r.value;
                        if (!c.hasChild(n) && !u) {
                            var h = zn(0, t.serverCache.getNode().getImmediateChild(n), r);
                            l = Un(e, l, new Ie(n), h, i, o, a, s)
                        }
                    })), l
                }
                var Vn, Yn = function() {
                    function e(t, n) {
                        w(this, e), this.query_ = t, this.eventRegistrations_ = [];
                        var r, i = this.query_._queryParams,
                            o = new xt(i.getIndex()),
                            a = (r = i).loadsAllData() ? new xt(r.getIndex()) : r.hasLimit() ? new jt(r) : new Rt(r);
                        this.processor_ =
                            /**
                             * @license
                             * Copyright 2017 Google LLC
                             *
                             * Licensed under the Apache License, Version 2.0 (the "License");
                             * you may not use this file except in compliance with the License.
                             * You may obtain a copy of the License at
                             *
                             *   http://www.apache.org/licenses/LICENSE-2.0
                             *
                             * Unless required by applicable law or agreed to in writing, software
                             * distributed under the License is distributed on an "AS IS" BASIS,
                             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                             * See the License for the specific language governing permissions and
                             * limitations under the License.
                             */
                            function(e) {
                                return {
                                    filter: e
                                }
                            }(a);
                        var s = n.serverCache,
                            u = n.eventCache,
                            l = o.updateFullNode(_t.EMPTY_NODE, s.getNode(), null),
                            c = a.updateFullNode(_t.EMPTY_NODE, u.getNode(), null),
                            h = new en(l, s.isFullyInitialized(), o.filtersNodes()),
                            d = new en(c, u.isFullyInitialized(), a.filtersNodes());
                        this.viewCache_ = rn(d, h), this.eventGenerator_ = new tn(this.query_)
                    }
                    return C(e, [{
                        key: "query",
                        get: function() {
                            return this.query_
                        }
                    }]), e
                }();

                function Gn(e, t) {
                    var n = un(e.viewCache_);
                    return n && (e.query._queryParams.loadsAllData() || !De(t) && !n.getImmediateChild(Se(t)).isEmpty()) ? n.getChild(t) : null
                }

                function Kn(e) {
                    return 0 === e.eventRegistrations_.length
                }

                function $n(e, t, n) {
                    var r = [];
                    if (n) {
                        Object(o.e)(null == t, "A cancel should cancel all event registrations.");
                        var i = e.query._path;
                        e.eventRegistrations_.forEach((function(e) {
                            var t = e.createCancelEvent(n, i);
                            t && r.push(t)
                        }))
                    }
                    if (t) {
                        for (var a = [], s = 0; s < e.eventRegistrations_.length; ++s) {
                            var u = e.eventRegistrations_[s];
                            if (u.matches(t)) {
                                if (t.hasAnyCallback()) {
                                    a = a.concat(e.eventRegistrations_.slice(s + 1));
                                    break
                                }
                            } else a.push(u)
                        }
                        e.eventRegistrations_ = a
                    } else e.eventRegistrations_ = [];
                    return r
                }

                function Jn(e, t, n, r) {
                    t.type === Qt.MERGE && null !== t.source.queryId && (Object(o.e)(un(e.viewCache_), "We should always have a full cache before handling merges"), Object(o.e)(sn(e.viewCache_), "Missing event cache, even though we have a server cache"));
                    var i, a, s = e.viewCache_,
                        u = Mn(e.processor_, s, t, n, r);
                    return i = e.processor_, a = u.viewCache, Object(o.e)(a.eventCache.getNode().isIndexed(i.filter.getIndex()), "Event snap not indexed"), Object(o.e)(a.serverCache.getNode().isIndexed(i.filter.getIndex()), "Server snap not indexed"), Object(o.e)(u.viewCache.serverCache.isFullyInitialized() || !s.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), e.viewCache_ = u.viewCache, Xn(e, u.changes, u.viewCache.eventCache.getNode(), null)
                }

                function Xn(e, t, n, r) {
                    var i = r ? [r] : e.eventRegistrations_;
                    return function(e, t, n, r) {
                        var i = [],
                            o = [];
                        return t.forEach((function(t) {
                            var n;
                            "child_changed" === t.type && e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && o.push((n = t.childName, {
                                type: "child_moved",
                                snapshotNode: t.snapshotNode,
                                childName: n
                            }))
                        })), nn(e, i, "child_removed", t, r, n), nn(e, i, "child_added", t, r, n), nn(e, i, "child_moved", o, r, n), nn(e, i, "child_changed", t, r, n), nn(e, i, "value", t, r, n), i
                    }(e.eventGenerator_, t, n, i)
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Zn, er = C((function e() {
                    w(this, e), this.views = new Map
                }));

                function tr(e) {
                    return 0 === e.views.size
                }

                function nr(e, t, n, r) {
                    var i = t.source.queryId;
                    if (null !== i) {
                        var a = e.views.get(i);
                        return Object(o.e)(null != a, "SyncTree gave us an op for an invalid query."), Jn(a, t, n, r)
                    }
                    var s, u = [],
                        l = y(e.views.values());
                    try {
                        for (l.s(); !(s = l.n()).done;) {
                            var c = s.value;
                            u = u.concat(Jn(c, t, n, r))
                        }
                    } catch (e) {
                        l.e(e)
                    } finally {
                        l.f()
                    }
                    return u
                }

                function rr(e, t, n, r, i) {
                    var o = t._queryIdentifier,
                        a = e.views.get(o);
                    if (!a) {
                        var s = Pn(n, i ? r : null),
                            u = !1;
                        s ? u = !0 : r instanceof _t ? (s = On(n, r), u = !1) : (s = _t.EMPTY_NODE, u = !1);
                        var l = rn(new en(s, u, !1), new en(r, i, !1));
                        return new Yn(t, l)
                    }
                    return a
                }

                function ir(e, t, n, r, i, o) {
                    var a = rr(e, t, r, i, o);
                    return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, a),
                        function(e, t) {
                            e.eventRegistrations_.push(t)
                        }(a, n),
                        function(e, t) {
                            var n = e.viewCache_.eventCache,
                                r = [];
                            return n.getNode().isLeafNode() || n.getNode().forEachChild(ct, (function(e, t) {
                                r.push(Pt(e, t))
                            })), n.isFullyInitialized() && r.push(St(n.getNode())), Xn(e, r, n.getNode(), t)
                        }(a, n)
                }

                function or(e, t, n, r) {
                    var i = t._queryIdentifier,
                        a = [],
                        s = [],
                        l = cr(e);
                    if ("default" === i) {
                        var c, h = y(e.views.entries());
                        try {
                            for (h.s(); !(c = h.n()).done;) {
                                var d = u(c.value, 2),
                                    f = d[0],
                                    v = d[1];
                                s = s.concat($n(v, n, r)), Kn(v) && (e.views.delete(f), v.query._queryParams.loadsAllData() || a.push(v.query))
                            }
                        } catch (e) {
                            h.e(e)
                        } finally {
                            h.f()
                        }
                    } else {
                        var p = e.views.get(i);
                        p && (s = s.concat($n(p, n, r)), Kn(p) && (e.views.delete(i), p.query._queryParams.loadsAllData() || a.push(p.query)))
                    }
                    return l && !cr(e) && a.push(new(Object(o.e)(Vn, "Reference.ts has not been loaded"), Vn)(t._repo, t._path)), {
                        removed: a,
                        events: s
                    }
                }

                function ar(e) {
                    var t, n = [],
                        r = y(e.views.values());
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var i = t.value;
                            i.query._queryParams.loadsAllData() || n.push(i)
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return n
                }

                function sr(e, t) {
                    var n, r = null,
                        i = y(e.views.values());
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var o = n.value;
                            r = r || Gn(o, t)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    return r
                }

                function ur(e, t) {
                    if (t._queryParams.loadsAllData()) return hr(e);
                    var n = t._queryIdentifier;
                    return e.views.get(n)
                }

                function lr(e, t) {
                    return null != ur(e, t)
                }

                function cr(e) {
                    return null != hr(e)
                }

                function hr(e) {
                    var t, n = y(e.views.values());
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value;
                            if (r.query._queryParams.loadsAllData()) return r
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return null
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var dr = 1,
                    fr = C((function e(t) {
                        w(this, e), this.listenProvider_ = t, this.syncPointTree_ = new cn(null), this.pendingWriteTree_ = {
                            visibleWrites: hn.empty(),
                            allWrites: [],
                            lastWriteId: -1
                        }, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
                    }));

                function vr(e, t, n, r, i) {
                    return function(e, t, n, r, i) {
                        Object(o.e)(r > e.lastWriteId, "Stacking an older write on top of newer ones"), void 0 === i && (i = !0), e.allWrites.push({
                            path: t,
                            snap: n,
                            writeId: r,
                            visible: i
                        }), i && (e.visibleWrites = dn(e.visibleWrites, t, n)), e.lastWriteId = r
                    }(e.pendingWriteTree_, t, n, r, i), i ? Cr(e, new Xt({
                        fromUser: !0,
                        fromServer: !1,
                        queryId: null,
                        tagged: !1
                    }, t, n)) : []
                }

                function pr(e, t, n, r) {
                    ! function(e, t, n, r) {
                        Object(o.e)(r > e.lastWriteId, "Stacking an older merge on top of newer ones"), e.allWrites.push({
                            path: t,
                            children: n,
                            writeId: r,
                            visible: !0
                        }), e.visibleWrites = fn(e.visibleWrites, t, n), e.lastWriteId = r
                    }(e.pendingWriteTree_, t, n, r);
                    var i = cn.fromObject(n);
                    return Cr(e, new Zt({
                        fromUser: !0,
                        fromServer: !1,
                        queryId: null,
                        tagged: !1
                    }, t, i))
                }

                function _r(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = bn(e.pendingWriteTree_, t),
                        i = Cn(e.pendingWriteTree_, t);
                    if (i) {
                        var o = new cn(null);
                        return null != r.snap ? o = o.set(Ee(), !0) : Z(r.children, (function(e) {
                            o = o.set(new Ie(e), !0)
                        })), Cr(e, new $t(r.path, o, n))
                    }
                    return []
                }

                function yr(e, t, n) {
                    return Cr(e, new Xt({
                        fromUser: !1,
                        fromServer: !0,
                        queryId: null,
                        tagged: !1
                    }, t, n))
                }

                function mr(e, t, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = t._path,
                        a = e.syncPointTree_.get(o),
                        s = [];
                    if (a && ("default" === t._queryIdentifier || lr(a, t))) {
                        var u = or(a, t, n, r);
                        tr(a) && (e.syncPointTree_ = e.syncPointTree_.remove(o));
                        var l = u.removed;
                        if (s = u.events, !i) {
                            var c = -1 !== l.findIndex((function(e) {
                                    return e._queryParams.loadsAllData()
                                })),
                                h = e.syncPointTree_.findOnPath(o, (function(e, t) {
                                    return cr(t)
                                }));
                            if (c && !h) {
                                var d = e.syncPointTree_.subtree(o);
                                if (!d.isEmpty())
                                    for (var f = Nr(d), v = 0; v < f.length; ++v) {
                                        var p = f[v],
                                            _ = p.query,
                                            y = Tr(e, p);
                                        e.listenProvider_.startListening(xr(_), Ir(e, _), y.hashFn, y.onComplete)
                                    }
                            }
                            if (!h && l.length > 0 && !r)
                                if (c) {
                                    var m = null;
                                    e.listenProvider_.stopListening(xr(t), m)
                                } else l.forEach((function(t) {
                                    var n = e.queryToTagMap.get(Er(t));
                                    e.listenProvider_.stopListening(xr(t), n)
                                }))
                        }
                        Rr(e, l)
                    }
                    return s
                }

                function gr(e, t, n, r) {
                    var i = Sr(e, r);
                    if (null != i) {
                        var o = Pr(i),
                            a = o.path,
                            s = o.queryId,
                            u = Ae(a, t);
                        return Or(e, a, new Xt(Gt(s), u, n))
                    }
                    return []
                }

                function kr(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = t._path,
                        a = null,
                        s = !1;
                    e.syncPointTree_.foreachOnPath(i, (function(e, t) {
                        var n = Ae(e, i);
                        a = a || sr(t, n), s = s || cr(t)
                    }));
                    var u, l = e.syncPointTree_.get(i);
                    if (l ? (s = s || cr(l), a = a || sr(l, Ee())) : (l = new er, e.syncPointTree_ = e.syncPointTree_.set(i, l)), null != a) u = !0;
                    else {
                        u = !1, a = _t.EMPTY_NODE;
                        var c = e.syncPointTree_.subtree(i);
                        c.foreachChild((function(e, t) {
                            var n = sr(t, Ee());
                            n && (a = a.updateImmediateChild(e, n))
                        }))
                    }
                    var h = lr(l, t);
                    if (!h && !t._queryParams.loadsAllData()) {
                        var d = Er(t);
                        Object(o.e)(!e.queryToTagMap.has(d), "View does not exist, but we have a tag");
                        var f = jr();
                        e.queryToTagMap.set(d, f), e.tagToQueryMap.set(f, d)
                    }
                    var v = wn(e.pendingWriteTree_, i),
                        p = ir(l, t, n, v, a, u);
                    if (!h && !s && !r) {
                        var _ = ur(l, t);
                        p = p.concat(Dr(e, t, _))
                    }
                    return p
                }

                function wr(e, t, n) {
                    var r = e.pendingWriteTree_,
                        i = e.syncPointTree_.findOnPath(t, (function(e, n) {
                            var r = sr(n, Ae(e, t));
                            if (r) return r
                        }));
                    return Sn(r, t, i, n, !0)
                }

                function br(e, t) {
                    var n = t._path,
                        r = null;
                    e.syncPointTree_.foreachOnPath(n, (function(e, t) {
                        var i = Ae(e, n);
                        r = r || sr(t, i)
                    }));
                    var i = e.syncPointTree_.get(n);
                    i ? r = r || sr(i, Ee()) : (i = new er, e.syncPointTree_ = e.syncPointTree_.set(n, i));
                    var o = null != r,
                        a = o ? new en(r, !0, !1) : null;
                    return function(e) {
                        return sn(e.viewCache_)
                    }(rr(i, t, wn(e.pendingWriteTree_, t._path), o ? a.getNode() : _t.EMPTY_NODE, o))
                }

                function Cr(e, t) {
                    return function e(t, n, r, i) {
                        if (De(t.path)) return function e(t, n, r, i) {
                            var o = n.get(Ee());
                            null == r && null != o && (r = sr(o, Ee()));
                            var a = [];
                            n.children.inorderTraversal((function(n, o) {
                                var s = r ? r.getImmediateChild(n) : null,
                                    u = Dn(i, n),
                                    l = t.operationForChild(n);
                                l && (a = a.concat(e(l, o, s, u)))
                            })), o && (a = a.concat(nr(o, t, i, r)));
                            return a
                        }(t, n, r, i);
                        var o = n.get(Ee());
                        null == r && null != o && (r = sr(o, Ee()));
                        var a = [],
                            s = Se(t.path),
                            u = t.operationForChild(s),
                            l = n.children.get(s);
                        if (l && u) {
                            var c = r ? r.getImmediateChild(s) : null,
                                h = Dn(i, s);
                            a = a.concat(e(u, l, c, h))
                        }
                        return o && (a = a.concat(nr(o, t, i, r))), a
                    }(t, e.syncPointTree_, null, wn(e.pendingWriteTree_, Ee()))
                }

                function Tr(e, t) {
                    var n = t.query,
                        r = Ir(e, n);
                    return {
                        hashFn: function() {
                            return (function(e) {
                                return e.viewCache_.serverCache.getNode()
                            }(t) || _t.EMPTY_NODE).hash()
                        },
                        onComplete: function(t) {
                            if ("ok" === t) return r ? function(e, t, n) {
                                var r = Sr(e, n);
                                if (r) {
                                    var i = Pr(r),
                                        o = i.path,
                                        a = i.queryId,
                                        s = Ae(o, t);
                                    return Or(e, o, new Jt(Gt(a), s))
                                }
                                return []
                            }(e, n._path, r) : function(e, t) {
                                return Cr(e, new Jt({
                                    fromUser: !1,
                                    fromServer: !0,
                                    queryId: null,
                                    tagged: !1
                                }, t))
                            }(e, n._path);
                            var i = function(e, t) {
                                var n = "Unknown Error";
                                "too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === e ? n = "Client doesn't have permission to access the desired data." : "unavailable" === e && (n = "The service is unavailable");
                                var r = new Error(e + " at " + t._path.toString() + ": " + n);
                                return r.code = e.toUpperCase(), r
                            }(t, n);
                            return mr(e, n, null, i)
                        }
                    }
                }

                function Ir(e, t) {
                    var n = Er(t);
                    return e.queryToTagMap.get(n)
                }

                function Er(e) {
                    return e._path.toString() + "$" + e._queryIdentifier
                }

                function Sr(e, t) {
                    return e.tagToQueryMap.get(t)
                }

                function Pr(e) {
                    var t = e.indexOf("$");
                    return Object(o.e)(-1 !== t && t < e.length - 1, "Bad queryKey."), {
                        queryId: e.substr(t + 1),
                        path: new Ie(e.substr(0, t))
                    }
                }

                function Or(e, t, n) {
                    var r = e.syncPointTree_.get(t);
                    return Object(o.e)(r, "Missing sync point for query tag that we're tracking"), nr(r, n, wn(e.pendingWriteTree_, t), null)
                }

                function Nr(e) {
                    return e.fold((function(e, t, n) {
                        if (t && cr(t)) return [hr(t)];
                        var r = [];
                        return t && (r = ar(t)), Z(n, (function(e, t) {
                            r = r.concat(t)
                        })), r
                    }))
                }

                function xr(e) {
                    return e._queryParams.loadsAllData() && !e._queryParams.isDefault() ? new(Object(o.e)(Zn, "Reference.ts has not been loaded"), Zn)(e._repo, e._path) : e
                }

                function Rr(e, t) {
                    for (var n = 0; n < t.length; ++n) {
                        var r = t[n];
                        if (!r._queryParams.loadsAllData()) {
                            var i = Er(r),
                                o = e.queryToTagMap.get(i);
                            e.queryToTagMap.delete(i), e.tagToQueryMap.delete(o)
                        }
                    }
                }

                function jr() {
                    return dr++
                }

                function Dr(e, t, n) {
                    var r = t._path,
                        i = Ir(e, t),
                        a = Tr(e, n),
                        s = e.listenProvider_.startListening(xr(t), i, a.hashFn, a.onComplete),
                        u = e.syncPointTree_.subtree(r);
                    if (i) Object(o.e)(!cr(u.value), "If we're adding a query, it shouldn't be shadowed");
                    else
                        for (var l = u.fold((function(e, t, n) {
                                if (!De(e) && t && cr(t)) return [hr(t).query];
                                var r = [];
                                return t && (r = r.concat(ar(t).map((function(e) {
                                    return e.query
                                })))), Z(n, (function(e, t) {
                                    r = r.concat(t)
                                })), r
                            })), c = 0; c < l.length; ++c) {
                            var h = l[c];
                            e.listenProvider_.stopListening(xr(h), Ir(e, h))
                        }
                    return s
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Ar = function() {
                        function e(t) {
                            w(this, e), this.node_ = t
                        }
                        return C(e, [{
                            key: "getImmediateChild",
                            value: function(t) {
                                return new e(this.node_.getImmediateChild(t))
                            }
                        }, {
                            key: "node",
                            value: function() {
                                return this.node_
                            }
                        }]), e
                    }(),
                    Lr = function() {
                        function e(t, n) {
                            w(this, e), this.syncTree_ = t, this.path_ = n
                        }
                        return C(e, [{
                            key: "getImmediateChild",
                            value: function(t) {
                                var n = je(this.path_, t);
                                return new e(this.syncTree_, n)
                            }
                        }, {
                            key: "node",
                            value: function() {
                                return wr(this.syncTree_, this.path_)
                            }
                        }]), e
                    }(),
                    qr = function(e, t, n) {
                        return e && "object" === k(e) ? (Object(o.e)(".sv" in e, "Unexpected leaf node or priority contents"), "string" == typeof e[".sv"] ? Fr(e[".sv"], t, n) : "object" === k(e[".sv"]) ? Mr(e[".sv"], t) : void Object(o.e)(!1, "Unexpected server value: " + JSON.stringify(e, null, 2))) : e
                    },
                    Fr = function(e, t, n) {
                        switch (e) {
                            case "timestamp":
                                return n.timestamp;
                            default:
                                Object(o.e)(!1, "Unexpected server value: " + e)
                        }
                    },
                    Mr = function(e, t, n) {
                        e.hasOwnProperty("increment") || Object(o.e)(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
                        var r = e.increment;
                        "number" != typeof r && Object(o.e)(!1, "Unexpected increment value: " + r);
                        var i = t.node();
                        if (Object(o.e)(null != i, "Expected ChildrenNode.EMPTY_NODE for nulls"), !i.isLeafNode()) return r;
                        var a = i.getValue();
                        return "number" != typeof a ? r : a + r
                    },
                    Wr = function(e, t, n, r) {
                        return Br(t, new Lr(n, e), r)
                    },
                    Ur = function(e, t, n) {
                        return Br(e, new Ar(t), n)
                    };

                function Br(e, t, n) {
                    var r, i = e.getPriority().val(),
                        o = qr(i, t.getImmediateChild(".priority"), n);
                    if (e.isLeafNode()) {
                        var a = e,
                            s = qr(a.getValue(), t, n);
                        return s !== a.getValue() || o !== a.getPriority().val() ? new st(s, mt(o)) : e
                    }
                    var u = e;
                    return r = u, o !== u.getPriority().val() && (r = r.updatePriority(new st(o))), u.forEachChild(ct, (function(e, i) {
                        var o = Br(i, t.getImmediateChild(e), n);
                        o !== i && (r = r.updateImmediateChild(e, o))
                    })), r
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Hr = C((function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            children: {},
                            childCount: 0
                        };
                    w(this, e), this.name = t, this.parent = n, this.node = r
                }));

                function zr(e, t) {
                    for (var n = t instanceof Ie ? t : new Ie(t), r = e, i = Se(n); null !== i;) {
                        var a = Object(o.N)(r.node.children, i) || {
                            children: {},
                            childCount: 0
                        };
                        r = new Hr(i, r, a), i = Se(n = Oe(n))
                    }
                    return r
                }

                function Qr(e) {
                    return e.node.value
                }

                function Vr(e, t) {
                    e.node.value = t, $r(e)
                }

                function Yr(e) {
                    return e.node.childCount > 0
                }

                function Gr(e, t) {
                    Z(e.node.children, (function(n, r) {
                        t(new Hr(n, e, r))
                    }))
                }

                function Kr(e) {
                    return new Ie(null === e.parent ? e.name : Kr(e.parent) + "/" + e.name)
                }

                function $r(e) {
                    null !== e.parent && function(e, t, n) {
                        var r = function(e) {
                                return void 0 === Qr(e) && !Yr(e)
                            }(n),
                            i = Object(o.k)(e.node.children, t);
                        r && i ? (delete e.node.children[t], e.node.childCount--, $r(e)) : r || i || (e.node.children[t] = n.node, e.node.childCount++, $r(e))
                    }
                    /**
                     * @license
                     * Copyright 2017 Google LLC
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    (e.parent, e.name, e)
                }
                var Jr = /[\[\].#$\/\u0000-\u001F\u007F]/,
                    Xr = /[\[\].#$\u0000-\u001F\u007F]/,
                    Zr = function(e) {
                        return "string" == typeof e && 0 !== e.length && !Jr.test(e)
                    },
                    ei = function(e) {
                        return "string" == typeof e && 0 !== e.length && !Xr.test(e)
                    },
                    ti = function(e) {
                        return null === e || "string" == typeof e || "number" == typeof e && !Q(e) || e && "object" === k(e) && Object(o.k)(e, ".sv")
                    },
                    ni = function(e, t, n, r) {
                        r && void 0 === t || ri(Object(o.q)(e, "value"), t, n)
                    },
                    ri = function e(t, n, r) {
                        var i = r instanceof Ie ? new Me(r, t) : r;
                        if (void 0 === n) throw new Error(t + "contains undefined " + Ue(i));
                        if ("function" == typeof n) throw new Error(t + "contains a function " + Ue(i) + " with contents = " + n.toString());
                        if (Q(n)) throw new Error(t + "contains " + n.toString() + " " + Ue(i));
                        if ("string" == typeof n && n.length > 10485760 / 3 && Object(o.O)(n) > 10485760) throw new Error(t + "contains a string greater than 10485760 utf8 bytes " + Ue(i) + " ('" + n.substring(0, 50) + "...')");
                        if (n && "object" === k(n)) {
                            var a = !1,
                                s = !1;
                            if (Z(n, (function(n, r) {
                                    if (".value" === n) a = !0;
                                    else if (".priority" !== n && ".sv" !== n && (s = !0, !Zr(n))) throw new Error(t + " contains an invalid key (" + n + ") " + Ue(i) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                    var u, l;
                                    l = n, (u = i).parts_.length > 0 && (u.byteLength_ += 1), u.parts_.push(l), u.byteLength_ += Object(o.O)(l), We(u), e(t, r, i),
                                        function(e) {
                                            var t = e.parts_.pop();
                                            e.byteLength_ -= Object(o.O)(t), e.parts_.length > 0 && (e.byteLength_ -= 1)
                                        }(i)
                                })), a && s) throw new Error(t + ' contains ".value" child ' + Ue(i) + " in addition to actual children.")
                        }
                    },
                    ii = function(e, t, n, r) {
                        if (!r || void 0 !== t) {
                            var i = Object(o.q)(e, "values");
                            if (!t || "object" !== k(t) || Array.isArray(t)) throw new Error(i + " must be an object containing the children to replace.");
                            var a = [];
                            Z(t, (function(e, t) {
                                    var r = new Ie(e);
                                    if (ri(i, t, je(n, r)), ".priority" === Ne(r) && !ti(t)) throw new Error(i + "contains an invalid value for '" + r.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                                    a.push(r)
                                })),
                                function(e, t) {
                                    var n, r;
                                    for (n = 0; n < t.length; n++)
                                        for (var i = xe(r = t[n]), o = 0; o < i.length; o++)
                                            if (".priority" === i[o] && o === i.length - 1);
                                            else if (!Zr(i[o])) throw new Error(e + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                    t.sort(Le);
                                    var a = null;
                                    for (n = 0; n < t.length; n++) {
                                        if (r = t[n], null !== a && Fe(a, r)) throw new Error(e + "contains a path " + a.toString() + " that is ancestor of another path " + r.toString());
                                        a = r
                                    }
                                }(i, a)
                        }
                    },
                    oi = function(e, t, n) {
                        if (!n || void 0 !== t) {
                            if (Q(t)) throw new Error(Object(o.q)(e, "priority") + "is " + t.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                            if (!ti(t)) throw new Error(Object(o.q)(e, "priority") + "must be a valid Firebase priority (a string, finite number, server value, or null).")
                        }
                    },
                    ai = function(e, t, n, r) {
                        if (!(r && void 0 === n || Zr(n))) throw new Error(Object(o.q)(e, t) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
                    },
                    si = function(e, t, n, r) {
                        if (!(r && void 0 === n || ei(n))) throw new Error(Object(o.q)(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
                    },
                    ui = function(e, t) {
                        if (".info" === Se(t)) throw new Error(e + " failed = Can't modify data under /.info/")
                    },
                    li = function(e, t) {
                        var n = t.path.toString();
                        if ("string" != typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !Zr(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && ! function(e) {
                                return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), ei(e)
                            }(n)) throw new Error(Object(o.q)(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
                    },
                    ci = C((function e() {
                        w(this, e), this.eventLists_ = [], this.recursionDepth_ = 0
                    }));

                function hi(e, t) {
                    for (var n = null, r = 0; r < t.length; r++) {
                        var i = t[r],
                            o = i.getPath();
                        null === n || qe(o, n.path) || (e.eventLists_.push(n), n = null), null === n && (n = {
                            events: [],
                            path: o
                        }), n.events.push(i)
                    }
                    n && e.eventLists_.push(n)
                }

                function di(e, t, n) {
                    hi(e, n), vi(e, (function(e) {
                        return qe(e, t)
                    }))
                }

                function fi(e, t, n) {
                    hi(e, n), vi(e, (function(e) {
                        return Fe(e, t) || Fe(t, e)
                    }))
                }

                function vi(e, t) {
                    e.recursionDepth_++;
                    for (var n = !0, r = 0; r < e.eventLists_.length; r++) {
                        var i = e.eventLists_[r];
                        if (i) t(i.path) ? (pi(e.eventLists_[r]), e.eventLists_[r] = null) : n = !1
                    }
                    n && (e.eventLists_ = []), e.recursionDepth_--
                }

                function pi(e) {
                    for (var t = 0; t < e.events.length; t++) {
                        var n = e.events[t];
                        if (null !== n) {
                            e.events[t] = null;
                            var r = n.getEventRunner();
                            q && W("event: " + n.toString()), re(r)
                        }
                    }
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var _i = function() {
                    function e(t, n, r, i) {
                        w(this, e), this.repoInfo_ = t, this.forceRestClient_ = n, this.authTokenProvider_ = r, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new ci, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = Bt(), this.transactionQueueTree_ = new Hr, this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString()
                    }
                    return C(e, [{
                        key: "toString",
                        value: function() {
                            return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                        }
                    }]), e
                }();

                function yi(e, t, n) {
                    if (e.stats_ = ve(e.repoInfo_), e.forceRestClient_ || ("object" === ("undefined" == typeof window ? "undefined" : k(window)) && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0) e.server_ = new Wt(e.repoInfo_, (function(t, n, r, i) {
                        ki(e, t, n, r, i)
                    }), e.authTokenProvider_, e.appCheckProvider_), setTimeout((function() {
                        return wi(e, !0)
                    }), 0);
                    else {
                        if (null != n) {
                            if ("object" !== k(n)) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                            try {
                                Object(o.Q)(n)
                            } catch (e) {
                                throw new Error("Invalid authOverride provided: " + e)
                            }
                        }
                        e.persistentConnection_ = new He(e.repoInfo_, t, (function(t, n, r, i) {
                            ki(e, t, n, r, i)
                        }), (function(t) {
                            wi(e, t)
                        }), (function(t) {
                            ! function(e, t) {
                                Z(t, (function(t, n) {
                                    bi(e, t, n)
                                }))
                            }(e, t)
                        }), e.authTokenProvider_, e.appCheckProvider_, n), e.server_ = e.persistentConnection_
                    }
                    var r, i, a;
                    e.authTokenProvider_.addTokenChangeListener((function(t) {
                        e.server_.refreshAuthToken(t)
                    })), e.appCheckProvider_.addTokenChangeListener((function(t) {
                        e.server_.refreshAppCheckToken(t.token)
                    })), e.statsReporter_ = (r = e.repoInfo_, i = function() {
                        return new Yt(e.stats_, e.server_)
                    }, a = r.toString(), fe[a] || (fe[a] = i()), fe[a]), e.infoData_ = new Ut, e.infoSyncTree_ = new fr({
                        startListening: function(t, n, r, i) {
                            var o = [],
                                a = e.infoData_.getNode(t._path);
                            return a.isEmpty() || (o = yr(e.infoSyncTree_, t._path, a), setTimeout((function() {
                                i("ok")
                            }), 0)), o
                        },
                        stopListening: function() {}
                    }), bi(e, "connected", !1), e.serverSyncTree_ = new fr({
                        startListening: function(t, n, r, i) {
                            return e.server_.listen(t, r, n, (function(n, r) {
                                var o = i(n, r);
                                fi(e.eventQueue_, t._path, o)
                            })), []
                        },
                        stopListening: function(t, n) {
                            e.server_.unlisten(t, n)
                        }
                    })
                }

                function mi(e) {
                    var t = e.infoData_.getNode(new Ie(".info/serverTimeOffset")).val() || 0;
                    return (new Date).getTime() + t
                }

                function gi(e) {
                    return (t = (t = {
                        timestamp: mi(e)
                    }) || {}).timestamp = t.timestamp || (new Date).getTime(), t;
                    var t
                }

                function ki(e, t, n, r, i) {
                    e.dataUpdateCount++;
                    var a = new Ie(t);
                    n = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, n) : n;
                    var s = [];
                    if (i)
                        if (r) {
                            var u = Object(o.K)(n, (function(e) {
                                return mt(e)
                            }));
                            s = function(e, t, n, r) {
                                var i = Sr(e, r);
                                if (i) {
                                    var o = Pr(i),
                                        a = o.path,
                                        s = o.queryId,
                                        u = Ae(a, t),
                                        l = cn.fromObject(n);
                                    return Or(e, a, new Zt(Gt(s), u, l))
                                }
                                return []
                            }(e.serverSyncTree_, a, u, i)
                        } else {
                            var l = mt(n);
                            s = gr(e.serverSyncTree_, a, l, i)
                        }
                    else if (r) {
                        var c = Object(o.K)(n, (function(e) {
                            return mt(e)
                        }));
                        s = function(e, t, n) {
                            var r = cn.fromObject(n);
                            return Cr(e, new Zt({
                                fromUser: !1,
                                fromServer: !0,
                                queryId: null,
                                tagged: !1
                            }, t, r))
                        }(e.serverSyncTree_, a, c)
                    } else {
                        var h = mt(n);
                        s = yr(e.serverSyncTree_, a, h)
                    }
                    var d = a;
                    s.length > 0 && (d = Di(e, a)), fi(e.eventQueue_, d, s)
                }

                function wi(e, t) {
                    bi(e, "connected", t), !1 === t && function(e) {
                        Oi(e, "onDisconnectEvents");
                        var t = gi(e),
                            n = Bt();
                        zt(e.onDisconnect_, Ee(), (function(r, i) {
                            var o = Wr(r, i, e.serverSyncTree_, t);
                            Ht(n, r, o)
                        }));
                        var r = [];
                        zt(n, Ee(), (function(t, n) {
                            r = r.concat(yr(e.serverSyncTree_, t, n));
                            var i = Fi(e, t);
                            Di(e, i)
                        })), e.onDisconnect_ = Bt(), fi(e.eventQueue_, Ee(), r)
                    }(e)
                }

                function bi(e, t, n) {
                    var r = new Ie("/.info/" + t),
                        i = mt(n);
                    e.infoData_.updateSnapshot(r, i);
                    var o = yr(e.infoSyncTree_, r, i);
                    fi(e.eventQueue_, r, o)
                }

                function Ci(e) {
                    return e.nextWriteId_++
                }

                function Ti(e, t, n, r, i) {
                    Oi(e, "set", {
                        path: t.toString(),
                        value: n,
                        priority: r
                    });
                    var o = gi(e),
                        a = mt(n, r),
                        s = wr(e.serverSyncTree_, t),
                        u = Ur(a, s, o),
                        l = Ci(e),
                        c = vr(e.serverSyncTree_, t, u, l, !0);
                    hi(e.eventQueue_, c), e.server_.put(t.toString(), a.val(!0), (function(n, r) {
                        var o = "ok" === n;
                        o || z("set at " + t + " failed: " + n);
                        var a = _r(e.serverSyncTree_, l, !o);
                        fi(e.eventQueue_, t, a), Ni(e, i, n, r)
                    }));
                    var h = Fi(e, t);
                    Di(e, h), fi(e.eventQueue_, h, [])
                }

                function Ii(e, t, n) {
                    e.server_.onDisconnectCancel(t.toString(), (function(r, i) {
                        "ok" === r && function e(t, n) {
                            if (De(n)) return t.value = null, t.children.clear(), !0;
                            if (null !== t.value) {
                                if (t.value.isLeafNode()) return !1;
                                var r = t.value;
                                return t.value = null, r.forEachChild(ct, (function(e, n) {
                                    Ht(t, new Ie(e), n)
                                })), e(t, n)
                            }
                            if (t.children.size > 0) {
                                var i = Se(n);
                                if (n = Oe(n), t.children.has(i)) e(t.children.get(i), n) && t.children.delete(i);
                                return 0 === t.children.size
                            }
                            return !0
                        }(e.onDisconnect_, t), Ni(e, n, r, i)
                    }))
                }

                function Ei(e, t, n, r) {
                    var i = mt(n);
                    e.server_.onDisconnectPut(t.toString(), i.val(!0), (function(n, o) {
                        "ok" === n && Ht(e.onDisconnect_, t, i), Ni(e, r, n, o)
                    }))
                }

                function Si(e, t, n) {
                    var r;
                    r = ".info" === Se(t._path) ? mr(e.infoSyncTree_, t, n) : mr(e.serverSyncTree_, t, n), di(e.eventQueue_, t._path, r)
                }

                function Pi(e) {
                    e.persistentConnection_ && e.persistentConnection_.interrupt("repo_interrupt")
                }

                function Oi(e) {
                    var t = "";
                    e.persistentConnection_ && (t = e.persistentConnection_.id + ":");
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    W.apply(void 0, [t].concat(r))
                }

                function Ni(e, t, n, r) {
                    t && re((function() {
                        if ("ok" === n) t(null);
                        else {
                            var e = (n || "error").toUpperCase(),
                                i = e;
                            r && (i += ": " + r);
                            var o = new Error(i);
                            o.code = e, t(o)
                        }
                    }))
                }

                function xi(e, t, n) {
                    return wr(e.serverSyncTree_, t, n) || _t.EMPTY_NODE
                }

                function Ri(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.transactionQueueTree_;
                    if (t || qi(e, t), Qr(t)) {
                        var n = Li(e, t);
                        Object(o.e)(n.length > 0, "Sending zero length transaction queue");
                        var r = n.every((function(e) {
                            return 0 === e.status
                        }));
                        r && ji(e, Kr(t), n)
                    } else Yr(t) && Gr(t, (function(t) {
                        Ri(e, t)
                    }))
                }

                function ji(e, t, n) {
                    for (var r = n.map((function(e) {
                            return e.currentWriteId
                        })), i = xi(e, t, r), a = i, s = i.hash(), u = 0; u < n.length; u++) {
                        var l = n[u];
                        Object(o.e)(0 === l.status, "tryToSendTransactionQueue_: items in queue should all be run."), l.status = 1, l.retryCount++;
                        var c = Ae(t, l.path);
                        a = a.updateChild(c, l.currentOutputSnapshotRaw)
                    }
                    var h = a.val(!0),
                        d = t;
                    e.server_.put(d.toString(), h, (function(r) {
                        Oi(e, "transaction put response", {
                            path: d.toString(),
                            status: r
                        });
                        var i = [];
                        if ("ok" === r) {
                            for (var o = [], a = function(t) {
                                    n[t].status = 2, i = i.concat(_r(e.serverSyncTree_, n[t].currentWriteId)), n[t].onComplete && o.push((function() {
                                        return n[t].onComplete(null, !0, n[t].currentOutputSnapshotResolved)
                                    })), n[t].unwatcher()
                                }, s = 0; s < n.length; s++) a(s);
                            qi(e, zr(e.transactionQueueTree_, t)), Ri(e, e.transactionQueueTree_), fi(e.eventQueue_, t, i);
                            for (var u = 0; u < o.length; u++) re(o[u])
                        } else {
                            if ("datastale" === r)
                                for (var l = 0; l < n.length; l++) 3 === n[l].status ? n[l].status = 4 : n[l].status = 0;
                            else {
                                z("transaction at " + d.toString() + " failed: " + r);
                                for (var c = 0; c < n.length; c++) n[c].status = 4, n[c].abortReason = r
                            }
                            Di(e, t)
                        }
                    }), s)
                }

                function Di(e, t) {
                    var n = Ai(e, t),
                        r = Kr(n);
                    return function(e, t, n) {
                        if (0 === t.length) return;
                        for (var r = [], i = [], a = t.filter((function(e) {
                                return 0 === e.status
                            })).map((function(e) {
                                return e.currentWriteId
                            })), s = function(s) {
                                var u, l = t[s],
                                    c = Ae(n, l.path),
                                    h = !1,
                                    d = void 0;
                                if (Object(o.e)(null !== c, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === l.status) h = !0, d = l.abortReason, i = i.concat(_r(e.serverSyncTree_, l.currentWriteId, !0));
                                else if (0 === l.status)
                                    if (l.retryCount >= 25) h = !0, d = "maxretry", i = i.concat(_r(e.serverSyncTree_, l.currentWriteId, !0));
                                    else {
                                        var f = xi(e, l.path, a);
                                        l.currentInputSnapshot = f;
                                        var v = t[s].update(f.val());
                                        if (void 0 !== v) {
                                            ri("transaction failed: Data returned ", v, l.path);
                                            var p = mt(v);
                                            "object" === k(v) && null != v && Object(o.k)(v, ".priority") || (p = p.updatePriority(f.getPriority()));
                                            var _ = l.currentWriteId,
                                                y = gi(e),
                                                m = Ur(p, f, y);
                                            l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = m, l.currentWriteId = Ci(e), a.splice(a.indexOf(_), 1), i = (i = i.concat(vr(e.serverSyncTree_, l.path, m, l.currentWriteId, l.applyLocally))).concat(_r(e.serverSyncTree_, _, !0))
                                        } else h = !0, d = "nodata", i = i.concat(_r(e.serverSyncTree_, l.currentWriteId, !0))
                                    } fi(e.eventQueue_, n, i), i = [], h && (t[s].status = 2, u = t[s].unwatcher, setTimeout(u, Math.floor(0)), t[s].onComplete && ("nodata" === d ? r.push((function() {
                                    return t[s].onComplete(null, !1, t[s].currentInputSnapshot)
                                })) : r.push((function() {
                                    return t[s].onComplete(new Error(d), !1, null)
                                }))))
                            }, u = 0; u < t.length; u++) s(u);
                        qi(e, e.transactionQueueTree_);
                        for (var l = 0; l < r.length; l++) re(r[l]);
                        Ri(e, e.transactionQueueTree_)
                    }(e, Li(e, n), r), r
                }

                function Ai(e, t) {
                    var n, r = e.transactionQueueTree_;
                    for (n = Se(t); null !== n && void 0 === Qr(r);) r = zr(r, n), n = Se(t = Oe(t));
                    return r
                }

                function Li(e, t) {
                    var n = [];
                    return function e(t, n, r) {
                        var i = Qr(n);
                        if (i)
                            for (var o = 0; o < i.length; o++) r.push(i[o]);
                        Gr(n, (function(n) {
                            e(t, n, r)
                        }))
                    }(e, t, n), n.sort((function(e, t) {
                        return e.order - t.order
                    })), n
                }

                function qi(e, t) {
                    var n = Qr(t);
                    if (n) {
                        for (var r = 0, i = 0; i < n.length; i++) 2 !== n[i].status && (n[r] = n[i], r++);
                        n.length = r, Vr(t, n.length > 0 ? n : void 0)
                    }
                    Gr(t, (function(t) {
                        qi(e, t)
                    }))
                }

                function Fi(e, t) {
                    var n = Kr(Ai(e, t)),
                        r = zr(e.transactionQueueTree_, t);
                    return function(e, t, n) {
                            for (var r = n ? e : e.parent; null !== r;) {
                                if (t(r)) return !0;
                                r = r.parent
                            }
                        }(r, (function(t) {
                            Mi(e, t)
                        })), Mi(e, r),
                        function e(t, n, r, i) {
                            r && !i && n(t), Gr(t, (function(t) {
                                e(t, n, !0, i)
                            })), r && i && n(t)
                        }(r, (function(t) {
                            Mi(e, t)
                        })), n
                }

                function Mi(e, t) {
                    var n = Qr(t);
                    if (n) {
                        for (var r = [], i = [], a = -1, s = 0; s < n.length; s++) 3 === n[s].status || (1 === n[s].status ? (Object(o.e)(a === s - 1, "All SENT items should be at beginning of queue."), a = s, n[s].status = 3, n[s].abortReason = "set") : (Object(o.e)(0 === n[s].status, "Unexpected transaction status in abort"), n[s].unwatcher(), i = i.concat(_r(e.serverSyncTree_, n[s].currentWriteId, !0)), n[s].onComplete && r.push(n[s].onComplete.bind(null, new Error("set"), !1, null)))); - 1 === a ? Vr(t, void 0) : n.length = a + 1, fi(e.eventQueue_, Kr(t), i);
                        for (var u = 0; u < r.length; u++) re(r[u])
                    }
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Wi = function(e, t) {
                        var n = Ui(e),
                            r = n.namespace;
                        "firebase.com" === n.domain && H(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" !== r || "localhost" === n.domain || H("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
                        var i = "ws" === n.scheme || "wss" === n.scheme;
                        return {
                            repoInfo: new le(n.host, n.secure, r, i, t, "", r !== n.subdomain),
                            path: new Ie(n.pathString)
                        }
                    },
                    Ui = function(e) {
                        var t = "",
                            n = "",
                            r = "",
                            i = "",
                            o = "",
                            a = !0,
                            s = "https",
                            u = 443;
                        if ("string" == typeof e) {
                            var l = e.indexOf("//");
                            l >= 0 && (s = e.substring(0, l - 1), e = e.substring(l + 2));
                            var c = e.indexOf("/"); - 1 === c && (c = e.length);
                            var h = e.indexOf("?"); - 1 === h && (h = e.length), t = e.substring(0, Math.min(c, h)), c < h && (i = function(e) {
                                for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                                    if (n[r].length > 0) {
                                        var i = n[r];
                                        try {
                                            i = decodeURIComponent(i.replace(/\+/g, " "))
                                        } catch (e) {}
                                        t += "/" + i
                                    } return t
                            }(e.substring(c, h)));
                            var d = function(e) {
                                var t = {};
                                "?" === e.charAt(0) && (e = e.substring(1));
                                var n, r = y(e.split("&"));
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var i = n.value;
                                        if (0 !== i.length) {
                                            var o = i.split("=");
                                            2 === o.length ? t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) : z("Invalid query segment '".concat(i, "' in query '").concat(e, "'"))
                                        }
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                return t
                            }(e.substring(Math.min(e.length, h)));
                            (l = t.indexOf(":")) >= 0 ? (a = "https" === s || "wss" === s, u = parseInt(t.substring(l + 1), 10)) : l = t.length;
                            var f = t.slice(0, l);
                            if ("localhost" === f.toLowerCase()) n = "localhost";
                            else if (f.split(".").length <= 2) n = f;
                            else {
                                var v = t.indexOf(".");
                                r = t.substring(0, v).toLowerCase(), n = t.substring(v + 1), o = r
                            }
                            "ns" in d && (o = d.ns)
                        }
                        return {
                            host: t,
                            port: u,
                            domain: n,
                            subdomain: r,
                            secure: a,
                            scheme: s,
                            pathString: i,
                            namespace: o
                        }
                    },
                    Bi = function() {
                        function e(t, n, r, i) {
                            w(this, e), this.eventType = t, this.eventRegistration = n, this.snapshot = r, this.prevName = i
                        }
                        return C(e, [{
                            key: "getPath",
                            value: function() {
                                var e = this.snapshot.ref;
                                return "value" === this.eventType ? e._path : e.parent._path
                            }
                        }, {
                            key: "getEventType",
                            value: function() {
                                return this.eventType
                            }
                        }, {
                            key: "getEventRunner",
                            value: function() {
                                return this.eventRegistration.getEventRunner(this)
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return this.getPath().toString() + ":" + this.eventType + ":" + Object(o.Q)(this.snapshot.exportVal())
                            }
                        }]), e
                    }(),
                    Hi = function() {
                        function e(t, n, r) {
                            w(this, e), this.eventRegistration = t, this.error = n, this.path = r
                        }
                        return C(e, [{
                            key: "getPath",
                            value: function() {
                                return this.path
                            }
                        }, {
                            key: "getEventType",
                            value: function() {
                                return "cancel"
                            }
                        }, {
                            key: "getEventRunner",
                            value: function() {
                                return this.eventRegistration.getEventRunner(this)
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return this.path.toString() + ":cancel"
                            }
                        }]), e
                    }(),
                    zi = function() {
                        function e(t, n) {
                            w(this, e), this.snapshotCallback = t, this.cancelCallback = n
                        }
                        return C(e, [{
                            key: "onValue",
                            value: function(e, t) {
                                this.snapshotCallback.call(null, e, t)
                            }
                        }, {
                            key: "onCancel",
                            value: function(e) {
                                return Object(o.e)(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e)
                            }
                        }, {
                            key: "hasCancelCallback",
                            get: function() {
                                return !!this.cancelCallback
                            }
                        }, {
                            key: "matches",
                            value: function(e) {
                                return this.snapshotCallback === e.snapshotCallback || void 0 !== this.snapshotCallback.userCallback && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
                            }
                        }]), e
                    }(),
                    Qi = function() {
                        function e(t, n) {
                            w(this, e), this._repo = t, this._path = n
                        }
                        return C(e, [{
                            key: "cancel",
                            value: function() {
                                var e = new o.a;
                                return Ii(this._repo, this._path, e.wrapCallback((function() {}))), e.promise
                            }
                        }, {
                            key: "remove",
                            value: function() {
                                ui("OnDisconnect.remove", this._path);
                                var e = new o.a;
                                return Ei(this._repo, this._path, null, e.wrapCallback((function() {}))), e.promise
                            }
                        }, {
                            key: "set",
                            value: function(e) {
                                ui("OnDisconnect.set", this._path), ni("OnDisconnect.set", e, this._path, !1);
                                var t = new o.a;
                                return Ei(this._repo, this._path, e, t.wrapCallback((function() {}))), t.promise
                            }
                        }, {
                            key: "setWithPriority",
                            value: function(e, t) {
                                ui("OnDisconnect.setWithPriority", this._path), ni("OnDisconnect.setWithPriority", e, this._path, !1), oi("OnDisconnect.setWithPriority", t, !1);
                                var n = new o.a;
                                return function(e, t, n, r, i) {
                                    var o = mt(n, r);
                                    e.server_.onDisconnectPut(t.toString(), o.val(!0), (function(n, r) {
                                        "ok" === n && Ht(e.onDisconnect_, t, o), Ni(e, i, n, r)
                                    }))
                                }(this._repo, this._path, e, t, n.wrapCallback((function() {}))), n.promise
                            }
                        }, {
                            key: "update",
                            value: function(e) {
                                ui("OnDisconnect.update", this._path), ii("OnDisconnect.update", e, this._path, !1);
                                var t = new o.a;
                                return function(e, t, n, r) {
                                    if (Object(o.B)(n)) return W("onDisconnect().update() called with empty data.  Don't do anything."), void Ni(e, r, "ok", void 0);
                                    e.server_.onDisconnectMerge(t.toString(), n, (function(i, o) {
                                        "ok" === i && Z(n, (function(n, r) {
                                            var i = mt(r);
                                            Ht(e.onDisconnect_, je(t, n), i)
                                        })), Ni(e, r, i, o)
                                    }))
                                }(this._repo, this._path, e, t.wrapCallback((function() {}))), t.promise
                            }
                        }]), e
                    }(),
                    Vi = function() {
                        function e(t, n, r, i) {
                            w(this, e), this._repo = t, this._path = n, this._queryParams = r, this._orderByCalled = i
                        }
                        return C(e, [{
                            key: "key",
                            get: function() {
                                return De(this._path) ? null : Ne(this._path)
                            }
                        }, {
                            key: "ref",
                            get: function() {
                                return new $i(this._repo, this._path)
                            }
                        }, {
                            key: "_queryIdentifier",
                            get: function() {
                                var e = Mt(this._queryParams),
                                    t = J(e);
                                return "{}" === t ? "default" : t
                            }
                        }, {
                            key: "_queryObject",
                            get: function() {
                                return Mt(this._queryParams)
                            }
                        }, {
                            key: "isEqual",
                            value: function(t) {
                                if (!((t = Object(o.w)(t)) instanceof e)) return !1;
                                var n = this._repo === t._repo,
                                    r = qe(this._path, t._path),
                                    i = this._queryIdentifier === t._queryIdentifier;
                                return n && r && i
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return this.toString()
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return this._repo.toString() + function(e) {
                                    for (var t = "", n = e.pieceNum_; n < e.pieces_.length; n++) "" !== e.pieces_[n] && (t += "/" + encodeURIComponent(String(e.pieces_[n])));
                                    return t || "/"
                                }(this._path)
                            }
                        }]), e
                    }();

                function Yi(e, t) {
                    if (!0 === e._orderByCalled) throw new Error(t + ": You can't combine multiple orderBy calls.")
                }

                function Gi(e) {
                    var t = null,
                        n = null;
                    if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === Ge) {
                        var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                            i = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
                        if (e.hasStart()) {
                            if (e.getIndexStartName() !== V) throw new Error(r);
                            if ("string" != typeof t) throw new Error(i)
                        }
                        if (e.hasEnd()) {
                            if (e.getIndexEndName() !== Y) throw new Error(r);
                            if ("string" != typeof n) throw new Error(i)
                        }
                    } else if (e.getIndex() === ct) {
                        if (null != t && !ti(t) || null != n && !ti(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")
                    } else if (Object(o.e)(e.getIndex() instanceof wt || e.getIndex() === bt, "unknown index type."), null != t && "object" === k(t) || null != n && "object" === k(n)) throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")
                }

                function Ki(e) {
                    if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")
                }
                var $i = function(e) {
                        c(n, e);
                        var t = d(n);

                        function n(e, r) {
                            return w(this, n), t.call(this, e, r, new Dt, !1)
                        }
                        return C(n, [{
                            key: "parent",
                            get: function() {
                                var e = Re(this._path);
                                return null === e ? null : new n(this._repo, e)
                            }
                        }, {
                            key: "root",
                            get: function() {
                                for (var e = this; null !== e.parent;) e = e.parent;
                                return e
                            }
                        }]), n
                    }(Vi),
                    Ji = function() {
                        function e(t, n, r) {
                            w(this, e), this._node = t, this.ref = n, this._index = r
                        }
                        return C(e, [{
                            key: "priority",
                            get: function() {
                                return this._node.getPriority().val()
                            }
                        }, {
                            key: "key",
                            get: function() {
                                return this.ref.key
                            }
                        }, {
                            key: "size",
                            get: function() {
                                return this._node.numChildren()
                            }
                        }, {
                            key: "child",
                            value: function(t) {
                                var n = new Ie(t),
                                    r = eo(this.ref, t);
                                return new e(this._node.getChild(n), r, ct)
                            }
                        }, {
                            key: "exists",
                            value: function() {
                                return !this._node.isEmpty()
                            }
                        }, {
                            key: "exportVal",
                            value: function() {
                                return this._node.val(!0)
                            }
                        }, {
                            key: "forEach",
                            value: function(t) {
                                var n = this;
                                return !this._node.isLeafNode() && !!this._node.forEachChild(this._index, (function(r, i) {
                                    return t(new e(i, eo(n.ref, r), ct))
                                }))
                            }
                        }, {
                            key: "hasChild",
                            value: function(e) {
                                var t = new Ie(e);
                                return !this._node.getChild(t).isEmpty()
                            }
                        }, {
                            key: "hasChildren",
                            value: function() {
                                return !this._node.isLeafNode() && !this._node.isEmpty()
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return this.exportVal()
                            }
                        }, {
                            key: "val",
                            value: function() {
                                return this._node.val()
                            }
                        }]), e
                    }();

                function Xi(e, t) {
                    return (e = Object(o.w)(e))._checkNotDeleted("ref"), void 0 !== t ? eo(e._root, t) : e._root
                }

                function Zi(e, t) {
                    (e = Object(o.w)(e))._checkNotDeleted("refFromURL");
                    var n = Wi(t, e._repo.repoInfo_.nodeAdmin);
                    li("refFromURL", n);
                    var r = n.repoInfo;
                    return e._repo.repoInfo_.isCustomHost() || r.host === e._repo.repoInfo_.host || H("refFromURL: Host name does not match the current database: (found " + r.host + " but expected " + e._repo.repoInfo_.host + ")"), Xi(e, n.path.toString())
                }

                function eo(e, t) {
                    var n, r, i, a;
                    return null === Se((e = Object(o.w)(e))._path) ? (n = "child", r = "path", a = !1, (i = t) && (i = i.replace(/^\/*\.info(\/|$)/, "/")), si(n, r, i, a)) : si("child", "path", t, !1), new $i(e._repo, je(e._path, t))
                }

                function to(e, t) {
                    e = Object(o.w)(e), ui("push", e._path), ni("push", t, e._path, !0);
                    var n, r = mi(e._repo),
                        i = Tt(r),
                        a = eo(e, i),
                        s = eo(e, i);
                    return n = null != t ? ro(s, t).then((function() {
                        return s
                    })) : Promise.resolve(s), a.then = n.then.bind(n), a.catch = n.then.bind(n, void 0), a
                }

                function no(e) {
                    return ui("remove", e._path), ro(e, null)
                }

                function ro(e, t) {
                    e = Object(o.w)(e), ui("set", e._path), ni("set", t, e._path, !1);
                    var n = new o.a;
                    return Ti(e._repo, e._path, t, null, n.wrapCallback((function() {}))), n.promise
                }

                function io(e, t) {
                    e = Object(o.w)(e), ui("setPriority", e._path), oi("setPriority", t, !1);
                    var n = new o.a;
                    return Ti(e._repo, je(e._path, ".priority"), t, null, n.wrapCallback((function() {}))), n.promise
                }

                function oo(e, t, n) {
                    if (ui("setWithPriority", e._path), ni("setWithPriority", t, e._path, !1), oi("setWithPriority", n, !1), ".length" === e.key || ".keys" === e.key) throw "setWithPriority failed: " + e.key + " is a read-only object.";
                    var r = new o.a;
                    return Ti(e._repo, e._path, t, n, r.wrapCallback((function() {}))), r.promise
                }

                function ao(e, t) {
                    ii("update", t, e._path, !1);
                    var n = new o.a;
                    return function(e, t, n, r) {
                        Oi(e, "update", {
                            path: t.toString(),
                            value: n
                        });
                        var i = !0,
                            o = gi(e),
                            a = {};
                        if (Z(n, (function(n, r) {
                                i = !1, a[n] = Wr(je(t, n), mt(r), e.serverSyncTree_, o)
                            })), i) W("update() called with empty data.  Don't do anything."), Ni(e, r, "ok", void 0);
                        else {
                            var s = Ci(e),
                                u = pr(e.serverSyncTree_, t, a, s);
                            hi(e.eventQueue_, u), e.server_.merge(t.toString(), n, (function(n, i) {
                                var o = "ok" === n;
                                o || z("update at " + t + " failed: " + n);
                                var a = _r(e.serverSyncTree_, s, !o),
                                    u = a.length > 0 ? Di(e, t) : t;
                                fi(e.eventQueue_, u, a), Ni(e, r, n, i)
                            })), Z(n, (function(n) {
                                var r = Fi(e, je(t, n));
                                Di(e, r)
                            })), fi(e.eventQueue_, t, [])
                        }
                    }(e._repo, e._path, t, n.wrapCallback((function() {}))), n.promise
                }

                function so(e) {
                    e = Object(o.w)(e);
                    var t = new zi((function() {})),
                        n = new uo(t);
                    return function(e, t, n) {
                        var r = br(e.serverSyncTree_, t);
                        return null != r ? Promise.resolve(r) : e.server_.get(t).then((function(r) {
                            var i, o = mt(r).withIndex(t._queryParams.getIndex());
                            if (kr(e.serverSyncTree_, t, n, !0), t._queryParams.loadsAllData()) i = yr(e.serverSyncTree_, t._path, o);
                            else {
                                var a = Ir(e.serverSyncTree_, t);
                                i = gr(e.serverSyncTree_, t._path, o, a)
                            }
                            return fi(e.eventQueue_, t._path, i), mr(e.serverSyncTree_, t, n, null, !0), o
                        }), (function(n) {
                            return Oi(e, "get for query " + Object(o.Q)(t) + " failed: " + n), Promise.reject(new Error(n))
                        }))
                    }(e._repo, e, n).then((function(t) {
                        return new Ji(t, new $i(e._repo, e._path), e._queryParams.getIndex())
                    }))
                }
                var uo = function() {
                        function e(t) {
                            w(this, e), this.callbackContext = t
                        }
                        return C(e, [{
                            key: "respondsTo",
                            value: function(e) {
                                return "value" === e
                            }
                        }, {
                            key: "createEvent",
                            value: function(e, t) {
                                var n = t._queryParams.getIndex();
                                return new Bi("value", this, new Ji(e.snapshotNode, new $i(t._repo, t._path), n))
                            }
                        }, {
                            key: "getEventRunner",
                            value: function(e) {
                                var t = this;
                                return "cancel" === e.getEventType() ? function() {
                                    return t.callbackContext.onCancel(e.error)
                                } : function() {
                                    return t.callbackContext.onValue(e.snapshot, null)
                                }
                            }
                        }, {
                            key: "createCancelEvent",
                            value: function(e, t) {
                                return this.callbackContext.hasCancelCallback ? new Hi(this, e, t) : null
                            }
                        }, {
                            key: "matches",
                            value: function(t) {
                                return t instanceof e && (!t.callbackContext || !this.callbackContext || t.callbackContext.matches(this.callbackContext))
                            }
                        }, {
                            key: "hasAnyCallback",
                            value: function() {
                                return null !== this.callbackContext
                            }
                        }]), e
                    }(),
                    lo = function() {
                        function e(t, n) {
                            w(this, e), this.eventType = t, this.callbackContext = n
                        }
                        return C(e, [{
                            key: "respondsTo",
                            value: function(e) {
                                var t = "children_added" === e ? "child_added" : e;
                                return t = "children_removed" === t ? "child_removed" : t, this.eventType === t
                            }
                        }, {
                            key: "createCancelEvent",
                            value: function(e, t) {
                                return this.callbackContext.hasCancelCallback ? new Hi(this, e, t) : null
                            }
                        }, {
                            key: "createEvent",
                            value: function(e, t) {
                                Object(o.e)(null != e.childName, "Child events should have a childName.");
                                var n = eo(new $i(t._repo, t._path), e.childName),
                                    r = t._queryParams.getIndex();
                                return new Bi(e.type, this, new Ji(e.snapshotNode, n, r), e.prevName)
                            }
                        }, {
                            key: "getEventRunner",
                            value: function(e) {
                                var t = this;
                                return "cancel" === e.getEventType() ? function() {
                                    return t.callbackContext.onCancel(e.error)
                                } : function() {
                                    return t.callbackContext.onValue(e.snapshot, e.prevName)
                                }
                            }
                        }, {
                            key: "matches",
                            value: function(t) {
                                return t instanceof e && (this.eventType === t.eventType && (!this.callbackContext || !t.callbackContext || this.callbackContext.matches(t.callbackContext)))
                            }
                        }, {
                            key: "hasAnyCallback",
                            value: function() {
                                return !!this.callbackContext
                            }
                        }]), e
                    }();

                function co(e, t, n, r, i) {
                    var o;
                    if ("object" === k(r) && (o = void 0, i = r), "function" == typeof r && (o = r), i && i.onlyOnce) {
                        var a = n,
                            s = function(t, n) {
                                Si(e._repo, e, l), a(t, n)
                            };
                        s.userCallback = n.userCallback, s.context = n.context, n = s
                    }
                    var u = new zi(n, o || void 0),
                        l = "value" === t ? new uo(u) : new lo(t, u);
                    return function(e, t, n) {
                            var r;
                            r = ".info" === Se(t._path) ? kr(e.infoSyncTree_, t, n) : kr(e.serverSyncTree_, t, n), di(e.eventQueue_, t._path, r)
                        }(e._repo, e, l),
                        function() {
                            return Si(e._repo, e, l)
                        }
                }

                function ho(e, t, n, r) {
                    return co(e, "value", t, n, r)
                }

                function fo(e, t, n, r) {
                    return co(e, "child_added", t, n, r)
                }

                function vo(e, t, n, r) {
                    return co(e, "child_changed", t, n, r)
                }

                function po(e, t, n, r) {
                    return co(e, "child_moved", t, n, r)
                }

                function _o(e, t, n, r) {
                    return co(e, "child_removed", t, n, r)
                }

                function yo(e, t, n) {
                    var r = null,
                        i = n ? new zi(n) : null;
                    "value" === t ? r = new uo(i) : t && (r = new lo(t, i)), Si(e._repo, e, r)
                }
                var mo = C((function e() {
                        w(this, e)
                    })),
                    go = function(e) {
                        c(n, e);
                        var t = d(n);

                        function n(e, r) {
                            var i;
                            return w(this, n), (i = t.call(this))._value = e, i._key = r, i
                        }
                        return C(n, [{
                            key: "_apply",
                            value: function(e) {
                                ni("endAt", this._value, e._path, !0);
                                var t = Lt(e._queryParams, this._value, this._key);
                                if (Ki(t), Gi(t), e._queryParams.hasEnd()) throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
                                return new Vi(e._repo, e._path, t, e._orderByCalled)
                            }
                        }]), n
                    }(mo);

                function ko(e, t) {
                    return ai("endAt", "key", t, !0), new go(e, t)
                }
                var wo = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n(e, r) {
                        var i;
                        return w(this, n), (i = t.call(this))._value = e, i._key = r, i
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            ni("endBefore", this._value, e._path, !1);
                            var t, n, r, i, o = (t = e._queryParams, n = this._value, r = this._key, t.index_ === Ge ? ("string" == typeof n && (n = Et(n)), i = Lt(t, n, r)) : i = Lt(t, n, null == r ? V : Et(r)), i.endBeforeSet_ = !0, i);
                            if (Ki(o), Gi(o), e._queryParams.hasEnd()) throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");
                            return new Vi(e._repo, e._path, o, e._orderByCalled)
                        }
                    }]), n
                }(mo);

                function bo(e, t) {
                    return ai("endBefore", "key", t, !0), new wo(e, t)
                }
                var Co = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n(e, r) {
                        var i;
                        return w(this, n), (i = t.call(this))._value = e, i._key = r, i
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            ni("startAt", this._value, e._path, !0);
                            var t = At(e._queryParams, this._value, this._key);
                            if (Ki(t), Gi(t), e._queryParams.hasStart()) throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
                            return new Vi(e._repo, e._path, t, e._orderByCalled)
                        }
                    }]), n
                }(mo);

                function To() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return ai("startAt", "key", t, !0), new Co(e, t)
                }
                var Io = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n(e, r) {
                        var i;
                        return w(this, n), (i = t.call(this))._value = e, i._key = r, i
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            ni("startAfter", this._value, e._path, !1);
                            var t, n, r, i, o = (t = e._queryParams, n = this._value, r = this._key, t.index_ === Ge ? ("string" == typeof n && (n = It(n)), i = At(t, n, r)) : i = At(t, n, null == r ? Y : It(r)), i.startAfterSet_ = !0, i);
                            if (Ki(o), Gi(o), e._queryParams.hasStart()) throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");
                            return new Vi(e._repo, e._path, o, e._orderByCalled)
                        }
                    }]), n
                }(mo);

                function Eo(e, t) {
                    return ai("startAfter", "key", t, !0), new Io(e, t)
                }
                var So = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n(e) {
                        var r;
                        return w(this, n), (r = t.call(this))._limit = e, r
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            if (e._queryParams.hasLimit()) throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
                            return new Vi(e._repo, e._path, (t = e._queryParams, n = this._limit, (r = t.copy()).limitSet_ = !0, r.limit_ = n, r.viewFrom_ = "l", r), e._orderByCalled);
                            var t, n, r
                        }
                    }]), n
                }(mo);

                function Po(e) {
                    if ("number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToFirst: First argument must be a positive integer.");
                    return new So(e)
                }
                var Oo = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n(e) {
                        var r;
                        return w(this, n), (r = t.call(this))._limit = e, r
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            if (e._queryParams.hasLimit()) throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
                            return new Vi(e._repo, e._path, (t = e._queryParams, n = this._limit, (r = t.copy()).limitSet_ = !0, r.limit_ = n, r.viewFrom_ = "r", r), e._orderByCalled);
                            var t, n, r
                        }
                    }]), n
                }(mo);

                function No(e) {
                    if ("number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToLast: First argument must be a positive integer.");
                    return new Oo(e)
                }
                var xo = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n(e) {
                        var r;
                        return w(this, n), (r = t.call(this))._path = e, r
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            Yi(e, "orderByChild");
                            var t = new Ie(this._path);
                            if (De(t)) throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");
                            var n = new wt(t),
                                r = qt(e._queryParams, n);
                            return Gi(r), new Vi(e._repo, e._path, r, !0)
                        }
                    }]), n
                }(mo);

                function Ro(e) {
                    if ("$key" === e) throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
                    if ("$priority" === e) throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
                    if ("$value" === e) throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
                    return si("orderByChild", "path", e, !1), new xo(e)
                }
                var jo = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n() {
                        return w(this, n), t.apply(this, arguments)
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            Yi(e, "orderByKey");
                            var t = qt(e._queryParams, Ge);
                            return Gi(t), new Vi(e._repo, e._path, t, !0)
                        }
                    }]), n
                }(mo);

                function Do() {
                    return new jo
                }
                var Ao = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n() {
                        return w(this, n), t.apply(this, arguments)
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            Yi(e, "orderByPriority");
                            var t = qt(e._queryParams, ct);
                            return Gi(t), new Vi(e._repo, e._path, t, !0)
                        }
                    }]), n
                }(mo);

                function Lo() {
                    return new Ao
                }
                var qo = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n() {
                        return w(this, n), t.apply(this, arguments)
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            Yi(e, "orderByValue");
                            var t = qt(e._queryParams, bt);
                            return Gi(t), new Vi(e._repo, e._path, t, !0)
                        }
                    }]), n
                }(mo);

                function Fo() {
                    return new qo
                }
                var Mo = function(e) {
                    c(n, e);
                    var t = d(n);

                    function n(e, r) {
                        var i;
                        return w(this, n), (i = t.call(this))._value = e, i._key = r, i
                    }
                    return C(n, [{
                        key: "_apply",
                        value: function(e) {
                            if (ni("equalTo", this._value, e._path, !1), e._queryParams.hasStart()) throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");
                            if (e._queryParams.hasEnd()) throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");
                            return new go(this._value, this._key)._apply(new Co(this._value, this._key)._apply(e))
                        }
                    }]), n
                }(mo);

                function Wo(e, t) {
                    return ai("equalTo", "key", t, !0), new Mo(e, t)
                }

                function Uo(e) {
                    for (var t = Object(o.w)(e), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    for (var a = 0, s = r; a < s.length; a++) {
                        var u = s[a];
                        t = u._apply(t)
                    }
                    return t
                }! function(e) {
                    Object(o.e)(!Vn, "__referenceConstructor has already been defined"), Vn = e
                }($i),
                function(e) {
                    Object(o.e)(!Zn, "__referenceConstructor has already been defined"), Zn = e
                }($i);
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Bo = {},
                    Ho = !1;

                function zo(e, t, n, r) {
                    e.repoInfo_ = new le("".concat(t, ":").concat(n), !1, e.repoInfo_.namespace, e.repoInfo_.webSocketOnly, e.repoInfo_.nodeAdmin, e.repoInfo_.persistenceKey, e.repoInfo_.includeNamespaceInQueryParams), r && (e.authTokenProvider_ = r)
                }

                function Qo(t, n, r, i, o) {
                    var a = i || t.options.databaseURL;
                    void 0 === a && (t.options.projectId || H("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), W("Using default host for project ", t.options.projectId), a = "".concat(t.options.projectId, "-default-rtdb.firebaseio.com"));
                    var s, u = Wi(a, o),
                        l = u.repoInfo,
                        c = void 0;
                    void 0 !== e && e.env && (c = e.env.FIREBASE_DATABASE_EMULATOR_HOST), c ? (s = !0, a = "http://".concat(c, "?ns=").concat(l.namespace), l = (u = Wi(a, o)).repoInfo) : s = !u.repoInfo.secure;
                    var h = o && s ? new se(se.OWNER) : new ae(t.name, t.options, n);
                    li("Invalid Firebase Database URL", u), De(u.path) || H("Database URL must point to the root of a Firebase Database (not including a child path).");
                    var d = function(e, t, n, r) {
                        var i = Bo[t.name];
                        i || (i = {}, Bo[t.name] = i);
                        var o = i[e.toURLString()];
                        o && H("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
                        return o = new _i(e, Ho, n, r), i[e.toURLString()] = o, o
                    }(l, t, h, new oe(t.name, r));
                    return new Vo(d, t)
                }
                var Vo = function() {
                    function e(t, n) {
                        w(this, e), this._repoInternal = t, this.app = n, this.type = "database", this._instanceStarted = !1
                    }
                    return C(e, [{
                        key: "_repo",
                        get: function() {
                            return this._instanceStarted || (yi(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal
                        }
                    }, {
                        key: "_root",
                        get: function() {
                            return this._rootInternal || (this._rootInternal = new $i(this._repo, Ee())), this._rootInternal
                        }
                    }, {
                        key: "_delete",
                        value: function() {
                            var e, t, n;
                            return null !== this._rootInternal && (e = this._repo, t = this.app.name, (n = Bo[t]) && n[e.key] === e || H("Database ".concat(t, "(").concat(e.repoInfo_, ") has already been deleted.")), Pi(e), delete n[e.key], this._repoInternal = null, this._rootInternal = null), Promise.resolve()
                        }
                    }, {
                        key: "_checkNotDeleted",
                        value: function(e) {
                            null === this._rootInternal && H("Cannot call " + e + " on a deleted database.")
                        }
                    }]), e
                }();

                function Yo() {
                    ke.IS_TRANSPORT_INITIALIZED && z("Transport has already been initialized. Please call this function before calling ref or setting up a listener")
                }

                function Go() {
                    Yo(), _e.forceDisallow()
                }

                function Ko() {
                    Yo(), ge.forceDisallow(), _e.forceAllow()
                }

                function $o(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    (e = Object(o.w)(e))._checkNotDeleted("useEmulator"), e._instanceStarted && H("Cannot call useEmulator() after instance has already been initialized.");
                    var i = e._repoInternal,
                        a = void 0;
                    if (i.repoInfo_.nodeAdmin) r.mockUserToken && H('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), a = new se(se.OWNER);
                    else if (r.mockUserToken) {
                        var s = "string" == typeof r.mockUserToken ? r.mockUserToken : Object(o.l)(r.mockUserToken, e.app.options.projectId);
                        a = new se(s)
                    }
                    zo(i, t, n, a)
                }

                function Jo(e) {
                    (e = Object(o.w)(e))._checkNotDeleted("goOffline"), Pi(e._repo)
                }

                function Xo(e) {
                    var t;
                    (e = Object(o.w)(e))._checkNotDeleted("goOnline"), (t = e._repo).persistentConnection_ && t.persistentConnection_.resume("repo_interrupt")
                }

                function Zo(e, t) {
                    M(e, t)
                }
                /**
                 * @license
                 * Copyright 2021 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ea = {
                    ".sv": "timestamp"
                };

                function ta() {
                    return ea
                }

                function na(e) {
                    return {
                        ".sv": {
                            increment: e
                        }
                    }
                }
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ra = function() {
                    function e(t, n) {
                        w(this, e), this.committed = t, this.snapshot = n
                    }
                    return C(e, [{
                        key: "toJSON",
                        value: function() {
                            return {
                                committed: this.committed,
                                snapshot: this.snapshot.toJSON()
                            }
                        }
                    }]), e
                }();

                function ia(e, t, n) {
                    var r;
                    if (e = Object(o.w)(e), ui("Reference.transaction", e._path), ".length" === e.key || ".keys" === e.key) throw "Reference.transaction failed: " + e.key + " is a read-only object.";
                    var i = null === (r = null == n ? void 0 : n.applyLocally) || void 0 === r || r,
                        a = new o.a,
                        s = ho(e, (function() {}));
                    return function(e, t, n, r, i, a) {
                        Oi(e, "transaction on " + t);
                        var s = {
                                path: t,
                                update: n,
                                onComplete: r,
                                status: null,
                                order: D(),
                                applyLocally: a,
                                retryCount: 0,
                                unwatcher: i,
                                abortReason: null,
                                currentWriteId: null,
                                currentInputSnapshot: null,
                                currentOutputSnapshotRaw: null,
                                currentOutputSnapshotResolved: null
                            },
                            u = xi(e, t, void 0);
                        s.currentInputSnapshot = u;
                        var l = s.update(u.val());
                        if (void 0 === l) s.unwatcher(), s.currentOutputSnapshotRaw = null, s.currentOutputSnapshotResolved = null, s.onComplete && s.onComplete(null, !1, s.currentInputSnapshot);
                        else {
                            ri("transaction failed: Data returned ", l, s.path), s.status = 0;
                            var c, h = zr(e.transactionQueueTree_, t),
                                d = Qr(h) || [];
                            if (d.push(s), Vr(h, d), "object" === k(l) && null !== l && Object(o.k)(l, ".priority")) c = Object(o.N)(l, ".priority"), Object(o.e)(ti(c), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
                            else c = (wr(e.serverSyncTree_, t) || _t.EMPTY_NODE).getPriority().val();
                            var f = gi(e),
                                v = mt(l, c),
                                p = Ur(v, u, f);
                            s.currentOutputSnapshotRaw = v, s.currentOutputSnapshotResolved = p, s.currentWriteId = Ci(e);
                            var _ = vr(e.serverSyncTree_, t, p, s.currentWriteId, s.applyLocally);
                            fi(e.eventQueue_, t, _), Ri(e, e.transactionQueueTree_)
                        }
                    }(e._repo, e._path, t, (function(t, n, r) {
                        var i = null;
                        t ? a.reject(t) : (i = new Ji(r, new $i(e._repo, e._path), ct), a.resolve(new ra(n, i)))
                    }), s, i), a.promise
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                He.prototype.simpleListen = function(e, t) {
                    this.sendRequest("q", {
                        p: e
                    }, t)
                }, He.prototype.echo = function(e, t) {
                    this.sendRequest("echo", {
                        d: e
                    }, t)
                };
                var oa;
                E(r.SDK_VERSION), Object(r._registerComponent)(new i.a("database", (function(e, t) {
                    var n = t.instanceIdentifier;
                    return Qo(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"), e.getProvider("app-check-internal"), n)
                }), "PUBLIC").setMultipleInstances(!0)), Object(r.registerVersion)(T, "0.13.8", oa), Object(r.registerVersion)(T, "0.13.8", "esm2017")
            }).call(this, n("8oxB"))
        }
    }
]);