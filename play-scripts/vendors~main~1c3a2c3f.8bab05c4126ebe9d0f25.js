(window.webpackJsonp = window.webpackJsonp || []).push([
    [23], {
        "0qtW": function(t, e, r) {
            "use strict";
            r.d(e, "c", (function() {
                return c
            })), r.d(e, "b", (function() {
                return s
            })), r.d(e, "t", (function() {
                return l
            })), r.d(e, "w", (function() {
                return f
            })), r.d(e, "x", (function() {
                return d
            })), r.d(e, "m", (function() {
                return h
            })), r.d(e, "o", (function() {
                return p
            })), r.d(e, "l", (function() {
                return v
            })), r.d(e, "n", (function() {
                return y
            })), r.d(e, "p", (function() {
                return b
            })), r.d(e, "r", (function() {
                return m
            })), r.d(e, "q", (function() {
                return w
            })), r.d(e, "s", (function() {
                return g
            })), r.d(e, "u", (function() {
                return x
            })), r.d(e, "v", (function() {
                return k
            })), r.d(e, "h", (function() {
                return O
            })), r.d(e, "k", (function() {
                return j
            })), r.d(e, "i", (function() {
                return S
            })), r.d(e, "j", (function() {
                return L
            })), r.d(e, "a", (function() {
                return E
            })), r.d(e, "f", (function() {
                return P
            })), r.d(e, "g", (function() {
                return M
            })), r.d(e, "e", (function() {
                return _
            })), r.d(e, "d", (function() {
                return A
            }));
            var n = r("Bvs5"),
                o = r("j5nf"),
                i = r("3wFu");

            function a(t, e, r) {
                var n = r;
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function u(t) {
                if (t.startsWith("rgb")) {
                    var e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return e ? {
                        a: e.length > 4 ? parseFloat(e[5]) : 1,
                        b: parseInt(e[3], 10),
                        g: parseInt(e[2], 10),
                        r: parseInt(e[1], 10)
                    } : void 0
                }
                if (t.startsWith("hsl")) {
                    var r = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return r ? p({
                        a: r.length > 4 ? parseFloat(r[5]) : 1,
                        h: parseInt(r[1], 10),
                        l: parseInt(r[3], 10),
                        s: parseInt(r[2], 10)
                    }) : void 0
                }
                if (t.startsWith("hsv")) {
                    var n = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return n ? g({
                        a: n.length > 4 ? parseFloat(n[5]) : 1,
                        h: parseInt(n[1], 10),
                        s: parseInt(n[2], 10),
                        v: parseInt(n[3], 10)
                    }) : void 0
                }
                var o = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (function(t, e, r, n, o) {
                        return e + e + r + r + n + n + (void 0 !== o ? o + o : "")
                    })),
                    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(o);
                return i ? {
                    a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                    b: parseInt(i[3], 16),
                    g: parseInt(i[2], 16),
                    r: parseInt(i[1], 16)
                } : void 0
            }

            function c(t, e) {
                var r, n, a, u = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (void 0 !== t) {
                    var s, l = "string" == typeof t ? {
                        value: t
                    } : t;
                    if ("string" == typeof l.value) s = l.value === o.a.randomColorValue ? O() : d(l.value);
                    else if (l.value instanceof Array) {
                        var f = Object(i.o)(l.value, e, u);
                        s = c({
                            value: f
                        })
                    } else {
                        var p = l.value,
                            v = null !== (r = p.rgb) && void 0 !== r ? r : l.value;
                        if (void 0 !== v.r) s = v;
                        else {
                            var y = null !== (n = p.hsl) && void 0 !== n ? n : l.value;
                            if (void 0 !== y.h && void 0 !== y.l) s = h(y);
                            else {
                                var b = null !== (a = p.hsv) && void 0 !== a ? a : l.value;
                                void 0 !== b.h && void 0 !== b.v && (s = w(b))
                            }
                        }
                    }
                    return s
                }
            }

            function s(t, e) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    n = c(t, e, r);
                return void 0 !== n ? l(n) : void 0
            }

            function l(t) {
                var e = t.r / 255,
                    r = t.g / 255,
                    n = t.b / 255,
                    o = Math.max(e, r, n),
                    i = Math.min(e, r, n),
                    a = {
                        h: 0,
                        l: (o + i) / 2,
                        s: 0
                    };
                return o !== i && (a.s = a.l < .5 ? (o - i) / (o + i) : (o - i) / (2 - o - i), a.h = e === o ? (r - n) / (o - i) : a.h = r === o ? 2 + (n - e) / (o - i) : 4 + (e - r) / (o - i)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a
            }

            function f(t) {
                var e;
                return null === (e = u(t)) || void 0 === e ? void 0 : e.a
            }

            function d(t) {
                return u(t)
            }

            function h(t) {
                var e = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    r = {
                        h: t.h / 360,
                        l: t.l / 100,
                        s: t.s / 100
                    };
                if (0 === r.s) e.b = r.l, e.g = r.l, e.r = r.l;
                else {
                    var n = r.l < .5 ? r.l * (1 + r.s) : r.l + r.s - r.l * r.s,
                        o = 2 * r.l - n;
                    e.r = a(o, n, r.h + 1 / 3), e.g = a(o, n, r.h), e.b = a(o, n, r.h - 1 / 3)
                }
                return e.r = Math.floor(255 * e.r), e.g = Math.floor(255 * e.g), e.b = Math.floor(255 * e.b), e
            }

            function p(t) {
                var e = h(t);
                return {
                    a: t.a,
                    b: e.b,
                    g: e.g,
                    r: e.r
                }
            }

            function v(t) {
                var e = t.l / 100,
                    r = e + t.s / 100 * Math.min(e, 1 - e),
                    n = r ? 2 * (1 - e / r) : 0;
                return {
                    h: t.h,
                    s: 100 * n,
                    v: 100 * r
                }
            }

            function y(t) {
                var e = v(t);
                return {
                    a: t.a,
                    h: e.h,
                    s: e.s,
                    v: e.v
                }
            }

            function b(t) {
                var e = t.v / 100,
                    r = e * (1 - t.s / 100 / 2),
                    n = 0 === r || 1 === r ? 0 : (e - r) / Math.min(r, 1 - r);
                return {
                    h: t.h,
                    l: 100 * r,
                    s: 100 * n
                }
            }

            function m(t) {
                var e = b(t);
                return {
                    a: t.a,
                    h: e.h,
                    l: e.l,
                    s: e.s
                }
            }

            function w(t) {
                var e, r = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    n = t.h / 60,
                    o = t.s / 100,
                    i = t.v / 100,
                    a = i * o,
                    u = a * (1 - Math.abs(n % 2 - 1));
                if (n >= 0 && n <= 1 ? e = {
                        r: a,
                        g: u,
                        b: 0
                    } : n > 1 && n <= 2 ? e = {
                        r: u,
                        g: a,
                        b: 0
                    } : n > 2 && n <= 3 ? e = {
                        r: 0,
                        g: a,
                        b: u
                    } : n > 3 && n <= 4 ? e = {
                        r: 0,
                        g: u,
                        b: a
                    } : n > 4 && n <= 5 ? e = {
                        r: u,
                        g: 0,
                        b: a
                    } : n > 5 && n <= 6 && (e = {
                        r: a,
                        g: 0,
                        b: u
                    }), e) {
                    var c = i - a;
                    r.r = Math.floor(255 * (e.r + c)), r.g = Math.floor(255 * (e.g + c)), r.b = Math.floor(255 * (e.b + c))
                }
                return r
            }

            function g(t) {
                var e = w(t);
                return {
                    a: t.a,
                    b: e.b,
                    g: e.g,
                    r: e.r
                }
            }

            function x(t) {
                var e = {
                        r: t.r / 255,
                        g: t.g / 255,
                        b: t.b / 255
                    },
                    r = Math.max(e.r, e.g, e.b),
                    n = r - Math.min(e.r, e.g, e.b),
                    o = 0;
                return r === e.r ? o = (e.g - e.b) / n * 60 : r === e.g ? o = 60 * (2 + (e.b - e.r) / n) : r === e.b && (o = 60 * (4 + (e.r - e.g) / n)), {
                    h: o,
                    s: 100 * (r ? n / r : 0),
                    v: 100 * r
                }
            }

            function k(t) {
                var e = x(t);
                return {
                    a: t.a,
                    h: e.h,
                    s: e.s,
                    v: e.v
                }
            }

            function O(t) {
                var e = null != t ? t : 0;
                return {
                    b: Math.floor(Object(n.r)(Object(n.s)(e, 256))),
                    g: Math.floor(Object(n.r)(Object(n.s)(e, 256))),
                    r: Math.floor(Object(n.r)(Object(n.s)(e, 256)))
                }
            }

            function j(t, e) {
                return "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(null != e ? e : 1, ")")
            }

            function S(t, e) {
                return "hsla(".concat(t.h, ", ").concat(t.s, "%, ").concat(t.l, "%, ").concat(null != e ? e : 1, ")")
            }

            function L(t, e) {
                return S(b(t), e)
            }

            function E(t, e, r, o) {
                var i = t,
                    a = e;
                return void 0 === i.r && (i = h(t)), void 0 === a.r && (a = h(e)), {
                    b: Object(n.q)(i.b, a.b, r, o),
                    g: Object(n.q)(i.g, a.g, r, o),
                    r: Object(n.q)(i.r, a.r, r, o)
                }
            }

            function P(t, e, r) {
                var n, i;
                if (r === o.a.randomColorValue) return O();
                if ("mid" !== r) return r;
                var a = null !== (n = t.getFillColor()) && void 0 !== n ? n : t.getStrokeColor(),
                    u = null !== (i = null == e ? void 0 : e.getFillColor()) && void 0 !== i ? i : null == e ? void 0 : e.getStrokeColor();
                if (a && u && e) return E(a, u, t.getRadius(), e.getRadius());
                var c = null != a ? a : u;
                return c ? h(c) : void 0
            }

            function M(t, e, r) {
                var n = "string" == typeof t ? t : t.value;
                return n === o.a.randomColorValue ? r ? c({
                    value: n
                }) : e ? o.a.randomColorValue : o.a.midColorValue : c({
                    value: n
                })
            }

            function _(t) {
                return void 0 !== t ? {
                    h: t.h.value,
                    s: t.s.value,
                    l: t.l.value
                } : void 0
            }

            function A(t, e, r) {
                var n = {
                    h: {
                        enable: !1,
                        value: t.h
                    },
                    s: {
                        enable: !1,
                        value: t.s
                    },
                    l: {
                        enable: !1,
                        value: t.l
                    }
                };
                return e && (T(n.h, e.h, r), T(n.s, e.s, r), T(n.l, e.l, r)), n
            }

            function T(t, e, r) {
                if (t.enable = e.enable, t.enable) {
                    if (t.velocity = Object(n.o)(e.speed) / 100 * r, e.sync) return;
                    t.status = 0, t.velocity *= Math.random(), t.value && (t.value *= Math.random())
                } else t.velocity = 0
            }
        },
        "3wFu": function(t, e, r) {
            "use strict";
            r.d(e, "n", (function() {
                return h
            })), r.d(e, "a", (function() {
                return p
            })), r.d(e, "e", (function() {
                return v
            })), r.d(e, "l", (function() {
                return y
            })), r.d(e, "p", (function() {
                return b
            })), r.d(e, "c", (function() {
                return w
            })), r.d(e, "o", (function() {
                return g
            })), r.d(e, "m", (function() {
                return x
            })), r.d(e, "b", (function() {
                return k
            })), r.d(e, "d", (function() {
                return O
            })), r.d(e, "h", (function() {
                return j
            })), r.d(e, "k", (function() {
                return S
            })), r.d(e, "j", (function() {
                return L
            })), r.d(e, "r", (function() {
                return E
            })), r.d(e, "i", (function() {
                return P
            })), r.d(e, "g", (function() {
                return M
            })), r.d(e, "f", (function() {
                return _
            })), r.d(e, "q", (function() {
                return A
            }));
            var n = r("Bvs5"),
                o = r("U1gX");

            function i() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                i = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    u = n.asyncIterator || "@@asyncIterator",
                    c = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var o = e && e.prototype instanceof h ? e : h,
                        i = Object.create(o.prototype),
                        a = new S(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return E()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = k(a, r);
                                    if (u) {
                                        if (u === d) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = f(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === d) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function f(t, e, r) {
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
                t.wrap = l;
                var d = {};

                function h() {}

                function p() {}

                function v() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    m = b && b(b(L([])));
                m && m !== e && r.call(m, o) && (y = m);
                var w = v.prototype = h.prototype = Object.create(y);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function u() {
                            return new e((function(n, u) {
                                ! function n(o, i, u, c) {
                                    var s = f(t[o], t, i);
                                    if ("throw" !== s.type) {
                                        var l = s.arg,
                                            d = l.value;
                                        return d && "object" == a(d) && r.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                            n("next", t, u, c)
                                        }), (function(t) {
                                            n("throw", t, u, c)
                                        })) : e.resolve(d).then((function(t) {
                                            l.value = t, u(l)
                                        }), (function(t) {
                                            return n("throw", t, u, c)
                                        }))
                                    }
                                    c(s.arg)
                                }(o, i, n, u)
                            }))
                        }
                        return n = n ? n.then(u, u) : u()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return d;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function L(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = v, s(w, "constructor", v), s(v, "constructor", p), p.displayName = s(v, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, s(t, c, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(x.prototype), s(x.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(w), s(w, c, "Generator"), s(w, o, (function() {
                    return this
                })), s(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = L, S.prototype = {
                    constructor: S,
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
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), d
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
                            iterator: L(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, t
            }

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function c(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            u(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            u(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function s(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return l(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e)
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
                    u = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function f(t, e, r, n, o, i) {
                var a = {
                    bounced: !1
                };
                return e.min < n.min || e.min > n.max || e.max < n.min || e.max > n.max || (t.max >= r.min && t.max <= (r.max + r.min) / 2 && o > 0 || t.min <= r.max && t.min > (r.max + r.min) / 2 && o < 0) && (a.velocity = o * -i, a.bounced = !0), a
            }

            function d(t, e) {
                if (!(e instanceof Array)) return t.matches(e);
                var r, n = s(e);
                try {
                    for (n.s(); !(r = n.n()).done;) {
                        var o = r.value;
                        if (t.matches(o)) return !0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return !1
            }

            function h() {
                return "undefined" == typeof window || !window || void 0 === window.document || !window.document
            }

            function p() {
                return h() ? function(t) {
                    return setTimeout(t)
                } : function(t) {
                    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t)
                }
            }

            function v() {
                return h() ? function(t) {
                    return clearTimeout(t)
                } : function(t) {
                    return (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t)
                }
            }

            function y(t, e) {
                return t === e || e instanceof Array && e.indexOf(t) > -1
            }

            function b(t) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = c(i().mark((function t(e) {
                    var r, n;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, document.fonts.load("".concat(null !== (r = e.weight) && void 0 !== r ? r : "400", " 36px '").concat(null !== (n = e.font) && void 0 !== n ? n : "Verdana", "'"));
                            case 3:
                                t.next = 7;
                                break;
                            case 5:
                                t.prev = 5, t.t0 = t.catch(0);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 5]
                    ])
                })))).apply(this, arguments)
            }

            function w(t) {
                return Math.floor(Math.random() * t.length)
            }

            function g(t, e) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    n = void 0 !== e && r ? e % t.length : w(t);
                return t[n]
            }

            function x(t, e, r, n) {
                return k(O(t, null != r ? r : 0), e, n)
            }

            function k(t, e, r) {
                var n = !0;
                return r && "bottom" !== r || (n = t.top < e.height), !n || r && "left" !== r || (n = t.right > 0), !n || r && "right" !== r || (n = t.left < e.width), !n || r && "top" !== r || (n = t.bottom > 0), n
            }

            function O(t, e) {
                return {
                    bottom: t.y + e,
                    left: t.x - e,
                    right: t.x + e,
                    top: t.y - e
                }
            }

            function j(t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                for (var o = 0, i = r; o < i.length; o++) {
                    var u = i[o];
                    if (null != u)
                        if ("object" === a(u)) {
                            var c = Array.isArray(u);
                            !c || "object" === a(t) && t && Array.isArray(t) ? c || "object" === a(t) && t && !Array.isArray(t) || (t = {}) : t = [];
                            var s = function(e) {
                                if ("__proto__" === e) return "continue";
                                var r = u[e],
                                    n = "object" === a(r),
                                    o = t;
                                o[e] = n && Array.isArray(r) ? r.map((function(t) {
                                    return j(o[e], t)
                                })) : j(o[e], r)
                            };
                            for (var l in u) s(l)
                        } else t = u
                }
                return t
            }

            function S(t, e) {
                return e instanceof Array ? !!e.find((function(e) {
                    return e.enable && y(t, e.mode)
                })) : y(t, e.mode)
            }

            function L(t, e, r) {
                if (e instanceof Array) {
                    var n, o = s(e);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value,
                                a = i.mode;
                            i.enable && y(t, a) && E(i, r)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                } else {
                    var u = e.mode;
                    e.enable && y(t, u) && E(e, r)
                }
            }

            function E(t, e) {
                var r = t.selectors;
                if (r instanceof Array) {
                    var n, o = s(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            e(n.value, t)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                } else e(r, t)
            }

            function P(t, e) {
                if (e && t) return t instanceof Array ? t.find((function(t) {
                    return d(e, t.selectors)
                })) : d(e, t.selectors) ? t : void 0
            }

            function M(t) {
                return {
                    position: t.getPosition(),
                    radius: t.getRadius(),
                    mass: t.getMass(),
                    velocity: t.velocity,
                    factor: o.a.create(Object(n.p)(t.options.bounce.horizontal), Object(n.p)(t.options.bounce.vertical))
                }
            }

            function _(t, e) {
                var r = t.velocity.sub(e.velocity),
                    o = r.x,
                    i = r.y,
                    a = [t.position, e.position],
                    u = a[0],
                    c = a[1],
                    s = Object(n.j)(c, u),
                    l = s.dx,
                    f = s.dy;
                if (!(o * l + i * f < 0)) {
                    var d = -Math.atan2(f, l),
                        h = t.mass,
                        p = e.mass,
                        v = t.velocity.rotate(d),
                        y = e.velocity.rotate(d),
                        b = Object(n.h)(v, y, h, p),
                        m = Object(n.h)(y, v, h, p),
                        w = b.rotate(-d),
                        g = m.rotate(-d);
                    t.velocity.x = w.x * t.factor.x, t.velocity.y = w.y * t.factor.y, e.velocity.x = g.x * e.factor.x, e.velocity.y = g.y * e.factor.y
                }
            }

            function A(t, e) {
                var r = O(t.getPosition(), t.getRadius()),
                    o = f({
                        min: r.left,
                        max: r.right
                    }, {
                        min: r.top,
                        max: r.bottom
                    }, {
                        min: e.left,
                        max: e.right
                    }, {
                        min: e.top,
                        max: e.bottom
                    }, t.velocity.x, Object(n.p)(t.options.bounce.horizontal));
                o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
                var i = f({
                    min: r.top,
                    max: r.bottom
                }, {
                    min: r.left,
                    max: r.right
                }, {
                    min: e.top,
                    max: e.bottom
                }, {
                    min: e.left,
                    max: e.right
                }, t.velocity.y, Object(n.p)(t.options.bounce.vertical));
                i.bounced && (void 0 !== i.velocity && (t.velocity.y = i.velocity), void 0 !== i.position && (t.position.y = i.position))
            }
        },
        Acg6: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "Circle", (function() {
                return lt.a
            })), r.d(e, "CircleWarp", (function() {
                return ft.a
            })), r.d(e, "Constants", (function() {
                return dt.a
            })), r.d(e, "EventListeners", (function() {
                return ht.a
            })), r.d(e, "ExternalInteractorBase", (function() {
                return pt.a
            })), r.d(e, "FrameManager", (function() {
                return vt.a
            })), r.d(e, "InteractionManager", (function() {
                return yt.a
            })), r.d(e, "ParticlesInteractorBase", (function() {
                return bt.a
            })), r.d(e, "Plugins", (function() {
                return o.a
            })), r.d(e, "Point", (function() {
                return mt.a
            })), r.d(e, "QuadTree", (function() {
                return wt.a
            })), r.d(e, "Range", (function() {
                return gt.a
            })), r.d(e, "Rectangle", (function() {
                return xt.a
            })), r.d(e, "Vector", (function() {
                return kt.a
            })), r.d(e, "Vector3d", (function() {
                return Ot.a
            })), r.d(e, "Canvas", (function() {
                return jt.a
            })), r.d(e, "Container", (function() {
                return St.a
            })), r.d(e, "Loader", (function() {
                return n.a
            })), r.d(e, "Particle", (function() {
                return Lt.a
            })), r.d(e, "Particles", (function() {
                return Et.a
            })), r.d(e, "Retina", (function() {
                return Pt.a
            })), r.d(e, "Engine", (function() {
                return y
            })), r.d(e, "Main", (function() {
                return y
            })), r.d(e, "Options", (function() {
                return Mt.a
            })), r.d(e, "OptionsColor", (function() {
                return _t.a
            })), r.d(e, "paintBase", (function() {
                return At.n
            })), r.d(e, "clear", (function() {
                return At.b
            })), r.d(e, "drawLinkLine", (function() {
                return At.f
            })), r.d(e, "drawLinkTriangle", (function() {
                return At.g
            })), r.d(e, "drawConnectLine", (function() {
                return At.c
            })), r.d(e, "gradient", (function() {
                return At.m
            })), r.d(e, "drawGrabLine", (function() {
                return At.e
            })), r.d(e, "drawParticle", (function() {
                return At.h
            })), r.d(e, "drawShape", (function() {
                return At.k
            })), r.d(e, "drawShapeAfterEffect", (function() {
                return At.l
            })), r.d(e, "drawPlugin", (function() {
                return At.j
            })), r.d(e, "drawParticlePlugin", (function() {
                return At.i
            })), r.d(e, "drawEllipse", (function() {
                return At.d
            })), r.d(e, "alterHsl", (function() {
                return At.a
            })), r.d(e, "colorToRgb", (function() {
                return Tt.c
            })), r.d(e, "colorToHsl", (function() {
                return Tt.b
            })), r.d(e, "rgbToHsl", (function() {
                return Tt.t
            })), r.d(e, "stringToAlpha", (function() {
                return Tt.w
            })), r.d(e, "stringToRgb", (function() {
                return Tt.x
            })), r.d(e, "hslToRgb", (function() {
                return Tt.m
            })), r.d(e, "hslaToRgba", (function() {
                return Tt.o
            })), r.d(e, "hslToHsv", (function() {
                return Tt.l
            })), r.d(e, "hslaToHsva", (function() {
                return Tt.n
            })), r.d(e, "hsvToHsl", (function() {
                return Tt.p
            })), r.d(e, "hsvaToHsla", (function() {
                return Tt.r
            })), r.d(e, "hsvToRgb", (function() {
                return Tt.q
            })), r.d(e, "hsvaToRgba", (function() {
                return Tt.s
            })), r.d(e, "rgbToHsv", (function() {
                return Tt.u
            })), r.d(e, "rgbaToHsva", (function() {
                return Tt.v
            })), r.d(e, "getRandomRgbColor", (function() {
                return Tt.h
            })), r.d(e, "getStyleFromRgb", (function() {
                return Tt.k
            })), r.d(e, "getStyleFromHsl", (function() {
                return Tt.i
            })), r.d(e, "getStyleFromHsv", (function() {
                return Tt.j
            })), r.d(e, "colorMix", (function() {
                return Tt.a
            })), r.d(e, "getLinkColor", (function() {
                return Tt.f
            })), r.d(e, "getLinkRandomColor", (function() {
                return Tt.g
            })), r.d(e, "getHslFromAnimation", (function() {
                return Tt.e
            })), r.d(e, "getHslAnimationFromHsl", (function() {
                return Tt.d
            })), r.d(e, "clamp", (function() {
                return Ft.g
            })), r.d(e, "mix", (function() {
                return Ft.q
            })), r.d(e, "randomInRange", (function() {
                return Ft.r
            })), r.d(e, "getRangeValue", (function() {
                return Ft.o
            })), r.d(e, "getRangeMin", (function() {
                return Ft.n
            })), r.d(e, "getRangeMax", (function() {
                return Ft.m
            })), r.d(e, "setRangeValue", (function() {
                return Ft.s
            })), r.d(e, "getValue", (function() {
                return Ft.p
            })), r.d(e, "getDistances", (function() {
                return Ft.j
            })), r.d(e, "getDistance", (function() {
                return Ft.i
            })), r.d(e, "getParticleDirectionAngle", (function() {
                return Ft.l
            })), r.d(e, "getParticleBaseVelocity", (function() {
                return Ft.k
            })), r.d(e, "collisionVelocity", (function() {
                return Ft.h
            })), r.d(e, "calcEasing", (function() {
                return Ft.a
            })), r.d(e, "calcPositionFromSize", (function() {
                return Ft.d
            })), r.d(e, "calcPositionOrRandomFromSize", (function() {
                return Ft.e
            })), r.d(e, "calcPositionOrRandomFromSizeRanged", (function() {
                return Ft.f
            })), r.d(e, "calcExactPositionOrRandomFromSize", (function() {
                return Ft.b
            })), r.d(e, "calcExactPositionOrRandomFromSizeRanged", (function() {
                return Ft.c
            })), r.d(e, "isSsr", (function() {
                return Ct.n
            })), r.d(e, "animate", (function() {
                return Ct.a
            })), r.d(e, "cancelAnimation", (function() {
                return Ct.e
            })), r.d(e, "isInArray", (function() {
                return Ct.l
            })), r.d(e, "loadFont", (function() {
                return Ct.p
            })), r.d(e, "arrayRandomIndex", (function() {
                return Ct.c
            })), r.d(e, "itemFromArray", (function() {
                return Ct.o
            })), r.d(e, "isPointInside", (function() {
                return Ct.m
            })), r.d(e, "areBoundsInside", (function() {
                return Ct.b
            })), r.d(e, "calculateBounds", (function() {
                return Ct.d
            })), r.d(e, "deepExtend", (function() {
                return Ct.h
            })), r.d(e, "isDivModeEnabled", (function() {
                return Ct.k
            })), r.d(e, "divModeExecute", (function() {
                return Ct.j
            })), r.d(e, "singleDivModeExecute", (function() {
                return Ct.r
            })), r.d(e, "divMode", (function() {
                return Ct.i
            })), r.d(e, "circleBounceDataFromParticle", (function() {
                return Ct.g
            })), r.d(e, "circleBounce", (function() {
                return Ct.f
            })), r.d(e, "rectBounce", (function() {
                return Ct.q
            })), r.d(e, "loadAbsorbersPlugin", (function() {
                return b.a
            })), r.d(e, "loadEmittersPlugin", (function() {
                return m.a
            })), r.d(e, "loadPolygonMaskPlugin", (function() {
                return g.a
            })), r.d(e, "particlesJS", (function() {
                return qt
            })), r.d(e, "pJSDom", (function() {
                return Rt
            })), r.d(e, "tsParticles", (function() {
                return It
            }));
            var n = r("FDSO"),
                o = r("0Ywm");

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, e) {
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

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var o = e && e.prototype instanceof h ? e : h,
                        i = Object.create(o.prototype),
                        a = new S(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return E()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = k(a, r);
                                    if (u) {
                                        if (u === d) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = f(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === d) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function f(t, e, r) {
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
                t.wrap = l;
                var d = {};

                function h() {}

                function p() {}

                function v() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    m = b && b(b(L([])));
                m && m !== e && r.call(m, o) && (y = m);
                var w = v.prototype = h.prototype = Object.create(y);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function u() {
                            return new e((function(n, u) {
                                ! function n(o, a, u, c) {
                                    var s = f(t[o], t, a);
                                    if ("throw" !== s.type) {
                                        var l = s.arg,
                                            d = l.value;
                                        return d && "object" == i(d) && r.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                            n("next", t, u, c)
                                        }), (function(t) {
                                            n("throw", t, u, c)
                                        })) : e.resolve(d).then((function(t) {
                                            l.value = t, u(l)
                                        }), (function(t) {
                                            return n("throw", t, u, c)
                                        }))
                                    }
                                    c(s.arg)
                                }(o, a, n, u)
                            }))
                        }
                        return n = n ? n.then(u, u) : u()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return d;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function L(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = v, s(w, "constructor", v), s(v, "constructor", p), p.displayName = s(v, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, s(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(x.prototype), s(x.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(w), s(w, u, "Generator"), s(w, o, (function() {
                    return this
                })), s(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = L, S.prototype = {
                    constructor: S,
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
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), d
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
                            iterator: L(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, t
            }

            function s(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function l(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            s(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            s(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function f(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var d, h, p = function(t, e, r, n, o) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
                },
                v = function(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                },
                y = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), d.set(this, void 0), h.set(this, void 0), p(this, d, !1, "f"), this.domArray = [], p(this, h, new n.a(this), "f"), this.plugins = new o.a(this)
                    }
                    var e, r, i, u, s, y, b, m, w, g, x, k, O, j, S, L;
                    return e = t, (r = [{
                        key: "init",
                        value: function() {
                            v(this, d, "f") || p(this, d, !0, "f")
                        }
                    }, {
                        key: "loadFromArray",
                        value: (L = l(c().mark((function t(e, r, n) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").load(e, r, n));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r) {
                            return L.apply(this, arguments)
                        })
                    }, {
                        key: "load",
                        value: (S = l(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").load(e, r));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return S.apply(this, arguments)
                        })
                    }, {
                        key: "set",
                        value: (j = l(c().mark((function t(e, r, n) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").set(e, r, n));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r) {
                            return j.apply(this, arguments)
                        })
                    }, {
                        key: "loadJSON",
                        value: (O = l(c().mark((function t(e, r, n) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").loadJSON(e, r, n));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r) {
                            return O.apply(this, arguments)
                        })
                    }, {
                        key: "setJSON",
                        value: (k = l(c().mark((function t(e, r, n, o) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").setJSON(e, r, n, o));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r, n) {
                            return k.apply(this, arguments)
                        })
                    }, {
                        key: "setOnClickHandler",
                        value: function(t) {
                            v(this, h, "f").setOnClickHandler(t)
                        }
                    }, {
                        key: "dom",
                        value: function() {
                            return v(this, h, "f").dom()
                        }
                    }, {
                        key: "domItem",
                        value: function(t) {
                            return v(this, h, "f").domItem(t)
                        }
                    }, {
                        key: "refresh",
                        value: (x = l(c().mark((function t() {
                            var e, r, n;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e = a(this.dom()), t.prev = 1, e.s();
                                    case 3:
                                        if ((r = e.n()).done) {
                                            t.next = 9;
                                            break
                                        }
                                        return n = r.value, t.next = 7, n.refresh();
                                    case 7:
                                        t.next = 3;
                                        break;
                                    case 9:
                                        t.next = 14;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
                                    case 14:
                                        return t.prev = 14, e.f(), t.finish(14);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [1, 11, 14, 17]
                            ])
                        }))), function() {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "addShape",
                        value: (g = l(c().mark((function t(e, r, n, o, i) {
                            var a;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return a = "function" == typeof r ? {
                                            afterEffect: o,
                                            destroy: i,
                                            draw: r,
                                            init: n
                                        } : r, this.plugins.addShapeDrawer(e, a), t.next = 4, this.refresh();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r, n, o) {
                            return g.apply(this, arguments)
                        })
                    }, {
                        key: "addPreset",
                        value: (w = l(c().mark((function t(e, r) {
                            var n, o = arguments;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = o.length > 2 && void 0 !== o[2] && o[2], this.plugins.addPreset(e, r, n), t.next = 4, this.refresh();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "addPlugin",
                        value: (m = l(c().mark((function t(e) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addPlugin(e), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "addPathGenerator",
                        value: (b = l(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addPathGenerator(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return b.apply(this, arguments)
                        })
                    }, {
                        key: "addInteractor",
                        value: (y = l(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addInteractor(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return y.apply(this, arguments)
                        })
                    }, {
                        key: "addMover",
                        value: (s = l(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addParticleMover(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "addParticleUpdater",
                        value: (u = l(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addParticleUpdater(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return u.apply(this, arguments)
                        })
                    }]) && f(e.prototype, r), i && f(e, i), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
            d = new WeakMap, h = new WeakMap;
            var b = r("t3th"),
                m = r("FpRS"),
                w = r("s2Bo"),
                g = r("11FU"),
                x = r("UM4E"),
                k = r("XXxQ"),
                O = r("qqie"),
                j = r("8AKg"),
                S = r("473K"),
                L = r("DMJt"),
                E = r("paPv"),
                P = r("crxL"),
                M = r("TKDX"),
                _ = r("vmSj"),
                A = r("iNQC"),
                T = r("CY4r"),
                F = r("HxXU"),
                C = r("Dotv"),
                I = r("KzlG"),
                N = r("ve9a"),
                q = r("eNv/"),
                R = r("+t9f"),
                z = r("+DqO"),
                G = r("HTT4"),
                B = r("yb31"),
                D = r("bLJs"),
                U = r("2okq"),
                H = r("K6ZH"),
                V = r("GHz4"),
                W = r("z9Ic"),
                X = r("jz3o"),
                Y = r("KmHF"),
                J = r("bYpf");

            function Z(t) {
                return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Q() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Q = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

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

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
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
                                    var u = g(a, r);
                                    if (u) {
                                        if (u === l) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = s(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function s(t, e, r) {
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
                var l = {};

                function f() {}

                function d() {}

                function h() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    y = v && v(v(j([])));
                y && y !== e && r.call(y, o) && (p = y);
                var b = h.prototype = f.prototype = Object.create(p);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function w(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, u) {
                                    var c = s(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == Z(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, a, u)
                                        }), (function(t) {
                                            n("throw", t, a, u)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return n("throw", t, a, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return d.prototype = h, u(b, "constructor", h), u(h, "constructor", d), d.displayName = u(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, m(b), u(b, a, "Generator"), u(b, o, (function() {
                    return this
                })), u(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
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
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function $(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function K(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            $(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            $(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function tt(t) {
                return et.apply(this, arguments)
            }

            function et() {
                return (et = K(Q().mark((function t(e) {
                    return Q().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Object(O.a)(e);
                            case 2:
                                return t.next = 4, Object(G.a)(e);
                            case 4:
                                return t.next = 6, Object(L.a)(e);
                            case 6:
                                return t.next = 8, Object(E.a)(e);
                            case 8:
                                return t.next = 10, Object(P.a)(e);
                            case 10:
                                return t.next = 12, Object(M.a)(e);
                            case 12:
                                return t.next = 14, Object(_.a)(e);
                            case 14:
                                return t.next = 16, Object(A.a)(e);
                            case 16:
                                return t.next = 18, Object(T.a)(e);
                            case 18:
                                return t.next = 20, Object(F.a)(e);
                            case 20:
                                return t.next = 22, Object(C.a)(e);
                            case 22:
                                return t.next = 24, Object(B.a)(e);
                            case 24:
                                return t.next = 26, Object(D.a)(e);
                            case 26:
                                return t.next = 28, Object(U.a)(e);
                            case 28:
                                return t.next = 30, Object(j.a)(e);
                            case 30:
                                return t.next = 32, Object(I.a)(e);
                            case 32:
                                return t.next = 34, Object(q.a)(e);
                            case 34:
                                return t.next = 36, Object(H.a)(e);
                            case 36:
                                return t.next = 38, Object(W.a)(e);
                            case 38:
                                return t.next = 40, Object(X.a)(e);
                            case 40:
                                return t.next = 42, Object(J.a)(e);
                            case 42:
                                return t.next = 44, Object(N.a)(e);
                            case 44:
                                return t.next = 46, Object(R.a)(e);
                            case 46:
                                return t.next = 48, Object(V.a)(e);
                            case 48:
                                return t.next = 50, Object(k.a)(e);
                            case 50:
                                return t.next = 52, Object(S.a)(e);
                            case 52:
                                return t.next = 54, Object(Y.a)(e);
                            case 54:
                                return t.next = 56, Object(z.a)(e);
                            case 56:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var rt = r("wPbT"),
                nt = r("ilkc"),
                ot = r("GNcM");

            function it(t) {
                return (it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function at() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                at = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

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

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
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
                                    var u = g(a, r);
                                    if (u) {
                                        if (u === l) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = s(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function s(t, e, r) {
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
                var l = {};

                function f() {}

                function d() {}

                function h() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    y = v && v(v(j([])));
                y && y !== e && r.call(y, o) && (p = y);
                var b = h.prototype = f.prototype = Object.create(p);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function w(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, u) {
                                    var c = s(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == it(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, a, u)
                                        }), (function(t) {
                                            n("throw", t, a, u)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return n("throw", t, a, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return d.prototype = h, u(b, "constructor", h), u(h, "constructor", d), d.displayName = u(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, m(b), u(b, a, "Generator"), u(b, o, (function() {
                    return this
                })), u(b, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
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
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function ut(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function ct(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            ut(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            ut(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function st() {
                return (st = ct(at().mark((function t(e) {
                    return at().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, tt(e);
                            case 2:
                                return t.next = 4, Object(x.a)(e);
                            case 4:
                                return t.next = 6, Object(rt.a)(e);
                            case 6:
                                return t.next = 8, Object(nt.a)(e);
                            case 8:
                                return t.next = 10, Object(ot.a)(e);
                            case 10:
                                return t.next = 12, Object(w.a)(e);
                            case 12:
                                return t.next = 14, Object(b.a)(e);
                            case 14:
                                return t.next = 16, Object(m.a)(e);
                            case 16:
                                return t.next = 18, Object(g.a)(e);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            r("FUqr"), r("FmQT"), r("58nm"), r("X/z7"), r("DYpB"), r("UYB9"), r("iPyE"), r("SW61"), r("BrDg"), r("WQEa"), r("+L1+"), r("DxMr"), r("B/N6"), r("fXI0"), r("X6GZ"), r("jCHr"), r("uiRQ"), r("Buzl"), r("PPMk"), r("YbVy"), r("PgXR"), r("0jlI"), r("mFZ6"), r("U4YG"), r("0PbJ"), r("z2VP"), r("nt9P"), r("Ib91"), r("r1vc"), r("qW+D"), r("TzSi"), r("yUxw"), r("a1/f"), r("LFcJ");
            var lt = r("mZtP"),
                ft = r("Avkg"),
                dt = r("j5nf"),
                ht = r("D2zs"),
                pt = r("fcVS"),
                vt = r("jPhR"),
                yt = r("jiOm"),
                bt = r("Psfb"),
                mt = r("ClS3"),
                wt = r("ibU6"),
                gt = r("mfN2"),
                xt = r("cfMx"),
                kt = r("U1gX"),
                Ot = r("hs3Q"),
                jt = r("inmb"),
                St = r("c8kP"),
                Lt = r("FBI6"),
                Et = r("hZ54"),
                Pt = r("dStz"),
                Mt = (r("n983"), r("oZPS"), r("Jr57"), r("Q0/g"), r("4q0i"), r("b+oQ"), r("qAsa"), r("3Doj"), r("m58t"), r("aVqd"), r("sXWi"), r("i8T/"), r("0rCv"), r("rOrm"), r("pNKG"), r("XVaJ"), r("md8Y"), r("31nC"), r("rRRg"), r("/4Wm"), r("uuAh"), r("PB/L"), r("Iuiz"), r("5aBa"), r("NWCE")),
                _t = r("xhEd"),
                At = (r("ZfSB"), r("w66q"), r("p77+"), r("hqX8"), r("Aadh"), r("6I6a"), r("I5g1"), r("hcMC")),
                Tt = r("0qtW"),
                Ft = r("Bvs5"),
                Ct = r("3wFu"),
                It = (r("LY7n"), r("zxvr"), r("pntI"), r("puOj"), r("hI5k"), r("kcuX"), new y);
            It.init();
            var Nt = function(t) {
                    var e = function(e, r) {
                        return t.load(e, r)
                    };
                    return e.load = function(e, r, n) {
                        t.loadJSON(e, r).then((function(t) {
                            t && n(t)
                        })).catch((function() {
                            n(void 0)
                        }))
                    }, e.setOnClickHandler = function(e) {
                        t.setOnClickHandler(e)
                    }, {
                        particlesJS: e,
                        pJSDom: t.dom()
                    }
                }(It),
                qt = Nt.particlesJS,
                Rt = Nt.pJSDom;
            ! function(t) {
                st.apply(this, arguments)
            }(It)
        },
        B9Yq: function(t, e) {
            t.exports = function() {
                throw new Error("define cannot be used indirect")
            }
        },
        Bvs5: function(t, e, r) {
            "use strict";
            r.d(e, "g", (function() {
                return o
            })), r.d(e, "q", (function() {
                return i
            })), r.d(e, "r", (function() {
                return a
            })), r.d(e, "o", (function() {
                return u
            })), r.d(e, "n", (function() {
                return c
            })), r.d(e, "m", (function() {
                return s
            })), r.d(e, "s", (function() {
                return l
            })), r.d(e, "p", (function() {
                return f
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "i", (function() {
                return h
            })), r.d(e, "l", (function() {
                return p
            })), r.d(e, "k", (function() {
                return v
            })), r.d(e, "h", (function() {
                return y
            })), r.d(e, "a", (function() {
                return b
            })), r.d(e, "d", (function() {
                return m
            })), r.d(e, "e", (function() {
                return w
            })), r.d(e, "f", (function() {
                return g
            })), r.d(e, "b", (function() {
                return x
            })), r.d(e, "c", (function() {
                return k
            }));
            var n = r("U1gX");

            function o(t, e, r) {
                return Math.min(Math.max(t, e), r)
            }

            function i(t, e, r, n) {
                return Math.floor((t * r + e * n) / (r + n))
            }

            function a(t) {
                var e = s(t),
                    r = c(t);
                return e === r && (r = 0), Math.random() * (e - r) + r
            }

            function u(t) {
                return "number" == typeof t ? t : a(t)
            }

            function c(t) {
                return "number" == typeof t ? t : t.min
            }

            function s(t) {
                return "number" == typeof t ? t : t.max
            }

            function l(t, e) {
                if (t === e || void 0 === e && "number" == typeof t) return t;
                var r = c(t),
                    n = s(t);
                return void 0 !== e ? {
                    min: Math.min(r, e),
                    max: Math.max(n, e)
                } : l(r, n)
            }

            function f(t) {
                var e = t.random,
                    r = "boolean" == typeof e ? {
                        enable: e,
                        minimumValue: 0
                    } : e,
                    n = r.enable,
                    o = r.minimumValue;
                return u(n ? l(t.value, o) : t.value)
            }

            function d(t, e) {
                var r = t.x - e.x,
                    n = t.y - e.y;
                return {
                    dx: r,
                    dy: n,
                    distance: Math.sqrt(r * r + n * n)
                }
            }

            function h(t, e) {
                return d(t, e).distance
            }

            function p(t) {
                if ("number" == typeof t) return t * Math.PI / 180;
                switch (t) {
                    case "top":
                        return -Math.PI / 2;
                    case "top-right":
                        return -Math.PI / 4;
                    case "right":
                        return 0;
                    case "bottom-right":
                        return Math.PI / 4;
                    case "bottom":
                        return Math.PI / 2;
                    case "bottom-left":
                        return 3 * Math.PI / 4;
                    case "left":
                        return Math.PI;
                    case "top-left":
                        return -3 * Math.PI / 4;
                    case "none":
                    default:
                        return Math.random() * Math.PI * 2
                }
            }

            function v(t) {
                var e = n.a.origin;
                return e.length = 1, e.angle = t, e
            }

            function y(t, e, r, o) {
                return n.a.create(t.x * (r - o) / (r + o) + 2 * e.x * o / (r + o), t.y)
            }

            function b(t, e) {
                switch (e) {
                    case "ease-out-quad":
                        return 1 - Math.pow(1 - t, 2);
                    case "ease-out-cubic":
                        return 1 - Math.pow(1 - t, 3);
                    case "ease-out-quart":
                        return 1 - Math.pow(1 - t, 4);
                    case "ease-out-quint":
                        return 1 - Math.pow(1 - t, 5);
                    case "ease-out-expo":
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                    case "ease-out-sine":
                        return Math.sin(t * Math.PI / 2);
                    case "ease-out-back":
                        return 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2);
                    case "ease-out-circ":
                        return Math.sqrt(1 - Math.pow(t - 1, 2));
                    default:
                        return t
                }
            }

            function m(t) {
                var e, r;
                return void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.y) ? {
                    x: t.position.x * t.size.width / 100,
                    y: t.position.y * t.size.height / 100
                } : void 0
            }

            function w(t) {
                var e, r, n, o;
                return {
                    x: (null !== (r = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== r ? r : 100 * Math.random()) * t.size.width / 100,
                    y: (null !== (o = null === (n = t.position) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : 100 * Math.random()) * t.size.height / 100
                }
            }

            function g(t) {
                var e, r, n = {
                    x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? u(t.position.x) : void 0,
                    y: void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.y) ? u(t.position.y) : void 0
                };
                return w({
                    size: t.size,
                    position: n
                })
            }

            function x(t) {
                var e, r, n, o;
                return {
                    x: null !== (r = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== r ? r : Math.random() * t.size.width,
                    y: null !== (o = null === (n = t.position) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : Math.random() * t.size.height
                }
            }

            function k(t) {
                var e, r, n = {
                    x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? u(t.position.x) : void 0,
                    y: void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.y) ? u(t.position.y) : void 0
                };
                return x({
                    size: t.size,
                    position: n
                })
            }
        },
        PDX0: function(t, e) {
            (function(e) {
                t.exports = e
            }).call(this, {})
        },
        YuTi: function(t, e) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }), t.webpackPolyfill = 1), t
            }
        },
        hcMC: function(t, e, r) {
            "use strict";
            r.d(e, "n", (function() {
                return a
            })), r.d(e, "b", (function() {
                return u
            })), r.d(e, "f", (function() {
                return c
            })), r.d(e, "g", (function() {
                return s
            })), r.d(e, "c", (function() {
                return l
            })), r.d(e, "m", (function() {
                return f
            })), r.d(e, "e", (function() {
                return d
            })), r.d(e, "h", (function() {
                return h
            })), r.d(e, "k", (function() {
                return p
            })), r.d(e, "l", (function() {
                return v
            })), r.d(e, "j", (function() {
                return y
            })), r.d(e, "i", (function() {
                return b
            })), r.d(e, "d", (function() {
                return m
            })), r.d(e, "a", (function() {
                return w
            }));
            var n = r("0qtW"),
                o = r("Bvs5");

            function i(t, e, r) {
                t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(r.x, r.y), t.closePath()
            }

            function a(t, e, r) {
                t.save(), t.fillStyle = null != r ? r : "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height), t.restore()
            }

            function u(t, e) {
                t.clearRect(0, 0, e.width, e.height)
            }

            function c(t, e, r, a, u, c, s, l, f, d, h, p) {
                var v = !1;
                if (Object(o.i)(r, a) <= u) i(t, r, a), v = !0;
                else if (s) {
                    var y, b, m = {
                            x: a.x - c.width,
                            y: a.y
                        },
                        w = Object(o.j)(r, m);
                    if (w.distance <= u) {
                        var g = r.y - w.dy / w.dx * r.x;
                        y = {
                            x: 0,
                            y: g
                        }, b = {
                            x: c.width,
                            y: g
                        }
                    } else {
                        var x = {
                                x: a.x,
                                y: a.y - c.height
                            },
                            k = Object(o.j)(r, x);
                        if (k.distance <= u) {
                            var O = -(r.y - k.dy / k.dx * r.x) / (k.dy / k.dx);
                            y = {
                                x: O,
                                y: 0
                            }, b = {
                                x: O,
                                y: c.height
                            }
                        } else {
                            var j = {
                                    x: a.x - c.width,
                                    y: a.y - c.height
                                },
                                S = Object(o.j)(r, j);
                            if (S.distance <= u) {
                                var L = r.y - S.dy / S.dx * r.x;
                                b = {
                                    x: (y = {
                                        x: -L / (S.dy / S.dx),
                                        y: L
                                    }).x + c.width,
                                    y: y.y + c.height
                                }
                            }
                        }
                    }
                    y && b && (i(t, r, y), i(t, a, b), v = !0)
                }
                if (v) {
                    if (t.lineWidth = e, l && (t.globalCompositeOperation = f), t.strokeStyle = Object(n.k)(d, h), p.enable) {
                        var E = Object(n.c)(p.color);
                        E && (t.shadowBlur = p.blur, t.shadowColor = Object(n.k)(E))
                    }
                    t.stroke()
                }
            }

            function s(t, e, r, o, i, a, u, c) {
                ! function(t, e, r, n) {
                    t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(r.x, r.y), t.lineTo(n.x, n.y), t.closePath()
                }(t, e, r, o), i && (t.globalCompositeOperation = a), t.fillStyle = Object(n.k)(u, c), t.fill()
            }

            function l(t, e, r, n, o) {
                t.save(), i(t, n, o), t.lineWidth = e, t.strokeStyle = r, t.stroke(), t.restore()
            }

            function f(t, e, r, o) {
                var i = Math.floor(r.getRadius() / e.getRadius()),
                    a = e.getFillColor(),
                    u = r.getFillColor();
                if (a && u) {
                    var c = e.getPosition(),
                        s = r.getPosition(),
                        l = Object(n.a)(a, u, e.getRadius(), r.getRadius()),
                        f = t.createLinearGradient(c.x, c.y, s.x, s.y);
                    return f.addColorStop(0, Object(n.i)(a, o)), f.addColorStop(i > 1 ? 1 : i, Object(n.k)(l, o)), f.addColorStop(1, Object(n.i)(u, o)), f
                }
            }

            function d(t, e, r, o, a, u) {
                t.save(), i(t, r, o), t.strokeStyle = Object(n.k)(a, u), t.lineWidth = e, t.stroke(), t.restore()
            }

            function h(t, e, r, o, i, a, u, c, s, l) {
                var f, d, h, y, b = r.getPosition(),
                    m = r.options.tilt,
                    w = r.options.roll;
                if (e.save(), m.enable || w.enable) {
                    var g = w.enable && r.roll,
                        x = m.enable && r.tilt,
                        k = g && ("horizontal" === w.mode || "both" === w.mode),
                        O = g && ("vertical" === w.mode || "both" === w.mode);
                    e.setTransform(k ? Math.cos(r.roll.angle) : 1, x ? Math.cos(r.tilt.value) * r.tilt.cosDirection : 0, x ? Math.sin(r.tilt.value) * r.tilt.sinDirection : 0, O ? Math.sin(r.roll.angle) : 1, b.x, b.y)
                } else e.translate(b.x, b.y);
                e.beginPath();
                var j = (null !== (d = null === (f = r.rotate) || void 0 === f ? void 0 : f.value) && void 0 !== d ? d : 0) + (r.options.rotate.path ? r.velocity.angle : 0);
                0 !== j && e.rotate(j), a && (e.globalCompositeOperation = u);
                var S = r.shadowColor;
                l.enable && S && (e.shadowBlur = l.blur, e.shadowColor = Object(n.k)(S), e.shadowOffsetX = l.offset.x, e.shadowOffsetY = l.offset.y), i.fill && (e.fillStyle = i.fill);
                var L = r.stroke;
                e.lineWidth = null !== (h = r.strokeWidth) && void 0 !== h ? h : 0, i.stroke && (e.strokeStyle = i.stroke), p(t, e, r, c, s, o), (null !== (y = null == L ? void 0 : L.width) && void 0 !== y ? y : 0) > 0 && e.stroke(), r.close && e.closePath(), r.fill && e.fill(), e.restore(), e.save(), m.enable && r.tilt ? e.setTransform(1, Math.cos(r.tilt.value) * r.tilt.cosDirection, Math.sin(r.tilt.value) * r.tilt.sinDirection, 1, b.x, b.y) : e.translate(b.x, b.y), 0 !== j && e.rotate(j), a && (e.globalCompositeOperation = u), v(t, e, r, c, s, o), e.restore()
            }

            function p(t, e, r, n, o, i) {
                if (r.shape) {
                    var a = t.drawers.get(r.shape);
                    a && a.draw(e, r, n, o, i, t.retina.pixelRatio)
                }
            }

            function v(t, e, r, n, o, i) {
                if (r.shape) {
                    var a = t.drawers.get(r.shape);
                    (null == a ? void 0 : a.afterEffect) && a.afterEffect(e, r, n, o, i, t.retina.pixelRatio)
                }
            }

            function y(t, e, r) {
                e.draw && (t.save(), e.draw(t, r), t.restore())
            }

            function b(t, e, r, n) {
                e.drawParticle && (t.save(), e.drawParticle(t, r, n), t.restore())
            }

            function m(t, e, r, o, i, a, u, c, s) {
                if (!(a <= 0)) {
                    var l = e.getPosition();
                    r && (t.strokeStyle = Object(n.i)(r, i)), t.lineWidth = a;
                    var f = u * Math.PI / 180;
                    t.beginPath(), t.ellipse(l.x, l.y, o / 2, 2 * o, f, c, s), t.stroke()
                }
            }

            function w(t, e, r) {
                return {
                    h: t.h,
                    s: t.s,
                    l: t.l + ("darken" === e ? -1 : 1) * r
                }
            }
        },
        peHP: function(t, e, r) {
            (function(t) {
                var n;

                function o(t) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }! function(i, a) {
                    "use strict";
                    var u = "model",
                        c = "name",
                        s = "type",
                        l = "vendor",
                        f = "version",
                        d = "mobile",
                        h = "tablet",
                        p = "smarttv",
                        v = function(t) {
                            for (var e = {}, r = 0; r < t.length; r++) e[t[r].toUpperCase()] = t[r];
                            return e
                        },
                        y = function(t, e) {
                            return "string" === o(t) && -1 !== b(e).indexOf(b(t))
                        },
                        b = function(t) {
                            return t.toLowerCase()
                        },
                        m = function(t, e) {
                            if ("string" === o(t)) return t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), "undefined" === o(e) ? t : t.substring(0, 350)
                        },
                        w = function(t, e) {
                            for (var r, n, i, a, u, c, s = 0; s < e.length && !u;) {
                                var l = e[s],
                                    f = e[s + 1];
                                for (r = n = 0; r < l.length && !u;)
                                    if (u = l[r++].exec(t))
                                        for (i = 0; i < f.length; i++) c = u[++n], "object" === o(a = f[i]) && a.length > 0 ? 2 === a.length ? "function" == o(a[1]) ? this[a[0]] = a[1].call(this, c) : this[a[0]] = a[1] : 3 === a.length ? "function" !== o(a[1]) || a[1].exec && a[1].test ? this[a[0]] = c ? c.replace(a[1], a[2]) : void 0 : this[a[0]] = c ? a[1].call(this, c, a[2]) : void 0 : 4 === a.length && (this[a[0]] = c ? a[3].call(this, c.replace(a[1], a[2])) : void 0) : this[a] = c || void 0;
                                s += 2
                            }
                        },
                        g = function(t, e) {
                            for (var r in e)
                                if ("object" === o(e[r]) && e[r].length > 0) {
                                    for (var n = 0; n < e[r].length; n++)
                                        if (y(e[r][n], t)) return "?" === r ? void 0 : r
                                } else if (y(e[r], t)) return "?" === r ? void 0 : r;
                            return t
                        },
                        x = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        k = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [f, [c, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [f, [c, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [c, f],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [f, [c, "Opera Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [f, [c, "Opera"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [c, f],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [f, [c, "UCBrowser"]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [f, [c, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [f, [c, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [f, [c, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [f, [c, "IE"]],
                                [/yabrowser\/([\w\.]+)/i],
                                [f, [c, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [c, /(.+)/, "$1 Secure Browser"], f
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [f, [c, "Firefox Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [f, [c, "Opera Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [f, [c, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [f, [c, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [f, [c, "Opera Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [f, [c, "MIUI Browser"]],
                                [/fxios\/([-\w\.]+)/i],
                                [f, [c, "Firefox"]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [c, "360 Browser"]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [c, /(.+)/, "$1 Browser"], f
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [c, /_/g, " "], f
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [c, f],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [c],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [c, "Facebook"], f
                                ],
                                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                [c, f],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [f, [c, "GSA"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [f, [c, "Chrome Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [c, "Chrome WebView"], f
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [f, [c, "Android Browser"]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [c, f],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [f, [c, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [f, c],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [c, [f, g, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [c, f],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [c, "Netscape"], f
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [f, [c, "Firefox Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                [c, f]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    ["architecture", "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    ["architecture", b]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    ["architecture", "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    ["architecture", "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    ["architecture", "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    ["architecture", "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    ["architecture", /ower/, "", b]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    ["architecture", "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    ["architecture", b]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [u, [l, "Samsung"],
                                    [s, h]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [u, [l, "Samsung"],
                                    [s, d]
                                ],
                                [/\((ip(?:hone|od)[\w ]*);/i],
                                [u, [l, "Apple"],
                                    [s, d]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [u, [l, "Apple"],
                                    [s, h]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [u, [l, "Huawei"],
                                    [s, h]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [u, [l, "Huawei"],
                                    [s, d]
                                ],
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [l, "Xiaomi"],
                                    [s, d]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [l, "Xiaomi"],
                                    [s, h]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [u, [l, "OPPO"],
                                    [s, d]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [u, [l, "Vivo"],
                                    [s, d]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [u, [l, "Realme"],
                                    [s, d]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [u, [l, "Motorola"],
                                    [s, d]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [u, [l, "Motorola"],
                                    [s, h]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [u, [l, "LG"],
                                    [s, h]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [u, [l, "LG"],
                                    [s, d]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [u, [l, "Lenovo"],
                                    [s, h]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [u, /_/g, " "],
                                    [l, "Nokia"],
                                    [s, d]
                                ],
                                [/(pixel c)\b/i],
                                [u, [l, "Google"],
                                    [s, h]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [u, [l, "Google"],
                                    [s, d]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [u, [l, "Sony"],
                                    [s, d]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [u, "Xperia Tablet"],
                                    [l, "Sony"],
                                    [s, h]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [u, [l, "OnePlus"],
                                    [s, d]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [u, [l, "Amazon"],
                                    [s, h]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [u, /(.+)/g, "Fire Phone $1"],
                                    [l, "Amazon"],
                                    [s, d]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [u, l, [s, h]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [u, [l, "BlackBerry"],
                                    [s, d]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [u, [l, "ASUS"],
                                    [s, h]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [u, [l, "ASUS"],
                                    [s, d]
                                ],
                                [/(nexus 9)/i],
                                [u, [l, "HTC"],
                                    [s, h]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [l, [u, /_/g, " "],
                                    [s, d]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [u, [l, "Acer"],
                                    [s, h]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [u, [l, "Meizu"],
                                    [s, d]
                                ],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [u, [l, "Sharp"],
                                    [s, d]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [l, u, [s, d]],
                                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [l, u, [s, h]],
                                [/(surface duo)/i],
                                [u, [l, "Microsoft"],
                                    [s, h]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [u, [l, "Fairphone"],
                                    [s, d]
                                ],
                                [/(u304aa)/i],
                                [u, [l, "AT&T"],
                                    [s, d]
                                ],
                                [/\bsie-(\w*)/i],
                                [u, [l, "Siemens"],
                                    [s, d]
                                ],
                                [/\b(rct\w+) b/i],
                                [u, [l, "RCA"],
                                    [s, h]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [u, [l, "Dell"],
                                    [s, h]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [u, [l, "Verizon"],
                                    [s, h]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [u, [l, "Barnes & Noble"],
                                    [s, h]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [u, [l, "NuVision"],
                                    [s, h]
                                ],
                                [/\b(k88) b/i],
                                [u, [l, "ZTE"],
                                    [s, h]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [u, [l, "ZTE"],
                                    [s, d]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [u, [l, "Swiss"],
                                    [s, d]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [u, [l, "Swiss"],
                                    [s, h]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [u, [l, "Zeki"],
                                    [s, h]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [l, "Dragon Touch"], u, [s, h]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [u, [l, "Insignia"],
                                    [s, h]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [u, [l, "NextBook"],
                                    [s, h]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [l, "Voice"], u, [s, d]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [l, "LvTel"], u, [s, d]
                                ],
                                [/\b(ph-1) /i],
                                [u, [l, "Essential"],
                                    [s, d]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [u, [l, "Envizen"],
                                    [s, h]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [u, [l, "MachSpeed"],
                                    [s, h]
                                ],
                                [/\btu_(1491) b/i],
                                [u, [l, "Rotor"],
                                    [s, h]
                                ],
                                [/(shield[\w ]+) b/i],
                                [u, [l, "Nvidia"],
                                    [s, h]
                                ],
                                [/(sprint) (\w+)/i],
                                [l, u, [s, d]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [u, /\./g, " "],
                                    [l, "Microsoft"],
                                    [s, d]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [u, [l, "Zebra"],
                                    [s, h]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [u, [l, "Zebra"],
                                    [s, d]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [l, u, [s, "console"]],
                                [/droid.+; (shield) bui/i],
                                [u, [l, "Nvidia"],
                                    [s, "console"]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [u, [l, "Sony"],
                                    [s, "console"]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [u, [l, "Microsoft"],
                                    [s, "console"]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [l, [s, p]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [u, /^/, "SmartTV"],
                                    [l, "Samsung"],
                                    [s, p]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [l, "LG"],
                                    [s, p]
                                ],
                                [/(apple) ?tv/i],
                                [l, [u, "Apple TV"],
                                    [s, p]
                                ],
                                [/crkey/i],
                                [
                                    [u, "Chromecast"],
                                    [l, "Google"],
                                    [s, p]
                                ],
                                [/droid.+aft(\w)( bui|\))/i],
                                [u, [l, "Amazon"],
                                    [s, p]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [u, [l, "Sharp"],
                                    [s, p]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [u, [l, "Sony"],
                                    [s, p]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [u, [l, "Xiaomi"],
                                    [s, p]
                                ],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                [
                                    [l, m],
                                    [u, m],
                                    [s, p]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [s, p]
                                ],
                                [/((pebble))app/i],
                                [l, u, [s, "wearable"]],
                                [/droid.+; (glass) \d/i],
                                [u, [l, "Google"],
                                    [s, "wearable"]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [u, [l, "Zebra"],
                                    [s, "wearable"]
                                ],
                                [/(quest( 2)?)/i],
                                [u, [l, "Facebook"],
                                    [s, "wearable"]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [l, [s, "embedded"]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [u, [s, d]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [u, [s, h]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [s, h]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [s, d]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [u, [l, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [f, [c, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [f, [c, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                [c, f],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [f, c]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [c, f],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [c, [f, g, x]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [c, "Windows"],
                                    [f, g, x]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [f, /_/g, "."],
                                    [c, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [c, "Mac OS"],
                                    [f, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [f, c],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [c, f],
                                [/\(bb(10);/i],
                                [f, [c, "BlackBerry"]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [f, [c, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [f, [c, "Firefox OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [f, [c, "webOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [f, [c, "Chromecast"]],
                                [/(cros) [\w]+ ([\w\.]+\w)/i],
                                [
                                    [c, "Chromium OS"], f
                                ],
                                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [c, f],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [c, "Solaris"], f
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                [c, f]
                            ]
                        },
                        O = function t(e, r) {
                            if ("object" === o(e) && (r = e, e = void 0), !(this instanceof t)) return new t(e, r).getResult();
                            var n = e || ("undefined" !== o(i) && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                                a = r ? function(t, e) {
                                    var r = {};
                                    for (var n in t) e[n] && e[n].length % 2 == 0 ? r[n] = e[n].concat(t[n]) : r[n] = t[n];
                                    return r
                                }(k, r) : k;
                            return this.getBrowser = function() {
                                var t, e = {};
                                return e[c] = void 0, e[f] = void 0, w.call(e, n, a.browser), e.major = "string" === o(t = e.version) ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0, e
                            }, this.getCPU = function() {
                                var t = {
                                    architecture: void 0
                                };
                                return w.call(t, n, a.cpu), t
                            }, this.getDevice = function() {
                                var t = {
                                    vendor: void 0,
                                    model: void 0,
                                    type: void 0
                                };
                                return w.call(t, n, a.device), t
                            }, this.getEngine = function() {
                                var t = {
                                    name: void 0,
                                    version: void 0
                                };
                                return w.call(t, n, a.engine), t
                            }, this.getOS = function() {
                                var t = {
                                    name: void 0,
                                    version: void 0
                                };
                                return w.call(t, n, a.os), t
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return n
                            }, this.setUA = function(t) {
                                return n = "string" === o(t) && t.length > 350 ? m(t, 350) : t, this
                            }, this.setUA(n), this
                        };
                    O.VERSION = "1.0.32", O.BROWSER = v([c, f, "major"]), O.CPU = v(["architecture"]), O.DEVICE = v([u, l, s, "console", d, p, h, "wearable", "embedded"]), O.ENGINE = O.OS = v([c, f]), "undefined" !== o(e) ? ("undefined" !== o(t) && t.exports && (e = t.exports = O), e.UAParser = O) : "function" === o(r("B9Yq")) && r("PDX0") ? void 0 === (n = function() {
                        return O
                    }.call(e, r, e, t)) || (t.exports = n) : "undefined" !== o(i) && (i.UAParser = O);
                    var j = "undefined" !== o(i) && (i.jQuery || i.Zepto);
                    if (j && !j.ua) {
                        var S = new O;
                        j.ua = S.getResult(), j.ua.get = function() {
                            return S.getUA()
                        }, j.ua.set = function(t) {
                            S.setUA(t);
                            var e = S.getResult();
                            for (var r in e) j.ua[r] = e[r]
                        }
                    }
                }("object" === ("undefined" == typeof window ? "undefined" : o(window)) ? window : this)
            }).call(this, r("YuTi")(t))
        },
        xhmd: function(t, e, r) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function o(t) {
                return t.valueOf ? t.valueOf() : Object.prototype.valueOf.call(t)
            }
            e.a = function t(e, r) {
                if (e === r) return !0;
                if (null == e || null == r) return !1;
                if (Array.isArray(e)) return Array.isArray(r) && e.length === r.length && e.every((function(e, n) {
                    return t(e, r[n])
                }));
                if ("object" === n(e) || "object" === n(r)) {
                    var i = o(e),
                        a = o(r);
                    return i !== e || a !== r ? t(i, a) : Object.keys(Object.assign({}, e, r)).every((function(n) {
                        return t(e[n], r[n])
                    }))
                }
                return !1
            }
        },
        yLpj: function(t, e) {
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window)
            }
            t.exports = n
        }
    }
]);