(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        "3WHO": function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return Ce
            })), i.d(e, "b", (function() {
                return X
            })), i.d(e, "c", (function() {
                return J
            })), i.d(e, "d", (function() {
                return Pe
            })), i.d(e, "e", (function() {
                return G
            })), i.d(e, "f", (function() {
                return q
            })), i.d(e, "g", (function() {
                return Z
            })), i.d(e, "h", (function() {
                return K
            })), i.d(e, "i", (function() {
                return Q
            })), i.d(e, "j", (function() {
                return vt
            }));
            var n = i("42kf");

            function a() {
                return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
                    var n = r(t, e);
                    if (n) {
                        var a = Object.getOwnPropertyDescriptor(n, e);
                        return a.get ? a.get.call(arguments.length < 3 ? t : i) : a.value
                    }
                }).apply(this, arguments)
            }

            function r(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                return t
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && o(t, e)
            }

            function o(t, e) {
                return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var i, n = c(t);
                    if (e) {
                        var a = c(this).constructor;
                        i = Reflect.construct(n, arguments, a)
                    } else i = n.apply(this, arguments);
                    return l(this, i)
                }
            }

            function l(t, e) {
                if (e && ("object" === p(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return u(t)
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function c(t) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function f(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == i) return;
                    var n, a, r = [],
                        s = !0,
                        o = !1;
                    try {
                        for (i = i.call(t); !(s = (n = i.next()).done) && (r.push(n.value), !e || r.length !== e); s = !0);
                    } catch (t) {
                        o = !0, a = t
                    } finally {
                        try {
                            s || null == i.return || i.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(t, e) || b(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function v(t, e) {
                var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!i) {
                    if (Array.isArray(t) || (i = b(t)) || e && t && "number" == typeof t.length) {
                        i && (t = i);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
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
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, s = !0,
                    o = !1;
                return {
                    s: function() {
                        i = i.call(t)
                    },
                    n: function() {
                        var t = i.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        o = !0, r = t
                    },
                    f: function() {
                        try {
                            s || null == i.return || i.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                }
            }

            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return y(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || b(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(t, e) {
                if (t) {
                    if ("string" == typeof t) return y(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? y(t, e) : void 0
                }
            }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function _(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function x(t, e, i) {
                return e && _(t.prototype, e), i && _(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            /*!
             * Chart.js v3.9.1
             * https://www.chartjs.org
             * (c) 2022 Chart.js Contributors
             * Released under the MIT License
             */
            var k = new(function() {
                    function t() {
                        m(this, t), this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
                    }
                    return x(t, [{
                        key: "_notify",
                        value: function(t, e, i, n) {
                            var a = e.listeners[n],
                                r = e.duration;
                            a.forEach((function(n) {
                                return n({
                                    chart: t,
                                    initial: e.initial,
                                    numSteps: r,
                                    currentStep: Math.min(i - e.start, r)
                                })
                            }))
                        }
                    }, {
                        key: "_refresh",
                        value: function() {
                            var t = this;
                            this._request || (this._running = !0, this._request = n.Sb.call(window, (function() {
                                t._update(), t._request = null, t._running && t._refresh()
                            })))
                        }
                    }, {
                        key: "_update",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
                                i = 0;
                            this._charts.forEach((function(n, a) {
                                if (n.running && n.items.length) {
                                    for (var r, s = n.items, o = s.length - 1, h = !1; o >= 0; --o)(r = s[o])._active ? (r._total > n.duration && (n.duration = r._total), r.tick(e), h = !0) : (s[o] = s[s.length - 1], s.pop());
                                    h && (a.draw(), t._notify(a, n, e, "progress")), s.length || (n.running = !1, t._notify(a, n, e, "complete"), n.initial = !1), i += s.length
                                }
                            })), this._lastDate = e, 0 === i && (this._running = !1)
                        }
                    }, {
                        key: "_getAnims",
                        value: function(t) {
                            var e = this._charts,
                                i = e.get(t);
                            return i || (i = {
                                running: !1,
                                initial: !0,
                                items: [],
                                listeners: {
                                    complete: [],
                                    progress: []
                                }
                            }, e.set(t, i)), i
                        }
                    }, {
                        key: "listen",
                        value: function(t, e, i) {
                            this._getAnims(t).listeners[e].push(i)
                        }
                    }, {
                        key: "add",
                        value: function(t, e) {
                            var i;
                            e && e.length && (i = this._getAnims(t).items).push.apply(i, g(e))
                        }
                    }, {
                        key: "has",
                        value: function(t) {
                            return this._getAnims(t).items.length > 0
                        }
                    }, {
                        key: "start",
                        value: function(t) {
                            var e = this._charts.get(t);
                            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((function(t, e) {
                                return Math.max(t, e._duration)
                            }), 0), this._refresh())
                        }
                    }, {
                        key: "running",
                        value: function(t) {
                            if (!this._running) return !1;
                            var e = this._charts.get(t);
                            return !!(e && e.running && e.items.length)
                        }
                    }, {
                        key: "stop",
                        value: function(t) {
                            var e = this._charts.get(t);
                            if (e && e.items.length) {
                                for (var i = e.items, n = i.length - 1; n >= 0; --n) i[n].cancel();
                                e.items = [], this._notify(t, e, Date.now(), "complete")
                            }
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            return this._charts.delete(t)
                        }
                    }]), t
                }()),
                O = {
                    boolean: function(t, e, i) {
                        return i > .5 ? e : t
                    },
                    color: function(t, e, i) {
                        var a = Object(n.Db)(t || "transparent"),
                            r = a.valid && Object(n.Db)(e || "transparent");
                        return r && r.valid ? r.mix(a, i).hexString() : e
                    },
                    number: function(t, e, i) {
                        return t + (e - t) * i
                    }
                },
                w = function() {
                    function t(e, i, a, r) {
                        m(this, t);
                        var s = i[a];
                        r = Object(n.C)([e.to, r, s, e.from]);
                        var o = Object(n.C)([e.from, s, r]);
                        this._active = !0, this._fn = e.fn || O[e.type || p(o)], this._easing = n.Fb[e.easing] || n.Fb.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = i, this._prop = a, this._from = o, this._to = r, this._promises = void 0
                    }
                    return x(t, [{
                        key: "active",
                        value: function() {
                            return this._active
                        }
                    }, {
                        key: "update",
                        value: function(t, e, i) {
                            if (this._active) {
                                this._notify(!1);
                                var a = this._target[this._prop],
                                    r = i - this._start,
                                    s = this._duration - r;
                                this._start = i, this._duration = Math.floor(Math.max(s, t.duration)), this._total += r, this._loop = !!t.loop, this._to = Object(n.C)([t.to, e, a, t.from]), this._from = Object(n.C)([t.from, a, e])
                            }
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
                        }
                    }, {
                        key: "tick",
                        value: function(t) {
                            var e, i = t - this._start,
                                n = this._duration,
                                a = this._prop,
                                r = this._from,
                                s = this._loop,
                                o = this._to;
                            if (this._active = r !== o && (s || i < n), !this._active) return this._target[a] = o, void this._notify(!0);
                            i < 0 ? this._target[a] = r : (e = i / n % 2, e = s && e > 1 ? 2 - e : e, e = this._easing(Math.min(1, Math.max(0, e))), this._target[a] = this._fn(r, o, e))
                        }
                    }, {
                        key: "wait",
                        value: function() {
                            var t = this._promises || (this._promises = []);
                            return new Promise((function(e, i) {
                                t.push({
                                    res: e,
                                    rej: i
                                })
                            }))
                        }
                    }, {
                        key: "_notify",
                        value: function(t) {
                            for (var e = t ? "res" : "rej", i = this._promises || [], n = 0; n < i.length; n++) i[n][e]()
                        }
                    }]), t
                }();
            n.Eb.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            });
            var j = Object.keys(n.Eb.animation);
            n.Eb.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: function(t) {
                    return "onProgress" !== t && "onComplete" !== t && "fn" !== t
                }
            }), n.Eb.set("animations", {
                colors: {
                    type: "color",
                    properties: ["color", "borderColor", "backgroundColor"]
                },
                numbers: {
                    type: "number",
                    properties: ["x", "y", "borderWidth", "radius", "tension"]
                }
            }), n.Eb.describe("animations", {
                _fallback: "animation"
            }), n.Eb.set("transitions", {
                active: {
                    animation: {
                        duration: 400
                    }
                },
                resize: {
                    animation: {
                        duration: 0
                    }
                },
                show: {
                    animations: {
                        colors: {
                            from: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            duration: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        colors: {
                            to: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            easing: "linear",
                            fn: function(t) {
                                return 0 | t
                            }
                        }
                    }
                }
            });
            var M = function() {
                function t(e, i) {
                    m(this, t), this._chart = e, this._properties = new Map, this.configure(i)
                }
                return x(t, [{
                    key: "configure",
                    value: function(t) {
                        if (Object(n.Jb)(t)) {
                            var e = this._properties;
                            Object.getOwnPropertyNames(t).forEach((function(i) {
                                var a = t[i];
                                if (Object(n.Jb)(a)) {
                                    var r, s = {},
                                        o = v(j);
                                    try {
                                        for (o.s(); !(r = o.n()).done;) {
                                            var h = r.value;
                                            s[h] = a[h]
                                        }
                                    } catch (t) {
                                        o.e(t)
                                    } finally {
                                        o.f()
                                    }(Object(n.Cb)(a.properties) && a.properties || [i]).forEach((function(t) {
                                        t !== i && e.has(t) || e.set(t, s)
                                    }))
                                }
                            }))
                        }
                    }
                }, {
                    key: "_animateOptions",
                    value: function(t, e) {
                        var i = e.options,
                            n = function(t, e) {
                                if (!e) return;
                                var i = t.options;
                                if (!i) return void(t.options = e);
                                i.$shared && (t.options = i = Object.assign({}, i, {
                                    $shared: !1,
                                    $animations: {}
                                }));
                                return i
                            }(t, i);
                        if (!n) return [];
                        var a = this._createAnimations(n, i);
                        return i.$shared && function(t, e) {
                            for (var i = [], n = Object.keys(e), a = 0; a < n.length; a++) {
                                var r = t[n[a]];
                                r && r.active() && i.push(r.wait())
                            }
                            return Promise.all(i)
                        }(t.options.$animations, i).then((function() {
                            t.options = i
                        }), (function() {})), a
                    }
                }, {
                    key: "_createAnimations",
                    value: function(t, e) {
                        var i, n = this._properties,
                            a = [],
                            r = t.$animations || (t.$animations = {}),
                            s = Object.keys(e),
                            o = Date.now();
                        for (i = s.length - 1; i >= 0; --i) {
                            var h = s[i];
                            if ("$" !== h.charAt(0))
                                if ("options" !== h) {
                                    var l = e[h],
                                        u = r[h],
                                        c = n.get(h);
                                    if (u) {
                                        if (c && u.active()) {
                                            u.update(c, l, o);
                                            continue
                                        }
                                        u.cancel()
                                    }
                                    c && c.duration ? (r[h] = u = new w(c, t, h, l), a.push(u)) : t[h] = l
                                } else a.push.apply(a, g(this._animateOptions(t, e)))
                        }
                        return a
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        if (0 !== this._properties.size) {
                            var i = this._createAnimations(t, e);
                            return i.length ? (k.add(this._chart, i), !0) : void 0
                        }
                        Object.assign(t, e)
                    }
                }]), t
            }();

            function P(t, e) {
                var i = t && t.options || {},
                    n = i.reverse,
                    a = void 0 === i.min ? e : 0,
                    r = void 0 === i.max ? e : 0;
                return {
                    start: n ? r : a,
                    end: n ? a : r
                }
            }

            function S(t, e) {
                var i, n, a = [],
                    r = t._getSortedDatasetMetas(e);
                for (i = 0, n = r.length; i < n; ++i) a.push(r[i].index);
                return a
            }

            function E(t, e, i) {
                var a, r, s, o, h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    l = t.keys,
                    u = "single" === h.mode;
                if (null !== e) {
                    for (a = 0, r = l.length; a < r; ++a) {
                        if ((s = +l[a]) === i) {
                            if (h.all) continue;
                            break
                        }
                        o = t.values[s], Object(n.Hb)(o) && (u || 0 === e || Object(n.Tb)(e) === Object(n.Tb)(o)) && (e += o)
                    }
                    return e
                }
            }

            function A(t, e) {
                var i = t && t.options.stacked;
                return i || void 0 === i && void 0 !== e.stack
            }

            function D(t, e, i) {
                var n = t[e] || (t[e] = {});
                return n[i] || (n[i] = {})
            }

            function R(t, e, i, n) {
                var a, r = v(e.getMatchingVisibleMetas(n).reverse());
                try {
                    for (r.s(); !(a = r.n()).done;) {
                        var s = a.value,
                            o = t[s.index];
                        if (i && o > 0 || !i && o < 0) return s.index
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return null
            }

            function L(t, e) {
                for (var i, n = t.chart, a = t._cachedMeta, r = n._stacks || (n._stacks = {}), s = a.iScale, o = a.vScale, h = a.index, l = s.axis, u = o.axis, c = function(t, e, i) {
                        return "".concat(t.id, ".").concat(e.id, ".").concat(i.stack || i.type)
                    }(s, o, a), f = e.length, d = 0; d < f; ++d) {
                    var v = e[d],
                        p = v[l],
                        g = v[u];
                    (i = (v._stacks || (v._stacks = {}))[u] = D(r, c, p))[h] = g, i._top = R(i, o, !0, a.type), i._bottom = R(i, o, !1, a.type)
                }
            }

            function C(t, e) {
                var i = t.scales;
                return Object.keys(i).filter((function(t) {
                    return i[t].axis === e
                })).shift()
            }

            function T(t, e) {
                var i = t.controller.index,
                    n = t.vScale && t.vScale.axis;
                if (n) {
                    var a, r = v(e = e || t._parsed);
                    try {
                        for (r.s(); !(a = r.n()).done;) {
                            var s = a.value._stacks;
                            if (!s || void 0 === s[n] || void 0 === s[n][i]) return;
                            delete s[n][i]
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
            }
            var I = function(t) {
                    return "reset" === t || "none" === t
                },
                z = function(t, e) {
                    return e ? t : Object.assign({}, t)
                },
                F = function() {
                    function t(e, i) {
                        m(this, t), this.chart = e, this._ctx = e.ctx, this.index = i, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.initialize()
                    }
                    return x(t, [{
                        key: "initialize",
                        value: function() {
                            var t = this._cachedMeta;
                            this.configure(), this.linkScales(), t._stacked = A(t.vScale, t), this.addElements()
                        }
                    }, {
                        key: "updateIndex",
                        value: function(t) {
                            this.index !== t && T(this._cachedMeta), this.index = t
                        }
                    }, {
                        key: "linkScales",
                        value: function() {
                            var t = this.chart,
                                e = this._cachedMeta,
                                i = this.getDataset(),
                                a = function(t, e, i, n) {
                                    return "x" === t ? e : "r" === t ? n : i
                                },
                                r = e.xAxisID = Object(n.Wb)(i.xAxisID, C(t, "x")),
                                s = e.yAxisID = Object(n.Wb)(i.yAxisID, C(t, "y")),
                                o = e.rAxisID = Object(n.Wb)(i.rAxisID, C(t, "r")),
                                h = e.indexAxis,
                                l = e.iAxisID = a(h, r, s, o),
                                u = e.vAxisID = a(h, s, r, o);
                            e.xScale = this.getScaleForId(r), e.yScale = this.getScaleForId(s), e.rScale = this.getScaleForId(o), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(u)
                        }
                    }, {
                        key: "getDataset",
                        value: function() {
                            return this.chart.data.datasets[this.index]
                        }
                    }, {
                        key: "getMeta",
                        value: function() {
                            return this.chart.getDatasetMeta(this.index)
                        }
                    }, {
                        key: "getScaleForId",
                        value: function(t) {
                            return this.chart.scales[t]
                        }
                    }, {
                        key: "_getOtherScale",
                        value: function(t) {
                            var e = this._cachedMeta;
                            return t === e.iScale ? e.vScale : e.iScale
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._update("reset")
                        }
                    }, {
                        key: "_destroy",
                        value: function() {
                            var t = this._cachedMeta;
                            this._data && Object(n.Vb)(this._data, this), t._stacked && T(t)
                        }
                    }, {
                        key: "_dataCheck",
                        value: function() {
                            var t = this.getDataset(),
                                e = t.data || (t.data = []),
                                i = this._data;
                            if (Object(n.Jb)(e)) this._data = function(t) {
                                var e, i, n, a = Object.keys(t),
                                    r = new Array(a.length);
                                for (e = 0, i = a.length; e < i; ++e) n = a[e], r[e] = {
                                    x: n,
                                    y: t[n]
                                };
                                return r
                            }(e);
                            else if (i !== e) {
                                if (i) {
                                    Object(n.Vb)(i, this);
                                    var a = this._cachedMeta;
                                    T(a), a._parsed = []
                                }
                                e && Object.isExtensible(e) && Object(n.Mb)(e, this), this._syncList = [], this._data = e
                            }
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            var t = this._cachedMeta;
                            this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
                        }
                    }, {
                        key: "buildOrUpdateElements",
                        value: function(t) {
                            var e = this._cachedMeta,
                                i = this.getDataset(),
                                n = !1;
                            this._dataCheck();
                            var a = e._stacked;
                            e._stacked = A(e.vScale, e), e.stack !== i.stack && (n = !0, T(e), e.stack = i.stack), this._resyncElements(t), (n || a !== e._stacked) && L(this, e._parsed)
                        }
                    }, {
                        key: "configure",
                        value: function() {
                            var t = this.chart.config,
                                e = t.datasetScopeKeys(this._type),
                                i = t.getOptionScopes(this.getDataset(), e, !0);
                            this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
                        }
                    }, {
                        key: "parse",
                        value: function(t, e) {
                            var i, a, r, s = this._cachedMeta,
                                o = this._data,
                                h = s.iScale,
                                l = s._stacked,
                                u = h.axis,
                                c = 0 === t && e === o.length || s._sorted,
                                f = t > 0 && s._parsed[t - 1];
                            if (!1 === this._parsing) s._parsed = o, s._sorted = !0, r = o;
                            else {
                                r = Object(n.Cb)(o[t]) ? this.parseArrayData(s, o, t, e) : Object(n.Jb)(o[t]) ? this.parseObjectData(s, o, t, e) : this.parsePrimitiveData(s, o, t, e);
                                for (i = 0; i < e; ++i) s._parsed[i + t] = a = r[i], c && ((null === a[u] || f && a[u] < f[u]) && (c = !1), f = a);
                                s._sorted = c
                            }
                            l && L(this, r)
                        }
                    }, {
                        key: "parsePrimitiveData",
                        value: function(t, e, i, n) {
                            var a, r, s, o = t.iScale,
                                h = t.vScale,
                                l = o.axis,
                                u = h.axis,
                                c = o.getLabels(),
                                f = o === h,
                                v = new Array(n);
                            for (a = 0, r = n; a < r; ++a) {
                                var p;
                                s = a + i, v[a] = (d(p = {}, l, f || o.parse(c[s], s)), d(p, u, h.parse(e[s], s)), p)
                            }
                            return v
                        }
                    }, {
                        key: "parseArrayData",
                        value: function(t, e, i, n) {
                            var a, r, s, o, h = t.xScale,
                                l = t.yScale,
                                u = new Array(n);
                            for (a = 0, r = n; a < r; ++a) o = e[s = a + i], u[a] = {
                                x: h.parse(o[0], s),
                                y: l.parse(o[1], s)
                            };
                            return u
                        }
                    }, {
                        key: "parseObjectData",
                        value: function(t, e, i, a) {
                            var r, s, o, h, l = t.xScale,
                                u = t.yScale,
                                c = this._parsing,
                                f = c.xAxisKey,
                                d = void 0 === f ? "x" : f,
                                v = c.yAxisKey,
                                p = void 0 === v ? "y" : v,
                                g = new Array(a);
                            for (r = 0, s = a; r < s; ++r) h = e[o = r + i], g[r] = {
                                x: l.parse(Object(n.Gb)(h, d), o),
                                y: u.parse(Object(n.Gb)(h, p), o)
                            };
                            return g
                        }
                    }, {
                        key: "getParsed",
                        value: function(t) {
                            return this._cachedMeta._parsed[t]
                        }
                    }, {
                        key: "getDataElement",
                        value: function(t) {
                            return this._cachedMeta.data[t]
                        }
                    }, {
                        key: "applyStack",
                        value: function(t, e, i) {
                            var n = this.chart,
                                a = this._cachedMeta,
                                r = e[t.axis];
                            return E({
                                keys: S(n, !0),
                                values: e._stacks[t.axis]
                            }, r, a.index, {
                                mode: i
                            })
                        }
                    }, {
                        key: "updateRangeFromParsed",
                        value: function(t, e, i, n) {
                            var a = i[e.axis],
                                r = null === a ? NaN : a,
                                s = n && i._stacks[e.axis];
                            n && s && (n.values = s, r = E(n, a, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r)
                        }
                    }, {
                        key: "getMinMax",
                        value: function(t, e) {
                            var i, a, r = this._cachedMeta,
                                s = r._parsed,
                                o = r._sorted && t === r.iScale,
                                h = s.length,
                                l = this._getOtherScale(t),
                                u = function(t, e, i) {
                                    return t && !e.hidden && e._stacked && {
                                        keys: S(i, !0),
                                        values: null
                                    }
                                }(e, r, this.chart),
                                c = {
                                    min: Number.POSITIVE_INFINITY,
                                    max: Number.NEGATIVE_INFINITY
                                },
                                f = function(t) {
                                    var e = t.getUserBounds(),
                                        i = e.min,
                                        n = e.max,
                                        a = e.minDefined,
                                        r = e.maxDefined;
                                    return {
                                        min: a ? i : Number.NEGATIVE_INFINITY,
                                        max: r ? n : Number.POSITIVE_INFINITY
                                    }
                                }(l),
                                d = f.min,
                                v = f.max;

                            function p() {
                                var e = (a = s[i])[l.axis];
                                return !Object(n.Hb)(a[t.axis]) || d > e || v < e
                            }
                            for (i = 0; i < h && (p() || (this.updateRangeFromParsed(c, t, a, u), !o)); ++i);
                            if (o)
                                for (i = h - 1; i >= 0; --i)
                                    if (!p()) {
                                        this.updateRangeFromParsed(c, t, a, u);
                                        break
                                    } return c
                        }
                    }, {
                        key: "getAllParsedValues",
                        value: function(t) {
                            var e, i, a, r = this._cachedMeta._parsed,
                                s = [];
                            for (e = 0, i = r.length; e < i; ++e) a = r[e][t.axis], Object(n.Hb)(a) && s.push(a);
                            return s
                        }
                    }, {
                        key: "getMaxOverflow",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "getLabelAndValue",
                        value: function(t) {
                            var e = this._cachedMeta,
                                i = e.iScale,
                                n = e.vScale,
                                a = this.getParsed(t);
                            return {
                                label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
                                value: n ? "" + n.getLabelForValue(a[n.axis]) : ""
                            }
                        }
                    }, {
                        key: "_update",
                        value: function(t) {
                            var e, i, a, r, s, o = this._cachedMeta;
                            this.update(t || "default"), o._clip = (e = Object(n.Wb)(this.options.clip, function(t, e, i) {
                                if (!1 === i) return !1;
                                var n = P(t, i),
                                    a = P(e, i);
                                return {
                                    top: a.end,
                                    right: n.end,
                                    bottom: a.start,
                                    left: n.start
                                }
                            }(o.xScale, o.yScale, this.getMaxOverflow())), Object(n.Jb)(e) ? (i = e.top, a = e.right, r = e.bottom, s = e.left) : i = a = r = s = e, {
                                top: i,
                                right: a,
                                bottom: r,
                                left: s,
                                disabled: !1 === e
                            })
                        }
                    }, {
                        key: "update",
                        value: function(t) {}
                    }, {
                        key: "draw",
                        value: function() {
                            var t, e = this._ctx,
                                i = this.chart,
                                n = this._cachedMeta,
                                a = n.data || [],
                                r = i.chartArea,
                                s = [],
                                o = this._drawStart || 0,
                                h = this._drawCount || a.length - o,
                                l = this.options.drawActiveElementsOnTop;
                            for (n.dataset && n.dataset.draw(e, r, o, h), t = o; t < o + h; ++t) {
                                var u = a[t];
                                u.hidden || (u.active && l ? s.push(u) : u.draw(e, r))
                            }
                            for (t = 0; t < s.length; ++t) s[t].draw(e, r)
                        }
                    }, {
                        key: "getStyle",
                        value: function(t, e) {
                            var i = e ? "active" : "default";
                            return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
                        }
                    }, {
                        key: "getContext",
                        value: function(t, e, i) {
                            var a, r = this.getDataset();
                            if (t >= 0 && t < this._cachedMeta.data.length) {
                                var s = this._cachedMeta.data[t];
                                (a = s.$context || (s.$context = function(t, e, i) {
                                    return Object(n.Ib)(t, {
                                        active: !1,
                                        dataIndex: e,
                                        parsed: void 0,
                                        raw: void 0,
                                        element: i,
                                        index: e,
                                        mode: "default",
                                        type: "data"
                                    })
                                }(this.getContext(), t, s))).parsed = this.getParsed(t), a.raw = r.data[t], a.index = a.dataIndex = t
                            } else(a = this.$context || (this.$context = function(t, e) {
                                return Object(n.Ib)(t, {
                                    active: !1,
                                    dataset: void 0,
                                    datasetIndex: e,
                                    index: e,
                                    mode: "default",
                                    type: "dataset"
                                })
                            }(this.chart.getContext(), this.index))).dataset = r, a.index = a.datasetIndex = this.index;
                            return a.active = !!e, a.mode = i, a
                        }
                    }, {
                        key: "resolveDatasetElementOptions",
                        value: function(t) {
                            return this._resolveElementOptions(this.datasetElementType.id, t)
                        }
                    }, {
                        key: "resolveDataElementOptions",
                        value: function(t, e) {
                            return this._resolveElementOptions(this.dataElementType.id, e, t)
                        }
                    }, {
                        key: "_resolveElementOptions",
                        value: function(t) {
                            var e = this,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                                a = arguments.length > 2 ? arguments[2] : void 0,
                                r = "active" === i,
                                s = this._cachedDataOpts,
                                o = t + "-" + i,
                                h = s[o],
                                l = this.enableOptionSharing && Object(n.Kb)(a);
                            if (h) return z(h, l);
                            var u = this.chart.config,
                                c = u.datasetElementScopeKeys(this._type, t),
                                f = r ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
                                d = u.getOptionScopes(this.getDataset(), c),
                                v = Object.keys(n.Eb.elements[t]),
                                p = function() {
                                    return e.getContext(a, r)
                                },
                                g = u.resolveNamedOptions(d, v, p, f);
                            return g.$shared && (g.$shared = l, s[o] = Object.freeze(z(g, l))), g
                        }
                    }, {
                        key: "_resolveAnimations",
                        value: function(t, e, i) {
                            var n, a = this.chart,
                                r = this._cachedDataOpts,
                                s = "animation-".concat(e),
                                o = r[s];
                            if (o) return o;
                            if (!1 !== a.options.animation) {
                                var h = this.chart.config,
                                    l = h.datasetAnimationScopeKeys(this._type, e),
                                    u = h.getOptionScopes(this.getDataset(), l);
                                n = h.createResolver(u, this.getContext(t, i, e))
                            }
                            var c = new M(a, n && n.animations);
                            return n && n._cacheable && (r[s] = Object.freeze(c)), c
                        }
                    }, {
                        key: "getSharedOptions",
                        value: function(t) {
                            if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
                        }
                    }, {
                        key: "includeOptions",
                        value: function(t, e) {
                            return !e || I(t) || this.chart._animationsDisabled
                        }
                    }, {
                        key: "_getSharedOptions",
                        value: function(t, e) {
                            var i = this.resolveDataElementOptions(t, e),
                                n = this._sharedOptions,
                                a = this.getSharedOptions(i),
                                r = this.includeOptions(e, a) || a !== n;
                            return this.updateSharedOptions(a, e, i), {
                                sharedOptions: a,
                                includeOptions: r
                            }
                        }
                    }, {
                        key: "updateElement",
                        value: function(t, e, i, n) {
                            I(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i)
                        }
                    }, {
                        key: "updateSharedOptions",
                        value: function(t, e, i) {
                            t && !I(e) && this._resolveAnimations(void 0, e).update(t, i)
                        }
                    }, {
                        key: "_setStyle",
                        value: function(t, e, i, n) {
                            t.active = n;
                            var a = this.getStyle(e, n);
                            this._resolveAnimations(e, i, n).update(t, {
                                options: !n && this.getSharedOptions(a) || a
                            })
                        }
                    }, {
                        key: "removeHoverStyle",
                        value: function(t, e, i) {
                            this._setStyle(t, i, "active", !1)
                        }
                    }, {
                        key: "setHoverStyle",
                        value: function(t, e, i) {
                            this._setStyle(t, i, "active", !0)
                        }
                    }, {
                        key: "_removeDatasetHoverStyle",
                        value: function() {
                            var t = this._cachedMeta.dataset;
                            t && this._setStyle(t, void 0, "active", !1)
                        }
                    }, {
                        key: "_setDatasetHoverStyle",
                        value: function() {
                            var t = this._cachedMeta.dataset;
                            t && this._setStyle(t, void 0, "active", !0)
                        }
                    }, {
                        key: "_resyncElements",
                        value: function(t) {
                            var e, i = this._data,
                                n = this._cachedMeta.data,
                                a = v(this._syncList);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var r = f(e.value, 3),
                                        s = r[0],
                                        o = r[1],
                                        h = r[2];
                                    this[s](o, h)
                                }
                            } catch (t) {
                                a.e(t)
                            } finally {
                                a.f()
                            }
                            this._syncList = [];
                            var l = n.length,
                                u = i.length,
                                c = Math.min(u, l);
                            c && this.parse(0, c), u > l ? this._insertElements(l, u - l, t) : u < l && this._removeElements(u, l - u)
                        }
                    }, {
                        key: "_insertElements",
                        value: function(t, e) {
                            var i, n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                a = this._cachedMeta,
                                r = a.data,
                                s = t + e,
                                o = function(t) {
                                    for (t.length += e, i = t.length - 1; i >= s; i--) t[i] = t[i - e]
                                };
                            for (o(r), i = t; i < s; ++i) r[i] = new this.dataElementType;
                            this._parsing && o(a._parsed), this.parse(t, e), n && this.updateElements(r, t, e, "reset")
                        }
                    }, {
                        key: "updateElements",
                        value: function(t, e, i, n) {}
                    }, {
                        key: "_removeElements",
                        value: function(t, e) {
                            var i = this._cachedMeta;
                            if (this._parsing) {
                                var n = i._parsed.splice(t, e);
                                i._stacked && T(i, n)
                            }
                            i.data.splice(t, e)
                        }
                    }, {
                        key: "_sync",
                        value: function(t) {
                            if (this._parsing) this._syncList.push(t);
                            else {
                                var e = f(t, 3),
                                    i = e[0],
                                    n = e[1],
                                    a = e[2];
                                this[i](n, a)
                            }
                            this.chart._dataChanges.push([this.index].concat(g(t)))
                        }
                    }, {
                        key: "_onDataPush",
                        value: function() {
                            var t = arguments.length;
                            this._sync(["_insertElements", this.getDataset().data.length - t, t])
                        }
                    }, {
                        key: "_onDataPop",
                        value: function() {
                            this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
                        }
                    }, {
                        key: "_onDataShift",
                        value: function() {
                            this._sync(["_removeElements", 0, 1])
                        }
                    }, {
                        key: "_onDataSplice",
                        value: function(t, e) {
                            e && this._sync(["_removeElements", t, e]);
                            var i = arguments.length - 2;
                            i && this._sync(["_insertElements", t, i])
                        }
                    }, {
                        key: "_onDataUnshift",
                        value: function() {
                            this._sync(["_insertElements", 0, arguments.length])
                        }
                    }]), t
                }();

            function B(t) {
                var e, i, a, r, s = t.iScale,
                    o = function(t, e) {
                        if (!t._cache.$bar) {
                            for (var i = t.getMatchingVisibleMetas(e), a = [], r = 0, s = i.length; r < s; r++) a = a.concat(i[r].controller.getAllParsedValues(t));
                            t._cache.$bar = Object(n.B)(a.sort((function(t, e) {
                                return t - e
                            })))
                        }
                        return t._cache.$bar
                    }(s, t.type),
                    h = s._length,
                    l = function() {
                        32767 !== a && -32768 !== a && (Object(n.Kb)(r) && (h = Math.min(h, Math.abs(a - r) || h)), r = a)
                    };
                for (e = 0, i = o.length; e < i; ++e) a = s.getPixelForValue(o[e]), l();
                for (r = void 0, e = 0, i = s.ticks.length; e < i; ++e) a = s.getPixelForTick(e), l();
                return h
            }

            function V(t, e, i, a) {
                return Object(n.Cb)(t) ? function(t, e, i, n) {
                    var a = i.parse(t[0], n),
                        r = i.parse(t[1], n),
                        s = Math.min(a, r),
                        o = Math.max(a, r),
                        h = s,
                        l = o;
                    Math.abs(s) > Math.abs(o) && (h = o, l = s), e[i.axis] = l, e._custom = {
                        barStart: h,
                        barEnd: l,
                        start: a,
                        end: r,
                        min: s,
                        max: o
                    }
                }(t, e, i, a) : e[i.axis] = i.parse(t, a), e
            }

            function N(t, e, i, n) {
                var a, r, s, o, h = t.iScale,
                    l = t.vScale,
                    u = h.getLabels(),
                    c = h === l,
                    f = [];
                for (a = i, r = i + n; a < r; ++a) o = e[a], (s = {})[h.axis] = c || h.parse(u[a], a), f.push(V(o, s, l, a));
                return f
            }

            function W(t) {
                return t && void 0 !== t.barStart && void 0 !== t.barEnd
            }

            function U(t, e, i, n) {
                var a = e.borderSkipped,
                    r = {};
                if (a)
                    if (!0 !== a) {
                        var s = function(t) {
                                var e, i, n, a, r;
                                return t.horizontal ? (e = t.base > t.x, i = "left", n = "right") : (e = t.base < t.y, i = "bottom", n = "top"), e ? (a = "end", r = "start") : (a = "start", r = "end"), {
                                    start: i,
                                    end: n,
                                    reverse: e,
                                    top: a,
                                    bottom: r
                                }
                            }(t),
                            o = s.start,
                            h = s.end,
                            l = s.reverse,
                            u = s.top,
                            c = s.bottom;
                        "middle" === a && i && (t.enableBorderRadius = !0, (i._top || 0) === n ? a = u : (i._bottom || 0) === n ? a = c : (r[H(c, o, h, l)] = !0, a = u)), r[H(a, o, h, l)] = !0, t.borderSkipped = r
                    } else t.borderSkipped = {
                        top: !0,
                        right: !0,
                        bottom: !0,
                        left: !0
                    };
                else t.borderSkipped = r
            }

            function H(t, e, i, n) {
                var a, r, s;
                return n ? (s = i, t = Y(t = (a = t) === (r = e) ? s : a === s ? r : a, i, e)) : t = Y(t, e, i), t
            }

            function Y(t, e, i) {
                return "start" === t ? e : "end" === t ? i : t
            }

            function $(t, e, i) {
                var n = e.inflateAmount;
                t.inflateAmount = "auto" === n ? 1 === i ? .33 : 0 : n
            }
            F.defaults = {}, F.prototype.datasetElementType = null, F.prototype.dataElementType = null;
            var X = function(t) {
                s(i, t);
                var e = h(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return x(i, [{
                    key: "parsePrimitiveData",
                    value: function(t, e, i, n) {
                        return N(t, e, i, n)
                    }
                }, {
                    key: "parseArrayData",
                    value: function(t, e, i, n) {
                        return N(t, e, i, n)
                    }
                }, {
                    key: "parseObjectData",
                    value: function(t, e, i, a) {
                        var r, s, o, h, l = t.iScale,
                            u = t.vScale,
                            c = this._parsing,
                            f = c.xAxisKey,
                            d = void 0 === f ? "x" : f,
                            v = c.yAxisKey,
                            p = void 0 === v ? "y" : v,
                            g = "x" === l.axis ? d : p,
                            b = "x" === u.axis ? d : p,
                            y = [];
                        for (r = i, s = i + a; r < s; ++r) h = e[r], (o = {})[l.axis] = l.parse(Object(n.Gb)(h, g), r), y.push(V(Object(n.Gb)(h, b), o, u, r));
                        return y
                    }
                }, {
                    key: "updateRangeFromParsed",
                    value: function(t, e, n, r) {
                        a(c(i.prototype), "updateRangeFromParsed", this).call(this, t, e, n, r);
                        var s = n._custom;
                        s && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, s.min), t.max = Math.max(t.max, s.max))
                    }
                }, {
                    key: "getMaxOverflow",
                    value: function() {
                        return 0
                    }
                }, {
                    key: "getLabelAndValue",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = e.iScale,
                            n = e.vScale,
                            a = this.getParsed(t),
                            r = a._custom,
                            s = W(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(a[n.axis]);
                        return {
                            label: "" + i.getLabelForValue(a[i.axis]),
                            value: s
                        }
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.enableOptionSharing = !0, a(c(i.prototype), "initialize", this).call(this), this._cachedMeta.stack = this.getDataset().stack
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta;
                        this.updateElements(e.data, 0, e.data.length, t)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, a) {
                        for (var r = "reset" === a, s = this.index, o = this._cachedMeta.vScale, h = o.getBasePixel(), l = o.isHorizontal(), u = this._getRuler(), c = this._getSharedOptions(e, a), f = c.sharedOptions, d = c.includeOptions, v = e; v < e + i; v++) {
                            var p = this.getParsed(v),
                                g = r || Object(n.Lb)(p[o.axis]) ? {
                                    base: h,
                                    head: h
                                } : this._calculateBarValuePixels(v),
                                b = this._calculateBarIndexPixels(v, u),
                                y = (p._stacks || {})[o.axis],
                                m = {
                                    horizontal: l,
                                    base: g.base,
                                    enableBorderRadius: !y || W(p._custom) || s === y._top || s === y._bottom,
                                    x: l ? g.head : b.center,
                                    y: l ? b.center : g.head,
                                    height: l ? b.size : Math.abs(g.size),
                                    width: l ? Math.abs(g.size) : b.size
                                };
                            d && (m.options = f || this.resolveDataElementOptions(v, t[v].active ? "active" : a));
                            var _ = m.options || t[v].options;
                            U(m, _, y, s), $(m, _, u.ratio), this.updateElement(t[v], v, m, a)
                        }
                    }
                }, {
                    key: "_getStacks",
                    value: function(t, e) {
                        var i, a = this._cachedMeta.iScale,
                            r = a.getMatchingVisibleMetas(this._type).filter((function(t) {
                                return t.controller.options.grouped
                            })),
                            s = a.options.stacked,
                            o = [],
                            h = function(t) {
                                var i = t.controller.getParsed(e),
                                    a = i && i[t.vScale.axis];
                                if (Object(n.Lb)(a) || isNaN(a)) return !0
                            },
                            l = v(r);
                        try {
                            for (l.s(); !(i = l.n()).done;) {
                                var u = i.value;
                                if ((void 0 === e || !h(u)) && ((!1 === s || -1 === o.indexOf(u.stack) || void 0 === s && void 0 === u.stack) && o.push(u.stack), u.index === t)) break
                            }
                        } catch (t) {
                            l.e(t)
                        } finally {
                            l.f()
                        }
                        return o.length || o.push(void 0), o
                    }
                }, {
                    key: "_getStackCount",
                    value: function(t) {
                        return this._getStacks(void 0, t).length
                    }
                }, {
                    key: "_getStackIndex",
                    value: function(t, e, i) {
                        var n = this._getStacks(t, i),
                            a = void 0 !== e ? n.indexOf(e) : -1;
                        return -1 === a ? n.length - 1 : a
                    }
                }, {
                    key: "_getRuler",
                    value: function() {
                        var t, e, i = this.options,
                            n = this._cachedMeta,
                            a = n.iScale,
                            r = [];
                        for (t = 0, e = n.data.length; t < e; ++t) r.push(a.getPixelForValue(this.getParsed(t)[a.axis], t));
                        var s = i.barThickness;
                        return {
                            min: s || B(n),
                            pixels: r,
                            start: a._startPixel,
                            end: a._endPixel,
                            stackCount: this._getStackCount(),
                            scale: a,
                            grouped: i.grouped,
                            ratio: s ? 1 : i.categoryPercentage * i.barPercentage
                        }
                    }
                }, {
                    key: "_calculateBarValuePixels",
                    value: function(t) {
                        var e, i, a = this._cachedMeta,
                            r = a.vScale,
                            s = a._stacked,
                            o = this.options,
                            h = o.base,
                            l = o.minBarLength,
                            u = h || 0,
                            c = this.getParsed(t),
                            f = c._custom,
                            d = W(f),
                            v = c[r.axis],
                            p = 0,
                            g = s ? this.applyStack(r, c, s) : v;
                        g !== v && (p = g - v, g = v), d && (v = f.barStart, g = f.barEnd - f.barStart, 0 !== v && Object(n.Tb)(v) !== Object(n.Tb)(f.barEnd) && (p = 0), p += v);
                        var b = Object(n.Lb)(h) || d ? p : h,
                            y = r.getPixelForValue(b);
                        if (i = (e = this.chart.getDataVisibility(t) ? r.getPixelForValue(p + g) : y) - y, Math.abs(i) < l) {
                            i = function(t, e, i) {
                                return 0 !== t ? Object(n.Tb)(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                            }(i, r, u) * l, v === u && (y -= i / 2);
                            var m = r.getPixelForDecimal(0),
                                _ = r.getPixelForDecimal(1),
                                x = Math.min(m, _),
                                k = Math.max(m, _);
                            e = (y = Math.max(Math.min(y, k), x)) + i
                        }
                        if (y === r.getPixelForValue(u)) {
                            var O = Object(n.Tb)(i) * r.getLineWidthForValue(u) / 2;
                            y += O, i -= O
                        }
                        return {
                            size: i,
                            base: y,
                            head: e,
                            center: e + i / 2
                        }
                    }
                }, {
                    key: "_calculateBarIndexPixels",
                    value: function(t, e) {
                        var i, a, r = e.scale,
                            s = this.options,
                            o = s.skipNull,
                            h = Object(n.Wb)(s.maxBarThickness, 1 / 0);
                        if (e.grouped) {
                            var l = o ? this._getStackCount(t) : e.stackCount,
                                u = "flex" === s.barThickness ? function(t, e, i, n) {
                                    var a = e.pixels,
                                        r = a[t],
                                        s = t > 0 ? a[t - 1] : null,
                                        o = t < a.length - 1 ? a[t + 1] : null,
                                        h = i.categoryPercentage;
                                    null === s && (s = r - (null === o ? e.end - e.start : o - r)), null === o && (o = r + r - s);
                                    var l = r - (r - Math.min(s, o)) / 2 * h;
                                    return {
                                        chunk: Math.abs(o - s) / 2 * h / n,
                                        ratio: i.barPercentage,
                                        start: l
                                    }
                                }(t, e, s, l) : function(t, e, i, a) {
                                    var r, s, o = i.barThickness;
                                    return Object(n.Lb)(o) ? (r = e.min * i.categoryPercentage, s = i.barPercentage) : (r = o * a, s = 1), {
                                        chunk: r / a,
                                        ratio: s,
                                        start: e.pixels[t] - r / 2
                                    }
                                }(t, e, s, l),
                                c = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                            i = u.start + u.chunk * c + u.chunk / 2, a = Math.min(h, u.chunk * u.ratio)
                        } else i = r.getPixelForValue(this.getParsed(t)[r.axis], t), a = Math.min(h, e.min * e.ratio);
                        return {
                            base: i - a / 2,
                            head: i + a / 2,
                            center: i,
                            size: a
                        }
                    }
                }, {
                    key: "draw",
                    value: function() {
                        for (var t = this._cachedMeta, e = t.vScale, i = t.data, n = i.length, a = 0; a < n; ++a) null !== this.getParsed(a)[e.axis] && i[a].draw(this._ctx)
                    }
                }]), i
            }(F);
            X.id = "bar", X.defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "base", "width", "height"]
                    }
                }
            }, X.overrides = {
                scales: {
                    _index_: {
                        type: "category",
                        offset: !0,
                        grid: {
                            offset: !0
                        }
                    },
                    _value_: {
                        type: "linear",
                        beginAtZero: !0
                    }
                }
            };
            var J = function(t) {
                s(i, t);
                var e = h(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return x(i, [{
                    key: "initialize",
                    value: function() {
                        this.enableOptionSharing = !0, a(c(i.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "parsePrimitiveData",
                    value: function(t, e, n, r) {
                        for (var s = a(c(i.prototype), "parsePrimitiveData", this).call(this, t, e, n, r), o = 0; o < s.length; o++) s[o]._custom = this.resolveDataElementOptions(o + n).radius;
                        return s
                    }
                }, {
                    key: "parseArrayData",
                    value: function(t, e, r, s) {
                        for (var o = a(c(i.prototype), "parseArrayData", this).call(this, t, e, r, s), h = 0; h < o.length; h++) {
                            var l = e[r + h];
                            o[h]._custom = Object(n.Wb)(l[2], this.resolveDataElementOptions(h + r).radius)
                        }
                        return o
                    }
                }, {
                    key: "parseObjectData",
                    value: function(t, e, r, s) {
                        for (var o = a(c(i.prototype), "parseObjectData", this).call(this, t, e, r, s), h = 0; h < o.length; h++) {
                            var l = e[r + h];
                            o[h]._custom = Object(n.Wb)(l && l.r && +l.r, this.resolveDataElementOptions(h + r).radius)
                        }
                        return o
                    }
                }, {
                    key: "getMaxOverflow",
                    value: function() {
                        for (var t = this._cachedMeta.data, e = 0, i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                        return e > 0 && e
                    }
                }, {
                    key: "getLabelAndValue",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = e.xScale,
                            n = e.yScale,
                            a = this.getParsed(t),
                            r = i.getLabelForValue(a.x),
                            s = n.getLabelForValue(a.y),
                            o = a._custom;
                        return {
                            label: e.label,
                            value: "(" + r + ", " + s + (o ? ", " + o : "") + ")"
                        }
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta.data;
                        this.updateElements(e, 0, e.length, t)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, n) {
                        for (var a = "reset" === n, r = this._cachedMeta, s = r.iScale, o = r.vScale, h = this._getSharedOptions(e, n), l = h.sharedOptions, u = h.includeOptions, c = s.axis, f = o.axis, d = e; d < e + i; d++) {
                            var v = t[d],
                                p = !a && this.getParsed(d),
                                g = {},
                                b = g[c] = a ? s.getPixelForDecimal(.5) : s.getPixelForValue(p[c]),
                                y = g[f] = a ? o.getBasePixel() : o.getPixelForValue(p[f]);
                            g.skip = isNaN(b) || isNaN(y), u && (g.options = l || this.resolveDataElementOptions(d, v.active ? "active" : n), a && (g.options.radius = 0)), this.updateElement(v, d, g, n)
                        }
                    }
                }, {
                    key: "resolveDataElementOptions",
                    value: function(t, e) {
                        var r = this.getParsed(t),
                            s = a(c(i.prototype), "resolveDataElementOptions", this).call(this, t, e);
                        s.$shared && (s = Object.assign({}, s, {
                            $shared: !1
                        }));
                        var o = s.radius;
                        return "active" !== e && (s.radius = 0), s.radius += Object(n.Wb)(r && r._custom, o), s
                    }
                }]), i
            }(F);
            J.id = "bubble", J.defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "borderWidth", "radius"]
                    }
                }
            }, J.overrides = {
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function() {
                                return ""
                            }
                        }
                    }
                }
            };
            var G = function(t) {
                s(i, t);
                var e = h(i);

                function i(t, n) {
                    var a;
                    return m(this, i), (a = e.call(this, t, n)).enableOptionSharing = !0, a.innerRadius = void 0, a.outerRadius = void 0, a.offsetX = void 0, a.offsetY = void 0, a
                }
                return x(i, [{
                    key: "linkScales",
                    value: function() {}
                }, {
                    key: "parse",
                    value: function(t, e) {
                        var i = this.getDataset().data,
                            a = this._cachedMeta;
                        if (!1 === this._parsing) a._parsed = i;
                        else {
                            var r, s, o = function(t) {
                                return +i[t]
                            };
                            if (Object(n.Jb)(i[t])) {
                                var h = this._parsing.key,
                                    l = void 0 === h ? "value" : h;
                                o = function(t) {
                                    return +Object(n.Gb)(i[t], l)
                                }
                            }
                            for (r = t, s = t + e; r < s; ++r) a._parsed[r] = o(r)
                        }
                    }
                }, {
                    key: "_getRotation",
                    value: function() {
                        return Object(n.Ub)(this.options.rotation - 90)
                    }
                }, {
                    key: "_getCircumference",
                    value: function() {
                        return Object(n.Ub)(this.options.circumference)
                    }
                }, {
                    key: "_getRotationExtents",
                    value: function() {
                        for (var t = n.u, e = -n.u, i = 0; i < this.chart.data.datasets.length; ++i)
                            if (this.chart.isDatasetVisible(i)) {
                                var a = this.chart.getDatasetMeta(i).controller,
                                    r = a._getRotation(),
                                    s = a._getCircumference();
                                t = Math.min(t, r), e = Math.max(e, r + s)
                            } return {
                            rotation: t,
                            circumference: e - t
                        }
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this.chart.chartArea,
                            i = this._cachedMeta,
                            a = i.data,
                            r = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing,
                            s = Math.max((Math.min(e.width, e.height) - r) / 2, 0),
                            o = Math.min(Object(n.Nb)(this.options.cutout, s), 1),
                            h = this._getRingWeight(this.index),
                            l = this._getRotationExtents(),
                            u = l.circumference,
                            c = function(t, e, i) {
                                var a = 1,
                                    r = 1,
                                    s = 0,
                                    o = 0;
                                if (e < n.u) {
                                    var h = t,
                                        l = h + e,
                                        u = Math.cos(h),
                                        c = Math.sin(h),
                                        f = Math.cos(l),
                                        d = Math.sin(l),
                                        v = function(t, e, a) {
                                            return Object(n.Qb)(t, h, l, !0) ? 1 : Math.max(e, e * i, a, a * i)
                                        },
                                        p = function(t, e, a) {
                                            return Object(n.Qb)(t, h, l, !0) ? -1 : Math.min(e, e * i, a, a * i)
                                        },
                                        g = v(0, u, f),
                                        b = v(n.i, c, d),
                                        y = p(n.q, u, f),
                                        m = p(n.q + n.i, c, d);
                                    a = (g - y) / 2, r = (b - m) / 2, s = -(g + y) / 2, o = -(b + m) / 2
                                }
                                return {
                                    ratioX: a,
                                    ratioY: r,
                                    offsetX: s,
                                    offsetY: o
                                }
                            }(l.rotation, u, o),
                            f = c.ratioX,
                            d = c.ratioY,
                            v = c.offsetX,
                            p = c.offsetY,
                            g = (e.width - r) / f,
                            b = (e.height - r) / d,
                            y = Math.max(Math.min(g, b) / 2, 0),
                            m = Object(n.Ob)(this.options.radius, y),
                            _ = (m - Math.max(m * o, 0)) / this._getVisibleDatasetWeightTotal();
                        this.offsetX = v * m, this.offsetY = p * m, i.total = this.calculateTotal(), this.outerRadius = m - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * h, 0), this.updateElements(a, 0, a.length, t)
                    }
                }, {
                    key: "_circumference",
                    value: function(t, e) {
                        var i = this.options,
                            a = this._cachedMeta,
                            r = this._getCircumference();
                        return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === a._parsed[t] || a.data[t].hidden ? 0 : this.calculateCircumference(a._parsed[t] * r / n.u)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, n) {
                        var a, r = "reset" === n,
                            s = this.chart,
                            o = s.chartArea,
                            h = s.options.animation,
                            l = (o.left + o.right) / 2,
                            u = (o.top + o.bottom) / 2,
                            c = r && h.animateScale,
                            f = c ? 0 : this.innerRadius,
                            d = c ? 0 : this.outerRadius,
                            v = this._getSharedOptions(e, n),
                            p = v.sharedOptions,
                            g = v.includeOptions,
                            b = this._getRotation();
                        for (a = 0; a < e; ++a) b += this._circumference(a, r);
                        for (a = e; a < e + i; ++a) {
                            var y = this._circumference(a, r),
                                m = t[a],
                                _ = {
                                    x: l + this.offsetX,
                                    y: u + this.offsetY,
                                    startAngle: b,
                                    endAngle: b + y,
                                    circumference: y,
                                    outerRadius: d,
                                    innerRadius: f
                                };
                            g && (_.options = p || this.resolveDataElementOptions(a, m.active ? "active" : n)), b += y, this.updateElement(m, a, _, n)
                        }
                    }
                }, {
                    key: "calculateTotal",
                    value: function() {
                        var t, e = this._cachedMeta,
                            i = e.data,
                            n = 0;
                        for (t = 0; t < i.length; t++) {
                            var a = e._parsed[t];
                            null === a || isNaN(a) || !this.chart.getDataVisibility(t) || i[t].hidden || (n += Math.abs(a))
                        }
                        return n
                    }
                }, {
                    key: "calculateCircumference",
                    value: function(t) {
                        var e = this._cachedMeta.total;
                        return e > 0 && !isNaN(t) ? n.u * (Math.abs(t) / e) : 0
                    }
                }, {
                    key: "getLabelAndValue",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = this.chart,
                            a = i.data.labels || [],
                            r = Object(n.Pb)(e._parsed[t], i.options.locale);
                        return {
                            label: a[t] || "",
                            value: r
                        }
                    }
                }, {
                    key: "getMaxBorderWidth",
                    value: function(t) {
                        var e, i, n, a, r, s = 0,
                            o = this.chart;
                        if (!t)
                            for (e = 0, i = o.data.datasets.length; e < i; ++e)
                                if (o.isDatasetVisible(e)) {
                                    t = (n = o.getDatasetMeta(e)).data, a = n.controller;
                                    break
                                } if (!t) return 0;
                        for (e = 0, i = t.length; e < i; ++e) "inner" !== (r = a.resolveDataElementOptions(e)).borderAlign && (s = Math.max(s, r.borderWidth || 0, r.hoverBorderWidth || 0));
                        return s
                    }
                }, {
                    key: "getMaxOffset",
                    value: function(t) {
                        for (var e = 0, i = 0, n = t.length; i < n; ++i) {
                            var a = this.resolveDataElementOptions(i);
                            e = Math.max(e, a.offset || 0, a.hoverOffset || 0)
                        }
                        return e
                    }
                }, {
                    key: "_getRingWeightOffset",
                    value: function(t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                        return e
                    }
                }, {
                    key: "_getRingWeight",
                    value: function(t) {
                        return Math.max(Object(n.Wb)(this.chart.data.datasets[t].weight, 1), 0)
                    }
                }, {
                    key: "_getVisibleDatasetWeightTotal",
                    value: function() {
                        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
                    }
                }]), i
            }(F);
            G.id = "doughnut", G.defaults = {
                datasetElementType: !1,
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                    }
                },
                cutout: "50%",
                rotation: 0,
                circumference: 360,
                radius: "100%",
                spacing: 0,
                indexAxis: "r"
            }, G.descriptors = {
                _scriptable: function(t) {
                    return "spacing" !== t
                },
                _indexable: function(t) {
                    return "spacing" !== t
                }
            }, G.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    var i = t.legend.options.labels.pointStyle;
                                    return e.labels.map((function(e, n) {
                                        var a = t.getDatasetMeta(0).controller.getStyle(n);
                                        return {
                                            text: e,
                                            fillStyle: a.backgroundColor,
                                            strokeStyle: a.borderColor,
                                            lineWidth: a.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(n),
                                            index: n
                                        }
                                    }))
                                }
                                return []
                            }
                        },
                        onClick: function(t, e, i) {
                            i.chart.toggleDataVisibility(e.index), i.chart.update()
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                var e = t.label,
                                    i = ": " + t.formattedValue;
                                return Object(n.Cb)(e) ? (e = e.slice())[0] += i : e += i, e
                            }
                        }
                    }
                }
            };
            var q = function(t) {
                s(i, t);
                var e = h(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return x(i, [{
                    key: "initialize",
                    value: function() {
                        this.enableOptionSharing = !0, this.supportsDecimation = !0, a(c(i.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = e.dataset,
                            a = e.data,
                            r = void 0 === a ? [] : a,
                            s = e._dataset,
                            o = this.chart._animationsDisabled,
                            h = Object(n.Rb)(e, r, o),
                            l = h.start,
                            u = h.count;
                        this._drawStart = l, this._drawCount = u, Object(n.Xb)(e) && (l = 0, u = r.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!s._decimated, i.points = r;
                        var c = this.resolveDatasetElementOptions(t);
                        this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
                            animated: !o,
                            options: c
                        }, t), this.updateElements(r, l, u, t)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, a) {
                        for (var r = "reset" === a, s = this._cachedMeta, o = s.iScale, h = s.vScale, l = s._stacked, u = s._dataset, c = this._getSharedOptions(e, a), f = c.sharedOptions, d = c.includeOptions, v = o.axis, p = h.axis, g = this.options, b = g.spanGaps, y = g.segment, m = Object(n.Yb)(b) ? b : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || r || "none" === a, x = e > 0 && this.getParsed(e - 1), k = e; k < e + i; ++k) {
                            var O = t[k],
                                w = this.getParsed(k),
                                j = _ ? O : {},
                                M = Object(n.Lb)(w[p]),
                                P = j[v] = o.getPixelForValue(w[v], k),
                                S = j[p] = r || M ? h.getBasePixel() : h.getPixelForValue(l ? this.applyStack(h, w, l) : w[p], k);
                            j.skip = isNaN(P) || isNaN(S) || M, j.stop = k > 0 && Math.abs(w[v] - x[v]) > m, y && (j.parsed = w, j.raw = u.data[k]), d && (j.options = f || this.resolveDataElementOptions(k, O.active ? "active" : a)), _ || this.updateElement(O, k, j, a), x = w
                        }
                    }
                }, {
                    key: "getMaxOverflow",
                    value: function() {
                        var t = this._cachedMeta,
                            e = t.dataset,
                            i = e.options && e.options.borderWidth || 0,
                            n = t.data || [];
                        if (!n.length) return i;
                        var a = n[0].size(this.resolveDataElementOptions(0)),
                            r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
                        return Math.max(i, a, r) / 2
                    }
                }, {
                    key: "draw",
                    value: function() {
                        var t = this._cachedMeta;
                        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), a(c(i.prototype), "draw", this).call(this)
                    }
                }]), i
            }(F);
            q.id = "line", q.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
            }, q.overrides = {
                scales: {
                    _index_: {
                        type: "category"
                    },
                    _value_: {
                        type: "linear"
                    }
                }
            };
            var K = function(t) {
                s(i, t);
                var e = h(i);

                function i(t, n) {
                    var a;
                    return m(this, i), (a = e.call(this, t, n)).innerRadius = void 0, a.outerRadius = void 0, a
                }
                return x(i, [{
                    key: "getLabelAndValue",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = this.chart,
                            a = i.data.labels || [],
                            r = Object(n.Pb)(e._parsed[t].r, i.options.locale);
                        return {
                            label: a[t] || "",
                            value: r
                        }
                    }
                }, {
                    key: "parseObjectData",
                    value: function(t, e, i, a) {
                        return n.Zb.bind(this)(t, e, i, a)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta.data;
                        this._updateRadius(), this.updateElements(e, 0, e.length, t)
                    }
                }, {
                    key: "getMinMax",
                    value: function() {
                        var t = this,
                            e = this._cachedMeta,
                            i = {
                                min: Number.POSITIVE_INFINITY,
                                max: Number.NEGATIVE_INFINITY
                            };
                        return e.data.forEach((function(e, n) {
                            var a = t.getParsed(n).r;
                            !isNaN(a) && t.chart.getDataVisibility(n) && (a < i.min && (i.min = a), a > i.max && (i.max = a))
                        })), i
                    }
                }, {
                    key: "_updateRadius",
                    value: function() {
                        var t = this.chart,
                            e = t.chartArea,
                            i = t.options,
                            n = Math.min(e.right - e.left, e.bottom - e.top),
                            a = Math.max(n / 2, 0),
                            r = (a - Math.max(i.cutoutPercentage ? a / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                        this.outerRadius = a - r * this.index, this.innerRadius = this.outerRadius - r
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, a) {
                        var r, s = "reset" === a,
                            o = this.chart,
                            h = o.options.animation,
                            l = this._cachedMeta.rScale,
                            u = l.xCenter,
                            c = l.yCenter,
                            f = l.getIndexAngle(0) - .5 * n.q,
                            d = f,
                            v = 360 / this.countVisibleElements();
                        for (r = 0; r < e; ++r) d += this._computeAngle(r, a, v);
                        for (r = e; r < e + i; r++) {
                            var p = t[r],
                                g = d,
                                b = d + this._computeAngle(r, a, v),
                                y = o.getDataVisibility(r) ? l.getDistanceFromCenterForValue(this.getParsed(r).r) : 0;
                            d = b, s && (h.animateScale && (y = 0), h.animateRotate && (g = b = f));
                            var m = {
                                x: u,
                                y: c,
                                innerRadius: 0,
                                outerRadius: y,
                                startAngle: g,
                                endAngle: b,
                                options: this.resolveDataElementOptions(r, p.active ? "active" : a)
                            };
                            this.updateElement(p, r, m, a)
                        }
                    }
                }, {
                    key: "countVisibleElements",
                    value: function() {
                        var t = this,
                            e = this._cachedMeta,
                            i = 0;
                        return e.data.forEach((function(e, n) {
                            !isNaN(t.getParsed(n).r) && t.chart.getDataVisibility(n) && i++
                        })), i
                    }
                }, {
                    key: "_computeAngle",
                    value: function(t, e, i) {
                        return this.chart.getDataVisibility(t) ? Object(n.Ub)(this.resolveDataElementOptions(t, e).angle || i) : 0
                    }
                }]), i
            }(F);
            K.id = "polarArea", K.defaults = {
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                    }
                },
                indexAxis: "r",
                startAngle: 0
            }, K.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    var i = t.legend.options.labels.pointStyle;
                                    return e.labels.map((function(e, n) {
                                        var a = t.getDatasetMeta(0).controller.getStyle(n);
                                        return {
                                            text: e,
                                            fillStyle: a.backgroundColor,
                                            strokeStyle: a.borderColor,
                                            lineWidth: a.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(n),
                                            index: n
                                        }
                                    }))
                                }
                                return []
                            }
                        },
                        onClick: function(t, e, i) {
                            i.chart.toggleDataVisibility(e.index), i.chart.update()
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        beginAtZero: !0,
                        grid: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        startAngle: 0
                    }
                }
            };
            var Z = function(t) {
                s(i, t);
                var e = h(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return x(i)
            }(G);
            Z.id = "pie", Z.defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
            };
            var Q = function(t) {
                s(i, t);
                var e = h(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return x(i, [{
                    key: "getLabelAndValue",
                    value: function(t) {
                        var e = this._cachedMeta.vScale,
                            i = this.getParsed(t);
                        return {
                            label: e.getLabels()[t],
                            value: "" + e.getLabelForValue(i[e.axis])
                        }
                    }
                }, {
                    key: "parseObjectData",
                    value: function(t, e, i, a) {
                        return n.Zb.bind(this)(t, e, i, a)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = e.dataset,
                            n = e.data || [],
                            a = e.iScale.getLabels();
                        if (i.points = n, "resize" !== t) {
                            var r = this.resolveDatasetElementOptions(t);
                            this.options.showLine || (r.borderWidth = 0);
                            var s = {
                                _loop: !0,
                                _fullLoop: a.length === n.length,
                                options: r
                            };
                            this.updateElement(i, void 0, s, t)
                        }
                        this.updateElements(n, 0, n.length, t)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, n) {
                        for (var a = this._cachedMeta.rScale, r = "reset" === n, s = e; s < e + i; s++) {
                            var o = t[s],
                                h = this.resolveDataElementOptions(s, o.active ? "active" : n),
                                l = a.getPointPositionForValue(s, this.getParsed(s).r),
                                u = r ? a.xCenter : l.x,
                                c = r ? a.yCenter : l.y,
                                f = {
                                    x: u,
                                    y: c,
                                    angle: l.angle,
                                    skip: isNaN(u) || isNaN(c),
                                    options: h
                                };
                            this.updateElement(o, s, f, n)
                        }
                    }
                }]), i
            }(F);
            Q.id = "radar", Q.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {
                    line: {
                        fill: "start"
                    }
                }
            }, Q.overrides = {
                aspectRatio: 1,
                scales: {
                    r: {
                        type: "radialLinear"
                    }
                }
            };
            var tt = function() {
                function t() {
                    m(this, t), this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
                }
                return x(t, [{
                    key: "tooltipPosition",
                    value: function(t) {
                        var e = this.getProps(["x", "y"], t);
                        return {
                            x: e.x,
                            y: e.y
                        }
                    }
                }, {
                    key: "hasValue",
                    value: function() {
                        return Object(n.Yb)(this.x) && Object(n.Yb)(this.y)
                    }
                }, {
                    key: "getProps",
                    value: function(t, e) {
                        var i = this,
                            n = this.$animations;
                        if (!e || !n) return this;
                        var a = {};
                        return t.forEach((function(t) {
                            a[t] = n[t] && n[t].active() ? n[t]._to : i[t]
                        })), a
                    }
                }]), t
            }();
            tt.defaults = {}, tt.defaultRoutes = void 0;
            var et = {
                values: function(t) {
                    return Object(n.Cb)(t) ? t : "" + t
                },
                numeric: function(t, e, i) {
                    if (0 === t) return "0";
                    var a, r = this.chart.options.locale,
                        s = t;
                    if (i.length > 1) {
                        var o = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                        (o < 1e-4 || o > 1e15) && (a = "scientific"), s = function(t, e) {
                            var i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                            Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                            return i
                        }(t, i)
                    }
                    var h = Object(n.ac)(Math.abs(s)),
                        l = Math.max(Math.min(-1 * Math.floor(h), 20), 0),
                        u = {
                            notation: a,
                            minimumFractionDigits: l,
                            maximumFractionDigits: l
                        };
                    return Object.assign(u, this.options.ticks.format), Object(n.Pb)(t, r, u)
                },
                logarithmic: function(t, e, i) {
                    if (0 === t) return "0";
                    var a = t / Math.pow(10, Math.floor(Object(n.ac)(t)));
                    return 1 === a || 2 === a || 5 === a ? et.numeric.call(this, t, e, i) : ""
                }
            };
            var it = {
                formatters: et
            };

            function nt(t, e) {
                var i = t.options.ticks,
                    a = i.maxTicksLimit || function(t) {
                        var e = t.options.offset,
                            i = t._tickSize(),
                            n = t._length / i + (e ? 0 : 1),
                            a = t._maxLength / i;
                        return Math.floor(Math.min(n, a))
                    }(t),
                    r = i.major.enabled ? function(t) {
                        var e, i, n = [];
                        for (e = 0, i = t.length; e < i; e++) t[e].major && n.push(e);
                        return n
                    }(e) : [],
                    s = r.length,
                    o = r[0],
                    h = r[s - 1],
                    l = [];
                if (s > a) return function(t, e, i, n) {
                    var a, r = 0,
                        s = i[0];
                    for (n = Math.ceil(n), a = 0; a < t.length; a++) a === s && (e.push(t[a]), r++, s = i[r * n])
                }(e, l, r, s / a), l;
                var u = function(t, e, i) {
                    var a = function(t) {
                            var e, i, n = t.length;
                            if (n < 2) return !1;
                            for (i = t[0], e = 1; e < n; ++e)
                                if (t[e] - t[e - 1] !== i) return !1;
                            return i
                        }(t),
                        r = e.length / i;
                    if (!a) return Math.max(r, 1);
                    for (var s = Object(n.b)(a), o = 0, h = s.length - 1; o < h; o++) {
                        var l = s[o];
                        if (l > r) return l
                    }
                    return Math.max(r, 1)
                }(r, e, a);
                if (s > 0) {
                    var c, f, d = s > 1 ? Math.round((h - o) / (s - 1)) : null;
                    for (at(e, l, u, Object(n.Lb)(d) ? 0 : o - d, o), c = 0, f = s - 1; c < f; c++) at(e, l, u, r[c], r[c + 1]);
                    return at(e, l, u, h, Object(n.Lb)(d) ? e.length : h + d), l
                }
                return at(e, l, u), l
            }

            function at(t, e, i, a, r) {
                var s, o, h, l = Object(n.Wb)(a, 0),
                    u = Math.min(Object(n.Wb)(r, t.length), t.length),
                    c = 0;
                for (i = Math.ceil(i), r && (i = (s = r - a) / Math.floor(s / i)), h = l; h < 0;) c++, h = Math.round(l + c * i);
                for (o = Math.max(l, 0); o < u; o++) o === h && (e.push(t[o]), c++, h = Math.round(l + c * i))
            }
            n.Eb.set("scale", {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: "ticks",
                grace: 0,
                grid: {
                    display: !0,
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickLength: 8,
                    tickWidth: function(t, e) {
                        return e.lineWidth
                    },
                    tickColor: function(t, e) {
                        return e.color
                    },
                    offset: !1,
                    borderDash: [],
                    borderDashOffset: 0,
                    borderWidth: 1
                },
                title: {
                    display: !1,
                    text: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    textStrokeWidth: 0,
                    textStrokeColor: "",
                    padding: 3,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 3,
                    labelOffset: 0,
                    callback: it.formatters.values,
                    minor: {},
                    major: {},
                    align: "center",
                    crossAlign: "near",
                    showLabelBackdrop: !1,
                    backdropColor: "rgba(255, 255, 255, 0.75)",
                    backdropPadding: 2
                }
            }), n.Eb.route("scale.ticks", "color", "", "color"), n.Eb.route("scale.grid", "color", "", "borderColor"), n.Eb.route("scale.grid", "borderColor", "", "borderColor"), n.Eb.route("scale.title", "color", "", "color"), n.Eb.describe("scale", {
                _fallback: !1,
                _scriptable: function(t) {
                    return !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t
                },
                _indexable: function(t) {
                    return "borderDash" !== t && "tickBorderDash" !== t
                }
            }), n.Eb.describe("scales", {
                _fallback: "scale"
            }), n.Eb.describe("scale.ticks", {
                _scriptable: function(t) {
                    return "backdropPadding" !== t && "callback" !== t
                },
                _indexable: function(t) {
                    return "backdropPadding" !== t
                }
            });
            var rt = function(t, e, i) {
                return "top" === e || "left" === e ? t[e] + i : t[e] - i
            };

            function st(t, e) {
                for (var i = [], n = t.length / e, a = t.length, r = 0; r < a; r += n) i.push(t[Math.floor(r)]);
                return i
            }

            function ot(t, e, i) {
                var n, a = t.ticks.length,
                    r = Math.min(e, a - 1),
                    s = t._startPixel,
                    o = t._endPixel,
                    h = t.getPixelForTick(r);
                if (!(i && (n = 1 === a ? Math.max(h - s, o - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(r - 1)) / 2, (h += r < e ? n : -n) < s - 1e-6 || h > o + 1e-6))) return h
            }

            function ht(t) {
                return t.drawTicks ? t.tickLength : 0
            }

            function lt(t, e) {
                if (!t.display) return 0;
                var i = Object(n.p)(t.font, e),
                    a = Object(n.l)(t.padding);
                return (Object(n.Cb)(t.text) ? t.text.length : 1) * i.lineHeight + a.height
            }

            function ut(t, e, i) {
                var a = Object(n.s)(t);
                return (i && "right" !== e || !i && "right" === e) && (a = function(t) {
                    return "left" === t ? "right" : "right" === t ? "left" : t
                }(a)), a
            }
            var ct = function(t) {
                    s(i, t);
                    var e = h(i);

                    function i(t) {
                        var n;
                        return m(this, i), (n = e.call(this)).id = t.id, n.type = t.type, n.options = void 0, n.ctx = t.ctx, n.chart = t.chart, n.top = void 0, n.bottom = void 0, n.left = void 0, n.right = void 0, n.width = void 0, n.height = void 0, n._margins = {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n.maxWidth = void 0, n.maxHeight = void 0, n.paddingTop = void 0, n.paddingBottom = void 0, n.paddingLeft = void 0, n.paddingRight = void 0, n.axis = void 0, n.labelRotation = void 0, n.min = void 0, n.max = void 0, n._range = void 0, n.ticks = [], n._gridLineItems = null, n._labelItems = null, n._labelSizes = null, n._length = 0, n._maxLength = 0, n._longestTextCache = {}, n._startPixel = void 0, n._endPixel = void 0, n._reversePixels = !1, n._userMax = void 0, n._userMin = void 0, n._suggestedMax = void 0, n._suggestedMin = void 0, n._ticksLength = 0, n._borderValue = 0, n._cache = {}, n._dataLimitsCached = !1, n.$context = void 0, n
                    }
                    return x(i, [{
                        key: "init",
                        value: function(t) {
                            this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
                        }
                    }, {
                        key: "parse",
                        value: function(t, e) {
                            return t
                        }
                    }, {
                        key: "getUserBounds",
                        value: function() {
                            var t = this._userMin,
                                e = this._userMax,
                                i = this._suggestedMin,
                                a = this._suggestedMax;
                            return t = Object(n.c)(t, Number.POSITIVE_INFINITY), e = Object(n.c)(e, Number.NEGATIVE_INFINITY), i = Object(n.c)(i, Number.POSITIVE_INFINITY), a = Object(n.c)(a, Number.NEGATIVE_INFINITY), {
                                min: Object(n.c)(t, i),
                                max: Object(n.c)(e, a),
                                minDefined: Object(n.Hb)(t),
                                maxDefined: Object(n.Hb)(e)
                            }
                        }
                    }, {
                        key: "getMinMax",
                        value: function(t) {
                            var e, i = this.getUserBounds(),
                                a = i.min,
                                r = i.max,
                                s = i.minDefined,
                                o = i.maxDefined;
                            if (s && o) return {
                                min: a,
                                max: r
                            };
                            for (var h = this.getMatchingVisibleMetas(), l = 0, u = h.length; l < u; ++l) e = h[l].controller.getMinMax(this, t), s || (a = Math.min(a, e.min)), o || (r = Math.max(r, e.max));
                            return a = o && a > r ? r : a, r = s && a > r ? a : r, {
                                min: Object(n.c)(a, Object(n.c)(r, a)),
                                max: Object(n.c)(r, Object(n.c)(a, r))
                            }
                        }
                    }, {
                        key: "getPadding",
                        value: function() {
                            return {
                                left: this.paddingLeft || 0,
                                top: this.paddingTop || 0,
                                right: this.paddingRight || 0,
                                bottom: this.paddingBottom || 0
                            }
                        }
                    }, {
                        key: "getTicks",
                        value: function() {
                            return this.ticks
                        }
                    }, {
                        key: "getLabels",
                        value: function() {
                            var t = this.chart.data;
                            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                        }
                    }, {
                        key: "beforeLayout",
                        value: function() {
                            this._cache = {}, this._dataLimitsCached = !1
                        }
                    }, {
                        key: "beforeUpdate",
                        value: function() {
                            Object(n.d)(this.options.beforeUpdate, [this])
                        }
                    }, {
                        key: "update",
                        value: function(t, e, i) {
                            var a = this.options,
                                r = a.beginAtZero,
                                s = a.grace,
                                o = a.ticks,
                                h = o.sampleSize;
                            this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Object(n.e)(this, s, r), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                            var l = h < this.ticks.length;
                            this._convertTicksToLabels(l ? st(this.ticks, h) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = nt(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
                        }
                    }, {
                        key: "configure",
                        value: function() {
                            var t, e, i = this.options.reverse;
                            this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels
                        }
                    }, {
                        key: "afterUpdate",
                        value: function() {
                            Object(n.d)(this.options.afterUpdate, [this])
                        }
                    }, {
                        key: "beforeSetDimensions",
                        value: function() {
                            Object(n.d)(this.options.beforeSetDimensions, [this])
                        }
                    }, {
                        key: "setDimensions",
                        value: function() {
                            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                        }
                    }, {
                        key: "afterSetDimensions",
                        value: function() {
                            Object(n.d)(this.options.afterSetDimensions, [this])
                        }
                    }, {
                        key: "_callHooks",
                        value: function(t) {
                            this.chart.notifyPlugins(t, this.getContext()), Object(n.d)(this.options[t], [this])
                        }
                    }, {
                        key: "beforeDataLimits",
                        value: function() {
                            this._callHooks("beforeDataLimits")
                        }
                    }, {
                        key: "determineDataLimits",
                        value: function() {}
                    }, {
                        key: "afterDataLimits",
                        value: function() {
                            this._callHooks("afterDataLimits")
                        }
                    }, {
                        key: "beforeBuildTicks",
                        value: function() {
                            this._callHooks("beforeBuildTicks")
                        }
                    }, {
                        key: "buildTicks",
                        value: function() {
                            return []
                        }
                    }, {
                        key: "afterBuildTicks",
                        value: function() {
                            this._callHooks("afterBuildTicks")
                        }
                    }, {
                        key: "beforeTickToLabelConversion",
                        value: function() {
                            Object(n.d)(this.options.beforeTickToLabelConversion, [this])
                        }
                    }, {
                        key: "generateTickLabels",
                        value: function(t) {
                            var e, i, a, r = this.options.ticks;
                            for (e = 0, i = t.length; e < i; e++)(a = t[e]).label = Object(n.d)(r.callback, [a.value, e, t], this)
                        }
                    }, {
                        key: "afterTickToLabelConversion",
                        value: function() {
                            Object(n.d)(this.options.afterTickToLabelConversion, [this])
                        }
                    }, {
                        key: "beforeCalculateLabelRotation",
                        value: function() {
                            Object(n.d)(this.options.beforeCalculateLabelRotation, [this])
                        }
                    }, {
                        key: "calculateLabelRotation",
                        value: function() {
                            var t, e, i, a = this.options,
                                r = a.ticks,
                                s = this.ticks.length,
                                o = r.minRotation || 0,
                                h = r.maxRotation,
                                l = o;
                            if (!this._isVisible() || !r.display || o >= h || s <= 1 || !this.isHorizontal()) this.labelRotation = o;
                            else {
                                var u = this._getLabelSizes(),
                                    c = u.widest.width,
                                    f = u.highest.height,
                                    d = Object(n.f)(this.chart.width - c, 0, this.maxWidth);
                                c + 6 > (t = a.offset ? this.maxWidth / s : d / (s - 1)) && (t = d / (s - (a.offset ? .5 : 1)), e = this.maxHeight - ht(a.grid) - r.padding - lt(a.title, this.chart.options.font), i = Math.sqrt(c * c + f * f), l = Object(n.g)(Math.min(Math.asin(Object(n.f)((u.highest.height + 6) / t, -1, 1)), Math.asin(Object(n.f)(e / i, -1, 1)) - Math.asin(Object(n.f)(f / i, -1, 1)))), l = Math.max(o, Math.min(h, l))), this.labelRotation = l
                            }
                        }
                    }, {
                        key: "afterCalculateLabelRotation",
                        value: function() {
                            Object(n.d)(this.options.afterCalculateLabelRotation, [this])
                        }
                    }, {
                        key: "afterAutoSkip",
                        value: function() {}
                    }, {
                        key: "beforeFit",
                        value: function() {
                            Object(n.d)(this.options.beforeFit, [this])
                        }
                    }, {
                        key: "fit",
                        value: function() {
                            var t = {
                                    width: 0,
                                    height: 0
                                },
                                e = this.chart,
                                i = this.options,
                                a = i.ticks,
                                r = i.title,
                                s = i.grid,
                                o = this._isVisible(),
                                h = this.isHorizontal();
                            if (o) {
                                var l = lt(r, e.options.font);
                                if (h ? (t.width = this.maxWidth, t.height = ht(s) + l) : (t.height = this.maxHeight, t.width = ht(s) + l), a.display && this.ticks.length) {
                                    var u = this._getLabelSizes(),
                                        c = u.first,
                                        f = u.last,
                                        d = u.widest,
                                        v = u.highest,
                                        p = 2 * a.padding,
                                        g = Object(n.Ub)(this.labelRotation),
                                        b = Math.cos(g),
                                        y = Math.sin(g);
                                    if (h) {
                                        var m = a.mirror ? 0 : y * d.width + b * v.height;
                                        t.height = Math.min(this.maxHeight, t.height + m + p)
                                    } else {
                                        var _ = a.mirror ? 0 : b * d.width + y * v.height;
                                        t.width = Math.min(this.maxWidth, t.width + _ + p)
                                    }
                                    this._calculatePadding(c, f, y, b)
                                }
                            }
                            this._handleMargins(), h ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
                        }
                    }, {
                        key: "_calculatePadding",
                        value: function(t, e, i, n) {
                            var a = this.options,
                                r = a.ticks,
                                s = r.align,
                                o = r.padding,
                                h = a.position,
                                l = 0 !== this.labelRotation,
                                u = "top" !== h && "x" === this.axis;
                            if (this.isHorizontal()) {
                                var c = this.getPixelForTick(0) - this.left,
                                    f = this.right - this.getPixelForTick(this.ticks.length - 1),
                                    d = 0,
                                    v = 0;
                                l ? u ? (d = n * t.width, v = i * e.height) : (d = i * t.height, v = n * e.width) : "start" === s ? v = e.width : "end" === s ? d = t.width : "inner" !== s && (d = t.width / 2, v = e.width / 2), this.paddingLeft = Math.max((d - c + o) * this.width / (this.width - c), 0), this.paddingRight = Math.max((v - f + o) * this.width / (this.width - f), 0)
                            } else {
                                var p = e.height / 2,
                                    g = t.height / 2;
                                "start" === s ? (p = 0, g = t.height) : "end" === s && (p = e.height, g = 0), this.paddingTop = p + o, this.paddingBottom = g + o
                            }
                        }
                    }, {
                        key: "_handleMargins",
                        value: function() {
                            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
                        }
                    }, {
                        key: "afterFit",
                        value: function() {
                            Object(n.d)(this.options.afterFit, [this])
                        }
                    }, {
                        key: "isHorizontal",
                        value: function() {
                            var t = this.options,
                                e = t.axis,
                                i = t.position;
                            return "top" === i || "bottom" === i || "x" === e
                        }
                    }, {
                        key: "isFullSize",
                        value: function() {
                            return this.options.fullSize
                        }
                    }, {
                        key: "_convertTicksToLabels",
                        value: function(t) {
                            var e, i;
                            for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) Object(n.Lb)(t[e].label) && (t.splice(e, 1), i--, e--);
                            this.afterTickToLabelConversion()
                        }
                    }, {
                        key: "_getLabelSizes",
                        value: function() {
                            var t = this._labelSizes;
                            if (!t) {
                                var e = this.options.ticks.sampleSize,
                                    i = this.ticks;
                                e < i.length && (i = st(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length)
                            }
                            return t
                        }
                    }, {
                        key: "_computeLabelSizes",
                        value: function(t, e) {
                            var i, a, r, s, o, h, l, u, c, f, d, v = this.ctx,
                                p = this._longestTextCache,
                                g = [],
                                b = [],
                                y = 0,
                                m = 0;
                            for (i = 0; i < e; ++i) {
                                if (s = t[i].label, o = this._resolveTickFontOptions(i), v.font = h = o.string, l = p[h] = p[h] || {
                                        data: {},
                                        gc: []
                                    }, u = o.lineHeight, c = f = 0, Object(n.Lb)(s) || Object(n.Cb)(s)) {
                                    if (Object(n.Cb)(s))
                                        for (a = 0, r = s.length; a < r; ++a) d = s[a], Object(n.Lb)(d) || Object(n.Cb)(d) || (c = Object(n.h)(v, l.data, l.gc, c, d), f += u)
                                } else c = Object(n.h)(v, l.data, l.gc, c, s), f = u;
                                g.push(c), b.push(f), y = Math.max(c, y), m = Math.max(f, m)
                            }! function(t, e) {
                                Object(n.r)(t, (function(t) {
                                    var i, n = t.gc,
                                        a = n.length / 2;
                                    if (a > e) {
                                        for (i = 0; i < a; ++i) delete t.data[n[i]];
                                        n.splice(0, a)
                                    }
                                }))
                            }(p, e);
                            var _ = g.indexOf(y),
                                x = b.indexOf(m),
                                k = function(t) {
                                    return {
                                        width: g[t] || 0,
                                        height: b[t] || 0
                                    }
                                };
                            return {
                                first: k(0),
                                last: k(e - 1),
                                widest: k(_),
                                highest: k(x),
                                widths: g,
                                heights: b
                            }
                        }
                    }, {
                        key: "getLabelForValue",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "getPixelForValue",
                        value: function(t, e) {
                            return NaN
                        }
                    }, {
                        key: "getValueForPixel",
                        value: function(t) {}
                    }, {
                        key: "getPixelForTick",
                        value: function(t) {
                            var e = this.ticks;
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                        }
                    }, {
                        key: "getPixelForDecimal",
                        value: function(t) {
                            this._reversePixels && (t = 1 - t);
                            var e = this._startPixel + t * this._length;
                            return Object(n.j)(this._alignToPixels ? Object(n.k)(this.chart, e, 0) : e)
                        }
                    }, {
                        key: "getDecimalForPixel",
                        value: function(t) {
                            var e = (t - this._startPixel) / this._length;
                            return this._reversePixels ? 1 - e : e
                        }
                    }, {
                        key: "getBasePixel",
                        value: function() {
                            return this.getPixelForValue(this.getBaseValue())
                        }
                    }, {
                        key: "getBaseValue",
                        value: function() {
                            var t = this.min,
                                e = this.max;
                            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                        }
                    }, {
                        key: "getContext",
                        value: function(t) {
                            var e, i, a = this.ticks || [];
                            if (t >= 0 && t < a.length) {
                                var r = a[t];
                                return r.$context || (r.$context = function(t, e, i) {
                                    return Object(n.Ib)(t, {
                                        tick: i,
                                        index: e,
                                        type: "tick"
                                    })
                                }(this.getContext(), t, r))
                            }
                            return this.$context || (this.$context = (e = this.chart.getContext(), i = this, Object(n.Ib)(e, {
                                scale: i,
                                type: "scale"
                            })))
                        }
                    }, {
                        key: "_tickSize",
                        value: function() {
                            var t = this.options.ticks,
                                e = Object(n.Ub)(this.labelRotation),
                                i = Math.abs(Math.cos(e)),
                                a = Math.abs(Math.sin(e)),
                                r = this._getLabelSizes(),
                                s = t.autoSkipPadding || 0,
                                o = r ? r.widest.width + s : 0,
                                h = r ? r.highest.height + s : 0;
                            return this.isHorizontal() ? h * i > o * a ? o / i : h / a : h * a < o * i ? h / i : o / a
                        }
                    }, {
                        key: "_isVisible",
                        value: function() {
                            var t = this.options.display;
                            return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
                        }
                    }, {
                        key: "_computeGridLineItems",
                        value: function(t) {
                            var e, i, a, r, s, o, h, l, u, c, f, d, v = this.axis,
                                p = this.chart,
                                g = this.options,
                                b = g.grid,
                                y = g.position,
                                m = b.offset,
                                _ = this.isHorizontal(),
                                x = this.ticks.length + (m ? 1 : 0),
                                k = ht(b),
                                O = [],
                                w = b.setContext(this.getContext()),
                                j = w.drawBorder ? w.borderWidth : 0,
                                M = j / 2,
                                P = function(t) {
                                    return Object(n.k)(p, t, j)
                                };
                            if ("top" === y) e = P(this.bottom), o = this.bottom - k, l = e - M, c = P(t.top) + M, d = t.bottom;
                            else if ("bottom" === y) e = P(this.top), c = t.top, d = P(t.bottom) - M, o = e + M, l = this.top + k;
                            else if ("left" === y) e = P(this.right), s = this.right - k, h = e - M, u = P(t.left) + M, f = t.right;
                            else if ("right" === y) e = P(this.left), u = t.left, f = P(t.right) - M, s = e + M, h = this.left + k;
                            else if ("x" === v) {
                                if ("center" === y) e = P((t.top + t.bottom) / 2 + .5);
                                else if (Object(n.Jb)(y)) {
                                    var S = Object.keys(y)[0],
                                        E = y[S];
                                    e = P(this.chart.scales[S].getPixelForValue(E))
                                }
                                c = t.top, d = t.bottom, l = (o = e + M) + k
                            } else if ("y" === v) {
                                if ("center" === y) e = P((t.left + t.right) / 2);
                                else if (Object(n.Jb)(y)) {
                                    var A = Object.keys(y)[0],
                                        D = y[A];
                                    e = P(this.chart.scales[A].getPixelForValue(D))
                                }
                                h = (s = e - M) - k, u = t.left, f = t.right
                            }
                            var R = Object(n.Wb)(g.ticks.maxTicksLimit, x),
                                L = Math.max(1, Math.ceil(x / R));
                            for (i = 0; i < x; i += L) {
                                var C = b.setContext(this.getContext(i)),
                                    T = C.lineWidth,
                                    I = C.color,
                                    z = C.borderDash || [],
                                    F = C.borderDashOffset,
                                    B = C.tickWidth,
                                    V = C.tickColor,
                                    N = C.tickBorderDash || [],
                                    W = C.tickBorderDashOffset;
                                void 0 !== (a = ot(this, i, m)) && (r = Object(n.k)(p, a, T), _ ? s = h = u = f = r : o = l = c = d = r, O.push({
                                    tx1: s,
                                    ty1: o,
                                    tx2: h,
                                    ty2: l,
                                    x1: u,
                                    y1: c,
                                    x2: f,
                                    y2: d,
                                    width: T,
                                    color: I,
                                    borderDash: z,
                                    borderDashOffset: F,
                                    tickWidth: B,
                                    tickColor: V,
                                    tickBorderDash: N,
                                    tickBorderDashOffset: W
                                }))
                            }
                            return this._ticksLength = x, this._borderValue = e, O
                        }
                    }, {
                        key: "_computeLabelItems",
                        value: function(t) {
                            var e, i, a, r, s, o, h, l, u, c, f, d = this.axis,
                                v = this.options,
                                p = v.position,
                                g = v.ticks,
                                b = this.isHorizontal(),
                                y = this.ticks,
                                m = g.align,
                                _ = g.crossAlign,
                                x = g.padding,
                                k = g.mirror,
                                O = ht(v.grid),
                                w = O + x,
                                j = k ? -x : w,
                                M = -Object(n.Ub)(this.labelRotation),
                                P = [],
                                S = "middle";
                            if ("top" === p) s = this.bottom - j, o = this._getXAxisLabelAlignment();
                            else if ("bottom" === p) s = this.top + j, o = this._getXAxisLabelAlignment();
                            else if ("left" === p) {
                                var E = this._getYAxisLabelAlignment(O);
                                o = E.textAlign, r = E.x
                            } else if ("right" === p) {
                                var A = this._getYAxisLabelAlignment(O);
                                o = A.textAlign, r = A.x
                            } else if ("x" === d) {
                                if ("center" === p) s = (t.top + t.bottom) / 2 + w;
                                else if (Object(n.Jb)(p)) {
                                    var D = Object.keys(p)[0],
                                        R = p[D];
                                    s = this.chart.scales[D].getPixelForValue(R) + w
                                }
                                o = this._getXAxisLabelAlignment()
                            } else if ("y" === d) {
                                if ("center" === p) r = (t.left + t.right) / 2 - w;
                                else if (Object(n.Jb)(p)) {
                                    var L = Object.keys(p)[0],
                                        C = p[L];
                                    r = this.chart.scales[L].getPixelForValue(C)
                                }
                                o = this._getYAxisLabelAlignment(O).textAlign
                            }
                            "y" === d && ("start" === m ? S = "top" : "end" === m && (S = "bottom"));
                            var T = this._getLabelSizes();
                            for (e = 0, i = y.length; e < i; ++e) {
                                a = y[e].label;
                                var I = g.setContext(this.getContext(e));
                                h = this.getPixelForTick(e) + g.labelOffset, u = (l = this._resolveTickFontOptions(e)).lineHeight;
                                var z = (c = Object(n.Cb)(a) ? a.length : 1) / 2,
                                    F = I.color,
                                    B = I.textStrokeColor,
                                    V = I.textStrokeWidth,
                                    N = o;
                                b ? (r = h, "inner" === o && (N = e === i - 1 ? this.options.reverse ? "left" : "right" : 0 === e ? this.options.reverse ? "right" : "left" : "center"), f = "top" === p ? "near" === _ || 0 !== M ? -c * u + u / 2 : "center" === _ ? -T.highest.height / 2 - z * u + u : -T.highest.height + u / 2 : "near" === _ || 0 !== M ? u / 2 : "center" === _ ? T.highest.height / 2 - z * u : T.highest.height - c * u, k && (f *= -1)) : (s = h, f = (1 - c) * u / 2);
                                var W = void 0;
                                if (I.showLabelBackdrop) {
                                    var U = Object(n.l)(I.backdropPadding),
                                        H = T.heights[e],
                                        Y = T.widths[e],
                                        $ = s + f - U.top,
                                        X = r - U.left;
                                    switch (S) {
                                        case "middle":
                                            $ -= H / 2;
                                            break;
                                        case "bottom":
                                            $ -= H
                                    }
                                    switch (o) {
                                        case "center":
                                            X -= Y / 2;
                                            break;
                                        case "right":
                                            X -= Y
                                    }
                                    W = {
                                        left: X,
                                        top: $,
                                        width: Y + U.width,
                                        height: H + U.height,
                                        color: I.backdropColor
                                    }
                                }
                                P.push({
                                    rotation: M,
                                    label: a,
                                    font: l,
                                    color: F,
                                    strokeColor: B,
                                    strokeWidth: V,
                                    textOffset: f,
                                    textAlign: N,
                                    textBaseline: S,
                                    translation: [r, s],
                                    backdrop: W
                                })
                            }
                            return P
                        }
                    }, {
                        key: "_getXAxisLabelAlignment",
                        value: function() {
                            var t = this.options,
                                e = t.position,
                                i = t.ticks;
                            if (-Object(n.Ub)(this.labelRotation)) return "top" === e ? "left" : "right";
                            var a = "center";
                            return "start" === i.align ? a = "left" : "end" === i.align ? a = "right" : "inner" === i.align && (a = "inner"), a
                        }
                    }, {
                        key: "_getYAxisLabelAlignment",
                        value: function(t) {
                            var e, i, n = this.options,
                                a = n.position,
                                r = n.ticks,
                                s = r.crossAlign,
                                o = r.mirror,
                                h = r.padding,
                                l = t + h,
                                u = this._getLabelSizes().widest.width;
                            return "left" === a ? o ? (i = this.right + h, "near" === s ? e = "left" : "center" === s ? (e = "center", i += u / 2) : (e = "right", i += u)) : (i = this.right - l, "near" === s ? e = "right" : "center" === s ? (e = "center", i -= u / 2) : (e = "left", i = this.left)) : "right" === a ? o ? (i = this.left + h, "near" === s ? e = "right" : "center" === s ? (e = "center", i -= u / 2) : (e = "left", i -= u)) : (i = this.left + l, "near" === s ? e = "left" : "center" === s ? (e = "center", i += u / 2) : (e = "right", i = this.right)) : e = "right", {
                                textAlign: e,
                                x: i
                            }
                        }
                    }, {
                        key: "_computeLabelArea",
                        value: function() {
                            if (!this.options.ticks.mirror) {
                                var t = this.chart,
                                    e = this.options.position;
                                return "left" === e || "right" === e ? {
                                    top: 0,
                                    left: this.left,
                                    bottom: t.height,
                                    right: this.right
                                } : "top" === e || "bottom" === e ? {
                                    top: this.top,
                                    left: 0,
                                    bottom: this.bottom,
                                    right: t.width
                                } : void 0
                            }
                        }
                    }, {
                        key: "drawBackground",
                        value: function() {
                            var t = this.ctx,
                                e = this.options.backgroundColor,
                                i = this.left,
                                n = this.top,
                                a = this.width,
                                r = this.height;
                            e && (t.save(), t.fillStyle = e, t.fillRect(i, n, a, r), t.restore())
                        }
                    }, {
                        key: "getLineWidthForValue",
                        value: function(t) {
                            var e = this.options.grid;
                            if (!this._isVisible() || !e.display) return 0;
                            var i = this.ticks.findIndex((function(e) {
                                return e.value === t
                            }));
                            return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0
                        }
                    }, {
                        key: "drawGrid",
                        value: function(t) {
                            var e, i, n = this.options.grid,
                                a = this.ctx,
                                r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)),
                                s = function(t, e, i) {
                                    i.width && i.color && (a.save(), a.lineWidth = i.width, a.strokeStyle = i.color, a.setLineDash(i.borderDash || []), a.lineDashOffset = i.borderDashOffset, a.beginPath(), a.moveTo(t.x, t.y), a.lineTo(e.x, e.y), a.stroke(), a.restore())
                                };
                            if (n.display)
                                for (e = 0, i = r.length; e < i; ++e) {
                                    var o = r[e];
                                    n.drawOnChartArea && s({
                                        x: o.x1,
                                        y: o.y1
                                    }, {
                                        x: o.x2,
                                        y: o.y2
                                    }, o), n.drawTicks && s({
                                        x: o.tx1,
                                        y: o.ty1
                                    }, {
                                        x: o.tx2,
                                        y: o.ty2
                                    }, {
                                        color: o.tickColor,
                                        width: o.tickWidth,
                                        borderDash: o.tickBorderDash,
                                        borderDashOffset: o.tickBorderDashOffset
                                    })
                                }
                        }
                    }, {
                        key: "drawBorder",
                        value: function() {
                            var t = this.chart,
                                e = this.ctx,
                                i = this.options.grid,
                                a = i.setContext(this.getContext()),
                                r = i.drawBorder ? a.borderWidth : 0;
                            if (r) {
                                var s, o, h, l, u = i.setContext(this.getContext(0)).lineWidth,
                                    c = this._borderValue;
                                this.isHorizontal() ? (s = Object(n.k)(t, this.left, r) - r / 2, o = Object(n.k)(t, this.right, u) + u / 2, h = l = c) : (h = Object(n.k)(t, this.top, r) - r / 2, l = Object(n.k)(t, this.bottom, u) + u / 2, s = o = c), e.save(), e.lineWidth = a.borderWidth, e.strokeStyle = a.borderColor, e.beginPath(), e.moveTo(s, h), e.lineTo(o, l), e.stroke(), e.restore()
                            }
                        }
                    }, {
                        key: "drawLabels",
                        value: function(t) {
                            if (this.options.ticks.display) {
                                var e = this.ctx,
                                    i = this._computeLabelArea();
                                i && Object(n.m)(e, i);
                                var a, r, s = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                                for (a = 0, r = s.length; a < r; ++a) {
                                    var o = s[a],
                                        h = o.font,
                                        l = o.label;
                                    o.backdrop && (e.fillStyle = o.backdrop.color, e.fillRect(o.backdrop.left, o.backdrop.top, o.backdrop.width, o.backdrop.height));
                                    var u = o.textOffset;
                                    Object(n.n)(e, l, 0, u, h, o)
                                }
                                i && Object(n.o)(e)
                            }
                        }
                    }, {
                        key: "drawTitle",
                        value: function() {
                            var t = this.ctx,
                                e = this.options,
                                i = e.position,
                                a = e.title,
                                r = e.reverse;
                            if (a.display) {
                                var s = Object(n.p)(a.font),
                                    o = Object(n.l)(a.padding),
                                    h = a.align,
                                    l = s.lineHeight / 2;
                                "bottom" === i || "center" === i || Object(n.Jb)(i) ? (l += o.bottom, Object(n.Cb)(a.text) && (l += s.lineHeight * (a.text.length - 1))) : l += o.top;
                                var u = function(t, e, i, a) {
                                        var r, s, o, h = t.top,
                                            l = t.left,
                                            u = t.bottom,
                                            c = t.right,
                                            f = t.chart,
                                            d = f.chartArea,
                                            v = f.scales,
                                            p = 0,
                                            g = u - h,
                                            b = c - l;
                                        if (t.isHorizontal()) {
                                            if (s = Object(n.t)(a, l, c), Object(n.Jb)(i)) {
                                                var y = Object.keys(i)[0],
                                                    m = i[y];
                                                o = v[y].getPixelForValue(m) + g - e
                                            } else o = "center" === i ? (d.bottom + d.top) / 2 + g - e : rt(t, i, e);
                                            r = c - l
                                        } else {
                                            if (Object(n.Jb)(i)) {
                                                var _ = Object.keys(i)[0],
                                                    x = i[_];
                                                s = v[_].getPixelForValue(x) - b + e
                                            } else s = "center" === i ? (d.left + d.right) / 2 - b + e : rt(t, i, e);
                                            o = Object(n.t)(a, u, h), p = "left" === i ? -n.i : n.i
                                        }
                                        return {
                                            titleX: s,
                                            titleY: o,
                                            maxWidth: r,
                                            rotation: p
                                        }
                                    }(this, l, i, h),
                                    c = u.titleX,
                                    f = u.titleY,
                                    d = u.maxWidth,
                                    v = u.rotation;
                                Object(n.n)(t, a.text, 0, 0, s, {
                                    color: a.color,
                                    maxWidth: d,
                                    rotation: v,
                                    textAlign: ut(h, i, r),
                                    textBaseline: "middle",
                                    translation: [c, f]
                                })
                            }
                        }
                    }, {
                        key: "draw",
                        value: function(t) {
                            this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
                        }
                    }, {
                        key: "_layers",
                        value: function() {
                            var t = this,
                                e = this.options,
                                a = e.ticks && e.ticks.z || 0,
                                r = Object(n.Wb)(e.grid && e.grid.z, -1);
                            return this._isVisible() && this.draw === i.prototype.draw ? [{
                                z: r,
                                draw: function(e) {
                                    t.drawBackground(), t.drawGrid(e), t.drawTitle()
                                }
                            }, {
                                z: r + 1,
                                draw: function() {
                                    t.drawBorder()
                                }
                            }, {
                                z: a,
                                draw: function(e) {
                                    t.drawLabels(e)
                                }
                            }] : [{
                                z: a,
                                draw: function(e) {
                                    t.draw(e)
                                }
                            }]
                        }
                    }, {
                        key: "getMatchingVisibleMetas",
                        value: function(t) {
                            var e, i, n = this.chart.getSortedVisibleDatasetMetas(),
                                a = this.axis + "AxisID",
                                r = [];
                            for (e = 0, i = n.length; e < i; ++e) {
                                var s = n[e];
                                s[a] !== this.id || t && s.type !== t || r.push(s)
                            }
                            return r
                        }
                    }, {
                        key: "_resolveTickFontOptions",
                        value: function(t) {
                            var e = this.options.ticks.setContext(this.getContext(t));
                            return Object(n.p)(e.font)
                        }
                    }, {
                        key: "_maxDigits",
                        value: function() {
                            var t = this._resolveTickFontOptions(0).lineHeight;
                            return (this.isHorizontal() ? this.width : this.height) / t
                        }
                    }]), i
                }(tt),
                ft = function() {
                    function t(e, i, n) {
                        m(this, t), this.type = e, this.scope = i, this.override = n, this.items = Object.create(null)
                    }
                    return x(t, [{
                        key: "isForType",
                        value: function(t) {
                            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
                        }
                    }, {
                        key: "register",
                        value: function(t) {
                            var e, i = Object.getPrototypeOf(t);
                            (function(t) {
                                return "id" in t && "defaults" in t
                            })(i) && (e = this.register(i));
                            var a = this.items,
                                r = t.id,
                                s = this.scope + "." + r;
                            if (!r) throw new Error("class does not have id: " + t);
                            return r in a || (a[r] = t, function(t, e, i) {
                                var a = Object(n.w)(Object.create(null), [i ? n.Eb.get(i) : {}, n.Eb.get(e), t.defaults]);
                                n.Eb.set(e, a), t.defaultRoutes && function(t, e) {
                                    Object.keys(e).forEach((function(i) {
                                        var a = i.split("."),
                                            r = a.pop(),
                                            s = [t].concat(a).join("."),
                                            o = e[i].split("."),
                                            h = o.pop(),
                                            l = o.join(".");
                                        n.Eb.route(s, r, l, h)
                                    }))
                                }(e, t.defaultRoutes);
                                t.descriptors && n.Eb.describe(e, t.descriptors)
                            }(t, s, e), this.override && n.Eb.override(t.id, t.overrides)), s
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            return this.items[t]
                        }
                    }, {
                        key: "unregister",
                        value: function(t) {
                            var e = this.items,
                                i = t.id,
                                a = this.scope;
                            i in e && delete e[i], a && i in n.Eb[a] && (delete n.Eb[a][i], this.override && delete n.v[i])
                        }
                    }]), t
                }();
            var dt = new(function() {
                    function t() {
                        m(this, t), this.controllers = new ft(F, "datasets", !0), this.elements = new ft(tt, "elements"), this.plugins = new ft(Object, "plugins"), this.scales = new ft(ct, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
                    }
                    return x(t, [{
                        key: "add",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("register", e)
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("unregister", e)
                        }
                    }, {
                        key: "addControllers",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("register", e, this.controllers)
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("register", e, this.elements)
                        }
                    }, {
                        key: "addPlugins",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("register", e, this.plugins)
                        }
                    }, {
                        key: "addScales",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("register", e, this.scales)
                        }
                    }, {
                        key: "getController",
                        value: function(t) {
                            return this._get(t, this.controllers, "controller")
                        }
                    }, {
                        key: "getElement",
                        value: function(t) {
                            return this._get(t, this.elements, "element")
                        }
                    }, {
                        key: "getPlugin",
                        value: function(t) {
                            return this._get(t, this.plugins, "plugin")
                        }
                    }, {
                        key: "getScale",
                        value: function(t) {
                            return this._get(t, this.scales, "scale")
                        }
                    }, {
                        key: "removeControllers",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("unregister", e, this.controllers)
                        }
                    }, {
                        key: "removeElements",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("unregister", e, this.elements)
                        }
                    }, {
                        key: "removePlugins",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("unregister", e, this.plugins)
                        }
                    }, {
                        key: "removeScales",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            this._each("unregister", e, this.scales)
                        }
                    }, {
                        key: "_each",
                        value: function(t, e, i) {
                            var a = this;
                            g(e).forEach((function(e) {
                                var r = i || a._getRegistryForType(e);
                                i || r.isForType(e) || r === a.plugins && e.id ? a._exec(t, r, e) : Object(n.r)(e, (function(e) {
                                    var n = i || a._getRegistryForType(e);
                                    a._exec(t, n, e)
                                }))
                            }))
                        }
                    }, {
                        key: "_exec",
                        value: function(t, e, i) {
                            var a = Object(n.x)(t);
                            Object(n.d)(i["before" + a], [], i), e[t](i), Object(n.d)(i["after" + a], [], i)
                        }
                    }, {
                        key: "_getRegistryForType",
                        value: function(t) {
                            for (var e = 0; e < this._typedRegistries.length; e++) {
                                var i = this._typedRegistries[e];
                                if (i.isForType(t)) return i
                            }
                            return this.plugins
                        }
                    }, {
                        key: "_get",
                        value: function(t, e, i) {
                            var n = e.get(t);
                            if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + i + ".");
                            return n
                        }
                    }]), t
                }()),
                vt = function(t) {
                    s(i, t);
                    var e = h(i);

                    function i() {
                        return m(this, i), e.apply(this, arguments)
                    }
                    return x(i, [{
                        key: "update",
                        value: function(t) {
                            var e = this._cachedMeta,
                                i = e.data,
                                a = void 0 === i ? [] : i,
                                r = this.chart._animationsDisabled,
                                s = Object(n.Rb)(e, a, r),
                                o = s.start,
                                h = s.count;
                            if (this._drawStart = o, this._drawCount = h, Object(n.Xb)(e) && (o = 0, h = a.length), this.options.showLine) {
                                var l = e.dataset,
                                    u = e._dataset;
                                l._chart = this.chart, l._datasetIndex = this.index, l._decimated = !!u._decimated, l.points = a;
                                var c = this.resolveDatasetElementOptions(t);
                                c.segment = this.options.segment, this.updateElement(l, void 0, {
                                    animated: !r,
                                    options: c
                                }, t)
                            }
                            this.updateElements(a, o, h, t)
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            var t = this.options.showLine;
                            !this.datasetElementType && t && (this.datasetElementType = dt.getElement("line")), a(c(i.prototype), "addElements", this).call(this)
                        }
                    }, {
                        key: "updateElements",
                        value: function(t, e, i, a) {
                            for (var r = "reset" === a, s = this._cachedMeta, o = s.iScale, h = s.vScale, l = s._stacked, u = s._dataset, c = this.resolveDataElementOptions(e, a), f = this.getSharedOptions(c), d = this.includeOptions(a, f), v = o.axis, p = h.axis, g = this.options, b = g.spanGaps, y = g.segment, m = Object(n.Yb)(b) ? b : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || r || "none" === a, x = e > 0 && this.getParsed(e - 1), k = e; k < e + i; ++k) {
                                var O = t[k],
                                    w = this.getParsed(k),
                                    j = _ ? O : {},
                                    M = Object(n.Lb)(w[p]),
                                    P = j[v] = o.getPixelForValue(w[v], k),
                                    S = j[p] = r || M ? h.getBasePixel() : h.getPixelForValue(l ? this.applyStack(h, w, l) : w[p], k);
                                j.skip = isNaN(P) || isNaN(S) || M, j.stop = k > 0 && Math.abs(w[v] - x[v]) > m, y && (j.parsed = w, j.raw = u.data[k]), d && (j.options = f || this.resolveDataElementOptions(k, O.active ? "active" : a)), _ || this.updateElement(O, k, j, a), x = w
                            }
                            this.updateSharedOptions(f, a, c)
                        }
                    }, {
                        key: "getMaxOverflow",
                        value: function() {
                            var t = this._cachedMeta,
                                e = t.data || [];
                            if (!this.options.showLine) {
                                for (var i = 0, n = e.length - 1; n >= 0; --n) i = Math.max(i, e[n].size(this.resolveDataElementOptions(n)) / 2);
                                return i > 0 && i
                            }
                            var a = t.dataset,
                                r = a.options && a.options.borderWidth || 0;
                            if (!e.length) return r;
                            var s = e[0].size(this.resolveDataElementOptions(0)),
                                o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                            return Math.max(r, s, o) / 2
                        }
                    }]), i
                }(F);
            vt.id = "scatter", vt.defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                showLine: !1,
                fill: !1
            }, vt.overrides = {
                interaction: {
                    mode: "point"
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return "(" + t.label + ", " + t.formattedValue + ")"
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };

            function pt() {
                throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
            }
            var gt = function() {
                function t(e) {
                    m(this, t), this.options = e || {}
                }
                return x(t, [{
                    key: "init",
                    value: function(t) {}
                }, {
                    key: "formats",
                    value: function() {
                        return pt()
                    }
                }, {
                    key: "parse",
                    value: function(t, e) {
                        return pt()
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        return pt()
                    }
                }, {
                    key: "add",
                    value: function(t, e, i) {
                        return pt()
                    }
                }, {
                    key: "diff",
                    value: function(t, e, i) {
                        return pt()
                    }
                }, {
                    key: "startOf",
                    value: function(t, e, i) {
                        return pt()
                    }
                }, {
                    key: "endOf",
                    value: function(t, e) {
                        return pt()
                    }
                }]), t
            }();
            gt.override = function(t) {
                Object.assign(gt.prototype, t)
            };
            var bt = {
                _date: gt
            };

            function yt(t, e, i, a) {
                var r = t.controller,
                    s = t.data,
                    o = t._sorted,
                    h = r._cachedMeta.iScale;
                if (h && e === h.axis && "r" !== e && o && s.length) {
                    var l = h._reversePixels ? n.z : n.A;
                    if (!a) return l(s, e, i);
                    if (r._sharedOptions) {
                        var u = s[0],
                            c = "function" == typeof u.getRange && u.getRange(e);
                        if (c) {
                            var f = l(s, e, i - c),
                                d = l(s, e, i + c);
                            return {
                                lo: f.lo,
                                hi: d.hi
                            }
                        }
                    }
                }
                return {
                    lo: 0,
                    hi: s.length - 1
                }
            }

            function mt(t, e, i, n, a) {
                for (var r = t.getSortedVisibleDatasetMetas(), s = i[e], o = 0, h = r.length; o < h; ++o)
                    for (var l = r[o], u = l.index, c = l.data, f = yt(r[o], e, s, a), d = f.lo, v = f.hi, p = d; p <= v; ++p) {
                        var g = c[p];
                        g.skip || n(g, u, p)
                    }
            }

            function _t(t, e, i, a, r) {
                var s = [];
                if (!r && !t.isPointInArea(e)) return s;
                return mt(t, i, e, (function(i, o, h) {
                    (r || Object(n.a)(i, t.chartArea, 0)) && i.inRange(e.x, e.y, a) && s.push({
                        element: i,
                        datasetIndex: o,
                        index: h
                    })
                }), !0), s
            }

            function xt(t, e, i, n, a, r) {
                var s = [],
                    o = function(t) {
                        var e = -1 !== t.indexOf("x"),
                            i = -1 !== t.indexOf("y");
                        return function(t, n) {
                            var a = e ? Math.abs(t.x - n.x) : 0,
                                r = i ? Math.abs(t.y - n.y) : 0;
                            return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2))
                        }
                    }(i),
                    h = Number.POSITIVE_INFINITY;
                return mt(t, i, e, (function(i, l, u) {
                    var c = i.inRange(e.x, e.y, a);
                    if (!n || c) {
                        var f = i.getCenterPoint(a);
                        if (!!r || t.isPointInArea(f) || c) {
                            var d = o(e, f);
                            d < h ? (s = [{
                                element: i,
                                datasetIndex: l,
                                index: u
                            }], h = d) : d === h && s.push({
                                element: i,
                                datasetIndex: l,
                                index: u
                            })
                        }
                    }
                })), s
            }

            function kt(t, e, i, a, r, s) {
                return s || t.isPointInArea(e) ? "r" !== i || a ? xt(t, e, i, a, r, s) : function(t, e, i, a) {
                    var r = [];
                    return mt(t, i, e, (function(t, i, s) {
                        var o = t.getProps(["startAngle", "endAngle"], a),
                            h = o.startAngle,
                            l = o.endAngle,
                            u = Object(n.D)(t, {
                                x: e.x,
                                y: e.y
                            }).angle;
                        Object(n.Qb)(u, h, l) && r.push({
                            element: t,
                            datasetIndex: i,
                            index: s
                        })
                    })), r
                }(t, e, i, r) : []
            }

            function Ot(t, e, i, n, a) {
                var r = [],
                    s = "x" === i ? "inXRange" : "inYRange",
                    o = !1;
                return mt(t, i, e, (function(t, n, h) {
                    t[s](e[i], a) && (r.push({
                        element: t,
                        datasetIndex: n,
                        index: h
                    }), o = o || t.inRange(e.x, e.y, a))
                })), n && !o ? [] : r
            }
            var wt = {
                    evaluateInteractionItems: mt,
                    modes: {
                        index: function(t, e, i, a) {
                            var r = Object(n.y)(e, t),
                                s = i.axis || "x",
                                o = i.includeInvisible || !1,
                                h = i.intersect ? _t(t, r, s, a, o) : kt(t, r, s, !1, a, o),
                                l = [];
                            return h.length ? (t.getSortedVisibleDatasetMetas().forEach((function(t) {
                                var e = h[0].index,
                                    i = t.data[e];
                                i && !i.skip && l.push({
                                    element: i,
                                    datasetIndex: t.index,
                                    index: e
                                })
                            })), l) : []
                        },
                        dataset: function(t, e, i, a) {
                            var r = Object(n.y)(e, t),
                                s = i.axis || "xy",
                                o = i.includeInvisible || !1,
                                h = i.intersect ? _t(t, r, s, a, o) : kt(t, r, s, !1, a, o);
                            if (h.length > 0) {
                                var l = h[0].datasetIndex,
                                    u = t.getDatasetMeta(l).data;
                                h = [];
                                for (var c = 0; c < u.length; ++c) h.push({
                                    element: u[c],
                                    datasetIndex: l,
                                    index: c
                                })
                            }
                            return h
                        },
                        point: function(t, e, i, a) {
                            return _t(t, Object(n.y)(e, t), i.axis || "xy", a, i.includeInvisible || !1)
                        },
                        nearest: function(t, e, i, a) {
                            var r = Object(n.y)(e, t),
                                s = i.axis || "xy",
                                o = i.includeInvisible || !1;
                            return kt(t, r, s, i.intersect, a, o)
                        },
                        x: function(t, e, i, a) {
                            return Ot(t, Object(n.y)(e, t), "x", i.intersect, a)
                        },
                        y: function(t, e, i, a) {
                            return Ot(t, Object(n.y)(e, t), "y", i.intersect, a)
                        }
                    }
                },
                jt = ["left", "top", "right", "bottom"];

            function Mt(t, e) {
                return t.filter((function(t) {
                    return t.pos === e
                }))
            }

            function Pt(t, e) {
                return t.filter((function(t) {
                    return -1 === jt.indexOf(t.pos) && t.box.axis === e
                }))
            }

            function St(t, e) {
                return t.sort((function(t, i) {
                    var n = e ? i : t,
                        a = e ? t : i;
                    return n.weight === a.weight ? n.index - a.index : n.weight - a.weight
                }))
            }

            function Et(t, e) {
                var i, n, a, r = function(t) {
                        var e, i = {},
                            n = v(t);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var a = e.value,
                                    r = a.stack,
                                    s = a.pos,
                                    o = a.stackWeight;
                                if (r && jt.includes(s)) {
                                    var h = i[r] || (i[r] = {
                                        count: 0,
                                        placed: 0,
                                        weight: 0,
                                        size: 0
                                    });
                                    h.count++, h.weight += o
                                }
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        return i
                    }(t),
                    s = e.vBoxMaxWidth,
                    o = e.hBoxMaxHeight;
                for (i = 0, n = t.length; i < n; ++i) {
                    var h = (a = t[i]).box.fullSize,
                        l = r[a.stack],
                        u = l && a.stackWeight / l.weight;
                    a.horizontal ? (a.width = u ? u * s : h && e.availableWidth, a.height = o) : (a.width = s, a.height = u ? u * o : h && e.availableHeight)
                }
                return r
            }

            function At(t, e, i, n) {
                return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
            }

            function Dt(t, e) {
                t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
            }

            function Rt(t, e, i, a) {
                var r = i.pos,
                    s = i.box,
                    o = t.maxPadding;
                if (!Object(n.Jb)(r)) {
                    i.size && (t[r] -= i.size);
                    var h = a[i.stack] || {
                        size: 0,
                        count: 1
                    };
                    h.size = Math.max(h.size, i.horizontal ? s.height : s.width), i.size = h.size / h.count, t[r] += i.size
                }
                s.getPadding && Dt(o, s.getPadding());
                var l = Math.max(0, e.outerWidth - At(o, t, "left", "right")),
                    u = Math.max(0, e.outerHeight - At(o, t, "top", "bottom")),
                    c = l !== t.w,
                    f = u !== t.h;
                return t.w = l, t.h = u, i.horizontal ? {
                    same: c,
                    other: f
                } : {
                    same: f,
                    other: c
                }
            }

            function Lt(t, e) {
                var i = e.maxPadding;

                function n(t) {
                    var n = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    return t.forEach((function(t) {
                        n[t] = Math.max(e[t], i[t])
                    })), n
                }
                return n(t ? ["left", "right"] : ["top", "bottom"])
            }

            function Ct(t, e, i, n) {
                var a, r, s, o, h, l, u = [];
                for (a = 0, r = t.length, h = 0; a < r; ++a) {
                    (o = (s = t[a]).box).update(s.width || e.w, s.height || e.h, Lt(s.horizontal, e));
                    var c = Rt(e, i, s, n),
                        f = c.same,
                        d = c.other;
                    h |= f && u.length, l = l || d, o.fullSize || u.push(s)
                }
                return h && Ct(u, e, i, n) || l
            }

            function Tt(t, e, i, n, a) {
                t.top = i, t.left = e, t.right = e + n, t.bottom = i + a, t.width = n, t.height = a
            }

            function It(t, e, i, a) {
                var r, s = i.padding,
                    o = e.x,
                    h = e.y,
                    l = v(t);
                try {
                    for (l.s(); !(r = l.n()).done;) {
                        var u = r.value,
                            c = u.box,
                            f = a[u.stack] || {
                                count: 1,
                                placed: 0,
                                weight: 1
                            },
                            d = u.stackWeight / f.weight || 1;
                        if (u.horizontal) {
                            var p = e.w * d,
                                g = f.size || c.height;
                            Object(n.Kb)(f.start) && (h = f.start), c.fullSize ? Tt(c, s.left, h, i.outerWidth - s.right - s.left, g) : Tt(c, e.left + f.placed, h, p, g), f.start = h, f.placed += p, h = c.bottom
                        } else {
                            var b = e.h * d,
                                y = f.size || c.width;
                            Object(n.Kb)(f.start) && (o = f.start), c.fullSize ? Tt(c, o, s.top, y, i.outerHeight - s.bottom - s.top) : Tt(c, o, e.top + f.placed, y, b), f.start = o, f.placed += b, o = c.right
                        }
                    }
                } catch (t) {
                    l.e(t)
                } finally {
                    l.f()
                }
                e.x = o, e.y = h
            }
            n.Eb.set("layout", {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
            var zt = function(t, e) {
                    t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                        return [{
                            z: 0,
                            draw: function(t) {
                                e.draw(t)
                            }
                        }]
                    }, t.boxes.push(e)
                },
                Ft = function(t, e) {
                    var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                },
                Bt = function(t, e, i) {
                    e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
                },
                Vt = function(t, e, i, a) {
                    if (t) {
                        var r = Object(n.l)(t.options.layout.padding),
                            s = Math.max(e - r.width, 0),
                            o = Math.max(i - r.height, 0),
                            h = function(t) {
                                var e = function(t) {
                                        var e, i, n, a, r, s, o = [];
                                        for (e = 0, i = (t || []).length; e < i; ++e) {
                                            var h = n = t[e];
                                            a = h.position;
                                            var l = h.options;
                                            r = l.stack;
                                            var u = l.stackWeight;
                                            s = void 0 === u ? 1 : u, o.push({
                                                index: e,
                                                box: n,
                                                pos: a,
                                                horizontal: n.isHorizontal(),
                                                weight: n.weight,
                                                stack: r && a + r,
                                                stackWeight: s
                                            })
                                        }
                                        return o
                                    }(t),
                                    i = St(e.filter((function(t) {
                                        return t.box.fullSize
                                    })), !0),
                                    n = St(Mt(e, "left"), !0),
                                    a = St(Mt(e, "right")),
                                    r = St(Mt(e, "top"), !0),
                                    s = St(Mt(e, "bottom")),
                                    o = Pt(e, "x"),
                                    h = Pt(e, "y");
                                return {
                                    fullSize: i,
                                    leftAndTop: n.concat(r),
                                    rightAndBottom: a.concat(h).concat(s).concat(o),
                                    chartArea: Mt(e, "chartArea"),
                                    vertical: n.concat(a).concat(h),
                                    horizontal: r.concat(s).concat(o)
                                }
                            }(t.boxes),
                            l = h.vertical,
                            u = h.horizontal;
                        Object(n.r)(t.boxes, (function(t) {
                            "function" == typeof t.beforeLayout && t.beforeLayout()
                        }));
                        var c = l.reduce((function(t, e) {
                                return e.box.options && !1 === e.box.options.display ? t : t + 1
                            }), 0) || 1,
                            f = Object.freeze({
                                outerWidth: e,
                                outerHeight: i,
                                padding: r,
                                availableWidth: s,
                                availableHeight: o,
                                vBoxMaxWidth: s / 2 / c,
                                hBoxMaxHeight: o / 2
                            }),
                            d = Object.assign({}, r);
                        Dt(d, Object(n.l)(a));
                        var v = Object.assign({
                                maxPadding: d,
                                w: s,
                                h: o,
                                x: r.left,
                                y: r.top
                            }, r),
                            p = Et(l.concat(u), f);
                        Ct(h.fullSize, v, f, p), Ct(l, v, f, p), Ct(u, v, f, p) && Ct(l, v, f, p),
                            function(t) {
                                var e = t.maxPadding;

                                function i(i) {
                                    var n = Math.max(e[i] - t[i], 0);
                                    return t[i] += n, n
                                }
                                t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                            }(v), It(h.leftAndTop, v, f, p), v.x += v.w, v.y += v.h, It(h.rightAndBottom, v, f, p), t.chartArea = {
                                left: v.left,
                                top: v.top,
                                right: v.left + v.w,
                                bottom: v.top + v.h,
                                height: v.h,
                                width: v.w
                            }, Object(n.r)(h.chartArea, (function(e) {
                                var i = e.box;
                                Object.assign(i, t.chartArea), i.update(v.w, v.h, {
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0
                                })
                            }))
                    }
                },
                Nt = function() {
                    function t() {
                        m(this, t)
                    }
                    return x(t, [{
                        key: "acquireContext",
                        value: function(t, e) {}
                    }, {
                        key: "releaseContext",
                        value: function(t) {
                            return !1
                        }
                    }, {
                        key: "addEventListener",
                        value: function(t, e, i) {}
                    }, {
                        key: "removeEventListener",
                        value: function(t, e, i) {}
                    }, {
                        key: "getDevicePixelRatio",
                        value: function() {
                            return 1
                        }
                    }, {
                        key: "getMaximumSize",
                        value: function(t, e, i, n) {
                            return e = Math.max(0, e || t.width), i = i || t.height, {
                                width: e,
                                height: Math.max(0, n ? Math.floor(e / n) : i)
                            }
                        }
                    }, {
                        key: "isAttached",
                        value: function(t) {
                            return !0
                        }
                    }, {
                        key: "updateConfig",
                        value: function(t) {}
                    }]), t
                }(),
                Wt = function(t) {
                    s(i, t);
                    var e = h(i);

                    function i() {
                        return m(this, i), e.apply(this, arguments)
                    }
                    return x(i, [{
                        key: "acquireContext",
                        value: function(t) {
                            return t && t.getContext && t.getContext("2d") || null
                        }
                    }, {
                        key: "updateConfig",
                        value: function(t) {
                            t.options.animation = !1
                        }
                    }]), i
                }(Nt),
                Ut = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                },
                Ht = function(t) {
                    return null === t || "" === t
                };
            var Yt = !!n.I && {
                passive: !0
            };

            function $t(t, e, i) {
                t.canvas.removeEventListener(e, i, Yt)
            }

            function Xt(t, e) {
                var i, n = v(t);
                try {
                    for (n.s(); !(i = n.n()).done;) {
                        var a = i.value;
                        if (a === e || a.contains(e)) return !0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }

            function Jt(t, e, i) {
                var n = t.canvas,
                    a = new MutationObserver((function(t) {
                        var e, a = !1,
                            r = v(t);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var s = e.value;
                                a = (a = a || Xt(s.addedNodes, n)) && !Xt(s.removedNodes, n)
                            }
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                        a && i()
                    }));
                return a.observe(document, {
                    childList: !0,
                    subtree: !0
                }), a
            }

            function Gt(t, e, i) {
                var n = t.canvas,
                    a = new MutationObserver((function(t) {
                        var e, a = !1,
                            r = v(t);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var s = e.value;
                                a = (a = a || Xt(s.removedNodes, n)) && !Xt(s.addedNodes, n)
                            }
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                        a && i()
                    }));
                return a.observe(document, {
                    childList: !0,
                    subtree: !0
                }), a
            }
            var qt = new Map,
                Kt = 0;

            function Zt() {
                var t = window.devicePixelRatio;
                t !== Kt && (Kt = t, qt.forEach((function(e, i) {
                    i.currentDevicePixelRatio !== t && e()
                })))
            }

            function Qt(t, e, i) {
                var a = t.canvas,
                    r = a && Object(n.F)(a);
                if (r) {
                    var s = Object(n.H)((function(t, e) {
                            var n = r.clientWidth;
                            i(t, e), n < r.clientWidth && i()
                        }), window),
                        o = new ResizeObserver((function(t) {
                            var e = t[0],
                                i = e.contentRect.width,
                                n = e.contentRect.height;
                            0 === i && 0 === n || s(i, n)
                        }));
                    return o.observe(r),
                        function(t, e) {
                            qt.size || window.addEventListener("resize", Zt), qt.set(t, e)
                        }(t, s), o
                }
            }

            function te(t, e, i) {
                i && i.disconnect(), "resize" === e && function(t) {
                    qt.delete(t), qt.size || window.removeEventListener("resize", Zt)
                }(t)
            }

            function ee(t, e, i) {
                var a = t.canvas,
                    r = Object(n.H)((function(e) {
                        null !== t.ctx && i(function(t, e) {
                            var i = Ut[t.type] || t.type,
                                a = Object(n.y)(t, e),
                                r = a.x,
                                s = a.y;
                            return {
                                type: i,
                                chart: e,
                                native: t,
                                x: void 0 !== r ? r : null,
                                y: void 0 !== s ? s : null
                            }
                        }(e, t))
                    }), t, (function(t) {
                        var e = t[0];
                        return [e, e.offsetX, e.offsetY]
                    }));
                return function(t, e, i) {
                    t.addEventListener(e, i, Yt)
                }(a, e, r), r
            }
            var ie = function(t) {
                s(i, t);
                var e = h(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return x(i, [{
                    key: "acquireContext",
                    value: function(t, e) {
                        var i = t && t.getContext && t.getContext("2d");
                        return i && i.canvas === t ? (function(t, e) {
                            var i = t.style,
                                a = t.getAttribute("height"),
                                r = t.getAttribute("width");
                            if (t.$chartjs = {
                                    initial: {
                                        height: a,
                                        width: r,
                                        style: {
                                            display: i.display,
                                            height: i.height,
                                            width: i.width
                                        }
                                    }
                                }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", Ht(r)) {
                                var s = Object(n.G)(t, "width");
                                void 0 !== s && (t.width = s)
                            }
                            if (Ht(a))
                                if ("" === t.style.height) t.height = t.width / (e || 2);
                                else {
                                    var o = Object(n.G)(t, "height");
                                    void 0 !== o && (t.height = o)
                                }
                        }(t, e), i) : null
                    }
                }, {
                    key: "releaseContext",
                    value: function(t) {
                        var e = t.canvas;
                        if (!e.$chartjs) return !1;
                        var i = e.$chartjs.initial;
                        ["height", "width"].forEach((function(t) {
                            var a = i[t];
                            Object(n.Lb)(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
                        }));
                        var a = i.style || {};
                        return Object.keys(a).forEach((function(t) {
                            e.style[t] = a[t]
                        })), e.width = e.width, delete e.$chartjs, !0
                    }
                }, {
                    key: "addEventListener",
                    value: function(t, e, i) {
                        this.removeEventListener(t, e);
                        var n = t.$proxies || (t.$proxies = {}),
                            a = {
                                attach: Jt,
                                detach: Gt,
                                resize: Qt
                            } [e] || ee;
                        n[e] = a(t, e, i)
                    }
                }, {
                    key: "removeEventListener",
                    value: function(t, e) {
                        var i = t.$proxies || (t.$proxies = {}),
                            n = i[e];
                        n && (({
                            attach: te,
                            detach: te,
                            resize: te
                        } [e] || $t)(t, e, n), i[e] = void 0)
                    }
                }, {
                    key: "getDevicePixelRatio",
                    value: function() {
                        return window.devicePixelRatio
                    }
                }, {
                    key: "getMaximumSize",
                    value: function(t, e, i, a) {
                        return Object(n.E)(t, e, i, a)
                    }
                }, {
                    key: "isAttached",
                    value: function(t) {
                        var e = Object(n.F)(t);
                        return !(!e || !e.isConnected)
                    }
                }]), i
            }(Nt);
            var ne = function() {
                function t() {
                    m(this, t), this._init = []
                }
                return x(t, [{
                    key: "notify",
                    value: function(t, e, i, n) {
                        "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                        var a = n ? this._descriptors(t).filter(n) : this._descriptors(t),
                            r = this._notify(a, t, e, i);
                        return "afterDestroy" === e && (this._notify(a, t, "stop"), this._notify(this._init, t, "uninstall")), r
                    }
                }, {
                    key: "_notify",
                    value: function(t, e, i, a) {
                        a = a || {};
                        var r, s = v(t);
                        try {
                            for (s.s(); !(r = s.n()).done;) {
                                var o = r.value,
                                    h = o.plugin,
                                    l = h[i],
                                    u = [e, a, o.options];
                                if (!1 === Object(n.d)(l, u, h) && a.cancelable) return !1
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        return !0
                    }
                }, {
                    key: "invalidate",
                    value: function() {
                        Object(n.Lb)(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
                    }
                }, {
                    key: "_descriptors",
                    value: function(t) {
                        if (this._cache) return this._cache;
                        var e = this._cache = this._createDescriptors(t);
                        return this._notifyStateChanges(t), e
                    }
                }, {
                    key: "_createDescriptors",
                    value: function(t, e) {
                        var i = t && t.config,
                            a = Object(n.Wb)(i.options && i.options.plugins, {}),
                            r = function(t) {
                                for (var e = {}, i = [], n = Object.keys(dt.plugins.items), a = 0; a < n.length; a++) i.push(dt.getPlugin(n[a]));
                                for (var r = t.plugins || [], s = 0; s < r.length; s++) {
                                    var o = r[s]; - 1 === i.indexOf(o) && (i.push(o), e[o.id] = !0)
                                }
                                return {
                                    plugins: i,
                                    localIds: e
                                }
                            }(i);
                        return !1 !== a || e ? function(t, e, i, n) {
                            var a, r = e.plugins,
                                s = e.localIds,
                                o = [],
                                h = t.getContext(),
                                l = v(r);
                            try {
                                for (l.s(); !(a = l.n()).done;) {
                                    var u = a.value,
                                        c = u.id,
                                        f = ae(i[c], n);
                                    null !== f && o.push({
                                        plugin: u,
                                        options: re(t.config, {
                                            plugin: u,
                                            local: s[c]
                                        }, f, h)
                                    })
                                }
                            } catch (t) {
                                l.e(t)
                            } finally {
                                l.f()
                            }
                            return o
                        }(t, r, a, e) : []
                    }
                }, {
                    key: "_notifyStateChanges",
                    value: function(t) {
                        var e = this._oldCache || [],
                            i = this._cache,
                            n = function(t, e) {
                                return t.filter((function(t) {
                                    return !e.some((function(e) {
                                        return t.plugin.id === e.plugin.id
                                    }))
                                }))
                            };
                        this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start")
                    }
                }]), t
            }();

            function ae(t, e) {
                return e || !1 !== t ? !0 === t ? {} : t : null
            }

            function re(t, e, i, n) {
                var a = e.plugin,
                    r = e.local,
                    s = t.pluginScopeKeys(a),
                    o = t.getOptionScopes(i, s);
                return r && a.defaults && o.push(a.defaults), t.createResolver(o, n, [""], {
                    scriptable: !1,
                    indexable: !1,
                    allKeys: !0
                })
            }

            function se(t, e) {
                var i = n.Eb.datasets[t] || {};
                return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
            }

            function oe(t, e) {
                return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
                var i
            }

            function he(t) {
                var e = t.options || (t.options = {});
                e.plugins = Object(n.Wb)(e.plugins, {}), e.scales = function(t, e) {
                    var i = n.v[t.type] || {
                            scales: {}
                        },
                        a = e.scales || {},
                        r = se(t.type, e),
                        s = Object.create(null),
                        o = Object.create(null);
                    return Object.keys(a).forEach((function(t) {
                        var e = a[t];
                        if (!Object(n.Jb)(e)) return console.error("Invalid scale configuration for scale: ".concat(t));
                        if (e._proxy) return console.warn("Ignoring resolver passed as options for scale: ".concat(t));
                        var h = oe(t, e),
                            l = function(t, e) {
                                return t === e ? "_index_" : "_value_"
                            }(h, r),
                            u = i.scales || {};
                        s[h] = s[h] || t, o[t] = Object(n.eb)(Object.create(null), [{
                            axis: h
                        }, e, u[h], u[l]])
                    })), t.data.datasets.forEach((function(i) {
                        var r = i.type || t.type,
                            h = i.indexAxis || se(r, e),
                            l = (n.v[r] || {}).scales || {};
                        Object.keys(l).forEach((function(t) {
                            var e = function(t, e) {
                                    var i = t;
                                    return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                                }(t, h),
                                r = i[e + "AxisID"] || s[e] || e;
                            o[r] = o[r] || Object.create(null), Object(n.eb)(o[r], [{
                                axis: e
                            }, a[r], l[t]])
                        }))
                    })), Object.keys(o).forEach((function(t) {
                        var e = o[t];
                        Object(n.eb)(e, [n.Eb.scales[e.type], n.Eb.scale])
                    })), o
                }(t, e)
            }

            function le(t) {
                return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
            }
            var ue = new Map,
                ce = new Set;

            function fe(t, e) {
                var i = ue.get(t);
                return i || (i = e(), ue.set(t, i), ce.add(i)), i
            }
            var de = function(t, e, i) {
                    var a = Object(n.Gb)(e, i);
                    void 0 !== a && t.add(a)
                },
                ve = function() {
                    function t(e) {
                        m(this, t), this._config = function(t) {
                            return (t = t || {}).data = le(t.data), he(t), t
                        }(e), this._scopeCache = new Map, this._resolverCache = new Map
                    }
                    return x(t, [{
                        key: "platform",
                        get: function() {
                            return this._config.platform
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return this._config.type
                        },
                        set: function(t) {
                            this._config.type = t
                        }
                    }, {
                        key: "data",
                        get: function() {
                            return this._config.data
                        },
                        set: function(t) {
                            this._config.data = le(t)
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this._config.options
                        },
                        set: function(t) {
                            this._config.options = t
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            return this._config.plugins
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var t = this._config;
                            this.clearCache(), he(t)
                        }
                    }, {
                        key: "clearCache",
                        value: function() {
                            this._scopeCache.clear(), this._resolverCache.clear()
                        }
                    }, {
                        key: "datasetScopeKeys",
                        value: function(t) {
                            return fe(t, (function() {
                                return [
                                    ["datasets.".concat(t), ""]
                                ]
                            }))
                        }
                    }, {
                        key: "datasetAnimationScopeKeys",
                        value: function(t, e) {
                            return fe("".concat(t, ".transition.").concat(e), (function() {
                                return [
                                    ["datasets.".concat(t, ".transitions.").concat(e), "transitions.".concat(e)],
                                    ["datasets.".concat(t), ""]
                                ]
                            }))
                        }
                    }, {
                        key: "datasetElementScopeKeys",
                        value: function(t, e) {
                            return fe("".concat(t, "-").concat(e), (function() {
                                return [
                                    ["datasets.".concat(t, ".elements.").concat(e), "datasets.".concat(t), "elements.".concat(e), ""]
                                ]
                            }))
                        }
                    }, {
                        key: "pluginScopeKeys",
                        value: function(t) {
                            var e = t.id,
                                i = this.type;
                            return fe("".concat(i, "-plugin-").concat(e), (function() {
                                return [
                                    ["plugins.".concat(e)].concat(g(t.additionalOptionScopes || []))
                                ]
                            }))
                        }
                    }, {
                        key: "_cachedScopes",
                        value: function(t, e) {
                            var i = this._scopeCache,
                                n = i.get(t);
                            return n && !e || (n = new Map, i.set(t, n)), n
                        }
                    }, {
                        key: "getOptionScopes",
                        value: function(t, e, i) {
                            var a = this.options,
                                r = this.type,
                                s = this._cachedScopes(t, i),
                                o = s.get(e);
                            if (o) return o;
                            var h = new Set;
                            e.forEach((function(e) {
                                t && (h.add(t), e.forEach((function(e) {
                                    return de(h, t, e)
                                }))), e.forEach((function(t) {
                                    return de(h, a, t)
                                })), e.forEach((function(t) {
                                    return de(h, n.v[r] || {}, t)
                                })), e.forEach((function(t) {
                                    return de(h, n.Eb, t)
                                })), e.forEach((function(t) {
                                    return de(h, n.K, t)
                                }))
                            }));
                            var l = Array.from(h);
                            return 0 === l.length && l.push(Object.create(null)), ce.has(e) && s.set(e, l), l
                        }
                    }, {
                        key: "chartOptionScopes",
                        value: function() {
                            var t = this.options,
                                e = this.type;
                            return [t, n.v[e] || {}, n.Eb.datasets[e] || {}, {
                                type: e
                            }, n.Eb, n.K]
                        }
                    }, {
                        key: "resolveNamedOptions",
                        value: function(t, e, i) {
                            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [""],
                                r = {
                                    $shared: !0
                                },
                                s = pe(this._resolverCache, t, a),
                                o = s.resolver,
                                h = s.subPrefixes,
                                l = o;
                            if (be(o, e)) {
                                r.$shared = !1, i = Object(n.L)(i) ? i() : i;
                                var u = this.createResolver(t, i, h);
                                l = Object(n.M)(o, i, u)
                            }
                            var c, f = v(e);
                            try {
                                for (f.s(); !(c = f.n()).done;) {
                                    var d = c.value;
                                    r[d] = l[d]
                                }
                            } catch (t) {
                                f.e(t)
                            } finally {
                                f.f()
                            }
                            return r
                        }
                    }, {
                        key: "createResolver",
                        value: function(t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [""],
                                a = arguments.length > 3 ? arguments[3] : void 0,
                                r = pe(this._resolverCache, t, i),
                                s = r.resolver;
                            return Object(n.Jb)(e) ? Object(n.M)(s, e, void 0, a) : s
                        }
                    }]), t
                }();

            function pe(t, e, i) {
                var a = t.get(e);
                a || (a = new Map, t.set(e, a));
                var r = i.join(),
                    s = a.get(r);
                s || (s = {
                    resolver: Object(n.cb)(e, i),
                    subPrefixes: i.filter((function(t) {
                        return !t.toLowerCase().includes("hover")
                    }))
                }, a.set(r, s));
                return s
            }
            var ge = function(t) {
                return Object(n.Jb)(t) && Object.getOwnPropertyNames(t).reduce((function(e, i) {
                    return e || Object(n.L)(t[i])
                }), !1)
            };

            function be(t, e) {
                var i, a = Object(n.db)(t),
                    r = a.isScriptable,
                    s = a.isIndexable,
                    o = v(e);
                try {
                    for (o.s(); !(i = o.n()).done;) {
                        var h = i.value,
                            l = r(h),
                            u = s(h),
                            c = (u || l) && t[h];
                        if (l && (Object(n.L)(c) || ge(c)) || u && Object(n.Cb)(c)) return !0
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return !1
            }
            var ye = ["top", "bottom", "left", "right", "chartArea"];

            function me(t, e) {
                return "top" === t || "bottom" === t || -1 === ye.indexOf(t) && "x" === e
            }

            function _e(t, e) {
                return function(i, n) {
                    return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
                }
            }

            function xe(t) {
                var e = t.chart,
                    i = e.options.animation;
                e.notifyPlugins("afterRender"), Object(n.d)(i && i.onComplete, [t], e)
            }

            function ke(t) {
                var e = t.chart,
                    i = e.options.animation;
                Object(n.d)(i && i.onProgress, [t], e)
            }

            function Oe(t) {
                return Object(n.J)() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
            }
            var we = {},
                je = function(t) {
                    var e = Oe(t);
                    return Object.values(we).filter((function(t) {
                        return t.canvas === e
                    })).pop()
                };

            function Me(t, e, i) {
                for (var n = 0, a = Object.keys(t); n < a.length; n++) {
                    var r = a[n],
                        s = +r;
                    if (s >= e) {
                        var o = t[r];
                        delete t[r], (i > 0 || s > e) && (t[s + i] = o)
                    }
                }
            }
            var Pe = function() {
                    function t(e, i) {
                        var a = this;
                        m(this, t);
                        var r = this.config = new ve(i),
                            s = Oe(e),
                            o = je(s);
                        if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
                        var h = r.createResolver(r.chartOptionScopes(), this.getContext());
                        this.platform = new(r.platform || function(t) {
                            return !Object(n.J)() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? Wt : ie
                        }(s)), this.platform.updateConfig(r);
                        var l = this.platform.acquireContext(s, h.aspectRatio),
                            u = l && l.canvas,
                            c = u && u.height,
                            f = u && u.width;
                        this.id = Object(n.fb)(), this.ctx = l, this.canvas = u, this.width = f, this.height = c, this._options = h, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ne, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Object(n.gb)((function(t) {
                            return a.update(t)
                        }), h.resizeDelay || 0), this._dataChanges = [], we[this.id] = this, l && u ? (k.listen(this, "complete", xe), k.listen(this, "progress", ke), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    }
                    return x(t, [{
                        key: "aspectRatio",
                        get: function() {
                            var t = this.options,
                                e = t.aspectRatio,
                                i = t.maintainAspectRatio,
                                a = this.width,
                                r = this.height,
                                s = this._aspectRatio;
                            return Object(n.Lb)(e) ? i && s ? s : r ? a / r : null : e
                        }
                    }, {
                        key: "data",
                        get: function() {
                            return this.config.data
                        },
                        set: function(t) {
                            this.config.data = t
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this._options
                        },
                        set: function(t) {
                            this.config.options = t
                        }
                    }, {
                        key: "_initialize",
                        value: function() {
                            return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Object(n.hb)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return Object(n.ib)(this.canvas, this.ctx), this
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            return k.stop(this), this
                        }
                    }, {
                        key: "resize",
                        value: function(t, e) {
                            k.running(this) ? this._resizeBeforeDraw = {
                                width: t,
                                height: e
                            } : this._resize(t, e)
                        }
                    }, {
                        key: "_resize",
                        value: function(t, e) {
                            var i = this.options,
                                a = this.canvas,
                                r = i.maintainAspectRatio && this.aspectRatio,
                                s = this.platform.getMaximumSize(a, t, e, r),
                                o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                                h = this.width ? "resize" : "attach";
                            this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, Object(n.hb)(this, o, !0) && (this.notifyPlugins("resize", {
                                size: s
                            }), Object(n.d)(i.onResize, [this, s], this), this.attached && this._doResize(h) && this.render())
                        }
                    }, {
                        key: "ensureScalesHaveIDs",
                        value: function() {
                            var t = this.options.scales || {};
                            Object(n.r)(t, (function(t, e) {
                                t.id = e
                            }))
                        }
                    }, {
                        key: "buildOrUpdateScales",
                        value: function() {
                            var t = this,
                                e = this.options,
                                i = e.scales,
                                a = this.scales,
                                r = Object.keys(a).reduce((function(t, e) {
                                    return t[e] = !1, t
                                }), {}),
                                s = [];
                            i && (s = s.concat(Object.keys(i).map((function(t) {
                                var e = i[t],
                                    n = oe(t, e),
                                    a = "r" === n,
                                    r = "x" === n;
                                return {
                                    options: e,
                                    dposition: a ? "chartArea" : r ? "bottom" : "left",
                                    dtype: a ? "radialLinear" : r ? "category" : "linear"
                                }
                            })))), Object(n.r)(s, (function(i) {
                                var s = i.options,
                                    o = s.id,
                                    h = oe(o, s),
                                    l = Object(n.Wb)(s.type, i.dtype);
                                void 0 !== s.position && me(s.position, h) === me(i.dposition) || (s.position = i.dposition), r[o] = !0;
                                var u = null;
                                o in a && a[o].type === l ? u = a[o] : (u = new(dt.getScale(l))({
                                    id: o,
                                    type: l,
                                    ctx: t.ctx,
                                    chart: t
                                }), a[u.id] = u);
                                u.init(s, e)
                            })), Object(n.r)(r, (function(t, e) {
                                t || delete a[e]
                            })), Object(n.r)(a, (function(e) {
                                Bt(t, e, e.options), zt(t, e)
                            }))
                        }
                    }, {
                        key: "_updateMetasets",
                        value: function() {
                            var t = this._metasets,
                                e = this.data.datasets.length,
                                i = t.length;
                            if (t.sort((function(t, e) {
                                    return t.index - e.index
                                })), i > e) {
                                for (var n = e; n < i; ++n) this._destroyDatasetMeta(n);
                                t.splice(e, i - e)
                            }
                            this._sortedMetasets = t.slice(0).sort(_e("order", "index"))
                        }
                    }, {
                        key: "_removeUnreferencedMetasets",
                        value: function() {
                            var t = this,
                                e = this._metasets,
                                i = this.data.datasets;
                            e.length > i.length && delete this._stacks, e.forEach((function(e, n) {
                                0 === i.filter((function(t) {
                                    return t === e._dataset
                                })).length && t._destroyDatasetMeta(n)
                            }))
                        }
                    }, {
                        key: "buildOrUpdateControllers",
                        value: function() {
                            var t, e, i = [],
                                a = this.data.datasets;
                            for (this._removeUnreferencedMetasets(), t = 0, e = a.length; t < e; t++) {
                                var r = a[t],
                                    s = this.getDatasetMeta(t),
                                    o = r.type || this.config.type;
                                if (s.type && s.type !== o && (this._destroyDatasetMeta(t), s = this.getDatasetMeta(t)), s.type = o, s.indexAxis = r.indexAxis || se(o, this.options), s.order = r.order || 0, s.index = t, s.label = "" + r.label, s.visible = this.isDatasetVisible(t), s.controller) s.controller.updateIndex(t), s.controller.linkScales();
                                else {
                                    var h = dt.getController(o),
                                        l = n.Eb.datasets[o],
                                        u = l.datasetElementType,
                                        c = l.dataElementType;
                                    Object.assign(h.prototype, {
                                        dataElementType: dt.getElement(c),
                                        datasetElementType: u && dt.getElement(u)
                                    }), s.controller = new h(this, t), i.push(s.controller)
                                }
                            }
                            return this._updateMetasets(), i
                        }
                    }, {
                        key: "_resetElements",
                        value: function() {
                            var t = this;
                            Object(n.r)(this.data.datasets, (function(e, i) {
                                t.getDatasetMeta(i).controller.reset()
                            }), this)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._resetElements(), this.notifyPlugins("reset")
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            var e = this.config;
                            e.update();
                            var i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                                a = this._animationsDisabled = !i.animation;
                            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 !== this.notifyPlugins("beforeUpdate", {
                                    mode: t,
                                    cancelable: !0
                                })) {
                                var r = this.buildOrUpdateControllers();
                                this.notifyPlugins("beforeElementsUpdate");
                                for (var s = 0, o = 0, h = this.data.datasets.length; o < h; o++) {
                                    var l = this.getDatasetMeta(o).controller,
                                        u = !a && -1 === r.indexOf(l);
                                    l.buildOrUpdateElements(u), s = Math.max(+l.getMaxOverflow(), s)
                                }
                                s = this._minPadding = i.layout.autoPadding ? s : 0, this._updateLayout(s), a || Object(n.r)(r, (function(t) {
                                    t.reset()
                                })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                                    mode: t
                                }), this._layers.sort(_e("z", "_idx"));
                                var c = this._active,
                                    f = this._lastEvent;
                                f ? this._eventHandler(f, !0) : c.length && this._updateHoverStyles(c, c, !0), this.render()
                            }
                        }
                    }, {
                        key: "_updateScales",
                        value: function() {
                            var t = this;
                            Object(n.r)(this.scales, (function(e) {
                                Ft(t, e)
                            })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
                        }
                    }, {
                        key: "_checkEventBindings",
                        value: function() {
                            var t = this.options,
                                e = new Set(Object.keys(this._listeners)),
                                i = new Set(t.events);
                            Object(n.jb)(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
                        }
                    }, {
                        key: "_updateHiddenIndices",
                        value: function() {
                            var t, e = this._hiddenIndices,
                                i = v(this._getUniformDataChanges() || []);
                            try {
                                for (i.s(); !(t = i.n()).done;) {
                                    var n = t.value,
                                        a = n.method,
                                        r = n.start,
                                        s = n.count;
                                    Me(e, r, "_removeElements" === a ? -s : s)
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                        }
                    }, {
                        key: "_getUniformDataChanges",
                        value: function() {
                            var t = this._dataChanges;
                            if (t && t.length) {
                                this._dataChanges = [];
                                for (var e = this.data.datasets.length, i = function(e) {
                                        return new Set(t.filter((function(t) {
                                            return t[0] === e
                                        })).map((function(t, e) {
                                            return e + "," + t.splice(1).join(",")
                                        })))
                                    }, a = i(0), r = 1; r < e; r++)
                                    if (!Object(n.jb)(a, i(r))) return;
                                return Array.from(a).map((function(t) {
                                    return t.split(",")
                                })).map((function(t) {
                                    return {
                                        method: t[1],
                                        start: +t[2],
                                        count: +t[3]
                                    }
                                }))
                            }
                        }
                    }, {
                        key: "_updateLayout",
                        value: function(t) {
                            var e = this;
                            if (!1 !== this.notifyPlugins("beforeLayout", {
                                    cancelable: !0
                                })) {
                                Vt(this, this.width, this.height, t);
                                var i = this.chartArea,
                                    a = i.width <= 0 || i.height <= 0;
                                this._layers = [], Object(n.r)(this.boxes, (function(t) {
                                    var i;
                                    a && "chartArea" === t.position || (t.configure && t.configure(), (i = e._layers).push.apply(i, g(t._layers())))
                                }), this), this._layers.forEach((function(t, e) {
                                    t._idx = e
                                })), this.notifyPlugins("afterLayout")
                            }
                        }
                    }, {
                        key: "_updateDatasets",
                        value: function(t) {
                            if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                                    mode: t,
                                    cancelable: !0
                                })) {
                                for (var e = 0, i = this.data.datasets.length; e < i; ++e) this.getDatasetMeta(e).controller.configure();
                                for (var a = 0, r = this.data.datasets.length; a < r; ++a) this._updateDataset(a, Object(n.L)(t) ? t({
                                    datasetIndex: a
                                }) : t);
                                this.notifyPlugins("afterDatasetsUpdate", {
                                    mode: t
                                })
                            }
                        }
                    }, {
                        key: "_updateDataset",
                        value: function(t, e) {
                            var i = this.getDatasetMeta(t),
                                n = {
                                    meta: i,
                                    index: t,
                                    mode: e,
                                    cancelable: !0
                                };
                            !1 !== this.notifyPlugins("beforeDatasetUpdate", n) && (i.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            !1 !== this.notifyPlugins("beforeRender", {
                                cancelable: !0
                            }) && (k.has(this) ? this.attached && !k.running(this) && k.start(this) : (this.draw(), xe({
                                chart: this
                            })))
                        }
                    }, {
                        key: "draw",
                        value: function() {
                            var t;
                            if (this._resizeBeforeDraw) {
                                var e = this._resizeBeforeDraw,
                                    i = e.width,
                                    n = e.height;
                                this._resize(i, n), this._resizeBeforeDraw = null
                            }
                            if (this.clear(), !(this.width <= 0 || this.height <= 0) && !1 !== this.notifyPlugins("beforeDraw", {
                                    cancelable: !0
                                })) {
                                var a = this._layers;
                                for (t = 0; t < a.length && a[t].z <= 0; ++t) a[t].draw(this.chartArea);
                                for (this._drawDatasets(); t < a.length; ++t) a[t].draw(this.chartArea);
                                this.notifyPlugins("afterDraw")
                            }
                        }
                    }, {
                        key: "_getSortedDatasetMetas",
                        value: function(t) {
                            var e, i, n = this._sortedMetasets,
                                a = [];
                            for (e = 0, i = n.length; e < i; ++e) {
                                var r = n[e];
                                t && !r.visible || a.push(r)
                            }
                            return a
                        }
                    }, {
                        key: "getSortedVisibleDatasetMetas",
                        value: function() {
                            return this._getSortedDatasetMetas(!0)
                        }
                    }, {
                        key: "_drawDatasets",
                        value: function() {
                            if (!1 !== this.notifyPlugins("beforeDatasetsDraw", {
                                    cancelable: !0
                                })) {
                                for (var t = this.getSortedVisibleDatasetMetas(), e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                                this.notifyPlugins("afterDatasetsDraw")
                            }
                        }
                    }, {
                        key: "_drawDataset",
                        value: function(t) {
                            var e = this.ctx,
                                i = t._clip,
                                a = !i.disabled,
                                r = this.chartArea,
                                s = {
                                    meta: t,
                                    index: t.index,
                                    cancelable: !0
                                };
                            !1 !== this.notifyPlugins("beforeDatasetDraw", s) && (a && Object(n.m)(e, {
                                left: !1 === i.left ? 0 : r.left - i.left,
                                right: !1 === i.right ? this.width : r.right + i.right,
                                top: !1 === i.top ? 0 : r.top - i.top,
                                bottom: !1 === i.bottom ? this.height : r.bottom + i.bottom
                            }), t.controller.draw(), a && Object(n.o)(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s))
                        }
                    }, {
                        key: "isPointInArea",
                        value: function(t) {
                            return Object(n.a)(t, this.chartArea, this._minPadding)
                        }
                    }, {
                        key: "getElementsAtEventForMode",
                        value: function(t, e, i, n) {
                            var a = wt.modes[e];
                            return "function" == typeof a ? a(this, t, i, n) : []
                        }
                    }, {
                        key: "getDatasetMeta",
                        value: function(t) {
                            var e = this.data.datasets[t],
                                i = this._metasets,
                                n = i.filter((function(t) {
                                    return t && t._dataset === e
                                })).pop();
                            return n || (n = {
                                type: null,
                                data: [],
                                dataset: null,
                                controller: null,
                                hidden: null,
                                xAxisID: null,
                                yAxisID: null,
                                order: e && e.order || 0,
                                index: t,
                                _dataset: e,
                                _parsed: [],
                                _sorted: !1
                            }, i.push(n)), n
                        }
                    }, {
                        key: "getContext",
                        value: function() {
                            return this.$context || (this.$context = Object(n.Ib)(null, {
                                chart: this,
                                type: "chart"
                            }))
                        }
                    }, {
                        key: "getVisibleDatasetCount",
                        value: function() {
                            return this.getSortedVisibleDatasetMetas().length
                        }
                    }, {
                        key: "isDatasetVisible",
                        value: function(t) {
                            var e = this.data.datasets[t];
                            if (!e) return !1;
                            var i = this.getDatasetMeta(t);
                            return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
                        }
                    }, {
                        key: "setDatasetVisibility",
                        value: function(t, e) {
                            this.getDatasetMeta(t).hidden = !e
                        }
                    }, {
                        key: "toggleDataVisibility",
                        value: function(t) {
                            this._hiddenIndices[t] = !this._hiddenIndices[t]
                        }
                    }, {
                        key: "getDataVisibility",
                        value: function(t) {
                            return !this._hiddenIndices[t]
                        }
                    }, {
                        key: "_updateVisibility",
                        value: function(t, e, i) {
                            var a = i ? "show" : "hide",
                                r = this.getDatasetMeta(t),
                                s = r.controller._resolveAnimations(void 0, a);
                            Object(n.Kb)(e) ? (r.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), s.update(r, {
                                visible: i
                            }), this.update((function(e) {
                                return e.datasetIndex === t ? a : void 0
                            })))
                        }
                    }, {
                        key: "hide",
                        value: function(t, e) {
                            this._updateVisibility(t, e, !1)
                        }
                    }, {
                        key: "show",
                        value: function(t, e) {
                            this._updateVisibility(t, e, !0)
                        }
                    }, {
                        key: "_destroyDatasetMeta",
                        value: function(t) {
                            var e = this._metasets[t];
                            e && e.controller && e.controller._destroy(), delete this._metasets[t]
                        }
                    }, {
                        key: "_stop",
                        value: function() {
                            var t, e;
                            for (this.stop(), k.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.notifyPlugins("beforeDestroy");
                            var t = this.canvas,
                                e = this.ctx;
                            this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Object(n.ib)(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete we[this.id], this.notifyPlugins("afterDestroy")
                        }
                    }, {
                        key: "toBase64Image",
                        value: function() {
                            var t;
                            return (t = this.canvas).toDataURL.apply(t, arguments)
                        }
                    }, {
                        key: "bindEvents",
                        value: function() {
                            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
                        }
                    }, {
                        key: "bindUserEvents",
                        value: function() {
                            var t = this,
                                e = this._listeners,
                                i = this.platform,
                                a = function(e, i, n) {
                                    e.offsetX = i, e.offsetY = n, t._eventHandler(e)
                                };
                            Object(n.r)(this.options.events, (function(n) {
                                return function(n, a) {
                                    i.addEventListener(t, n, a), e[n] = a
                                }(n, a)
                            }))
                        }
                    }, {
                        key: "bindResponsiveEvents",
                        value: function() {
                            var t = this;
                            this._responsiveListeners || (this._responsiveListeners = {});
                            var e, i = this._responsiveListeners,
                                n = this.platform,
                                a = function(e, a) {
                                    n.addEventListener(t, e, a), i[e] = a
                                },
                                r = function(e, a) {
                                    i[e] && (n.removeEventListener(t, e, a), delete i[e])
                                },
                                s = function(e, i) {
                                    t.canvas && t.resize(e, i)
                                },
                                o = function i() {
                                    r("attach", i), t.attached = !0, t.resize(), a("resize", s), a("detach", e)
                                };
                            e = function() {
                                t.attached = !1, r("resize", s), t._stop(), t._resize(0, 0), a("attach", o)
                            }, n.isAttached(this.canvas) ? o() : e()
                        }
                    }, {
                        key: "unbindEvents",
                        value: function() {
                            var t = this;
                            Object(n.r)(this._listeners, (function(e, i) {
                                t.platform.removeEventListener(t, i, e)
                            })), this._listeners = {}, Object(n.r)(this._responsiveListeners, (function(e, i) {
                                t.platform.removeEventListener(t, i, e)
                            })), this._responsiveListeners = void 0
                        }
                    }, {
                        key: "updateHoverStyle",
                        value: function(t, e, i) {
                            var n, a, r, s = i ? "set" : "remove";
                            for ("dataset" === e && this.getDatasetMeta(t[0].datasetIndex).controller["_" + s + "DatasetHoverStyle"](), a = 0, r = t.length; a < r; ++a) {
                                var o = (n = t[a]) && this.getDatasetMeta(n.datasetIndex).controller;
                                o && o[s + "HoverStyle"](n.element, n.datasetIndex, n.index)
                            }
                        }
                    }, {
                        key: "getActiveElements",
                        value: function() {
                            return this._active || []
                        }
                    }, {
                        key: "setActiveElements",
                        value: function(t) {
                            var e = this,
                                i = this._active || [],
                                a = t.map((function(t) {
                                    var i = t.datasetIndex,
                                        n = t.index,
                                        a = e.getDatasetMeta(i);
                                    if (!a) throw new Error("No dataset found at index " + i);
                                    return {
                                        datasetIndex: i,
                                        element: a.data[n],
                                        index: n
                                    }
                                }));
                            !Object(n.kb)(a, i) && (this._active = a, this._lastEvent = null, this._updateHoverStyles(a, i))
                        }
                    }, {
                        key: "notifyPlugins",
                        value: function(t, e, i) {
                            return this._plugins.notify(this, t, e, i)
                        }
                    }, {
                        key: "_updateHoverStyles",
                        value: function(t, e, i) {
                            var n = this.options.hover,
                                a = function(t, e) {
                                    return t.filter((function(t) {
                                        return !e.some((function(e) {
                                            return t.datasetIndex === e.datasetIndex && t.index === e.index
                                        }))
                                    }))
                                },
                                r = a(e, t),
                                s = i ? t : a(t, e);
                            r.length && this.updateHoverStyle(r, n.mode, !1), s.length && n.mode && this.updateHoverStyle(s, n.mode, !0)
                        }
                    }, {
                        key: "_eventHandler",
                        value: function(t, e) {
                            var i = this,
                                n = {
                                    event: t,
                                    replay: e,
                                    cancelable: !0,
                                    inChartArea: this.isPointInArea(t)
                                },
                                a = function(e) {
                                    return (e.options.events || i.options.events).includes(t.native.type)
                                };
                            if (!1 !== this.notifyPlugins("beforeEvent", n, a)) {
                                var r = this._handleEvent(t, e, n.inChartArea);
                                return n.cancelable = !1, this.notifyPlugins("afterEvent", n, a), (r || n.changed) && this.render(), this
                            }
                        }
                    }, {
                        key: "_handleEvent",
                        value: function(t, e, i) {
                            var a = this._active,
                                r = void 0 === a ? [] : a,
                                s = this.options,
                                o = e,
                                h = this._getActiveElements(t, r, i, o),
                                l = Object(n.lb)(t),
                                u = function(t, e, i, n) {
                                    return i && "mouseout" !== t.type ? n ? e : t : null
                                }(t, this._lastEvent, i, l);
                            i && (this._lastEvent = null, Object(n.d)(s.onHover, [t, h, this], this), l && Object(n.d)(s.onClick, [t, h, this], this));
                            var c = !Object(n.kb)(h, r);
                            return (c || e) && (this._active = h, this._updateHoverStyles(h, r, e)), this._lastEvent = u, c
                        }
                    }, {
                        key: "_getActiveElements",
                        value: function(t, e, i, n) {
                            if ("mouseout" === t.type) return [];
                            if (!i) return e;
                            var a = this.options.hover;
                            return this.getElementsAtEventForMode(t, a.mode, a, n)
                        }
                    }]), t
                }(),
                Se = function() {
                    return Object(n.r)(Pe.instances, (function(t) {
                        return t._plugins.invalidate()
                    }))
                };

            function Ee(t, e, i) {
                var a = e.startAngle,
                    r = e.pixelMargin,
                    s = e.x,
                    o = e.y,
                    h = e.outerRadius,
                    l = e.innerRadius,
                    u = r / h;
                t.beginPath(), t.arc(s, o, h, a - u, i + u), l > r ? (u = r / l, t.arc(s, o, l, i + u, a - u, !0)) : t.arc(s, o, r, i + n.i, a - n.i), t.closePath(), t.clip()
            }

            function Ae(t, e, i, a) {
                var r, s = (r = t.options.borderRadius, Object(n.nb)(r, ["outerStart", "outerEnd", "innerStart", "innerEnd"])),
                    o = (i - e) / 2,
                    h = Math.min(o, a * e / 2),
                    l = function(t) {
                        var e = (i - Math.min(o, t)) * a / 2;
                        return Object(n.f)(t, 0, Math.min(o, e))
                    };
                return {
                    outerStart: l(s.outerStart),
                    outerEnd: l(s.outerEnd),
                    innerStart: Object(n.f)(s.innerStart, 0, h),
                    innerEnd: Object(n.f)(s.innerEnd, 0, h)
                }
            }

            function De(t, e, i, n) {
                return {
                    x: i + t * Math.cos(e),
                    y: n + t * Math.sin(e)
                }
            }

            function Re(t, e, i, a, r, s) {
                var o = e.x,
                    h = e.y,
                    l = e.startAngle,
                    u = e.pixelMargin,
                    c = e.innerRadius,
                    f = Math.max(e.outerRadius + a + i - u, 0),
                    d = c > 0 ? c + a + i + u : 0,
                    v = 0,
                    p = r - l;
                if (a) {
                    var g = ((c > 0 ? c - a : 0) + (f > 0 ? f - a : 0)) / 2;
                    v = (p - (0 !== g ? p * g / (g + a) : p)) / 2
                }
                var b = (p - Math.max(.001, p * f - i / n.q) / f) / 2,
                    y = l + b + v,
                    m = r - b - v,
                    _ = Ae(e, d, f, m - y),
                    x = _.outerStart,
                    k = _.outerEnd,
                    O = _.innerStart,
                    w = _.innerEnd,
                    j = f - x,
                    M = f - k,
                    P = y + x / j,
                    S = m - k / M,
                    E = d + O,
                    A = d + w,
                    D = y + O / E,
                    R = m - w / A;
                if (t.beginPath(), s) {
                    if (t.arc(o, h, f, P, S), k > 0) {
                        var L = De(M, S, o, h);
                        t.arc(L.x, L.y, k, S, m + n.i)
                    }
                    var C = De(A, m, o, h);
                    if (t.lineTo(C.x, C.y), w > 0) {
                        var T = De(A, R, o, h);
                        t.arc(T.x, T.y, w, m + n.i, R + Math.PI)
                    }
                    if (t.arc(o, h, d, m - w / d, y + O / d, !0), O > 0) {
                        var I = De(E, D, o, h);
                        t.arc(I.x, I.y, O, D + Math.PI, y - n.i)
                    }
                    var z = De(j, y, o, h);
                    if (t.lineTo(z.x, z.y), x > 0) {
                        var F = De(j, P, o, h);
                        t.arc(F.x, F.y, x, y - n.i, P)
                    }
                } else {
                    t.moveTo(o, h);
                    var B = Math.cos(P) * f + o,
                        V = Math.sin(P) * f + h;
                    t.lineTo(B, V);
                    var N = Math.cos(S) * f + o,
                        W = Math.sin(S) * f + h;
                    t.lineTo(N, W)
                }
                t.closePath()
            }

            function Le(t, e, i, a, r, s) {
                var o = e.options,
                    h = o.borderWidth,
                    l = o.borderJoinStyle,
                    u = "inner" === o.borderAlign;
                h && (u ? (t.lineWidth = 2 * h, t.lineJoin = l || "round") : (t.lineWidth = h, t.lineJoin = l || "bevel"), e.fullCircles && function(t, e, i) {
                    var a, r = e.x,
                        s = e.y,
                        o = e.startAngle,
                        h = e.pixelMargin,
                        l = e.fullCircles,
                        u = Math.max(e.outerRadius - h, 0),
                        c = e.innerRadius + h;
                    for (i && Ee(t, e, o + n.u), t.beginPath(), t.arc(r, s, c, o + n.u, o, !0), a = 0; a < l; ++a) t.stroke();
                    for (t.beginPath(), t.arc(r, s, u, o, o + n.u), a = 0; a < l; ++a) t.stroke()
                }(t, e, u), u && Ee(t, e, r), Re(t, e, i, a, r, s), t.stroke())
            }
            Object.defineProperties(Pe, {
                defaults: {
                    enumerable: !0,
                    value: n.Eb
                },
                instances: {
                    enumerable: !0,
                    value: we
                },
                overrides: {
                    enumerable: !0,
                    value: n.v
                },
                registry: {
                    enumerable: !0,
                    value: dt
                },
                version: {
                    enumerable: !0,
                    value: "3.9.1"
                },
                getChart: {
                    enumerable: !0,
                    value: je
                },
                register: {
                    enumerable: !0,
                    value: function() {
                        dt.add.apply(dt, arguments), Se()
                    }
                },
                unregister: {
                    enumerable: !0,
                    value: function() {
                        dt.remove.apply(dt, arguments), Se()
                    }
                }
            });
            var Ce = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).options = void 0, n.circumference = void 0, n.startAngle = void 0, n.endAngle = void 0, n.innerRadius = void 0, n.outerRadius = void 0, n.pixelMargin = 0, n.fullCircles = 0, t && Object.assign(u(n), t), n
                }
                return x(i, [{
                    key: "inRange",
                    value: function(t, e, i) {
                        var a = this.getProps(["x", "y"], i),
                            r = Object(n.D)(a, {
                                x: t,
                                y: e
                            }),
                            s = r.angle,
                            o = r.distance,
                            h = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
                            l = h.startAngle,
                            u = h.endAngle,
                            c = h.innerRadius,
                            f = h.outerRadius,
                            d = h.circumference,
                            v = this.options.spacing / 2,
                            p = Object(n.Wb)(d, u - l) >= n.u || Object(n.Qb)(s, l, u),
                            g = Object(n.mb)(o, c + v, f + v);
                        return p && g
                    }
                }, {
                    key: "getCenterPoint",
                    value: function(t) {
                        var e = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t),
                            i = e.x,
                            n = e.y,
                            a = e.startAngle,
                            r = e.endAngle,
                            s = e.innerRadius,
                            o = e.outerRadius,
                            h = this.options,
                            l = h.offset,
                            u = (a + r) / 2,
                            c = (s + o + h.spacing + l) / 2;
                        return {
                            x: i + Math.cos(u) * c,
                            y: n + Math.sin(u) * c
                        }
                    }
                }, {
                    key: "tooltipPosition",
                    value: function(t) {
                        return this.getCenterPoint(t)
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        var e = this.options,
                            i = this.circumference,
                            a = (e.offset || 0) / 2,
                            r = (e.spacing || 0) / 2,
                            s = e.circular;
                        if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > n.u ? Math.floor(i / n.u) : 0, !(0 === i || this.innerRadius < 0 || this.outerRadius < 0)) {
                            t.save();
                            var o = 0;
                            if (a) {
                                o = a / 2;
                                var h = (this.startAngle + this.endAngle) / 2;
                                t.translate(Math.cos(h) * o, Math.sin(h) * o), this.circumference >= n.q && (o = a)
                            }
                            t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
                            var l = function(t, e, i, a, r) {
                                var s = e.fullCircles,
                                    o = e.startAngle,
                                    h = e.circumference,
                                    l = e.endAngle;
                                if (s) {
                                    Re(t, e, i, a, o + n.u, r);
                                    for (var u = 0; u < s; ++u) t.fill();
                                    isNaN(h) || (l = o + h % n.u, h % n.u == 0 && (l += n.u))
                                }
                                return Re(t, e, i, a, l, r), t.fill(), l
                            }(t, this, o, r, s);
                            Le(t, this, o, r, l, s), t.restore()
                        }
                    }
                }]), i
            }(tt);

            function Te(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
                t.lineCap = Object(n.Wb)(i.borderCapStyle, e.borderCapStyle), t.setLineDash(Object(n.Wb)(i.borderDash, e.borderDash)), t.lineDashOffset = Object(n.Wb)(i.borderDashOffset, e.borderDashOffset), t.lineJoin = Object(n.Wb)(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = Object(n.Wb)(i.borderWidth, e.borderWidth), t.strokeStyle = Object(n.Wb)(i.borderColor, e.borderColor)
            }

            function Ie(t, e, i) {
                t.lineTo(i.x, i.y)
            }

            function ze(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = t.length,
                    a = i.start,
                    r = void 0 === a ? 0 : a,
                    s = i.end,
                    o = void 0 === s ? n - 1 : s,
                    h = e.start,
                    l = e.end,
                    u = Math.max(r, h),
                    c = Math.min(o, l),
                    f = r < h && o < h || r > l && o > l;
                return {
                    count: n,
                    start: u,
                    loop: e.loop,
                    ilen: c < u && !f ? n + c - u : c - u
                }
            }

            function Fe(t, e, i, a) {
                var r, s, o, h = e.points,
                    l = e.options,
                    u = ze(h, i, a),
                    c = u.count,
                    f = u.start,
                    d = u.loop,
                    v = u.ilen,
                    p = function(t) {
                        return t.stepped ? n.ub : t.tension || "monotone" === t.cubicInterpolationMode ? n.vb : Ie
                    }(l),
                    g = a || {},
                    b = g.move,
                    y = void 0 === b || b,
                    m = g.reverse;
                for (r = 0; r <= v; ++r)(s = h[(f + (m ? v - r : r)) % c]).skip || (y ? (t.moveTo(s.x, s.y), y = !1) : p(t, o, s, m, l.stepped), o = s);
                return d && p(t, o, s = h[(f + (m ? v : 0)) % c], m, l.stepped), !!d
            }

            function Be(t, e, i, n) {
                var a, r, s, o, h, l, u = e.points,
                    c = ze(u, i, n),
                    f = c.count,
                    d = c.start,
                    v = c.ilen,
                    p = n || {},
                    g = p.move,
                    b = void 0 === g || g,
                    y = p.reverse,
                    m = 0,
                    _ = 0,
                    x = function(t) {
                        return (d + (y ? v - t : t)) % f
                    },
                    k = function() {
                        o !== h && (t.lineTo(m, h), t.lineTo(m, o), t.lineTo(m, l))
                    };
                for (b && (r = u[x(0)], t.moveTo(r.x, r.y)), a = 0; a <= v; ++a)
                    if (!(r = u[x(a)]).skip) {
                        var O = r.x,
                            w = r.y,
                            j = 0 | O;
                        j === s ? (w < o ? o = w : w > h && (h = w), m = (_ * m + O) / ++_) : (k(), t.lineTo(O, w), s = j, _ = 0, o = h = w), l = w
                    } k()
            }

            function Ve(t) {
                var e = t.options,
                    i = e.borderDash && e.borderDash.length;
                return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Be : Fe
            }
            Ce.id = "arc", Ce.defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderJoinStyle: void 0,
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0,
                circular: !0
            }, Ce.defaultRoutes = {
                backgroundColor: "backgroundColor"
            };
            var Ne = "function" == typeof Path2D;

            function We(t, e, i, n) {
                Ne && !e.options.segment ? function(t, e, i, n) {
                    var a = e._path;
                    a || (a = e._path = new Path2D, e.path(a, i, n) && a.closePath()), Te(t, e.options), t.stroke(a)
                }(t, e, i, n) : function(t, e, i, n) {
                    var a, r = e.segments,
                        s = e.options,
                        o = Ve(e),
                        h = v(r);
                    try {
                        for (h.s(); !(a = h.n()).done;) {
                            var l = a.value;
                            Te(t, s, l.style), t.beginPath(), o(t, e, l, {
                                start: i,
                                end: i + n - 1
                            }) && t.closePath(), t.stroke()
                        }
                    } catch (t) {
                        h.e(t)
                    } finally {
                        h.f()
                    }
                }(t, e, i, n)
            }
            var Ue = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).animated = !0, n.options = void 0, n._chart = void 0, n._loop = void 0, n._fullLoop = void 0, n._path = void 0, n._points = void 0, n._segments = void 0, n._decimated = !1, n._pointsUpdated = !1, n._datasetIndex = void 0, t && Object.assign(u(n), t), n
                }
                return x(i, [{
                    key: "updateControlPoints",
                    value: function(t, e) {
                        var i = this.options;
                        if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                            var a = i.spanGaps ? this._loop : this._fullLoop;
                            Object(n.ob)(this._points, i, t, a, e), this._pointsUpdated = !0
                        }
                    }
                }, {
                    key: "points",
                    get: function() {
                        return this._points
                    },
                    set: function(t) {
                        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
                    }
                }, {
                    key: "segments",
                    get: function() {
                        return this._segments || (this._segments = Object(n.pb)(this, this.options.segment))
                    }
                }, {
                    key: "first",
                    value: function() {
                        var t = this.segments,
                            e = this.points;
                        return t.length && e[t[0].start]
                    }
                }, {
                    key: "last",
                    value: function() {
                        var t = this.segments,
                            e = this.points,
                            i = t.length;
                        return i && e[t[i - 1].end]
                    }
                }, {
                    key: "interpolate",
                    value: function(t, e) {
                        var i = this.options,
                            a = t[e],
                            r = this.points,
                            s = Object(n.qb)(this, {
                                property: e,
                                start: a,
                                end: a
                            });
                        if (s.length) {
                            var o, h, l = [],
                                u = function(t) {
                                    return t.stepped ? n.rb : t.tension || "monotone" === t.cubicInterpolationMode ? n.sb : n.tb
                                }(i);
                            for (o = 0, h = s.length; o < h; ++o) {
                                var c = s[o],
                                    f = c.start,
                                    d = c.end,
                                    v = r[f],
                                    p = r[d];
                                if (v !== p) {
                                    var g = u(v, p, Math.abs((a - v[e]) / (p[e] - v[e])), i.stepped);
                                    g[e] = t[e], l.push(g)
                                } else l.push(v)
                            }
                            return 1 === l.length ? l[0] : l
                        }
                    }
                }, {
                    key: "pathSegment",
                    value: function(t, e, i) {
                        return Ve(this)(t, this, e, i)
                    }
                }, {
                    key: "path",
                    value: function(t, e, i) {
                        var n = this.segments,
                            a = Ve(this),
                            r = this._loop;
                        e = e || 0, i = i || this.points.length - e;
                        var s, o = v(n);
                        try {
                            for (o.s(); !(s = o.n()).done;) {
                                r &= a(t, this, s.value, {
                                    start: e,
                                    end: e + i - 1
                                })
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                        return !!r
                    }
                }, {
                    key: "draw",
                    value: function(t, e, i, n) {
                        var a = this.options || {};
                        (this.points || []).length && a.borderWidth && (t.save(), We(t, this, i, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
                    }
                }]), i
            }(tt);

            function He(t, e, i, n) {
                var a = t.options,
                    r = t.getProps([i], n)[i];
                return Math.abs(e - r) < a.radius + a.hitRadius
            }
            Ue.id = "line", Ue.defaults = {
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                borderWidth: 3,
                capBezierPoints: !0,
                cubicInterpolationMode: "default",
                fill: !1,
                spanGaps: !1,
                stepped: !1,
                tension: 0
            }, Ue.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            }, Ue.descriptors = {
                _scriptable: !0,
                _indexable: function(t) {
                    return "borderDash" !== t && "fill" !== t
                }
            };
            var Ye = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).options = void 0, n.parsed = void 0, n.skip = void 0, n.stop = void 0, t && Object.assign(u(n), t), n
                }
                return x(i, [{
                    key: "inRange",
                    value: function(t, e, i) {
                        var n = this.options,
                            a = this.getProps(["x", "y"], i),
                            r = a.x,
                            s = a.y;
                        return Math.pow(t - r, 2) + Math.pow(e - s, 2) < Math.pow(n.hitRadius + n.radius, 2)
                    }
                }, {
                    key: "inXRange",
                    value: function(t, e) {
                        return He(this, t, "x", e)
                    }
                }, {
                    key: "inYRange",
                    value: function(t, e) {
                        return He(this, t, "y", e)
                    }
                }, {
                    key: "getCenterPoint",
                    value: function(t) {
                        var e = this.getProps(["x", "y"], t);
                        return {
                            x: e.x,
                            y: e.y
                        }
                    }
                }, {
                    key: "size",
                    value: function(t) {
                        var e = (t = t || this.options || {}).radius || 0;
                        return 2 * ((e = Math.max(e, e && t.hoverRadius || 0)) + (e && t.borderWidth || 0))
                    }
                }, {
                    key: "draw",
                    value: function(t, e) {
                        var i = this.options;
                        this.skip || i.radius < .1 || !Object(n.a)(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Object(n.wb)(t, i, this.x, this.y))
                    }
                }, {
                    key: "getRange",
                    value: function() {
                        var t = this.options || {};
                        return t.radius + t.hitRadius
                    }
                }]), i
            }(tt);

            function $e(t, e) {
                var i, n, a, r, s, o = t.getProps(["x", "y", "base", "width", "height"], e),
                    h = o.x,
                    l = o.y,
                    u = o.base,
                    c = o.width,
                    f = o.height;
                return t.horizontal ? (s = f / 2, i = Math.min(h, u), n = Math.max(h, u), a = l - s, r = l + s) : (i = h - (s = c / 2), n = h + s, a = Math.min(l, u), r = Math.max(l, u)), {
                    left: i,
                    top: a,
                    right: n,
                    bottom: r
                }
            }

            function Xe(t, e, i, a) {
                return t ? 0 : Object(n.f)(e, i, a)
            }

            function Je(t) {
                var e = $e(t),
                    i = e.right - e.left,
                    a = e.bottom - e.top,
                    r = function(t, e, i) {
                        var a = t.options.borderWidth,
                            r = t.borderSkipped,
                            s = Object(n.yb)(a);
                        return {
                            t: Xe(r.top, s.top, 0, i),
                            r: Xe(r.right, s.right, 0, e),
                            b: Xe(r.bottom, s.bottom, 0, i),
                            l: Xe(r.left, s.left, 0, e)
                        }
                    }(t, i / 2, a / 2),
                    s = function(t, e, i) {
                        var a = t.getProps(["enableBorderRadius"]).enableBorderRadius,
                            r = t.options.borderRadius,
                            s = Object(n.zb)(r),
                            o = Math.min(e, i),
                            h = t.borderSkipped,
                            l = a || Object(n.Jb)(r);
                        return {
                            topLeft: Xe(!l || h.top || h.left, s.topLeft, 0, o),
                            topRight: Xe(!l || h.top || h.right, s.topRight, 0, o),
                            bottomLeft: Xe(!l || h.bottom || h.left, s.bottomLeft, 0, o),
                            bottomRight: Xe(!l || h.bottom || h.right, s.bottomRight, 0, o)
                        }
                    }(t, i / 2, a / 2);
                return {
                    outer: {
                        x: e.left,
                        y: e.top,
                        w: i,
                        h: a,
                        radius: s
                    },
                    inner: {
                        x: e.left + r.l,
                        y: e.top + r.t,
                        w: i - r.l - r.r,
                        h: a - r.t - r.b,
                        radius: {
                            topLeft: Math.max(0, s.topLeft - Math.max(r.t, r.l)),
                            topRight: Math.max(0, s.topRight - Math.max(r.t, r.r)),
                            bottomLeft: Math.max(0, s.bottomLeft - Math.max(r.b, r.l)),
                            bottomRight: Math.max(0, s.bottomRight - Math.max(r.b, r.r))
                        }
                    }
                }
            }

            function Ge(t, e, i, a) {
                var r = null === e,
                    s = null === i,
                    o = t && !(r && s) && $e(t, a);
                return o && (r || Object(n.mb)(e, o.left, o.right)) && (s || Object(n.mb)(i, o.top, o.bottom))
            }

            function qe(t, e) {
                t.rect(e.x, e.y, e.w, e.h)
            }

            function Ke(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = t.x !== i.x ? -e : 0,
                    a = t.y !== i.y ? -e : 0,
                    r = (t.x + t.w !== i.x + i.w ? e : 0) - n,
                    s = (t.y + t.h !== i.y + i.h ? e : 0) - a;
                return {
                    x: t.x + n,
                    y: t.y + a,
                    w: t.w + r,
                    h: t.h + s,
                    radius: t.radius
                }
            }
            Ye.id = "point", Ye.defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
            }, Ye.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            var Ze = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).options = void 0, n.horizontal = void 0, n.base = void 0, n.width = void 0, n.height = void 0, n.inflateAmount = void 0, t && Object.assign(u(n), t), n
                }
                return x(i, [{
                    key: "draw",
                    value: function(t) {
                        var e, i = this.inflateAmount,
                            a = this.options,
                            r = a.borderColor,
                            s = a.backgroundColor,
                            o = Je(this),
                            h = o.inner,
                            l = o.outer,
                            u = (e = l.radius).topLeft || e.topRight || e.bottomLeft || e.bottomRight ? n.xb : qe;
                        t.save(), l.w === h.w && l.h === h.h || (t.beginPath(), u(t, Ke(l, i, h)), t.clip(), u(t, Ke(h, -i, l)), t.fillStyle = r, t.fill("evenodd")), t.beginPath(), u(t, Ke(h, i)), t.fillStyle = s, t.fill(), t.restore()
                    }
                }, {
                    key: "inRange",
                    value: function(t, e, i) {
                        return Ge(this, t, e, i)
                    }
                }, {
                    key: "inXRange",
                    value: function(t, e) {
                        return Ge(this, t, null, e)
                    }
                }, {
                    key: "inYRange",
                    value: function(t, e) {
                        return Ge(this, null, t, e)
                    }
                }, {
                    key: "getCenterPoint",
                    value: function(t) {
                        var e = this.getProps(["x", "y", "base", "horizontal"], t),
                            i = e.x,
                            n = e.y,
                            a = e.base,
                            r = e.horizontal;
                        return {
                            x: r ? (i + a) / 2 : i,
                            y: r ? n : (n + a) / 2
                        }
                    }
                }, {
                    key: "getRange",
                    value: function(t) {
                        return "x" === t ? this.width / 2 : this.height / 2
                    }
                }]), i
            }(tt);
            Ze.id = "bar", Ze.defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            }, Ze.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            new WeakMap;
            var Qe = {
                average: function(t) {
                    if (!t.length) return !1;
                    var e, i, n = 0,
                        a = 0,
                        r = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        var s = t[e].element;
                        if (s && s.hasValue()) {
                            var o = s.tooltipPosition();
                            n += o.x, a += o.y, ++r
                        }
                    }
                    return {
                        x: n / r,
                        y: a / r
                    }
                },
                nearest: function(t, e) {
                    if (!t.length) return !1;
                    var i, a, r, s = e.x,
                        o = e.y,
                        h = Number.POSITIVE_INFINITY;
                    for (i = 0, a = t.length; i < a; ++i) {
                        var l = t[i].element;
                        if (l && l.hasValue()) {
                            var u = l.getCenterPoint(),
                                c = Object(n.T)(e, u);
                            c < h && (h = c, r = l)
                        }
                    }
                    if (r) {
                        var f = r.tooltipPosition();
                        s = f.x, o = f.y
                    }
                    return {
                        x: s,
                        y: o
                    }
                }
            };

            function ti(t, e) {
                return e && (Object(n.Cb)(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function ei(t) {
                return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
            }

            function ii(t, e) {
                var i = e.element,
                    n = e.datasetIndex,
                    a = e.index,
                    r = t.getDatasetMeta(n).controller,
                    s = r.getLabelAndValue(a),
                    o = s.label,
                    h = s.value;
                return {
                    chart: t,
                    label: o,
                    parsed: r.getParsed(a),
                    raw: t.data.datasets[n].data[a],
                    formattedValue: h,
                    dataset: r.getDataset(),
                    dataIndex: a,
                    datasetIndex: n,
                    element: i
                }
            }

            function ni(t, e) {
                var i = t.chart.ctx,
                    a = t.body,
                    r = t.footer,
                    s = t.title,
                    o = e.boxWidth,
                    h = e.boxHeight,
                    l = Object(n.p)(e.bodyFont),
                    u = Object(n.p)(e.titleFont),
                    c = Object(n.p)(e.footerFont),
                    f = s.length,
                    d = r.length,
                    v = a.length,
                    p = Object(n.l)(e.padding),
                    g = p.height,
                    b = 0,
                    y = a.reduce((function(t, e) {
                        return t + e.before.length + e.lines.length + e.after.length
                    }), 0);
                (y += t.beforeBody.length + t.afterBody.length, f && (g += f * u.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom), y) && (g += v * (e.displayColors ? Math.max(h, l.lineHeight) : l.lineHeight) + (y - v) * l.lineHeight + (y - 1) * e.bodySpacing);
                d && (g += e.footerMarginTop + d * c.lineHeight + (d - 1) * e.footerSpacing);
                var m = 0,
                    _ = function(t) {
                        b = Math.max(b, i.measureText(t).width + m)
                    };
                return i.save(), i.font = u.string, Object(n.r)(t.title, _), i.font = l.string, Object(n.r)(t.beforeBody.concat(t.afterBody), _), m = e.displayColors ? o + 2 + e.boxPadding : 0, Object(n.r)(a, (function(t) {
                    Object(n.r)(t.before, _), Object(n.r)(t.lines, _), Object(n.r)(t.after, _)
                })), m = 0, i.font = c.string, Object(n.r)(t.footer, _), i.restore(), {
                    width: b += p.width,
                    height: g
                }
            }

            function ai(t, e, i, n) {
                var a = i.x,
                    r = i.width,
                    s = t.width,
                    o = t.chartArea,
                    h = o.left,
                    l = o.right,
                    u = "center";
                return "center" === n ? u = a <= (h + l) / 2 ? "left" : "right" : a <= r / 2 ? u = "left" : a >= s - r / 2 && (u = "right"),
                    function(t, e, i, n) {
                        var a = n.x,
                            r = n.width,
                            s = i.caretSize + i.caretPadding;
                        return "left" === t && a + r + s > e.width || ("right" === t && a - r - s < 0 || void 0)
                    }(u, t, e, i) && (u = "center"), u
            }

            function ri(t, e, i) {
                var n = i.yAlign || e.yAlign || function(t, e) {
                    var i = e.y,
                        n = e.height;
                    return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center"
                }(t, i);
                return {
                    xAlign: i.xAlign || e.xAlign || ai(t, e, i, n),
                    yAlign: n
                }
            }

            function si(t, e, i, a) {
                var r = t.caretSize,
                    s = t.caretPadding,
                    o = t.cornerRadius,
                    h = i.xAlign,
                    l = i.yAlign,
                    u = r + s,
                    c = Object(n.zb)(o),
                    f = c.topLeft,
                    d = c.topRight,
                    v = c.bottomLeft,
                    p = c.bottomRight,
                    g = function(t, e) {
                        var i = t.x,
                            n = t.width;
                        return "right" === e ? i -= n : "center" === e && (i -= n / 2), i
                    }(e, h),
                    b = function(t, e, i) {
                        var n = t.y,
                            a = t.height;
                        return "top" === e ? n += i : n -= "bottom" === e ? a + i : a / 2, n
                    }(e, l, u);
                return "center" === l ? "left" === h ? g += u : "right" === h && (g -= u) : "left" === h ? g -= Math.max(f, v) + r : "right" === h && (g += Math.max(d, p) + r), {
                    x: Object(n.f)(g, 0, a.width - e.width),
                    y: Object(n.f)(b, 0, a.height - e.height)
                }
            }

            function oi(t, e, i) {
                var a = Object(n.l)(i.padding);
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - a.right : t.x + a.left
            }

            function hi(t) {
                return ti([], ei(t))
            }

            function li(t, e) {
                var i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
                return i ? t.override(i) : t
            }
            var ui = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).opacity = 0, n._active = [], n._eventPosition = void 0, n._size = void 0, n._cachedAnimations = void 0, n._tooltipItems = [], n.$animations = void 0, n.$context = void 0, n.chart = t.chart || t._chart, n._chart = n.chart, n.options = t.options, n.dataPoints = void 0, n.title = void 0, n.beforeBody = void 0, n.body = void 0, n.afterBody = void 0, n.footer = void 0, n.xAlign = void 0, n.yAlign = void 0, n.x = void 0, n.y = void 0, n.height = void 0, n.width = void 0, n.caretX = void 0, n.caretY = void 0, n.labelColors = void 0, n.labelPointStyles = void 0, n.labelTextColors = void 0, n
                }
                return x(i, [{
                    key: "initialize",
                    value: function(t) {
                        this.options = t, this._cachedAnimations = void 0, this.$context = void 0
                    }
                }, {
                    key: "_resolveAnimations",
                    value: function() {
                        var t = this._cachedAnimations;
                        if (t) return t;
                        var e = this.chart,
                            i = this.options.setContext(this.getContext()),
                            n = i.enabled && e.options.animation && i.animations,
                            a = new M(this.chart, n);
                        return n._cacheable && (this._cachedAnimations = Object.freeze(a)), a
                    }
                }, {
                    key: "getContext",
                    value: function() {
                        return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, Object(n.Ib)(t, {
                            tooltip: e,
                            tooltipItems: i,
                            type: "tooltip"
                        })));
                        var t, e, i
                    }
                }, {
                    key: "getTitle",
                    value: function(t, e) {
                        var i = e.callbacks,
                            n = i.beforeTitle.apply(this, [t]),
                            a = i.title.apply(this, [t]),
                            r = i.afterTitle.apply(this, [t]),
                            s = [];
                        return s = ti(s, ei(n)), s = ti(s, ei(a)), s = ti(s, ei(r))
                    }
                }, {
                    key: "getBeforeBody",
                    value: function(t, e) {
                        return hi(e.callbacks.beforeBody.apply(this, [t]))
                    }
                }, {
                    key: "getBody",
                    value: function(t, e) {
                        var i = this,
                            a = e.callbacks,
                            r = [];
                        return Object(n.r)(t, (function(t) {
                            var e = {
                                    before: [],
                                    lines: [],
                                    after: []
                                },
                                n = li(a, t);
                            ti(e.before, ei(n.beforeLabel.call(i, t))), ti(e.lines, n.label.call(i, t)), ti(e.after, ei(n.afterLabel.call(i, t))), r.push(e)
                        })), r
                    }
                }, {
                    key: "getAfterBody",
                    value: function(t, e) {
                        return hi(e.callbacks.afterBody.apply(this, [t]))
                    }
                }, {
                    key: "getFooter",
                    value: function(t, e) {
                        var i = e.callbacks,
                            n = i.beforeFooter.apply(this, [t]),
                            a = i.footer.apply(this, [t]),
                            r = i.afterFooter.apply(this, [t]),
                            s = [];
                        return s = ti(s, ei(n)), s = ti(s, ei(a)), s = ti(s, ei(r))
                    }
                }, {
                    key: "_createItems",
                    value: function(t) {
                        var e, i, a = this,
                            r = this._active,
                            s = this.chart.data,
                            o = [],
                            h = [],
                            l = [],
                            u = [];
                        for (e = 0, i = r.length; e < i; ++e) u.push(ii(this.chart, r[e]));
                        return t.filter && (u = u.filter((function(e, i, n) {
                            return t.filter(e, i, n, s)
                        }))), t.itemSort && (u = u.sort((function(e, i) {
                            return t.itemSort(e, i, s)
                        }))), Object(n.r)(u, (function(e) {
                            var i = li(t.callbacks, e);
                            o.push(i.labelColor.call(a, e)), h.push(i.labelPointStyle.call(a, e)), l.push(i.labelTextColor.call(a, e))
                        })), this.labelColors = o, this.labelPointStyles = h, this.labelTextColors = l, this.dataPoints = u, u
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        var i, n = this.options.setContext(this.getContext()),
                            a = this._active,
                            r = [];
                        if (a.length) {
                            var s = Qe[n.position].call(this, a, this._eventPosition);
                            r = this._createItems(n), this.title = this.getTitle(r, n), this.beforeBody = this.getBeforeBody(r, n), this.body = this.getBody(r, n), this.afterBody = this.getAfterBody(r, n), this.footer = this.getFooter(r, n);
                            var o = this._size = ni(this, n),
                                h = Object.assign({}, s, o),
                                l = ri(this.chart, n, h),
                                u = si(n, h, l, this.chart);
                            this.xAlign = l.xAlign, this.yAlign = l.yAlign, i = {
                                opacity: 1,
                                x: u.x,
                                y: u.y,
                                width: o.width,
                                height: o.height,
                                caretX: s.x,
                                caretY: s.y
                            }
                        } else 0 !== this.opacity && (i = {
                            opacity: 0
                        });
                        this._tooltipItems = r, this.$context = void 0, i && this._resolveAnimations().update(this, i), t && n.external && n.external.call(this, {
                            chart: this.chart,
                            tooltip: this,
                            replay: e
                        })
                    }
                }, {
                    key: "drawCaret",
                    value: function(t, e, i, n) {
                        var a = this.getCaretPosition(t, i, n);
                        e.lineTo(a.x1, a.y1), e.lineTo(a.x2, a.y2), e.lineTo(a.x3, a.y3)
                    }
                }, {
                    key: "getCaretPosition",
                    value: function(t, e, i) {
                        var a, r, s, o, h, l, u = this.xAlign,
                            c = this.yAlign,
                            f = i.caretSize,
                            d = i.cornerRadius,
                            v = Object(n.zb)(d),
                            p = v.topLeft,
                            g = v.topRight,
                            b = v.bottomLeft,
                            y = v.bottomRight,
                            m = t.x,
                            _ = t.y,
                            x = e.width,
                            k = e.height;
                        return "center" === c ? (h = _ + k / 2, "left" === u ? (r = (a = m) - f, o = h + f, l = h - f) : (r = (a = m + x) + f, o = h - f, l = h + f), s = a) : (r = "left" === u ? m + Math.max(p, b) + f : "right" === u ? m + x - Math.max(g, y) - f : this.caretX, "top" === c ? (h = (o = _) - f, a = r - f, s = r + f) : (h = (o = _ + k) + f, a = r + f, s = r - f), l = o), {
                            x1: a,
                            x2: r,
                            x3: s,
                            y1: o,
                            y2: h,
                            y3: l
                        }
                    }
                }, {
                    key: "drawTitle",
                    value: function(t, e, i) {
                        var a, r, s, o = this.title,
                            h = o.length;
                        if (h) {
                            var l = Object(n.N)(i.rtl, this.x, this.width);
                            for (t.x = oi(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", a = Object(n.p)(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a.string, s = 0; s < h; ++s) e.fillText(o[s], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, s + 1 === h && (t.y += i.titleMarginBottom - r)
                        }
                    }
                }, {
                    key: "_drawColorBox",
                    value: function(t, e, i, a, r) {
                        var s = this.labelColors[i],
                            o = this.labelPointStyles[i],
                            h = r.boxHeight,
                            l = r.boxWidth,
                            u = r.boxPadding,
                            c = Object(n.p)(r.bodyFont),
                            f = oi(this, "left", r),
                            d = a.x(f),
                            v = h < c.lineHeight ? (c.lineHeight - h) / 2 : 0,
                            p = e.y + v;
                        if (r.usePointStyle) {
                            var b = {
                                    radius: Math.min(l, h) / 2,
                                    pointStyle: o.pointStyle,
                                    rotation: o.rotation,
                                    borderWidth: 1
                                },
                                y = a.leftForLtr(d, l) + l / 2,
                                m = p + h / 2;
                            t.strokeStyle = r.multiKeyBackground, t.fillStyle = r.multiKeyBackground, Object(n.wb)(t, b, y, m), t.strokeStyle = s.borderColor, t.fillStyle = s.backgroundColor, Object(n.wb)(t, b, y, m)
                        } else {
                            t.lineWidth = Object(n.Jb)(s.borderWidth) ? Math.max.apply(Math, g(Object.values(s.borderWidth))) : s.borderWidth || 1, t.strokeStyle = s.borderColor, t.setLineDash(s.borderDash || []), t.lineDashOffset = s.borderDashOffset || 0;
                            var _ = a.leftForLtr(d, l - u),
                                x = a.leftForLtr(a.xPlus(d, 1), l - u - 2),
                                k = Object(n.zb)(s.borderRadius);
                            Object.values(k).some((function(t) {
                                return 0 !== t
                            })) ? (t.beginPath(), t.fillStyle = r.multiKeyBackground, Object(n.xb)(t, {
                                x: _,
                                y: p,
                                w: l,
                                h: h,
                                radius: k
                            }), t.fill(), t.stroke(), t.fillStyle = s.backgroundColor, t.beginPath(), Object(n.xb)(t, {
                                x: x,
                                y: p + 1,
                                w: l - 2,
                                h: h - 2,
                                radius: k
                            }), t.fill()) : (t.fillStyle = r.multiKeyBackground, t.fillRect(_, p, l, h), t.strokeRect(_, p, l, h), t.fillStyle = s.backgroundColor, t.fillRect(x, p + 1, l - 2, h - 2))
                        }
                        t.fillStyle = this.labelTextColors[i]
                    }
                }, {
                    key: "drawBody",
                    value: function(t, e, i) {
                        var a, r, s, o, h, l, u, c = this.body,
                            f = i.bodySpacing,
                            d = i.bodyAlign,
                            v = i.displayColors,
                            p = i.boxHeight,
                            g = i.boxWidth,
                            b = i.boxPadding,
                            y = Object(n.p)(i.bodyFont),
                            m = y.lineHeight,
                            _ = 0,
                            x = Object(n.N)(i.rtl, this.x, this.width),
                            k = function(i) {
                                e.fillText(i, x.x(t.x + _), t.y + m / 2), t.y += m + f
                            },
                            O = x.textAlign(d);
                        for (e.textAlign = d, e.textBaseline = "middle", e.font = y.string, t.x = oi(this, O, i), e.fillStyle = i.bodyColor, Object(n.r)(this.beforeBody, k), _ = v && "right" !== O ? "center" === d ? g / 2 + b : g + 2 + b : 0, o = 0, l = c.length; o < l; ++o) {
                            for (a = c[o], r = this.labelTextColors[o], e.fillStyle = r, Object(n.r)(a.before, k), s = a.lines, v && s.length && (this._drawColorBox(e, t, o, x, i), m = Math.max(y.lineHeight, p)), h = 0, u = s.length; h < u; ++h) k(s[h]), m = y.lineHeight;
                            Object(n.r)(a.after, k)
                        }
                        _ = 0, m = y.lineHeight, Object(n.r)(this.afterBody, k), t.y -= f
                    }
                }, {
                    key: "drawFooter",
                    value: function(t, e, i) {
                        var a, r, s = this.footer,
                            o = s.length;
                        if (o) {
                            var h = Object(n.N)(i.rtl, this.x, this.width);
                            for (t.x = oi(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = h.textAlign(i.footerAlign), e.textBaseline = "middle", a = Object(n.p)(i.footerFont), e.fillStyle = i.footerColor, e.font = a.string, r = 0; r < o; ++r) e.fillText(s[r], h.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing
                        }
                    }
                }, {
                    key: "drawBackground",
                    value: function(t, e, i, a) {
                        var r = this.xAlign,
                            s = this.yAlign,
                            o = t.x,
                            h = t.y,
                            l = i.width,
                            u = i.height,
                            c = Object(n.zb)(a.cornerRadius),
                            f = c.topLeft,
                            d = c.topRight,
                            v = c.bottomLeft,
                            p = c.bottomRight;
                        e.fillStyle = a.backgroundColor, e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth, e.beginPath(), e.moveTo(o + f, h), "top" === s && this.drawCaret(t, e, i, a), e.lineTo(o + l - d, h), e.quadraticCurveTo(o + l, h, o + l, h + d), "center" === s && "right" === r && this.drawCaret(t, e, i, a), e.lineTo(o + l, h + u - p), e.quadraticCurveTo(o + l, h + u, o + l - p, h + u), "bottom" === s && this.drawCaret(t, e, i, a), e.lineTo(o + v, h + u), e.quadraticCurveTo(o, h + u, o, h + u - v), "center" === s && "left" === r && this.drawCaret(t, e, i, a), e.lineTo(o, h + f), e.quadraticCurveTo(o, h, o + f, h), e.closePath(), e.fill(), a.borderWidth > 0 && e.stroke()
                    }
                }, {
                    key: "_updateAnimationTarget",
                    value: function(t) {
                        var e = this.chart,
                            i = this.$animations,
                            n = i && i.x,
                            a = i && i.y;
                        if (n || a) {
                            var r = Qe[t.position].call(this, this._active, this._eventPosition);
                            if (!r) return;
                            var s = this._size = ni(this, t),
                                o = Object.assign({}, r, this._size),
                                h = ri(e, t, o),
                                l = si(t, o, h, e);
                            n._to === l.x && a._to === l.y || (this.xAlign = h.xAlign, this.yAlign = h.yAlign, this.width = s.width, this.height = s.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, l))
                        }
                    }
                }, {
                    key: "_willRender",
                    value: function() {
                        return !!this.opacity
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        var e = this.options.setContext(this.getContext()),
                            i = this.opacity;
                        if (i) {
                            this._updateAnimationTarget(e);
                            var a = {
                                    width: this.width,
                                    height: this.height
                                },
                                r = {
                                    x: this.x,
                                    y: this.y
                                };
                            i = Math.abs(i) < .001 ? 0 : i;
                            var s = Object(n.l)(e.padding),
                                o = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                            e.enabled && o && (t.save(), t.globalAlpha = i, this.drawBackground(r, t, a, e), Object(n.O)(t, e.textDirection), r.y += s.top, this.drawTitle(r, t, e), this.drawBody(r, t, e), this.drawFooter(r, t, e), Object(n.Q)(t, e.textDirection), t.restore())
                        }
                    }
                }, {
                    key: "getActiveElements",
                    value: function() {
                        return this._active || []
                    }
                }, {
                    key: "setActiveElements",
                    value: function(t, e) {
                        var i = this,
                            a = this._active,
                            r = t.map((function(t) {
                                var e = t.datasetIndex,
                                    n = t.index,
                                    a = i.chart.getDatasetMeta(e);
                                if (!a) throw new Error("Cannot find a dataset at index " + e);
                                return {
                                    datasetIndex: e,
                                    element: a.data[n],
                                    index: n
                                }
                            })),
                            s = !Object(n.kb)(a, r),
                            o = this._positionChanged(r, e);
                        (s || o) && (this._active = r, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
                    }
                }, {
                    key: "handleEvent",
                    value: function(t, e) {
                        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (e && this._ignoreReplayEvents) return !1;
                        this._ignoreReplayEvents = !1;
                        var a = this.options,
                            r = this._active || [],
                            s = this._getActiveElements(t, r, e, i),
                            o = this._positionChanged(s, t),
                            h = e || !Object(n.kb)(s, r) || o;
                        return h && (this._active = s, (a.enabled || a.external) && (this._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, this.update(!0, e))), h
                    }
                }, {
                    key: "_getActiveElements",
                    value: function(t, e, i, n) {
                        var a = this.options;
                        if ("mouseout" === t.type) return [];
                        if (!n) return e;
                        var r = this.chart.getElementsAtEventForMode(t, a.mode, a, i);
                        return a.reverse && r.reverse(), r
                    }
                }, {
                    key: "_positionChanged",
                    value: function(t, e) {
                        var i = this.caretX,
                            n = this.caretY,
                            a = this.options,
                            r = Qe[a.position].call(this, t, e);
                        return !1 !== r && (i !== r.x || n !== r.y)
                    }
                }]), i
            }(tt);
            ui.positioners = Qe;
            n.S, n.S, n.S, n.S, n.S, n.S, n.S, n.S, n.S;

            function ci(t, e, i, n) {
                var a = t.indexOf(e);
                return -1 === a ? function(t, e, i, n) {
                    return "string" == typeof e ? (i = t.push(e) - 1, n.unshift({
                        index: i,
                        label: e
                    })) : isNaN(e) && (i = null), i
                }(t, e, i, n) : a !== t.lastIndexOf(e) ? i : a
            }
            var fi = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t))._startValue = void 0, n._valueRange = 0, n._addedLabels = [], n
                }
                return x(i, [{
                    key: "init",
                    value: function(t) {
                        var e = this._addedLabels;
                        if (e.length) {
                            var n, r = this.getLabels(),
                                s = v(e);
                            try {
                                for (s.s(); !(n = s.n()).done;) {
                                    var o = n.value,
                                        h = o.index,
                                        l = o.label;
                                    r[h] === l && r.splice(h, 1)
                                }
                            } catch (t) {
                                s.e(t)
                            } finally {
                                s.f()
                            }
                            this._addedLabels = []
                        }
                        a(c(i.prototype), "init", this).call(this, t)
                    }
                }, {
                    key: "parse",
                    value: function(t, e) {
                        if (Object(n.Lb)(t)) return null;
                        var i = this.getLabels();
                        return function(t, e) {
                            return null === t ? null : Object(n.f)(Math.round(t), 0, e)
                        }(e = isFinite(e) && i[e] === t ? e : ci(i, t, Object(n.Wb)(e, t), this._addedLabels), i.length - 1)
                    }
                }, {
                    key: "determineDataLimits",
                    value: function() {
                        var t = this.getUserBounds(),
                            e = t.minDefined,
                            i = t.maxDefined,
                            n = this.getMinMax(!0),
                            a = n.min,
                            r = n.max;
                        "ticks" === this.options.bounds && (e || (a = 0), i || (r = this.getLabels().length - 1)), this.min = a, this.max = r
                    }
                }, {
                    key: "buildTicks",
                    value: function() {
                        var t = this.min,
                            e = this.max,
                            i = this.options.offset,
                            n = [],
                            a = this.getLabels();
                        a = 0 === t && e === a.length - 1 ? a : a.slice(t, e + 1), this._valueRange = Math.max(a.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
                        for (var r = t; r <= e; r++) n.push({
                            value: r
                        });
                        return n
                    }
                }, {
                    key: "getLabelForValue",
                    value: function(t) {
                        var e = this.getLabels();
                        return t >= 0 && t < e.length ? e[t] : t
                    }
                }, {
                    key: "configure",
                    value: function() {
                        a(c(i.prototype), "configure", this).call(this), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
                    }
                }, {
                    key: "getPixelForValue",
                    value: function(t) {
                        return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                    }
                }, {
                    key: "getPixelForTick",
                    value: function(t) {
                        var e = this.ticks;
                        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                    }
                }, {
                    key: "getValueForPixel",
                    value: function(t) {
                        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
                    }
                }, {
                    key: "getBasePixel",
                    value: function() {
                        return this.bottom
                    }
                }]), i
            }(ct);

            function di(t, e, i) {
                var a = i.horizontal,
                    r = i.minRotation,
                    s = Object(n.Ub)(r),
                    o = (a ? Math.sin(s) : Math.cos(s)) || .001,
                    h = .75 * e * ("" + t).length;
                return Math.min(e / o, h)
            }
            fi.id = "category", fi.defaults = {
                ticks: {
                    callback: fi.prototype.getLabelForValue
                }
            };
            var vi = function(t) {
                    s(i, t);
                    var e = h(i);

                    function i(t) {
                        var n;
                        return m(this, i), (n = e.call(this, t)).start = void 0, n.end = void 0, n._startValue = void 0, n._endValue = void 0, n._valueRange = 0, n
                    }
                    return x(i, [{
                        key: "parse",
                        value: function(t, e) {
                            return Object(n.Lb)(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
                        }
                    }, {
                        key: "handleTickRangeOptions",
                        value: function() {
                            var t = this.options.beginAtZero,
                                e = this.getUserBounds(),
                                i = e.minDefined,
                                a = e.maxDefined,
                                r = this.min,
                                s = this.max,
                                o = function(t) {
                                    return r = i ? r : t
                                },
                                h = function(t) {
                                    return s = a ? s : t
                                };
                            if (t) {
                                var l = Object(n.Tb)(r),
                                    u = Object(n.Tb)(s);
                                l < 0 && u < 0 ? h(0) : l > 0 && u > 0 && o(0)
                            }
                            if (r === s) {
                                var c = 1;
                                (s >= Number.MAX_SAFE_INTEGER || r <= Number.MIN_SAFE_INTEGER) && (c = Math.abs(.05 * s)), h(s + c), t || o(r - c)
                            }
                            this.min = r, this.max = s
                        }
                    }, {
                        key: "getTickLimit",
                        value: function() {
                            var t, e = this.options.ticks,
                                i = e.maxTicksLimit,
                                n = e.stepSize;
                            return n ? (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1) > 1e3 && (console.warn("scales.".concat(this.id, ".ticks.stepSize: ").concat(n, " would result generating up to ").concat(t, " ticks. Limiting to 1000.")), t = 1e3) : (t = this.computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t
                        }
                    }, {
                        key: "computeTickLimit",
                        value: function() {
                            return Number.POSITIVE_INFINITY
                        }
                    }, {
                        key: "buildTicks",
                        value: function() {
                            var t = this.options,
                                e = t.ticks,
                                i = this.getTickLimit(),
                                a = function(t, e) {
                                    var i, a, r, s, o = [],
                                        h = t.bounds,
                                        l = t.step,
                                        u = t.min,
                                        c = t.max,
                                        f = t.precision,
                                        d = t.count,
                                        v = t.maxTicks,
                                        p = t.maxDigits,
                                        g = t.includeBounds,
                                        b = l || 1,
                                        y = v - 1,
                                        m = e.min,
                                        _ = e.max,
                                        x = !Object(n.Lb)(u),
                                        k = !Object(n.Lb)(c),
                                        O = !Object(n.Lb)(d),
                                        w = (_ - m) / (p + 1),
                                        j = Object(n.V)((_ - m) / y / b) * b;
                                    if (j < 1e-14 && !x && !k) return [{
                                        value: m
                                    }, {
                                        value: _
                                    }];
                                    (s = Math.ceil(_ / j) - Math.floor(m / j)) > y && (j = Object(n.V)(s * j / y / b) * b), Object(n.Lb)(f) || (i = Math.pow(10, f), j = Math.ceil(j * i) / i), "ticks" === h ? (a = Math.floor(m / j) * j, r = Math.ceil(_ / j) * j) : (a = m, r = _), x && k && l && Object(n.W)((c - u) / l, j / 1e3) ? (j = (c - u) / (s = Math.round(Math.min((c - u) / j, v))), a = u, r = c) : O ? j = ((r = k ? c : r) - (a = x ? u : a)) / (s = d - 1) : (s = (r - a) / j, s = Object(n.X)(s, Math.round(s), j / 1e3) ? Math.round(s) : Math.ceil(s));
                                    var M = Math.max(Object(n.Y)(j), Object(n.Y)(a));
                                    i = Math.pow(10, Object(n.Lb)(f) ? M : f), a = Math.round(a * i) / i, r = Math.round(r * i) / i;
                                    var P = 0;
                                    for (x && (g && a !== u ? (o.push({
                                            value: u
                                        }), a < u && P++, Object(n.X)(Math.round((a + P * j) * i) / i, u, di(u, w, t)) && P++) : a < u && P++); P < s; ++P) o.push({
                                        value: Math.round((a + P * j) * i) / i
                                    });
                                    return k && g && r !== c ? o.length && Object(n.X)(o[o.length - 1].value, c, di(c, w, t)) ? o[o.length - 1].value = c : o.push({
                                        value: c
                                    }) : k && r !== c || o.push({
                                        value: r
                                    }), o
                                }({
                                    maxTicks: i = Math.max(2, i),
                                    bounds: t.bounds,
                                    min: t.min,
                                    max: t.max,
                                    precision: e.precision,
                                    step: e.stepSize,
                                    count: e.count,
                                    maxDigits: this._maxDigits(),
                                    horizontal: this.isHorizontal(),
                                    minRotation: e.minRotation || 0,
                                    includeBounds: !1 !== e.includeBounds
                                }, this._range || this);
                            return "ticks" === t.bounds && Object(n.U)(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a
                        }
                    }, {
                        key: "configure",
                        value: function() {
                            var t = this.ticks,
                                e = this.min,
                                n = this.max;
                            if (a(c(i.prototype), "configure", this).call(this), this.options.offset && t.length) {
                                var r = (n - e) / Math.max(t.length - 1, 1) / 2;
                                e -= r, n += r
                            }
                            this._startValue = e, this._endValue = n, this._valueRange = n - e
                        }
                    }, {
                        key: "getLabelForValue",
                        value: function(t) {
                            return Object(n.Pb)(t, this.chart.options.locale, this.options.ticks.format)
                        }
                    }]), i
                }(ct),
                pi = function(t) {
                    s(i, t);
                    var e = h(i);

                    function i() {
                        return m(this, i), e.apply(this, arguments)
                    }
                    return x(i, [{
                        key: "determineDataLimits",
                        value: function() {
                            var t = this.getMinMax(!0),
                                e = t.min,
                                i = t.max;
                            this.min = Object(n.Hb)(e) ? e : 0, this.max = Object(n.Hb)(i) ? i : 1, this.handleTickRangeOptions()
                        }
                    }, {
                        key: "computeTickLimit",
                        value: function() {
                            var t = this.isHorizontal(),
                                e = t ? this.width : this.height,
                                i = Object(n.Ub)(this.options.ticks.minRotation),
                                a = (t ? Math.sin(i) : Math.cos(i)) || .001,
                                r = this._resolveTickFontOptions(0);
                            return Math.ceil(e / Math.min(40, r.lineHeight / a))
                        }
                    }, {
                        key: "getPixelForValue",
                        value: function(t) {
                            return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                        }
                    }, {
                        key: "getValueForPixel",
                        value: function(t) {
                            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                        }
                    }]), i
                }(vi);

            function gi(t) {
                return 1 === t / Math.pow(10, Math.floor(Object(n.ac)(t)))
            }
            pi.id = "linear", pi.defaults = {
                ticks: {
                    callback: it.formatters.numeric
                }
            };
            var bi = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t)).start = void 0, n.end = void 0, n._startValue = void 0, n._valueRange = 0, n
                }
                return x(i, [{
                    key: "parse",
                    value: function(t, e) {
                        var i = vi.prototype.parse.apply(this, [t, e]);
                        if (0 !== i) return Object(n.Hb)(i) && i > 0 ? i : null;
                        this._zero = !0
                    }
                }, {
                    key: "determineDataLimits",
                    value: function() {
                        var t = this.getMinMax(!0),
                            e = t.min,
                            i = t.max;
                        this.min = Object(n.Hb)(e) ? Math.max(0, e) : null, this.max = Object(n.Hb)(i) ? Math.max(0, i) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions()
                    }
                }, {
                    key: "handleTickRangeOptions",
                    value: function() {
                        var t = this.getUserBounds(),
                            e = t.minDefined,
                            i = t.maxDefined,
                            a = this.min,
                            r = this.max,
                            s = function(t) {
                                return a = e ? a : t
                            },
                            o = function(t) {
                                return r = i ? r : t
                            },
                            h = function(t, e) {
                                return Math.pow(10, Math.floor(Object(n.ac)(t)) + e)
                            };
                        a === r && (a <= 0 ? (s(1), o(10)) : (s(h(a, -1)), o(h(r, 1)))), a <= 0 && s(h(r, -1)), r <= 0 && o(h(a, 1)), this._zero && this.min !== this._suggestedMin && a === h(this.min, 0) && s(h(a, -1)), this.min = a, this.max = r
                    }
                }, {
                    key: "buildTicks",
                    value: function() {
                        var t = this.options,
                            e = function(t, e) {
                                var i = Math.floor(Object(n.ac)(e.max)),
                                    a = Math.ceil(e.max / Math.pow(10, i)),
                                    r = [],
                                    s = Object(n.c)(t.min, Math.pow(10, Math.floor(Object(n.ac)(e.min)))),
                                    o = Math.floor(Object(n.ac)(s)),
                                    h = Math.floor(s / Math.pow(10, o)),
                                    l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                                do {
                                    r.push({
                                        value: s,
                                        major: gi(s)
                                    }), 10 === ++h && (h = 1, l = ++o >= 0 ? 1 : l), s = Math.round(h * Math.pow(10, o) * l) / l
                                } while (o < i || o === i && h < a);
                                var u = Object(n.c)(t.max, s);
                                return r.push({
                                    value: u,
                                    major: gi(s)
                                }), r
                            }({
                                min: this._userMin,
                                max: this._userMax
                            }, this);
                        return "ticks" === t.bounds && Object(n.U)(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
                    }
                }, {
                    key: "getLabelForValue",
                    value: function(t) {
                        return void 0 === t ? "0" : Object(n.Pb)(t, this.chart.options.locale, this.options.ticks.format)
                    }
                }, {
                    key: "configure",
                    value: function() {
                        var t = this.min;
                        a(c(i.prototype), "configure", this).call(this), this._startValue = Object(n.ac)(t), this._valueRange = Object(n.ac)(this.max) - Object(n.ac)(t)
                    }
                }, {
                    key: "getPixelForValue",
                    value: function(t) {
                        return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Object(n.ac)(t) - this._startValue) / this._valueRange)
                    }
                }, {
                    key: "getValueForPixel",
                    value: function(t) {
                        var e = this.getDecimalForPixel(t);
                        return Math.pow(10, this._startValue + e * this._valueRange)
                    }
                }]), i
            }(ct);

            function yi(t) {
                var e = t.ticks;
                if (e.display && t.display) {
                    var i = Object(n.l)(e.backdropPadding);
                    return Object(n.Wb)(e.font && e.font.size, n.Eb.font.size) + i.height
                }
                return 0
            }

            function mi(t, e, i, n, a) {
                return t === n || t === a ? {
                    start: e - i / 2,
                    end: e + i / 2
                } : t < n || t > a ? {
                    start: e - i,
                    end: e
                } : {
                    start: e,
                    end: e + i
                }
            }

            function _i(t) {
                for (var e, i, a, r = {
                        l: t.left + t._padding.left,
                        r: t.right - t._padding.right,
                        t: t.top + t._padding.top,
                        b: t.bottom - t._padding.bottom
                    }, s = Object.assign({}, r), o = [], h = [], l = t._pointLabels.length, u = t.options.pointLabels, c = u.centerPointLabels ? n.q / l : 0, f = 0; f < l; f++) {
                    var d = u.setContext(t.getPointLabelContext(f));
                    h[f] = d.padding;
                    var v = t.getPointPosition(f, t.drawingArea + h[f], c),
                        p = Object(n.p)(d.font),
                        g = (e = t.ctx, i = p, a = t._pointLabels[f], a = Object(n.Cb)(a) ? a : [a], {
                            w: Object(n.Z)(e, i.string, a),
                            h: a.length * i.lineHeight
                        });
                    o[f] = g;
                    var b = Object(n.Bb)(t.getIndexAngle(f) + c),
                        y = Math.round(Object(n.g)(b));
                    xi(s, r, b, mi(y, v.x, g.w, 0, 180), mi(y, v.y, g.h, 90, 270))
                }
                t.setCenterPoint(r.l - s.l, s.r - r.r, r.t - s.t, s.b - r.b), t._pointLabelItems = function(t, e, i) {
                    for (var a = [], r = t._pointLabels.length, s = t.options, o = yi(s) / 2, h = t.drawingArea, l = s.pointLabels.centerPointLabels ? n.q / r : 0, u = 0; u < r; u++) {
                        var c = t.getPointPosition(u, h + o + i[u], l),
                            f = Math.round(Object(n.g)(Object(n.Bb)(c.angle + n.i))),
                            d = e[u],
                            v = wi(c.y, d.h, f),
                            p = ki(f),
                            g = Oi(c.x, d.w, p);
                        a.push({
                            x: c.x,
                            y: v,
                            textAlign: p,
                            left: g,
                            top: v,
                            right: g + d.w,
                            bottom: v + d.h
                        })
                    }
                    return a
                }(t, o, h)
            }

            function xi(t, e, i, n, a) {
                var r = Math.abs(Math.sin(i)),
                    s = Math.abs(Math.cos(i)),
                    o = 0,
                    h = 0;
                n.start < e.l ? (o = (e.l - n.start) / r, t.l = Math.min(t.l, e.l - o)) : n.end > e.r && (o = (n.end - e.r) / r, t.r = Math.max(t.r, e.r + o)), a.start < e.t ? (h = (e.t - a.start) / s, t.t = Math.min(t.t, e.t - h)) : a.end > e.b && (h = (a.end - e.b) / s, t.b = Math.max(t.b, e.b + h))
            }

            function ki(t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
            }

            function Oi(t, e, i) {
                return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
            }

            function wi(t, e, i) {
                return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t
            }

            function ji(t, e, i, a) {
                var r = t.ctx;
                if (i) r.arc(t.xCenter, t.yCenter, e, 0, n.u);
                else {
                    var s = t.getPointPosition(0, e);
                    r.moveTo(s.x, s.y);
                    for (var o = 1; o < a; o++) s = t.getPointPosition(o, e), r.lineTo(s.x, s.y)
                }
            }
            bi.id = "logarithmic", bi.defaults = {
                ticks: {
                    callback: it.formatters.logarithmic,
                    major: {
                        enabled: !0
                    }
                }
            };
            var Mi = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t)).xCenter = void 0, n.yCenter = void 0, n.drawingArea = void 0, n._pointLabels = [], n._pointLabelItems = [], n
                }
                return x(i, [{
                    key: "setDimensions",
                    value: function() {
                        var t = this._padding = Object(n.l)(yi(this.options) / 2),
                            e = this.width = this.maxWidth - t.width,
                            i = this.height = this.maxHeight - t.height;
                        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2)
                    }
                }, {
                    key: "determineDataLimits",
                    value: function() {
                        var t = this.getMinMax(!1),
                            e = t.min,
                            i = t.max;
                        this.min = Object(n.Hb)(e) && !isNaN(e) ? e : 0, this.max = Object(n.Hb)(i) && !isNaN(i) ? i : 0, this.handleTickRangeOptions()
                    }
                }, {
                    key: "computeTickLimit",
                    value: function() {
                        return Math.ceil(this.drawingArea / yi(this.options))
                    }
                }, {
                    key: "generateTickLabels",
                    value: function(t) {
                        var e = this;
                        vi.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((function(t, i) {
                            var a = Object(n.d)(e.options.pointLabels.callback, [t, i], e);
                            return a || 0 === a ? a : ""
                        })).filter((function(t, i) {
                            return e.chart.getDataVisibility(i)
                        }))
                    }
                }, {
                    key: "fit",
                    value: function() {
                        var t = this.options;
                        t.display && t.pointLabels.display ? _i(this) : this.setCenterPoint(0, 0, 0, 0)
                    }
                }, {
                    key: "setCenterPoint",
                    value: function(t, e, i, n) {
                        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, n))
                    }
                }, {
                    key: "getIndexAngle",
                    value: function(t) {
                        var e = n.u / (this._pointLabels.length || 1),
                            i = this.options.startAngle || 0;
                        return Object(n.Bb)(t * e + Object(n.Ub)(i))
                    }
                }, {
                    key: "getDistanceFromCenterForValue",
                    value: function(t) {
                        if (Object(n.Lb)(t)) return NaN;
                        var e = this.drawingArea / (this.max - this.min);
                        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
                    }
                }, {
                    key: "getValueForDistanceFromCenter",
                    value: function(t) {
                        if (Object(n.Lb)(t)) return NaN;
                        var e = t / (this.drawingArea / (this.max - this.min));
                        return this.options.reverse ? this.max - e : this.min + e
                    }
                }, {
                    key: "getPointLabelContext",
                    value: function(t) {
                        var e = this._pointLabels || [];
                        if (t >= 0 && t < e.length) {
                            var i = e[t];
                            return function(t, e, i) {
                                return Object(n.Ib)(t, {
                                    label: i,
                                    index: e,
                                    type: "pointLabel"
                                })
                            }(this.getContext(), t, i)
                        }
                    }
                }, {
                    key: "getPointPosition",
                    value: function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            a = this.getIndexAngle(t) - n.i + i;
                        return {
                            x: Math.cos(a) * e + this.xCenter,
                            y: Math.sin(a) * e + this.yCenter,
                            angle: a
                        }
                    }
                }, {
                    key: "getPointPositionForValue",
                    value: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    }
                }, {
                    key: "getBasePosition",
                    value: function(t) {
                        return this.getPointPositionForValue(t || 0, this.getBaseValue())
                    }
                }, {
                    key: "getPointLabelPosition",
                    value: function(t) {
                        var e = this._pointLabelItems[t];
                        return {
                            left: e.left,
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom
                        }
                    }
                }, {
                    key: "drawBackground",
                    value: function() {
                        var t = this.options,
                            e = t.backgroundColor,
                            i = t.grid.circular;
                        if (e) {
                            var n = this.ctx;
                            n.save(), n.beginPath(), ji(this, this.getDistanceFromCenterForValue(this._endValue), i, this._pointLabels.length), n.closePath(), n.fillStyle = e, n.fill(), n.restore()
                        }
                    }
                }, {
                    key: "drawGrid",
                    value: function() {
                        var t, e, i, a = this,
                            r = this.ctx,
                            s = this.options,
                            o = s.angleLines,
                            h = s.grid,
                            l = this._pointLabels.length;
                        if (s.pointLabels.display && function(t, e) {
                                for (var i = t.ctx, a = t.options.pointLabels, r = e - 1; r >= 0; r--) {
                                    var s = a.setContext(t.getPointLabelContext(r)),
                                        o = Object(n.p)(s.font),
                                        h = t._pointLabelItems[r],
                                        l = h.x,
                                        u = h.y,
                                        c = h.textAlign,
                                        f = h.left,
                                        d = h.top,
                                        v = h.right,
                                        p = h.bottom,
                                        g = s.backdropColor;
                                    if (!Object(n.Lb)(g)) {
                                        var b = Object(n.zb)(s.borderRadius),
                                            y = Object(n.l)(s.backdropPadding);
                                        i.fillStyle = g;
                                        var m = f - y.left,
                                            _ = d - y.top,
                                            x = v - f + y.width,
                                            k = p - d + y.height;
                                        Object.values(b).some((function(t) {
                                            return 0 !== t
                                        })) ? (i.beginPath(), Object(n.xb)(i, {
                                            x: m,
                                            y: _,
                                            w: x,
                                            h: k,
                                            radius: b
                                        }), i.fill()) : i.fillRect(m, _, x, k)
                                    }
                                    Object(n.n)(i, t._pointLabels[r], l, u + o.lineHeight / 2, o, {
                                        color: s.color,
                                        textAlign: c,
                                        textBaseline: "middle"
                                    })
                                }
                            }(this, l), h.display && this.ticks.forEach((function(t, i) {
                                if (0 !== i) {
                                    e = a.getDistanceFromCenterForValue(t.value);
                                    var n = h.setContext(a.getContext(i - 1));
                                    ! function(t, e, i, n) {
                                        var a = t.ctx,
                                            r = e.circular,
                                            s = e.color,
                                            o = e.lineWidth;
                                        !r && !n || !s || !o || i < 0 || (a.save(), a.strokeStyle = s, a.lineWidth = o, a.setLineDash(e.borderDash), a.lineDashOffset = e.borderDashOffset, a.beginPath(), ji(t, i, r, n), a.closePath(), a.stroke(), a.restore())
                                    }(a, n, e, l)
                                }
                            })), o.display) {
                            for (r.save(), t = l - 1; t >= 0; t--) {
                                var u = o.setContext(this.getPointLabelContext(t)),
                                    c = u.color,
                                    f = u.lineWidth;
                                f && c && (r.lineWidth = f, r.strokeStyle = c, r.setLineDash(u.borderDash), r.lineDashOffset = u.borderDashOffset, e = this.getDistanceFromCenterForValue(s.ticks.reverse ? this.min : this.max), i = this.getPointPosition(t, e), r.beginPath(), r.moveTo(this.xCenter, this.yCenter), r.lineTo(i.x, i.y), r.stroke())
                            }
                            r.restore()
                        }
                    }
                }, {
                    key: "drawBorder",
                    value: function() {}
                }, {
                    key: "drawLabels",
                    value: function() {
                        var t = this,
                            e = this.ctx,
                            i = this.options,
                            a = i.ticks;
                        if (a.display) {
                            var r, s, o = this.getIndexAngle(0);
                            e.save(), e.translate(this.xCenter, this.yCenter), e.rotate(o), e.textAlign = "center", e.textBaseline = "middle", this.ticks.forEach((function(o, h) {
                                if (0 !== h || i.reverse) {
                                    var l = a.setContext(t.getContext(h)),
                                        u = Object(n.p)(l.font);
                                    if (r = t.getDistanceFromCenterForValue(t.ticks[h].value), l.showLabelBackdrop) {
                                        e.font = u.string, s = e.measureText(o.label).width, e.fillStyle = l.backdropColor;
                                        var c = Object(n.l)(l.backdropPadding);
                                        e.fillRect(-s / 2 - c.left, -r - u.size / 2 - c.top, s + c.width, u.size + c.height)
                                    }
                                    Object(n.n)(e, o.label, 0, -r, u, {
                                        color: l.color
                                    })
                                }
                            })), e.restore()
                        }
                    }
                }, {
                    key: "drawTitle",
                    value: function() {}
                }]), i
            }(vi);
            Mi.id = "radialLinear", Mi.defaults = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                grid: {
                    circular: !1
                },
                startAngle: 0,
                ticks: {
                    showLabelBackdrop: !0,
                    callback: it.formatters.numeric
                },
                pointLabels: {
                    backdropColor: void 0,
                    backdropPadding: 2,
                    display: !0,
                    font: {
                        size: 10
                    },
                    callback: function(t) {
                        return t
                    },
                    padding: 5,
                    centerPointLabels: !1
                }
            }, Mi.defaultRoutes = {
                "angleLines.color": "borderColor",
                "pointLabels.color": "color",
                "ticks.color": "color"
            }, Mi.descriptors = {
                angleLines: {
                    _fallback: "grid"
                }
            };
            var Pi = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: 1e3
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: 60
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: 60
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: 24
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: 30
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: 4
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: 12
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: 4
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                Si = Object.keys(Pi);

            function Ei(t, e) {
                return t - e
            }

            function Ai(t, e) {
                if (Object(n.Lb)(e)) return null;
                var i = t._adapter,
                    a = t._parseOpts,
                    r = a.parser,
                    s = a.round,
                    o = a.isoWeekday,
                    h = e;
                return "function" == typeof r && (h = r(h)), Object(n.Hb)(h) || (h = "string" == typeof r ? i.parse(h, r) : i.parse(h)), null === h ? null : (s && (h = "week" !== s || !Object(n.Yb)(o) && !0 !== o ? i.startOf(h, s) : i.startOf(h, "isoWeek", o)), +h)
            }

            function Di(t, e, i, n) {
                for (var a = Si.length, r = Si.indexOf(t); r < a - 1; ++r) {
                    var s = Pi[Si[r]],
                        o = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
                    if (s.common && Math.ceil((i - e) / (o * s.size)) <= n) return Si[r]
                }
                return Si[a - 1]
            }

            function Ri(t, e, i) {
                if (i) {
                    if (i.length) {
                        var a = Object(n.bb)(i, e),
                            r = a.lo,
                            s = a.hi;
                        t[i[r] >= e ? i[r] : i[s]] = !0
                    }
                } else t[e] = !0
            }

            function Li(t, e, i) {
                var n, a, r = [],
                    s = {},
                    o = e.length;
                for (n = 0; n < o; ++n) s[a = e[n]] = n, r.push({
                    value: a,
                    major: !1
                });
                return 0 !== o && i ? function(t, e, i, n) {
                    var a, r, s = t._adapter,
                        o = +s.startOf(e[0].value, n),
                        h = e[e.length - 1].value;
                    for (a = o; a <= h; a = +s.add(a, 1, n))(r = i[a]) >= 0 && (e[r].major = !0);
                    return e
                }(t, r, s, i) : r
            }
            var Ci = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t))._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }, n._unit = "day", n._majorUnit = void 0, n._offsets = {}, n._normalized = !1, n._parseOpts = void 0, n
                }
                return x(i, [{
                    key: "init",
                    value: function(t, e) {
                        var r = t.time || (t.time = {}),
                            s = this._adapter = new bt._date(t.adapters.date);
                        s.init(e), Object(n.eb)(r.displayFormats, s.formats()), this._parseOpts = {
                            parser: r.parser,
                            round: r.round,
                            isoWeekday: r.isoWeekday
                        }, a(c(i.prototype), "init", this).call(this, t), this._normalized = e.normalized
                    }
                }, {
                    key: "parse",
                    value: function(t, e) {
                        return void 0 === t ? null : Ai(this, t)
                    }
                }, {
                    key: "beforeLayout",
                    value: function() {
                        a(c(i.prototype), "beforeLayout", this).call(this), this._cache = {
                            data: [],
                            labels: [],
                            all: []
                        }
                    }
                }, {
                    key: "determineDataLimits",
                    value: function() {
                        var t = this.options,
                            e = this._adapter,
                            i = t.time.unit || "day",
                            a = this.getUserBounds(),
                            r = a.min,
                            s = a.max,
                            o = a.minDefined,
                            h = a.maxDefined;

                        function l(t) {
                            o || isNaN(t.min) || (r = Math.min(r, t.min)), h || isNaN(t.max) || (s = Math.max(s, t.max))
                        }
                        o && h || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), r = Object(n.Hb)(r) && !isNaN(r) ? r : +e.startOf(Date.now(), i), s = Object(n.Hb)(s) && !isNaN(s) ? s : +e.endOf(Date.now(), i) + 1, this.min = Math.min(r, s - 1), this.max = Math.max(r + 1, s)
                    }
                }, {
                    key: "_getLabelBounds",
                    value: function() {
                        var t = this.getLabelTimestamps(),
                            e = Number.POSITIVE_INFINITY,
                            i = Number.NEGATIVE_INFINITY;
                        return t.length && (e = t[0], i = t[t.length - 1]), {
                            min: e,
                            max: i
                        }
                    }
                }, {
                    key: "buildTicks",
                    value: function() {
                        var t = this.options,
                            e = t.time,
                            i = t.ticks,
                            a = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                        "ticks" === t.bounds && a.length && (this.min = this._userMin || a[0], this.max = this._userMax || a[a.length - 1]);
                        var r = this.min,
                            s = this.max,
                            o = Object(n.ab)(a, r, s);
                        return this._unit = e.unit || (i.autoSkip ? Di(e.minUnit, this.min, this.max, this._getLabelCapacity(r)) : function(t, e, i, n, a) {
                            for (var r = Si.length - 1; r >= Si.indexOf(i); r--) {
                                var s = Si[r];
                                if (Pi[s].common && t._adapter.diff(a, n, s) >= e - 1) return s
                            }
                            return Si[i ? Si.indexOf(i) : 0]
                        }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                            for (var e = Si.indexOf(t) + 1, i = Si.length; e < i; ++e)
                                if (Pi[Si[e]].common) return Si[e]
                        }(this._unit) : void 0, this.initOffsets(a), t.reverse && o.reverse(), Li(this, o, this._majorUnit)
                    }
                }, {
                    key: "afterAutoSkip",
                    value: function() {
                        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((function(t) {
                            return +t.value
                        })))
                    }
                }, {
                    key: "initOffsets",
                    value: function(t) {
                        var e, i, a = 0,
                            r = 0;
                        this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), a = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), r = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                        var s = t.length < 3 ? .5 : .25;
                        a = Object(n.f)(a, 0, s), r = Object(n.f)(r, 0, s), this._offsets = {
                            start: a,
                            end: r,
                            factor: 1 / (a + 1 + r)
                        }
                    }
                }, {
                    key: "_generate",
                    value: function() {
                        var t, e, i = this._adapter,
                            a = this.min,
                            r = this.max,
                            s = this.options,
                            o = s.time,
                            h = o.unit || Di(o.minUnit, a, r, this._getLabelCapacity(a)),
                            l = Object(n.Wb)(o.stepSize, 1),
                            u = "week" === h && o.isoWeekday,
                            c = Object(n.Yb)(u) || !0 === u,
                            f = {},
                            d = a;
                        if (c && (d = +i.startOf(d, "isoWeek", u)), d = +i.startOf(d, c ? "day" : h), i.diff(r, a, h) > 1e5 * l) throw new Error(a + " and " + r + " are too far apart with stepSize of " + l + " " + h);
                        var v = "data" === s.ticks.source && this.getDataTimestamps();
                        for (t = d, e = 0; t < r; t = +i.add(t, l, h), e++) Ri(f, t, v);
                        return t !== r && "ticks" !== s.bounds && 1 !== e || Ri(f, t, v), Object.keys(f).sort((function(t, e) {
                            return t - e
                        })).map((function(t) {
                            return +t
                        }))
                    }
                }, {
                    key: "getLabelForValue",
                    value: function(t) {
                        var e = this._adapter,
                            i = this.options.time;
                        return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
                    }
                }, {
                    key: "_tickFormatFunction",
                    value: function(t, e, i, a) {
                        var r = this.options,
                            s = r.time.displayFormats,
                            o = this._unit,
                            h = this._majorUnit,
                            l = o && s[o],
                            u = h && s[h],
                            c = i[e],
                            f = h && u && c && c.major,
                            d = this._adapter.format(t, a || (f ? u : l)),
                            v = r.ticks.callback;
                        return v ? Object(n.d)(v, [d, e, i], this) : d
                    }
                }, {
                    key: "generateTickLabels",
                    value: function(t) {
                        var e, i, n;
                        for (e = 0, i = t.length; e < i; ++e)(n = t[e]).label = this._tickFormatFunction(n.value, e, t)
                    }
                }, {
                    key: "getDecimalForValue",
                    value: function(t) {
                        return null === t ? NaN : (t - this.min) / (this.max - this.min)
                    }
                }, {
                    key: "getPixelForValue",
                    value: function(t) {
                        var e = this._offsets,
                            i = this.getDecimalForValue(t);
                        return this.getPixelForDecimal((e.start + i) * e.factor)
                    }
                }, {
                    key: "getValueForPixel",
                    value: function(t) {
                        var e = this._offsets,
                            i = this.getDecimalForPixel(t) / e.factor - e.end;
                        return this.min + i * (this.max - this.min)
                    }
                }, {
                    key: "_getLabelSize",
                    value: function(t) {
                        var e = this.options.ticks,
                            i = this.ctx.measureText(t).width,
                            a = Object(n.Ub)(this.isHorizontal() ? e.maxRotation : e.minRotation),
                            r = Math.cos(a),
                            s = Math.sin(a),
                            o = this._resolveTickFontOptions(0).size;
                        return {
                            w: i * r + o * s,
                            h: i * s + o * r
                        }
                    }
                }, {
                    key: "_getLabelCapacity",
                    value: function(t) {
                        var e = this.options.time,
                            i = e.displayFormats,
                            n = i[e.unit] || i.millisecond,
                            a = this._tickFormatFunction(t, 0, Li(this, [t], this._majorUnit), n),
                            r = this._getLabelSize(a),
                            s = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
                        return s > 0 ? s : 1
                    }
                }, {
                    key: "getDataTimestamps",
                    value: function() {
                        var t, e, i = this._cache.data || [];
                        if (i.length) return i;
                        var n = this.getMatchingVisibleMetas();
                        if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
                        for (t = 0, e = n.length; t < e; ++t) i = i.concat(n[t].controller.getAllParsedValues(this));
                        return this._cache.data = this.normalize(i)
                    }
                }, {
                    key: "getLabelTimestamps",
                    value: function() {
                        var t, e, i = this._cache.labels || [];
                        if (i.length) return i;
                        var n = this.getLabels();
                        for (t = 0, e = n.length; t < e; ++t) i.push(Ai(this, n[t]));
                        return this._cache.labels = this._normalized ? i : this.normalize(i)
                    }
                }, {
                    key: "normalize",
                    value: function(t) {
                        return Object(n.B)(t.sort(Ei))
                    }
                }]), i
            }(ct);

            function Ti(t, e, i) {
                var a, r, s, o, h = 0,
                    l = t.length - 1;
                if (i) {
                    if (e >= t[h].pos && e <= t[l].pos) {
                        var u = Object(n.A)(t, "pos", e);
                        h = u.lo, l = u.hi
                    }
                    var c = t[h];
                    a = c.pos, s = c.time;
                    var f = t[l];
                    r = f.pos, o = f.time
                } else {
                    if (e >= t[h].time && e <= t[l].time) {
                        var d = Object(n.A)(t, "time", e);
                        h = d.lo, l = d.hi
                    }
                    var v = t[h];
                    a = v.time, s = v.pos;
                    var p = t[l];
                    r = p.time, o = p.pos
                }
                var g = r - a;
                return g ? s + (o - s) * (e - a) / g : s
            }
            Ci.id = "time", Ci.defaults = {
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    source: "auto",
                    major: {
                        enabled: !1
                    }
                }
            };
            var Ii = function(t) {
                s(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t))._table = [], n._minPos = void 0, n._tableRange = void 0, n
                }
                return x(i, [{
                    key: "initOffsets",
                    value: function() {
                        var t = this._getTimestampsForTable(),
                            e = this._table = this.buildLookupTable(t);
                        this._minPos = Ti(e, this.min), this._tableRange = Ti(e, this.max) - this._minPos, a(c(i.prototype), "initOffsets", this).call(this, t)
                    }
                }, {
                    key: "buildLookupTable",
                    value: function(t) {
                        var e, i, n, a, r, s = this.min,
                            o = this.max,
                            h = [],
                            l = [];
                        for (e = 0, i = t.length; e < i; ++e)(a = t[e]) >= s && a <= o && h.push(a);
                        if (h.length < 2) return [{
                            time: s,
                            pos: 0
                        }, {
                            time: o,
                            pos: 1
                        }];
                        for (e = 0, i = h.length; e < i; ++e) r = h[e + 1], n = h[e - 1], a = h[e], Math.round((r + n) / 2) !== a && l.push({
                            time: a,
                            pos: e / (i - 1)
                        });
                        return l
                    }
                }, {
                    key: "_getTimestampsForTable",
                    value: function() {
                        var t = this._cache.all || [];
                        if (t.length) return t;
                        var e = this.getDataTimestamps(),
                            i = this.getLabelTimestamps();
                        return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t
                    }
                }, {
                    key: "getDecimalForValue",
                    value: function(t) {
                        return (Ti(this._table, t) - this._minPos) / this._tableRange
                    }
                }, {
                    key: "getValueForPixel",
                    value: function(t) {
                        var e = this._offsets,
                            i = this.getDecimalForPixel(t) / e.factor - e.end;
                        return Ti(this._table, i * this._tableRange + this._minPos, !0)
                    }
                }]), i
            }(Ci);
            Ii.id = "timeseries", Ii.defaults = Ci.defaults
        },
        tjlA: function(t, e, i) {
            "use strict";
            (function(t) {
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <http://feross.org>
                 * @license  MIT
                 */
                var n = i("H7XF"),
                    a = i("kVK+"),
                    r = i("49sm");

                function s() {
                    return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function o(t, e) {
                    if (s() < e) throw new RangeError("Invalid typed array length");
                    return h.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = h.prototype : (null === t && (t = new h(e)), t.length = e), t
                }

                function h(t, e, i) {
                    if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h)) return new h(t, e, i);
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return c(this, t)
                    }
                    return l(this, t, e, i)
                }

                function l(t, e, i, n) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, i, n) {
                        if (e.byteLength, i < 0 || e.byteLength < i) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
                        e = void 0 === i && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, i) : new Uint8Array(e, i, n);
                        h.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = h.prototype : t = f(t, e);
                        return t
                    }(t, e, i, n) : "string" == typeof e ? function(t, e, i) {
                        "string" == typeof i && "" !== i || (i = "utf8");
                        if (!h.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
                        var n = 0 | v(e, i),
                            a = (t = o(t, n)).write(e, i);
                        a !== n && (t = t.slice(0, a));
                        return t
                    }(t, e, i) : function(t, e) {
                        if (h.isBuffer(e)) {
                            var i = 0 | d(e.length);
                            return 0 === (t = o(t, i)).length || e.copy(t, 0, 0, i), t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? o(t, 0) : f(t, e);
                            if ("Buffer" === e.type && r(e.data)) return f(t, e.data)
                        }
                        var n;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function u(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function c(t, e) {
                    if (u(e), t = o(t, e < 0 ? 0 : 0 | d(e)), !h.TYPED_ARRAY_SUPPORT)
                        for (var i = 0; i < e; ++i) t[i] = 0;
                    return t
                }

                function f(t, e) {
                    var i = e.length < 0 ? 0 : 0 | d(e.length);
                    t = o(t, i);
                    for (var n = 0; n < i; n += 1) t[n] = 255 & e[n];
                    return t
                }

                function d(t) {
                    if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                    return 0 | t
                }

                function v(t, e) {
                    if (h.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var i = t.length;
                    if (0 === i) return 0;
                    for (var n = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return i;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return V(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * i;
                        case "hex":
                            return i >>> 1;
                        case "base64":
                            return N(t).length;
                        default:
                            if (n) return V(t).length;
                            e = ("" + e).toLowerCase(), n = !0
                    }
                }

                function p(t, e, i) {
                    var n = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
                    if ((i >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return E(this, e, i);
                        case "utf8":
                        case "utf-8":
                            return M(this, e, i);
                        case "ascii":
                            return P(this, e, i);
                        case "latin1":
                        case "binary":
                            return S(this, e, i);
                        case "base64":
                            return j(this, e, i);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return A(this, e, i);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), n = !0
                    }
                }

                function g(t, e, i) {
                    var n = t[e];
                    t[e] = t[i], t[i] = n
                }

                function b(t, e, i, n, a) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof i ? (n = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = a ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
                        if (a) return -1;
                        i = t.length - 1
                    } else if (i < 0) {
                        if (!a) return -1;
                        i = 0
                    }
                    if ("string" == typeof e && (e = h.from(e, n)), h.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, i, n, a);
                    if ("number" == typeof e) return e &= 255, h.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : y(t, [e], i, n, a);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function y(t, e, i, n, a) {
                    var r, s = 1,
                        o = t.length,
                        h = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        s = 2, o /= 2, h /= 2, i /= 2
                    }

                    function l(t, e) {
                        return 1 === s ? t[e] : t.readUInt16BE(e * s)
                    }
                    if (a) {
                        var u = -1;
                        for (r = i; r < o; r++)
                            if (l(t, r) === l(e, -1 === u ? 0 : r - u)) {
                                if (-1 === u && (u = r), r - u + 1 === h) return u * s
                            } else - 1 !== u && (r -= r - u), u = -1
                    } else
                        for (i + h > o && (i = o - h), r = i; r >= 0; r--) {
                            for (var c = !0, f = 0; f < h; f++)
                                if (l(t, r + f) !== l(e, f)) {
                                    c = !1;
                                    break
                                } if (c) return r
                        }
                    return -1
                }

                function m(t, e, i, n) {
                    i = Number(i) || 0;
                    var a = t.length - i;
                    n ? (n = Number(n)) > a && (n = a) : n = a;
                    var r = e.length;
                    if (r % 2 != 0) throw new TypeError("Invalid hex string");
                    n > r / 2 && (n = r / 2);
                    for (var s = 0; s < n; ++s) {
                        var o = parseInt(e.substr(2 * s, 2), 16);
                        if (isNaN(o)) return s;
                        t[i + s] = o
                    }
                    return s
                }

                function _(t, e, i, n) {
                    return W(V(e, t.length - i), t, i, n)
                }

                function x(t, e, i, n) {
                    return W(function(t) {
                        for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
                        return e
                    }(e), t, i, n)
                }

                function k(t, e, i, n) {
                    return x(t, e, i, n)
                }

                function O(t, e, i, n) {
                    return W(N(e), t, i, n)
                }

                function w(t, e, i, n) {
                    return W(function(t, e) {
                        for (var i, n, a, r = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) i = t.charCodeAt(s), n = i >> 8, a = i % 256, r.push(a), r.push(n);
                        return r
                    }(e, t.length - i), t, i, n)
                }

                function j(t, e, i) {
                    return 0 === e && i === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, i))
                }

                function M(t, e, i) {
                    i = Math.min(t.length, i);
                    for (var n = [], a = e; a < i;) {
                        var r, s, o, h, l = t[a],
                            u = null,
                            c = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                        if (a + c <= i) switch (c) {
                            case 1:
                                l < 128 && (u = l);
                                break;
                            case 2:
                                128 == (192 & (r = t[a + 1])) && (h = (31 & l) << 6 | 63 & r) > 127 && (u = h);
                                break;
                            case 3:
                                r = t[a + 1], s = t[a + 2], 128 == (192 & r) && 128 == (192 & s) && (h = (15 & l) << 12 | (63 & r) << 6 | 63 & s) > 2047 && (h < 55296 || h > 57343) && (u = h);
                                break;
                            case 4:
                                r = t[a + 1], s = t[a + 2], o = t[a + 3], 128 == (192 & r) && 128 == (192 & s) && 128 == (192 & o) && (h = (15 & l) << 18 | (63 & r) << 12 | (63 & s) << 6 | 63 & o) > 65535 && h < 1114112 && (u = h)
                        }
                        null === u ? (u = 65533, c = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), a += c
                    }
                    return function(t) {
                        var e = t.length;
                        if (e <= 4096) return String.fromCharCode.apply(String, t);
                        var i = "",
                            n = 0;
                        for (; n < e;) i += String.fromCharCode.apply(String, t.slice(n, n += 4096));
                        return i
                    }(n)
                }
                e.Buffer = h, e.SlowBuffer = function(t) {
                    +t != t && (t = 0);
                    return h.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, h.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(), e.kMaxLength = s(), h.poolSize = 8192, h._augment = function(t) {
                    return t.__proto__ = h.prototype, t
                }, h.from = function(t, e, i) {
                    return l(null, t, e, i)
                }, h.TYPED_ARRAY_SUPPORT && (h.prototype.__proto__ = Uint8Array.prototype, h.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
                    value: null,
                    configurable: !0
                })), h.alloc = function(t, e, i) {
                    return function(t, e, i, n) {
                        return u(e), e <= 0 ? o(t, e) : void 0 !== i ? "string" == typeof n ? o(t, e).fill(i, n) : o(t, e).fill(i) : o(t, e)
                    }(null, t, e, i)
                }, h.allocUnsafe = function(t) {
                    return c(null, t)
                }, h.allocUnsafeSlow = function(t) {
                    return c(null, t)
                }, h.isBuffer = function(t) {
                    return !(null == t || !t._isBuffer)
                }, h.compare = function(t, e) {
                    if (!h.isBuffer(t) || !h.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var i = t.length, n = e.length, a = 0, r = Math.min(i, n); a < r; ++a)
                        if (t[a] !== e[a]) {
                            i = t[a], n = e[a];
                            break
                        } return i < n ? -1 : n < i ? 1 : 0
                }, h.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, h.concat = function(t, e) {
                    if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return h.alloc(0);
                    var i;
                    if (void 0 === e)
                        for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
                    var n = h.allocUnsafe(e),
                        a = 0;
                    for (i = 0; i < t.length; ++i) {
                        var s = t[i];
                        if (!h.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                        s.copy(n, a), a += s.length
                    }
                    return n
                }, h.byteLength = v, h.prototype._isBuffer = !0, h.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) g(this, e, e + 1);
                    return this
                }, h.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
                    return this
                }, h.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
                    return this
                }, h.prototype.toString = function() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? M(this, 0, t) : p.apply(this, arguments)
                }, h.prototype.equals = function(t) {
                    if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === h.compare(this, t)
                }, h.prototype.inspect = function() {
                    var t = "",
                        i = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (t += " ... ")), "<Buffer " + t + ">"
                }, h.prototype.compare = function(t, e, i, n, a) {
                    if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === n && (n = 0), void 0 === a && (a = this.length), e < 0 || i > t.length || n < 0 || a > this.length) throw new RangeError("out of range index");
                    if (n >= a && e >= i) return 0;
                    if (n >= a) return -1;
                    if (e >= i) return 1;
                    if (this === t) return 0;
                    for (var r = (a >>>= 0) - (n >>>= 0), s = (i >>>= 0) - (e >>>= 0), o = Math.min(r, s), l = this.slice(n, a), u = t.slice(e, i), c = 0; c < o; ++c)
                        if (l[c] !== u[c]) {
                            r = l[c], s = u[c];
                            break
                        } return r < s ? -1 : s < r ? 1 : 0
                }, h.prototype.includes = function(t, e, i) {
                    return -1 !== this.indexOf(t, e, i)
                }, h.prototype.indexOf = function(t, e, i) {
                    return b(this, t, e, i, !0)
                }, h.prototype.lastIndexOf = function(t, e, i) {
                    return b(this, t, e, i, !1)
                }, h.prototype.write = function(t, e, i, n) {
                    if (void 0 === e) n = "utf8", i = this.length, e = 0;
                    else if (void 0 === i && "string" == typeof e) n = e, i = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(i) ? (i |= 0, void 0 === n && (n = "utf8")) : (n = i, i = void 0)
                    }
                    var a = this.length - e;
                    if ((void 0 === i || i > a) && (i = a), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var r = !1;;) switch (n) {
                        case "hex":
                            return m(this, t, e, i);
                        case "utf8":
                        case "utf-8":
                            return _(this, t, e, i);
                        case "ascii":
                            return x(this, t, e, i);
                        case "latin1":
                        case "binary":
                            return k(this, t, e, i);
                        case "base64":
                            return O(this, t, e, i);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return w(this, t, e, i);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), r = !0
                    }
                }, h.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };

                function P(t, e, i) {
                    var n = "";
                    i = Math.min(t.length, i);
                    for (var a = e; a < i; ++a) n += String.fromCharCode(127 & t[a]);
                    return n
                }

                function S(t, e, i) {
                    var n = "";
                    i = Math.min(t.length, i);
                    for (var a = e; a < i; ++a) n += String.fromCharCode(t[a]);
                    return n
                }

                function E(t, e, i) {
                    var n = t.length;
                    (!e || e < 0) && (e = 0), (!i || i < 0 || i > n) && (i = n);
                    for (var a = "", r = e; r < i; ++r) a += B(t[r]);
                    return a
                }

                function A(t, e, i) {
                    for (var n = t.slice(e, i), a = "", r = 0; r < n.length; r += 2) a += String.fromCharCode(n[r] + 256 * n[r + 1]);
                    return a
                }

                function D(t, e, i) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > i) throw new RangeError("Trying to access beyond buffer length")
                }

                function R(t, e, i, n, a, r) {
                    if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > a || e < r) throw new RangeError('"value" argument is out of bounds');
                    if (i + n > t.length) throw new RangeError("Index out of range")
                }

                function L(t, e, i, n) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var a = 0, r = Math.min(t.length - i, 2); a < r; ++a) t[i + a] = (e & 255 << 8 * (n ? a : 1 - a)) >>> 8 * (n ? a : 1 - a)
                }

                function C(t, e, i, n) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var a = 0, r = Math.min(t.length - i, 4); a < r; ++a) t[i + a] = e >>> 8 * (n ? a : 3 - a) & 255
                }

                function T(t, e, i, n, a, r) {
                    if (i + n > t.length) throw new RangeError("Index out of range");
                    if (i < 0) throw new RangeError("Index out of range")
                }

                function I(t, e, i, n, r) {
                    return r || T(t, 0, i, 4), a.write(t, e, i, n, 23, 4), i + 4
                }

                function z(t, e, i, n, r) {
                    return r || T(t, 0, i, 8), a.write(t, e, i, n, 52, 8), i + 8
                }
                h.prototype.slice = function(t, e) {
                    var i, n = this.length;
                    if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), h.TYPED_ARRAY_SUPPORT)(i = this.subarray(t, e)).__proto__ = h.prototype;
                    else {
                        var a = e - t;
                        i = new h(a, void 0);
                        for (var r = 0; r < a; ++r) i[r] = this[r + t]
                    }
                    return i
                }, h.prototype.readUIntLE = function(t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var n = this[t], a = 1, r = 0; ++r < e && (a *= 256);) n += this[t + r] * a;
                    return n
                }, h.prototype.readUIntBE = function(t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var n = this[t + --e], a = 1; e > 0 && (a *= 256);) n += this[t + --e] * a;
                    return n
                }, h.prototype.readUInt8 = function(t, e) {
                    return e || D(t, 1, this.length), this[t]
                }, h.prototype.readUInt16LE = function(t, e) {
                    return e || D(t, 2, this.length), this[t] | this[t + 1] << 8
                }, h.prototype.readUInt16BE = function(t, e) {
                    return e || D(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, h.prototype.readUInt32LE = function(t, e) {
                    return e || D(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, h.prototype.readUInt32BE = function(t, e) {
                    return e || D(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, h.prototype.readIntLE = function(t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var n = this[t], a = 1, r = 0; ++r < e && (a *= 256);) n += this[t + r] * a;
                    return n >= (a *= 128) && (n -= Math.pow(2, 8 * e)), n
                }, h.prototype.readIntBE = function(t, e, i) {
                    t |= 0, e |= 0, i || D(t, e, this.length);
                    for (var n = e, a = 1, r = this[t + --n]; n > 0 && (a *= 256);) r += this[t + --n] * a;
                    return r >= (a *= 128) && (r -= Math.pow(2, 8 * e)), r
                }, h.prototype.readInt8 = function(t, e) {
                    return e || D(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, h.prototype.readInt16LE = function(t, e) {
                    e || D(t, 2, this.length);
                    var i = this[t] | this[t + 1] << 8;
                    return 32768 & i ? 4294901760 | i : i
                }, h.prototype.readInt16BE = function(t, e) {
                    e || D(t, 2, this.length);
                    var i = this[t + 1] | this[t] << 8;
                    return 32768 & i ? 4294901760 | i : i
                }, h.prototype.readInt32LE = function(t, e) {
                    return e || D(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, h.prototype.readInt32BE = function(t, e) {
                    return e || D(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, h.prototype.readFloatLE = function(t, e) {
                    return e || D(t, 4, this.length), a.read(this, t, !0, 23, 4)
                }, h.prototype.readFloatBE = function(t, e) {
                    return e || D(t, 4, this.length), a.read(this, t, !1, 23, 4)
                }, h.prototype.readDoubleLE = function(t, e) {
                    return e || D(t, 8, this.length), a.read(this, t, !0, 52, 8)
                }, h.prototype.readDoubleBE = function(t, e) {
                    return e || D(t, 8, this.length), a.read(this, t, !1, 52, 8)
                }, h.prototype.writeUIntLE = function(t, e, i, n) {
                    (t = +t, e |= 0, i |= 0, n) || R(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                    var a = 1,
                        r = 0;
                    for (this[e] = 255 & t; ++r < i && (a *= 256);) this[e + r] = t / a & 255;
                    return e + i
                }, h.prototype.writeUIntBE = function(t, e, i, n) {
                    (t = +t, e |= 0, i |= 0, n) || R(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                    var a = i - 1,
                        r = 1;
                    for (this[e + a] = 255 & t; --a >= 0 && (r *= 256);) this[e + a] = t / r & 255;
                    return e + i
                }, h.prototype.writeUInt8 = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 1, 255, 0), h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, h.prototype.writeUInt16LE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2
                }, h.prototype.writeUInt16BE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2
                }, h.prototype.writeUInt32LE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : C(this, t, e, !0), e + 4
                }, h.prototype.writeUInt32BE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : C(this, t, e, !1), e + 4
                }, h.prototype.writeIntLE = function(t, e, i, n) {
                    if (t = +t, e |= 0, !n) {
                        var a = Math.pow(2, 8 * i - 1);
                        R(this, t, e, i, a - 1, -a)
                    }
                    var r = 0,
                        s = 1,
                        o = 0;
                    for (this[e] = 255 & t; ++r < i && (s *= 256);) t < 0 && 0 === o && 0 !== this[e + r - 1] && (o = 1), this[e + r] = (t / s >> 0) - o & 255;
                    return e + i
                }, h.prototype.writeIntBE = function(t, e, i, n) {
                    if (t = +t, e |= 0, !n) {
                        var a = Math.pow(2, 8 * i - 1);
                        R(this, t, e, i, a - 1, -a)
                    }
                    var r = i - 1,
                        s = 1,
                        o = 0;
                    for (this[e + r] = 255 & t; --r >= 0 && (s *= 256);) t < 0 && 0 === o && 0 !== this[e + r + 1] && (o = 1), this[e + r] = (t / s >> 0) - o & 255;
                    return e + i
                }, h.prototype.writeInt8 = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 1, 127, -128), h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, h.prototype.writeInt16LE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2
                }, h.prototype.writeInt16BE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2
                }, h.prototype.writeInt32LE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 4, 2147483647, -2147483648), h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : C(this, t, e, !0), e + 4
                }, h.prototype.writeInt32BE = function(t, e, i) {
                    return t = +t, e |= 0, i || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : C(this, t, e, !1), e + 4
                }, h.prototype.writeFloatLE = function(t, e, i) {
                    return I(this, t, e, !0, i)
                }, h.prototype.writeFloatBE = function(t, e, i) {
                    return I(this, t, e, !1, i)
                }, h.prototype.writeDoubleLE = function(t, e, i) {
                    return z(this, t, e, !0, i)
                }, h.prototype.writeDoubleBE = function(t, e, i) {
                    return z(this, t, e, !1, i)
                }, h.prototype.copy = function(t, e, i, n) {
                    if (i || (i = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < i && (n = i), n === i) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), t.length - e < n - i && (n = t.length - e + i);
                    var a, r = n - i;
                    if (this === t && i < e && e < n)
                        for (a = r - 1; a >= 0; --a) t[a + e] = this[a + i];
                    else if (r < 1e3 || !h.TYPED_ARRAY_SUPPORT)
                        for (a = 0; a < r; ++a) t[a + e] = this[a + i];
                    else Uint8Array.prototype.set.call(t, this.subarray(i, i + r), e);
                    return r
                }, h.prototype.fill = function(t, e, i, n) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (n = e, e = 0, i = this.length) : "string" == typeof i && (n = i, i = this.length), 1 === t.length) {
                            var a = t.charCodeAt(0);
                            a < 256 && (t = a)
                        }
                        if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                        if ("string" == typeof n && !h.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                    } else "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
                    if (i <= e) return this;
                    var r;
                    if (e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0), "number" == typeof t)
                        for (r = e; r < i; ++r) this[r] = t;
                    else {
                        var s = h.isBuffer(t) ? t : V(new h(t, n).toString()),
                            o = s.length;
                        for (r = 0; r < i - e; ++r) this[r + e] = s[r % o]
                    }
                    return this
                };
                var F = /[^+\/0-9A-Za-z-_]/g;

                function B(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function V(t, e) {
                    var i;
                    e = e || 1 / 0;
                    for (var n = t.length, a = null, r = [], s = 0; s < n; ++s) {
                        if ((i = t.charCodeAt(s)) > 55295 && i < 57344) {
                            if (!a) {
                                if (i > 56319) {
                                    (e -= 3) > -1 && r.push(239, 191, 189);
                                    continue
                                }
                                if (s + 1 === n) {
                                    (e -= 3) > -1 && r.push(239, 191, 189);
                                    continue
                                }
                                a = i;
                                continue
                            }
                            if (i < 56320) {
                                (e -= 3) > -1 && r.push(239, 191, 189), a = i;
                                continue
                            }
                            i = 65536 + (a - 55296 << 10 | i - 56320)
                        } else a && (e -= 3) > -1 && r.push(239, 191, 189);
                        if (a = null, i < 128) {
                            if ((e -= 1) < 0) break;
                            r.push(i)
                        } else if (i < 2048) {
                            if ((e -= 2) < 0) break;
                            r.push(i >> 6 | 192, 63 & i | 128)
                        } else if (i < 65536) {
                            if ((e -= 3) < 0) break;
                            r.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                        } else {
                            if (!(i < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            r.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                        }
                    }
                    return r
                }

                function N(t) {
                    return n.toByteArray(function(t) {
                        if ((t = function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                            }(t).replace(F, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function W(t, e, i, n) {
                    for (var a = 0; a < n && !(a + i >= e.length || a >= t.length); ++a) e[a + i] = t[a];
                    return a
                }
            }).call(this, i("yLpj"))
        }
    }
]);