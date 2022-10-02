(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        "2okq": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return B
            }));
            var n = e("mZtP"),
                o = e("Avkg"),
                i = e("Psfb"),
                a = e("Bvs5"),
                c = e("0qtW");

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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function s(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return _()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = L(a, e);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = l(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === h) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function l(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = s;
                var h = {};

                function p() {}

                function y() {}

                function v() {}
                var d = {};
                c(d, o, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    m = g && g(g(j([])));
                m && m !== r && e.call(m, o) && (d = m);
                var w = v.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        c(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, c) {
                                    var f = l(t[o], t, i);
                                    if ("throw" !== f.type) {
                                        var s = f.arg,
                                            h = s.value;
                                        return h && "object" == u(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(h).then((function(t) {
                                            s.value = t, a(s)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(f.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function L(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return h;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = l(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, h;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, h) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, h)
                }

                function E(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function O(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return y.prototype = v, c(w, "constructor", v), c(v, "constructor", y), y.displayName = c(v, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === y || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), c(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(s(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), c(w, a, "Generator"), c(w, o, (function() {
                    return this
                })), c(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), h
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), h
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function s(t, r) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return l(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return l(t, r)
                        }(t)) || r && t && "number" == typeof t.length) {
                        e && (t = e);
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
                        e = e.call(t)
                    },
                    n: function() {
                        var t = e.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function l(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function h(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function p(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function y(t, r) {
                return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                })(t, r)
            }

            function v(t) {
                var r = function() {
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
                    var e, n = g(t);
                    if (r) {
                        var o = g(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return d(this, e)
                }
            }

            function d(t, r) {
                if (r && ("object" === u(r) || "function" == typeof r)) return r;
                if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
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

            function m(t, r, e, n, o) {
                var i = Object(a.i)(t, r);
                if (!o || i <= e) return i;
                var c = {
                    x: r.x - n.width,
                    y: r.y
                };
                if ((i = Object(a.i)(t, c)) <= e) return i;
                var u = {
                    x: r.x - n.width,
                    y: r.y - n.height
                };
                if ((i = Object(a.i)(t, u)) <= e) return i;
                var f = {
                    x: r.x,
                    y: r.y - n.height
                };
                return i = Object(a.i)(t, f)
            }
            var w = function(t) {
                ! function(t, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r && y(t, r)
                }(d, t);
                var r, e, i, a, u, l = v(d);

                function d(t) {
                    return function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), l.call(this, t)
                }
                return r = d, (e = [{
                    key: "isEnabled",
                    value: function(t) {
                        return t.options.links.enable
                    }
                }, {
                    key: "reset",
                    value: function() {}
                }, {
                    key: "interact",
                    value: (a = f().mark((function t(r) {
                        var e, i, a, c, u, l, h, p, y, v, d, g, w, b, x, L, E;
                        return f().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r.links = [], i = r.getPosition(), a = this.container, c = a.canvas.size, !(i.x < 0 || i.y < 0 || i.x > c.width || i.y > c.height)) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    u = r.options.links, l = u.opacity, h = null !== (e = r.retina.linksDistance) && void 0 !== e ? e : a.retina.linksDistance, p = u.warp, y = p ? new o.a(i.x, i.y, h, c) : new n.a(i.x, i.y, h), v = a.particles.quadTree.query(y), d = s(v), t.prev = 6, d.s();
                                case 8:
                                    if ((g = d.n()).done) {
                                        t.next = 24;
                                        break
                                    }
                                    if (w = g.value, b = w.options.links, r !== w && b.enable && u.id === b.id && !w.spawning && !w.destroyed && -1 === r.links.map((function(t) {
                                            return t.destination
                                        })).indexOf(w) && -1 === w.links.map((function(t) {
                                            return t.destination
                                        })).indexOf(r)) {
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
                                    E = (1 - L / h) * l, this.setColor(r), r.links.push({
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
                            r = arguments;
                        return new Promise((function(e, n) {
                            var o = a.apply(t, r);

                            function i(t) {
                                h(o, e, n, i, c, "next", t)
                            }

                            function c(t) {
                                h(o, e, n, i, c, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function(t) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "setColor",
                    value: function(t) {
                        var r = this.container,
                            e = t.options.links,
                            n = void 0 === e.id ? r.particles.linksColor : r.particles.linksColors.get(e.id);
                        if (!n) {
                            var o = e.color;
                            n = Object(c.g)(o, e.blink, e.consent), void 0 === e.id ? r.particles.linksColor = n : r.particles.linksColors.set(e.id, n)
                        }
                    }
                }]) && p(r.prototype, e), i && p(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function u(t, r, e, n) {
                    var o = r && r.prototype instanceof l ? r : l,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return _()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = L(a, e);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = f(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function f(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function l() {}

                function h() {}

                function p() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== r && e.call(d, o) && (y = d);
                var g = p.prototype = l.prototype = Object.create(y);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        c(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function w(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, c) {
                                    var u = f(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            l = s.value;
                                        return l && "object" == b(l) && e.call(l, "__await") ? r.resolve(l.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(l).then((function(t) {
                                            s.value = t, a(s)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(u.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function L(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return s;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = f(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, s) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, s)
                }

                function E(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function O(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return h.prototype = p, c(g, "constructor", p), c(p, "constructor", h), h.displayName = c(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(w.prototype), c(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(u(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, m(g), c(g, a, "Generator"), c(g, o, (function() {
                    return this
                })), c(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), s
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), s
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function L(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function E(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (k = E(x().mark((function t(r) {
                    return x().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addInteractor("particlesLinks", (function(t) {
                                    return new w(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var j = e("hcMC");

            function _(t, r) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return S(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return S(t, r)
                        }(t)) || r && t && "number" == typeof t.length) {
                        e && (t = e);
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
                        e = e.call(t)
                    },
                    n: function() {
                        var t = e.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function S(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function P(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var G = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, n;
                return r = t, (e = [{
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
                    value: function(t, r) {
                        var e = this,
                            n = r,
                            o = this.container,
                            i = o.particles,
                            a = r.options;
                        if (!(n.links.length <= 0)) {
                            t.save();
                            var c, u = n.links.filter((function(t) {
                                    return o.particles.getLinkFrequency(n, t.destination) <= a.links.frequency
                                })),
                                f = _(u);
                            try {
                                var s = function() {
                                    var t = c.value,
                                        r = t.destination;
                                    if (a.links.triangles.enable) {
                                        var f = u.map((function(t) {
                                                return t.destination
                                            })),
                                            s = r.links.filter((function(t) {
                                                return o.particles.getLinkFrequency(r, t.destination) <= r.options.links.frequency && f.indexOf(t.destination) >= 0
                                            }));
                                        if (s.length) {
                                            var l, h = _(s);
                                            try {
                                                for (h.s(); !(l = h.n()).done;) {
                                                    var p = l.value,
                                                        y = p.destination;
                                                    i.getTriangleFrequency(n, r, y) > a.links.triangles.frequency || e.drawLinkTriangle(n, t, p)
                                                }
                                            } catch (t) {
                                                h.e(t)
                                            } finally {
                                                h.f()
                                            }
                                        }
                                    }
                                    t.opacity > 0 && o.retina.linksWidth > 0 && e.drawLinkLine(n, t)
                                };
                                for (f.s(); !(c = f.n()).done;) s()
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
                    value: function(t, r, e) {
                        var n, o = this.container,
                            i = o.actualOptions,
                            u = r.destination,
                            f = e.destination,
                            s = t.options.links.triangles,
                            l = null !== (n = s.opacity) && void 0 !== n ? n : (r.opacity + e.opacity) / 2;
                        if (!(l <= 0)) {
                            var h = t.getPosition(),
                                p = u.getPosition(),
                                y = f.getPosition();
                            o.canvas.draw((function(r) {
                                if (!(Object(a.i)(h, p) > o.retina.linksDistance || Object(a.i)(y, p) > o.retina.linksDistance || Object(a.i)(y, h) > o.retina.linksDistance)) {
                                    var e = Object(c.c)(s.color);
                                    if (!e) {
                                        var n = t.options.links,
                                            f = void 0 !== n.id ? o.particles.linksColors.get(n.id) : o.particles.linksColor;
                                        e = Object(c.f)(t, u, f)
                                    }
                                    e && Object(j.g)(r, h, p, y, i.backgroundMask.enable, i.backgroundMask.composite, e, l)
                                }
                            }))
                        }
                    }
                }, {
                    key: "drawLinkLine",
                    value: function(t, r) {
                        var e = this.container,
                            n = e.actualOptions,
                            o = r.destination,
                            i = t.getPosition(),
                            u = o.getPosition(),
                            f = r.opacity;
                        e.canvas.draw((function(r) {
                            var s, l, h, p = t.options.twinkle.lines;
                            if (p.enable) {
                                var y = p.frequency,
                                    v = Object(c.c)(p.color);
                                Math.random() < y && v && (h = v, f = Object(a.o)(p.opacity))
                            }
                            if (!h) {
                                var d = t.options.links,
                                    g = void 0 !== d.id ? e.particles.linksColors.get(d.id) : e.particles.linksColor;
                                h = Object(c.f)(t, o, g)
                            }
                            if (h) {
                                var m = null !== (s = t.retina.linksWidth) && void 0 !== s ? s : e.retina.linksWidth,
                                    w = null !== (l = t.retina.linksDistance) && void 0 !== l ? l : e.retina.linksDistance;
                                Object(j.f)(r, m, i, u, w, e.canvas.size, t.options.links.warp, n.backgroundMask.enable, n.backgroundMask.composite, h, f, t.options.links.shadow)
                            }
                        }))
                    }
                }]) && P(r.prototype, e), n && P(r, n), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function u(t, r, e, n) {
                    var o = r && r.prototype instanceof l ? r : l,
                        i = Object.create(o.prototype),
                        a = new E(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = b(a, e);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = f(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function f(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function l() {}

                function h() {}

                function p() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    d = v && v(v(O([])));
                d && d !== r && e.call(d, o) && (y = d);
                var g = p.prototype = l.prototype = Object.create(y);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        c(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function w(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, c) {
                                    var u = f(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            l = s.value;
                                        return l && "object" == N(l) && e.call(l, "__await") ? r.resolve(l.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(l).then((function(t) {
                                            s.value = t, a(s)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(u.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function b(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, b(t, r), "throw" === r.method)) return s;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = f(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, s) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, s)
                }

                function x(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function L(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return h.prototype = p, c(g, "constructor", p), c(p, "constructor", h), h.displayName = c(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(w.prototype), c(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(u(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, m(g), c(g, a, "Generator"), c(g, o, (function() {
                    return this
                })), c(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = O, E.prototype = {
                    constructor: E,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), s
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), L(e), s
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    L(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function R(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function F(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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

            function A(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var I = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.id = "links"
                }
                var r, e, n;
                return r = t, (e = [{
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
                }]) && A(r.prototype, e), n && A(r, n), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), t
            }();

            function C(t) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = F(T().mark((function t(r) {
                    var e;
                    return T().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = new I, t.next = 3, r.addPlugin(e);
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function u(t, r, e, n) {
                    var o = r && r.prototype instanceof l ? r : l,
                        i = Object.create(o.prototype),
                        a = new E(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = b(a, e);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = f(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function f(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function l() {}

                function h() {}

                function p() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    d = v && v(v(O([])));
                d && d !== r && e.call(d, o) && (y = d);
                var g = p.prototype = l.prototype = Object.create(y);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        c(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function w(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, c) {
                                    var u = f(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            l = s.value;
                                        return l && "object" == q(l) && e.call(l, "__await") ? r.resolve(l.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(l).then((function(t) {
                                            s.value = t, a(s)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(u.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function b(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, b(t, r), "throw" === r.method)) return s;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = f(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, s) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, s)
                }

                function x(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function L(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return h.prototype = p, c(g, "constructor", p), c(p, "constructor", h), h.displayName = c(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(w.prototype), c(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(u(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, m(g), c(g, a, "Generator"), c(g, o, (function() {
                    return this
                })), c(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = O, E.prototype = {
                    constructor: E,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), s
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), L(e), s
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    L(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function z(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function M(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (U = M(D().mark((function t(r) {
                    return D().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, O(r);
                            case 2:
                                return t.next = 4, C(r);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        bLJs: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return x
            }));
            var n = e("3wFu"),
                o = e("Bvs5");

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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function f(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function s(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return _()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = L(a, e);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = l(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === h) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function l(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = s;
                var h = {};

                function p() {}

                function y() {}

                function v() {}
                var d = {};
                f(d, o, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    m = g && g(g(j([])));
                m && m !== r && e.call(m, o) && (d = m);
                var w = v.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        f(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, a) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, a, c, u) {
                                    var f = l(t[o], t, a);
                                    if ("throw" !== f.type) {
                                        var s = f.arg,
                                            h = s.value;
                                        return h && "object" == i(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            s.value = t, c(s)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(f.arg)
                                }(o, a, n, c)
                            }))
                        }
                        return n = n ? n.then(c, c) : c()
                    }
                }

                function L(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return h;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = l(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, h;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, h) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, h)
                }

                function E(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function O(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return y.prototype = v, f(w, "constructor", v), f(v, "constructor", y), y.displayName = f(v, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === y || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, f(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), f(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(s(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), f(w, u, "Generator"), f(w, o, (function() {
                    return this
                })), f(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), h
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), h
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function c(t, r) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return u(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return u(t, r)
                        }(t)) || r && t && "number" == typeof t.length) {
                        e && (t = e);
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
                        e = e.call(t)
                    },
                    n: function() {
                        var t = e.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function u(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function f(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function s(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, r) {
                return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                })(t, r)
            }

            function h(t) {
                var r = function() {
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
                    var e, n = y(t);
                    if (r) {
                        var o = y(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return p(this, e)
                }
            }

            function p(t, r) {
                if (r && ("object" === i(r) || "function" == typeof r)) return r;
                if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
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

            function v(t, r) {
                Object(n.f)(Object(n.g)(t), Object(n.g)(r))
            }
            var d = function(t) {
                ! function(t, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r && l(t, r)
                }(y, t);
                var r, e, n, i, u, p = h(y);

                function y(t) {
                    return function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, y), p.call(this, t)
                }
                return r = y, (e = [{
                    key: "isEnabled",
                    value: function(t) {
                        return t.options.collisions.enable
                    }
                }, {
                    key: "reset",
                    value: function() {}
                }, {
                    key: "interact",
                    value: (i = a().mark((function t(r) {
                        var e, n, i, u, f, s, l, h, p, y;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = this.container, n = r.getPosition(), i = r.getRadius(), u = e.particles.quadTree.queryCircle(n, 2 * i), f = c(u), t.prev = 2, f.s();
                                case 4:
                                    if ((s = f.n()).done) {
                                        t.next = 15;
                                        break
                                    }
                                    if (l = s.value, r !== l && l.options.collisions.enable && r.options.collisions.mode === l.options.collisions.mode && !l.destroyed && !l.spawning) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 8:
                                    if (h = l.getPosition(), Math.round(n.z) === Math.round(h.z)) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 11:
                                    p = Object(o.i)(n, h), y = l.getRadius(), p <= i + y && this.resolveCollision(r, l);
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
                            r = arguments;
                        return new Promise((function(e, n) {
                            var o = i.apply(t, r);

                            function a(t) {
                                f(o, e, n, a, c, "next", t)
                            }

                            function c(t) {
                                f(o, e, n, a, c, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function(t) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "resolveCollision",
                    value: function(t, r) {
                        switch (t.options.collisions.mode) {
                            case "absorb":
                                this.absorb(t, r);
                                break;
                            case "bounce":
                                v(t, r);
                                break;
                            case "destroy":
                                ! function(t, r) {
                                    t.unbreakable || r.unbreakable || v(t, r), void 0 === t.getRadius() && void 0 !== r.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === r.getRadius() ? r.destroy() : void 0 !== t.getRadius() && void 0 !== r.getRadius() && (t.getRadius() >= r.getRadius() ? r.destroy() : t.destroy())
                                }(t, r)
                        }
                    }
                }, {
                    key: "absorb",
                    value: function(t, r) {
                        var e = this.container,
                            n = e.fpsLimit / 1e3;
                        if (void 0 === t.getRadius() && void 0 !== r.getRadius()) t.destroy();
                        else if (void 0 !== t.getRadius() && void 0 === r.getRadius()) r.destroy();
                        else if (void 0 !== t.getRadius() && void 0 !== r.getRadius())
                            if (t.getRadius() >= r.getRadius()) {
                                var i = Object(o.g)(t.getRadius() / r.getRadius(), 0, r.getRadius()) * n;
                                t.size.value += i, r.size.value -= i, r.getRadius() <= e.retina.pixelRatio && (r.size.value = 0, r.destroy())
                            } else {
                                var a = Object(o.g)(r.getRadius() / t.getRadius(), 0, t.getRadius()) * n;
                                t.size.value -= a, r.size.value += a, t.getRadius() <= e.retina.pixelRatio && (t.size.value = 0, t.destroy())
                            }
                    }
                }]) && s(r.prototype, e), n && s(r, n), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), y
            }(e("Psfb").a);

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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function u(t, r, e, n) {
                    var o = r && r.prototype instanceof l ? r : l,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return _()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = L(a, e);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = f(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function f(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function l() {}

                function h() {}

                function p() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== r && e.call(d, o) && (y = d);
                var w = p.prototype = l.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        c(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, c) {
                                    var u = f(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            l = s.value;
                                        return l && "object" == g(l) && e.call(l, "__await") ? r.resolve(l.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(l).then((function(t) {
                                            s.value = t, a(s)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(u.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function L(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return s;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = f(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, s) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, s)
                }

                function E(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function O(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return h.prototype = p, c(w, "constructor", p), c(p, "constructor", h), h.displayName = c(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), c(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(u(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), c(w, a, "Generator"), c(w, o, (function() {
                    return this
                })), c(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), s
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), s
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function w(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function b(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (L = b(m().mark((function t(r) {
                    return m().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addInteractor("particlesCollisions", (function(t) {
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
        yb31: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return b
            }));
            var n = e("Psfb"),
                o = e("Bvs5");

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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function f(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function s(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return _()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = L(a, e);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = l(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === h) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function l(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = s;
                var h = {};

                function p() {}

                function y() {}

                function v() {}
                var d = {};
                f(d, o, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    m = g && g(g(j([])));
                m && m !== r && e.call(m, o) && (d = m);
                var w = v.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        f(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, a) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, a, c, u) {
                                    var f = l(t[o], t, a);
                                    if ("throw" !== f.type) {
                                        var s = f.arg,
                                            h = s.value;
                                        return h && "object" == i(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            s.value = t, c(s)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(f.arg)
                                }(o, a, n, c)
                            }))
                        }
                        return n = n ? n.then(c, c) : c()
                    }
                }

                function L(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return h;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = l(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, h;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, h) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, h)
                }

                function E(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function O(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return y.prototype = v, f(w, "constructor", v), f(v, "constructor", y), y.displayName = f(v, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === y || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, f(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), f(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(s(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), f(w, u, "Generator"), f(w, o, (function() {
                    return this
                })), f(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), h
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), h
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function c(t, r) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return u(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return u(t, r)
                        }(t)) || r && t && "number" == typeof t.length) {
                        e && (t = e);
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
                        e = e.call(t)
                    },
                    n: function() {
                        var t = e.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function u(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function f(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function s(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, r) {
                return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                })(t, r)
            }

            function h(t) {
                var r = function() {
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
                    var e, n = y(t);
                    if (r) {
                        var o = y(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return p(this, e)
                }
            }

            function p(t, r) {
                if (r && ("object" === i(r) || "function" == typeof r)) return r;
                if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
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
                ! function(t, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r && l(t, r)
                }(y, t);
                var r, e, n, i, u, p = h(y);

                function y(t) {
                    return function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, y), p.call(this, t)
                }
                return r = y, (e = [{
                    key: "interact",
                    value: (i = a().mark((function t(r) {
                        var e, n, i, u, f, s, l, h, p, y, v, d, g, m, w, b, x;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    n = this.container, i = null !== (e = r.retina.attractDistance) && void 0 !== e ? e : n.retina.attractDistance, u = r.getPosition(), f = n.particles.quadTree.queryCircle(u, i), s = c(f), t.prev = 2, s.s();
                                case 4:
                                    if ((l = s.n()).done) {
                                        t.next = 15;
                                        break
                                    }
                                    if (h = l.value, r !== h && h.options.move.attract.enable && !h.destroyed && !h.spawning) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 8:
                                    p = h.getPosition(), y = Object(o.j)(u, p), v = y.dx, d = y.dy, g = r.options.move.attract.rotate, m = v / (1e3 * g.x), w = d / (1e3 * g.y), b = h.size.value / r.size.value, x = 1 / b, r.velocity.x -= m * b, r.velocity.y -= w * b, h.velocity.x += m * x, h.velocity.y += w * x;
                                case 13:
                                    t.next = 4;
                                    break;
                                case 15:
                                    t.next = 20;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(2), s.e(t.t0);
                                case 20:
                                    return t.prev = 20, s.f(), t.finish(20);
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [2, 17, 20, 23]
                        ])
                    })), u = function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(e, n) {
                            var o = i.apply(t, r);

                            function a(t) {
                                f(o, e, n, a, c, "next", t)
                            }

                            function c(t) {
                                f(o, e, n, a, c, "throw", t)
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
                }]) && s(r.prototype, e), n && s(r, n), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function u(t, r, e, n) {
                    var o = r && r.prototype instanceof l ? r : l,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, r, e) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return _()
                            }
                            for (e.method = o, e.arg = i;;) {
                                var a = e.delegate;
                                if (a) {
                                    var c = L(a, e);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var u = f(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }(t, e, a), i
                }

                function f(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function l() {}

                function h() {}

                function p() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    m = v && v(v(j([])));
                m && m !== r && e.call(m, o) && (y = m);
                var w = p.prototype = l.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        c(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, c) {
                                    var u = f(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            l = s.value;
                                        return l && "object" == d(l) && e.call(l, "__await") ? r.resolve(l.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(l).then((function(t) {
                                            s.value = t, a(s)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(u.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function L(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return s;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = f(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, s) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, s)
                }

                function E(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function O(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
                                };
                            return i.next = i
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
                return h.prototype = p, c(w, "constructor", p), c(p, "constructor", h), h.displayName = c(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), c(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(u(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), c(w, a, "Generator"), c(w, o, (function() {
                    return this
                })), c(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var r = [];
                    for (var e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = j, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function n(e, n) {
                            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = e.call(i, "catchLoc"),
                                    u = e.call(i, "finallyLoc");
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
                    abrupt: function(t, r) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), s
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), s
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, e) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function m(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function w(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (x = w(g().mark((function t(r) {
                    return g().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addInteractor("particlesAttract", (function(t) {
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