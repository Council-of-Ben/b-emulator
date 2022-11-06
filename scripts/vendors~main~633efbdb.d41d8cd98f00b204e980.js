(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        "2okq": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return B
            }));
            var n = r("mZtP"),
                o = r("Avkg"),
                i = r("Psfb"),
                a = r("Bvs5"),
                c = r("0qtW");

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function f() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                f = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

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

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
                }

                function h(t, e, r) {
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
                t.wrap = s;
                var p = {};

                function y() {}

                function v() {}

                function d() {}
                var g = {};
                l(g, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    w = m && m(m(P([])));
                w && w !== e && r.call(w, i) && (g = w);
                var b = d.prototype = y.prototype = Object.create(g);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function a() {
                                return new e((function(o, a) {
                                    ! function n(o, i, a, c) {
                                        var f = h(t[o], t, i);
                                        if ("throw" !== f.type) {
                                            var l = f.arg,
                                                s = l.value;
                                            return s && "object" == u(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, a(l)
                                            }), (function(t) {
                                                return n("throw", t, a, c)
                                            }))
                                        }
                                        c(f.arg)
                                    }(n, i, o, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return S()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = O(a, r);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = h(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === p) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return p;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = h(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, p;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
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
                return v.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = l(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, l(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), l(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = P, _.prototype = {
                    constructor: _,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
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
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function l(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return s(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function h(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function p(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function y(t, e) {
                return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function v(t) {
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
                    var r, n = g(t);
                    if (e) {
                        var o = g(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }

            function d(t, e) {
                if (e && ("object" === u(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function g(t) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e, r, n, o) {
                var i = Object(a.i)(t, e);
                if (!o || i <= r) return i;
                var c = {
                    x: e.x - n.width,
                    y: e.y
                };
                if ((i = Object(a.i)(t, c)) <= r) return i;
                var u = {
                    x: e.x - n.width,
                    y: e.y - n.height
                };
                if ((i = Object(a.i)(t, u)) <= r) return i;
                var f = {
                    x: e.x,
                    y: e.y - n.height
                };
                return i = Object(a.i)(t, f)
            }
            var w = function(t) {
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
                    }), e && y(t, e)
                }(d, t);
                var e, r, i, a, u, s = v(d);

                function d(t) {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), s.call(this, t)
                }
                return e = d, (r = [{
                    key: "isEnabled",
                    value: function(t) {
                        return t.options.links.enable
                    }
                }, {
                    key: "reset",
                    value: function() {}
                }, {
                    key: "interact",
                    value: (a = f().mark((function t(e) {
                        var r, i, a, c, u, s, h, p, y, v, d, g, w, b, x, L, E;
                        return f().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.links = [], i = e.getPosition(), a = this.container, c = a.canvas.size, !(i.x < 0 || i.y < 0 || i.x > c.width || i.y > c.height)) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    u = e.options.links, s = u.opacity, h = null !== (r = e.retina.linksDistance) && void 0 !== r ? r : a.retina.linksDistance, p = u.warp, y = p ? new o.a(i.x, i.y, h, c) : new n.a(i.x, i.y, h), v = a.particles.quadTree.query(y), d = l(v), t.prev = 6, d.s();
                                case 8:
                                    if ((g = d.n()).done) {
                                        t.next = 24;
                                        break
                                    }
                                    if (w = g.value, b = w.options.links, e !== w && b.enable && u.id === b.id && !w.spawning && !w.destroyed && -1 === e.links.map((function(t) {
                                            return t.destination
                                        })).indexOf(w) && -1 === w.links.map((function(t) {
                                            return t.destination
                                        })).indexOf(e)) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.abrupt("continue", 22);
                                case 13:
                                    if (!((x = w.getPosition()).x < 0 || x.y < 0 || x.x > c.width || x.y > c.height)) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.abrupt("continue", 22);
                                case 16:
                                    if (!((L = m(i, x, h, c, p && b.warp)) > h)) {
                                        t.next = 19;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 19:
                                    E = (1 - L / h) * s, this.setColor(e), e.links.push({
                                        destination: w,
                                        opacity: E
                                    });
                                case 22:
                                    t.next = 8;
                                    break;
                                case 24:
                                    t.next = 29;
                                    break;
                                case 26:
                                    t.prev = 26, t.t0 = t.catch(6), d.e(t.t0);
                                case 29:
                                    return t.prev = 29, d.f(), t.finish(29);
                                case 32:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [6, 26, 29, 32]
                        ])
                    })), u = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                h(o, r, n, i, c, "next", t)
                            }

                            function c(t) {
                                h(o, r, n, i, c, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function(t) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "setColor",
                    value: function(t) {
                        var e = this.container,
                            r = t.options.links,
                            n = void 0 === r.id ? e.particles.linksColor : e.particles.linksColors.get(r.id);
                        if (!n) {
                            var o = r.color;
                            n = Object(c.g)(o, r.blink, r.consent), void 0 === r.id ? e.particles.linksColor = n : e.particles.linksColors.set(r.id, n)
                        }
                    }
                }]) && p(e.prototype, r), i && p(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), d
            }(i.a);

            function b(t) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                x = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function f(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
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
                t.wrap = f;
                var s = {};

                function h() {}

                function p() {}

                function y() {}
                var v = {};
                u(v, i, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    g = d && d(d(P([])));
                g && g !== e && r.call(g, i) && (v = g);
                var m = y.prototype = h.prototype = Object.create(v);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function a() {
                                return new e((function(o, a) {
                                    ! function n(o, i, a, c) {
                                        var u = l(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var f = u.arg,
                                                s = f.value;
                                            return s && "object" == b(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, c)
                                            }))
                                        }
                                        c(u.arg)
                                    }(n, i, o, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return S()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = O(a, r);
                                if (c) {
                                    if (c === s) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = l(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
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
                return p.prototype = y, n(m, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(L.prototype), u(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(f(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(m), u(m, c, "Generator"), u(m, i, (function() {
                    return this
                })), u(m, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = P, _.prototype = {
                    constructor: _,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), s
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
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function L(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function E(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            L(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            L(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function O(t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = E(x().mark((function t(e) {
                    return x().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addInteractor("particlesLinks", (function(t) {
                                    return new w(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var j = r("hcMC");

            function _(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return P(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var G = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, n;
                return e = t, (r = [{
                    key: "particleCreated",
                    value: function(t) {
                        t.links = []
                    }
                }, {
                    key: "particleDestroyed",
                    value: function(t) {
                        t.links = []
                    }
                }, {
                    key: "drawParticle",
                    value: function(t, e) {
                        var r = this,
                            n = e,
                            o = this.container,
                            i = o.particles,
                            a = e.options;
                        if (!(n.links.length <= 0)) {
                            t.save();
                            var c, u = n.links.filter((function(t) {
                                    return o.particles.getLinkFrequency(n, t.destination) <= a.links.frequency
                                })),
                                f = _(u);
                            try {
                                var l = function() {
                                    var t = c.value,
                                        e = t.destination;
                                    if (a.links.triangles.enable) {
                                        var f = u.map((function(t) {
                                                return t.destination
                                            })),
                                            l = e.links.filter((function(t) {
                                                return o.particles.getLinkFrequency(e, t.destination) <= e.options.links.frequency && f.indexOf(t.destination) >= 0
                                            }));
                                        if (l.length) {
                                            var s, h = _(l);
                                            try {
                                                for (h.s(); !(s = h.n()).done;) {
                                                    var p = s.value,
                                                        y = p.destination;
                                                    i.getTriangleFrequency(n, e, y) > a.links.triangles.frequency || r.drawLinkTriangle(n, t, p)
                                                }
                                            } catch (t) {
                                                h.e(t)
                                            } finally {
                                                h.f()
                                            }
                                        }
                                    }
                                    t.opacity > 0 && o.retina.linksWidth > 0 && r.drawLinkLine(n, t)
                                };
                                for (f.s(); !(c = f.n()).done;) l()
                            } catch (t) {
                                f.e(t)
                            } finally {
                                f.f()
                            }
                            t.restore()
                        }
                    }
                }, {
                    key: "drawLinkTriangle",
                    value: function(t, e, r) {
                        var n, o = this.container,
                            i = o.actualOptions,
                            u = e.destination,
                            f = r.destination,
                            l = t.options.links.triangles,
                            s = null !== (n = l.opacity) && void 0 !== n ? n : (e.opacity + r.opacity) / 2;
                        if (!(s <= 0)) {
                            var h = t.getPosition(),
                                p = u.getPosition(),
                                y = f.getPosition();
                            o.canvas.draw((function(e) {
                                if (!(Object(a.i)(h, p) > o.retina.linksDistance || Object(a.i)(y, p) > o.retina.linksDistance || Object(a.i)(y, h) > o.retina.linksDistance)) {
                                    var r = Object(c.c)(l.color);
                                    if (!r) {
                                        var n = t.options.links,
                                            f = void 0 !== n.id ? o.particles.linksColors.get(n.id) : o.particles.linksColor;
                                        r = Object(c.f)(t, u, f)
                                    }
                                    r && Object(j.g)(e, h, p, y, i.backgroundMask.enable, i.backgroundMask.composite, r, s)
                                }
                            }))
                        }
                    }
                }, {
                    key: "drawLinkLine",
                    value: function(t, e) {
                        var r = this.container,
                            n = r.actualOptions,
                            o = e.destination,
                            i = t.getPosition(),
                            u = o.getPosition(),
                            f = e.opacity;
                        r.canvas.draw((function(e) {
                            var l, s, h, p = t.options.twinkle.lines;
                            if (p.enable) {
                                var y = p.frequency,
                                    v = Object(c.c)(p.color);
                                Math.random() < y && v && (h = v, f = Object(a.o)(p.opacity))
                            }
                            if (!h) {
                                var d = t.options.links,
                                    g = void 0 !== d.id ? r.particles.linksColors.get(d.id) : r.particles.linksColor;
                                h = Object(c.f)(t, o, g)
                            }
                            if (h) {
                                var m = null !== (l = t.retina.linksWidth) && void 0 !== l ? l : r.retina.linksWidth,
                                    w = null !== (s = t.retina.linksDistance) && void 0 !== s ? s : r.retina.linksDistance;
                                Object(j.f)(e, m, i, u, w, r.canvas.size, t.options.links.warp, n.backgroundMask.enable, n.backgroundMask.composite, h, f, t.options.links.shadow)
                            }
                        }))
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function N(t) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function f(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new k(o || []);
                    return n(a, "_invoke", {
                        value: x(t, r, c)
                    }), a
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
                t.wrap = f;
                var s = {};

                function h() {}

                function p() {}

                function y() {}
                var v = {};
                u(v, i, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    g = d && d(d(j([])));
                g && g !== e && r.call(g, i) && (v = g);
                var m = y.prototype = h.prototype = Object.create(v);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function a() {
                                return new e((function(o, a) {
                                    ! function n(o, i, a, c) {
                                        var u = l(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var f = u.arg,
                                                s = f.value;
                                            return s && "object" == N(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, c)
                                            }))
                                        }
                                        c(u.arg)
                                    }(n, i, o, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function x(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return _()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = L(a, r);
                                if (c) {
                                    if (c === s) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = l(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function L(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, L(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: _
                    }
                }

                function _() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = y, n(m, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(b.prototype), u(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(f(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(m), u(m, c, "Generator"), u(m, i, (function() {
                    return this
                })), u(m, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function R(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function F(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            R(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            R(i, n, o, a, c, "throw", t)
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
            var I = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.id = "links"
                }
                var e, r, n;
                return e = t, (r = [{
                    key: "getPlugin",
                    value: function(t) {
                        return new G(t)
                    }
                }, {
                    key: "needsPlugin",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "loadOptions",
                    value: function() {}
                }]) && A(e.prototype, r), n && A(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function C(t) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = F(T().mark((function t(e) {
                    var r;
                    return T().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = new I, t.next = 3, e.addPlugin(r);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function q(t) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function D() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                D = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function f(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new k(o || []);
                    return n(a, "_invoke", {
                        value: x(t, r, c)
                    }), a
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
                t.wrap = f;
                var s = {};

                function h() {}

                function p() {}

                function y() {}
                var v = {};
                u(v, i, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    g = d && d(d(j([])));
                g && g !== e && r.call(g, i) && (v = g);
                var m = y.prototype = h.prototype = Object.create(v);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function a() {
                                return new e((function(o, a) {
                                    ! function n(o, i, a, c) {
                                        var u = l(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var f = u.arg,
                                                s = f.value;
                                            return s && "object" == q(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, c)
                                            }))
                                        }
                                        c(u.arg)
                                    }(n, i, o, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function x(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return _()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = L(a, r);
                                if (c) {
                                    if (c === s) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = l(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function L(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, L(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: _
                    }
                }

                function _() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = y, n(m, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(b.prototype), u(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(f(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(m), u(m, c, "Generator"), u(m, i, (function() {
                    return this
                })), u(m, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function z(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function M(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            z(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            z(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function B(t) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = M(D().mark((function t(e) {
                    return D().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, O(e);
                            case 2:
                                return t.next = 4, C(e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        bLJs: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return x
            }));
            var n = r("3wFu"),
                o = r("Bvs5");

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                a = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    c = o.iterator || "@@iterator",
                    u = o.asyncIterator || "@@asyncIterator",
                    f = o.toStringTag || "@@toStringTag";

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

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
                }

                function h(t, e, r) {
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
                t.wrap = s;
                var p = {};

                function y() {}

                function v() {}

                function d() {}
                var g = {};
                l(g, c, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    w = m && m(m(P([])));
                w && w !== e && r.call(w, c) && (g = w);
                var b = d.prototype = y.prototype = Object.create(g);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, a, c, u) {
                                        var f = h(t[o], t, a);
                                        if ("throw" !== f.type) {
                                            var l = f.arg,
                                                s = l.value;
                                            return s && "object" == i(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, c(l)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(f.arg)
                                    }(n, a, o, c)
                                }))
                            }
                            return o = o ? o.then(c, c) : c()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return S()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = O(a, r);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = h(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === p) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return p;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = h(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, p;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[c];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
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
                return v.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = l(d, f, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, l(t, f, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), l(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), l(b, f, "Generator"), l(b, c, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = P, _.prototype = {
                    constructor: _,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
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
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function c(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return u(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function f(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function s(t, e) {
                return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(t) {
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
                    var r, n = y(t);
                    if (e) {
                        var o = y(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(t, e) {
                if (e && ("object" === i(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function y(t) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function v(t, e) {
                Object(n.f)(Object(n.g)(t), Object(n.g)(e))
            }
            var d = function(t) {
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
                    }), e && s(t, e)
                }(y, t);
                var e, r, n, i, u, p = h(y);

                function y(t) {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, y), p.call(this, t)
                }
                return e = y, (r = [{
                    key: "isEnabled",
                    value: function(t) {
                        return t.options.collisions.enable
                    }
                }, {
                    key: "reset",
                    value: function() {}
                }, {
                    key: "interact",
                    value: (i = a().mark((function t(e) {
                        var r, n, i, u, f, l, s, h, p, y;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    r = this.container, n = e.getPosition(), i = e.getRadius(), u = r.particles.quadTree.queryCircle(n, 2 * i), f = c(u), t.prev = 2, f.s();
                                case 4:
                                    if ((l = f.n()).done) {
                                        t.next = 15;
                                        break
                                    }
                                    if (s = l.value, e !== s && s.options.collisions.enable && e.options.collisions.mode === s.options.collisions.mode && !s.destroyed && !s.spawning) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 8:
                                    if (h = s.getPosition(), Math.round(n.z) === Math.round(h.z)) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 11:
                                    p = Object(o.i)(n, h), y = s.getRadius(), p <= i + y && this.resolveCollision(e, s);
                                case 13:
                                    t.next = 4;
                                    break;
                                case 15:
                                    t.next = 20;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(2), f.e(t.t0);
                                case 20:
                                    return t.prev = 20, f.f(), t.finish(20);
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [2, 17, 20, 23]
                        ])
                    })), u = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                f(o, r, n, a, c, "next", t)
                            }

                            function c(t) {
                                f(o, r, n, a, c, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function(t) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "resolveCollision",
                    value: function(t, e) {
                        switch (t.options.collisions.mode) {
                            case "absorb":
                                this.absorb(t, e);
                                break;
                            case "bounce":
                                v(t, e);
                                break;
                            case "destroy":
                                ! function(t, e) {
                                    t.unbreakable || e.unbreakable || v(t, e), void 0 === t.getRadius() && void 0 !== e.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === e.getRadius() ? e.destroy() : void 0 !== t.getRadius() && void 0 !== e.getRadius() && (t.getRadius() >= e.getRadius() ? e.destroy() : t.destroy())
                                }(t, e)
                        }
                    }
                }, {
                    key: "absorb",
                    value: function(t, e) {
                        var r = this.container,
                            n = r.fpsLimit / 1e3;
                        if (void 0 === t.getRadius() && void 0 !== e.getRadius()) t.destroy();
                        else if (void 0 !== t.getRadius() && void 0 === e.getRadius()) e.destroy();
                        else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
                            if (t.getRadius() >= e.getRadius()) {
                                var i = Object(o.g)(t.getRadius() / e.getRadius(), 0, e.getRadius()) * n;
                                t.size.value += i, e.size.value -= i, e.getRadius() <= r.retina.pixelRatio && (e.size.value = 0, e.destroy())
                            } else {
                                var a = Object(o.g)(e.getRadius() / t.getRadius(), 0, t.getRadius()) * n;
                                t.size.value -= a, e.size.value += a, t.getRadius() <= r.retina.pixelRatio && (t.size.value = 0, t.destroy())
                            }
                    }
                }]) && l(e.prototype, r), n && l(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), y
            }(r("Psfb").a);

            function g(t) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function m() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                m = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function f(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
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
                t.wrap = f;
                var s = {};

                function h() {}

                function p() {}

                function y() {}
                var v = {};
                u(v, i, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    w = d && d(d(P([])));
                w && w !== e && r.call(w, i) && (v = w);
                var b = y.prototype = h.prototype = Object.create(v);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function a() {
                                return new e((function(o, a) {
                                    ! function n(o, i, a, c) {
                                        var u = l(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var f = u.arg,
                                                s = f.value;
                                            return s && "object" == g(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, c)
                                            }))
                                        }
                                        c(u.arg)
                                    }(n, i, o, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return S()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = O(a, r);
                                if (c) {
                                    if (c === s) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = l(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
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
                return p.prototype = y, n(b, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), u(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(f(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), u(b, c, "Generator"), u(b, i, (function() {
                    return this
                })), u(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = P, _.prototype = {
                    constructor: _,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), s
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
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function w(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function b(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            w(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            w(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function x(t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = b(m().mark((function t(e) {
                    return m().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addInteractor("particlesCollisions", (function(t) {
                                    return new d(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        yb31: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return b
            }));
            var n = r("Psfb"),
                o = r("Bvs5");

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                a = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    c = o.iterator || "@@iterator",
                    u = o.asyncIterator || "@@asyncIterator",
                    f = o.toStringTag || "@@toStringTag";

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

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
                }

                function h(t, e, r) {
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
                t.wrap = s;
                var p = {};

                function y() {}

                function v() {}

                function d() {}
                var g = {};
                l(g, c, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    w = m && m(m(P([])));
                w && w !== e && r.call(w, c) && (g = w);
                var b = d.prototype = y.prototype = Object.create(g);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, a, c, u) {
                                        var f = h(t[o], t, a);
                                        if ("throw" !== f.type) {
                                            var l = f.arg,
                                                s = l.value;
                                            return s && "object" == i(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, c(l)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(f.arg)
                                    }(n, a, o, c)
                                }))
                            }
                            return o = o ? o.then(c, c) : c()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return S()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = O(a, r);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = h(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === p) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return p;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = h(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, p;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[c];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
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
                return v.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = l(d, f, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, l(t, f, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), l(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), l(b, f, "Generator"), l(b, c, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = P, _.prototype = {
                    constructor: _,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
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
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function c(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return u(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function f(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function s(t, e) {
                return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(t) {
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
                    var r, n = y(t);
                    if (e) {
                        var o = y(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(t, e) {
                if (e && ("object" === i(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function y(t) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var v = function(t) {
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
                    }), e && s(t, e)
                }(y, t);
                var e, r, n, i, u, p = h(y);

                function y(t) {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, y), p.call(this, t)
                }
                return e = y, (r = [{
                    key: "interact",
                    value: (i = a().mark((function t(e) {
                        var r, n, i, u, f, l, s, h, p, y, v, d, g, m, w, b, x;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    n = this.container, i = null !== (r = e.retina.attractDistance) && void 0 !== r ? r : n.retina.attractDistance, u = e.getPosition(), f = n.particles.quadTree.queryCircle(u, i), l = c(f), t.prev = 2, l.s();
                                case 4:
                                    if ((s = l.n()).done) {
                                        t.next = 15;
                                        break
                                    }
                                    if (h = s.value, e !== h && h.options.move.attract.enable && !h.destroyed && !h.spawning) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 8:
                                    p = h.getPosition(), y = Object(o.j)(u, p), v = y.dx, d = y.dy, g = e.options.move.attract.rotate, m = v / (1e3 * g.x), w = d / (1e3 * g.y), b = h.size.value / e.size.value, x = 1 / b, e.velocity.x -= m * b, e.velocity.y -= w * b, h.velocity.x += m * x, h.velocity.y += w * x;
                                case 13:
                                    t.next = 4;
                                    break;
                                case 15:
                                    t.next = 20;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(2), l.e(t.t0);
                                case 20:
                                    return t.prev = 20, l.f(), t.finish(20);
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [2, 17, 20, 23]
                        ])
                    })), u = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                f(o, r, n, a, c, "next", t)
                            }

                            function c(t) {
                                f(o, r, n, a, c, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function(t) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return t.options.move.attract.enable
                    }
                }, {
                    key: "reset",
                    value: function() {}
                }]) && l(e.prototype, r), n && l(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), y
            }(n.a);

            function d(t) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                g = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function f(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
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
                t.wrap = f;
                var s = {};

                function h() {}

                function p() {}

                function y() {}
                var v = {};
                u(v, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    w = m && m(m(P([])));
                w && w !== e && r.call(w, i) && (v = w);
                var b = y.prototype = h.prototype = Object.create(v);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function a() {
                                return new e((function(o, a) {
                                    ! function n(o, i, a, c) {
                                        var u = l(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var f = u.arg,
                                                s = f.value;
                                            return s && "object" == d(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, c)
                                            }))
                                        }
                                        c(u.arg)
                                    }(n, i, o, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return S()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = O(a, r);
                                if (c) {
                                    if (c === s) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = l(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
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
                return p.prototype = y, n(b, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), u(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(f(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), u(b, c, "Generator"), u(b, i, (function() {
                    return this
                })), u(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = P, _.prototype = {
                    constructor: _,
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), s
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
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function m(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function w(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            m(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            m(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(t) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = w(g().mark((function t(e) {
                    return g().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addInteractor("particlesAttract", (function(t) {
                                    return new v(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        }
    }
]);