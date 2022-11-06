(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        "2SVd": function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            }
        },
        "35eG": function(t, e, i) {
            var n = i("7gN7");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(n, r);
            n.locals && (t.exports = n.locals)
        },
        "3WHO": function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return Te
            })), i.d(e, "b", (function() {
                return $
            })), i.d(e, "c", (function() {
                return G
            })), i.d(e, "d", (function() {
                return Se
            })), i.d(e, "e", (function() {
                return q
            })), i.d(e, "f", (function() {
                return X
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

            function r() {
                return (r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
                    var n = a(t, e);
                    if (n) {
                        var r = Object.getOwnPropertyDescriptor(n, e);
                        return r.get ? r.get.call(arguments.length < 3 ? t : i) : r.value
                    }
                }).apply(this, arguments)
            }

            function a(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
                return t
            }

            function o(t, e) {
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
            }

            function s(t, e) {
                return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
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
                    var i, n = h(t);
                    if (e) {
                        var r = h(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return c(this, i)
                }
            }

            function c(t, e) {
                if (e && ("object" === p(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return u(t)
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function f(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == i) return;
                    var n, r, a = [],
                        o = !0,
                        s = !1;
                    try {
                        for (i = i.call(t); !(o = (n = i.next()).done) && (a.push(n.value), !e || a.length !== e); o = !0);
                    } catch (t) {
                        s = !0, r = t
                    } finally {
                        try {
                            o || null == i.return || i.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return a
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
                            r = function() {};
                        return {
                            s: r,
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
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    s = !1;
                return {
                    s: function() {
                        i = i.call(t)
                    },
                    n: function() {
                        var t = i.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, a = t
                    },
                    f: function() {
                        try {
                            o || null == i.return || i.return()
                        } finally {
                            if (s) throw a
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

            function x(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function _(t, e, i) {
                return e && x(t.prototype, e), i && x(t, i), Object.defineProperty(t, "prototype", {
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
                    return _(t, [{
                        key: "_notify",
                        value: function(t, e, i, n) {
                            var r = e.listeners[n],
                                a = e.duration;
                            r.forEach((function(n) {
                                return n({
                                    chart: t,
                                    initial: e.initial,
                                    numSteps: a,
                                    currentStep: Math.min(i - e.start, a)
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
                            this._charts.forEach((function(n, r) {
                                if (n.running && n.items.length) {
                                    for (var a, o = n.items, s = o.length - 1, l = !1; s >= 0; --s)(a = o[s])._active ? (a._total > n.duration && (n.duration = a._total), a.tick(e), l = !0) : (o[s] = o[o.length - 1], o.pop());
                                    l && (r.draw(), t._notify(r, n, e, "progress")), o.length || (n.running = !1, t._notify(r, n, e, "complete"), n.initial = !1), i += o.length
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
                        var r = Object(n.Db)(t || "transparent"),
                            a = r.valid && Object(n.Db)(e || "transparent");
                        return a && a.valid ? a.mix(r, i).hexString() : e
                    },
                    number: function(t, e, i) {
                        return t + (e - t) * i
                    }
                },
                w = function() {
                    function t(e, i, r, a) {
                        m(this, t);
                        var o = i[r];
                        a = Object(n.C)([e.to, a, o, e.from]);
                        var s = Object(n.C)([e.from, o, a]);
                        this._active = !0, this._fn = e.fn || O[e.type || p(s)], this._easing = n.Fb[e.easing] || n.Fb.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = i, this._prop = r, this._from = s, this._to = a, this._promises = void 0
                    }
                    return _(t, [{
                        key: "active",
                        value: function() {
                            return this._active
                        }
                    }, {
                        key: "update",
                        value: function(t, e, i) {
                            if (this._active) {
                                this._notify(!1);
                                var r = this._target[this._prop],
                                    a = i - this._start,
                                    o = this._duration - a;
                                this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += a, this._loop = !!t.loop, this._to = Object(n.C)([t.to, e, r, t.from]), this._from = Object(n.C)([t.from, r, e])
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
                                r = this._prop,
                                a = this._from,
                                o = this._loop,
                                s = this._to;
                            if (this._active = a !== s && (o || i < n), !this._active) return this._target[r] = s, void this._notify(!0);
                            i < 0 ? this._target[r] = a : (e = i / n % 2, e = o && e > 1 ? 2 - e : e, e = this._easing(Math.min(1, Math.max(0, e))), this._target[r] = this._fn(a, s, e))
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
                return _(t, [{
                    key: "configure",
                    value: function(t) {
                        if (Object(n.Jb)(t)) {
                            var e = this._properties;
                            Object.getOwnPropertyNames(t).forEach((function(i) {
                                var r = t[i];
                                if (Object(n.Jb)(r)) {
                                    var a, o = {},
                                        s = v(j);
                                    try {
                                        for (s.s(); !(a = s.n()).done;) {
                                            var l = a.value;
                                            o[l] = r[l]
                                        }
                                    } catch (t) {
                                        s.e(t)
                                    } finally {
                                        s.f()
                                    }(Object(n.Cb)(r.properties) && r.properties || [i]).forEach((function(t) {
                                        t !== i && e.has(t) || e.set(t, o)
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
                        var r = this._createAnimations(n, i);
                        return i.$shared && function(t, e) {
                            for (var i = [], n = Object.keys(e), r = 0; r < n.length; r++) {
                                var a = t[n[r]];
                                a && a.active() && i.push(a.wait())
                            }
                            return Promise.all(i)
                        }(t.options.$animations, i).then((function() {
                            t.options = i
                        }), (function() {})), r
                    }
                }, {
                    key: "_createAnimations",
                    value: function(t, e) {
                        var i, n = this._properties,
                            r = [],
                            a = t.$animations || (t.$animations = {}),
                            o = Object.keys(e),
                            s = Date.now();
                        for (i = o.length - 1; i >= 0; --i) {
                            var l = o[i];
                            if ("$" !== l.charAt(0))
                                if ("options" !== l) {
                                    var c = e[l],
                                        u = a[l],
                                        h = n.get(l);
                                    if (u) {
                                        if (h && u.active()) {
                                            u.update(h, c, s);
                                            continue
                                        }
                                        u.cancel()
                                    }
                                    h && h.duration ? (a[l] = u = new w(h, t, l, c), r.push(u)) : t[l] = c
                                } else r.push.apply(r, g(this._animateOptions(t, e)))
                        }
                        return r
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

            function S(t, e) {
                var i = t && t.options || {},
                    n = i.reverse,
                    r = void 0 === i.min ? e : 0,
                    a = void 0 === i.max ? e : 0;
                return {
                    start: n ? a : r,
                    end: n ? r : a
                }
            }

            function E(t, e) {
                var i, n, r = [],
                    a = t._getSortedDatasetMetas(e);
                for (i = 0, n = a.length; i < n; ++i) r.push(a[i].index);
                return r
            }

            function P(t, e, i) {
                var r, a, o, s, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    c = t.keys,
                    u = "single" === l.mode;
                if (null !== e) {
                    for (r = 0, a = c.length; r < a; ++r) {
                        if ((o = +c[r]) === i) {
                            if (l.all) continue;
                            break
                        }
                        s = t.values[o], Object(n.Hb)(s) && (u || 0 === e || Object(n.Tb)(e) === Object(n.Tb)(s)) && (e += s)
                    }
                    return e
                }
            }

            function L(t, e) {
                var i = t && t.options.stacked;
                return i || void 0 === i && void 0 !== e.stack
            }

            function D(t, e, i) {
                var n = t[e] || (t[e] = {});
                return n[i] || (n[i] = {})
            }

            function C(t, e, i, n) {
                var r, a = v(e.getMatchingVisibleMetas(n).reverse());
                try {
                    for (a.s(); !(r = a.n()).done;) {
                        var o = r.value,
                            s = t[o.index];
                        if (i && s > 0 || !i && s < 0) return o.index
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return null
            }

            function A(t, e) {
                for (var i, n = t.chart, r = t._cachedMeta, a = n._stacks || (n._stacks = {}), o = r.iScale, s = r.vScale, l = r.index, c = o.axis, u = s.axis, h = function(t, e, i) {
                        return "".concat(t.id, ".").concat(e.id, ".").concat(i.stack || i.type)
                    }(o, s, r), f = e.length, d = 0; d < f; ++d) {
                    var v = e[d],
                        p = v[c],
                        g = v[u];
                    (i = (v._stacks || (v._stacks = {}))[u] = D(a, h, p))[l] = g, i._top = C(i, s, !0, r.type), i._bottom = C(i, s, !1, r.type)
                }
            }

            function T(t, e) {
                var i = t.scales;
                return Object.keys(i).filter((function(t) {
                    return i[t].axis === e
                })).shift()
            }

            function R(t, e) {
                var i = t.controller.index,
                    n = t.vScale && t.vScale.axis;
                if (n) {
                    var r, a = v(e = e || t._parsed);
                    try {
                        for (a.s(); !(r = a.n()).done;) {
                            var o = r.value._stacks;
                            if (!o || void 0 === o[n] || void 0 === o[n][i]) return;
                            delete o[n][i]
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
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
                    return _(t, [{
                        key: "initialize",
                        value: function() {
                            var t = this._cachedMeta;
                            this.configure(), this.linkScales(), t._stacked = L(t.vScale, t), this.addElements()
                        }
                    }, {
                        key: "updateIndex",
                        value: function(t) {
                            this.index !== t && R(this._cachedMeta), this.index = t
                        }
                    }, {
                        key: "linkScales",
                        value: function() {
                            var t = this.chart,
                                e = this._cachedMeta,
                                i = this.getDataset(),
                                r = function(t, e, i, n) {
                                    return "x" === t ? e : "r" === t ? n : i
                                },
                                a = e.xAxisID = Object(n.Wb)(i.xAxisID, T(t, "x")),
                                o = e.yAxisID = Object(n.Wb)(i.yAxisID, T(t, "y")),
                                s = e.rAxisID = Object(n.Wb)(i.rAxisID, T(t, "r")),
                                l = e.indexAxis,
                                c = e.iAxisID = r(l, a, o, s),
                                u = e.vAxisID = r(l, o, a, s);
                            e.xScale = this.getScaleForId(a), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(s), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(u)
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
                            this._data && Object(n.Vb)(this._data, this), t._stacked && R(t)
                        }
                    }, {
                        key: "_dataCheck",
                        value: function() {
                            var t = this.getDataset(),
                                e = t.data || (t.data = []),
                                i = this._data;
                            if (Object(n.Jb)(e)) this._data = function(t) {
                                var e, i, n, r = Object.keys(t),
                                    a = new Array(r.length);
                                for (e = 0, i = r.length; e < i; ++e) n = r[e], a[e] = {
                                    x: n,
                                    y: t[n]
                                };
                                return a
                            }(e);
                            else if (i !== e) {
                                if (i) {
                                    Object(n.Vb)(i, this);
                                    var r = this._cachedMeta;
                                    R(r), r._parsed = []
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
                            var r = e._stacked;
                            e._stacked = L(e.vScale, e), e.stack !== i.stack && (n = !0, R(e), e.stack = i.stack), this._resyncElements(t), (n || r !== e._stacked) && A(this, e._parsed)
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
                            var i, r, a, o = this._cachedMeta,
                                s = this._data,
                                l = o.iScale,
                                c = o._stacked,
                                u = l.axis,
                                h = 0 === t && e === s.length || o._sorted,
                                f = t > 0 && o._parsed[t - 1];
                            if (!1 === this._parsing) o._parsed = s, o._sorted = !0, a = s;
                            else {
                                a = Object(n.Cb)(s[t]) ? this.parseArrayData(o, s, t, e) : Object(n.Jb)(s[t]) ? this.parseObjectData(o, s, t, e) : this.parsePrimitiveData(o, s, t, e);
                                for (i = 0; i < e; ++i) o._parsed[i + t] = r = a[i], h && ((null === r[u] || f && r[u] < f[u]) && (h = !1), f = r);
                                o._sorted = h
                            }
                            c && A(this, a)
                        }
                    }, {
                        key: "parsePrimitiveData",
                        value: function(t, e, i, n) {
                            var r, a, o, s = t.iScale,
                                l = t.vScale,
                                c = s.axis,
                                u = l.axis,
                                h = s.getLabels(),
                                f = s === l,
                                v = new Array(n);
                            for (r = 0, a = n; r < a; ++r) {
                                var p;
                                o = r + i, v[r] = (d(p = {}, c, f || s.parse(h[o], o)), d(p, u, l.parse(e[o], o)), p)
                            }
                            return v
                        }
                    }, {
                        key: "parseArrayData",
                        value: function(t, e, i, n) {
                            var r, a, o, s, l = t.xScale,
                                c = t.yScale,
                                u = new Array(n);
                            for (r = 0, a = n; r < a; ++r) s = e[o = r + i], u[r] = {
                                x: l.parse(s[0], o),
                                y: c.parse(s[1], o)
                            };
                            return u
                        }
                    }, {
                        key: "parseObjectData",
                        value: function(t, e, i, r) {
                            var a, o, s, l, c = t.xScale,
                                u = t.yScale,
                                h = this._parsing,
                                f = h.xAxisKey,
                                d = void 0 === f ? "x" : f,
                                v = h.yAxisKey,
                                p = void 0 === v ? "y" : v,
                                g = new Array(r);
                            for (a = 0, o = r; a < o; ++a) l = e[s = a + i], g[a] = {
                                x: c.parse(Object(n.Gb)(l, d), s),
                                y: u.parse(Object(n.Gb)(l, p), s)
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
                                r = this._cachedMeta,
                                a = e[t.axis];
                            return P({
                                keys: E(n, !0),
                                values: e._stacks[t.axis]
                            }, a, r.index, {
                                mode: i
                            })
                        }
                    }, {
                        key: "updateRangeFromParsed",
                        value: function(t, e, i, n) {
                            var r = i[e.axis],
                                a = null === r ? NaN : r,
                                o = n && i._stacks[e.axis];
                            n && o && (n.values = o, a = P(n, r, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a)
                        }
                    }, {
                        key: "getMinMax",
                        value: function(t, e) {
                            var i, r, a = this._cachedMeta,
                                o = a._parsed,
                                s = a._sorted && t === a.iScale,
                                l = o.length,
                                c = this._getOtherScale(t),
                                u = function(t, e, i) {
                                    return t && !e.hidden && e._stacked && {
                                        keys: E(i, !0),
                                        values: null
                                    }
                                }(e, a, this.chart),
                                h = {
                                    min: Number.POSITIVE_INFINITY,
                                    max: Number.NEGATIVE_INFINITY
                                },
                                f = function(t) {
                                    var e = t.getUserBounds(),
                                        i = e.min,
                                        n = e.max,
                                        r = e.minDefined,
                                        a = e.maxDefined;
                                    return {
                                        min: r ? i : Number.NEGATIVE_INFINITY,
                                        max: a ? n : Number.POSITIVE_INFINITY
                                    }
                                }(c),
                                d = f.min,
                                v = f.max;

                            function p() {
                                var e = (r = o[i])[c.axis];
                                return !Object(n.Hb)(r[t.axis]) || d > e || v < e
                            }
                            for (i = 0; i < l && (p() || (this.updateRangeFromParsed(h, t, r, u), !s)); ++i);
                            if (s)
                                for (i = l - 1; i >= 0; --i)
                                    if (!p()) {
                                        this.updateRangeFromParsed(h, t, r, u);
                                        break
                                    } return h
                        }
                    }, {
                        key: "getAllParsedValues",
                        value: function(t) {
                            var e, i, r, a = this._cachedMeta._parsed,
                                o = [];
                            for (e = 0, i = a.length; e < i; ++e) r = a[e][t.axis], Object(n.Hb)(r) && o.push(r);
                            return o
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
                                r = this.getParsed(t);
                            return {
                                label: i ? "" + i.getLabelForValue(r[i.axis]) : "",
                                value: n ? "" + n.getLabelForValue(r[n.axis]) : ""
                            }
                        }
                    }, {
                        key: "_update",
                        value: function(t) {
                            var e, i, r, a, o, s = this._cachedMeta;
                            this.update(t || "default"), s._clip = (e = Object(n.Wb)(this.options.clip, function(t, e, i) {
                                if (!1 === i) return !1;
                                var n = S(t, i),
                                    r = S(e, i);
                                return {
                                    top: r.end,
                                    right: n.end,
                                    bottom: r.start,
                                    left: n.start
                                }
                            }(s.xScale, s.yScale, this.getMaxOverflow())), Object(n.Jb)(e) ? (i = e.top, r = e.right, a = e.bottom, o = e.left) : i = r = a = o = e, {
                                top: i,
                                right: r,
                                bottom: a,
                                left: o,
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
                                r = n.data || [],
                                a = i.chartArea,
                                o = [],
                                s = this._drawStart || 0,
                                l = this._drawCount || r.length - s,
                                c = this.options.drawActiveElementsOnTop;
                            for (n.dataset && n.dataset.draw(e, a, s, l), t = s; t < s + l; ++t) {
                                var u = r[t];
                                u.hidden || (u.active && c ? o.push(u) : u.draw(e, a))
                            }
                            for (t = 0; t < o.length; ++t) o[t].draw(e, a)
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
                            var r, a = this.getDataset();
                            if (t >= 0 && t < this._cachedMeta.data.length) {
                                var o = this._cachedMeta.data[t];
                                (r = o.$context || (o.$context = function(t, e, i) {
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
                                }(this.getContext(), t, o))).parsed = this.getParsed(t), r.raw = a.data[t], r.index = r.dataIndex = t
                            } else(r = this.$context || (this.$context = function(t, e) {
                                return Object(n.Ib)(t, {
                                    active: !1,
                                    dataset: void 0,
                                    datasetIndex: e,
                                    index: e,
                                    mode: "default",
                                    type: "dataset"
                                })
                            }(this.chart.getContext(), this.index))).dataset = a, r.index = r.datasetIndex = this.index;
                            return r.active = !!e, r.mode = i, r
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
                                r = arguments.length > 2 ? arguments[2] : void 0,
                                a = "active" === i,
                                o = this._cachedDataOpts,
                                s = t + "-" + i,
                                l = o[s],
                                c = this.enableOptionSharing && Object(n.Kb)(r);
                            if (l) return z(l, c);
                            var u = this.chart.config,
                                h = u.datasetElementScopeKeys(this._type, t),
                                f = a ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
                                d = u.getOptionScopes(this.getDataset(), h),
                                v = Object.keys(n.Eb.elements[t]),
                                p = function() {
                                    return e.getContext(r, a)
                                },
                                g = u.resolveNamedOptions(d, v, p, f);
                            return g.$shared && (g.$shared = c, o[s] = Object.freeze(z(g, c))), g
                        }
                    }, {
                        key: "_resolveAnimations",
                        value: function(t, e, i) {
                            var n, r = this.chart,
                                a = this._cachedDataOpts,
                                o = "animation-".concat(e),
                                s = a[o];
                            if (s) return s;
                            if (!1 !== r.options.animation) {
                                var l = this.chart.config,
                                    c = l.datasetAnimationScopeKeys(this._type, e),
                                    u = l.getOptionScopes(this.getDataset(), c);
                                n = l.createResolver(u, this.getContext(t, i, e))
                            }
                            var h = new M(r, n && n.animations);
                            return n && n._cacheable && (a[o] = Object.freeze(h)), h
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
                                r = this.getSharedOptions(i),
                                a = this.includeOptions(e, r) || r !== n;
                            return this.updateSharedOptions(r, e, i), {
                                sharedOptions: r,
                                includeOptions: a
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
                            var r = this.getStyle(e, n);
                            this._resolveAnimations(e, i, n).update(t, {
                                options: !n && this.getSharedOptions(r) || r
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
                                r = v(this._syncList);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var a = f(e.value, 3),
                                        o = a[0],
                                        s = a[1],
                                        l = a[2];
                                    this[o](s, l)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                            this._syncList = [];
                            var c = n.length,
                                u = i.length,
                                h = Math.min(u, c);
                            h && this.parse(0, h), u > c ? this._insertElements(c, u - c, t) : u < c && this._removeElements(u, c - u)
                        }
                    }, {
                        key: "_insertElements",
                        value: function(t, e) {
                            var i, n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                r = this._cachedMeta,
                                a = r.data,
                                o = t + e,
                                s = function(t) {
                                    for (t.length += e, i = t.length - 1; i >= o; i--) t[i] = t[i - e]
                                };
                            for (s(a), i = t; i < o; ++i) a[i] = new this.dataElementType;
                            this._parsing && s(r._parsed), this.parse(t, e), n && this.updateElements(a, t, e, "reset")
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
                                i._stacked && R(i, n)
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
                                    r = e[2];
                                this[i](n, r)
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

            function N(t) {
                var e, i, r, a, o = t.iScale,
                    s = function(t, e) {
                        if (!t._cache.$bar) {
                            for (var i = t.getMatchingVisibleMetas(e), r = [], a = 0, o = i.length; a < o; a++) r = r.concat(i[a].controller.getAllParsedValues(t));
                            t._cache.$bar = Object(n.B)(r.sort((function(t, e) {
                                return t - e
                            })))
                        }
                        return t._cache.$bar
                    }(o, t.type),
                    l = o._length,
                    c = function() {
                        32767 !== r && -32768 !== r && (Object(n.Kb)(a) && (l = Math.min(l, Math.abs(r - a) || l)), a = r)
                    };
                for (e = 0, i = s.length; e < i; ++e) r = o.getPixelForValue(s[e]), c();
                for (a = void 0, e = 0, i = o.ticks.length; e < i; ++e) r = o.getPixelForTick(e), c();
                return l
            }

            function V(t, e, i, r) {
                return Object(n.Cb)(t) ? function(t, e, i, n) {
                    var r = i.parse(t[0], n),
                        a = i.parse(t[1], n),
                        o = Math.min(r, a),
                        s = Math.max(r, a),
                        l = o,
                        c = s;
                    Math.abs(o) > Math.abs(s) && (l = s, c = o), e[i.axis] = c, e._custom = {
                        barStart: l,
                        barEnd: c,
                        start: r,
                        end: a,
                        min: o,
                        max: s
                    }
                }(t, e, i, r) : e[i.axis] = i.parse(t, r), e
            }

            function B(t, e, i, n) {
                var r, a, o, s, l = t.iScale,
                    c = t.vScale,
                    u = l.getLabels(),
                    h = l === c,
                    f = [];
                for (r = i, a = i + n; r < a; ++r) s = e[r], (o = {})[l.axis] = h || l.parse(u[r], r), f.push(V(s, o, c, r));
                return f
            }

            function W(t) {
                return t && void 0 !== t.barStart && void 0 !== t.barEnd
            }

            function H(t, e, i, n) {
                var r = e.borderSkipped,
                    a = {};
                if (r)
                    if (!0 !== r) {
                        var o = function(t) {
                                var e, i, n, r, a;
                                return t.horizontal ? (e = t.base > t.x, i = "left", n = "right") : (e = t.base < t.y, i = "bottom", n = "top"), e ? (r = "end", a = "start") : (r = "start", a = "end"), {
                                    start: i,
                                    end: n,
                                    reverse: e,
                                    top: r,
                                    bottom: a
                                }
                            }(t),
                            s = o.start,
                            l = o.end,
                            c = o.reverse,
                            u = o.top,
                            h = o.bottom;
                        "middle" === r && i && (t.enableBorderRadius = !0, (i._top || 0) === n ? r = u : (i._bottom || 0) === n ? r = h : (a[U(h, s, l, c)] = !0, r = u)), a[U(r, s, l, c)] = !0, t.borderSkipped = a
                    } else t.borderSkipped = {
                        top: !0,
                        right: !0,
                        bottom: !0,
                        left: !0
                    };
                else t.borderSkipped = a
            }

            function U(t, e, i, n) {
                var r, a, o;
                return n ? (o = i, t = J(t = (r = t) === (a = e) ? o : r === o ? a : r, i, e)) : t = J(t, e, i), t
            }

            function J(t, e, i) {
                return "start" === t ? e : "end" === t ? i : t
            }

            function Y(t, e, i) {
                var n = e.inflateAmount;
                t.inflateAmount = "auto" === n ? 1 === i ? .33 : 0 : n
            }
            F.defaults = {}, F.prototype.datasetElementType = null, F.prototype.dataElementType = null;
            var $ = function(t) {
                o(i, t);
                var e = l(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return _(i, [{
                    key: "parsePrimitiveData",
                    value: function(t, e, i, n) {
                        return B(t, e, i, n)
                    }
                }, {
                    key: "parseArrayData",
                    value: function(t, e, i, n) {
                        return B(t, e, i, n)
                    }
                }, {
                    key: "parseObjectData",
                    value: function(t, e, i, r) {
                        var a, o, s, l, c = t.iScale,
                            u = t.vScale,
                            h = this._parsing,
                            f = h.xAxisKey,
                            d = void 0 === f ? "x" : f,
                            v = h.yAxisKey,
                            p = void 0 === v ? "y" : v,
                            g = "x" === c.axis ? d : p,
                            b = "x" === u.axis ? d : p,
                            y = [];
                        for (a = i, o = i + r; a < o; ++a) l = e[a], (s = {})[c.axis] = c.parse(Object(n.Gb)(l, g), a), y.push(V(Object(n.Gb)(l, b), s, u, a));
                        return y
                    }
                }, {
                    key: "updateRangeFromParsed",
                    value: function(t, e, n, a) {
                        r(h(i.prototype), "updateRangeFromParsed", this).call(this, t, e, n, a);
                        var o = n._custom;
                        o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max))
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
                            r = this.getParsed(t),
                            a = r._custom,
                            o = W(a) ? "[" + a.start + ", " + a.end + "]" : "" + n.getLabelForValue(r[n.axis]);
                        return {
                            label: "" + i.getLabelForValue(r[i.axis]),
                            value: o
                        }
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.enableOptionSharing = !0, r(h(i.prototype), "initialize", this).call(this), this._cachedMeta.stack = this.getDataset().stack
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta;
                        this.updateElements(e.data, 0, e.data.length, t)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, r) {
                        for (var a = "reset" === r, o = this.index, s = this._cachedMeta.vScale, l = s.getBasePixel(), c = s.isHorizontal(), u = this._getRuler(), h = this._getSharedOptions(e, r), f = h.sharedOptions, d = h.includeOptions, v = e; v < e + i; v++) {
                            var p = this.getParsed(v),
                                g = a || Object(n.Lb)(p[s.axis]) ? {
                                    base: l,
                                    head: l
                                } : this._calculateBarValuePixels(v),
                                b = this._calculateBarIndexPixels(v, u),
                                y = (p._stacks || {})[s.axis],
                                m = {
                                    horizontal: c,
                                    base: g.base,
                                    enableBorderRadius: !y || W(p._custom) || o === y._top || o === y._bottom,
                                    x: c ? g.head : b.center,
                                    y: c ? b.center : g.head,
                                    height: c ? b.size : Math.abs(g.size),
                                    width: c ? Math.abs(g.size) : b.size
                                };
                            d && (m.options = f || this.resolveDataElementOptions(v, t[v].active ? "active" : r));
                            var x = m.options || t[v].options;
                            H(m, x, y, o), Y(m, x, u.ratio), this.updateElement(t[v], v, m, r)
                        }
                    }
                }, {
                    key: "_getStacks",
                    value: function(t, e) {
                        var i, r = this._cachedMeta.iScale,
                            a = r.getMatchingVisibleMetas(this._type).filter((function(t) {
                                return t.controller.options.grouped
                            })),
                            o = r.options.stacked,
                            s = [],
                            l = function(t) {
                                var i = t.controller.getParsed(e),
                                    r = i && i[t.vScale.axis];
                                if (Object(n.Lb)(r) || isNaN(r)) return !0
                            },
                            c = v(a);
                        try {
                            for (c.s(); !(i = c.n()).done;) {
                                var u = i.value;
                                if ((void 0 === e || !l(u)) && ((!1 === o || -1 === s.indexOf(u.stack) || void 0 === o && void 0 === u.stack) && s.push(u.stack), u.index === t)) break
                            }
                        } catch (t) {
                            c.e(t)
                        } finally {
                            c.f()
                        }
                        return s.length || s.push(void 0), s
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
                            r = void 0 !== e ? n.indexOf(e) : -1;
                        return -1 === r ? n.length - 1 : r
                    }
                }, {
                    key: "_getRuler",
                    value: function() {
                        var t, e, i = this.options,
                            n = this._cachedMeta,
                            r = n.iScale,
                            a = [];
                        for (t = 0, e = n.data.length; t < e; ++t) a.push(r.getPixelForValue(this.getParsed(t)[r.axis], t));
                        var o = i.barThickness;
                        return {
                            min: o || N(n),
                            pixels: a,
                            start: r._startPixel,
                            end: r._endPixel,
                            stackCount: this._getStackCount(),
                            scale: r,
                            grouped: i.grouped,
                            ratio: o ? 1 : i.categoryPercentage * i.barPercentage
                        }
                    }
                }, {
                    key: "_calculateBarValuePixels",
                    value: function(t) {
                        var e, i, r = this._cachedMeta,
                            a = r.vScale,
                            o = r._stacked,
                            s = this.options,
                            l = s.base,
                            c = s.minBarLength,
                            u = l || 0,
                            h = this.getParsed(t),
                            f = h._custom,
                            d = W(f),
                            v = h[a.axis],
                            p = 0,
                            g = o ? this.applyStack(a, h, o) : v;
                        g !== v && (p = g - v, g = v), d && (v = f.barStart, g = f.barEnd - f.barStart, 0 !== v && Object(n.Tb)(v) !== Object(n.Tb)(f.barEnd) && (p = 0), p += v);
                        var b = Object(n.Lb)(l) || d ? p : l,
                            y = a.getPixelForValue(b);
                        if (i = (e = this.chart.getDataVisibility(t) ? a.getPixelForValue(p + g) : y) - y, Math.abs(i) < c) {
                            i = function(t, e, i) {
                                return 0 !== t ? Object(n.Tb)(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                            }(i, a, u) * c, v === u && (y -= i / 2);
                            var m = a.getPixelForDecimal(0),
                                x = a.getPixelForDecimal(1),
                                _ = Math.min(m, x),
                                k = Math.max(m, x);
                            e = (y = Math.max(Math.min(y, k), _)) + i
                        }
                        if (y === a.getPixelForValue(u)) {
                            var O = Object(n.Tb)(i) * a.getLineWidthForValue(u) / 2;
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
                        var i, r, a = e.scale,
                            o = this.options,
                            s = o.skipNull,
                            l = Object(n.Wb)(o.maxBarThickness, 1 / 0);
                        if (e.grouped) {
                            var c = s ? this._getStackCount(t) : e.stackCount,
                                u = "flex" === o.barThickness ? function(t, e, i, n) {
                                    var r = e.pixels,
                                        a = r[t],
                                        o = t > 0 ? r[t - 1] : null,
                                        s = t < r.length - 1 ? r[t + 1] : null,
                                        l = i.categoryPercentage;
                                    null === o && (o = a - (null === s ? e.end - e.start : s - a)), null === s && (s = a + a - o);
                                    var c = a - (a - Math.min(o, s)) / 2 * l;
                                    return {
                                        chunk: Math.abs(s - o) / 2 * l / n,
                                        ratio: i.barPercentage,
                                        start: c
                                    }
                                }(t, e, o, c) : function(t, e, i, r) {
                                    var a, o, s = i.barThickness;
                                    return Object(n.Lb)(s) ? (a = e.min * i.categoryPercentage, o = i.barPercentage) : (a = s * r, o = 1), {
                                        chunk: a / r,
                                        ratio: o,
                                        start: e.pixels[t] - a / 2
                                    }
                                }(t, e, o, c),
                                h = this._getStackIndex(this.index, this._cachedMeta.stack, s ? t : void 0);
                            i = u.start + u.chunk * h + u.chunk / 2, r = Math.min(l, u.chunk * u.ratio)
                        } else i = a.getPixelForValue(this.getParsed(t)[a.axis], t), r = Math.min(l, e.min * e.ratio);
                        return {
                            base: i - r / 2,
                            head: i + r / 2,
                            center: i,
                            size: r
                        }
                    }
                }, {
                    key: "draw",
                    value: function() {
                        for (var t = this._cachedMeta, e = t.vScale, i = t.data, n = i.length, r = 0; r < n; ++r) null !== this.getParsed(r)[e.axis] && i[r].draw(this._ctx)
                    }
                }]), i
            }(F);
            $.id = "bar", $.defaults = {
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
            }, $.overrides = {
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
            var G = function(t) {
                o(i, t);
                var e = l(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return _(i, [{
                    key: "initialize",
                    value: function() {
                        this.enableOptionSharing = !0, r(h(i.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "parsePrimitiveData",
                    value: function(t, e, n, a) {
                        for (var o = r(h(i.prototype), "parsePrimitiveData", this).call(this, t, e, n, a), s = 0; s < o.length; s++) o[s]._custom = this.resolveDataElementOptions(s + n).radius;
                        return o
                    }
                }, {
                    key: "parseArrayData",
                    value: function(t, e, a, o) {
                        for (var s = r(h(i.prototype), "parseArrayData", this).call(this, t, e, a, o), l = 0; l < s.length; l++) {
                            var c = e[a + l];
                            s[l]._custom = Object(n.Wb)(c[2], this.resolveDataElementOptions(l + a).radius)
                        }
                        return s
                    }
                }, {
                    key: "parseObjectData",
                    value: function(t, e, a, o) {
                        for (var s = r(h(i.prototype), "parseObjectData", this).call(this, t, e, a, o), l = 0; l < s.length; l++) {
                            var c = e[a + l];
                            s[l]._custom = Object(n.Wb)(c && c.r && +c.r, this.resolveDataElementOptions(l + a).radius)
                        }
                        return s
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
                            r = this.getParsed(t),
                            a = i.getLabelForValue(r.x),
                            o = n.getLabelForValue(r.y),
                            s = r._custom;
                        return {
                            label: e.label,
                            value: "(" + a + ", " + o + (s ? ", " + s : "") + ")"
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
                        for (var r = "reset" === n, a = this._cachedMeta, o = a.iScale, s = a.vScale, l = this._getSharedOptions(e, n), c = l.sharedOptions, u = l.includeOptions, h = o.axis, f = s.axis, d = e; d < e + i; d++) {
                            var v = t[d],
                                p = !r && this.getParsed(d),
                                g = {},
                                b = g[h] = r ? o.getPixelForDecimal(.5) : o.getPixelForValue(p[h]),
                                y = g[f] = r ? s.getBasePixel() : s.getPixelForValue(p[f]);
                            g.skip = isNaN(b) || isNaN(y), u && (g.options = c || this.resolveDataElementOptions(d, v.active ? "active" : n), r && (g.options.radius = 0)), this.updateElement(v, d, g, n)
                        }
                    }
                }, {
                    key: "resolveDataElementOptions",
                    value: function(t, e) {
                        var a = this.getParsed(t),
                            o = r(h(i.prototype), "resolveDataElementOptions", this).call(this, t, e);
                        o.$shared && (o = Object.assign({}, o, {
                            $shared: !1
                        }));
                        var s = o.radius;
                        return "active" !== e && (o.radius = 0), o.radius += Object(n.Wb)(a && a._custom, s), o
                    }
                }]), i
            }(F);
            G.id = "bubble", G.defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "borderWidth", "radius"]
                    }
                }
            }, G.overrides = {
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
            var q = function(t) {
                o(i, t);
                var e = l(i);

                function i(t, n) {
                    var r;
                    return m(this, i), (r = e.call(this, t, n)).enableOptionSharing = !0, r.innerRadius = void 0, r.outerRadius = void 0, r.offsetX = void 0, r.offsetY = void 0, r
                }
                return _(i, [{
                    key: "linkScales",
                    value: function() {}
                }, {
                    key: "parse",
                    value: function(t, e) {
                        var i = this.getDataset().data,
                            r = this._cachedMeta;
                        if (!1 === this._parsing) r._parsed = i;
                        else {
                            var a, o, s = function(t) {
                                return +i[t]
                            };
                            if (Object(n.Jb)(i[t])) {
                                var l = this._parsing.key,
                                    c = void 0 === l ? "value" : l;
                                s = function(t) {
                                    return +Object(n.Gb)(i[t], c)
                                }
                            }
                            for (a = t, o = t + e; a < o; ++a) r._parsed[a] = s(a)
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
                                var r = this.chart.getDatasetMeta(i).controller,
                                    a = r._getRotation(),
                                    o = r._getCircumference();
                                t = Math.min(t, a), e = Math.max(e, a + o)
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
                            r = i.data,
                            a = this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
                            o = Math.max((Math.min(e.width, e.height) - a) / 2, 0),
                            s = Math.min(Object(n.Nb)(this.options.cutout, o), 1),
                            l = this._getRingWeight(this.index),
                            c = this._getRotationExtents(),
                            u = c.circumference,
                            h = function(t, e, i) {
                                var r = 1,
                                    a = 1,
                                    o = 0,
                                    s = 0;
                                if (e < n.u) {
                                    var l = t,
                                        c = l + e,
                                        u = Math.cos(l),
                                        h = Math.sin(l),
                                        f = Math.cos(c),
                                        d = Math.sin(c),
                                        v = function(t, e, r) {
                                            return Object(n.Qb)(t, l, c, !0) ? 1 : Math.max(e, e * i, r, r * i)
                                        },
                                        p = function(t, e, r) {
                                            return Object(n.Qb)(t, l, c, !0) ? -1 : Math.min(e, e * i, r, r * i)
                                        },
                                        g = v(0, u, f),
                                        b = v(n.i, h, d),
                                        y = p(n.q, u, f),
                                        m = p(n.q + n.i, h, d);
                                    r = (g - y) / 2, a = (b - m) / 2, o = -(g + y) / 2, s = -(b + m) / 2
                                }
                                return {
                                    ratioX: r,
                                    ratioY: a,
                                    offsetX: o,
                                    offsetY: s
                                }
                            }(c.rotation, u, s),
                            f = h.ratioX,
                            d = h.ratioY,
                            v = h.offsetX,
                            p = h.offsetY,
                            g = (e.width - a) / f,
                            b = (e.height - a) / d,
                            y = Math.max(Math.min(g, b) / 2, 0),
                            m = Object(n.Ob)(this.options.radius, y),
                            x = (m - Math.max(m * s, 0)) / this._getVisibleDatasetWeightTotal();
                        this.offsetX = v * m, this.offsetY = p * m, i.total = this.calculateTotal(), this.outerRadius = m - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * l, 0), this.updateElements(r, 0, r.length, t)
                    }
                }, {
                    key: "_circumference",
                    value: function(t, e) {
                        var i = this.options,
                            r = this._cachedMeta,
                            a = this._getCircumference();
                        return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === r._parsed[t] || r.data[t].hidden ? 0 : this.calculateCircumference(r._parsed[t] * a / n.u)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, n) {
                        var r, a = "reset" === n,
                            o = this.chart,
                            s = o.chartArea,
                            l = o.options.animation,
                            c = (s.left + s.right) / 2,
                            u = (s.top + s.bottom) / 2,
                            h = a && l.animateScale,
                            f = h ? 0 : this.innerRadius,
                            d = h ? 0 : this.outerRadius,
                            v = this._getSharedOptions(e, n),
                            p = v.sharedOptions,
                            g = v.includeOptions,
                            b = this._getRotation();
                        for (r = 0; r < e; ++r) b += this._circumference(r, a);
                        for (r = e; r < e + i; ++r) {
                            var y = this._circumference(r, a),
                                m = t[r],
                                x = {
                                    x: c + this.offsetX,
                                    y: u + this.offsetY,
                                    startAngle: b,
                                    endAngle: b + y,
                                    circumference: y,
                                    outerRadius: d,
                                    innerRadius: f
                                };
                            g && (x.options = p || this.resolveDataElementOptions(r, m.active ? "active" : n)), b += y, this.updateElement(m, r, x, n)
                        }
                    }
                }, {
                    key: "calculateTotal",
                    value: function() {
                        var t, e = this._cachedMeta,
                            i = e.data,
                            n = 0;
                        for (t = 0; t < i.length; t++) {
                            var r = e._parsed[t];
                            null === r || isNaN(r) || !this.chart.getDataVisibility(t) || i[t].hidden || (n += Math.abs(r))
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
                            r = i.data.labels || [],
                            a = Object(n.Pb)(e._parsed[t], i.options.locale);
                        return {
                            label: r[t] || "",
                            value: a
                        }
                    }
                }, {
                    key: "getMaxBorderWidth",
                    value: function(t) {
                        var e, i, n, r, a, o = 0,
                            s = this.chart;
                        if (!t)
                            for (e = 0, i = s.data.datasets.length; e < i; ++e)
                                if (s.isDatasetVisible(e)) {
                                    t = (n = s.getDatasetMeta(e)).data, r = n.controller;
                                    break
                                } if (!t) return 0;
                        for (e = 0, i = t.length; e < i; ++e) "inner" !== (a = r.resolveDataElementOptions(e)).borderAlign && (o = Math.max(o, a.borderWidth || 0, a.hoverBorderWidth || 0));
                        return o
                    }
                }, {
                    key: "getMaxOffset",
                    value: function(t) {
                        for (var e = 0, i = 0, n = t.length; i < n; ++i) {
                            var r = this.resolveDataElementOptions(i);
                            e = Math.max(e, r.offset || 0, r.hoverOffset || 0)
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
            q.id = "doughnut", q.defaults = {
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
            }, q.descriptors = {
                _scriptable: function(t) {
                    return "spacing" !== t
                },
                _indexable: function(t) {
                    return "spacing" !== t
                }
            }, q.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    var i = t.legend.options.labels.pointStyle;
                                    return e.labels.map((function(e, n) {
                                        var r = t.getDatasetMeta(0).controller.getStyle(n);
                                        return {
                                            text: e,
                                            fillStyle: r.backgroundColor,
                                            strokeStyle: r.borderColor,
                                            lineWidth: r.borderWidth,
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
            var X = function(t) {
                o(i, t);
                var e = l(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return _(i, [{
                    key: "initialize",
                    value: function() {
                        this.enableOptionSharing = !0, this.supportsDecimation = !0, r(h(i.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = e.dataset,
                            r = e.data,
                            a = void 0 === r ? [] : r,
                            o = e._dataset,
                            s = this.chart._animationsDisabled,
                            l = Object(n.Rb)(e, a, s),
                            c = l.start,
                            u = l.count;
                        this._drawStart = c, this._drawCount = u, Object(n.Xb)(e) && (c = 0, u = a.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = a;
                        var h = this.resolveDatasetElementOptions(t);
                        this.options.showLine || (h.borderWidth = 0), h.segment = this.options.segment, this.updateElement(i, void 0, {
                            animated: !s,
                            options: h
                        }, t), this.updateElements(a, c, u, t)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, r) {
                        for (var a = "reset" === r, o = this._cachedMeta, s = o.iScale, l = o.vScale, c = o._stacked, u = o._dataset, h = this._getSharedOptions(e, r), f = h.sharedOptions, d = h.includeOptions, v = s.axis, p = l.axis, g = this.options, b = g.spanGaps, y = g.segment, m = Object(n.Yb)(b) ? b : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || a || "none" === r, _ = e > 0 && this.getParsed(e - 1), k = e; k < e + i; ++k) {
                            var O = t[k],
                                w = this.getParsed(k),
                                j = x ? O : {},
                                M = Object(n.Lb)(w[p]),
                                S = j[v] = s.getPixelForValue(w[v], k),
                                E = j[p] = a || M ? l.getBasePixel() : l.getPixelForValue(c ? this.applyStack(l, w, c) : w[p], k);
                            j.skip = isNaN(S) || isNaN(E) || M, j.stop = k > 0 && Math.abs(w[v] - _[v]) > m, y && (j.parsed = w, j.raw = u.data[k]), d && (j.options = f || this.resolveDataElementOptions(k, O.active ? "active" : r)), x || this.updateElement(O, k, j, r), _ = w
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
                        var r = n[0].size(this.resolveDataElementOptions(0)),
                            a = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
                        return Math.max(i, r, a) / 2
                    }
                }, {
                    key: "draw",
                    value: function() {
                        var t = this._cachedMeta;
                        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), r(h(i.prototype), "draw", this).call(this)
                    }
                }]), i
            }(F);
            X.id = "line", X.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
            }, X.overrides = {
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
                o(i, t);
                var e = l(i);

                function i(t, n) {
                    var r;
                    return m(this, i), (r = e.call(this, t, n)).innerRadius = void 0, r.outerRadius = void 0, r
                }
                return _(i, [{
                    key: "getLabelAndValue",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = this.chart,
                            r = i.data.labels || [],
                            a = Object(n.Pb)(e._parsed[t].r, i.options.locale);
                        return {
                            label: r[t] || "",
                            value: a
                        }
                    }
                }, {
                    key: "parseObjectData",
                    value: function(t, e, i, r) {
                        return n.Zb.bind(this)(t, e, i, r)
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
                            var r = t.getParsed(n).r;
                            !isNaN(r) && t.chart.getDataVisibility(n) && (r < i.min && (i.min = r), r > i.max && (i.max = r))
                        })), i
                    }
                }, {
                    key: "_updateRadius",
                    value: function() {
                        var t = this.chart,
                            e = t.chartArea,
                            i = t.options,
                            n = Math.min(e.right - e.left, e.bottom - e.top),
                            r = Math.max(n / 2, 0),
                            a = (r - Math.max(i.cutoutPercentage ? r / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                        this.outerRadius = r - a * this.index, this.innerRadius = this.outerRadius - a
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, r) {
                        var a, o = "reset" === r,
                            s = this.chart,
                            l = s.options.animation,
                            c = this._cachedMeta.rScale,
                            u = c.xCenter,
                            h = c.yCenter,
                            f = c.getIndexAngle(0) - .5 * n.q,
                            d = f,
                            v = 360 / this.countVisibleElements();
                        for (a = 0; a < e; ++a) d += this._computeAngle(a, r, v);
                        for (a = e; a < e + i; a++) {
                            var p = t[a],
                                g = d,
                                b = d + this._computeAngle(a, r, v),
                                y = s.getDataVisibility(a) ? c.getDistanceFromCenterForValue(this.getParsed(a).r) : 0;
                            d = b, o && (l.animateScale && (y = 0), l.animateRotate && (g = b = f));
                            var m = {
                                x: u,
                                y: h,
                                innerRadius: 0,
                                outerRadius: y,
                                startAngle: g,
                                endAngle: b,
                                options: this.resolveDataElementOptions(a, p.active ? "active" : r)
                            };
                            this.updateElement(p, a, m, r)
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
                                        var r = t.getDatasetMeta(0).controller.getStyle(n);
                                        return {
                                            text: e,
                                            fillStyle: r.backgroundColor,
                                            strokeStyle: r.borderColor,
                                            lineWidth: r.borderWidth,
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
                o(i, t);
                var e = l(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return _(i)
            }(q);
            Z.id = "pie", Z.defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
            };
            var Q = function(t) {
                o(i, t);
                var e = l(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return _(i, [{
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
                    value: function(t, e, i, r) {
                        return n.Zb.bind(this)(t, e, i, r)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this._cachedMeta,
                            i = e.dataset,
                            n = e.data || [],
                            r = e.iScale.getLabels();
                        if (i.points = n, "resize" !== t) {
                            var a = this.resolveDatasetElementOptions(t);
                            this.options.showLine || (a.borderWidth = 0);
                            var o = {
                                _loop: !0,
                                _fullLoop: r.length === n.length,
                                options: a
                            };
                            this.updateElement(i, void 0, o, t)
                        }
                        this.updateElements(n, 0, n.length, t)
                    }
                }, {
                    key: "updateElements",
                    value: function(t, e, i, n) {
                        for (var r = this._cachedMeta.rScale, a = "reset" === n, o = e; o < e + i; o++) {
                            var s = t[o],
                                l = this.resolveDataElementOptions(o, s.active ? "active" : n),
                                c = r.getPointPositionForValue(o, this.getParsed(o).r),
                                u = a ? r.xCenter : c.x,
                                h = a ? r.yCenter : c.y,
                                f = {
                                    x: u,
                                    y: h,
                                    angle: c.angle,
                                    skip: isNaN(u) || isNaN(h),
                                    options: l
                                };
                            this.updateElement(s, o, f, n)
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
                return _(t, [{
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
                        var r = {};
                        return t.forEach((function(t) {
                            r[t] = n[t] && n[t].active() ? n[t]._to : i[t]
                        })), r
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
                    var r, a = this.chart.options.locale,
                        o = t;
                    if (i.length > 1) {
                        var s = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                        (s < 1e-4 || s > 1e15) && (r = "scientific"), o = function(t, e) {
                            var i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                            Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                            return i
                        }(t, i)
                    }
                    var l = Object(n.ac)(Math.abs(o)),
                        c = Math.max(Math.min(-1 * Math.floor(l), 20), 0),
                        u = {
                            notation: r,
                            minimumFractionDigits: c,
                            maximumFractionDigits: c
                        };
                    return Object.assign(u, this.options.ticks.format), Object(n.Pb)(t, a, u)
                },
                logarithmic: function(t, e, i) {
                    if (0 === t) return "0";
                    var r = t / Math.pow(10, Math.floor(Object(n.ac)(t)));
                    return 1 === r || 2 === r || 5 === r ? et.numeric.call(this, t, e, i) : ""
                }
            };
            var it = {
                formatters: et
            };

            function nt(t, e) {
                var i = t.options.ticks,
                    r = i.maxTicksLimit || function(t) {
                        var e = t.options.offset,
                            i = t._tickSize(),
                            n = t._length / i + (e ? 0 : 1),
                            r = t._maxLength / i;
                        return Math.floor(Math.min(n, r))
                    }(t),
                    a = i.major.enabled ? function(t) {
                        var e, i, n = [];
                        for (e = 0, i = t.length; e < i; e++) t[e].major && n.push(e);
                        return n
                    }(e) : [],
                    o = a.length,
                    s = a[0],
                    l = a[o - 1],
                    c = [];
                if (o > r) return function(t, e, i, n) {
                    var r, a = 0,
                        o = i[0];
                    for (n = Math.ceil(n), r = 0; r < t.length; r++) r === o && (e.push(t[r]), a++, o = i[a * n])
                }(e, c, a, o / r), c;
                var u = function(t, e, i) {
                    var r = function(t) {
                            var e, i, n = t.length;
                            if (n < 2) return !1;
                            for (i = t[0], e = 1; e < n; ++e)
                                if (t[e] - t[e - 1] !== i) return !1;
                            return i
                        }(t),
                        a = e.length / i;
                    if (!r) return Math.max(a, 1);
                    for (var o = Object(n.b)(r), s = 0, l = o.length - 1; s < l; s++) {
                        var c = o[s];
                        if (c > a) return c
                    }
                    return Math.max(a, 1)
                }(a, e, r);
                if (o > 0) {
                    var h, f, d = o > 1 ? Math.round((l - s) / (o - 1)) : null;
                    for (rt(e, c, u, Object(n.Lb)(d) ? 0 : s - d, s), h = 0, f = o - 1; h < f; h++) rt(e, c, u, a[h], a[h + 1]);
                    return rt(e, c, u, l, Object(n.Lb)(d) ? e.length : l + d), c
                }
                return rt(e, c, u), c
            }

            function rt(t, e, i, r, a) {
                var o, s, l, c = Object(n.Wb)(r, 0),
                    u = Math.min(Object(n.Wb)(a, t.length), t.length),
                    h = 0;
                for (i = Math.ceil(i), a && (i = (o = a - r) / Math.floor(o / i)), l = c; l < 0;) h++, l = Math.round(c + h * i);
                for (s = Math.max(c, 0); s < u; s++) s === l && (e.push(t[s]), h++, l = Math.round(c + h * i))
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
            var at = function(t, e, i) {
                return "top" === e || "left" === e ? t[e] + i : t[e] - i
            };

            function ot(t, e) {
                for (var i = [], n = t.length / e, r = t.length, a = 0; a < r; a += n) i.push(t[Math.floor(a)]);
                return i
            }

            function st(t, e, i) {
                var n, r = t.ticks.length,
                    a = Math.min(e, r - 1),
                    o = t._startPixel,
                    s = t._endPixel,
                    l = t.getPixelForTick(a);
                if (!(i && (n = 1 === r ? Math.max(l - o, s - l) : 0 === e ? (t.getPixelForTick(1) - l) / 2 : (l - t.getPixelForTick(a - 1)) / 2, (l += a < e ? n : -n) < o - 1e-6 || l > s + 1e-6))) return l
            }

            function lt(t) {
                return t.drawTicks ? t.tickLength : 0
            }

            function ct(t, e) {
                if (!t.display) return 0;
                var i = Object(n.p)(t.font, e),
                    r = Object(n.l)(t.padding);
                return (Object(n.Cb)(t.text) ? t.text.length : 1) * i.lineHeight + r.height
            }

            function ut(t, e, i) {
                var r = Object(n.s)(t);
                return (i && "right" !== e || !i && "right" === e) && (r = function(t) {
                    return "left" === t ? "right" : "right" === t ? "left" : t
                }(r)), r
            }
            var ht = function(t) {
                    o(i, t);
                    var e = l(i);

                    function i(t) {
                        var n;
                        return m(this, i), (n = e.call(this)).id = t.id, n.type = t.type, n.options = void 0, n.ctx = t.ctx, n.chart = t.chart, n.top = void 0, n.bottom = void 0, n.left = void 0, n.right = void 0, n.width = void 0, n.height = void 0, n._margins = {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n.maxWidth = void 0, n.maxHeight = void 0, n.paddingTop = void 0, n.paddingBottom = void 0, n.paddingLeft = void 0, n.paddingRight = void 0, n.axis = void 0, n.labelRotation = void 0, n.min = void 0, n.max = void 0, n._range = void 0, n.ticks = [], n._gridLineItems = null, n._labelItems = null, n._labelSizes = null, n._length = 0, n._maxLength = 0, n._longestTextCache = {}, n._startPixel = void 0, n._endPixel = void 0, n._reversePixels = !1, n._userMax = void 0, n._userMin = void 0, n._suggestedMax = void 0, n._suggestedMin = void 0, n._ticksLength = 0, n._borderValue = 0, n._cache = {}, n._dataLimitsCached = !1, n.$context = void 0, n
                    }
                    return _(i, [{
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
                                r = this._suggestedMax;
                            return t = Object(n.c)(t, Number.POSITIVE_INFINITY), e = Object(n.c)(e, Number.NEGATIVE_INFINITY), i = Object(n.c)(i, Number.POSITIVE_INFINITY), r = Object(n.c)(r, Number.NEGATIVE_INFINITY), {
                                min: Object(n.c)(t, i),
                                max: Object(n.c)(e, r),
                                minDefined: Object(n.Hb)(t),
                                maxDefined: Object(n.Hb)(e)
                            }
                        }
                    }, {
                        key: "getMinMax",
                        value: function(t) {
                            var e, i = this.getUserBounds(),
                                r = i.min,
                                a = i.max,
                                o = i.minDefined,
                                s = i.maxDefined;
                            if (o && s) return {
                                min: r,
                                max: a
                            };
                            for (var l = this.getMatchingVisibleMetas(), c = 0, u = l.length; c < u; ++c) e = l[c].controller.getMinMax(this, t), o || (r = Math.min(r, e.min)), s || (a = Math.max(a, e.max));
                            return r = s && r > a ? a : r, a = o && r > a ? r : a, {
                                min: Object(n.c)(r, Object(n.c)(a, r)),
                                max: Object(n.c)(a, Object(n.c)(r, a))
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
                            var r = this.options,
                                a = r.beginAtZero,
                                o = r.grace,
                                s = r.ticks,
                                l = s.sampleSize;
                            this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Object(n.e)(this, o, a), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                            var c = l < this.ticks.length;
                            this._convertTicksToLabels(c ? ot(this.ticks, l) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), s.display && (s.autoSkip || "auto" === s.source) && (this.ticks = nt(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), c && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
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
                            var e, i, r, a = this.options.ticks;
                            for (e = 0, i = t.length; e < i; e++)(r = t[e]).label = Object(n.d)(a.callback, [r.value, e, t], this)
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
                            var t, e, i, r = this.options,
                                a = r.ticks,
                                o = this.ticks.length,
                                s = a.minRotation || 0,
                                l = a.maxRotation,
                                c = s;
                            if (!this._isVisible() || !a.display || s >= l || o <= 1 || !this.isHorizontal()) this.labelRotation = s;
                            else {
                                var u = this._getLabelSizes(),
                                    h = u.widest.width,
                                    f = u.highest.height,
                                    d = Object(n.f)(this.chart.width - h, 0, this.maxWidth);
                                h + 6 > (t = r.offset ? this.maxWidth / o : d / (o - 1)) && (t = d / (o - (r.offset ? .5 : 1)), e = this.maxHeight - lt(r.grid) - a.padding - ct(r.title, this.chart.options.font), i = Math.sqrt(h * h + f * f), c = Object(n.g)(Math.min(Math.asin(Object(n.f)((u.highest.height + 6) / t, -1, 1)), Math.asin(Object(n.f)(e / i, -1, 1)) - Math.asin(Object(n.f)(f / i, -1, 1)))), c = Math.max(s, Math.min(l, c))), this.labelRotation = c
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
                                r = i.ticks,
                                a = i.title,
                                o = i.grid,
                                s = this._isVisible(),
                                l = this.isHorizontal();
                            if (s) {
                                var c = ct(a, e.options.font);
                                if (l ? (t.width = this.maxWidth, t.height = lt(o) + c) : (t.height = this.maxHeight, t.width = lt(o) + c), r.display && this.ticks.length) {
                                    var u = this._getLabelSizes(),
                                        h = u.first,
                                        f = u.last,
                                        d = u.widest,
                                        v = u.highest,
                                        p = 2 * r.padding,
                                        g = Object(n.Ub)(this.labelRotation),
                                        b = Math.cos(g),
                                        y = Math.sin(g);
                                    if (l) {
                                        var m = r.mirror ? 0 : y * d.width + b * v.height;
                                        t.height = Math.min(this.maxHeight, t.height + m + p)
                                    } else {
                                        var x = r.mirror ? 0 : b * d.width + y * v.height;
                                        t.width = Math.min(this.maxWidth, t.width + x + p)
                                    }
                                    this._calculatePadding(h, f, y, b)
                                }
                            }
                            this._handleMargins(), l ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
                        }
                    }, {
                        key: "_calculatePadding",
                        value: function(t, e, i, n) {
                            var r = this.options,
                                a = r.ticks,
                                o = a.align,
                                s = a.padding,
                                l = r.position,
                                c = 0 !== this.labelRotation,
                                u = "top" !== l && "x" === this.axis;
                            if (this.isHorizontal()) {
                                var h = this.getPixelForTick(0) - this.left,
                                    f = this.right - this.getPixelForTick(this.ticks.length - 1),
                                    d = 0,
                                    v = 0;
                                c ? u ? (d = n * t.width, v = i * e.height) : (d = i * t.height, v = n * e.width) : "start" === o ? v = e.width : "end" === o ? d = t.width : "inner" !== o && (d = t.width / 2, v = e.width / 2), this.paddingLeft = Math.max((d - h + s) * this.width / (this.width - h), 0), this.paddingRight = Math.max((v - f + s) * this.width / (this.width - f), 0)
                            } else {
                                var p = e.height / 2,
                                    g = t.height / 2;
                                "start" === o ? (p = 0, g = t.height) : "end" === o && (p = e.height, g = 0), this.paddingTop = p + s, this.paddingBottom = g + s
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
                                e < i.length && (i = ot(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length)
                            }
                            return t
                        }
                    }, {
                        key: "_computeLabelSizes",
                        value: function(t, e) {
                            var i, r, a, o, s, l, c, u, h, f, d, v = this.ctx,
                                p = this._longestTextCache,
                                g = [],
                                b = [],
                                y = 0,
                                m = 0;
                            for (i = 0; i < e; ++i) {
                                if (o = t[i].label, s = this._resolveTickFontOptions(i), v.font = l = s.string, c = p[l] = p[l] || {
                                        data: {},
                                        gc: []
                                    }, u = s.lineHeight, h = f = 0, Object(n.Lb)(o) || Object(n.Cb)(o)) {
                                    if (Object(n.Cb)(o))
                                        for (r = 0, a = o.length; r < a; ++r) d = o[r], Object(n.Lb)(d) || Object(n.Cb)(d) || (h = Object(n.h)(v, c.data, c.gc, h, d), f += u)
                                } else h = Object(n.h)(v, c.data, c.gc, h, o), f = u;
                                g.push(h), b.push(f), y = Math.max(h, y), m = Math.max(f, m)
                            }! function(t, e) {
                                Object(n.r)(t, (function(t) {
                                    var i, n = t.gc,
                                        r = n.length / 2;
                                    if (r > e) {
                                        for (i = 0; i < r; ++i) delete t.data[n[i]];
                                        n.splice(0, r)
                                    }
                                }))
                            }(p, e);
                            var x = g.indexOf(y),
                                _ = b.indexOf(m),
                                k = function(t) {
                                    return {
                                        width: g[t] || 0,
                                        height: b[t] || 0
                                    }
                                };
                            return {
                                first: k(0),
                                last: k(e - 1),
                                widest: k(x),
                                highest: k(_),
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
                            var e, i, r = this.ticks || [];
                            if (t >= 0 && t < r.length) {
                                var a = r[t];
                                return a.$context || (a.$context = function(t, e, i) {
                                    return Object(n.Ib)(t, {
                                        tick: i,
                                        index: e,
                                        type: "tick"
                                    })
                                }(this.getContext(), t, a))
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
                                r = Math.abs(Math.sin(e)),
                                a = this._getLabelSizes(),
                                o = t.autoSkipPadding || 0,
                                s = a ? a.widest.width + o : 0,
                                l = a ? a.highest.height + o : 0;
                            return this.isHorizontal() ? l * i > s * r ? s / i : l / r : l * r < s * i ? l / i : s / r
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
                            var e, i, r, a, o, s, l, c, u, h, f, d, v = this.axis,
                                p = this.chart,
                                g = this.options,
                                b = g.grid,
                                y = g.position,
                                m = b.offset,
                                x = this.isHorizontal(),
                                _ = this.ticks.length + (m ? 1 : 0),
                                k = lt(b),
                                O = [],
                                w = b.setContext(this.getContext()),
                                j = w.drawBorder ? w.borderWidth : 0,
                                M = j / 2,
                                S = function(t) {
                                    return Object(n.k)(p, t, j)
                                };
                            if ("top" === y) e = S(this.bottom), s = this.bottom - k, c = e - M, h = S(t.top) + M, d = t.bottom;
                            else if ("bottom" === y) e = S(this.top), h = t.top, d = S(t.bottom) - M, s = e + M, c = this.top + k;
                            else if ("left" === y) e = S(this.right), o = this.right - k, l = e - M, u = S(t.left) + M, f = t.right;
                            else if ("right" === y) e = S(this.left), u = t.left, f = S(t.right) - M, o = e + M, l = this.left + k;
                            else if ("x" === v) {
                                if ("center" === y) e = S((t.top + t.bottom) / 2 + .5);
                                else if (Object(n.Jb)(y)) {
                                    var E = Object.keys(y)[0],
                                        P = y[E];
                                    e = S(this.chart.scales[E].getPixelForValue(P))
                                }
                                h = t.top, d = t.bottom, c = (s = e + M) + k
                            } else if ("y" === v) {
                                if ("center" === y) e = S((t.left + t.right) / 2);
                                else if (Object(n.Jb)(y)) {
                                    var L = Object.keys(y)[0],
                                        D = y[L];
                                    e = S(this.chart.scales[L].getPixelForValue(D))
                                }
                                l = (o = e - M) - k, u = t.left, f = t.right
                            }
                            var C = Object(n.Wb)(g.ticks.maxTicksLimit, _),
                                A = Math.max(1, Math.ceil(_ / C));
                            for (i = 0; i < _; i += A) {
                                var T = b.setContext(this.getContext(i)),
                                    R = T.lineWidth,
                                    I = T.color,
                                    z = T.borderDash || [],
                                    F = T.borderDashOffset,
                                    N = T.tickWidth,
                                    V = T.tickColor,
                                    B = T.tickBorderDash || [],
                                    W = T.tickBorderDashOffset;
                                void 0 !== (r = st(this, i, m)) && (a = Object(n.k)(p, r, R), x ? o = l = u = f = a : s = c = h = d = a, O.push({
                                    tx1: o,
                                    ty1: s,
                                    tx2: l,
                                    ty2: c,
                                    x1: u,
                                    y1: h,
                                    x2: f,
                                    y2: d,
                                    width: R,
                                    color: I,
                                    borderDash: z,
                                    borderDashOffset: F,
                                    tickWidth: N,
                                    tickColor: V,
                                    tickBorderDash: B,
                                    tickBorderDashOffset: W
                                }))
                            }
                            return this._ticksLength = _, this._borderValue = e, O
                        }
                    }, {
                        key: "_computeLabelItems",
                        value: function(t) {
                            var e, i, r, a, o, s, l, c, u, h, f, d = this.axis,
                                v = this.options,
                                p = v.position,
                                g = v.ticks,
                                b = this.isHorizontal(),
                                y = this.ticks,
                                m = g.align,
                                x = g.crossAlign,
                                _ = g.padding,
                                k = g.mirror,
                                O = lt(v.grid),
                                w = O + _,
                                j = k ? -_ : w,
                                M = -Object(n.Ub)(this.labelRotation),
                                S = [],
                                E = "middle";
                            if ("top" === p) o = this.bottom - j, s = this._getXAxisLabelAlignment();
                            else if ("bottom" === p) o = this.top + j, s = this._getXAxisLabelAlignment();
                            else if ("left" === p) {
                                var P = this._getYAxisLabelAlignment(O);
                                s = P.textAlign, a = P.x
                            } else if ("right" === p) {
                                var L = this._getYAxisLabelAlignment(O);
                                s = L.textAlign, a = L.x
                            } else if ("x" === d) {
                                if ("center" === p) o = (t.top + t.bottom) / 2 + w;
                                else if (Object(n.Jb)(p)) {
                                    var D = Object.keys(p)[0],
                                        C = p[D];
                                    o = this.chart.scales[D].getPixelForValue(C) + w
                                }
                                s = this._getXAxisLabelAlignment()
                            } else if ("y" === d) {
                                if ("center" === p) a = (t.left + t.right) / 2 - w;
                                else if (Object(n.Jb)(p)) {
                                    var A = Object.keys(p)[0],
                                        T = p[A];
                                    a = this.chart.scales[A].getPixelForValue(T)
                                }
                                s = this._getYAxisLabelAlignment(O).textAlign
                            }
                            "y" === d && ("start" === m ? E = "top" : "end" === m && (E = "bottom"));
                            var R = this._getLabelSizes();
                            for (e = 0, i = y.length; e < i; ++e) {
                                r = y[e].label;
                                var I = g.setContext(this.getContext(e));
                                l = this.getPixelForTick(e) + g.labelOffset, u = (c = this._resolveTickFontOptions(e)).lineHeight;
                                var z = (h = Object(n.Cb)(r) ? r.length : 1) / 2,
                                    F = I.color,
                                    N = I.textStrokeColor,
                                    V = I.textStrokeWidth,
                                    B = s;
                                b ? (a = l, "inner" === s && (B = e === i - 1 ? this.options.reverse ? "left" : "right" : 0 === e ? this.options.reverse ? "right" : "left" : "center"), f = "top" === p ? "near" === x || 0 !== M ? -h * u + u / 2 : "center" === x ? -R.highest.height / 2 - z * u + u : -R.highest.height + u / 2 : "near" === x || 0 !== M ? u / 2 : "center" === x ? R.highest.height / 2 - z * u : R.highest.height - h * u, k && (f *= -1)) : (o = l, f = (1 - h) * u / 2);
                                var W = void 0;
                                if (I.showLabelBackdrop) {
                                    var H = Object(n.l)(I.backdropPadding),
                                        U = R.heights[e],
                                        J = R.widths[e],
                                        Y = o + f - H.top,
                                        $ = a - H.left;
                                    switch (E) {
                                        case "middle":
                                            Y -= U / 2;
                                            break;
                                        case "bottom":
                                            Y -= U
                                    }
                                    switch (s) {
                                        case "center":
                                            $ -= J / 2;
                                            break;
                                        case "right":
                                            $ -= J
                                    }
                                    W = {
                                        left: $,
                                        top: Y,
                                        width: J + H.width,
                                        height: U + H.height,
                                        color: I.backdropColor
                                    }
                                }
                                S.push({
                                    rotation: M,
                                    label: r,
                                    font: c,
                                    color: F,
                                    strokeColor: N,
                                    strokeWidth: V,
                                    textOffset: f,
                                    textAlign: B,
                                    textBaseline: E,
                                    translation: [a, o],
                                    backdrop: W
                                })
                            }
                            return S
                        }
                    }, {
                        key: "_getXAxisLabelAlignment",
                        value: function() {
                            var t = this.options,
                                e = t.position,
                                i = t.ticks;
                            if (-Object(n.Ub)(this.labelRotation)) return "top" === e ? "left" : "right";
                            var r = "center";
                            return "start" === i.align ? r = "left" : "end" === i.align ? r = "right" : "inner" === i.align && (r = "inner"), r
                        }
                    }, {
                        key: "_getYAxisLabelAlignment",
                        value: function(t) {
                            var e, i, n = this.options,
                                r = n.position,
                                a = n.ticks,
                                o = a.crossAlign,
                                s = a.mirror,
                                l = a.padding,
                                c = t + l,
                                u = this._getLabelSizes().widest.width;
                            return "left" === r ? s ? (i = this.right + l, "near" === o ? e = "left" : "center" === o ? (e = "center", i += u / 2) : (e = "right", i += u)) : (i = this.right - c, "near" === o ? e = "right" : "center" === o ? (e = "center", i -= u / 2) : (e = "left", i = this.left)) : "right" === r ? s ? (i = this.left + l, "near" === o ? e = "right" : "center" === o ? (e = "center", i -= u / 2) : (e = "left", i -= u)) : (i = this.left + c, "near" === o ? e = "left" : "center" === o ? (e = "center", i += u / 2) : (e = "right", i = this.right)) : e = "right", {
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
                                r = this.width,
                                a = this.height;
                            e && (t.save(), t.fillStyle = e, t.fillRect(i, n, r, a), t.restore())
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
                                r = this.ctx,
                                a = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)),
                                o = function(t, e, i) {
                                    i.width && i.color && (r.save(), r.lineWidth = i.width, r.strokeStyle = i.color, r.setLineDash(i.borderDash || []), r.lineDashOffset = i.borderDashOffset, r.beginPath(), r.moveTo(t.x, t.y), r.lineTo(e.x, e.y), r.stroke(), r.restore())
                                };
                            if (n.display)
                                for (e = 0, i = a.length; e < i; ++e) {
                                    var s = a[e];
                                    n.drawOnChartArea && o({
                                        x: s.x1,
                                        y: s.y1
                                    }, {
                                        x: s.x2,
                                        y: s.y2
                                    }, s), n.drawTicks && o({
                                        x: s.tx1,
                                        y: s.ty1
                                    }, {
                                        x: s.tx2,
                                        y: s.ty2
                                    }, {
                                        color: s.tickColor,
                                        width: s.tickWidth,
                                        borderDash: s.tickBorderDash,
                                        borderDashOffset: s.tickBorderDashOffset
                                    })
                                }
                        }
                    }, {
                        key: "drawBorder",
                        value: function() {
                            var t = this.chart,
                                e = this.ctx,
                                i = this.options.grid,
                                r = i.setContext(this.getContext()),
                                a = i.drawBorder ? r.borderWidth : 0;
                            if (a) {
                                var o, s, l, c, u = i.setContext(this.getContext(0)).lineWidth,
                                    h = this._borderValue;
                                this.isHorizontal() ? (o = Object(n.k)(t, this.left, a) - a / 2, s = Object(n.k)(t, this.right, u) + u / 2, l = c = h) : (l = Object(n.k)(t, this.top, a) - a / 2, c = Object(n.k)(t, this.bottom, u) + u / 2, o = s = h), e.save(), e.lineWidth = r.borderWidth, e.strokeStyle = r.borderColor, e.beginPath(), e.moveTo(o, l), e.lineTo(s, c), e.stroke(), e.restore()
                            }
                        }
                    }, {
                        key: "drawLabels",
                        value: function(t) {
                            if (this.options.ticks.display) {
                                var e = this.ctx,
                                    i = this._computeLabelArea();
                                i && Object(n.m)(e, i);
                                var r, a, o = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                                for (r = 0, a = o.length; r < a; ++r) {
                                    var s = o[r],
                                        l = s.font,
                                        c = s.label;
                                    s.backdrop && (e.fillStyle = s.backdrop.color, e.fillRect(s.backdrop.left, s.backdrop.top, s.backdrop.width, s.backdrop.height));
                                    var u = s.textOffset;
                                    Object(n.n)(e, c, 0, u, l, s)
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
                                r = e.title,
                                a = e.reverse;
                            if (r.display) {
                                var o = Object(n.p)(r.font),
                                    s = Object(n.l)(r.padding),
                                    l = r.align,
                                    c = o.lineHeight / 2;
                                "bottom" === i || "center" === i || Object(n.Jb)(i) ? (c += s.bottom, Object(n.Cb)(r.text) && (c += o.lineHeight * (r.text.length - 1))) : c += s.top;
                                var u = function(t, e, i, r) {
                                        var a, o, s, l = t.top,
                                            c = t.left,
                                            u = t.bottom,
                                            h = t.right,
                                            f = t.chart,
                                            d = f.chartArea,
                                            v = f.scales,
                                            p = 0,
                                            g = u - l,
                                            b = h - c;
                                        if (t.isHorizontal()) {
                                            if (o = Object(n.t)(r, c, h), Object(n.Jb)(i)) {
                                                var y = Object.keys(i)[0],
                                                    m = i[y];
                                                s = v[y].getPixelForValue(m) + g - e
                                            } else s = "center" === i ? (d.bottom + d.top) / 2 + g - e : at(t, i, e);
                                            a = h - c
                                        } else {
                                            if (Object(n.Jb)(i)) {
                                                var x = Object.keys(i)[0],
                                                    _ = i[x];
                                                o = v[x].getPixelForValue(_) - b + e
                                            } else o = "center" === i ? (d.left + d.right) / 2 - b + e : at(t, i, e);
                                            s = Object(n.t)(r, u, l), p = "left" === i ? -n.i : n.i
                                        }
                                        return {
                                            titleX: o,
                                            titleY: s,
                                            maxWidth: a,
                                            rotation: p
                                        }
                                    }(this, c, i, l),
                                    h = u.titleX,
                                    f = u.titleY,
                                    d = u.maxWidth,
                                    v = u.rotation;
                                Object(n.n)(t, r.text, 0, 0, o, {
                                    color: r.color,
                                    maxWidth: d,
                                    rotation: v,
                                    textAlign: ut(l, i, a),
                                    textBaseline: "middle",
                                    translation: [h, f]
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
                                r = e.ticks && e.ticks.z || 0,
                                a = Object(n.Wb)(e.grid && e.grid.z, -1);
                            return this._isVisible() && this.draw === i.prototype.draw ? [{
                                z: a,
                                draw: function(e) {
                                    t.drawBackground(), t.drawGrid(e), t.drawTitle()
                                }
                            }, {
                                z: a + 1,
                                draw: function() {
                                    t.drawBorder()
                                }
                            }, {
                                z: r,
                                draw: function(e) {
                                    t.drawLabels(e)
                                }
                            }] : [{
                                z: r,
                                draw: function(e) {
                                    t.draw(e)
                                }
                            }]
                        }
                    }, {
                        key: "getMatchingVisibleMetas",
                        value: function(t) {
                            var e, i, n = this.chart.getSortedVisibleDatasetMetas(),
                                r = this.axis + "AxisID",
                                a = [];
                            for (e = 0, i = n.length; e < i; ++e) {
                                var o = n[e];
                                o[r] !== this.id || t && o.type !== t || a.push(o)
                            }
                            return a
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
                    return _(t, [{
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
                            var r = this.items,
                                a = t.id,
                                o = this.scope + "." + a;
                            if (!a) throw new Error("class does not have id: " + t);
                            return a in r || (r[a] = t, function(t, e, i) {
                                var r = Object(n.w)(Object.create(null), [i ? n.Eb.get(i) : {}, n.Eb.get(e), t.defaults]);
                                n.Eb.set(e, r), t.defaultRoutes && function(t, e) {
                                    Object.keys(e).forEach((function(i) {
                                        var r = i.split("."),
                                            a = r.pop(),
                                            o = [t].concat(r).join("."),
                                            s = e[i].split("."),
                                            l = s.pop(),
                                            c = s.join(".");
                                        n.Eb.route(o, a, c, l)
                                    }))
                                }(e, t.defaultRoutes);
                                t.descriptors && n.Eb.describe(e, t.descriptors)
                            }(t, o, e), this.override && n.Eb.override(t.id, t.overrides)), o
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
                                r = this.scope;
                            i in e && delete e[i], r && i in n.Eb[r] && (delete n.Eb[r][i], this.override && delete n.v[i])
                        }
                    }]), t
                }();
            var dt = new(function() {
                    function t() {
                        m(this, t), this.controllers = new ft(F, "datasets", !0), this.elements = new ft(tt, "elements"), this.plugins = new ft(Object, "plugins"), this.scales = new ft(ht, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
                    }
                    return _(t, [{
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
                            var r = this;
                            g(e).forEach((function(e) {
                                var a = i || r._getRegistryForType(e);
                                i || a.isForType(e) || a === r.plugins && e.id ? r._exec(t, a, e) : Object(n.r)(e, (function(e) {
                                    var n = i || r._getRegistryForType(e);
                                    r._exec(t, n, e)
                                }))
                            }))
                        }
                    }, {
                        key: "_exec",
                        value: function(t, e, i) {
                            var r = Object(n.x)(t);
                            Object(n.d)(i["before" + r], [], i), e[t](i), Object(n.d)(i["after" + r], [], i)
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
                    o(i, t);
                    var e = l(i);

                    function i() {
                        return m(this, i), e.apply(this, arguments)
                    }
                    return _(i, [{
                        key: "update",
                        value: function(t) {
                            var e = this._cachedMeta,
                                i = e.data,
                                r = void 0 === i ? [] : i,
                                a = this.chart._animationsDisabled,
                                o = Object(n.Rb)(e, r, a),
                                s = o.start,
                                l = o.count;
                            if (this._drawStart = s, this._drawCount = l, Object(n.Xb)(e) && (s = 0, l = r.length), this.options.showLine) {
                                var c = e.dataset,
                                    u = e._dataset;
                                c._chart = this.chart, c._datasetIndex = this.index, c._decimated = !!u._decimated, c.points = r;
                                var h = this.resolveDatasetElementOptions(t);
                                h.segment = this.options.segment, this.updateElement(c, void 0, {
                                    animated: !a,
                                    options: h
                                }, t)
                            }
                            this.updateElements(r, s, l, t)
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            var t = this.options.showLine;
                            !this.datasetElementType && t && (this.datasetElementType = dt.getElement("line")), r(h(i.prototype), "addElements", this).call(this)
                        }
                    }, {
                        key: "updateElements",
                        value: function(t, e, i, r) {
                            for (var a = "reset" === r, o = this._cachedMeta, s = o.iScale, l = o.vScale, c = o._stacked, u = o._dataset, h = this.resolveDataElementOptions(e, r), f = this.getSharedOptions(h), d = this.includeOptions(r, f), v = s.axis, p = l.axis, g = this.options, b = g.spanGaps, y = g.segment, m = Object(n.Yb)(b) ? b : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || a || "none" === r, _ = e > 0 && this.getParsed(e - 1), k = e; k < e + i; ++k) {
                                var O = t[k],
                                    w = this.getParsed(k),
                                    j = x ? O : {},
                                    M = Object(n.Lb)(w[p]),
                                    S = j[v] = s.getPixelForValue(w[v], k),
                                    E = j[p] = a || M ? l.getBasePixel() : l.getPixelForValue(c ? this.applyStack(l, w, c) : w[p], k);
                                j.skip = isNaN(S) || isNaN(E) || M, j.stop = k > 0 && Math.abs(w[v] - _[v]) > m, y && (j.parsed = w, j.raw = u.data[k]), d && (j.options = f || this.resolveDataElementOptions(k, O.active ? "active" : r)), x || this.updateElement(O, k, j, r), _ = w
                            }
                            this.updateSharedOptions(f, r, h)
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
                            var r = t.dataset,
                                a = r.options && r.options.borderWidth || 0;
                            if (!e.length) return a;
                            var o = e[0].size(this.resolveDataElementOptions(0)),
                                s = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                            return Math.max(a, o, s) / 2
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
                return _(t, [{
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

            function yt(t, e, i, r) {
                var a = t.controller,
                    o = t.data,
                    s = t._sorted,
                    l = a._cachedMeta.iScale;
                if (l && e === l.axis && "r" !== e && s && o.length) {
                    var c = l._reversePixels ? n.z : n.A;
                    if (!r) return c(o, e, i);
                    if (a._sharedOptions) {
                        var u = o[0],
                            h = "function" == typeof u.getRange && u.getRange(e);
                        if (h) {
                            var f = c(o, e, i - h),
                                d = c(o, e, i + h);
                            return {
                                lo: f.lo,
                                hi: d.hi
                            }
                        }
                    }
                }
                return {
                    lo: 0,
                    hi: o.length - 1
                }
            }

            function mt(t, e, i, n, r) {
                for (var a = t.getSortedVisibleDatasetMetas(), o = i[e], s = 0, l = a.length; s < l; ++s)
                    for (var c = a[s], u = c.index, h = c.data, f = yt(a[s], e, o, r), d = f.lo, v = f.hi, p = d; p <= v; ++p) {
                        var g = h[p];
                        g.skip || n(g, u, p)
                    }
            }

            function xt(t, e, i, r, a) {
                var o = [];
                if (!a && !t.isPointInArea(e)) return o;
                return mt(t, i, e, (function(i, s, l) {
                    (a || Object(n.a)(i, t.chartArea, 0)) && i.inRange(e.x, e.y, r) && o.push({
                        element: i,
                        datasetIndex: s,
                        index: l
                    })
                }), !0), o
            }

            function _t(t, e, i, n, r, a) {
                var o = [],
                    s = function(t) {
                        var e = -1 !== t.indexOf("x"),
                            i = -1 !== t.indexOf("y");
                        return function(t, n) {
                            var r = e ? Math.abs(t.x - n.x) : 0,
                                a = i ? Math.abs(t.y - n.y) : 0;
                            return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
                        }
                    }(i),
                    l = Number.POSITIVE_INFINITY;
                return mt(t, i, e, (function(i, c, u) {
                    var h = i.inRange(e.x, e.y, r);
                    if (!n || h) {
                        var f = i.getCenterPoint(r);
                        if (!!a || t.isPointInArea(f) || h) {
                            var d = s(e, f);
                            d < l ? (o = [{
                                element: i,
                                datasetIndex: c,
                                index: u
                            }], l = d) : d === l && o.push({
                                element: i,
                                datasetIndex: c,
                                index: u
                            })
                        }
                    }
                })), o
            }

            function kt(t, e, i, r, a, o) {
                return o || t.isPointInArea(e) ? "r" !== i || r ? _t(t, e, i, r, a, o) : function(t, e, i, r) {
                    var a = [];
                    return mt(t, i, e, (function(t, i, o) {
                        var s = t.getProps(["startAngle", "endAngle"], r),
                            l = s.startAngle,
                            c = s.endAngle,
                            u = Object(n.D)(t, {
                                x: e.x,
                                y: e.y
                            }).angle;
                        Object(n.Qb)(u, l, c) && a.push({
                            element: t,
                            datasetIndex: i,
                            index: o
                        })
                    })), a
                }(t, e, i, a) : []
            }

            function Ot(t, e, i, n, r) {
                var a = [],
                    o = "x" === i ? "inXRange" : "inYRange",
                    s = !1;
                return mt(t, i, e, (function(t, n, l) {
                    t[o](e[i], r) && (a.push({
                        element: t,
                        datasetIndex: n,
                        index: l
                    }), s = s || t.inRange(e.x, e.y, r))
                })), n && !s ? [] : a
            }
            var wt = {
                    evaluateInteractionItems: mt,
                    modes: {
                        index: function(t, e, i, r) {
                            var a = Object(n.y)(e, t),
                                o = i.axis || "x",
                                s = i.includeInvisible || !1,
                                l = i.intersect ? xt(t, a, o, r, s) : kt(t, a, o, !1, r, s),
                                c = [];
                            return l.length ? (t.getSortedVisibleDatasetMetas().forEach((function(t) {
                                var e = l[0].index,
                                    i = t.data[e];
                                i && !i.skip && c.push({
                                    element: i,
                                    datasetIndex: t.index,
                                    index: e
                                })
                            })), c) : []
                        },
                        dataset: function(t, e, i, r) {
                            var a = Object(n.y)(e, t),
                                o = i.axis || "xy",
                                s = i.includeInvisible || !1,
                                l = i.intersect ? xt(t, a, o, r, s) : kt(t, a, o, !1, r, s);
                            if (l.length > 0) {
                                var c = l[0].datasetIndex,
                                    u = t.getDatasetMeta(c).data;
                                l = [];
                                for (var h = 0; h < u.length; ++h) l.push({
                                    element: u[h],
                                    datasetIndex: c,
                                    index: h
                                })
                            }
                            return l
                        },
                        point: function(t, e, i, r) {
                            return xt(t, Object(n.y)(e, t), i.axis || "xy", r, i.includeInvisible || !1)
                        },
                        nearest: function(t, e, i, r) {
                            var a = Object(n.y)(e, t),
                                o = i.axis || "xy",
                                s = i.includeInvisible || !1;
                            return kt(t, a, o, i.intersect, r, s)
                        },
                        x: function(t, e, i, r) {
                            return Ot(t, Object(n.y)(e, t), "x", i.intersect, r)
                        },
                        y: function(t, e, i, r) {
                            return Ot(t, Object(n.y)(e, t), "y", i.intersect, r)
                        }
                    }
                },
                jt = ["left", "top", "right", "bottom"];

            function Mt(t, e) {
                return t.filter((function(t) {
                    return t.pos === e
                }))
            }

            function St(t, e) {
                return t.filter((function(t) {
                    return -1 === jt.indexOf(t.pos) && t.box.axis === e
                }))
            }

            function Et(t, e) {
                return t.sort((function(t, i) {
                    var n = e ? i : t,
                        r = e ? t : i;
                    return n.weight === r.weight ? n.index - r.index : n.weight - r.weight
                }))
            }

            function Pt(t, e) {
                var i, n, r, a = function(t) {
                        var e, i = {},
                            n = v(t);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var r = e.value,
                                    a = r.stack,
                                    o = r.pos,
                                    s = r.stackWeight;
                                if (a && jt.includes(o)) {
                                    var l = i[a] || (i[a] = {
                                        count: 0,
                                        placed: 0,
                                        weight: 0,
                                        size: 0
                                    });
                                    l.count++, l.weight += s
                                }
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        return i
                    }(t),
                    o = e.vBoxMaxWidth,
                    s = e.hBoxMaxHeight;
                for (i = 0, n = t.length; i < n; ++i) {
                    var l = (r = t[i]).box.fullSize,
                        c = a[r.stack],
                        u = c && r.stackWeight / c.weight;
                    r.horizontal ? (r.width = u ? u * o : l && e.availableWidth, r.height = s) : (r.width = o, r.height = u ? u * s : l && e.availableHeight)
                }
                return a
            }

            function Lt(t, e, i, n) {
                return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
            }

            function Dt(t, e) {
                t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
            }

            function Ct(t, e, i, r) {
                var a = i.pos,
                    o = i.box,
                    s = t.maxPadding;
                if (!Object(n.Jb)(a)) {
                    i.size && (t[a] -= i.size);
                    var l = r[i.stack] || {
                        size: 0,
                        count: 1
                    };
                    l.size = Math.max(l.size, i.horizontal ? o.height : o.width), i.size = l.size / l.count, t[a] += i.size
                }
                o.getPadding && Dt(s, o.getPadding());
                var c = Math.max(0, e.outerWidth - Lt(s, t, "left", "right")),
                    u = Math.max(0, e.outerHeight - Lt(s, t, "top", "bottom")),
                    h = c !== t.w,
                    f = u !== t.h;
                return t.w = c, t.h = u, i.horizontal ? {
                    same: h,
                    other: f
                } : {
                    same: f,
                    other: h
                }
            }

            function At(t, e) {
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

            function Tt(t, e, i, n) {
                var r, a, o, s, l, c, u = [];
                for (r = 0, a = t.length, l = 0; r < a; ++r) {
                    (s = (o = t[r]).box).update(o.width || e.w, o.height || e.h, At(o.horizontal, e));
                    var h = Ct(e, i, o, n),
                        f = h.same,
                        d = h.other;
                    l |= f && u.length, c = c || d, s.fullSize || u.push(o)
                }
                return l && Tt(u, e, i, n) || c
            }

            function Rt(t, e, i, n, r) {
                t.top = i, t.left = e, t.right = e + n, t.bottom = i + r, t.width = n, t.height = r
            }

            function It(t, e, i, r) {
                var a, o = i.padding,
                    s = e.x,
                    l = e.y,
                    c = v(t);
                try {
                    for (c.s(); !(a = c.n()).done;) {
                        var u = a.value,
                            h = u.box,
                            f = r[u.stack] || {
                                count: 1,
                                placed: 0,
                                weight: 1
                            },
                            d = u.stackWeight / f.weight || 1;
                        if (u.horizontal) {
                            var p = e.w * d,
                                g = f.size || h.height;
                            Object(n.Kb)(f.start) && (l = f.start), h.fullSize ? Rt(h, o.left, l, i.outerWidth - o.right - o.left, g) : Rt(h, e.left + f.placed, l, p, g), f.start = l, f.placed += p, l = h.bottom
                        } else {
                            var b = e.h * d,
                                y = f.size || h.width;
                            Object(n.Kb)(f.start) && (s = f.start), h.fullSize ? Rt(h, s, o.top, y, i.outerHeight - o.bottom - o.top) : Rt(h, s, e.top + f.placed, y, b), f.start = s, f.placed += b, s = h.right
                        }
                    }
                } catch (t) {
                    c.e(t)
                } finally {
                    c.f()
                }
                e.x = s, e.y = l
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
                Nt = function(t, e, i) {
                    e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
                },
                Vt = function(t, e, i, r) {
                    if (t) {
                        var a = Object(n.l)(t.options.layout.padding),
                            o = Math.max(e - a.width, 0),
                            s = Math.max(i - a.height, 0),
                            l = function(t) {
                                var e = function(t) {
                                        var e, i, n, r, a, o, s = [];
                                        for (e = 0, i = (t || []).length; e < i; ++e) {
                                            var l = n = t[e];
                                            r = l.position;
                                            var c = l.options;
                                            a = c.stack;
                                            var u = c.stackWeight;
                                            o = void 0 === u ? 1 : u, s.push({
                                                index: e,
                                                box: n,
                                                pos: r,
                                                horizontal: n.isHorizontal(),
                                                weight: n.weight,
                                                stack: a && r + a,
                                                stackWeight: o
                                            })
                                        }
                                        return s
                                    }(t),
                                    i = Et(e.filter((function(t) {
                                        return t.box.fullSize
                                    })), !0),
                                    n = Et(Mt(e, "left"), !0),
                                    r = Et(Mt(e, "right")),
                                    a = Et(Mt(e, "top"), !0),
                                    o = Et(Mt(e, "bottom")),
                                    s = St(e, "x"),
                                    l = St(e, "y");
                                return {
                                    fullSize: i,
                                    leftAndTop: n.concat(a),
                                    rightAndBottom: r.concat(l).concat(o).concat(s),
                                    chartArea: Mt(e, "chartArea"),
                                    vertical: n.concat(r).concat(l),
                                    horizontal: a.concat(o).concat(s)
                                }
                            }(t.boxes),
                            c = l.vertical,
                            u = l.horizontal;
                        Object(n.r)(t.boxes, (function(t) {
                            "function" == typeof t.beforeLayout && t.beforeLayout()
                        }));
                        var h = c.reduce((function(t, e) {
                                return e.box.options && !1 === e.box.options.display ? t : t + 1
                            }), 0) || 1,
                            f = Object.freeze({
                                outerWidth: e,
                                outerHeight: i,
                                padding: a,
                                availableWidth: o,
                                availableHeight: s,
                                vBoxMaxWidth: o / 2 / h,
                                hBoxMaxHeight: s / 2
                            }),
                            d = Object.assign({}, a);
                        Dt(d, Object(n.l)(r));
                        var v = Object.assign({
                                maxPadding: d,
                                w: o,
                                h: s,
                                x: a.left,
                                y: a.top
                            }, a),
                            p = Pt(c.concat(u), f);
                        Tt(l.fullSize, v, f, p), Tt(c, v, f, p), Tt(u, v, f, p) && Tt(c, v, f, p),
                            function(t) {
                                var e = t.maxPadding;

                                function i(i) {
                                    var n = Math.max(e[i] - t[i], 0);
                                    return t[i] += n, n
                                }
                                t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                            }(v), It(l.leftAndTop, v, f, p), v.x += v.w, v.y += v.h, It(l.rightAndBottom, v, f, p), t.chartArea = {
                                left: v.left,
                                top: v.top,
                                right: v.left + v.w,
                                bottom: v.top + v.h,
                                height: v.h,
                                width: v.w
                            }, Object(n.r)(l.chartArea, (function(e) {
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
                Bt = function() {
                    function t() {
                        m(this, t)
                    }
                    return _(t, [{
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
                    o(i, t);
                    var e = l(i);

                    function i() {
                        return m(this, i), e.apply(this, arguments)
                    }
                    return _(i, [{
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
                }(Bt),
                Ht = {
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
                Ut = function(t) {
                    return null === t || "" === t
                };
            var Jt = !!n.I && {
                passive: !0
            };

            function Yt(t, e, i) {
                t.canvas.removeEventListener(e, i, Jt)
            }

            function $t(t, e) {
                var i, n = v(t);
                try {
                    for (n.s(); !(i = n.n()).done;) {
                        var r = i.value;
                        if (r === e || r.contains(e)) return !0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }

            function Gt(t, e, i) {
                var n = t.canvas,
                    r = new MutationObserver((function(t) {
                        var e, r = !1,
                            a = v(t);
                        try {
                            for (a.s(); !(e = a.n()).done;) {
                                var o = e.value;
                                r = (r = r || $t(o.addedNodes, n)) && !$t(o.removedNodes, n)
                            }
                        } catch (t) {
                            a.e(t)
                        } finally {
                            a.f()
                        }
                        r && i()
                    }));
                return r.observe(document, {
                    childList: !0,
                    subtree: !0
                }), r
            }

            function qt(t, e, i) {
                var n = t.canvas,
                    r = new MutationObserver((function(t) {
                        var e, r = !1,
                            a = v(t);
                        try {
                            for (a.s(); !(e = a.n()).done;) {
                                var o = e.value;
                                r = (r = r || $t(o.removedNodes, n)) && !$t(o.addedNodes, n)
                            }
                        } catch (t) {
                            a.e(t)
                        } finally {
                            a.f()
                        }
                        r && i()
                    }));
                return r.observe(document, {
                    childList: !0,
                    subtree: !0
                }), r
            }
            var Xt = new Map,
                Kt = 0;

            function Zt() {
                var t = window.devicePixelRatio;
                t !== Kt && (Kt = t, Xt.forEach((function(e, i) {
                    i.currentDevicePixelRatio !== t && e()
                })))
            }

            function Qt(t, e, i) {
                var r = t.canvas,
                    a = r && Object(n.F)(r);
                if (a) {
                    var o = Object(n.H)((function(t, e) {
                            var n = a.clientWidth;
                            i(t, e), n < a.clientWidth && i()
                        }), window),
                        s = new ResizeObserver((function(t) {
                            var e = t[0],
                                i = e.contentRect.width,
                                n = e.contentRect.height;
                            0 === i && 0 === n || o(i, n)
                        }));
                    return s.observe(a),
                        function(t, e) {
                            Xt.size || window.addEventListener("resize", Zt), Xt.set(t, e)
                        }(t, o), s
                }
            }

            function te(t, e, i) {
                i && i.disconnect(), "resize" === e && function(t) {
                    Xt.delete(t), Xt.size || window.removeEventListener("resize", Zt)
                }(t)
            }

            function ee(t, e, i) {
                var r = t.canvas,
                    a = Object(n.H)((function(e) {
                        null !== t.ctx && i(function(t, e) {
                            var i = Ht[t.type] || t.type,
                                r = Object(n.y)(t, e),
                                a = r.x,
                                o = r.y;
                            return {
                                type: i,
                                chart: e,
                                native: t,
                                x: void 0 !== a ? a : null,
                                y: void 0 !== o ? o : null
                            }
                        }(e, t))
                    }), t, (function(t) {
                        var e = t[0];
                        return [e, e.offsetX, e.offsetY]
                    }));
                return function(t, e, i) {
                    t.addEventListener(e, i, Jt)
                }(r, e, a), a
            }
            var ie = function(t) {
                o(i, t);
                var e = l(i);

                function i() {
                    return m(this, i), e.apply(this, arguments)
                }
                return _(i, [{
                    key: "acquireContext",
                    value: function(t, e) {
                        var i = t && t.getContext && t.getContext("2d");
                        return i && i.canvas === t ? (function(t, e) {
                            var i = t.style,
                                r = t.getAttribute("height"),
                                a = t.getAttribute("width");
                            if (t.$chartjs = {
                                    initial: {
                                        height: r,
                                        width: a,
                                        style: {
                                            display: i.display,
                                            height: i.height,
                                            width: i.width
                                        }
                                    }
                                }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", Ut(a)) {
                                var o = Object(n.G)(t, "width");
                                void 0 !== o && (t.width = o)
                            }
                            if (Ut(r))
                                if ("" === t.style.height) t.height = t.width / (e || 2);
                                else {
                                    var s = Object(n.G)(t, "height");
                                    void 0 !== s && (t.height = s)
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
                            var r = i[t];
                            Object(n.Lb)(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                        }));
                        var r = i.style || {};
                        return Object.keys(r).forEach((function(t) {
                            e.style[t] = r[t]
                        })), e.width = e.width, delete e.$chartjs, !0
                    }
                }, {
                    key: "addEventListener",
                    value: function(t, e, i) {
                        this.removeEventListener(t, e);
                        var n = t.$proxies || (t.$proxies = {}),
                            r = {
                                attach: Gt,
                                detach: qt,
                                resize: Qt
                            } [e] || ee;
                        n[e] = r(t, e, i)
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
                        } [e] || Yt)(t, e, n), i[e] = void 0)
                    }
                }, {
                    key: "getDevicePixelRatio",
                    value: function() {
                        return window.devicePixelRatio
                    }
                }, {
                    key: "getMaximumSize",
                    value: function(t, e, i, r) {
                        return Object(n.E)(t, e, i, r)
                    }
                }, {
                    key: "isAttached",
                    value: function(t) {
                        var e = Object(n.F)(t);
                        return !(!e || !e.isConnected)
                    }
                }]), i
            }(Bt);
            var ne = function() {
                function t() {
                    m(this, t), this._init = []
                }
                return _(t, [{
                    key: "notify",
                    value: function(t, e, i, n) {
                        "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                        var r = n ? this._descriptors(t).filter(n) : this._descriptors(t),
                            a = this._notify(r, t, e, i);
                        return "afterDestroy" === e && (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")), a
                    }
                }, {
                    key: "_notify",
                    value: function(t, e, i, r) {
                        r = r || {};
                        var a, o = v(t);
                        try {
                            for (o.s(); !(a = o.n()).done;) {
                                var s = a.value,
                                    l = s.plugin,
                                    c = l[i],
                                    u = [e, r, s.options];
                                if (!1 === Object(n.d)(c, u, l) && r.cancelable) return !1
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
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
                            r = Object(n.Wb)(i.options && i.options.plugins, {}),
                            a = function(t) {
                                for (var e = {}, i = [], n = Object.keys(dt.plugins.items), r = 0; r < n.length; r++) i.push(dt.getPlugin(n[r]));
                                for (var a = t.plugins || [], o = 0; o < a.length; o++) {
                                    var s = a[o]; - 1 === i.indexOf(s) && (i.push(s), e[s.id] = !0)
                                }
                                return {
                                    plugins: i,
                                    localIds: e
                                }
                            }(i);
                        return !1 !== r || e ? function(t, e, i, n) {
                            var r, a = e.plugins,
                                o = e.localIds,
                                s = [],
                                l = t.getContext(),
                                c = v(a);
                            try {
                                for (c.s(); !(r = c.n()).done;) {
                                    var u = r.value,
                                        h = u.id,
                                        f = re(i[h], n);
                                    null !== f && s.push({
                                        plugin: u,
                                        options: ae(t.config, {
                                            plugin: u,
                                            local: o[h]
                                        }, f, l)
                                    })
                                }
                            } catch (t) {
                                c.e(t)
                            } finally {
                                c.f()
                            }
                            return s
                        }(t, a, r, e) : []
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

            function re(t, e) {
                return e || !1 !== t ? !0 === t ? {} : t : null
            }

            function ae(t, e, i, n) {
                var r = e.plugin,
                    a = e.local,
                    o = t.pluginScopeKeys(r),
                    s = t.getOptionScopes(i, o);
                return a && r.defaults && s.push(r.defaults), t.createResolver(s, n, [""], {
                    scriptable: !1,
                    indexable: !1,
                    allKeys: !0
                })
            }

            function oe(t, e) {
                var i = n.Eb.datasets[t] || {};
                return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
            }

            function se(t, e) {
                return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
                var i
            }

            function le(t) {
                var e = t.options || (t.options = {});
                e.plugins = Object(n.Wb)(e.plugins, {}), e.scales = function(t, e) {
                    var i = n.v[t.type] || {
                            scales: {}
                        },
                        r = e.scales || {},
                        a = oe(t.type, e),
                        o = Object.create(null),
                        s = Object.create(null);
                    return Object.keys(r).forEach((function(t) {
                        var e = r[t];
                        if (!Object(n.Jb)(e)) return console.error("Invalid scale configuration for scale: ".concat(t));
                        if (e._proxy) return console.warn("Ignoring resolver passed as options for scale: ".concat(t));
                        var l = se(t, e),
                            c = function(t, e) {
                                return t === e ? "_index_" : "_value_"
                            }(l, a),
                            u = i.scales || {};
                        o[l] = o[l] || t, s[t] = Object(n.eb)(Object.create(null), [{
                            axis: l
                        }, e, u[l], u[c]])
                    })), t.data.datasets.forEach((function(i) {
                        var a = i.type || t.type,
                            l = i.indexAxis || oe(a, e),
                            c = (n.v[a] || {}).scales || {};
                        Object.keys(c).forEach((function(t) {
                            var e = function(t, e) {
                                    var i = t;
                                    return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                                }(t, l),
                                a = i[e + "AxisID"] || o[e] || e;
                            s[a] = s[a] || Object.create(null), Object(n.eb)(s[a], [{
                                axis: e
                            }, r[a], c[t]])
                        }))
                    })), Object.keys(s).forEach((function(t) {
                        var e = s[t];
                        Object(n.eb)(e, [n.Eb.scales[e.type], n.Eb.scale])
                    })), s
                }(t, e)
            }

            function ce(t) {
                return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
            }
            var ue = new Map,
                he = new Set;

            function fe(t, e) {
                var i = ue.get(t);
                return i || (i = e(), ue.set(t, i), he.add(i)), i
            }
            var de = function(t, e, i) {
                    var r = Object(n.Gb)(e, i);
                    void 0 !== r && t.add(r)
                },
                ve = function() {
                    function t(e) {
                        m(this, t), this._config = function(t) {
                            return (t = t || {}).data = ce(t.data), le(t), t
                        }(e), this._scopeCache = new Map, this._resolverCache = new Map
                    }
                    return _(t, [{
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
                            this._config.data = ce(t)
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
                            this.clearCache(), le(t)
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
                            var r = this.options,
                                a = this.type,
                                o = this._cachedScopes(t, i),
                                s = o.get(e);
                            if (s) return s;
                            var l = new Set;
                            e.forEach((function(e) {
                                t && (l.add(t), e.forEach((function(e) {
                                    return de(l, t, e)
                                }))), e.forEach((function(t) {
                                    return de(l, r, t)
                                })), e.forEach((function(t) {
                                    return de(l, n.v[a] || {}, t)
                                })), e.forEach((function(t) {
                                    return de(l, n.Eb, t)
                                })), e.forEach((function(t) {
                                    return de(l, n.K, t)
                                }))
                            }));
                            var c = Array.from(l);
                            return 0 === c.length && c.push(Object.create(null)), he.has(e) && o.set(e, c), c
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
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [""],
                                a = {
                                    $shared: !0
                                },
                                o = pe(this._resolverCache, t, r),
                                s = o.resolver,
                                l = o.subPrefixes,
                                c = s;
                            if (be(s, e)) {
                                a.$shared = !1, i = Object(n.L)(i) ? i() : i;
                                var u = this.createResolver(t, i, l);
                                c = Object(n.M)(s, i, u)
                            }
                            var h, f = v(e);
                            try {
                                for (f.s(); !(h = f.n()).done;) {
                                    var d = h.value;
                                    a[d] = c[d]
                                }
                            } catch (t) {
                                f.e(t)
                            } finally {
                                f.f()
                            }
                            return a
                        }
                    }, {
                        key: "createResolver",
                        value: function(t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [""],
                                r = arguments.length > 3 ? arguments[3] : void 0,
                                a = pe(this._resolverCache, t, i),
                                o = a.resolver;
                            return Object(n.Jb)(e) ? Object(n.M)(o, e, void 0, r) : o
                        }
                    }]), t
                }();

            function pe(t, e, i) {
                var r = t.get(e);
                r || (r = new Map, t.set(e, r));
                var a = i.join(),
                    o = r.get(a);
                o || (o = {
                    resolver: Object(n.cb)(e, i),
                    subPrefixes: i.filter((function(t) {
                        return !t.toLowerCase().includes("hover")
                    }))
                }, r.set(a, o));
                return o
            }
            var ge = function(t) {
                return Object(n.Jb)(t) && Object.getOwnPropertyNames(t).reduce((function(e, i) {
                    return e || Object(n.L)(t[i])
                }), !1)
            };

            function be(t, e) {
                var i, r = Object(n.db)(t),
                    a = r.isScriptable,
                    o = r.isIndexable,
                    s = v(e);
                try {
                    for (s.s(); !(i = s.n()).done;) {
                        var l = i.value,
                            c = a(l),
                            u = o(l),
                            h = (u || c) && t[l];
                        if (c && (Object(n.L)(h) || ge(h)) || u && Object(n.Cb)(h)) return !0
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                return !1
            }
            var ye = ["top", "bottom", "left", "right", "chartArea"];

            function me(t, e) {
                return "top" === t || "bottom" === t || -1 === ye.indexOf(t) && "x" === e
            }

            function xe(t, e) {
                return function(i, n) {
                    return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
                }
            }

            function _e(t) {
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
                for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                    var a = r[n],
                        o = +a;
                    if (o >= e) {
                        var s = t[a];
                        delete t[a], (i > 0 || o > e) && (t[o + i] = s)
                    }
                }
            }
            var Se = function() {
                    function t(e, i) {
                        var r = this;
                        m(this, t);
                        var a = this.config = new ve(i),
                            o = Oe(e),
                            s = je(o);
                        if (s) throw new Error("Canvas is already in use. Chart with ID '" + s.id + "' must be destroyed before the canvas with ID '" + s.canvas.id + "' can be reused.");
                        var l = a.createResolver(a.chartOptionScopes(), this.getContext());
                        this.platform = new(a.platform || function(t) {
                            return !Object(n.J)() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? Wt : ie
                        }(o)), this.platform.updateConfig(a);
                        var c = this.platform.acquireContext(o, l.aspectRatio),
                            u = c && c.canvas,
                            h = u && u.height,
                            f = u && u.width;
                        this.id = Object(n.fb)(), this.ctx = c, this.canvas = u, this.width = f, this.height = h, this._options = l, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ne, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Object(n.gb)((function(t) {
                            return r.update(t)
                        }), l.resizeDelay || 0), this._dataChanges = [], we[this.id] = this, c && u ? (k.listen(this, "complete", _e), k.listen(this, "progress", ke), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    }
                    return _(t, [{
                        key: "aspectRatio",
                        get: function() {
                            var t = this.options,
                                e = t.aspectRatio,
                                i = t.maintainAspectRatio,
                                r = this.width,
                                a = this.height,
                                o = this._aspectRatio;
                            return Object(n.Lb)(e) ? i && o ? o : a ? r / a : null : e
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
                                r = this.canvas,
                                a = i.maintainAspectRatio && this.aspectRatio,
                                o = this.platform.getMaximumSize(r, t, e, a),
                                s = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                                l = this.width ? "resize" : "attach";
                            this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, Object(n.hb)(this, s, !0) && (this.notifyPlugins("resize", {
                                size: o
                            }), Object(n.d)(i.onResize, [this, o], this), this.attached && this._doResize(l) && this.render())
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
                                r = this.scales,
                                a = Object.keys(r).reduce((function(t, e) {
                                    return t[e] = !1, t
                                }), {}),
                                o = [];
                            i && (o = o.concat(Object.keys(i).map((function(t) {
                                var e = i[t],
                                    n = se(t, e),
                                    r = "r" === n,
                                    a = "x" === n;
                                return {
                                    options: e,
                                    dposition: r ? "chartArea" : a ? "bottom" : "left",
                                    dtype: r ? "radialLinear" : a ? "category" : "linear"
                                }
                            })))), Object(n.r)(o, (function(i) {
                                var o = i.options,
                                    s = o.id,
                                    l = se(s, o),
                                    c = Object(n.Wb)(o.type, i.dtype);
                                void 0 !== o.position && me(o.position, l) === me(i.dposition) || (o.position = i.dposition), a[s] = !0;
                                var u = null;
                                s in r && r[s].type === c ? u = r[s] : (u = new(dt.getScale(c))({
                                    id: s,
                                    type: c,
                                    ctx: t.ctx,
                                    chart: t
                                }), r[u.id] = u);
                                u.init(o, e)
                            })), Object(n.r)(a, (function(t, e) {
                                t || delete r[e]
                            })), Object(n.r)(r, (function(e) {
                                Nt(t, e, e.options), zt(t, e)
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
                            this._sortedMetasets = t.slice(0).sort(xe("order", "index"))
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
                                r = this.data.datasets;
                            for (this._removeUnreferencedMetasets(), t = 0, e = r.length; t < e; t++) {
                                var a = r[t],
                                    o = this.getDatasetMeta(t),
                                    s = a.type || this.config.type;
                                if (o.type && o.type !== s && (this._destroyDatasetMeta(t), o = this.getDatasetMeta(t)), o.type = s, o.indexAxis = a.indexAxis || oe(s, this.options), o.order = a.order || 0, o.index = t, o.label = "" + a.label, o.visible = this.isDatasetVisible(t), o.controller) o.controller.updateIndex(t), o.controller.linkScales();
                                else {
                                    var l = dt.getController(s),
                                        c = n.Eb.datasets[s],
                                        u = c.datasetElementType,
                                        h = c.dataElementType;
                                    Object.assign(l.prototype, {
                                        dataElementType: dt.getElement(h),
                                        datasetElementType: u && dt.getElement(u)
                                    }), o.controller = new l(this, t), i.push(o.controller)
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
                                r = this._animationsDisabled = !i.animation;
                            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 !== this.notifyPlugins("beforeUpdate", {
                                    mode: t,
                                    cancelable: !0
                                })) {
                                var a = this.buildOrUpdateControllers();
                                this.notifyPlugins("beforeElementsUpdate");
                                for (var o = 0, s = 0, l = this.data.datasets.length; s < l; s++) {
                                    var c = this.getDatasetMeta(s).controller,
                                        u = !r && -1 === a.indexOf(c);
                                    c.buildOrUpdateElements(u), o = Math.max(+c.getMaxOverflow(), o)
                                }
                                o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), r || Object(n.r)(a, (function(t) {
                                    t.reset()
                                })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                                    mode: t
                                }), this._layers.sort(xe("z", "_idx"));
                                var h = this._active,
                                    f = this._lastEvent;
                                f ? this._eventHandler(f, !0) : h.length && this._updateHoverStyles(h, h, !0), this.render()
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
                                        r = n.method,
                                        a = n.start,
                                        o = n.count;
                                    Me(e, a, "_removeElements" === r ? -o : o)
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
                                    }, r = i(0), a = 1; a < e; a++)
                                    if (!Object(n.jb)(r, i(a))) return;
                                return Array.from(r).map((function(t) {
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
                                    r = i.width <= 0 || i.height <= 0;
                                this._layers = [], Object(n.r)(this.boxes, (function(t) {
                                    var i;
                                    r && "chartArea" === t.position || (t.configure && t.configure(), (i = e._layers).push.apply(i, g(t._layers())))
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
                                for (var r = 0, a = this.data.datasets.length; r < a; ++r) this._updateDataset(r, Object(n.L)(t) ? t({
                                    datasetIndex: r
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
                            }) && (k.has(this) ? this.attached && !k.running(this) && k.start(this) : (this.draw(), _e({
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
                                var r = this._layers;
                                for (t = 0; t < r.length && r[t].z <= 0; ++t) r[t].draw(this.chartArea);
                                for (this._drawDatasets(); t < r.length; ++t) r[t].draw(this.chartArea);
                                this.notifyPlugins("afterDraw")
                            }
                        }
                    }, {
                        key: "_getSortedDatasetMetas",
                        value: function(t) {
                            var e, i, n = this._sortedMetasets,
                                r = [];
                            for (e = 0, i = n.length; e < i; ++e) {
                                var a = n[e];
                                t && !a.visible || r.push(a)
                            }
                            return r
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
                                r = !i.disabled,
                                a = this.chartArea,
                                o = {
                                    meta: t,
                                    index: t.index,
                                    cancelable: !0
                                };
                            !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (r && Object(n.m)(e, {
                                left: !1 === i.left ? 0 : a.left - i.left,
                                right: !1 === i.right ? this.width : a.right + i.right,
                                top: !1 === i.top ? 0 : a.top - i.top,
                                bottom: !1 === i.bottom ? this.height : a.bottom + i.bottom
                            }), t.controller.draw(), r && Object(n.o)(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o))
                        }
                    }, {
                        key: "isPointInArea",
                        value: function(t) {
                            return Object(n.a)(t, this.chartArea, this._minPadding)
                        }
                    }, {
                        key: "getElementsAtEventForMode",
                        value: function(t, e, i, n) {
                            var r = wt.modes[e];
                            return "function" == typeof r ? r(this, t, i, n) : []
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
                            var r = i ? "show" : "hide",
                                a = this.getDatasetMeta(t),
                                o = a.controller._resolveAnimations(void 0, r);
                            Object(n.Kb)(e) ? (a.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(a, {
                                visible: i
                            }), this.update((function(e) {
                                return e.datasetIndex === t ? r : void 0
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
                                r = function(e, i, n) {
                                    e.offsetX = i, e.offsetY = n, t._eventHandler(e)
                                };
                            Object(n.r)(this.options.events, (function(n) {
                                return function(n, r) {
                                    i.addEventListener(t, n, r), e[n] = r
                                }(n, r)
                            }))
                        }
                    }, {
                        key: "bindResponsiveEvents",
                        value: function() {
                            var t = this;
                            this._responsiveListeners || (this._responsiveListeners = {});
                            var e, i = this._responsiveListeners,
                                n = this.platform,
                                r = function(e, r) {
                                    n.addEventListener(t, e, r), i[e] = r
                                },
                                a = function(e, r) {
                                    i[e] && (n.removeEventListener(t, e, r), delete i[e])
                                },
                                o = function(e, i) {
                                    t.canvas && t.resize(e, i)
                                },
                                s = function i() {
                                    a("attach", i), t.attached = !0, t.resize(), r("resize", o), r("detach", e)
                                };
                            e = function() {
                                t.attached = !1, a("resize", o), t._stop(), t._resize(0, 0), r("attach", s)
                            }, n.isAttached(this.canvas) ? s() : e()
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
                            var n, r, a, o = i ? "set" : "remove";
                            for ("dataset" === e && this.getDatasetMeta(t[0].datasetIndex).controller["_" + o + "DatasetHoverStyle"](), r = 0, a = t.length; r < a; ++r) {
                                var s = (n = t[r]) && this.getDatasetMeta(n.datasetIndex).controller;
                                s && s[o + "HoverStyle"](n.element, n.datasetIndex, n.index)
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
                                r = t.map((function(t) {
                                    var i = t.datasetIndex,
                                        n = t.index,
                                        r = e.getDatasetMeta(i);
                                    if (!r) throw new Error("No dataset found at index " + i);
                                    return {
                                        datasetIndex: i,
                                        element: r.data[n],
                                        index: n
                                    }
                                }));
                            !Object(n.kb)(r, i) && (this._active = r, this._lastEvent = null, this._updateHoverStyles(r, i))
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
                                r = function(t, e) {
                                    return t.filter((function(t) {
                                        return !e.some((function(e) {
                                            return t.datasetIndex === e.datasetIndex && t.index === e.index
                                        }))
                                    }))
                                },
                                a = r(e, t),
                                o = i ? t : r(t, e);
                            a.length && this.updateHoverStyle(a, n.mode, !1), o.length && n.mode && this.updateHoverStyle(o, n.mode, !0)
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
                                r = function(e) {
                                    return (e.options.events || i.options.events).includes(t.native.type)
                                };
                            if (!1 !== this.notifyPlugins("beforeEvent", n, r)) {
                                var a = this._handleEvent(t, e, n.inChartArea);
                                return n.cancelable = !1, this.notifyPlugins("afterEvent", n, r), (a || n.changed) && this.render(), this
                            }
                        }
                    }, {
                        key: "_handleEvent",
                        value: function(t, e, i) {
                            var r = this._active,
                                a = void 0 === r ? [] : r,
                                o = this.options,
                                s = e,
                                l = this._getActiveElements(t, a, i, s),
                                c = Object(n.lb)(t),
                                u = function(t, e, i, n) {
                                    return i && "mouseout" !== t.type ? n ? e : t : null
                                }(t, this._lastEvent, i, c);
                            i && (this._lastEvent = null, Object(n.d)(o.onHover, [t, l, this], this), c && Object(n.d)(o.onClick, [t, l, this], this));
                            var h = !Object(n.kb)(l, a);
                            return (h || e) && (this._active = l, this._updateHoverStyles(l, a, e)), this._lastEvent = u, h
                        }
                    }, {
                        key: "_getActiveElements",
                        value: function(t, e, i, n) {
                            if ("mouseout" === t.type) return [];
                            if (!i) return e;
                            var r = this.options.hover;
                            return this.getElementsAtEventForMode(t, r.mode, r, n)
                        }
                    }]), t
                }(),
                Ee = function() {
                    return Object(n.r)(Se.instances, (function(t) {
                        return t._plugins.invalidate()
                    }))
                };

            function Pe(t, e, i) {
                var r = e.startAngle,
                    a = e.pixelMargin,
                    o = e.x,
                    s = e.y,
                    l = e.outerRadius,
                    c = e.innerRadius,
                    u = a / l;
                t.beginPath(), t.arc(o, s, l, r - u, i + u), c > a ? (u = a / c, t.arc(o, s, c, i + u, r - u, !0)) : t.arc(o, s, a, i + n.i, r - n.i), t.closePath(), t.clip()
            }

            function Le(t, e, i, r) {
                var a, o = (a = t.options.borderRadius, Object(n.nb)(a, ["outerStart", "outerEnd", "innerStart", "innerEnd"])),
                    s = (i - e) / 2,
                    l = Math.min(s, r * e / 2),
                    c = function(t) {
                        var e = (i - Math.min(s, t)) * r / 2;
                        return Object(n.f)(t, 0, Math.min(s, e))
                    };
                return {
                    outerStart: c(o.outerStart),
                    outerEnd: c(o.outerEnd),
                    innerStart: Object(n.f)(o.innerStart, 0, l),
                    innerEnd: Object(n.f)(o.innerEnd, 0, l)
                }
            }

            function De(t, e, i, n) {
                return {
                    x: i + t * Math.cos(e),
                    y: n + t * Math.sin(e)
                }
            }

            function Ce(t, e, i, r, a, o) {
                var s = e.x,
                    l = e.y,
                    c = e.startAngle,
                    u = e.pixelMargin,
                    h = e.innerRadius,
                    f = Math.max(e.outerRadius + r + i - u, 0),
                    d = h > 0 ? h + r + i + u : 0,
                    v = 0,
                    p = a - c;
                if (r) {
                    var g = ((h > 0 ? h - r : 0) + (f > 0 ? f - r : 0)) / 2;
                    v = (p - (0 !== g ? p * g / (g + r) : p)) / 2
                }
                var b = (p - Math.max(.001, p * f - i / n.q) / f) / 2,
                    y = c + b + v,
                    m = a - b - v,
                    x = Le(e, d, f, m - y),
                    _ = x.outerStart,
                    k = x.outerEnd,
                    O = x.innerStart,
                    w = x.innerEnd,
                    j = f - _,
                    M = f - k,
                    S = y + _ / j,
                    E = m - k / M,
                    P = d + O,
                    L = d + w,
                    D = y + O / P,
                    C = m - w / L;
                if (t.beginPath(), o) {
                    if (t.arc(s, l, f, S, E), k > 0) {
                        var A = De(M, E, s, l);
                        t.arc(A.x, A.y, k, E, m + n.i)
                    }
                    var T = De(L, m, s, l);
                    if (t.lineTo(T.x, T.y), w > 0) {
                        var R = De(L, C, s, l);
                        t.arc(R.x, R.y, w, m + n.i, C + Math.PI)
                    }
                    if (t.arc(s, l, d, m - w / d, y + O / d, !0), O > 0) {
                        var I = De(P, D, s, l);
                        t.arc(I.x, I.y, O, D + Math.PI, y - n.i)
                    }
                    var z = De(j, y, s, l);
                    if (t.lineTo(z.x, z.y), _ > 0) {
                        var F = De(j, S, s, l);
                        t.arc(F.x, F.y, _, y - n.i, S)
                    }
                } else {
                    t.moveTo(s, l);
                    var N = Math.cos(S) * f + s,
                        V = Math.sin(S) * f + l;
                    t.lineTo(N, V);
                    var B = Math.cos(E) * f + s,
                        W = Math.sin(E) * f + l;
                    t.lineTo(B, W)
                }
                t.closePath()
            }

            function Ae(t, e, i, r, a, o) {
                var s = e.options,
                    l = s.borderWidth,
                    c = s.borderJoinStyle,
                    u = "inner" === s.borderAlign;
                l && (u ? (t.lineWidth = 2 * l, t.lineJoin = c || "round") : (t.lineWidth = l, t.lineJoin = c || "bevel"), e.fullCircles && function(t, e, i) {
                    var r, a = e.x,
                        o = e.y,
                        s = e.startAngle,
                        l = e.pixelMargin,
                        c = e.fullCircles,
                        u = Math.max(e.outerRadius - l, 0),
                        h = e.innerRadius + l;
                    for (i && Pe(t, e, s + n.u), t.beginPath(), t.arc(a, o, h, s + n.u, s, !0), r = 0; r < c; ++r) t.stroke();
                    for (t.beginPath(), t.arc(a, o, u, s, s + n.u), r = 0; r < c; ++r) t.stroke()
                }(t, e, u), u && Pe(t, e, a), Ce(t, e, i, r, a, o), t.stroke())
            }
            Object.defineProperties(Se, {
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
                        dt.add.apply(dt, arguments), Ee()
                    }
                },
                unregister: {
                    enumerable: !0,
                    value: function() {
                        dt.remove.apply(dt, arguments), Ee()
                    }
                }
            });
            var Te = function(t) {
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).options = void 0, n.circumference = void 0, n.startAngle = void 0, n.endAngle = void 0, n.innerRadius = void 0, n.outerRadius = void 0, n.pixelMargin = 0, n.fullCircles = 0, t && Object.assign(u(n), t), n
                }
                return _(i, [{
                    key: "inRange",
                    value: function(t, e, i) {
                        var r = this.getProps(["x", "y"], i),
                            a = Object(n.D)(r, {
                                x: t,
                                y: e
                            }),
                            o = a.angle,
                            s = a.distance,
                            l = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
                            c = l.startAngle,
                            u = l.endAngle,
                            h = l.innerRadius,
                            f = l.outerRadius,
                            d = l.circumference,
                            v = this.options.spacing / 2,
                            p = Object(n.Wb)(d, u - c) >= n.u || Object(n.Qb)(o, c, u),
                            g = Object(n.mb)(s, h + v, f + v);
                        return p && g
                    }
                }, {
                    key: "getCenterPoint",
                    value: function(t) {
                        var e = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t),
                            i = e.x,
                            n = e.y,
                            r = e.startAngle,
                            a = e.endAngle,
                            o = e.innerRadius,
                            s = e.outerRadius,
                            l = this.options,
                            c = l.offset,
                            u = (r + a) / 2,
                            h = (o + s + l.spacing + c) / 2;
                        return {
                            x: i + Math.cos(u) * h,
                            y: n + Math.sin(u) * h
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
                            r = (e.offset || 0) / 2,
                            a = (e.spacing || 0) / 2,
                            o = e.circular;
                        if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > n.u ? Math.floor(i / n.u) : 0, !(0 === i || this.innerRadius < 0 || this.outerRadius < 0)) {
                            t.save();
                            var s = 0;
                            if (r) {
                                s = r / 2;
                                var l = (this.startAngle + this.endAngle) / 2;
                                t.translate(Math.cos(l) * s, Math.sin(l) * s), this.circumference >= n.q && (s = r)
                            }
                            t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
                            var c = function(t, e, i, r, a) {
                                var o = e.fullCircles,
                                    s = e.startAngle,
                                    l = e.circumference,
                                    c = e.endAngle;
                                if (o) {
                                    Ce(t, e, i, r, s + n.u, a);
                                    for (var u = 0; u < o; ++u) t.fill();
                                    isNaN(l) || (c = s + l % n.u, l % n.u == 0 && (c += n.u))
                                }
                                return Ce(t, e, i, r, c, a), t.fill(), c
                            }(t, this, s, a, o);
                            Ae(t, this, s, a, c, o), t.restore()
                        }
                    }
                }]), i
            }(tt);

            function Re(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
                t.lineCap = Object(n.Wb)(i.borderCapStyle, e.borderCapStyle), t.setLineDash(Object(n.Wb)(i.borderDash, e.borderDash)), t.lineDashOffset = Object(n.Wb)(i.borderDashOffset, e.borderDashOffset), t.lineJoin = Object(n.Wb)(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = Object(n.Wb)(i.borderWidth, e.borderWidth), t.strokeStyle = Object(n.Wb)(i.borderColor, e.borderColor)
            }

            function Ie(t, e, i) {
                t.lineTo(i.x, i.y)
            }

            function ze(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = t.length,
                    r = i.start,
                    a = void 0 === r ? 0 : r,
                    o = i.end,
                    s = void 0 === o ? n - 1 : o,
                    l = e.start,
                    c = e.end,
                    u = Math.max(a, l),
                    h = Math.min(s, c),
                    f = a < l && s < l || a > c && s > c;
                return {
                    count: n,
                    start: u,
                    loop: e.loop,
                    ilen: h < u && !f ? n + h - u : h - u
                }
            }

            function Fe(t, e, i, r) {
                var a, o, s, l = e.points,
                    c = e.options,
                    u = ze(l, i, r),
                    h = u.count,
                    f = u.start,
                    d = u.loop,
                    v = u.ilen,
                    p = function(t) {
                        return t.stepped ? n.ub : t.tension || "monotone" === t.cubicInterpolationMode ? n.vb : Ie
                    }(c),
                    g = r || {},
                    b = g.move,
                    y = void 0 === b || b,
                    m = g.reverse;
                for (a = 0; a <= v; ++a)(o = l[(f + (m ? v - a : a)) % h]).skip || (y ? (t.moveTo(o.x, o.y), y = !1) : p(t, s, o, m, c.stepped), s = o);
                return d && p(t, s, o = l[(f + (m ? v : 0)) % h], m, c.stepped), !!d
            }

            function Ne(t, e, i, n) {
                var r, a, o, s, l, c, u = e.points,
                    h = ze(u, i, n),
                    f = h.count,
                    d = h.start,
                    v = h.ilen,
                    p = n || {},
                    g = p.move,
                    b = void 0 === g || g,
                    y = p.reverse,
                    m = 0,
                    x = 0,
                    _ = function(t) {
                        return (d + (y ? v - t : t)) % f
                    },
                    k = function() {
                        s !== l && (t.lineTo(m, l), t.lineTo(m, s), t.lineTo(m, c))
                    };
                for (b && (a = u[_(0)], t.moveTo(a.x, a.y)), r = 0; r <= v; ++r)
                    if (!(a = u[_(r)]).skip) {
                        var O = a.x,
                            w = a.y,
                            j = 0 | O;
                        j === o ? (w < s ? s = w : w > l && (l = w), m = (x * m + O) / ++x) : (k(), t.lineTo(O, w), o = j, x = 0, s = l = w), c = w
                    } k()
            }

            function Ve(t) {
                var e = t.options,
                    i = e.borderDash && e.borderDash.length;
                return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Ne : Fe
            }
            Te.id = "arc", Te.defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderJoinStyle: void 0,
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0,
                circular: !0
            }, Te.defaultRoutes = {
                backgroundColor: "backgroundColor"
            };
            var Be = "function" == typeof Path2D;

            function We(t, e, i, n) {
                Be && !e.options.segment ? function(t, e, i, n) {
                    var r = e._path;
                    r || (r = e._path = new Path2D, e.path(r, i, n) && r.closePath()), Re(t, e.options), t.stroke(r)
                }(t, e, i, n) : function(t, e, i, n) {
                    var r, a = e.segments,
                        o = e.options,
                        s = Ve(e),
                        l = v(a);
                    try {
                        for (l.s(); !(r = l.n()).done;) {
                            var c = r.value;
                            Re(t, o, c.style), t.beginPath(), s(t, e, c, {
                                start: i,
                                end: i + n - 1
                            }) && t.closePath(), t.stroke()
                        }
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                }(t, e, i, n)
            }
            var He = function(t) {
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).animated = !0, n.options = void 0, n._chart = void 0, n._loop = void 0, n._fullLoop = void 0, n._path = void 0, n._points = void 0, n._segments = void 0, n._decimated = !1, n._pointsUpdated = !1, n._datasetIndex = void 0, t && Object.assign(u(n), t), n
                }
                return _(i, [{
                    key: "updateControlPoints",
                    value: function(t, e) {
                        var i = this.options;
                        if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                            var r = i.spanGaps ? this._loop : this._fullLoop;
                            Object(n.ob)(this._points, i, t, r, e), this._pointsUpdated = !0
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
                            r = t[e],
                            a = this.points,
                            o = Object(n.qb)(this, {
                                property: e,
                                start: r,
                                end: r
                            });
                        if (o.length) {
                            var s, l, c = [],
                                u = function(t) {
                                    return t.stepped ? n.rb : t.tension || "monotone" === t.cubicInterpolationMode ? n.sb : n.tb
                                }(i);
                            for (s = 0, l = o.length; s < l; ++s) {
                                var h = o[s],
                                    f = h.start,
                                    d = h.end,
                                    v = a[f],
                                    p = a[d];
                                if (v !== p) {
                                    var g = u(v, p, Math.abs((r - v[e]) / (p[e] - v[e])), i.stepped);
                                    g[e] = t[e], c.push(g)
                                } else c.push(v)
                            }
                            return 1 === c.length ? c[0] : c
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
                            r = Ve(this),
                            a = this._loop;
                        e = e || 0, i = i || this.points.length - e;
                        var o, s = v(n);
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                a &= r(t, this, o.value, {
                                    start: e,
                                    end: e + i - 1
                                })
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        return !!a
                    }
                }, {
                    key: "draw",
                    value: function(t, e, i, n) {
                        var r = this.options || {};
                        (this.points || []).length && r.borderWidth && (t.save(), We(t, this, i, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
                    }
                }]), i
            }(tt);

            function Ue(t, e, i, n) {
                var r = t.options,
                    a = t.getProps([i], n)[i];
                return Math.abs(e - a) < r.radius + r.hitRadius
            }
            He.id = "line", He.defaults = {
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
            }, He.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            }, He.descriptors = {
                _scriptable: !0,
                _indexable: function(t) {
                    return "borderDash" !== t && "fill" !== t
                }
            };
            var Je = function(t) {
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).options = void 0, n.parsed = void 0, n.skip = void 0, n.stop = void 0, t && Object.assign(u(n), t), n
                }
                return _(i, [{
                    key: "inRange",
                    value: function(t, e, i) {
                        var n = this.options,
                            r = this.getProps(["x", "y"], i),
                            a = r.x,
                            o = r.y;
                        return Math.pow(t - a, 2) + Math.pow(e - o, 2) < Math.pow(n.hitRadius + n.radius, 2)
                    }
                }, {
                    key: "inXRange",
                    value: function(t, e) {
                        return Ue(this, t, "x", e)
                    }
                }, {
                    key: "inYRange",
                    value: function(t, e) {
                        return Ue(this, t, "y", e)
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

            function Ye(t, e) {
                var i, n, r, a, o, s = t.getProps(["x", "y", "base", "width", "height"], e),
                    l = s.x,
                    c = s.y,
                    u = s.base,
                    h = s.width,
                    f = s.height;
                return t.horizontal ? (o = f / 2, i = Math.min(l, u), n = Math.max(l, u), r = c - o, a = c + o) : (i = l - (o = h / 2), n = l + o, r = Math.min(c, u), a = Math.max(c, u)), {
                    left: i,
                    top: r,
                    right: n,
                    bottom: a
                }
            }

            function $e(t, e, i, r) {
                return t ? 0 : Object(n.f)(e, i, r)
            }

            function Ge(t) {
                var e = Ye(t),
                    i = e.right - e.left,
                    r = e.bottom - e.top,
                    a = function(t, e, i) {
                        var r = t.options.borderWidth,
                            a = t.borderSkipped,
                            o = Object(n.yb)(r);
                        return {
                            t: $e(a.top, o.top, 0, i),
                            r: $e(a.right, o.right, 0, e),
                            b: $e(a.bottom, o.bottom, 0, i),
                            l: $e(a.left, o.left, 0, e)
                        }
                    }(t, i / 2, r / 2),
                    o = function(t, e, i) {
                        var r = t.getProps(["enableBorderRadius"]).enableBorderRadius,
                            a = t.options.borderRadius,
                            o = Object(n.zb)(a),
                            s = Math.min(e, i),
                            l = t.borderSkipped,
                            c = r || Object(n.Jb)(a);
                        return {
                            topLeft: $e(!c || l.top || l.left, o.topLeft, 0, s),
                            topRight: $e(!c || l.top || l.right, o.topRight, 0, s),
                            bottomLeft: $e(!c || l.bottom || l.left, o.bottomLeft, 0, s),
                            bottomRight: $e(!c || l.bottom || l.right, o.bottomRight, 0, s)
                        }
                    }(t, i / 2, r / 2);
                return {
                    outer: {
                        x: e.left,
                        y: e.top,
                        w: i,
                        h: r,
                        radius: o
                    },
                    inner: {
                        x: e.left + a.l,
                        y: e.top + a.t,
                        w: i - a.l - a.r,
                        h: r - a.t - a.b,
                        radius: {
                            topLeft: Math.max(0, o.topLeft - Math.max(a.t, a.l)),
                            topRight: Math.max(0, o.topRight - Math.max(a.t, a.r)),
                            bottomLeft: Math.max(0, o.bottomLeft - Math.max(a.b, a.l)),
                            bottomRight: Math.max(0, o.bottomRight - Math.max(a.b, a.r))
                        }
                    }
                }
            }

            function qe(t, e, i, r) {
                var a = null === e,
                    o = null === i,
                    s = t && !(a && o) && Ye(t, r);
                return s && (a || Object(n.mb)(e, s.left, s.right)) && (o || Object(n.mb)(i, s.top, s.bottom))
            }

            function Xe(t, e) {
                t.rect(e.x, e.y, e.w, e.h)
            }

            function Ke(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = t.x !== i.x ? -e : 0,
                    r = t.y !== i.y ? -e : 0,
                    a = (t.x + t.w !== i.x + i.w ? e : 0) - n,
                    o = (t.y + t.h !== i.y + i.h ? e : 0) - r;
                return {
                    x: t.x + n,
                    y: t.y + r,
                    w: t.w + a,
                    h: t.h + o,
                    radius: t.radius
                }
            }
            Je.id = "point", Je.defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
            }, Je.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            var Ze = function(t) {
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).options = void 0, n.horizontal = void 0, n.base = void 0, n.width = void 0, n.height = void 0, n.inflateAmount = void 0, t && Object.assign(u(n), t), n
                }
                return _(i, [{
                    key: "draw",
                    value: function(t) {
                        var e, i = this.inflateAmount,
                            r = this.options,
                            a = r.borderColor,
                            o = r.backgroundColor,
                            s = Ge(this),
                            l = s.inner,
                            c = s.outer,
                            u = (e = c.radius).topLeft || e.topRight || e.bottomLeft || e.bottomRight ? n.xb : Xe;
                        t.save(), c.w === l.w && c.h === l.h || (t.beginPath(), u(t, Ke(c, i, l)), t.clip(), u(t, Ke(l, -i, c)), t.fillStyle = a, t.fill("evenodd")), t.beginPath(), u(t, Ke(l, i)), t.fillStyle = o, t.fill(), t.restore()
                    }
                }, {
                    key: "inRange",
                    value: function(t, e, i) {
                        return qe(this, t, e, i)
                    }
                }, {
                    key: "inXRange",
                    value: function(t, e) {
                        return qe(this, t, null, e)
                    }
                }, {
                    key: "inYRange",
                    value: function(t, e) {
                        return qe(this, null, t, e)
                    }
                }, {
                    key: "getCenterPoint",
                    value: function(t) {
                        var e = this.getProps(["x", "y", "base", "horizontal"], t),
                            i = e.x,
                            n = e.y,
                            r = e.base,
                            a = e.horizontal;
                        return {
                            x: a ? (i + r) / 2 : i,
                            y: a ? n : (n + r) / 2
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
                        r = 0,
                        a = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        var o = t[e].element;
                        if (o && o.hasValue()) {
                            var s = o.tooltipPosition();
                            n += s.x, r += s.y, ++a
                        }
                    }
                    return {
                        x: n / a,
                        y: r / a
                    }
                },
                nearest: function(t, e) {
                    if (!t.length) return !1;
                    var i, r, a, o = e.x,
                        s = e.y,
                        l = Number.POSITIVE_INFINITY;
                    for (i = 0, r = t.length; i < r; ++i) {
                        var c = t[i].element;
                        if (c && c.hasValue()) {
                            var u = c.getCenterPoint(),
                                h = Object(n.T)(e, u);
                            h < l && (l = h, a = c)
                        }
                    }
                    if (a) {
                        var f = a.tooltipPosition();
                        o = f.x, s = f.y
                    }
                    return {
                        x: o,
                        y: s
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
                    r = e.index,
                    a = t.getDatasetMeta(n).controller,
                    o = a.getLabelAndValue(r),
                    s = o.label,
                    l = o.value;
                return {
                    chart: t,
                    label: s,
                    parsed: a.getParsed(r),
                    raw: t.data.datasets[n].data[r],
                    formattedValue: l,
                    dataset: a.getDataset(),
                    dataIndex: r,
                    datasetIndex: n,
                    element: i
                }
            }

            function ni(t, e) {
                var i = t.chart.ctx,
                    r = t.body,
                    a = t.footer,
                    o = t.title,
                    s = e.boxWidth,
                    l = e.boxHeight,
                    c = Object(n.p)(e.bodyFont),
                    u = Object(n.p)(e.titleFont),
                    h = Object(n.p)(e.footerFont),
                    f = o.length,
                    d = a.length,
                    v = r.length,
                    p = Object(n.l)(e.padding),
                    g = p.height,
                    b = 0,
                    y = r.reduce((function(t, e) {
                        return t + e.before.length + e.lines.length + e.after.length
                    }), 0);
                (y += t.beforeBody.length + t.afterBody.length, f && (g += f * u.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom), y) && (g += v * (e.displayColors ? Math.max(l, c.lineHeight) : c.lineHeight) + (y - v) * c.lineHeight + (y - 1) * e.bodySpacing);
                d && (g += e.footerMarginTop + d * h.lineHeight + (d - 1) * e.footerSpacing);
                var m = 0,
                    x = function(t) {
                        b = Math.max(b, i.measureText(t).width + m)
                    };
                return i.save(), i.font = u.string, Object(n.r)(t.title, x), i.font = c.string, Object(n.r)(t.beforeBody.concat(t.afterBody), x), m = e.displayColors ? s + 2 + e.boxPadding : 0, Object(n.r)(r, (function(t) {
                    Object(n.r)(t.before, x), Object(n.r)(t.lines, x), Object(n.r)(t.after, x)
                })), m = 0, i.font = h.string, Object(n.r)(t.footer, x), i.restore(), {
                    width: b += p.width,
                    height: g
                }
            }

            function ri(t, e, i, n) {
                var r = i.x,
                    a = i.width,
                    o = t.width,
                    s = t.chartArea,
                    l = s.left,
                    c = s.right,
                    u = "center";
                return "center" === n ? u = r <= (l + c) / 2 ? "left" : "right" : r <= a / 2 ? u = "left" : r >= o - a / 2 && (u = "right"),
                    function(t, e, i, n) {
                        var r = n.x,
                            a = n.width,
                            o = i.caretSize + i.caretPadding;
                        return "left" === t && r + a + o > e.width || ("right" === t && r - a - o < 0 || void 0)
                    }(u, t, e, i) && (u = "center"), u
            }

            function ai(t, e, i) {
                var n = i.yAlign || e.yAlign || function(t, e) {
                    var i = e.y,
                        n = e.height;
                    return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center"
                }(t, i);
                return {
                    xAlign: i.xAlign || e.xAlign || ri(t, e, i, n),
                    yAlign: n
                }
            }

            function oi(t, e, i, r) {
                var a = t.caretSize,
                    o = t.caretPadding,
                    s = t.cornerRadius,
                    l = i.xAlign,
                    c = i.yAlign,
                    u = a + o,
                    h = Object(n.zb)(s),
                    f = h.topLeft,
                    d = h.topRight,
                    v = h.bottomLeft,
                    p = h.bottomRight,
                    g = function(t, e) {
                        var i = t.x,
                            n = t.width;
                        return "right" === e ? i -= n : "center" === e && (i -= n / 2), i
                    }(e, l),
                    b = function(t, e, i) {
                        var n = t.y,
                            r = t.height;
                        return "top" === e ? n += i : n -= "bottom" === e ? r + i : r / 2, n
                    }(e, c, u);
                return "center" === c ? "left" === l ? g += u : "right" === l && (g -= u) : "left" === l ? g -= Math.max(f, v) + a : "right" === l && (g += Math.max(d, p) + a), {
                    x: Object(n.f)(g, 0, r.width - e.width),
                    y: Object(n.f)(b, 0, r.height - e.height)
                }
            }

            function si(t, e, i) {
                var r = Object(n.l)(i.padding);
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - r.right : t.x + r.left
            }

            function li(t) {
                return ti([], ei(t))
            }

            function ci(t, e) {
                var i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
                return i ? t.override(i) : t
            }
            var ui = function(t) {
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this)).opacity = 0, n._active = [], n._eventPosition = void 0, n._size = void 0, n._cachedAnimations = void 0, n._tooltipItems = [], n.$animations = void 0, n.$context = void 0, n.chart = t.chart || t._chart, n._chart = n.chart, n.options = t.options, n.dataPoints = void 0, n.title = void 0, n.beforeBody = void 0, n.body = void 0, n.afterBody = void 0, n.footer = void 0, n.xAlign = void 0, n.yAlign = void 0, n.x = void 0, n.y = void 0, n.height = void 0, n.width = void 0, n.caretX = void 0, n.caretY = void 0, n.labelColors = void 0, n.labelPointStyles = void 0, n.labelTextColors = void 0, n
                }
                return _(i, [{
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
                            r = new M(this.chart, n);
                        return n._cacheable && (this._cachedAnimations = Object.freeze(r)), r
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
                            r = i.title.apply(this, [t]),
                            a = i.afterTitle.apply(this, [t]),
                            o = [];
                        return o = ti(o, ei(n)), o = ti(o, ei(r)), o = ti(o, ei(a))
                    }
                }, {
                    key: "getBeforeBody",
                    value: function(t, e) {
                        return li(e.callbacks.beforeBody.apply(this, [t]))
                    }
                }, {
                    key: "getBody",
                    value: function(t, e) {
                        var i = this,
                            r = e.callbacks,
                            a = [];
                        return Object(n.r)(t, (function(t) {
                            var e = {
                                    before: [],
                                    lines: [],
                                    after: []
                                },
                                n = ci(r, t);
                            ti(e.before, ei(n.beforeLabel.call(i, t))), ti(e.lines, n.label.call(i, t)), ti(e.after, ei(n.afterLabel.call(i, t))), a.push(e)
                        })), a
                    }
                }, {
                    key: "getAfterBody",
                    value: function(t, e) {
                        return li(e.callbacks.afterBody.apply(this, [t]))
                    }
                }, {
                    key: "getFooter",
                    value: function(t, e) {
                        var i = e.callbacks,
                            n = i.beforeFooter.apply(this, [t]),
                            r = i.footer.apply(this, [t]),
                            a = i.afterFooter.apply(this, [t]),
                            o = [];
                        return o = ti(o, ei(n)), o = ti(o, ei(r)), o = ti(o, ei(a))
                    }
                }, {
                    key: "_createItems",
                    value: function(t) {
                        var e, i, r = this,
                            a = this._active,
                            o = this.chart.data,
                            s = [],
                            l = [],
                            c = [],
                            u = [];
                        for (e = 0, i = a.length; e < i; ++e) u.push(ii(this.chart, a[e]));
                        return t.filter && (u = u.filter((function(e, i, n) {
                            return t.filter(e, i, n, o)
                        }))), t.itemSort && (u = u.sort((function(e, i) {
                            return t.itemSort(e, i, o)
                        }))), Object(n.r)(u, (function(e) {
                            var i = ci(t.callbacks, e);
                            s.push(i.labelColor.call(r, e)), l.push(i.labelPointStyle.call(r, e)), c.push(i.labelTextColor.call(r, e))
                        })), this.labelColors = s, this.labelPointStyles = l, this.labelTextColors = c, this.dataPoints = u, u
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        var i, n = this.options.setContext(this.getContext()),
                            r = this._active,
                            a = [];
                        if (r.length) {
                            var o = Qe[n.position].call(this, r, this._eventPosition);
                            a = this._createItems(n), this.title = this.getTitle(a, n), this.beforeBody = this.getBeforeBody(a, n), this.body = this.getBody(a, n), this.afterBody = this.getAfterBody(a, n), this.footer = this.getFooter(a, n);
                            var s = this._size = ni(this, n),
                                l = Object.assign({}, o, s),
                                c = ai(this.chart, n, l),
                                u = oi(n, l, c, this.chart);
                            this.xAlign = c.xAlign, this.yAlign = c.yAlign, i = {
                                opacity: 1,
                                x: u.x,
                                y: u.y,
                                width: s.width,
                                height: s.height,
                                caretX: o.x,
                                caretY: o.y
                            }
                        } else 0 !== this.opacity && (i = {
                            opacity: 0
                        });
                        this._tooltipItems = a, this.$context = void 0, i && this._resolveAnimations().update(this, i), t && n.external && n.external.call(this, {
                            chart: this.chart,
                            tooltip: this,
                            replay: e
                        })
                    }
                }, {
                    key: "drawCaret",
                    value: function(t, e, i, n) {
                        var r = this.getCaretPosition(t, i, n);
                        e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3)
                    }
                }, {
                    key: "getCaretPosition",
                    value: function(t, e, i) {
                        var r, a, o, s, l, c, u = this.xAlign,
                            h = this.yAlign,
                            f = i.caretSize,
                            d = i.cornerRadius,
                            v = Object(n.zb)(d),
                            p = v.topLeft,
                            g = v.topRight,
                            b = v.bottomLeft,
                            y = v.bottomRight,
                            m = t.x,
                            x = t.y,
                            _ = e.width,
                            k = e.height;
                        return "center" === h ? (l = x + k / 2, "left" === u ? (a = (r = m) - f, s = l + f, c = l - f) : (a = (r = m + _) + f, s = l - f, c = l + f), o = r) : (a = "left" === u ? m + Math.max(p, b) + f : "right" === u ? m + _ - Math.max(g, y) - f : this.caretX, "top" === h ? (l = (s = x) - f, r = a - f, o = a + f) : (l = (s = x + k) + f, r = a + f, o = a - f), c = s), {
                            x1: r,
                            x2: a,
                            x3: o,
                            y1: s,
                            y2: l,
                            y3: c
                        }
                    }
                }, {
                    key: "drawTitle",
                    value: function(t, e, i) {
                        var r, a, o, s = this.title,
                            l = s.length;
                        if (l) {
                            var c = Object(n.N)(i.rtl, this.x, this.width);
                            for (t.x = si(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", r = Object(n.p)(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string, o = 0; o < l; ++o) e.fillText(s[o], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, o + 1 === l && (t.y += i.titleMarginBottom - a)
                        }
                    }
                }, {
                    key: "_drawColorBox",
                    value: function(t, e, i, r, a) {
                        var o = this.labelColors[i],
                            s = this.labelPointStyles[i],
                            l = a.boxHeight,
                            c = a.boxWidth,
                            u = a.boxPadding,
                            h = Object(n.p)(a.bodyFont),
                            f = si(this, "left", a),
                            d = r.x(f),
                            v = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
                            p = e.y + v;
                        if (a.usePointStyle) {
                            var b = {
                                    radius: Math.min(c, l) / 2,
                                    pointStyle: s.pointStyle,
                                    rotation: s.rotation,
                                    borderWidth: 1
                                },
                                y = r.leftForLtr(d, c) + c / 2,
                                m = p + l / 2;
                            t.strokeStyle = a.multiKeyBackground, t.fillStyle = a.multiKeyBackground, Object(n.wb)(t, b, y, m), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, Object(n.wb)(t, b, y, m)
                        } else {
                            t.lineWidth = Object(n.Jb)(o.borderWidth) ? Math.max.apply(Math, g(Object.values(o.borderWidth))) : o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
                            var x = r.leftForLtr(d, c - u),
                                _ = r.leftForLtr(r.xPlus(d, 1), c - u - 2),
                                k = Object(n.zb)(o.borderRadius);
                            Object.values(k).some((function(t) {
                                return 0 !== t
                            })) ? (t.beginPath(), t.fillStyle = a.multiKeyBackground, Object(n.xb)(t, {
                                x: x,
                                y: p,
                                w: c,
                                h: l,
                                radius: k
                            }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), Object(n.xb)(t, {
                                x: _,
                                y: p + 1,
                                w: c - 2,
                                h: l - 2,
                                radius: k
                            }), t.fill()) : (t.fillStyle = a.multiKeyBackground, t.fillRect(x, p, c, l), t.strokeRect(x, p, c, l), t.fillStyle = o.backgroundColor, t.fillRect(_, p + 1, c - 2, l - 2))
                        }
                        t.fillStyle = this.labelTextColors[i]
                    }
                }, {
                    key: "drawBody",
                    value: function(t, e, i) {
                        var r, a, o, s, l, c, u, h = this.body,
                            f = i.bodySpacing,
                            d = i.bodyAlign,
                            v = i.displayColors,
                            p = i.boxHeight,
                            g = i.boxWidth,
                            b = i.boxPadding,
                            y = Object(n.p)(i.bodyFont),
                            m = y.lineHeight,
                            x = 0,
                            _ = Object(n.N)(i.rtl, this.x, this.width),
                            k = function(i) {
                                e.fillText(i, _.x(t.x + x), t.y + m / 2), t.y += m + f
                            },
                            O = _.textAlign(d);
                        for (e.textAlign = d, e.textBaseline = "middle", e.font = y.string, t.x = si(this, O, i), e.fillStyle = i.bodyColor, Object(n.r)(this.beforeBody, k), x = v && "right" !== O ? "center" === d ? g / 2 + b : g + 2 + b : 0, s = 0, c = h.length; s < c; ++s) {
                            for (r = h[s], a = this.labelTextColors[s], e.fillStyle = a, Object(n.r)(r.before, k), o = r.lines, v && o.length && (this._drawColorBox(e, t, s, _, i), m = Math.max(y.lineHeight, p)), l = 0, u = o.length; l < u; ++l) k(o[l]), m = y.lineHeight;
                            Object(n.r)(r.after, k)
                        }
                        x = 0, m = y.lineHeight, Object(n.r)(this.afterBody, k), t.y -= f
                    }
                }, {
                    key: "drawFooter",
                    value: function(t, e, i) {
                        var r, a, o = this.footer,
                            s = o.length;
                        if (s) {
                            var l = Object(n.N)(i.rtl, this.x, this.width);
                            for (t.x = si(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", r = Object(n.p)(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, a = 0; a < s; ++a) e.fillText(o[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing
                        }
                    }
                }, {
                    key: "drawBackground",
                    value: function(t, e, i, r) {
                        var a = this.xAlign,
                            o = this.yAlign,
                            s = t.x,
                            l = t.y,
                            c = i.width,
                            u = i.height,
                            h = Object(n.zb)(r.cornerRadius),
                            f = h.topLeft,
                            d = h.topRight,
                            v = h.bottomLeft,
                            p = h.bottomRight;
                        e.fillStyle = r.backgroundColor, e.strokeStyle = r.borderColor, e.lineWidth = r.borderWidth, e.beginPath(), e.moveTo(s + f, l), "top" === o && this.drawCaret(t, e, i, r), e.lineTo(s + c - d, l), e.quadraticCurveTo(s + c, l, s + c, l + d), "center" === o && "right" === a && this.drawCaret(t, e, i, r), e.lineTo(s + c, l + u - p), e.quadraticCurveTo(s + c, l + u, s + c - p, l + u), "bottom" === o && this.drawCaret(t, e, i, r), e.lineTo(s + v, l + u), e.quadraticCurveTo(s, l + u, s, l + u - v), "center" === o && "left" === a && this.drawCaret(t, e, i, r), e.lineTo(s, l + f), e.quadraticCurveTo(s, l, s + f, l), e.closePath(), e.fill(), r.borderWidth > 0 && e.stroke()
                    }
                }, {
                    key: "_updateAnimationTarget",
                    value: function(t) {
                        var e = this.chart,
                            i = this.$animations,
                            n = i && i.x,
                            r = i && i.y;
                        if (n || r) {
                            var a = Qe[t.position].call(this, this._active, this._eventPosition);
                            if (!a) return;
                            var o = this._size = ni(this, t),
                                s = Object.assign({}, a, this._size),
                                l = ai(e, t, s),
                                c = oi(t, s, l, e);
                            n._to === c.x && r._to === c.y || (this.xAlign = l.xAlign, this.yAlign = l.yAlign, this.width = o.width, this.height = o.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, c))
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
                            var r = {
                                    width: this.width,
                                    height: this.height
                                },
                                a = {
                                    x: this.x,
                                    y: this.y
                                };
                            i = Math.abs(i) < .001 ? 0 : i;
                            var o = Object(n.l)(e.padding),
                                s = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                            e.enabled && s && (t.save(), t.globalAlpha = i, this.drawBackground(a, t, r, e), Object(n.O)(t, e.textDirection), a.y += o.top, this.drawTitle(a, t, e), this.drawBody(a, t, e), this.drawFooter(a, t, e), Object(n.Q)(t, e.textDirection), t.restore())
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
                            r = this._active,
                            a = t.map((function(t) {
                                var e = t.datasetIndex,
                                    n = t.index,
                                    r = i.chart.getDatasetMeta(e);
                                if (!r) throw new Error("Cannot find a dataset at index " + e);
                                return {
                                    datasetIndex: e,
                                    element: r.data[n],
                                    index: n
                                }
                            })),
                            o = !Object(n.kb)(r, a),
                            s = this._positionChanged(a, e);
                        (o || s) && (this._active = a, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
                    }
                }, {
                    key: "handleEvent",
                    value: function(t, e) {
                        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (e && this._ignoreReplayEvents) return !1;
                        this._ignoreReplayEvents = !1;
                        var r = this.options,
                            a = this._active || [],
                            o = this._getActiveElements(t, a, e, i),
                            s = this._positionChanged(o, t),
                            l = e || !Object(n.kb)(o, a) || s;
                        return l && (this._active = o, (r.enabled || r.external) && (this._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, this.update(!0, e))), l
                    }
                }, {
                    key: "_getActiveElements",
                    value: function(t, e, i, n) {
                        var r = this.options;
                        if ("mouseout" === t.type) return [];
                        if (!n) return e;
                        var a = this.chart.getElementsAtEventForMode(t, r.mode, r, i);
                        return r.reverse && a.reverse(), a
                    }
                }, {
                    key: "_positionChanged",
                    value: function(t, e) {
                        var i = this.caretX,
                            n = this.caretY,
                            r = this.options,
                            a = Qe[r.position].call(this, t, e);
                        return !1 !== a && (i !== a.x || n !== a.y)
                    }
                }]), i
            }(tt);
            ui.positioners = Qe;
            n.S, n.S, n.S, n.S, n.S, n.S, n.S, n.S, n.S;

            function hi(t, e, i, n) {
                var r = t.indexOf(e);
                return -1 === r ? function(t, e, i, n) {
                    return "string" == typeof e ? (i = t.push(e) - 1, n.unshift({
                        index: i,
                        label: e
                    })) : isNaN(e) && (i = null), i
                }(t, e, i, n) : r !== t.lastIndexOf(e) ? i : r
            }
            var fi = function(t) {
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t))._startValue = void 0, n._valueRange = 0, n._addedLabels = [], n
                }
                return _(i, [{
                    key: "init",
                    value: function(t) {
                        var e = this._addedLabels;
                        if (e.length) {
                            var n, a = this.getLabels(),
                                o = v(e);
                            try {
                                for (o.s(); !(n = o.n()).done;) {
                                    var s = n.value,
                                        l = s.index,
                                        c = s.label;
                                    a[l] === c && a.splice(l, 1)
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            this._addedLabels = []
                        }
                        r(h(i.prototype), "init", this).call(this, t)
                    }
                }, {
                    key: "parse",
                    value: function(t, e) {
                        if (Object(n.Lb)(t)) return null;
                        var i = this.getLabels();
                        return function(t, e) {
                            return null === t ? null : Object(n.f)(Math.round(t), 0, e)
                        }(e = isFinite(e) && i[e] === t ? e : hi(i, t, Object(n.Wb)(e, t), this._addedLabels), i.length - 1)
                    }
                }, {
                    key: "determineDataLimits",
                    value: function() {
                        var t = this.getUserBounds(),
                            e = t.minDefined,
                            i = t.maxDefined,
                            n = this.getMinMax(!0),
                            r = n.min,
                            a = n.max;
                        "ticks" === this.options.bounds && (e || (r = 0), i || (a = this.getLabels().length - 1)), this.min = r, this.max = a
                    }
                }, {
                    key: "buildTicks",
                    value: function() {
                        var t = this.min,
                            e = this.max,
                            i = this.options.offset,
                            n = [],
                            r = this.getLabels();
                        r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1), this._valueRange = Math.max(r.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
                        for (var a = t; a <= e; a++) n.push({
                            value: a
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
                        r(h(i.prototype), "configure", this).call(this), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
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
            }(ht);

            function di(t, e, i) {
                var r = i.horizontal,
                    a = i.minRotation,
                    o = Object(n.Ub)(a),
                    s = (r ? Math.sin(o) : Math.cos(o)) || .001,
                    l = .75 * e * ("" + t).length;
                return Math.min(e / s, l)
            }
            fi.id = "category", fi.defaults = {
                ticks: {
                    callback: fi.prototype.getLabelForValue
                }
            };
            var vi = function(t) {
                    o(i, t);
                    var e = l(i);

                    function i(t) {
                        var n;
                        return m(this, i), (n = e.call(this, t)).start = void 0, n.end = void 0, n._startValue = void 0, n._endValue = void 0, n._valueRange = 0, n
                    }
                    return _(i, [{
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
                                r = e.maxDefined,
                                a = this.min,
                                o = this.max,
                                s = function(t) {
                                    return a = i ? a : t
                                },
                                l = function(t) {
                                    return o = r ? o : t
                                };
                            if (t) {
                                var c = Object(n.Tb)(a),
                                    u = Object(n.Tb)(o);
                                c < 0 && u < 0 ? l(0) : c > 0 && u > 0 && s(0)
                            }
                            if (a === o) {
                                var h = 1;
                                (o >= Number.MAX_SAFE_INTEGER || a <= Number.MIN_SAFE_INTEGER) && (h = Math.abs(.05 * o)), l(o + h), t || s(a - h)
                            }
                            this.min = a, this.max = o
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
                                r = function(t, e) {
                                    var i, r, a, o, s = [],
                                        l = t.bounds,
                                        c = t.step,
                                        u = t.min,
                                        h = t.max,
                                        f = t.precision,
                                        d = t.count,
                                        v = t.maxTicks,
                                        p = t.maxDigits,
                                        g = t.includeBounds,
                                        b = c || 1,
                                        y = v - 1,
                                        m = e.min,
                                        x = e.max,
                                        _ = !Object(n.Lb)(u),
                                        k = !Object(n.Lb)(h),
                                        O = !Object(n.Lb)(d),
                                        w = (x - m) / (p + 1),
                                        j = Object(n.V)((x - m) / y / b) * b;
                                    if (j < 1e-14 && !_ && !k) return [{
                                        value: m
                                    }, {
                                        value: x
                                    }];
                                    (o = Math.ceil(x / j) - Math.floor(m / j)) > y && (j = Object(n.V)(o * j / y / b) * b), Object(n.Lb)(f) || (i = Math.pow(10, f), j = Math.ceil(j * i) / i), "ticks" === l ? (r = Math.floor(m / j) * j, a = Math.ceil(x / j) * j) : (r = m, a = x), _ && k && c && Object(n.W)((h - u) / c, j / 1e3) ? (j = (h - u) / (o = Math.round(Math.min((h - u) / j, v))), r = u, a = h) : O ? j = ((a = k ? h : a) - (r = _ ? u : r)) / (o = d - 1) : (o = (a - r) / j, o = Object(n.X)(o, Math.round(o), j / 1e3) ? Math.round(o) : Math.ceil(o));
                                    var M = Math.max(Object(n.Y)(j), Object(n.Y)(r));
                                    i = Math.pow(10, Object(n.Lb)(f) ? M : f), r = Math.round(r * i) / i, a = Math.round(a * i) / i;
                                    var S = 0;
                                    for (_ && (g && r !== u ? (s.push({
                                            value: u
                                        }), r < u && S++, Object(n.X)(Math.round((r + S * j) * i) / i, u, di(u, w, t)) && S++) : r < u && S++); S < o; ++S) s.push({
                                        value: Math.round((r + S * j) * i) / i
                                    });
                                    return k && g && a !== h ? s.length && Object(n.X)(s[s.length - 1].value, h, di(h, w, t)) ? s[s.length - 1].value = h : s.push({
                                        value: h
                                    }) : k && a !== h || s.push({
                                        value: a
                                    }), s
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
                            return "ticks" === t.bounds && Object(n.U)(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r
                        }
                    }, {
                        key: "configure",
                        value: function() {
                            var t = this.ticks,
                                e = this.min,
                                n = this.max;
                            if (r(h(i.prototype), "configure", this).call(this), this.options.offset && t.length) {
                                var a = (n - e) / Math.max(t.length - 1, 1) / 2;
                                e -= a, n += a
                            }
                            this._startValue = e, this._endValue = n, this._valueRange = n - e
                        }
                    }, {
                        key: "getLabelForValue",
                        value: function(t) {
                            return Object(n.Pb)(t, this.chart.options.locale, this.options.ticks.format)
                        }
                    }]), i
                }(ht),
                pi = function(t) {
                    o(i, t);
                    var e = l(i);

                    function i() {
                        return m(this, i), e.apply(this, arguments)
                    }
                    return _(i, [{
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
                                r = (t ? Math.sin(i) : Math.cos(i)) || .001,
                                a = this._resolveTickFontOptions(0);
                            return Math.ceil(e / Math.min(40, a.lineHeight / r))
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
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t)).start = void 0, n.end = void 0, n._startValue = void 0, n._valueRange = 0, n
                }
                return _(i, [{
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
                            r = this.min,
                            a = this.max,
                            o = function(t) {
                                return r = e ? r : t
                            },
                            s = function(t) {
                                return a = i ? a : t
                            },
                            l = function(t, e) {
                                return Math.pow(10, Math.floor(Object(n.ac)(t)) + e)
                            };
                        r === a && (r <= 0 ? (o(1), s(10)) : (o(l(r, -1)), s(l(a, 1)))), r <= 0 && o(l(a, -1)), a <= 0 && s(l(r, 1)), this._zero && this.min !== this._suggestedMin && r === l(this.min, 0) && o(l(r, -1)), this.min = r, this.max = a
                    }
                }, {
                    key: "buildTicks",
                    value: function() {
                        var t = this.options,
                            e = function(t, e) {
                                var i = Math.floor(Object(n.ac)(e.max)),
                                    r = Math.ceil(e.max / Math.pow(10, i)),
                                    a = [],
                                    o = Object(n.c)(t.min, Math.pow(10, Math.floor(Object(n.ac)(e.min)))),
                                    s = Math.floor(Object(n.ac)(o)),
                                    l = Math.floor(o / Math.pow(10, s)),
                                    c = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
                                do {
                                    a.push({
                                        value: o,
                                        major: gi(o)
                                    }), 10 === ++l && (l = 1, c = ++s >= 0 ? 1 : c), o = Math.round(l * Math.pow(10, s) * c) / c
                                } while (s < i || s === i && l < r);
                                var u = Object(n.c)(t.max, o);
                                return a.push({
                                    value: u,
                                    major: gi(o)
                                }), a
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
                        r(h(i.prototype), "configure", this).call(this), this._startValue = Object(n.ac)(t), this._valueRange = Object(n.ac)(this.max) - Object(n.ac)(t)
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
            }(ht);

            function yi(t) {
                var e = t.ticks;
                if (e.display && t.display) {
                    var i = Object(n.l)(e.backdropPadding);
                    return Object(n.Wb)(e.font && e.font.size, n.Eb.font.size) + i.height
                }
                return 0
            }

            function mi(t, e, i, n, r) {
                return t === n || t === r ? {
                    start: e - i / 2,
                    end: e + i / 2
                } : t < n || t > r ? {
                    start: e - i,
                    end: e
                } : {
                    start: e,
                    end: e + i
                }
            }

            function xi(t) {
                for (var e, i, r, a = {
                        l: t.left + t._padding.left,
                        r: t.right - t._padding.right,
                        t: t.top + t._padding.top,
                        b: t.bottom - t._padding.bottom
                    }, o = Object.assign({}, a), s = [], l = [], c = t._pointLabels.length, u = t.options.pointLabels, h = u.centerPointLabels ? n.q / c : 0, f = 0; f < c; f++) {
                    var d = u.setContext(t.getPointLabelContext(f));
                    l[f] = d.padding;
                    var v = t.getPointPosition(f, t.drawingArea + l[f], h),
                        p = Object(n.p)(d.font),
                        g = (e = t.ctx, i = p, r = t._pointLabels[f], r = Object(n.Cb)(r) ? r : [r], {
                            w: Object(n.Z)(e, i.string, r),
                            h: r.length * i.lineHeight
                        });
                    s[f] = g;
                    var b = Object(n.Bb)(t.getIndexAngle(f) + h),
                        y = Math.round(Object(n.g)(b));
                    _i(o, a, b, mi(y, v.x, g.w, 0, 180), mi(y, v.y, g.h, 90, 270))
                }
                t.setCenterPoint(a.l - o.l, o.r - a.r, a.t - o.t, o.b - a.b), t._pointLabelItems = function(t, e, i) {
                    for (var r = [], a = t._pointLabels.length, o = t.options, s = yi(o) / 2, l = t.drawingArea, c = o.pointLabels.centerPointLabels ? n.q / a : 0, u = 0; u < a; u++) {
                        var h = t.getPointPosition(u, l + s + i[u], c),
                            f = Math.round(Object(n.g)(Object(n.Bb)(h.angle + n.i))),
                            d = e[u],
                            v = wi(h.y, d.h, f),
                            p = ki(f),
                            g = Oi(h.x, d.w, p);
                        r.push({
                            x: h.x,
                            y: v,
                            textAlign: p,
                            left: g,
                            top: v,
                            right: g + d.w,
                            bottom: v + d.h
                        })
                    }
                    return r
                }(t, s, l)
            }

            function _i(t, e, i, n, r) {
                var a = Math.abs(Math.sin(i)),
                    o = Math.abs(Math.cos(i)),
                    s = 0,
                    l = 0;
                n.start < e.l ? (s = (e.l - n.start) / a, t.l = Math.min(t.l, e.l - s)) : n.end > e.r && (s = (n.end - e.r) / a, t.r = Math.max(t.r, e.r + s)), r.start < e.t ? (l = (e.t - r.start) / o, t.t = Math.min(t.t, e.t - l)) : r.end > e.b && (l = (r.end - e.b) / o, t.b = Math.max(t.b, e.b + l))
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

            function ji(t, e, i, r) {
                var a = t.ctx;
                if (i) a.arc(t.xCenter, t.yCenter, e, 0, n.u);
                else {
                    var o = t.getPointPosition(0, e);
                    a.moveTo(o.x, o.y);
                    for (var s = 1; s < r; s++) o = t.getPointPosition(s, e), a.lineTo(o.x, o.y)
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
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t)).xCenter = void 0, n.yCenter = void 0, n.drawingArea = void 0, n._pointLabels = [], n._pointLabelItems = [], n
                }
                return _(i, [{
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
                            var r = Object(n.d)(e.options.pointLabels.callback, [t, i], e);
                            return r || 0 === r ? r : ""
                        })).filter((function(t, i) {
                            return e.chart.getDataVisibility(i)
                        }))
                    }
                }, {
                    key: "fit",
                    value: function() {
                        var t = this.options;
                        t.display && t.pointLabels.display ? xi(this) : this.setCenterPoint(0, 0, 0, 0)
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
                            r = this.getIndexAngle(t) - n.i + i;
                        return {
                            x: Math.cos(r) * e + this.xCenter,
                            y: Math.sin(r) * e + this.yCenter,
                            angle: r
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
                        var t, e, i, r = this,
                            a = this.ctx,
                            o = this.options,
                            s = o.angleLines,
                            l = o.grid,
                            c = this._pointLabels.length;
                        if (o.pointLabels.display && function(t, e) {
                                for (var i = t.ctx, r = t.options.pointLabels, a = e - 1; a >= 0; a--) {
                                    var o = r.setContext(t.getPointLabelContext(a)),
                                        s = Object(n.p)(o.font),
                                        l = t._pointLabelItems[a],
                                        c = l.x,
                                        u = l.y,
                                        h = l.textAlign,
                                        f = l.left,
                                        d = l.top,
                                        v = l.right,
                                        p = l.bottom,
                                        g = o.backdropColor;
                                    if (!Object(n.Lb)(g)) {
                                        var b = Object(n.zb)(o.borderRadius),
                                            y = Object(n.l)(o.backdropPadding);
                                        i.fillStyle = g;
                                        var m = f - y.left,
                                            x = d - y.top,
                                            _ = v - f + y.width,
                                            k = p - d + y.height;
                                        Object.values(b).some((function(t) {
                                            return 0 !== t
                                        })) ? (i.beginPath(), Object(n.xb)(i, {
                                            x: m,
                                            y: x,
                                            w: _,
                                            h: k,
                                            radius: b
                                        }), i.fill()) : i.fillRect(m, x, _, k)
                                    }
                                    Object(n.n)(i, t._pointLabels[a], c, u + s.lineHeight / 2, s, {
                                        color: o.color,
                                        textAlign: h,
                                        textBaseline: "middle"
                                    })
                                }
                            }(this, c), l.display && this.ticks.forEach((function(t, i) {
                                if (0 !== i) {
                                    e = r.getDistanceFromCenterForValue(t.value);
                                    var n = l.setContext(r.getContext(i - 1));
                                    ! function(t, e, i, n) {
                                        var r = t.ctx,
                                            a = e.circular,
                                            o = e.color,
                                            s = e.lineWidth;
                                        !a && !n || !o || !s || i < 0 || (r.save(), r.strokeStyle = o, r.lineWidth = s, r.setLineDash(e.borderDash), r.lineDashOffset = e.borderDashOffset, r.beginPath(), ji(t, i, a, n), r.closePath(), r.stroke(), r.restore())
                                    }(r, n, e, c)
                                }
                            })), s.display) {
                            for (a.save(), t = c - 1; t >= 0; t--) {
                                var u = s.setContext(this.getPointLabelContext(t)),
                                    h = u.color,
                                    f = u.lineWidth;
                                f && h && (a.lineWidth = f, a.strokeStyle = h, a.setLineDash(u.borderDash), a.lineDashOffset = u.borderDashOffset, e = this.getDistanceFromCenterForValue(o.ticks.reverse ? this.min : this.max), i = this.getPointPosition(t, e), a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(i.x, i.y), a.stroke())
                            }
                            a.restore()
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
                            r = i.ticks;
                        if (r.display) {
                            var a, o, s = this.getIndexAngle(0);
                            e.save(), e.translate(this.xCenter, this.yCenter), e.rotate(s), e.textAlign = "center", e.textBaseline = "middle", this.ticks.forEach((function(s, l) {
                                if (0 !== l || i.reverse) {
                                    var c = r.setContext(t.getContext(l)),
                                        u = Object(n.p)(c.font);
                                    if (a = t.getDistanceFromCenterForValue(t.ticks[l].value), c.showLabelBackdrop) {
                                        e.font = u.string, o = e.measureText(s.label).width, e.fillStyle = c.backdropColor;
                                        var h = Object(n.l)(c.backdropPadding);
                                        e.fillRect(-o / 2 - h.left, -a - u.size / 2 - h.top, o + h.width, u.size + h.height)
                                    }
                                    Object(n.n)(e, s.label, 0, -a, u, {
                                        color: c.color
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
            var Si = {
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
                Ei = Object.keys(Si);

            function Pi(t, e) {
                return t - e
            }

            function Li(t, e) {
                if (Object(n.Lb)(e)) return null;
                var i = t._adapter,
                    r = t._parseOpts,
                    a = r.parser,
                    o = r.round,
                    s = r.isoWeekday,
                    l = e;
                return "function" == typeof a && (l = a(l)), Object(n.Hb)(l) || (l = "string" == typeof a ? i.parse(l, a) : i.parse(l)), null === l ? null : (o && (l = "week" !== o || !Object(n.Yb)(s) && !0 !== s ? i.startOf(l, o) : i.startOf(l, "isoWeek", s)), +l)
            }

            function Di(t, e, i, n) {
                for (var r = Ei.length, a = Ei.indexOf(t); a < r - 1; ++a) {
                    var o = Si[Ei[a]],
                        s = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
                    if (o.common && Math.ceil((i - e) / (s * o.size)) <= n) return Ei[a]
                }
                return Ei[r - 1]
            }

            function Ci(t, e, i) {
                if (i) {
                    if (i.length) {
                        var r = Object(n.bb)(i, e),
                            a = r.lo,
                            o = r.hi;
                        t[i[a] >= e ? i[a] : i[o]] = !0
                    }
                } else t[e] = !0
            }

            function Ai(t, e, i) {
                var n, r, a = [],
                    o = {},
                    s = e.length;
                for (n = 0; n < s; ++n) o[r = e[n]] = n, a.push({
                    value: r,
                    major: !1
                });
                return 0 !== s && i ? function(t, e, i, n) {
                    var r, a, o = t._adapter,
                        s = +o.startOf(e[0].value, n),
                        l = e[e.length - 1].value;
                    for (r = s; r <= l; r = +o.add(r, 1, n))(a = i[r]) >= 0 && (e[a].major = !0);
                    return e
                }(t, a, o, i) : a
            }
            var Ti = function(t) {
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t))._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }, n._unit = "day", n._majorUnit = void 0, n._offsets = {}, n._normalized = !1, n._parseOpts = void 0, n
                }
                return _(i, [{
                    key: "init",
                    value: function(t, e) {
                        var a = t.time || (t.time = {}),
                            o = this._adapter = new bt._date(t.adapters.date);
                        o.init(e), Object(n.eb)(a.displayFormats, o.formats()), this._parseOpts = {
                            parser: a.parser,
                            round: a.round,
                            isoWeekday: a.isoWeekday
                        }, r(h(i.prototype), "init", this).call(this, t), this._normalized = e.normalized
                    }
                }, {
                    key: "parse",
                    value: function(t, e) {
                        return void 0 === t ? null : Li(this, t)
                    }
                }, {
                    key: "beforeLayout",
                    value: function() {
                        r(h(i.prototype), "beforeLayout", this).call(this), this._cache = {
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
                            r = this.getUserBounds(),
                            a = r.min,
                            o = r.max,
                            s = r.minDefined,
                            l = r.maxDefined;

                        function c(t) {
                            s || isNaN(t.min) || (a = Math.min(a, t.min)), l || isNaN(t.max) || (o = Math.max(o, t.max))
                        }
                        s && l || (c(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || c(this.getMinMax(!1))), a = Object(n.Hb)(a) && !isNaN(a) ? a : +e.startOf(Date.now(), i), o = Object(n.Hb)(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(a, o - 1), this.max = Math.max(a + 1, o)
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
                            r = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                        "ticks" === t.bounds && r.length && (this.min = this._userMin || r[0], this.max = this._userMax || r[r.length - 1]);
                        var a = this.min,
                            o = this.max,
                            s = Object(n.ab)(r, a, o);
                        return this._unit = e.unit || (i.autoSkip ? Di(e.minUnit, this.min, this.max, this._getLabelCapacity(a)) : function(t, e, i, n, r) {
                            for (var a = Ei.length - 1; a >= Ei.indexOf(i); a--) {
                                var o = Ei[a];
                                if (Si[o].common && t._adapter.diff(r, n, o) >= e - 1) return o
                            }
                            return Ei[i ? Ei.indexOf(i) : 0]
                        }(this, s.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                            for (var e = Ei.indexOf(t) + 1, i = Ei.length; e < i; ++e)
                                if (Si[Ei[e]].common) return Ei[e]
                        }(this._unit) : void 0, this.initOffsets(r), t.reverse && s.reverse(), Ai(this, s, this._majorUnit)
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
                        var e, i, r = 0,
                            a = 0;
                        this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), r = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), a = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                        var o = t.length < 3 ? .5 : .25;
                        r = Object(n.f)(r, 0, o), a = Object(n.f)(a, 0, o), this._offsets = {
                            start: r,
                            end: a,
                            factor: 1 / (r + 1 + a)
                        }
                    }
                }, {
                    key: "_generate",
                    value: function() {
                        var t, e, i = this._adapter,
                            r = this.min,
                            a = this.max,
                            o = this.options,
                            s = o.time,
                            l = s.unit || Di(s.minUnit, r, a, this._getLabelCapacity(r)),
                            c = Object(n.Wb)(s.stepSize, 1),
                            u = "week" === l && s.isoWeekday,
                            h = Object(n.Yb)(u) || !0 === u,
                            f = {},
                            d = r;
                        if (h && (d = +i.startOf(d, "isoWeek", u)), d = +i.startOf(d, h ? "day" : l), i.diff(a, r, l) > 1e5 * c) throw new Error(r + " and " + a + " are too far apart with stepSize of " + c + " " + l);
                        var v = "data" === o.ticks.source && this.getDataTimestamps();
                        for (t = d, e = 0; t < a; t = +i.add(t, c, l), e++) Ci(f, t, v);
                        return t !== a && "ticks" !== o.bounds && 1 !== e || Ci(f, t, v), Object.keys(f).sort((function(t, e) {
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
                    value: function(t, e, i, r) {
                        var a = this.options,
                            o = a.time.displayFormats,
                            s = this._unit,
                            l = this._majorUnit,
                            c = s && o[s],
                            u = l && o[l],
                            h = i[e],
                            f = l && u && h && h.major,
                            d = this._adapter.format(t, r || (f ? u : c)),
                            v = a.ticks.callback;
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
                            r = Object(n.Ub)(this.isHorizontal() ? e.maxRotation : e.minRotation),
                            a = Math.cos(r),
                            o = Math.sin(r),
                            s = this._resolveTickFontOptions(0).size;
                        return {
                            w: i * a + s * o,
                            h: i * o + s * a
                        }
                    }
                }, {
                    key: "_getLabelCapacity",
                    value: function(t) {
                        var e = this.options.time,
                            i = e.displayFormats,
                            n = i[e.unit] || i.millisecond,
                            r = this._tickFormatFunction(t, 0, Ai(this, [t], this._majorUnit), n),
                            a = this._getLabelSize(r),
                            o = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
                        return o > 0 ? o : 1
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
                        for (t = 0, e = n.length; t < e; ++t) i.push(Li(this, n[t]));
                        return this._cache.labels = this._normalized ? i : this.normalize(i)
                    }
                }, {
                    key: "normalize",
                    value: function(t) {
                        return Object(n.B)(t.sort(Pi))
                    }
                }]), i
            }(ht);

            function Ri(t, e, i) {
                var r, a, o, s, l = 0,
                    c = t.length - 1;
                if (i) {
                    if (e >= t[l].pos && e <= t[c].pos) {
                        var u = Object(n.A)(t, "pos", e);
                        l = u.lo, c = u.hi
                    }
                    var h = t[l];
                    r = h.pos, o = h.time;
                    var f = t[c];
                    a = f.pos, s = f.time
                } else {
                    if (e >= t[l].time && e <= t[c].time) {
                        var d = Object(n.A)(t, "time", e);
                        l = d.lo, c = d.hi
                    }
                    var v = t[l];
                    r = v.time, o = v.pos;
                    var p = t[c];
                    a = p.time, s = p.pos
                }
                var g = a - r;
                return g ? o + (s - o) * (e - r) / g : o
            }
            Ti.id = "time", Ti.defaults = {
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
                o(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return m(this, i), (n = e.call(this, t))._table = [], n._minPos = void 0, n._tableRange = void 0, n
                }
                return _(i, [{
                    key: "initOffsets",
                    value: function() {
                        var t = this._getTimestampsForTable(),
                            e = this._table = this.buildLookupTable(t);
                        this._minPos = Ri(e, this.min), this._tableRange = Ri(e, this.max) - this._minPos, r(h(i.prototype), "initOffsets", this).call(this, t)
                    }
                }, {
                    key: "buildLookupTable",
                    value: function(t) {
                        var e, i, n, r, a, o = this.min,
                            s = this.max,
                            l = [],
                            c = [];
                        for (e = 0, i = t.length; e < i; ++e)(r = t[e]) >= o && r <= s && l.push(r);
                        if (l.length < 2) return [{
                            time: o,
                            pos: 0
                        }, {
                            time: s,
                            pos: 1
                        }];
                        for (e = 0, i = l.length; e < i; ++e) a = l[e + 1], n = l[e - 1], r = l[e], Math.round((a + n) / 2) !== r && c.push({
                            time: r,
                            pos: e / (i - 1)
                        });
                        return c
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
                        return (Ri(this._table, t) - this._minPos) / this._tableRange
                    }
                }, {
                    key: "getValueForPixel",
                    value: function(t) {
                        var e = this._offsets,
                            i = this.getDecimalForPixel(t) / e.factor - e.end;
                        return Ri(this._table, i * this._tableRange + this._minPos, !0)
                    }
                }]), i
            }(Ti);
            Ii.id = "timeseries", Ii.defaults = Ti.defaults
        },
        "5oMp": function(t, e, i) {
            "use strict";
            t.exports = function(t, e) {
                return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
            }
        },
        "7gN7": function(t, e, i) {
            (e = t.exports = i("JPst")(!1)).push([t.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:400,700|Titan+One|Creepster|Satisfy|Eczar:700);", ""]), e.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap);", ""]), e.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Macondo&display=swap);", ""]), e.push([t.i, "body{font-family:Nunito,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#3a3a3a}.global__grecaptcha-badge___3r6Zy-camelCase{opacity:0}.global__vis-network___1OD6E-camelCase{outline:none}::-moz-selection{background-color:rgba(10,182,194,.31373)}::selection{background-color:rgba(10,182,194,.31373)}", ""]), e.locals = {
                "grecaptcha-badge": "global__grecaptcha-badge___3r6Zy-camelCase",
                "vis-network": "global__vis-network___1OD6E-camelCase"
            }
        },
        "9rSQ": function(t, e, i) {
            "use strict";
            var n = i("xTJ+");

            function r() {
                this.handlers = []
            }
            r.prototype.use = function(t, e, i) {
                return this.handlers.push({
                    fulfilled: t,
                    rejected: e,
                    synchronous: !!i && i.synchronous,
                    runWhen: i ? i.runWhen : null
                }), this.handlers.length - 1
            }, r.prototype.eject = function(t) {
                this.handlers[t] && (this.handlers[t] = null)
            }, r.prototype.forEach = function(t) {
                n.forEach(this.handlers, (function(e) {
                    null !== e && t(e)
                }))
            }, t.exports = r
        },
        CgaS: function(t, e, i) {
            "use strict";
            var n = i("xTJ+"),
                r = i("MLWZ"),
                a = i("9rSQ"),
                o = i("UnBK"),
                s = i("SntB"),
                l = i("hIuj"),
                c = l.validators;

            function u(t) {
                this.defaults = t, this.interceptors = {
                    request: new a,
                    response: new a
                }
            }
            u.prototype.request = function(t, e) {
                "string" == typeof t ? (e = e || {}).url = t : e = t || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var i = e.transitional;
                void 0 !== i && l.assertOptions(i, {
                    silentJSONParsing: c.transitional(c.boolean),
                    forcedJSONParsing: c.transitional(c.boolean),
                    clarifyTimeoutError: c.transitional(c.boolean)
                }, !1);
                var n = [],
                    r = !0;
                this.interceptors.request.forEach((function(t) {
                    "function" == typeof t.runWhen && !1 === t.runWhen(e) || (r = r && t.synchronous, n.unshift(t.fulfilled, t.rejected))
                }));
                var a, u = [];
                if (this.interceptors.response.forEach((function(t) {
                        u.push(t.fulfilled, t.rejected)
                    })), !r) {
                    var h = [o, void 0];
                    for (Array.prototype.unshift.apply(h, n), h = h.concat(u), a = Promise.resolve(e); h.length;) a = a.then(h.shift(), h.shift());
                    return a
                }
                for (var f = e; n.length;) {
                    var d = n.shift(),
                        v = n.shift();
                    try {
                        f = d(f)
                    } catch (t) {
                        v(t);
                        break
                    }
                }
                try {
                    a = o(f)
                } catch (t) {
                    return Promise.reject(t)
                }
                for (; u.length;) a = a.then(u.shift(), u.shift());
                return a
            }, u.prototype.getUri = function(t) {
                return t = s(this.defaults, t), r(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
            }, n.forEach(["delete", "get", "head", "options"], (function(t) {
                u.prototype[t] = function(e, i) {
                    return this.request(s(i || {}, {
                        method: t,
                        url: e,
                        data: (i || {}).data
                    }))
                }
            })), n.forEach(["post", "put", "patch"], (function(t) {
                u.prototype[t] = function(e, i, n) {
                    return this.request(s(n || {}, {
                        method: t,
                        url: e,
                        data: i
                    }))
                }
            })), t.exports = u
        },
        DfZB: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }
        },
        FKJl: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return m
            })), i.d(e, "b", (function() {
                return u
            }));
            var n = i("q1tI"),
                r = i.n(n),
                a = i("y++v");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                s = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    i = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, i) {
                        t[e] = i.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    l = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function u(t, e, i) {
                    return Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, i) {
                        return t[e] = i
                    }
                }

                function h(t, e, i, r) {
                    var a = e && e.prototype instanceof v ? e : v,
                        o = Object.create(a.prototype),
                        s = new S(r || []);
                    return n(o, "_invoke", {
                        value: O(t, i, s)
                    }), o
                }

                function f(t, e, i) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, i)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = h;
                var d = {};

                function v() {}

                function p() {}

                function g() {}
                var b = {};
                u(b, a, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(E([])));
                m && m !== e && i.call(m, a) && (b = m);
                var x = g.prototype = v.prototype = Object.create(b);

                function _(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function k(t, e) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function s() {
                                return new e((function(r, s) {
                                    ! function n(r, a, s, l) {
                                        var c = f(t[r], t, a);
                                        if ("throw" !== c.type) {
                                            var u = c.arg,
                                                h = u.value;
                                            return h && "object" == o(h) && i.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                                n("next", t, s, l)
                                            }), (function(t) {
                                                n("throw", t, s, l)
                                            })) : e.resolve(h).then((function(t) {
                                                u.value = t, s(u)
                                            }), (function(t) {
                                                return n("throw", t, s, l)
                                            }))
                                        }
                                        l(c.arg)
                                    }(n, a, r, s)
                                }))
                            }
                            return r = r ? r.then(s, s) : s()
                        }
                    })
                }

                function O(t, e, i) {
                    var n = "suspendedStart";
                    return function(r, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw a;
                            return P()
                        }
                        for (i.method = r, i.arg = a;;) {
                            var o = i.delegate;
                            if (o) {
                                var s = w(o, i);
                                if (s) {
                                    if (s === d) continue;
                                    return s
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if ("suspendedStart" === n) throw n = "completed", i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = "executing";
                            var l = f(t, e, i);
                            if ("normal" === l.type) {
                                if (n = i.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: i.done
                                }
                            }
                            "throw" === l.type && (n = "completed", i.method = "throw", i.arg = l.arg)
                        }
                    }
                }

                function w(t, e) {
                    var i = t.iterator[e.method];
                    if (void 0 === i) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return d;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = f(i, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, d;
                    var r = n.arg;
                    return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function M(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function E(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                r = function e() {
                                    for (; ++n < t.length;)
                                        if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = g, n(x, "constructor", {
                    value: g,
                    configurable: !0
                }), n(g, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(x), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, _(k.prototype), u(k.prototype, l, (function() {
                    return this
                })), t.AsyncIterator = k, t.async = function(e, i, n, r, a) {
                    void 0 === a && (a = Promise);
                    var o = new k(h(e, i, n, r), a);
                    return t.isGeneratorFunction(i) ? o : o.next().then((function(t) {
                        return t.done ? t.value : o.next()
                    }))
                }, _(x), u(x, c, "Generator"), u(x, a, (function() {
                    return this
                })), u(x, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        i = [];
                    for (var n in e) i.push(n);
                    return i.reverse(),
                        function t() {
                            for (; i.length;) {
                                var n = i.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = E, S.prototype = {
                    constructor: S,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(M), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(i, n) {
                            return o.type = "throw", o.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r],
                                o = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = i.call(a, "catchLoc"),
                                    l = i.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), M(i), d
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.tryLoc === t) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    M(i)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, i) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, t
            }

            function l(t, e, i, n, r, a, o) {
                try {
                    var s = t[a](o),
                        l = s.value
                } catch (t) {
                    return void i(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, r)
            }

            function c(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(n, r) {
                        var a = t.apply(e, i);

                        function o(t) {
                            l(a, n, r, o, s, "next", t)
                        }

                        function s(t) {
                            l(a, n, r, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var u = function() {
                var t = c(s().mark((function t(e, i) {
                    var n, r, o, l, c, u, h;
                    return s().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = null, a.a.securityBaseURL && "" !== a.a.securityBaseURL) {
                                    t.next = 6;
                                    break
                                }
                                console.error(e, i), n = (new Date).getTime(), t.next = 22;
                                break;
                            case 6:
                                return t.prev = 6, r = JSON.parse(JSON.stringify(e, Object.getOwnPropertyNames(e))), o = "".concat(a.a.securityBaseURL, "/be"), l = {
                                    error: r,
                                    details: i,
                                    url: window.location.href
                                }, c = {
                                    method: "POST",
                                    mode: "cors",
                                    cache: "no-cache",
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(l)
                                }, t.next = 13, fetch(o, c);
                            case 13:
                                u = t.sent, (h = u.json()) && h.id && h.id.length > 0 && (n = h.id), t.next = 22;
                                break;
                            case 18:
                                t.prev = 18, t.t0 = t.catch(6), console.error(e, i), console.error(t.t0);
                            case 22:
                                return t.abrupt("return", n);
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [6, 18]
                    ])
                })));
                return function(e, i) {
                    return t.apply(this, arguments)
                }
            }();

            function h(t) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    i = e.hasOwnProperty,
                    n = Object.defineProperty || function(t, e, i) {
                        t[e] = i.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

                function l(t, e, i) {
                    return Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, i) {
                        return t[e] = i
                    }
                }

                function c(t, e, i, r) {
                    var a = e && e.prototype instanceof v ? e : v,
                        o = Object.create(a.prototype),
                        s = new S(r || []);
                    return n(o, "_invoke", {
                        value: O(t, i, s)
                    }), o
                }

                function u(t, e, i) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, i)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var d = {};

                function v() {}

                function p() {}

                function g() {}
                var b = {};
                l(b, a, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(E([])));
                m && m !== e && i.call(m, a) && (b = m);
                var x = g.prototype = v.prototype = Object.create(b);

                function _(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function k(t, e) {
                    var r;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function o() {
                                return new e((function(r, o) {
                                    ! function n(r, a, o, s) {
                                        var l = u(t[r], t, a);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == h(f) && i.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                                n("next", t, o, s)
                                            }), (function(t) {
                                                n("throw", t, o, s)
                                            })) : e.resolve(f).then((function(t) {
                                                c.value = t, o(c)
                                            }), (function(t) {
                                                return n("throw", t, o, s)
                                            }))
                                        }
                                        s(l.arg)
                                    }(n, a, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function O(t, e, i) {
                    var n = "suspendedStart";
                    return function(r, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === r) throw a;
                            return P()
                        }
                        for (i.method = r, i.arg = a;;) {
                            var o = i.delegate;
                            if (o) {
                                var s = w(o, i);
                                if (s) {
                                    if (s === d) continue;
                                    return s
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if ("suspendedStart" === n) throw n = "completed", i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = "executing";
                            var l = u(t, e, i);
                            if ("normal" === l.type) {
                                if (n = i.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: i.done
                                }
                            }
                            "throw" === l.type && (n = "completed", i.method = "throw", i.arg = l.arg)
                        }
                    }
                }

                function w(t, e) {
                    var i = t.iterator[e.method];
                    if (void 0 === i) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return d;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(i, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, d;
                    var r = n.arg;
                    return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function M(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function E(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                r = function e() {
                                    for (; ++n < t.length;)
                                        if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = g, n(x, "constructor", {
                    value: g,
                    configurable: !0
                }), n(g, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = l(g, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, l(t, s, "GeneratorFunction")), t.prototype = Object.create(x), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, _(k.prototype), l(k.prototype, o, (function() {
                    return this
                })), t.AsyncIterator = k, t.async = function(e, i, n, r, a) {
                    void 0 === a && (a = Promise);
                    var o = new k(c(e, i, n, r), a);
                    return t.isGeneratorFunction(i) ? o : o.next().then((function(t) {
                        return t.done ? t.value : o.next()
                    }))
                }, _(x), l(x, s, "Generator"), l(x, a, (function() {
                    return this
                })), l(x, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = Object(t),
                        i = [];
                    for (var n in e) i.push(n);
                    return i.reverse(),
                        function t() {
                            for (; i.length;) {
                                var n = i.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, t.values = E, S.prototype = {
                    constructor: S,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(M), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(i, n) {
                            return o.type = "throw", o.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r],
                                o = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = i.call(a, "catchLoc"),
                                    l = i.call(a, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), M(i), d
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.tryLoc === t) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    M(i)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, i) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, t
            }

            function d(t, e, i, n, r, a, o) {
                try {
                    var s = t[a](o),
                        l = s.value
                } catch (t) {
                    return void i(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, r)
            }

            function v(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function g(t) {
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
                    var i, n = y(t);
                    if (e) {
                        var r = y(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return b(this, i)
                }
            }

            function b(t, e) {
                if (e && ("object" === h(e) || "function" == typeof e)) return e;
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
            var m = function(t) {
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
                    }), e && p(t, e)
                }(l, t);
                var e, i, n, a, o, s = g(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = s.call(this, t)).state = {
                        hasError: !1,
                        errorID: null
                    }, e
                }
                return e = l, i = [{
                    key: "componentDidCatch",
                    value: (a = f().mark((function t(e, i) {
                        var n;
                        return f().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, u(e, i);
                                case 2:
                                    n = t.sent, this.setState({
                                        errorID: n
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), o = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(i, n) {
                            var r = a.apply(t, e);

                            function o(t) {
                                d(r, i, n, o, s, "next", t)
                            }

                            function s(t) {
                                d(r, i, n, o, s, "throw", t)
                            }
                            o(void 0)
                        }))
                    }, function(t, e) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return this.state.hasError ? r.a.createElement("div", null, r.a.createElement("h1", null, "Something went wrong."), this.state.errorID && r.a.createElement("div", null, this.state.errorID)) : this.props.children
                    }
                }], n = [{
                    key: "getDerivedStateFromError",
                    value: function(t) {
                        return {
                            hasError: !0
                        }
                    }
                }], i && v(e.prototype, i), n && v(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(r.a.Component)
        },
        HSsa: function(t, e, i) {
            "use strict";
            t.exports = function(t, e) {
                return function() {
                    for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
                    return t.apply(e, i)
                }
            }
        },
        LYNF: function(t, e, i) {
            "use strict";
            var n = i("OH9c");
            t.exports = function(t, e, i, r, a) {
                var o = new Error(t);
                return n(o, e, i, r, a)
            }
        },
        Lmem: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                return !(!t || !t.__CANCEL__)
            }
        },
        MLWZ: function(t, e, i) {
            "use strict";
            var n = i("xTJ+");

            function r(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            t.exports = function(t, e, i) {
                if (!e) return t;
                var a;
                if (i) a = i(e);
                else if (n.isURLSearchParams(e)) a = e.toString();
                else {
                    var o = [];
                    n.forEach(e, (function(t, e) {
                        null != t && (n.isArray(t) ? e += "[]" : t = [t], n.forEach(t, (function(t) {
                            n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), o.push(r(e) + "=" + r(t))
                        })))
                    })), a = o.join("&")
                }
                if (a) {
                    var s = t.indexOf("#"); - 1 !== s && (t = t.slice(0, s)), t += (-1 === t.indexOf("?") ? "?" : "&") + a
                }
                return t
            }
        },
        OH9c: function(t, e, i) {
            "use strict";
            t.exports = function(t, e, i, n, r) {
                return t.config = e, i && (t.code = i), t.request = n, t.response = r, t.isAxiosError = !0, t.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }, t
            }
        },
        OTTw: function(t, e, i) {
            "use strict";
            var n = i("xTJ+");
            t.exports = n.isStandardBrowserEnv() ? function() {
                var t, e = /(msie|trident)/i.test(navigator.userAgent),
                    i = document.createElement("a");

                function r(t) {
                    var n = t;
                    return e && (i.setAttribute("href", n), n = i.href), i.setAttribute("href", n), {
                        href: i.href,
                        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                        host: i.host,
                        search: i.search ? i.search.replace(/^\?/, "") : "",
                        hash: i.hash ? i.hash.replace(/^#/, "") : "",
                        hostname: i.hostname,
                        port: i.port,
                        pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                    }
                }
                return t = r(window.location.href),
                    function(e) {
                        var i = n.isString(e) ? r(e) : e;
                        return i.protocol === t.protocol && i.host === t.host
                    }
            }() : function() {
                return !0
            }
        },
        "Rn+g": function(t, e, i) {
            "use strict";
            var n = i("LYNF");
            t.exports = function(t, e, i) {
                var r = i.config.validateStatus;
                i.status && r && !r(i.status) ? e(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : t(i)
            }
        },
        SntB: function(t, e, i) {
            "use strict";
            var n = i("xTJ+");
            t.exports = function(t, e) {
                e = e || {};
                var i = {};

                function r(t, e) {
                    return n.isPlainObject(t) && n.isPlainObject(e) ? n.merge(t, e) : n.isPlainObject(e) ? n.merge({}, e) : n.isArray(e) ? e.slice() : e
                }

                function a(i) {
                    return n.isUndefined(e[i]) ? n.isUndefined(t[i]) ? void 0 : r(void 0, t[i]) : r(t[i], e[i])
                }

                function o(t) {
                    if (!n.isUndefined(e[t])) return r(void 0, e[t])
                }

                function s(i) {
                    return n.isUndefined(e[i]) ? n.isUndefined(t[i]) ? void 0 : r(void 0, t[i]) : r(void 0, e[i])
                }

                function l(i) {
                    return i in e ? r(t[i], e[i]) : i in t ? r(void 0, t[i]) : void 0
                }
                var c = {
                    url: o,
                    method: o,
                    data: o,
                    baseURL: s,
                    transformRequest: s,
                    transformResponse: s,
                    paramsSerializer: s,
                    timeout: s,
                    timeoutMessage: s,
                    withCredentials: s,
                    adapter: s,
                    responseType: s,
                    xsrfCookieName: s,
                    xsrfHeaderName: s,
                    onUploadProgress: s,
                    onDownloadProgress: s,
                    decompress: s,
                    maxContentLength: s,
                    maxBodyLength: s,
                    transport: s,
                    httpAgent: s,
                    httpsAgent: s,
                    cancelToken: s,
                    socketPath: s,
                    responseEncoding: s,
                    validateStatus: l
                };
                return n.forEach(Object.keys(t).concat(Object.keys(e)), (function(t) {
                    var e = c[t] || a,
                        r = e(t);
                    n.isUndefined(r) && e !== l || (i[t] = r)
                })), i
            }
        },
        TD3H: function(t, e, i) {
            "use strict";
            (function(e) {
                var n = i("xTJ+"),
                    r = i("yK9s"),
                    a = i("OH9c"),
                    o = i("yvr/"),
                    s = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function l(t, e) {
                    !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
                }
                var c, u = {
                    transitional: o,
                    adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (c = i("tQ2B")), c),
                    transformRequest: [function(t, e) {
                        return r(e, "Accept"), r(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (l(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : n.isObject(t) || e && "application/json" === e["Content-Type"] ? (l(e, "application/json"), function(t, e, i) {
                            if (n.isString(t)) try {
                                return (e || JSON.parse)(t), n.trim(t)
                            } catch (t) {
                                if ("SyntaxError" !== t.name) throw t
                            }
                            return (i || JSON.stringify)(t)
                        }(t)) : t
                    }],
                    transformResponse: [function(t) {
                        var e = this.transitional || u.transitional,
                            i = e && e.silentJSONParsing,
                            r = e && e.forcedJSONParsing,
                            o = !i && "json" === this.responseType;
                        if (o || r && n.isString(t) && t.length) try {
                            return JSON.parse(t)
                        } catch (t) {
                            if (o) {
                                if ("SyntaxError" === t.name) throw a(t, this, "E_JSON_PARSE");
                                throw t
                            }
                        }
                        return t
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function(t) {
                        return t >= 200 && t < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                n.forEach(["delete", "get", "head"], (function(t) {
                    u.headers[t] = {}
                })), n.forEach(["post", "put", "patch"], (function(t) {
                    u.headers[t] = n.merge(s)
                })), t.exports = u
            }).call(this, i("8oxB"))
        },
        UnBK: function(t, e, i) {
            "use strict";
            var n = i("xTJ+"),
                r = i("xAGQ"),
                a = i("Lmem"),
                o = i("TD3H"),
                s = i("endd");

            function l(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new s("canceled")
            }
            t.exports = function(t) {
                return l(t), t.headers = t.headers || {}, t.data = r.call(t, t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                    delete t.headers[e]
                })), (t.adapter || o.adapter)(t).then((function(e) {
                    return l(t), e.data = r.call(t, e.data, e.headers, t.transformResponse), e
                }), (function(e) {
                    return a(e) || (l(t), e && e.response && (e.response.data = r.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                }))
            }
        },
        XM5P: function(t, e) {
            t.exports = {
                version: "0.26.1"
            }
        },
        XwJu: function(t, e, i) {
            "use strict";
            var n = i("xTJ+");
            t.exports = function(t) {
                return n.isObject(t) && !0 === t.isAxiosError
            }
        },
        endd: function(t, e, i) {
            "use strict";

            function n(t) {
                this.message = t
            }
            n.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, n.prototype.__CANCEL__ = !0, t.exports = n
        },
        eqyj: function(t, e, i) {
            "use strict";
            var n = i("xTJ+");
            t.exports = n.isStandardBrowserEnv() ? {
                write: function(t, e, i, r, a, o) {
                    var s = [];
                    s.push(t + "=" + encodeURIComponent(e)), n.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), n.isString(r) && s.push("path=" + r), n.isString(a) && s.push("domain=" + a), !0 === o && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        g7np: function(t, e, i) {
            "use strict";
            var n = i("2SVd"),
                r = i("5oMp");
            t.exports = function(t, e) {
                return t && !n(e) ? r(t, e) : e
            }
        },
        hIuj: function(t, e, i) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var r = i("XM5P").version,
                a = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(t, e) {
                a[t] = function(i) {
                    return n(i) === t || "a" + (e < 1 ? "n " : " ") + t
                }
            }));
            var o = {};
            a.transitional = function(t, e, i) {
                function n(t, e) {
                    return "[Axios v" + r + "] Transitional option '" + t + "'" + e + (i ? ". " + i : "")
                }
                return function(i, r, a) {
                    if (!1 === t) throw new Error(n(r, " has been removed" + (e ? " in " + e : "")));
                    return e && !o[r] && (o[r] = !0, console.warn(n(r, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(i, r, a)
                }
            }, t.exports = {
                assertOptions: function(t, e, i) {
                    if ("object" !== n(t)) throw new TypeError("options must be an object");
                    for (var r = Object.keys(t), a = r.length; a-- > 0;) {
                        var o = r[a],
                            s = e[o];
                        if (s) {
                            var l = t[o],
                                c = void 0 === l || s(l, o, t);
                            if (!0 !== c) throw new TypeError("option " + o + " must be " + c)
                        } else if (!0 !== i) throw Error("Unknown option " + o)
                    }
                },
                validators: a
            }
        },
        "jfS+": function(t, e, i) {
            "use strict";
            var n = i("endd");

            function r(t) {
                if ("function" != typeof t) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function(t) {
                    e = t
                }));
                var i = this;
                this.promise.then((function(t) {
                    if (i._listeners) {
                        var e, n = i._listeners.length;
                        for (e = 0; e < n; e++) i._listeners[e](t);
                        i._listeners = null
                    }
                })), this.promise.then = function(t) {
                    var e, n = new Promise((function(t) {
                        i.subscribe(t), e = t
                    })).then(t);
                    return n.cancel = function() {
                        i.unsubscribe(e)
                    }, n
                }, t((function(t) {
                    i.reason || (i.reason = new n(t), e(i.reason))
                }))
            }
            r.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, r.prototype.subscribe = function(t) {
                this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
            }, r.prototype.unsubscribe = function(t) {
                if (this._listeners) {
                    var e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
                }
            }, r.source = function() {
                var t;
                return {
                    token: new r((function(e) {
                        t = e
                    })),
                    cancel: t
                }
            }, t.exports = r
        },
        tQ2B: function(t, e, i) {
            "use strict";
            var n = i("xTJ+"),
                r = i("Rn+g"),
                a = i("eqyj"),
                o = i("MLWZ"),
                s = i("g7np"),
                l = i("w0Vi"),
                c = i("OTTw"),
                u = i("LYNF"),
                h = i("yvr/"),
                f = i("endd");
            t.exports = function(t) {
                return new Promise((function(e, i) {
                    var d, v = t.data,
                        p = t.headers,
                        g = t.responseType;

                    function b() {
                        t.cancelToken && t.cancelToken.unsubscribe(d), t.signal && t.signal.removeEventListener("abort", d)
                    }
                    n.isFormData(v) && delete p["Content-Type"];
                    var y = new XMLHttpRequest;
                    if (t.auth) {
                        var m = t.auth.username || "",
                            x = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        p.Authorization = "Basic " + btoa(m + ":" + x)
                    }
                    var _ = s(t.baseURL, t.url);

                    function k() {
                        if (y) {
                            var n = "getAllResponseHeaders" in y ? l(y.getAllResponseHeaders()) : null,
                                a = {
                                    data: g && "text" !== g && "json" !== g ? y.response : y.responseText,
                                    status: y.status,
                                    statusText: y.statusText,
                                    headers: n,
                                    config: t,
                                    request: y
                                };
                            r((function(t) {
                                e(t), b()
                            }), (function(t) {
                                i(t), b()
                            }), a), y = null
                        }
                    }
                    if (y.open(t.method.toUpperCase(), o(_, t.params, t.paramsSerializer), !0), y.timeout = t.timeout, "onloadend" in y ? y.onloadend = k : y.onreadystatechange = function() {
                            y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(k)
                        }, y.onabort = function() {
                            y && (i(u("Request aborted", t, "ECONNABORTED", y)), y = null)
                        }, y.onerror = function() {
                            i(u("Network Error", t, null, y)), y = null
                        }, y.ontimeout = function() {
                            var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                                n = t.transitional || h;
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), i(u(e, t, n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)), y = null
                        }, n.isStandardBrowserEnv()) {
                        var O = (t.withCredentials || c(_)) && t.xsrfCookieName ? a.read(t.xsrfCookieName) : void 0;
                        O && (p[t.xsrfHeaderName] = O)
                    }
                    "setRequestHeader" in y && n.forEach(p, (function(t, e) {
                        void 0 === v && "content-type" === e.toLowerCase() ? delete p[e] : y.setRequestHeader(e, t)
                    })), n.isUndefined(t.withCredentials) || (y.withCredentials = !!t.withCredentials), g && "json" !== g && (y.responseType = t.responseType), "function" == typeof t.onDownloadProgress && y.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && y.upload && y.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (d = function(t) {
                        y && (i(!t || t && t.type ? new f("canceled") : t), y.abort(), y = null)
                    }, t.cancelToken && t.cancelToken.subscribe(d), t.signal && (t.signal.aborted ? d() : t.signal.addEventListener("abort", d))), v || (v = null), y.send(v)
                }))
            }
        },
        vDqi: function(t, e, i) {
            t.exports = i("zuR4")
        },
        w0Vi: function(t, e, i) {
            "use strict";
            var n = i("xTJ+"),
                r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            t.exports = function(t) {
                var e, i, a, o = {};
                return t ? (n.forEach(t.split("\n"), (function(t) {
                    if (a = t.indexOf(":"), e = n.trim(t.substr(0, a)).toLowerCase(), i = n.trim(t.substr(a + 1)), e) {
                        if (o[e] && r.indexOf(e) >= 0) return;
                        o[e] = "set-cookie" === e ? (o[e] ? o[e] : []).concat([i]) : o[e] ? o[e] + ", " + i : i
                    }
                })), o) : o
            }
        },
        xAGQ: function(t, e, i) {
            "use strict";
            var n = i("xTJ+"),
                r = i("TD3H");
            t.exports = function(t, e, i) {
                var a = this || r;
                return n.forEach(i, (function(i) {
                    t = i.call(a, t, e)
                })), t
            }
        },
        "xTJ+": function(t, e, i) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var r = i("HSsa"),
                a = Object.prototype.toString;

            function o(t) {
                return Array.isArray(t)
            }

            function s(t) {
                return void 0 === t
            }

            function l(t) {
                return "[object ArrayBuffer]" === a.call(t)
            }

            function c(t) {
                return null !== t && "object" === n(t)
            }

            function u(t) {
                if ("[object Object]" !== a.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
            }

            function h(t) {
                return "[object Function]" === a.call(t)
            }

            function f(t, e) {
                if (null != t)
                    if ("object" !== n(t) && (t = [t]), o(t))
                        for (var i = 0, r = t.length; i < r; i++) e.call(null, t[i], i, t);
                    else
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && e.call(null, t[a], a, t)
            }
            t.exports = {
                isArray: o,
                isArrayBuffer: l,
                isBuffer: function(t) {
                    return null !== t && !s(t) && null !== t.constructor && !s(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                },
                isFormData: function(t) {
                    return "[object FormData]" === a.call(t)
                },
                isArrayBufferView: function(t) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && l(t.buffer)
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isNumber: function(t) {
                    return "number" == typeof t
                },
                isObject: c,
                isPlainObject: u,
                isUndefined: s,
                isDate: function(t) {
                    return "[object Date]" === a.call(t)
                },
                isFile: function(t) {
                    return "[object File]" === a.call(t)
                },
                isBlob: function(t) {
                    return "[object Blob]" === a.call(t)
                },
                isFunction: h,
                isStream: function(t) {
                    return c(t) && h(t.pipe)
                },
                isURLSearchParams: function(t) {
                    return "[object URLSearchParams]" === a.call(t)
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: f,
                merge: function t() {
                    var e = {};

                    function i(i, n) {
                        u(e[n]) && u(i) ? e[n] = t(e[n], i) : u(i) ? e[n] = t({}, i) : o(i) ? e[n] = i.slice() : e[n] = i
                    }
                    for (var n = 0, r = arguments.length; n < r; n++) f(arguments[n], i);
                    return e
                },
                extend: function(t, e, i) {
                    return f(e, (function(e, n) {
                        t[n] = i && "function" == typeof e ? r(e, i) : e
                    })), t
                },
                trim: function(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(t) {
                    return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
                }
            }
        },
        "y++v": function(t, e, i) {
            "use strict";
            e.a = {
                securityBaseURL: null,
                logConsoleSuspensionWarning: function() {
                    return console.log("%cWARNING!", "color: red; font-size: 200%;"), console.log("The browser console is a developer tool not intended for use by Blooket users.  DO NOT copy and paste any code in this window.  Any code execution in this window is a violation of the Blooket Terms of Use and may result in the suspension of your account. https://www.blooket.com/terms"), ""
                }
            }
        },
        yK9s: function(t, e, i) {
            "use strict";
            var n = i("xTJ+");
            t.exports = function(t, e) {
                n.forEach(t, (function(i, n) {
                    n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = i, delete t[n])
                }))
            }
        },
        "yvr/": function(t, e, i) {
            "use strict";
            t.exports = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            }
        },
        zuR4: function(t, e, i) {
            "use strict";
            var n = i("xTJ+"),
                r = i("HSsa"),
                a = i("CgaS"),
                o = i("SntB");
            var s = function t(e) {
                var i = new a(e),
                    s = r(a.prototype.request, i);
                return n.extend(s, a.prototype, i), n.extend(s, i), s.create = function(i) {
                    return t(o(e, i))
                }, s
            }(i("TD3H"));
            s.Axios = a, s.Cancel = i("endd"), s.CancelToken = i("jfS+"), s.isCancel = i("Lmem"), s.VERSION = i("XM5P").version, s.all = function(t) {
                return Promise.all(t)
            }, s.spread = i("DfZB"), s.isAxiosError = i("XwJu"), t.exports = s, t.exports.default = s
        }
    }
]);