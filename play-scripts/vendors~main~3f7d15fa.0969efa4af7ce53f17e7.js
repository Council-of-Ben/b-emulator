(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "0Ywm": function(t, e, r) {
            "use strict";

            function n(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || o(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = o(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, c = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        s = !0, a = t
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function o(t, e) {
                if (t) {
                    if ("string" == typeof t) return a(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(t, e) : void 0
                }
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return l
            }));
            var s, u = function(t, e, r, n, i) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
                },
                l = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), s.set(this, void 0), u(this, s, e, "f"), this.plugins = [], this.interactorsInitializers = new Map, this.moversInitializers = new Map, this.updatersInitializers = new Map, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
                    }
                    var e, r, o;
                    return e = t, (r = [{
                        key: "getPlugin",
                        value: function(t) {
                            return this.plugins.find((function(e) {
                                return e.id === t
                            }))
                        }
                    }, {
                        key: "addPlugin",
                        value: function(t) {
                            this.getPlugin(t.id) || this.plugins.push(t)
                        }
                    }, {
                        key: "getAvailablePlugins",
                        value: function(t) {
                            var e, r = new Map,
                                n = i(this.plugins);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var o = e.value;
                                    o.needsPlugin(t.actualOptions) && r.set(o.id, o.getPlugin(t))
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                            return r
                        }
                    }, {
                        key: "loadOptions",
                        value: function(t, e) {
                            var r, n = i(this.plugins);
                            try {
                                for (n.s(); !(r = n.n()).done;) r.value.loadOptions(t, e)
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }
                    }, {
                        key: "getPreset",
                        value: function(t) {
                            return this.presets.get(t)
                        }
                    }, {
                        key: "addPreset",
                        value: function(t, e) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            !r && this.getPreset(t) || this.presets.set(t, e)
                        }
                    }, {
                        key: "getShapeDrawer",
                        value: function(t) {
                            return this.drawers.get(t)
                        }
                    }, {
                        key: "addShapeDrawer",
                        value: function(t, e) {
                            this.getShapeDrawer(t) || this.drawers.set(t, e)
                        }
                    }, {
                        key: "getSupportedShapes",
                        value: function() {
                            return this.drawers.keys()
                        }
                    }, {
                        key: "getPathGenerator",
                        value: function(t) {
                            return this.pathGenerators.get(t)
                        }
                    }, {
                        key: "addPathGenerator",
                        value: function(t, e) {
                            this.getPathGenerator(t) || this.pathGenerators.set(t, e)
                        }
                    }, {
                        key: "getInteractors",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.interactors.get(t);
                            return r && !e || (r = n(this.interactorsInitializers.values()).map((function(e) {
                                return e(t)
                            })), this.interactors.set(t, r)), r
                        }
                    }, {
                        key: "addInteractor",
                        value: function(t, e) {
                            this.interactorsInitializers.set(t, e)
                        }
                    }, {
                        key: "getUpdaters",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.updaters.get(t);
                            return r && !e || (r = n(this.updatersInitializers.values()).map((function(e) {
                                return e(t)
                            })), this.updaters.set(t, r)), r
                        }
                    }, {
                        key: "addParticleUpdater",
                        value: function(t, e) {
                            this.updatersInitializers.set(t, e)
                        }
                    }, {
                        key: "getMovers",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.movers.get(t);
                            return r && !e || (r = n(this.moversInitializers.values()).map((function(e) {
                                return e(t)
                            })), this.movers.set(t, r)), r
                        }
                    }, {
                        key: "addParticleMover",
                        value: function(t, e) {
                            this.moversInitializers.set(t, e)
                        }
                    }]) && c(e.prototype, r), o && c(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
            s = new WeakMap
        },
        Avkg: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return p
            }));
            var n = r("mZtP"),
                i = r("cfMx");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c() {
                return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = s(t, e);
                    if (n) {
                        var i = Object.getOwnPropertyDescriptor(n, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : r) : i.value
                    }
                }).apply(this, arguments)
            }

            function s(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
                return t
            }

            function u(t, e) {
                return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = h(t);
                    if (e) {
                        var i = h(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }

            function f(t, e) {
                if (e && ("object" === o(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var p = function(t) {
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
                    }), e && u(t, e)
                }(f, t);
                var e, r, o, s = l(f);

                function f(t, e, r, n) {
                    var i;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), (i = s.call(this, t, e, r)).canvasSize = n, i.canvasSize = Object.assign({}, n), i
                }
                return e = f, (r = [{
                    key: "contains",
                    value: function(t) {
                        if (c(h(f.prototype), "contains", this).call(this, t)) return !0;
                        var e = {
                            x: t.x - this.canvasSize.width,
                            y: t.y
                        };
                        if (c(h(f.prototype), "contains", this).call(this, e)) return !0;
                        var r = {
                            x: t.x - this.canvasSize.width,
                            y: t.y - this.canvasSize.height
                        };
                        if (c(h(f.prototype), "contains", this).call(this, r)) return !0;
                        var n = {
                            x: t.x,
                            y: t.y - this.canvasSize.height
                        };
                        return c(h(f.prototype), "contains", this).call(this, n)
                    }
                }, {
                    key: "intersects",
                    value: function(t) {
                        if (c(h(f.prototype), "intersects", this).call(this, t)) return !0;
                        var e = t,
                            r = t,
                            o = {
                                x: t.position.x - this.canvasSize.width,
                                y: t.position.y - this.canvasSize.height
                            };
                        if (void 0 !== r.radius) {
                            var a = new n.a(o.x, o.y, 2 * r.radius);
                            return c(h(f.prototype), "intersects", this).call(this, a)
                        }
                        if (void 0 !== e.size) {
                            var s = new i.a(o.x, o.y, 2 * e.size.width, 2 * e.size.height);
                            return c(h(f.prototype), "intersects", this).call(this, s)
                        }
                        return !1
                    }
                }]) && a(e.prototype, r), o && a(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), f
            }(n.a)
        },
        ClS3: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            r.d(e, "a", (function() {
                return o
            }));
            var o = i((function t(e, r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.position = e, this.particle = r
            }))
        },
        D2zs: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return d
            }));
            var n = r("j5nf"),
                i = r("3wFu");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, i, o = [],
                        a = !0,
                        c = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (o.push(n.value), !e || o.length !== e); a = !0);
                    } catch (t) {
                        c = !0, i = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                    return o
                }(t, e) || s(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = s(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
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
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function s(t, e) {
                if (t) {
                    if ("string" == typeof t) return u(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(t, e) : void 0
                }
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function l() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                l = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
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

                function u(t, e, r, n) {
                    var i = e && e.prototype instanceof p ? e : p,
                        o = Object.create(i.prototype),
                        a = new j(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var c = k(a, r);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var s = f(t, e, r);
                                if ("normal" === s.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue;
                                    return {
                                        value: s.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                            }
                        }
                    }(t, r, a), o
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
                t.wrap = u;
                var h = {};

                function p() {}

                function v() {}

                function d() {}
                var y = {};
                s(y, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    b = m && m(m(P([])));
                b && b !== e && r.call(b, i) && (y = b);
                var g = d.prototype = p.prototype = Object.create(y);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var n;
                    this._invoke = function(i, a) {
                        function c() {
                            return new e((function(n, c) {
                                ! function n(i, a, c, s) {
                                    var u = f(t[i], t, a);
                                    if ("throw" !== u.type) {
                                        var l = u.arg,
                                            h = l.value;
                                        return h && "object" == o(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                            n("next", t, c, s)
                                        }), (function(t) {
                                            n("throw", t, c, s)
                                        })) : e.resolve(h).then((function(t) {
                                            l.value = t, c(l)
                                        }), (function(t) {
                                            return n("throw", t, c, s)
                                        }))
                                    }
                                    s(u.arg)
                                }(i, a, n, c)
                            }))
                        }
                        return n = n ? n.then(c, c) : c()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
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
                return v.prototype = d, s(g, "constructor", d), s(d, "constructor", v), v.displayName = s(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(x.prototype), s(x.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(u(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), s(g, c, "Generator"), s(g, i, (function() {
                    return this
                })), s(g, "toString", (function() {
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
                }, t.values = P, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var c = r.call(o, "catchLoc"),
                                    s = r.call(o, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    E(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function f(t, e, r, n, i, o, a) {
                try {
                    var c = t[o](a),
                        s = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(n, i)
            }

            function h(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = t.apply(e, r);

                        function a(t) {
                            f(o, n, i, a, c, "next", t)
                        }

                        function c(t) {
                            f(o, n, i, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function p(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function v(t, e, r, n, i) {
                if (n) {
                    var o = {
                        passive: !0
                    };
                    "boolean" == typeof i ? o.capture = i : void 0 !== i && (o = i), t.addEventListener(e, r, o)
                } else {
                    var a = i;
                    t.removeEventListener(e, r, a)
                }
            }
            var d = function() {
                function t(e) {
                    var r = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e, this.canPush = !0, this.mouseMoveHandler = function(t) {
                        return r.mouseTouchMove(t)
                    }, this.touchStartHandler = function(t) {
                        return r.mouseTouchMove(t)
                    }, this.touchMoveHandler = function(t) {
                        return r.mouseTouchMove(t)
                    }, this.touchEndHandler = function() {
                        return r.mouseTouchFinish()
                    }, this.mouseLeaveHandler = function() {
                        return r.mouseTouchFinish()
                    }, this.touchCancelHandler = function() {
                        return r.mouseTouchFinish()
                    }, this.touchEndClickHandler = function(t) {
                        return r.mouseTouchClick(t)
                    }, this.mouseUpHandler = function(t) {
                        return r.mouseTouchClick(t)
                    }, this.mouseDownHandler = function() {
                        return r.mouseDown()
                    }, this.visibilityChangeHandler = function() {
                        return r.handleVisibilityChange()
                    }, this.themeChangeHandler = function(t) {
                        return r.handleThemeChange(t)
                    }, this.oldThemeChangeHandler = function(t) {
                        return r.handleThemeChange(t)
                    }, this.resizeHandler = function() {
                        return r.handleWindowResize()
                    }
                }
                var e, r, o;
                return e = t, (r = [{
                    key: "addListeners",
                    value: function() {
                        this.manageListeners(!0)
                    }
                }, {
                    key: "removeListeners",
                    value: function() {
                        this.manageListeners(!1)
                    }
                }, {
                    key: "manageListeners",
                    value: function(t) {
                        var e, r = this,
                            o = this.container,
                            a = o.actualOptions,
                            c = a.interactivity.detectsOn,
                            s = n.a.mouseLeaveEvent;
                        if ("window" === c) o.interactivity.element = window, s = n.a.mouseOutEvent;
                        else if ("parent" === c && o.canvas.element) {
                            var u = o.canvas.element;
                            o.interactivity.element = null !== (e = u.parentElement) && void 0 !== e ? e : u.parentNode
                        } else o.interactivity.element = o.canvas.element;
                        var l = !Object(i.n)() && "undefined" != typeof matchMedia && matchMedia("(prefers-color-scheme: dark)");
                        l && (void 0 !== l.addEventListener ? v(l, "change", this.themeChangeHandler, t) : void 0 !== l.addListener && (t ? l.addListener(this.oldThemeChangeHandler) : l.removeListener(this.oldThemeChangeHandler)));
                        var f = o.interactivity.element;
                        if (f) {
                            var h = f;
                            (a.interactivity.events.onHover.enable || a.interactivity.events.onClick.enable) && (v(f, n.a.mouseMoveEvent, this.mouseMoveHandler, t), v(f, n.a.touchStartEvent, this.touchStartHandler, t), v(f, n.a.touchMoveEvent, this.touchMoveHandler, t), a.interactivity.events.onClick.enable ? (v(f, n.a.touchEndEvent, this.touchEndClickHandler, t), v(f, n.a.mouseUpEvent, this.mouseUpHandler, t), v(f, n.a.mouseDownEvent, this.mouseDownHandler, t)) : v(f, n.a.touchEndEvent, this.touchEndHandler, t), v(f, s, this.mouseLeaveHandler, t), v(f, n.a.touchCancelEvent, this.touchCancelHandler, t)), o.canvas.element && (o.canvas.element.style.pointerEvents = h === o.canvas.element ? "initial" : "none"), a.interactivity.events.resize && ("undefined" != typeof ResizeObserver ? this.resizeObserver && !t ? (o.canvas.element && this.resizeObserver.unobserve(o.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && t && o.canvas.element && (this.resizeObserver = new ResizeObserver((function(t) {
                                t.find((function(t) {
                                    return t.target === o.canvas.element
                                })) && r.handleWindowResize()
                            })), this.resizeObserver.observe(o.canvas.element)) : v(window, n.a.resizeEvent, this.resizeHandler, t)), document && v(document, n.a.visibilityChangeEvent, this.visibilityChangeHandler, t, !1)
                        }
                    }
                }, {
                    key: "handleWindowResize",
                    value: function() {
                        var t = this;
                        this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout(h(l().mark((function e() {
                            var r;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null === (r = t.container.canvas) || void 0 === r ? void 0 : r.windowResize();
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 500)
                    }
                }, {
                    key: "handleVisibilityChange",
                    value: function() {
                        var t = this.container,
                            e = t.actualOptions;
                        this.mouseTouchFinish(), e.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw(!0)))
                    }
                }, {
                    key: "mouseDown",
                    value: function() {
                        var t = this.container.interactivity;
                        if (t) {
                            var e = t.mouse;
                            e.clicking = !0, e.downPosition = e.position
                        }
                    }
                }, {
                    key: "mouseTouchMove",
                    value: function(t) {
                        var e, r, i, o, a, c, s, u = this.container,
                            l = u.actualOptions;
                        if (null === (e = u.interactivity) || void 0 === e ? void 0 : e.element) {
                            var f;
                            u.interactivity.mouse.inside = !0;
                            var h = u.canvas.element;
                            if (t.type.startsWith("mouse")) {
                                this.canPush = !0;
                                var p = t;
                                if (u.interactivity.element === window) {
                                    if (h) {
                                        var v = h.getBoundingClientRect();
                                        f = {
                                            x: p.clientX - v.left,
                                            y: p.clientY - v.top
                                        }
                                    }
                                } else if ("parent" === l.interactivity.detectsOn) {
                                    var d = p.target,
                                        y = p.currentTarget,
                                        m = u.canvas.element;
                                    if (d && y && m) {
                                        var b = d.getBoundingClientRect(),
                                            g = y.getBoundingClientRect(),
                                            w = m.getBoundingClientRect();
                                        f = {
                                            x: p.offsetX + 2 * b.left - (g.left + w.left),
                                            y: p.offsetY + 2 * b.top - (g.top + w.top)
                                        }
                                    } else f = {
                                        x: null !== (r = p.offsetX) && void 0 !== r ? r : p.clientX,
                                        y: null !== (i = p.offsetY) && void 0 !== i ? i : p.clientY
                                    }
                                } else p.target === u.canvas.element && (f = {
                                    x: null !== (o = p.offsetX) && void 0 !== o ? o : p.clientX,
                                    y: null !== (a = p.offsetY) && void 0 !== a ? a : p.clientY
                                })
                            } else {
                                this.canPush = "touchmove" !== t.type;
                                var x = t,
                                    k = x.touches[x.touches.length - 1],
                                    O = null == h ? void 0 : h.getBoundingClientRect();
                                f = {
                                    x: k.clientX - (null !== (c = null == O ? void 0 : O.left) && void 0 !== c ? c : 0),
                                    y: k.clientY - (null !== (s = null == O ? void 0 : O.top) && void 0 !== s ? s : 0)
                                }
                            }
                            var E = u.retina.pixelRatio;
                            f && (f.x *= E, f.y *= E), u.interactivity.mouse.position = f, u.interactivity.status = n.a.mouseMoveEvent
                        }
                    }
                }, {
                    key: "mouseTouchFinish",
                    value: function() {
                        var t = this.container.interactivity;
                        if (t) {
                            var e = t.mouse;
                            delete e.position, delete e.clickPosition, delete e.downPosition, t.status = n.a.mouseLeaveEvent, e.inside = !1, e.clicking = !1
                        }
                    }
                }, {
                    key: "mouseTouchClick",
                    value: function(t) {
                        var e = this.container,
                            r = e.actualOptions,
                            n = e.interactivity.mouse;
                        n.inside = !0;
                        var i = !1,
                            o = n.position;
                        if (o && r.interactivity.events.onClick.enable) {
                            var s, u = c(e.plugins);
                            try {
                                for (u.s(); !(s = u.n()).done;) {
                                    var l = a(s.value, 2)[1];
                                    if (l.clickPositionValid && (i = l.clickPositionValid(o))) break
                                }
                            } catch (t) {
                                u.e(t)
                            } finally {
                                u.f()
                            }
                            i || this.doMouseTouchClick(t), n.clicking = !1
                        }
                    }
                }, {
                    key: "doMouseTouchClick",
                    value: function(t) {
                        var e = this,
                            r = this.container,
                            n = r.actualOptions;
                        if (this.canPush) {
                            var i = r.interactivity.mouse.position;
                            if (!i) return;
                            r.interactivity.mouse.clickPosition = {
                                x: i.x,
                                y: i.y
                            }, r.interactivity.mouse.clickTime = (new Date).getTime();
                            var o = n.interactivity.events.onClick;
                            if (o.mode instanceof Array) {
                                var a, s = c(o.mode);
                                try {
                                    for (s.s(); !(a = s.n()).done;) {
                                        var u = a.value;
                                        this.handleClickMode(u)
                                    }
                                } catch (t) {
                                    s.e(t)
                                } finally {
                                    s.f()
                                }
                            } else this.handleClickMode(o.mode)
                        }
                        "touchend" === t.type && setTimeout((function() {
                            return e.mouseTouchFinish()
                        }), 500)
                    }
                }, {
                    key: "handleThemeChange",
                    value: function(t) {
                        var e = t.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme,
                            r = this.container.options.themes.find((function(t) {
                                return t.name === e
                            }));
                        r && r.default.auto && this.container.loadTheme(e)
                    }
                }, {
                    key: "handleClickMode",
                    value: function(t) {
                        this.container.handleClickMode(t)
                    }
                }]) && p(e.prototype, r), o && p(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        FBI6: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return w
            }));
            var n = r("Bvs5"),
                i = r("0qtW"),
                o = r("3wFu"),
                a = r("z/gc"),
                c = r("r1jv"),
                s = r("U1gX"),
                u = r("hs3Q"),
                l = r("hcMC");

            function f(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, i, o = [],
                        a = !0,
                        c = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (o.push(n.value), !e || o.length !== e); a = !0);
                    } catch (t) {
                        c = !0, i = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                    return o
                }(t, e) || p(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = p(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
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
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function p(t, e) {
                if (t) {
                    if ("string" == typeof t) return v(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(t, e) : void 0
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function d(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var y, m = function(t, e, r, n, i) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
                },
                b = function(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                },
                g = function(t) {
                    (Object(o.l)(t.outMode, t.checkModes) || Object(o.l)(t.outMode, t.checkModes)) && (t.coord > t.maxCoord - 2 * t.radius ? t.setCb(-t.radius) : t.coord < 2 * t.radius && t.setCb(t.radius))
                },
                w = function() {
                    function t(e, r, u, l, p, v) {
                        var d, g, w, x, k, O, E;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.id = r, this.container = u, this.group = v, y.set(this, void 0), m(this, y, e, "f"), this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.splitCount = 0, this.misplaced = !1, this.retina = {
                            maxDistance: {}
                        }, this.ignoresResizeRatio = !0;
                        var j = u.retina.pixelRatio,
                            P = u.actualOptions,
                            S = new a.a;
                        S.load(P.particles);
                        var L = S.shape.type,
                            z = S.reduceDuplicates;
                        if (this.shape = L instanceof Array ? Object(o.o)(L, this.id, z) : L, null == p ? void 0 : p.shape) {
                            if (p.shape.type) {
                                var T = p.shape.type;
                                this.shape = T instanceof Array ? Object(o.o)(T, this.id, z) : T
                            }
                            var M = new c.a;
                            M.load(p.shape), this.shape && (this.shapeData = this.loadShapeData(M, z))
                        } else this.shapeData = this.loadShapeData(S.shape, z);
                        void 0 !== p && S.load(p), void 0 !== (null === (d = this.shapeData) || void 0 === d ? void 0 : d.particles) && S.load(null === (g = this.shapeData) || void 0 === g ? void 0 : g.particles), this.fill = null !== (x = null === (w = this.shapeData) || void 0 === w ? void 0 : w.fill) && void 0 !== x ? x : this.fill, this.close = null !== (O = null === (k = this.shapeData) || void 0 === k ? void 0 : k.close) && void 0 !== O ? O : this.close, this.options = S, this.pathDelay = 1e3 * Object(n.p)(this.options.move.path.delay);
                        var C = Object(n.o)(this.options.zIndex.value);
                        u.retina.initParticle(this);
                        var _ = this.options.size,
                            I = _.value;
                        this.size = {
                            enable: _.animation.enable,
                            value: Object(n.p)(_) * u.retina.pixelRatio,
                            max: Object(n.m)(I) * j,
                            min: Object(n.n)(I) * j,
                            loops: 0,
                            maxLoops: Object(n.o)(_.animation.count)
                        };
                        var A = _.animation;
                        if (A.enable) {
                            switch (this.size.status = 0, A.startValue) {
                                case "min":
                                    this.size.value = this.size.min, this.size.status = 0;
                                    break;
                                case "random":
                                    this.size.value = Object(n.r)(this.size) * j, this.size.status = Math.random() >= .5 ? 0 : 1;
                                    break;
                                case "max":
                                default:
                                    this.size.value = this.size.max, this.size.status = 1
                            }
                            this.size.velocity = (null !== (E = this.retina.sizeAnimationSpeed) && void 0 !== E ? E : u.retina.sizeAnimationSpeed) / 100 * u.retina.reduceFactor, A.sync || (this.size.velocity *= Math.random())
                        }
                        this.direction = Object(n.l)(this.options.move.direction), this.bubble = {
                            inRange: !1
                        }, this.initialVelocity = this.calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - Object(n.o)(this.options.move.decay);
                        var R = this.options.move.gravity;
                        this.gravity = {
                            enable: R.enable,
                            acceleration: Object(n.o)(R.acceleration),
                            inverse: R.inverse
                        }, this.position = this.calcPosition(u, l, Object(n.g)(C, 0, u.zLayers)), this.initialPosition = this.position.copy(), this.offset = s.a.origin;
                        var F = u.particles;
                        F.needsSort = F.needsSort || F.lastZIndex < this.position.z, F.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / u.zLayers, this.sides = 24;
                        var D = u.drawers.get(this.shape);
                        D || (D = b(this, y, "f").plugins.getShapeDrawer(this.shape)) && u.drawers.set(this.shape, D), (null == D ? void 0 : D.loadShape) && (null == D || D.loadShape(this));
                        var N = null == D ? void 0 : D.getSidesCount;
                        N && (this.sides = N(this)), this.life = this.loadLife(), this.spawning = this.life.delay > 0, this.shadowColor = Object(i.c)(this.options.shadow.color);
                        var G, H = h(u.particles.updaters);
                        try {
                            for (H.s(); !(G = H.n()).done;) {
                                var q = G.value;
                                q.init && q.init(this)
                            }
                        } catch (t) {
                            H.e(t)
                        } finally {
                            H.f()
                        }
                        D && D.particleInit && D.particleInit(u, this);
                        var B, U = h(u.plugins);
                        try {
                            for (U.s(); !(B = U.n()).done;) {
                                var W = f(B.value, 2)[1];
                                W.particleCreated && W.particleCreated(this)
                            }
                        } catch (t) {
                            U.e(t)
                        } finally {
                            U.f()
                        }
                    }
                    var e, r, p;
                    return e = t, (r = [{
                        key: "isVisible",
                        value: function() {
                            return !this.destroyed && !this.spawning && this.isInsideCanvas()
                        }
                    }, {
                        key: "isInsideCanvas",
                        value: function() {
                            var t = this.getRadius(),
                                e = this.container.canvas.size;
                            return this.position.x >= -t && this.position.y >= -t && this.position.y <= e.height + t && this.position.x <= e.width + t
                        }
                    }, {
                        key: "draw",
                        value: function(t) {
                            var e, r = this.container,
                                n = h(r.plugins);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i = f(e.value, 2)[1];
                                    r.canvas.drawParticlePlugin(i, this, t)
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                            r.canvas.drawParticle(this, t)
                        }
                    }, {
                        key: "getPosition",
                        value: function() {
                            return {
                                x: this.position.x + this.offset.x,
                                y: this.position.y + this.offset.y,
                                z: this.position.z
                            }
                        }
                    }, {
                        key: "getRadius",
                        value: function() {
                            var t;
                            return null !== (t = this.bubble.radius) && void 0 !== t ? t : this.size.value
                        }
                    }, {
                        key: "getMass",
                        value: function() {
                            return Math.pow(this.getRadius(), 2) * Math.PI / 2
                        }
                    }, {
                        key: "getFillColor",
                        value: function() {
                            var t, e, r = null !== (t = this.bubble.color) && void 0 !== t ? t : Object(i.e)(this.color);
                            if (r && this.roll && (this.backColor || this.roll.alter)) {
                                var n = "both" === this.options.roll.mode ? 2 : 1,
                                    o = "horizontal" === this.options.roll.mode ? Math.PI / 2 : 0;
                                if (Math.floor(((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + o) / (Math.PI / n)) % 2) {
                                    if (this.backColor) return this.backColor;
                                    if (this.roll.alter) return Object(l.a)(r, this.roll.alter.type, this.roll.alter.value)
                                }
                            }
                            return r
                        }
                    }, {
                        key: "getStrokeColor",
                        value: function() {
                            var t, e;
                            return null !== (e = null !== (t = this.bubble.color) && void 0 !== t ? t : Object(i.e)(this.strokeColor)) && void 0 !== e ? e : this.getFillColor()
                        }
                    }, {
                        key: "destroy",
                        value: function(t) {
                            if (this.destroyed = !0, this.bubble.inRange = !1, !this.unbreakable) {
                                this.destroyed = !0, this.bubble.inRange = !1;
                                var e, r = h(this.container.plugins);
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        var n = f(e.value, 2)[1];
                                        n.particleDestroyed && n.particleDestroyed(this, t)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                                t || "split" === this.options.destroy.mode && this.split()
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.opacity && (this.opacity.loops = 0), this.size.loops = 0
                        }
                    }, {
                        key: "split",
                        value: function() {
                            var t = this.options.destroy.split;
                            if (!(t.count >= 0 && this.splitCount++ > t.count))
                                for (var e = Object(n.o)(t.rate.value), r = 0; r < e; r++) this.container.particles.addSplitParticle(this)
                        }
                    }, {
                        key: "calcPosition",
                        value: function(t, e, r) {
                            var i, o, a, c, s, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                p = h(t.plugins);
                            try {
                                for (p.s(); !(s = p.n()).done;) {
                                    var v = f(s.value, 2),
                                        d = v[1],
                                        y = void 0 !== d.particlePosition ? d.particlePosition(e, this) : void 0;
                                    if (void 0 !== y) return u.a.create(y.x, y.y, r)
                                }
                            } catch (t) {
                                p.e(t)
                            } finally {
                                p.f()
                            }
                            var m = t.canvas.size,
                                b = Object(n.b)({
                                    size: m,
                                    position: e
                                }),
                                w = u.a.create(b.x, b.y, r),
                                x = this.getRadius(),
                                k = this.options.move.outModes,
                                O = function(e) {
                                    g({
                                        outMode: e,
                                        checkModes: ["bounce", "bounce-horizontal"],
                                        coord: w.x,
                                        maxCoord: t.canvas.size.width,
                                        setCb: function(t) {
                                            return w.x += t
                                        },
                                        radius: x
                                    })
                                },
                                E = function(e) {
                                    g({
                                        outMode: e,
                                        checkModes: ["bounce", "bounce-vertical"],
                                        coord: w.y,
                                        maxCoord: t.canvas.size.height,
                                        setCb: function(t) {
                                            return w.y += t
                                        },
                                        radius: x
                                    })
                                };
                            return O(null !== (i = k.left) && void 0 !== i ? i : k.default), O(null !== (o = k.right) && void 0 !== o ? o : k.default), E(null !== (a = k.top) && void 0 !== a ? a : k.default), E(null !== (c = k.bottom) && void 0 !== c ? c : k.default), this.checkOverlap(w, l) ? this.calcPosition(t, void 0, r, l + 1) : w
                        }
                    }, {
                        key: "checkOverlap",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                r = this.options.collisions,
                                i = this.getRadius();
                            if (!r.enable) return !1;
                            var o = r.overlap;
                            if (o.enable) return !1;
                            var a = o.retries;
                            if (a >= 0 && e > a) throw new Error("Particle is overlapping and can't be placed");
                            var c, s = !1,
                                u = h(this.container.particles.array);
                            try {
                                for (u.s(); !(c = u.n()).done;) {
                                    var l = c.value;
                                    if (Object(n.i)(t, l.position) < i + l.getRadius()) {
                                        s = !0;
                                        break
                                    }
                                }
                            } catch (t) {
                                u.e(t)
                            } finally {
                                u.f()
                            }
                            return s
                        }
                    }, {
                        key: "calculateVelocity",
                        value: function() {
                            var t = Object(n.k)(this.direction).copy(),
                                e = this.options.move,
                                r = Math.PI / 180 * Object(n.o)(e.angle.value),
                                i = Math.PI / 180 * Object(n.o)(e.angle.offset),
                                o = {
                                    left: i - r / 2,
                                    right: i + r / 2
                                };
                            return e.straight || (t.angle += Object(n.r)(Object(n.s)(o.left, o.right))), e.random && "number" == typeof e.speed && (t.length *= Math.random()), t
                        }
                    }, {
                        key: "loadShapeData",
                        value: function(t, e) {
                            var r = t.options[this.shape];
                            if (r) return Object(o.h)({}, r instanceof Array ? Object(o.o)(r, this.id, e) : r)
                        }
                    }, {
                        key: "loadLife",
                        value: function() {
                            var t = this.container,
                                e = this.options,
                                r = e.life,
                                i = {
                                    delay: t.retina.reduceFactor ? Object(n.o)(r.delay.value) * (r.delay.sync ? 1 : Math.random()) / t.retina.reduceFactor * 1e3 : 0,
                                    delayTime: 0,
                                    duration: t.retina.reduceFactor ? Object(n.o)(r.duration.value) * (r.duration.sync ? 1 : Math.random()) / t.retina.reduceFactor * 1e3 : 0,
                                    time: 0,
                                    count: e.life.count
                                };
                            return i.duration <= 0 && (i.duration = -1), i.count <= 0 && (i.count = -1), i
                        }
                    }]) && d(e.prototype, r), p && d(e, p), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
            y = new WeakMap
        },
        FDSO: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return y
            }));
            var n = r("j5nf"),
                i = r("c8kP"),
                o = r("3wFu");

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
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
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
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
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function u() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                u = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
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
                    var i = e && e.prototype instanceof p ? e : p,
                        o = Object.create(i.prototype),
                        a = new j(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var c = k(a, r);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var s = f(t, e, r);
                                if ("normal" === s.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue;
                                    return {
                                        value: s.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                            }
                        }
                    }(t, r, a), o
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
                var h = {};

                function p() {}

                function v() {}

                function d() {}
                var y = {};
                s(y, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    b = m && m(m(P([])));
                b && b !== e && r.call(b, i) && (y = b);
                var g = d.prototype = p.prototype = Object.create(y);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var n;
                    this._invoke = function(i, o) {
                        function c() {
                            return new e((function(n, c) {
                                ! function n(i, o, c, s) {
                                    var u = f(t[i], t, o);
                                    if ("throw" !== u.type) {
                                        var l = u.arg,
                                            h = l.value;
                                        return h && "object" == a(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                            n("next", t, c, s)
                                        }), (function(t) {
                                            n("throw", t, c, s)
                                        })) : e.resolve(h).then((function(t) {
                                            l.value = t, c(l)
                                        }), (function(t) {
                                            return n("throw", t, c, s)
                                        }))
                                    }
                                    s(u.arg)
                                }(i, o, n, c)
                            }))
                        }
                        return n = n ? n.then(c, c) : c()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
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
                return v.prototype = d, s(g, "constructor", d), s(d, "constructor", v), v.displayName = s(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(x.prototype), s(x.prototype, o, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(l(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), s(g, c, "Generator"), s(g, i, (function() {
                    return this
                })), s(g, "toString", (function() {
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
                }, t.values = P, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var c = r.call(o, "catchLoc"),
                                    s = r.call(o, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    E(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function l(t, e, r, n, i, o, a) {
                try {
                    var c = t[o](a),
                        s = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(n, i)
            }

            function f(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = t.apply(e, r);

                        function a(t) {
                            l(o, n, i, a, c, "next", t)
                        }

                        function c(t) {
                            l(o, n, i, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function h(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var p, v = function(t, e, r, n, i) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
                },
                d = function(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                };
            var y = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), p.set(this, void 0), v(this, p, e, "f")
                }
                var e, r, a, s, l, y, m, b;
                return e = t, (r = [{
                    key: "dom",
                    value: function() {
                        return d(this, p, "f").domArray
                    }
                }, {
                    key: "domItem",
                    value: function(t) {
                        var e = this.dom(),
                            r = e[t];
                        if (r && !r.destroyed) return r;
                        e.splice(t, 1)
                    }
                }, {
                    key: "loadOptions",
                    value: (b = f(u().mark((function t(e) {
                        var r, a, c, s, l, f, h, v, y, m, b, g, w, x;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return s = null !== (r = e.tagId) && void 0 !== r ? r : "tsparticles".concat(Math.floor(1e4 * Math.random())), l = e.options, f = e.index, (h = null !== (a = e.element) && void 0 !== a ? a : document.getElementById(s)) || ((h = document.createElement("div")).id = s, null === (c = document.querySelector("body")) || void 0 === c || c.append(h)), v = l instanceof Array ? Object(o.o)(l, f) : l, y = this.dom(), (m = y.findIndex((function(t) {
                                        return t.id === s
                                    }))) >= 0 && (b = this.domItem(m)) && !b.destroyed && (b.destroy(), y.splice(m, 1)), "canvas" === h.tagName.toLowerCase() ? (g = h).dataset[n.a.generatedAttribute] = "false" : (w = h.getElementsByTagName("canvas")).length ? (g = w[0]).dataset[n.a.generatedAttribute] = "false" : ((g = document.createElement("canvas")).dataset[n.a.generatedAttribute] = "true", g.style.width = "100%", g.style.height = "100%", h.appendChild(g)), x = new i.a(d(this, p, "f"), s, v), m >= 0 ? y.splice(m, 0, x) : y.push(x), x.canvas.loadCanvas(g), t.next = 11, x.start();
                                case 11:
                                    return t.abrupt("return", x);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return b.apply(this, arguments)
                    })
                }, {
                    key: "loadRemoteOptions",
                    value: (m = f(u().mark((function t(e) {
                        var r, n, i, a, c;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = e.url, n = e.index, i = r instanceof Array ? Object(o.o)(r, n) : r) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5, fetch(i);
                                case 5:
                                    if ((a = t.sent).ok) {
                                        t.next = 9;
                                        break
                                    }
                                    return s = a.status, console.error("Error tsParticles - fetch status: ".concat(s)), console.error("Error tsParticles - File config not found"), t.abrupt("return");
                                case 9:
                                    return t.next = 11, a.json();
                                case 11:
                                    return c = t.sent, t.abrupt("return", this.loadOptions({
                                        tagId: e.tagId,
                                        element: e.element,
                                        index: n,
                                        options: c
                                    }));
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                            var s
                        }), t, this)
                    }))), function(t) {
                        return m.apply(this, arguments)
                    })
                }, {
                    key: "load",
                    value: function(t, e, r) {
                        var n = {
                            index: r
                        };
                        return "string" == typeof t ? n.tagId = t : n.options = t, "number" == typeof e ? n.index = null != e ? e : n.index : n.options = null != e ? e : n.options, this.loadOptions(n)
                    }
                }, {
                    key: "set",
                    value: (y = f(u().mark((function t(e, r, n, i) {
                        var o;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = {
                                        index: i
                                    }, "string" == typeof e ? o.tagId = e : o.element = e, r instanceof HTMLElement ? o.element = r : o.options = r, "number" == typeof n ? o.index = n : o.options = null != n ? n : o.options, t.abrupt("return", this.loadOptions(o));
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t, e, r, n) {
                        return y.apply(this, arguments)
                    })
                }, {
                    key: "loadJSON",
                    value: (l = f(u().mark((function t(e, r, n) {
                        var i, o;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return "number" == typeof r || void 0 === r ? i = e : (o = e, i = r), t.abrupt("return", this.loadRemoteOptions({
                                        tagId: o,
                                        url: i,
                                        index: n
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t, e, r) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "setJSON",
                    value: (s = f(u().mark((function t(e, r, n, i) {
                        var o, a, c, s;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e instanceof HTMLElement ? (s = e, o = r, c = n) : (a = e, s = r, o = n, c = i), t.abrupt("return", this.loadRemoteOptions({
                                        tagId: a,
                                        url: o,
                                        index: c,
                                        element: s
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t, e, r, n) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "setOnClickHandler",
                    value: function(t) {
                        var e = this.dom();
                        if (!e.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                        var r, n = c(e);
                        try {
                            for (n.s(); !(r = n.n()).done;) r.value.addClickHandler(t)
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    }
                }]) && h(e.prototype, r), a && h(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();
            p = new WeakMap
        },
        Psfb: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            r.d(e, "a", (function() {
                return o
            }));
            var o = i((function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.container = e, this.type = 1
            }))
        },
        U1gX: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return i
            }));
            var i = function() {
                function t(e, r) {
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), "number" != typeof e && e) this.x = e.x, this.y = e.y;
                    else {
                        if (void 0 === e || void 0 === r) throw new Error("tsParticles - Vector not initialized correctly");
                        this.x = e, this.y = r
                    }
                }
                var e, r, i;
                return e = t, i = [{
                    key: "clone",
                    value: function(e) {
                        return t.create(e.x, e.y)
                    }
                }, {
                    key: "create",
                    value: function(e, r) {
                        return new t(e, r)
                    }
                }, {
                    key: "origin",
                    get: function() {
                        return t.create(0, 0)
                    }
                }], (r = [{
                    key: "angle",
                    get: function() {
                        return Math.atan2(this.y, this.x)
                    },
                    set: function(t) {
                        this.updateFromAngle(t, this.length)
                    }
                }, {
                    key: "length",
                    get: function() {
                        return Math.sqrt(this.getLengthSq())
                    },
                    set: function(t) {
                        this.updateFromAngle(this.angle, t)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return t.create(this.x + e.x, this.y + e.y)
                    }
                }, {
                    key: "addTo",
                    value: function(t) {
                        this.x += t.x, this.y += t.y
                    }
                }, {
                    key: "sub",
                    value: function(e) {
                        return t.create(this.x - e.x, this.y - e.y)
                    }
                }, {
                    key: "subFrom",
                    value: function(t) {
                        this.x -= t.x, this.y -= t.y
                    }
                }, {
                    key: "mult",
                    value: function(e) {
                        return t.create(this.x * e, this.y * e)
                    }
                }, {
                    key: "multTo",
                    value: function(t) {
                        this.x *= t, this.y *= t
                    }
                }, {
                    key: "div",
                    value: function(e) {
                        return t.create(this.x / e, this.y / e)
                    }
                }, {
                    key: "divTo",
                    value: function(t) {
                        this.x /= t, this.y /= t
                    }
                }, {
                    key: "distanceTo",
                    value: function(t) {
                        return this.sub(t).length
                    }
                }, {
                    key: "getLengthSq",
                    value: function() {
                        return Math.pow(this.x, 2) + Math.pow(this.y, 2)
                    }
                }, {
                    key: "distanceToSq",
                    value: function(t) {
                        return this.sub(t).getLengthSq()
                    }
                }, {
                    key: "manhattanDistanceTo",
                    value: function(t) {
                        return Math.abs(t.x - this.x) + Math.abs(t.y - this.y)
                    }
                }, {
                    key: "copy",
                    value: function() {
                        return t.clone(this)
                    }
                }, {
                    key: "setTo",
                    value: function(t) {
                        this.x = t.x, this.y = t.y
                    }
                }, {
                    key: "rotate",
                    value: function(e) {
                        return t.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e))
                    }
                }, {
                    key: "updateFromAngle",
                    value: function(t, e) {
                        this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
                    }
                }]) && n(e.prototype, r), i && n(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        cfMx: function(t, e, r) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function o(t, e) {
                return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function a(t) {
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
                    var r, n = s(t);
                    if (e) {
                        var i = s(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return c(this, r)
                }
            }

            function c(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            r.d(e, "a", (function() {
                return u
            }));
            var u = function(t) {
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
                    }), e && o(t, e)
                }(s, t);
                var e, r, n, c = a(s);

                function s(t, e, r, n) {
                    var i;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (i = c.call(this, t, e)).size = {
                        height: n,
                        width: r
                    }, i
                }
                return e = s, (r = [{
                    key: "contains",
                    value: function(t) {
                        var e = this.size.width,
                            r = this.size.height,
                            n = this.position;
                        return t.x >= n.x && t.x <= n.x + e && t.y >= n.y && t.y <= n.y + r
                    }
                }, {
                    key: "intersects",
                    value: function(t) {
                        var e = t,
                            r = t,
                            n = this.size.width,
                            i = this.size.height,
                            o = this.position,
                            a = t.position;
                        if (void 0 !== r.radius) return r.intersects(this);
                        if (!e.size) return !1;
                        var c = e.size,
                            s = c.width,
                            u = c.height;
                        return a.x < o.x + n && a.x + s > o.x && a.y < o.y + i && a.y + u > o.y
                    }
                }]) && i(e.prototype, r), n && i(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), s
            }(r("mfN2").a)
        },
        dStz: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            }));
            var n = r("Bvs5"),
                i = r("3wFu");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var a = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, a;
                return e = t, (r = [{
                    key: "init",
                    value: function() {
                        var t = this,
                            e = this.container,
                            r = e.actualOptions;
                        this.pixelRatio = !r.detectRetina || Object(i.n)() ? 1 : window.devicePixelRatio;
                        var o = this.container.actualOptions.motion;
                        if (o && (o.disable || o.reduce.value))
                            if (Object(i.n)() || "undefined" == typeof matchMedia || !matchMedia) this.reduceFactor = 1;
                            else {
                                var a = matchMedia("(prefers-reduced-motion: reduce)");
                                if (a) {
                                    this.handleMotionChange(a);
                                    var c = function() {
                                        t.handleMotionChange(a), e.refresh().catch((function() {}))
                                    };
                                    void 0 !== a.addEventListener ? a.addEventListener("change", c) : void 0 !== a.addListener && a.addListener(c)
                                }
                            }
                        else this.reduceFactor = 1;
                        var s = this.pixelRatio;
                        if (e.canvas.element) {
                            var u = e.canvas.element;
                            e.canvas.size.width = u.offsetWidth * s, e.canvas.size.height = u.offsetHeight * s
                        }
                        var l = r.particles;
                        this.attractDistance = Object(n.o)(l.move.attract.distance) * s, this.linksDistance = l.links.distance * s, this.linksWidth = l.links.width * s, this.sizeAnimationSpeed = Object(n.o)(l.size.animation.speed) * s, this.maxSpeed = Object(n.o)(l.move.gravity.maxSpeed) * s;
                        var f = r.interactivity.modes;
                        this.connectModeDistance = f.connect.distance * s, this.connectModeRadius = f.connect.radius * s, this.grabModeDistance = f.grab.distance * s, this.repulseModeDistance = f.repulse.distance * s, this.bounceModeDistance = f.bounce.distance * s, this.attractModeDistance = f.attract.distance * s, this.slowModeRadius = f.slow.radius * s, this.bubbleModeDistance = f.bubble.distance * s, f.bubble.size && (this.bubbleModeSize = f.bubble.size * s)
                    }
                }, {
                    key: "initParticle",
                    value: function(t) {
                        var e = t.options,
                            r = this.pixelRatio,
                            i = e.move.distance,
                            o = t.retina;
                        o.attractDistance = Object(n.o)(e.move.attract.distance) * r, o.linksDistance = e.links.distance * r, o.linksWidth = e.links.width * r, o.moveDrift = Object(n.o)(e.move.drift) * r, o.moveSpeed = Object(n.o)(e.move.speed) * r, o.sizeAnimationSpeed = Object(n.o)(e.size.animation.speed) * r;
                        var a = o.maxDistance;
                        a.horizontal = void 0 !== i.horizontal ? i.horizontal * r : void 0, a.vertical = void 0 !== i.vertical ? i.vertical * r : void 0, o.maxSpeed = Object(n.o)(e.move.gravity.maxSpeed) * r
                    }
                }, {
                    key: "handleMotionChange",
                    value: function(t) {
                        var e = this.container.actualOptions;
                        if (t.matches) {
                            var r = e.motion;
                            this.reduceFactor = r.disable ? 0 : r.reduce.value ? 1 / r.reduce.factor : 1
                        } else this.reduceFactor = 1
                    }
                }]) && o(e.prototype, r), a && o(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        fcVS: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            r.d(e, "a", (function() {
                return o
            }));
            var o = i((function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.container = e, this.type = 0
            }))
        },
        hZ54: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return k
            }));
            var n = r("Bvs5"),
                i = r("jiOm"),
                o = r("FBI6"),
                a = r("z/gc"),
                c = r("ClS3"),
                s = r("ibU6"),
                u = r("cfMx");

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, n) {
                    var i = e && e.prototype instanceof p ? e : p,
                        o = Object.create(i.prototype),
                        a = new j(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var c = k(a, r);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var s = u(t, e, r);
                                if ("normal" === s.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue;
                                    return {
                                        value: s.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                            }
                        }
                    }(t, r, a), o
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
                t.wrap = s;
                var h = {};

                function p() {}

                function v() {}

                function d() {}
                var y = {};
                c(y, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    b = m && m(m(P([])));
                b && b !== e && r.call(b, i) && (y = b);
                var g = d.prototype = p.prototype = Object.create(y);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var n;
                    this._invoke = function(i, o) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(i, o, a, c) {
                                    var s = u(t[i], t, o);
                                    if ("throw" !== s.type) {
                                        var f = s.arg,
                                            h = f.value;
                                        return h && "object" == l(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : e.resolve(h).then((function(t) {
                                            f.value = t, a(f)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(s.arg)
                                }(i, o, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
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
                return v.prototype = d, c(g, "constructor", d), c(d, "constructor", v), v.displayName = c(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(x.prototype), c(x.prototype, o, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(s(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), c(g, a, "Generator"), c(g, i, (function() {
                    return this
                })), c(g, "toString", (function() {
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
                }, t.values = P, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var c = r.call(o, "catchLoc"),
                                    s = r.call(o, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    E(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function h(t, e, r, n, i, o, a) {
                try {
                    var c = t[o](a),
                        s = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(n, i)
            }

            function p(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = t.apply(e, r);

                        function a(t) {
                            h(o, n, i, a, c, "next", t)
                        }

                        function c(t) {
                            h(o, n, i, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function v(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, i, o = [],
                        a = !0,
                        c = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (o.push(n.value), !e || o.length !== e); a = !0);
                    } catch (t) {
                        c = !0, i = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                    return o
                }(t, e) || y(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = y(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
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
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function y(t, e) {
                if (t) {
                    if ("string" == typeof t) return m(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(t, e) : void 0
                }
            }

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function b(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var g, w = function(t, e, r, n, i) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
                },
                x = function(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                },
                k = function() {
                    function t(e, r) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.container = r, g.set(this, void 0), w(this, g, e, "f"), this.nextId = 0, this.array = [], this.zArray = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.freqs = {
                            links: new Map,
                            triangles: new Map
                        }, this.interactionManager = new i.a(x(this, g, "f"), r);
                        var n = this.container.canvas.size;
                        this.linksColors = new Map, this.quadTree = new s.a(new u.a(-n.width / 4, -n.height / 4, 3 * n.width / 2, 3 * n.height / 2), 4), this.movers = x(this, g, "f").plugins.getMovers(r, !0), this.updaters = x(this, g, "f").plugins.getUpdaters(r, !0)
                    }
                    var e, r, l, h, y, m;
                    return e = t, (r = [{
                        key: "count",
                        get: function() {
                            return this.array.length
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t, e = this.container,
                                r = e.actualOptions;
                            this.lastZIndex = 0, this.needsSort = !1, this.freqs.links = new Map, this.freqs.triangles = new Map;
                            var n = !1;
                            this.updaters = x(this, g, "f").plugins.getUpdaters(e, !0), this.interactionManager.init();
                            var i, o = d(e.plugins);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var a = v(i.value, 2)[1];
                                    if (void 0 !== a.particlesInitialization && (n = a.particlesInitialization()), n) break
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            if (this.addManualParticles(), !n) {
                                for (var c in r.particles.groups)
                                    for (var s = r.particles.groups[c], u = this.count, l = 0; l < (null === (t = s.number) || void 0 === t ? void 0 : t.value) && u < r.particles.number.value; u++, l++) this.addParticle(void 0, s, c);
                                for (var f = this.count; f < r.particles.number.value; f++) this.addParticle()
                            }
                            e.pathGenerator.init(e)
                        }
                    }, {
                        key: "redraw",
                        value: (m = p(f().mark((function t() {
                            return f().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.clear(), this.init(), t.next = 4, this.draw({
                                            value: 0,
                                            factor: 0
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "removeAt",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                r = arguments.length > 2 ? arguments[2] : void 0,
                                n = arguments.length > 3 ? arguments[3] : void 0;
                            if (t >= 0 && t <= this.count)
                                for (var i = 0, o = t; i < e && o < this.count; o++) {
                                    var a = this.array[o];
                                    if (a && a.group === r) {
                                        a.destroy(n), this.array.splice(o--, 1);
                                        var c = this.zArray.indexOf(a);
                                        this.zArray.splice(c, 1), i++
                                    }
                                }
                        }
                    }, {
                        key: "remove",
                        value: function(t, e, r) {
                            this.removeAt(this.array.indexOf(t), void 0, e, r)
                        }
                    }, {
                        key: "update",
                        value: (y = p(f().mark((function t(e) {
                            var r, n, i, o, a, s, u, l, h, p, y, m, b, g, w, x, k, O, E, j, P, S, L, z, T;
                            return f().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = this.container, n = [], r.pathGenerator.update(), i = d(r.plugins);
                                        try {
                                            for (i.s(); !(o = i.n()).done;) a = v(o.value, 2), void 0 !== (s = a[1]).update && s.update(e)
                                        } catch (t) {
                                            i.e(t)
                                        } finally {
                                            i.f()
                                        }
                                        u = d(this.array), t.prev = 5, u.s();
                                    case 7:
                                        if ((l = u.n()).done) {
                                            t.next = 39;
                                            break
                                        }
                                        h = l.value, (p = r.canvas.resizeFactor) && !h.ignoresResizeRatio && (h.position.x *= p.width, h.position.y *= p.height), h.ignoresResizeRatio = !1, h.bubble.inRange = !1, y = d(this.container.plugins), t.prev = 14, y.s();
                                    case 16:
                                        if ((m = y.n()).done) {
                                            t.next = 23;
                                            break
                                        }
                                        if (b = v(m.value, 2), g = b[1], !h.destroyed) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("break", 23);
                                    case 20:
                                        g.particleUpdate && g.particleUpdate(h, e);
                                    case 21:
                                        t.next = 16;
                                        break;
                                    case 23:
                                        t.next = 28;
                                        break;
                                    case 25:
                                        t.prev = 25, t.t0 = t.catch(14), y.e(t.t0);
                                    case 28:
                                        return t.prev = 28, y.f(), t.finish(28);
                                    case 31:
                                        w = d(this.movers);
                                        try {
                                            for (w.s(); !(x = w.n()).done;)(k = x.value).isEnabled(h) && k.move(h, e)
                                        } catch (t) {
                                            w.e(t)
                                        } finally {
                                            w.f()
                                        }
                                        if (!h.destroyed) {
                                            t.next = 36;
                                            break
                                        }
                                        return n.push(h), t.abrupt("continue", 37);
                                    case 36:
                                        this.quadTree.insert(new c.a(h.getPosition(), h));
                                    case 37:
                                        t.next = 7;
                                        break;
                                    case 39:
                                        t.next = 44;
                                        break;
                                    case 41:
                                        t.prev = 41, t.t1 = t.catch(5), u.e(t.t1);
                                    case 44:
                                        return t.prev = 44, u.f(), t.finish(44);
                                    case 47:
                                        for (O = 0, E = n; O < E.length; O++) j = E[O], this.remove(j);
                                        return t.next = 50, this.interactionManager.externalInteract(e);
                                    case 50:
                                        P = d(r.particles.array), t.prev = 51, P.s();
                                    case 53:
                                        if ((S = P.n()).done) {
                                            t.next = 62;
                                            break
                                        }
                                        L = S.value, z = d(this.updaters);
                                        try {
                                            for (z.s(); !(T = z.n()).done;) T.value.update(L, e)
                                        } catch (t) {
                                            z.e(t)
                                        } finally {
                                            z.f()
                                        }
                                        if (L.destroyed || L.spawning) {
                                            t.next = 60;
                                            break
                                        }
                                        return t.next = 60, this.interactionManager.particlesInteract(L, e);
                                    case 60:
                                        t.next = 53;
                                        break;
                                    case 62:
                                        t.next = 67;
                                        break;
                                    case 64:
                                        t.prev = 64, t.t2 = t.catch(51), P.e(t.t2);
                                    case 67:
                                        return t.prev = 67, P.f(), t.finish(67);
                                    case 70:
                                        delete r.canvas.resizeFactor;
                                    case 71:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 41, 44, 47],
                                [14, 25, 28, 31],
                                [51, 64, 67, 70]
                            ])
                        }))), function(t) {
                            return y.apply(this, arguments)
                        })
                    }, {
                        key: "draw",
                        value: (h = p(f().mark((function t(e) {
                            var r, n, i, o, a, c, l, h;
                            return f().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = this.container, n = this.container.canvas.size, this.quadTree = new s.a(new u.a(-n.width / 4, -n.height / 4, 3 * n.width / 2, 3 * n.height / 2), 4), r.canvas.clear(), t.next = 5, this.update(e);
                                    case 5:
                                        this.needsSort && (this.zArray.sort((function(t, e) {
                                            return e.position.z - t.position.z || t.id - e.id
                                        })), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1), i = d(r.plugins);
                                        try {
                                            for (i.s(); !(o = i.n()).done;) a = v(o.value, 2), c = a[1], r.canvas.drawPlugin(c, e)
                                        } catch (t) {
                                            i.e(t)
                                        } finally {
                                            i.f()
                                        }
                                        l = d(this.zArray);
                                        try {
                                            for (l.s(); !(h = l.n()).done;) h.value.draw(e)
                                        } catch (t) {
                                            l.e(t)
                                        } finally {
                                            l.f()
                                        }
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return h.apply(this, arguments)
                        })
                    }, {
                        key: "clear",
                        value: function() {
                            this.array = [], this.zArray = []
                        }
                    }, {
                        key: "push",
                        value: function(t, e, r, n) {
                            this.pushing = !0;
                            for (var i = 0; i < t; i++) this.addParticle(null == e ? void 0 : e.position, r, n);
                            this.pushing = !1
                        }
                    }, {
                        key: "addParticle",
                        value: function(t, e, r) {
                            var n = this.container,
                                i = n.actualOptions.particles.number.limit * n.density;
                            if (i > 0) {
                                var o = this.count + 1 - i;
                                o > 0 && this.removeQuantity(o)
                            }
                            return this.pushParticle(t, e, r)
                        }
                    }, {
                        key: "addSplitParticle",
                        value: function(t) {
                            var e = t.options.destroy.split,
                                r = new a.a;
                            r.load(t.options);
                            var i = Object(n.o)(e.factor.value);
                            r.color.load({
                                value: {
                                    hsl: t.getFillColor()
                                }
                            }), "number" == typeof r.size.value ? r.size.value /= i : (r.size.value.min /= i, r.size.value.max /= i), r.load(e.particles);
                            var o = e.sizeOffset ? Object(n.s)(-t.size.value, t.size.value) : 0,
                                c = {
                                    x: t.position.x + Object(n.r)(o),
                                    y: t.position.y + Object(n.r)(o)
                                };
                            return this.pushParticle(c, r, t.group, (function(e) {
                                return !(e.size.value < .5 || (e.velocity.length = Object(n.r)(Object(n.s)(t.velocity.length, e.velocity.length)), e.splitCount = t.splitCount + 1, e.unbreakable = !0, setTimeout((function() {
                                    e.unbreakable = !1
                                }), 500), 0))
                            }))
                        }
                    }, {
                        key: "removeQuantity",
                        value: function(t, e) {
                            this.removeAt(0, t, e)
                        }
                    }, {
                        key: "getLinkFrequency",
                        value: function(t, e) {
                            var r = Object(n.s)(t.id, e.id),
                                i = "".concat(Object(n.n)(r), "_").concat(Object(n.m)(r)),
                                o = this.freqs.links.get(i);
                            return void 0 === o && (o = Math.random(), this.freqs.links.set(i, o)), o
                        }
                    }, {
                        key: "getTriangleFrequency",
                        value: function(t, e, r) {
                            var n = [t.id, e.id, r.id],
                                i = n[0],
                                o = n[1],
                                a = n[2];
                            if (i > o) {
                                var c = [i, o];
                                o = c[0], i = c[1]
                            }
                            if (o > a) {
                                var s = [o, a];
                                a = s[0], o = s[1]
                            }
                            if (i > a) {
                                var u = [i, a];
                                a = u[0], i = u[1]
                            }
                            var l = "".concat(i, "_").concat(o, "_").concat(a),
                                f = this.freqs.triangles.get(l);
                            return void 0 === f && (f = Math.random(), this.freqs.triangles.set(l, f)), f
                        }
                    }, {
                        key: "addManualParticles",
                        value: function() {
                            var t, e = this.container,
                                r = d(e.actualOptions.manualParticles);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var i = t.value;
                                    this.addParticle(Object(n.d)({
                                        size: e.canvas.size,
                                        position: i.position
                                    }), i.options)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        }
                    }, {
                        key: "setDensity",
                        value: function() {
                            var t = this.container.actualOptions;
                            for (var e in t.particles.groups) this.applyDensity(t.particles.groups[e], 0, e);
                            this.applyDensity(t.particles, t.manualParticles.length)
                        }
                    }, {
                        key: "handleClickMode",
                        value: function(t) {
                            this.interactionManager.handleClickMode(t)
                        }
                    }, {
                        key: "applyDensity",
                        value: function(t, e, r) {
                            var n;
                            if (null === (n = t.number.density) || void 0 === n ? void 0 : n.enable) {
                                var i = t.number,
                                    o = this.initDensityFactor(i.density),
                                    a = i.value,
                                    c = i.limit > 0 ? i.limit : a,
                                    s = Math.min(a, c) * o + e,
                                    u = Math.min(this.count, this.array.filter((function(t) {
                                        return t.group === r
                                    })).length);
                                this.limit = i.limit * o, u < s ? this.push(Math.abs(s - u), void 0, t, r) : u > s && this.removeQuantity(u - s, r)
                            }
                        }
                    }, {
                        key: "initDensityFactor",
                        value: function(t) {
                            var e = this.container;
                            if (!e.canvas.element || !t.enable) return 1;
                            var r = e.canvas.element,
                                n = e.retina.pixelRatio;
                            return r.width * r.height / (t.factor * Math.pow(n, 2) * t.area)
                        }
                    }, {
                        key: "pushParticle",
                        value: function(t, e, r, n) {
                            try {
                                var i = new o.a(x(this, g, "f"), this.nextId, this.container, t, e, r),
                                    a = !0;
                                if (n && (a = n(i)), !a) return;
                                return this.array.push(i), this.zArray.push(i), this.nextId++, i
                            } catch (t) {
                                return void console.warn("error adding particle: ".concat(t))
                            }
                        }
                    }]) && b(e.prototype, r), l && b(e, l), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
            g = new WeakMap
        },
        hs3Q: function(t, e, r) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function o() {
                return (o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = a(t, e);
                    if (n) {
                        var i = Object.getOwnPropertyDescriptor(n, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : r) : i.value
                    }
                }).apply(this, arguments)
            }

            function a(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                return t
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function s(t) {
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
                    var r, n = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }

            function u(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function l(t) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            r.d(e, "a", (function() {
                return f
            }));
            var f = function(t) {
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
                    }), e && c(t, e)
                }(u, t);
                var e, r, n, a = s(u);

                function u(t, e, r) {
                    var n;
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), n = a.call(this, t, e), "number" != typeof t && t) n.z = t.z;
                    else {
                        if (void 0 === r) throw new Error("tsParticles - Vector not initialized correctly");
                        n.z = r
                    }
                    return n
                }
                return e = u, n = [{
                    key: "clone",
                    value: function(t) {
                        return u.create(t.x, t.y, t.z)
                    }
                }, {
                    key: "create",
                    value: function(t, e, r) {
                        return new u(t, e, r)
                    }
                }, {
                    key: "origin",
                    get: function() {
                        return u.create(0, 0, 0)
                    }
                }], (r = [{
                    key: "add",
                    value: function(t) {
                        return t instanceof u ? u.create(this.x + t.x, this.y + t.y, this.z + t.z) : o(l(u.prototype), "add", this).call(this, t)
                    }
                }, {
                    key: "addTo",
                    value: function(t) {
                        o(l(u.prototype), "addTo", this).call(this, t), t instanceof u && (this.z += t.z)
                    }
                }, {
                    key: "sub",
                    value: function(t) {
                        return t instanceof u ? u.create(this.x - t.x, this.y - t.y, this.z - t.z) : o(l(u.prototype), "sub", this).call(this, t)
                    }
                }, {
                    key: "subFrom",
                    value: function(t) {
                        o(l(u.prototype), "subFrom", this).call(this, t), t instanceof u && (this.z -= t.z)
                    }
                }, {
                    key: "mult",
                    value: function(t) {
                        return u.create(this.x * t, this.y * t, this.z * t)
                    }
                }, {
                    key: "multTo",
                    value: function(t) {
                        o(l(u.prototype), "multTo", this).call(this, t), this.z *= t
                    }
                }, {
                    key: "div",
                    value: function(t) {
                        return u.create(this.x / t, this.y / t, this.z / t)
                    }
                }, {
                    key: "divTo",
                    value: function(t) {
                        o(l(u.prototype), "divTo", this).call(this, t), this.z /= t
                    }
                }, {
                    key: "copy",
                    value: function() {
                        return u.clone(this)
                    }
                }, {
                    key: "setTo",
                    value: function(t) {
                        o(l(u.prototype), "setTo", this).call(this, t);
                        var e = t;
                        void 0 !== e.z && (this.z = e.z)
                    }
                }]) && i(e.prototype, r), n && i(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), u
            }(r("U1gX").a)
        },
        ibU6: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return l
            }));
            var n = r("mZtP"),
                i = r("Avkg"),
                o = r("cfMx"),
                a = r("Bvs5");

            function c(t, e) {
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
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
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
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var l = function() {
                function t(e, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.rectangle = e, this.capacity = r, this.points = [], this.divided = !1
                }
                var e, r, s;
                return e = t, (r = [{
                    key: "insert",
                    value: function(t) {
                        var e, r, n, i, o;
                        return !!this.rectangle.contains(t.position) && (this.points.length < this.capacity ? (this.points.push(t), !0) : (this.divided || this.subdivide(), null !== (o = (null === (e = this.northEast) || void 0 === e ? void 0 : e.insert(t)) || (null === (r = this.northWest) || void 0 === r ? void 0 : r.insert(t)) || (null === (n = this.southEast) || void 0 === n ? void 0 : n.insert(t)) || (null === (i = this.southWest) || void 0 === i ? void 0 : i.insert(t))) && void 0 !== o && o))
                    }
                }, {
                    key: "queryCircle",
                    value: function(t, e) {
                        return this.query(new n.a(t.x, t.y, e))
                    }
                }, {
                    key: "queryCircleWarp",
                    value: function(t, e, r) {
                        var n = r,
                            o = r;
                        return this.query(new i.a(t.x, t.y, e, void 0 !== n.canvas ? n.canvas.size : o))
                    }
                }, {
                    key: "queryRectangle",
                    value: function(t, e) {
                        return this.query(new o.a(t.x, t.y, e.width, e.height))
                    }
                }, {
                    key: "query",
                    value: function(t, e) {
                        var r, n, i, o, s = null != e ? e : [];
                        if (!t.intersects(this.rectangle)) return [];
                        var u, l = c(this.points);
                        try {
                            for (l.s(); !(u = l.n()).done;) {
                                var f = u.value;
                                !t.contains(f.position) && Object(a.i)(t.position, f.position) > f.particle.getRadius() || s.push(f.particle)
                            }
                        } catch (t) {
                            l.e(t)
                        } finally {
                            l.f()
                        }
                        return this.divided && (null === (r = this.northEast) || void 0 === r || r.query(t, s), null === (n = this.northWest) || void 0 === n || n.query(t, s), null === (i = this.southEast) || void 0 === i || i.query(t, s), null === (o = this.southWest) || void 0 === o || o.query(t, s)), s
                    }
                }, {
                    key: "subdivide",
                    value: function() {
                        var e = this.rectangle.position.x,
                            r = this.rectangle.position.y,
                            n = this.rectangle.size.width,
                            i = this.rectangle.size.height,
                            a = this.capacity;
                        this.northEast = new t(new o.a(e, r, n / 2, i / 2), a), this.northWest = new t(new o.a(e + n / 2, r, n / 2, i / 2), a), this.southEast = new t(new o.a(e, r + i / 2, n / 2, i / 2), a), this.southWest = new t(new o.a(e + n / 2, r + i / 2, n / 2, i / 2), a), this.divided = !0
                    }
                }]) && u(e.prototype, r), s && u(e, s), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        j5nf: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            r.d(e, "a", (function() {
                return o
            }));
            var o = i((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }));
            o.generatedAttribute = "generated", o.randomColorValue = "random", o.midColorValue = "mid", o.touchEndEvent = "touchend", o.mouseDownEvent = "mousedown", o.mouseUpEvent = "mouseup", o.mouseMoveEvent = "mousemove", o.touchStartEvent = "touchstart", o.touchMoveEvent = "touchmove", o.mouseLeaveEvent = "mouseleave", o.mouseOutEvent = "mouseout", o.touchCancelEvent = "touchcancel", o.resizeEvent = "resize", o.visibilityChangeEvent = "visibilitychange", o.noPolygonDataLoaded = "No polygon data loaded.", o.noPolygonFound = "No polygon found, you need to specify SVG url in config."
        },
        jPhR: function(t, e, r) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                i = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    c = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";

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

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof p ? e : p,
                        o = Object.create(i.prototype),
                        a = new j(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var c = k(a, r);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var s = f(t, e, r);
                                if ("normal" === s.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue;
                                    return {
                                        value: s.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                            }
                        }
                    }(t, r, a), o
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
                var h = {};

                function p() {}

                function v() {}

                function d() {}
                var y = {};
                u(y, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    b = m && m(m(P([])));
                b && b !== e && r.call(b, a) && (y = b);
                var g = d.prototype = p.prototype = Object.create(y);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var i;
                    this._invoke = function(o, a) {
                        function c() {
                            return new e((function(i, c) {
                                ! function i(o, a, c, s) {
                                    var u = f(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var l = u.arg,
                                            h = l.value;
                                        return h && "object" == n(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                            i("next", t, c, s)
                                        }), (function(t) {
                                            i("throw", t, c, s)
                                        })) : e.resolve(h).then((function(t) {
                                            l.value = t, c(l)
                                        }), (function(t) {
                                            return i("throw", t, c, s)
                                        }))
                                    }
                                    s(u.arg)
                                }(o, a, i, c)
                            }))
                        }
                        return i = i ? i.then(c, c) : c()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[a];
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
                return v.prototype = d, u(g, "constructor", d), u(d, "constructor", v), v.displayName = u(d, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(x.prototype), u(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(l(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), u(g, s, "Generator"), u(g, a, (function() {
                    return this
                })), u(g, "toString", (function() {
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
                }, t.values = P, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var c = r.call(o, "catchLoc"),
                                    s = r.call(o, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    E(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function o(t, e, r, n, i, o, a) {
                try {
                    var c = t[o](a),
                        s = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(n, i)
            }

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return c
            }));
            var c = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, n, c, s;
                return e = t, (r = [{
                    key: "nextFrame",
                    value: (c = i().mark((function t(e) {
                        var r, n, o, a;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0, !(void 0 !== (n = this.container).lastFrameTime && e < n.lastFrameTime + 1e3 / n.fpsLimit)) {
                                        t.next = 5;
                                        break
                                    }
                                    return n.draw(!1), t.abrupt("return");
                                case 5:
                                    if (null !== (r = n.lastFrameTime) && void 0 !== r || (n.lastFrameTime = e), o = e - n.lastFrameTime, a = {
                                            value: o,
                                            factor: 60 * o / 1e3
                                        }, n.lifeTime += a.value, n.lastFrameTime = e, !(o > 1e3)) {
                                        t.next = 12;
                                        break
                                    }
                                    return n.draw(!1), t.abrupt("return");
                                case 12:
                                    return t.next = 14, n.particles.draw(a);
                                case 14:
                                    if (!(n.duration > 0 && n.lifeTime > n.duration)) {
                                        t.next = 17;
                                        break
                                    }
                                    return n.destroy(), t.abrupt("return");
                                case 17:
                                    n.getAnimationStatus() && n.draw(!1), t.next = 23;
                                    break;
                                case 20:
                                    t.prev = 20, t.t0 = t.catch(0), console.error("tsParticles error in animation loop", t.t0);
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [0, 20]
                        ])
                    })), s = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var i = c.apply(t, e);

                            function a(t) {
                                o(i, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                o(i, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function(t) {
                        return s.apply(this, arguments)
                    })
                }]) && a(e.prototype, r), n && a(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        jiOm: function(t, e, r) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                i = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    c = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";

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

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof p ? e : p,
                        o = Object.create(i.prototype),
                        a = new j(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var c = k(a, r);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var s = f(t, e, r);
                                if ("normal" === s.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue;
                                    return {
                                        value: s.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                            }
                        }
                    }(t, r, a), o
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
                var h = {};

                function p() {}

                function v() {}

                function d() {}
                var y = {};
                u(y, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    b = m && m(m(P([])));
                b && b !== e && r.call(b, a) && (y = b);
                var g = d.prototype = p.prototype = Object.create(y);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var i;
                    this._invoke = function(o, a) {
                        function c() {
                            return new e((function(i, c) {
                                ! function i(o, a, c, s) {
                                    var u = f(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var l = u.arg,
                                            h = l.value;
                                        return h && "object" == n(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                            i("next", t, c, s)
                                        }), (function(t) {
                                            i("throw", t, c, s)
                                        })) : e.resolve(h).then((function(t) {
                                            l.value = t, c(l)
                                        }), (function(t) {
                                            return i("throw", t, c, s)
                                        }))
                                    }
                                    s(u.arg)
                                }(o, a, i, c)
                            }))
                        }
                        return i = i ? i.then(c, c) : c()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[a];
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
                return v.prototype = d, u(g, "constructor", d), u(d, "constructor", v), v.displayName = u(d, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(x.prototype), u(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(l(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), u(g, s, "Generator"), u(g, a, (function() {
                    return this
                })), u(g, "toString", (function() {
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
                }, t.values = P, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var c = r.call(o, "catchLoc"),
                                    s = r.call(o, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), h
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    E(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function o(t, e, r, n, i, o, a) {
                try {
                    var c = t[o](a),
                        s = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(n, i)
            }

            function a(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = t.apply(e, r);

                        function c(t) {
                            o(a, n, i, c, s, "next", t)
                        }

                        function s(t) {
                            o(a, n, i, c, s, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }

            function c(t, e) {
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
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
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
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return p
            }));
            var l, f = function(t, e, r, n, i) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
                },
                h = function(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                },
                p = function() {
                    function t(e, r) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.container = r, l.set(this, void 0), f(this, l, e, "f"), this.externalInteractors = [], this.particleInteractors = [], this.init()
                    }
                    var e, r, n, o, s;
                    return e = t, (r = [{
                        key: "init",
                        value: function() {
                            var t = h(this, l, "f").plugins.getInteractors(this.container, !0);
                            this.externalInteractors = [], this.particleInteractors = [];
                            var e, r = c(t);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    switch (n.type) {
                                        case 0:
                                            this.externalInteractors.push(n);
                                            break;
                                        case 1:
                                            this.particleInteractors.push(n)
                                    }
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        }
                    }, {
                        key: "externalInteract",
                        value: (s = a(i().mark((function t(e) {
                            var r, n, o;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = c(this.externalInteractors), t.prev = 1, r.s();
                                    case 3:
                                        if ((n = r.n()).done) {
                                            t.next = 10;
                                            break
                                        }
                                        if (!(o = n.value).isEnabled()) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 8, o.interact(e);
                                    case 8:
                                        t.next = 3;
                                        break;
                                    case 10:
                                        t.next = 15;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(1), r.e(t.t0);
                                    case 15:
                                        return t.prev = 15, r.f(), t.finish(15);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [1, 12, 15, 18]
                            ])
                        }))), function(t) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "particlesInteract",
                        value: (o = a(i().mark((function t(e, r) {
                            var n, o, a, s, u;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = c(this.externalInteractors);
                                        try {
                                            for (n.s(); !(o = n.n()).done;) o.value.reset(e)
                                        } catch (t) {
                                            n.e(t)
                                        } finally {
                                            n.f()
                                        }
                                        a = c(this.particleInteractors), t.prev = 3, a.s();
                                    case 5:
                                        if ((s = a.n()).done) {
                                            t.next = 12;
                                            break
                                        }
                                        if (!(u = s.value).isEnabled(e)) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.next = 10, u.interact(e, r);
                                    case 10:
                                        t.next = 5;
                                        break;
                                    case 12:
                                        t.next = 17;
                                        break;
                                    case 14:
                                        t.prev = 14, t.t0 = t.catch(3), a.e(t.t0);
                                    case 17:
                                        return t.prev = 17, a.f(), t.finish(17);
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [3, 14, 17, 20]
                            ])
                        }))), function(t, e) {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "handleClickMode",
                        value: function(t) {
                            var e, r = c(this.externalInteractors);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    n.handleClickMode && n.handleClickMode(t)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        }
                    }]) && u(e.prototype, r), n && u(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
            l = new WeakMap
        },
        mZtP: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("mfN2"),
                i = r("Bvs5");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function s(t) {
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
                    var r, n = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }

            function u(t, e) {
                if (e && ("object" === o(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function l(t) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var f = function(t) {
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
                    }), e && c(t, e)
                }(u, t);
                var e, r, n, o = s(u);

                function u(t, e, r) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (n = o.call(this, t, e)).radius = r, n
                }
                return e = u, (r = [{
                    key: "contains",
                    value: function(t) {
                        return Object(i.i)(t, this.position) <= this.radius
                    }
                }, {
                    key: "intersects",
                    value: function(t) {
                        var e = t,
                            r = t,
                            n = this.position,
                            i = t.position,
                            o = Math.abs(i.x - n.x),
                            a = Math.abs(i.y - n.y),
                            c = this.radius;
                        if (void 0 !== r.radius) return c + r.radius > Math.sqrt(o * o + a + a);
                        if (void 0 !== e.size) {
                            var s = e.size.width,
                                u = e.size.height,
                                l = Math.pow(o - s, 2) + Math.pow(a - u, 2);
                            return !(o > c + s || a > c + u) && (o <= s || a <= u || l <= c * c)
                        }
                        return !1
                    }
                }]) && a(e.prototype, r), n && a(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), u
            }(n.a)
        },
        mfN2: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            r.d(e, "a", (function() {
                return o
            }));
            var o = i((function t(e, r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.position = {
                    x: e,
                    y: r
                }
            }))
        }
    }
]);