(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        "+DqO": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return v
            }));
            var n = r("Bvs5");
            var o = r("3wFu");

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        c = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        c = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    return i
                }(t, e) || a(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                if (t) {
                    if ("string" == typeof t) return c(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0
                }
            }

            function c(t, e) {
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
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, c;
                return e = t, (r = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return !t.destroyed && !t.spawning
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        var r, n, o, i, a = t.options.move.outModes;
                        this.updateOutMode(t, e, null !== (r = a.bottom) && void 0 !== r ? r : a.default, "bottom"), this.updateOutMode(t, e, null !== (n = a.left) && void 0 !== n ? n : a.default, "left"), this.updateOutMode(t, e, null !== (o = a.right) && void 0 !== o ? o : a.default, "right"), this.updateOutMode(t, e, null !== (i = a.top) && void 0 !== i ? i : a.default, "top")
                    }
                }, {
                    key: "updateOutMode",
                    value: function(t, e, r, n) {
                        switch (r) {
                            case "bounce":
                            case "bounce-vertical":
                            case "bounce-horizontal":
                            case "bounceVertical":
                            case "bounceHorizontal":
                            case "split":
                                this.bounce(t, e, n, r);
                                break;
                            case "destroy":
                                this.destroy(t, n);
                                break;
                            case "out":
                                this.out(t, n);
                                break;
                            case "none":
                            default:
                                this.none(t, n)
                        }
                    }
                }, {
                    key: "destroy",
                    value: function(t, e) {
                        var r = this.container;
                        Object(o.m)(t.position, r.canvas.size, t.getRadius(), e) || r.particles.remove(t, void 0, !0)
                    }
                }, {
                    key: "out",
                    value: function(t, e) {
                        var r = this.container;
                        if (!Object(o.m)(t.position, r.canvas.size, t.getRadius(), e)) {
                            var n = t.options.move.warp,
                                i = r.canvas.size,
                                a = {
                                    bottom: i.height + t.getRadius() + t.offset.y,
                                    left: -t.getRadius() - t.offset.x,
                                    right: i.width + t.getRadius() + t.offset.x,
                                    top: -t.getRadius() - t.offset.y
                                },
                                c = t.getRadius(),
                                u = Object(o.d)(t.position, c);
                            "right" === e && u.left > i.width + t.offset.x ? (t.position.x = a.left, t.initialPosition.x = t.position.x, n || (t.position.y = Math.random() * i.height, t.initialPosition.y = t.position.y)) : "left" === e && u.right < -t.offset.x && (t.position.x = a.right, t.initialPosition.x = t.position.x, n || (t.position.y = Math.random() * i.height, t.initialPosition.y = t.position.y)), "bottom" === e && u.top > i.height + t.offset.y ? (n || (t.position.x = Math.random() * i.width, t.initialPosition.x = t.position.x), t.position.y = a.top, t.initialPosition.y = t.position.y) : "top" === e && u.bottom < -t.offset.y && (n || (t.position.x = Math.random() * i.width, t.initialPosition.x = t.position.x), t.position.y = a.bottom, t.initialPosition.y = t.position.y)
                        }
                    }
                }, {
                    key: "bounce",
                    value: function(t, e, r, c) {
                        var u, l = this.container,
                            f = !1,
                            s = function(t, e) {
                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!r) {
                                    if (Array.isArray(t) || (r = a(t)) || e && t && "number" == typeof t.length) {
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
                                var i, c = !0,
                                    u = !1;
                                return {
                                    s: function() {
                                        r = r.call(t)
                                    },
                                    n: function() {
                                        var t = r.next();
                                        return c = t.done, t
                                    },
                                    e: function(t) {
                                        u = !0, i = t
                                    },
                                    f: function() {
                                        try {
                                            c || null == r.return || r.return()
                                        } finally {
                                            if (u) throw i
                                        }
                                    }
                                }
                            }(l.plugins);
                        try {
                            for (s.s(); !(u = s.n()).done;) {
                                var h = i(u.value, 2)[1];
                                if (void 0 !== h.particleBounce && (f = h.particleBounce(t, e, r)), f) break
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        if (!f) {
                            var p = t.getPosition(),
                                v = t.offset,
                                y = t.getRadius(),
                                d = Object(o.d)(p, y),
                                m = l.canvas.size;
                            ! function(t) {
                                if ("bounce" === t.outMode || "bounce-horizontal" === t.outMode || "bounceHorizontal" === t.outMode || "split" === t.outMode) {
                                    var e = t.particle.velocity.x,
                                        r = !1;
                                    if ("right" === t.direction && t.bounds.right >= t.canvasSize.width && e > 0 || "left" === t.direction && t.bounds.left <= 0 && e < 0) {
                                        var o = Object(n.o)(t.particle.options.bounce.horizontal.value);
                                        t.particle.velocity.x *= -o, r = !0
                                    }
                                    if (r) {
                                        var i = t.offset.x + t.size;
                                        t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - i : t.bounds.left <= 0 && (t.particle.position.x = i), "split" === t.outMode && t.particle.destroy()
                                    }
                                }
                            }({
                                particle: t,
                                outMode: c,
                                direction: r,
                                bounds: d,
                                canvasSize: m,
                                offset: v,
                                size: y
                            }),
                            function(t) {
                                if ("bounce" === t.outMode || "bounce-vertical" === t.outMode || "bounceVertical" === t.outMode || "split" === t.outMode) {
                                    var e = t.particle.velocity.y,
                                        r = !1;
                                    if ("bottom" === t.direction && t.bounds.bottom >= t.canvasSize.height && e > 0 || "top" === t.direction && t.bounds.top <= 0 && e < 0) {
                                        var o = Object(n.o)(t.particle.options.bounce.vertical.value);
                                        t.particle.velocity.y *= -o, r = !0
                                    }
                                    if (!r) return;
                                    var i = t.offset.y + t.size;
                                    t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - i : t.bounds.top <= 0 && (t.particle.position.y = i), "split" === t.outMode && t.particle.destroy()
                                }
                            }({
                                particle: t,
                                outMode: c,
                                direction: r,
                                bounds: d,
                                canvasSize: m,
                                offset: v,
                                size: y
                            })
                        }
                    }
                }, {
                    key: "none",
                    value: function(t, e) {
                        if ((!t.options.move.distance.horizontal || "left" !== e && "right" !== e) && (!t.options.move.distance.vertical || "top" !== e && "bottom" !== e)) {
                            var r = t.options.move.gravity,
                                n = this.container,
                                i = n.canvas.size,
                                a = t.getRadius();
                            if (r.enable) {
                                var c = t.position;
                                (!r.inverse && c.y > i.height + a && "bottom" === e || r.inverse && c.y < -a && "top" === e) && n.particles.remove(t)
                            } else {
                                if (t.velocity.y > 0 && t.position.y <= i.height + a || t.velocity.y < 0 && t.position.y >= -a || t.velocity.x > 0 && t.position.x <= i.width + a || t.velocity.x < 0 && t.position.x >= -a) return;
                                Object(o.m)(t.position, n.canvas.size, a, e) || n.particles.remove(t)
                            }
                        }
                    }
                }]) && u(e.prototype, r), c && u(e, c), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function f(t) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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

                function l(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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
                t.wrap = l;
                var p = {};

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                u(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

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
                                        var u = h(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                s = l.value;
                                            return s && "object" == f(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, a(l)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = u(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), u(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(l(e, r, n, o), i);
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
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

            function p(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            h(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            h(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function v(t) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = p(s().mark((function t(e) {
                    return s().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("outModes", (function(t) {
                                    return new l(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        "+t9f": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("Bvs5");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "init",
                    value: function(t) {
                        var e = t.options.opacity;
                        t.opacity = {
                            enable: e.animation.enable,
                            max: Object(n.m)(e.value),
                            min: Object(n.n)(e.value),
                            value: Object(n.o)(e.value),
                            loops: 0,
                            maxLoops: Object(n.o)(e.animation.count)
                        };
                        var r = e.animation;
                        if (r.enable) {
                            t.opacity.status = 0;
                            var o = e.value;
                            switch (t.opacity.min = Object(n.n)(o), t.opacity.max = Object(n.m)(o), r.startValue) {
                                case "min":
                                    t.opacity.value = t.opacity.min, t.opacity.status = 0;
                                    break;
                                case "random":
                                    t.opacity.value = Object(n.r)(t.opacity), t.opacity.status = Math.random() >= .5 ? 0 : 1;
                                    break;
                                case "max":
                                default:
                                    t.opacity.value = t.opacity.max, t.opacity.status = 1
                            }
                            t.opacity.velocity = Object(n.o)(r.speed) / 100 * this.container.retina.reduceFactor, r.sync || (t.opacity.velocity *= Math.random())
                        }
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var e, r, n, o;
                        return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) <= 0 || (null !== (r = t.opacity.maxLoops) && void 0 !== r ? r : 0) > 0 && (null !== (n = t.opacity.loops) && void 0 !== n ? n : 0) < (null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0))
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.isEnabled(t) && function(t, e) {
                            var r, o, i, a, c;
                            if (t.opacity) {
                                var u = t.opacity.min,
                                    l = t.opacity.max;
                                if (!(t.destroyed || !t.opacity.enable || (null !== (r = t.opacity.maxLoops) && void 0 !== r ? r : 0) > 0 && (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) > (null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0))) {
                                    switch (t.opacity.status) {
                                        case 0:
                                            t.opacity.value >= l ? (t.opacity.status = 1, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value += (null !== (a = t.opacity.velocity) && void 0 !== a ? a : 0) * e.factor;
                                            break;
                                        case 1:
                                            t.opacity.value <= u ? (t.opacity.status = 0, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value -= (null !== (c = t.opacity.velocity) && void 0 !== c ? c : 0) * e.factor
                                    }! function(t, e, r, n) {
                                        switch (t.options.opacity.animation.destroy) {
                                            case "max":
                                                e >= n && t.destroy();
                                                break;
                                            case "min":
                                                e <= r && t.destroy()
                                        }
                                    }(t, t.opacity.value, u, l), t.destroyed || (t.opacity.value = Object(n.g)(t.opacity.value, u, l))
                                }
                            }
                        }(t, e)
                    }
                }]) && o(e.prototype, r), i && o(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
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
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
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

            function f(t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l(c().mark((function t(e) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("opacity", (function(t) {
                                    return new i(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        "0qtW": function(t, e, r) {
            "use strict";
            r.d(e, "c", (function() {
                return u
            })), r.d(e, "b", (function() {
                return l
            })), r.d(e, "t", (function() {
                return f
            })), r.d(e, "w", (function() {
                return s
            })), r.d(e, "x", (function() {
                return h
            })), r.d(e, "m", (function() {
                return p
            })), r.d(e, "o", (function() {
                return v
            })), r.d(e, "l", (function() {
                return y
            })), r.d(e, "n", (function() {
                return d
            })), r.d(e, "p", (function() {
                return m
            })), r.d(e, "r", (function() {
                return g
            })), r.d(e, "q", (function() {
                return w
            })), r.d(e, "s", (function() {
                return b
            })), r.d(e, "u", (function() {
                return x
            })), r.d(e, "v", (function() {
                return L
            })), r.d(e, "h", (function() {
                return E
            })), r.d(e, "k", (function() {
                return O
            })), r.d(e, "i", (function() {
                return j
            })), r.d(e, "j", (function() {
                return k
            })), r.d(e, "a", (function() {
                return _
            })), r.d(e, "f", (function() {
                return S
            })), r.d(e, "g", (function() {
                return P
            })), r.d(e, "e", (function() {
                return G
            })), r.d(e, "d", (function() {
                return N
            }));
            var n = r("Bvs5"),
                o = r("j5nf"),
                i = r("3wFu");

            function a(t, e, r) {
                var n = r;
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function c(t) {
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
                    return r ? v({
                        a: r.length > 4 ? parseFloat(r[5]) : 1,
                        h: parseInt(r[1], 10),
                        l: parseInt(r[3], 10),
                        s: parseInt(r[2], 10)
                    }) : void 0
                }
                if (t.startsWith("hsv")) {
                    var n = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return n ? b({
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

            function u(t, e) {
                var r, n, a, c = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (void 0 !== t) {
                    var l, f = "string" == typeof t ? {
                        value: t
                    } : t;
                    if ("string" == typeof f.value) l = f.value === o.a.randomColorValue ? E() : h(f.value);
                    else if (f.value instanceof Array) {
                        var s = Object(i.o)(f.value, e, c);
                        l = u({
                            value: s
                        })
                    } else {
                        var v = f.value,
                            y = null !== (r = v.rgb) && void 0 !== r ? r : f.value;
                        if (void 0 !== y.r) l = y;
                        else {
                            var d = null !== (n = v.hsl) && void 0 !== n ? n : f.value;
                            if (void 0 !== d.h && void 0 !== d.l) l = p(d);
                            else {
                                var m = null !== (a = v.hsv) && void 0 !== a ? a : f.value;
                                void 0 !== m.h && void 0 !== m.v && (l = w(m))
                            }
                        }
                    }
                    return l
                }
            }

            function l(t, e) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    n = u(t, e, r);
                return void 0 !== n ? f(n) : void 0
            }

            function f(t) {
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

            function s(t) {
                var e;
                return null === (e = c(t)) || void 0 === e ? void 0 : e.a
            }

            function h(t) {
                return c(t)
            }

            function p(t) {
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

            function v(t) {
                var e = p(t);
                return {
                    a: t.a,
                    b: e.b,
                    g: e.g,
                    r: e.r
                }
            }

            function y(t) {
                var e = t.l / 100,
                    r = e + t.s / 100 * Math.min(e, 1 - e),
                    n = r ? 2 * (1 - e / r) : 0;
                return {
                    h: t.h,
                    s: 100 * n,
                    v: 100 * r
                }
            }

            function d(t) {
                var e = y(t);
                return {
                    a: t.a,
                    h: e.h,
                    s: e.s,
                    v: e.v
                }
            }

            function m(t) {
                var e = t.v / 100,
                    r = e * (1 - t.s / 100 / 2),
                    n = 0 === r || 1 === r ? 0 : (e - r) / Math.min(r, 1 - r);
                return {
                    h: t.h,
                    l: 100 * r,
                    s: 100 * n
                }
            }

            function g(t) {
                var e = m(t);
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
                    c = a * (1 - Math.abs(n % 2 - 1));
                if (n >= 0 && n <= 1 ? e = {
                        r: a,
                        g: c,
                        b: 0
                    } : n > 1 && n <= 2 ? e = {
                        r: c,
                        g: a,
                        b: 0
                    } : n > 2 && n <= 3 ? e = {
                        r: 0,
                        g: a,
                        b: c
                    } : n > 3 && n <= 4 ? e = {
                        r: 0,
                        g: c,
                        b: a
                    } : n > 4 && n <= 5 ? e = {
                        r: c,
                        g: 0,
                        b: a
                    } : n > 5 && n <= 6 && (e = {
                        r: a,
                        g: 0,
                        b: c
                    }), e) {
                    var u = i - a;
                    r.r = Math.floor(255 * (e.r + u)), r.g = Math.floor(255 * (e.g + u)), r.b = Math.floor(255 * (e.b + u))
                }
                return r
            }

            function b(t) {
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

            function L(t) {
                var e = x(t);
                return {
                    a: t.a,
                    h: e.h,
                    s: e.s,
                    v: e.v
                }
            }

            function E(t) {
                var e = null != t ? t : 0;
                return {
                    b: Math.floor(Object(n.r)(Object(n.s)(e, 256))),
                    g: Math.floor(Object(n.r)(Object(n.s)(e, 256))),
                    r: Math.floor(Object(n.r)(Object(n.s)(e, 256)))
                }
            }

            function O(t, e) {
                return "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(null != e ? e : 1, ")")
            }

            function j(t, e) {
                return "hsla(".concat(t.h, ", ").concat(t.s, "%, ").concat(t.l, "%, ").concat(null != e ? e : 1, ")")
            }

            function k(t, e) {
                return j(m(t), e)
            }

            function _(t, e, r, o) {
                var i = t,
                    a = e;
                return void 0 === i.r && (i = p(t)), void 0 === a.r && (a = p(e)), {
                    b: Object(n.q)(i.b, a.b, r, o),
                    g: Object(n.q)(i.g, a.g, r, o),
                    r: Object(n.q)(i.r, a.r, r, o)
                }
            }

            function S(t, e, r) {
                var n, i;
                if (r === o.a.randomColorValue) return E();
                if ("mid" !== r) return r;
                var a = null !== (n = t.getFillColor()) && void 0 !== n ? n : t.getStrokeColor(),
                    c = null !== (i = null == e ? void 0 : e.getFillColor()) && void 0 !== i ? i : null == e ? void 0 : e.getStrokeColor();
                if (a && c && e) return _(a, c, t.getRadius(), e.getRadius());
                var u = null != a ? a : c;
                return u ? p(u) : void 0
            }

            function P(t, e, r) {
                var n = "string" == typeof t ? t : t.value;
                return n === o.a.randomColorValue ? r ? u({
                    value: n
                }) : e ? o.a.randomColorValue : o.a.midColorValue : u({
                    value: n
                })
            }

            function G(t) {
                return void 0 !== t ? {
                    h: t.h.value,
                    s: t.s.value,
                    l: t.l.value
                } : void 0
            }

            function N(t, e, r) {
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
                return p
            })), r.d(e, "a", (function() {
                return v
            })), r.d(e, "e", (function() {
                return y
            })), r.d(e, "l", (function() {
                return d
            })), r.d(e, "p", (function() {
                return m
            })), r.d(e, "c", (function() {
                return w
            })), r.d(e, "o", (function() {
                return b
            })), r.d(e, "m", (function() {
                return x
            })), r.d(e, "b", (function() {
                return L
            })), r.d(e, "d", (function() {
                return E
            })), r.d(e, "h", (function() {
                return O
            })), r.d(e, "k", (function() {
                return j
            })), r.d(e, "j", (function() {
                return k
            })), r.d(e, "r", (function() {
                return _
            })), r.d(e, "i", (function() {
                return S
            })), r.d(e, "g", (function() {
                return P
            })), r.d(e, "f", (function() {
                return G
            })), r.d(e, "q", (function() {
                return N
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
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    c = o.iterator || "@@iterator",
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, c, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, c) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, c, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
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

            function c(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            c(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            c(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return f(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(t, e)
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

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function s(t, e, r, n, o, i) {
                var a = {
                    bounced: !1
                };
                return e.min < n.min || e.min > n.max || e.max < n.min || e.max > n.max || (t.max >= r.min && t.max <= (r.max + r.min) / 2 && o > 0 || t.min <= r.max && t.min > (r.max + r.min) / 2 && o < 0) && (a.velocity = o * -i, a.bounced = !0), a
            }

            function h(t, e) {
                if (!(e instanceof Array)) return t.matches(e);
                var r, n = l(e);
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

            function p() {
                return "undefined" == typeof window || !window || void 0 === window.document || !window.document
            }

            function v() {
                return p() ? function(t) {
                    return setTimeout(t)
                } : function(t) {
                    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t)
                }
            }

            function y() {
                return p() ? function(t) {
                    return clearTimeout(t)
                } : function(t) {
                    return (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t)
                }
            }

            function d(t, e) {
                return t === e || e instanceof Array && e.indexOf(t) > -1
            }

            function m(t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = u(i().mark((function t(e) {
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

            function b(t, e) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    n = void 0 !== e && r ? e % t.length : w(t);
                return t[n]
            }

            function x(t, e, r, n) {
                return L(E(t, null != r ? r : 0), e, n)
            }

            function L(t, e, r) {
                var n = !0;
                return r && "bottom" !== r || (n = t.top < e.height), !n || r && "left" !== r || (n = t.right > 0), !n || r && "right" !== r || (n = t.left < e.width), !n || r && "top" !== r || (n = t.bottom > 0), n
            }

            function E(t, e) {
                return {
                    bottom: t.y + e,
                    left: t.x - e,
                    right: t.x + e,
                    top: t.y - e
                }
            }

            function O(t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                for (var o = 0, i = r; o < i.length; o++) {
                    var c = i[o];
                    if (null != c)
                        if ("object" === a(c)) {
                            var u = Array.isArray(c);
                            !u || "object" === a(t) && t && Array.isArray(t) ? u || "object" === a(t) && t && !Array.isArray(t) || (t = {}) : t = [];
                            var l = function(e) {
                                if ("__proto__" === e) return "continue";
                                var r = c[e],
                                    n = "object" === a(r),
                                    o = t;
                                o[e] = n && Array.isArray(r) ? r.map((function(t) {
                                    return O(o[e], t)
                                })) : O(o[e], r)
                            };
                            for (var f in c) l(f)
                        } else t = c
                }
                return t
            }

            function j(t, e) {
                return e instanceof Array ? !!e.find((function(e) {
                    return e.enable && d(t, e.mode)
                })) : d(t, e.mode)
            }

            function k(t, e, r) {
                if (e instanceof Array) {
                    var n, o = l(e);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value,
                                a = i.mode;
                            i.enable && d(t, a) && _(i, r)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                } else {
                    var c = e.mode;
                    e.enable && d(t, c) && _(e, r)
                }
            }

            function _(t, e) {
                var r = t.selectors;
                if (r instanceof Array) {
                    var n, o = l(r);
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

            function S(t, e) {
                if (e && t) return t instanceof Array ? t.find((function(t) {
                    return h(e, t.selectors)
                })) : h(e, t.selectors) ? t : void 0
            }

            function P(t) {
                return {
                    position: t.getPosition(),
                    radius: t.getRadius(),
                    mass: t.getMass(),
                    velocity: t.velocity,
                    factor: o.a.create(Object(n.p)(t.options.bounce.horizontal), Object(n.p)(t.options.bounce.vertical))
                }
            }

            function G(t, e) {
                var r = t.velocity.sub(e.velocity),
                    o = r.x,
                    i = r.y,
                    a = [t.position, e.position],
                    c = a[0],
                    u = a[1],
                    l = Object(n.j)(u, c),
                    f = l.dx,
                    s = l.dy;
                if (!(o * f + i * s < 0)) {
                    var h = -Math.atan2(s, f),
                        p = t.mass,
                        v = e.mass,
                        y = t.velocity.rotate(h),
                        d = e.velocity.rotate(h),
                        m = Object(n.h)(y, d, p, v),
                        g = Object(n.h)(d, y, p, v),
                        w = m.rotate(-h),
                        b = g.rotate(-h);
                    t.velocity.x = w.x * t.factor.x, t.velocity.y = w.y * t.factor.y, e.velocity.x = b.x * e.factor.x, e.velocity.y = b.y * e.factor.y
                }
            }

            function N(t, e) {
                var r = E(t.getPosition(), t.getRadius()),
                    o = s({
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
                var i = s({
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
        "473K": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return h
            }));
            var n = r("0qtW"),
                o = r("Bvs5");

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function a(t, e, r, n, i) {
                var a, c = e;
                if (c && r.enable) {
                    var u = Object(o.r)(r.offset),
                        l = (null !== (a = e.velocity) && void 0 !== a ? a : 0) * t.factor + 3.6 * u;
                    i && 0 !== c.status ? (c.value -= l, c.value < 0 && (c.status = 0, c.value += c.value)) : (c.value += l, i && c.value > n && (c.status = 1, c.value -= c.value % n)), c.value > n && (c.value %= n)
                }
            }
            var c = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, o;
                return e = t, (r = [{
                    key: "init",
                    value: function(t) {
                        var e = Object(n.b)(t.options.color, t.id, t.options.reduceDuplicates);
                        e && (t.color = Object(n.d)(e, t.options.color.animation, this.container.retina.reduceFactor))
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var e, r, n, o = t.options.color.animation;
                        return !t.destroyed && !t.spawning && (void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.h.value) && o.h.enable || void 0 !== (null === (r = t.color) || void 0 === r ? void 0 : r.s.value) && o.s.enable || void 0 !== (null === (n = t.color) || void 0 === n ? void 0 : n.l.value) && o.l.enable)
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        ! function(t, e) {
                            var r, n, o, i = t.options.color.animation;
                            void 0 !== (null === (r = t.color) || void 0 === r ? void 0 : r.h) && a(e, t.color.h, i.h, 360, !1), void 0 !== (null === (n = t.color) || void 0 === n ? void 0 : n.s) && a(e, t.color.s, i.s, 100, !0), void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.l) && a(e, t.color.l, i.l, 100, !0)
                        }(t, e)
                    }
                }]) && i(e.prototype, r), o && i(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                l = function() {
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

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
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
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == u(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, c)
                                            }))
                                        }
                                        c(l.arg)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, c, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
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

            function s(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            f(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            f(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function h(t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = s(l().mark((function t(e) {
                    return l().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("color", (function(t) {
                                    return new c(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        "6I6a": function(t, e, r) {},
        "8AKg": function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return l
            }));
            var o = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, o;
                return e = t, (r = [{
                    key: "getSidesCount",
                    value: function() {
                        return 12
                    }
                }, {
                    key: "draw",
                    value: function(t, e, r) {
                        t.arc(0, 0, r, 0, 2 * Math.PI, !1)
                    }
                }]) && n(e.prototype, r), o && n(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

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
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, c, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, c) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
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
                                        var l = h(t[o], t, a);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == i(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, c, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function c(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            c(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            c(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(t) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = u(a().mark((function t(e) {
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addShape("circle", new o);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        Aadh: function(t, e, r) {},
        Bvs5: function(t, e, r) {
            "use strict";
            r.d(e, "g", (function() {
                return o
            })), r.d(e, "q", (function() {
                return i
            })), r.d(e, "r", (function() {
                return a
            })), r.d(e, "o", (function() {
                return c
            })), r.d(e, "n", (function() {
                return u
            })), r.d(e, "m", (function() {
                return l
            })), r.d(e, "s", (function() {
                return f
            })), r.d(e, "p", (function() {
                return s
            })), r.d(e, "j", (function() {
                return h
            })), r.d(e, "i", (function() {
                return p
            })), r.d(e, "l", (function() {
                return v
            })), r.d(e, "k", (function() {
                return y
            })), r.d(e, "h", (function() {
                return d
            })), r.d(e, "a", (function() {
                return m
            })), r.d(e, "d", (function() {
                return g
            })), r.d(e, "e", (function() {
                return w
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "b", (function() {
                return x
            })), r.d(e, "c", (function() {
                return L
            }));
            var n = r("U1gX");

            function o(t, e, r) {
                return Math.min(Math.max(t, e), r)
            }

            function i(t, e, r, n) {
                return Math.floor((t * r + e * n) / (r + n))
            }

            function a(t) {
                var e = l(t),
                    r = u(t);
                return e === r && (r = 0), Math.random() * (e - r) + r
            }

            function c(t) {
                return "number" == typeof t ? t : a(t)
            }

            function u(t) {
                return "number" == typeof t ? t : t.min
            }

            function l(t) {
                return "number" == typeof t ? t : t.max
            }

            function f(t, e) {
                if (t === e || void 0 === e && "number" == typeof t) return t;
                var r = u(t),
                    n = l(t);
                return void 0 !== e ? {
                    min: Math.min(r, e),
                    max: Math.max(n, e)
                } : f(r, n)
            }

            function s(t) {
                var e = t.random,
                    r = "boolean" == typeof e ? {
                        enable: e,
                        minimumValue: 0
                    } : e,
                    n = r.enable,
                    o = r.minimumValue;
                return c(n ? f(t.value, o) : t.value)
            }

            function h(t, e) {
                var r = t.x - e.x,
                    n = t.y - e.y;
                return {
                    dx: r,
                    dy: n,
                    distance: Math.sqrt(r * r + n * n)
                }
            }

            function p(t, e) {
                return h(t, e).distance
            }

            function v(t) {
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

            function y(t) {
                var e = n.a.origin;
                return e.length = 1, e.angle = t, e
            }

            function d(t, e, r, o) {
                return n.a.create(t.x * (r - o) / (r + o) + 2 * e.x * o / (r + o), t.y)
            }

            function m(t, e) {
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

            function g(t) {
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

            function b(t) {
                var e, r, n = {
                    x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? c(t.position.x) : void 0,
                    y: void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.y) ? c(t.position.y) : void 0
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

            function L(t) {
                var e, r, n = {
                    x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? c(t.position.x) : void 0,
                    y: void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.y) ? c(t.position.y) : void 0
                };
                return x({
                    size: t.size,
                    position: n
                })
            }
        },
        GHz4: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("Bvs5");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var e, r, n, o;
                        return !t.destroyed && !t.spawning && t.size.enable && ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) <= 0 || (null !== (r = t.size.maxLoops) && void 0 !== r ? r : 0) > 0 && (null !== (n = t.size.loops) && void 0 !== n ? n : 0) < (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0))
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.isEnabled(t) && function(t, e) {
                            var r, o, i, a, c = (null !== (r = t.size.velocity) && void 0 !== r ? r : 0) * e.factor,
                                u = t.size.min,
                                l = t.size.max;
                            if (!(t.destroyed || !t.size.enable || (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0) > 0 && (null !== (i = t.size.loops) && void 0 !== i ? i : 0) > (null !== (a = t.size.maxLoops) && void 0 !== a ? a : 0))) {
                                switch (t.size.status) {
                                    case 0:
                                        t.size.value >= l ? (t.size.status = 1, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value += c;
                                        break;
                                    case 1:
                                        t.size.value <= u ? (t.size.status = 0, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value -= c
                                }! function(t, e, r, n) {
                                    switch (t.options.size.animation.destroy) {
                                        case "max":
                                            e >= n && t.destroy();
                                            break;
                                        case "min":
                                            e <= r && t.destroy()
                                    }
                                }(t, t.size.value, u, l), t.destroyed || (t.size.value = Object(n.g)(t.size.value, u, l))
                            }
                        }(t, e)
                    }
                }]) && o(e.prototype, r), i && o(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
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
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
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

            function f(t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l(c().mark((function t(e) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("size", (function() {
                                    return new i
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        GNcM: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("Bvs5");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "init",
                    value: function(t) {
                        var e = t.options.wobble;
                        e.enable ? t.wobble = {
                            angle: Math.random() * Math.PI * 2,
                            speed: Object(n.o)(e.speed) / 360
                        } : t.wobble = {
                            angle: 0,
                            speed: 0
                        }, t.retina.wobbleDistance = Object(n.o)(e.distance) * this.container.retina.pixelRatio
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return !t.destroyed && !t.spawning && t.options.wobble.enable
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.isEnabled(t) && function(t, e) {
                            var r;
                            if (t.options.wobble.enable && t.wobble) {
                                var n = t.wobble.speed * e.factor,
                                    o = (null !== (r = t.retina.wobbleDistance) && void 0 !== r ? r : 0) * e.factor / (1e3 / 60),
                                    i = 2 * Math.PI;
                                t.wobble.angle += n, t.wobble.angle > i && (t.wobble.angle -= i), t.position.x += o * Math.cos(t.wobble.angle), t.position.y += o * Math.abs(Math.sin(t.wobble.angle))
                            }
                        }(t, e)
                    }
                }]) && o(e.prototype, r), i && o(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
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
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
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

            function f(t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l(c().mark((function t(e) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("wobble", (function(t) {
                                    return new i(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        I5g1: function(t, e, r) {},
        K6ZH: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return P
            }));
            var o = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, o;
                return e = t, (r = [{
                    key: "getSidesCount",
                    value: function(t) {
                        var e, r, n = t.shapeData;
                        return null !== (r = null !== (e = null == n ? void 0 : n.sides) && void 0 !== e ? e : null == n ? void 0 : n.nb_sides) && void 0 !== r ? r : 5
                    }
                }, {
                    key: "draw",
                    value: function(t, e, r) {
                        var n = this.getCenter(e, r),
                            o = this.getSidesData(e, r),
                            i = o.count.numerator * o.count.denominator,
                            a = o.count.numerator / o.count.denominator,
                            c = 180 * (a - 2) / a,
                            u = Math.PI - Math.PI * c / 180;
                        if (t) {
                            t.beginPath(), t.translate(n.x, n.y), t.moveTo(0, 0);
                            for (var l = 0; l < i; l++) t.lineTo(o.length, 0), t.translate(o.length, 0), t.rotate(u)
                        }
                    }
                }]) && n(e.prototype, r), o && n(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
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
                    var r, n = s(t);
                    if (e) {
                        var o = s(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }

            function f(t, e) {
                if (e && ("object" === i(e) || "function" == typeof e)) return e;
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
            var h = function(t) {
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
                }(i, t);
                var e, r, n, o = l(i);

                function i() {
                    return a(this, i), o.apply(this, arguments)
                }
                return e = i, (r = [{
                    key: "getSidesData",
                    value: function(t, e) {
                        var r, n, o = t.shapeData,
                            i = null !== (n = null !== (r = null == o ? void 0 : o.sides) && void 0 !== r ? r : null == o ? void 0 : o.nb_sides) && void 0 !== n ? n : 5;
                        return {
                            count: {
                                denominator: 1,
                                numerator: i
                            },
                            length: 2.66 * e / (i / 3)
                        }
                    }
                }, {
                    key: "getCenter",
                    value: function(t, e) {
                        return {
                            x: -e / (this.getSidesCount(t) / 3.5),
                            y: -e / .76
                        }
                    }
                }]) && c(e.prototype, r), n && c(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o);

            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function m(t) {
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
                    var r, n = w(t);
                    if (e) {
                        var o = w(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return g(this, r)
                }
            }

            function g(t, e) {
                if (e && ("object" === p(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function w(t) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var b = function(t) {
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
                    }), e && d(t, e)
                }(i, t);
                var e, r, n, o = m(i);

                function i() {
                    return v(this, i), o.apply(this, arguments)
                }
                return e = i, (r = [{
                    key: "getSidesCount",
                    value: function() {
                        return 3
                    }
                }, {
                    key: "getSidesData",
                    value: function(t, e) {
                        return {
                            count: {
                                denominator: 2,
                                numerator: 3
                            },
                            length: 2 * e
                        }
                    }
                }, {
                    key: "getCenter",
                    value: function(t, e) {
                        return {
                            x: -e,
                            y: e / 1.66
                        }
                    }
                }]) && y(e.prototype, r), n && y(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o);

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function L() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                L = function() {
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

                function l(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
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
                var s = {};

                function h() {}

                function p() {}

                function v() {}
                var y = {};
                u(y, i, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(S([])));
                m && m !== e && r.call(m, i) && (y = m);
                var g = v.prototype = h.prototype = Object.create(y);

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
                                        var u = f(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                s = l.value;
                                            return s && "object" == x(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, a(l)
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
                            return P()
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
                            var u = f(t, e, r);
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
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = v, n(g, "constructor", {
                    value: v,
                    configurable: !0
                }), n(v, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(v, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(b.prototype), u(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), u(g, c, "Generator"), u(g, i, (function() {
                    return this
                })), u(g, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), s
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function E(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function O(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            E(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            E(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function j(t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = O(L().mark((function t(e) {
                    return L().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addShape("polygon", new h);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function _(t) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = O(L().mark((function t(e) {
                    return L().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addShape("triangle", new b);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function P(t) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = O(L().mark((function t(e) {
                    return L().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, j(e);
                            case 2:
                                return t.next = 4, _(e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        KmHF: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return p
            }));
            var n = r("0qtW"),
                o = r("3wFu"),
                i = r("Bvs5");

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e, r, n, o) {
                var a, c = e;
                if (c && c.enable) {
                    var u = Object(i.r)(r.offset),
                        l = (null !== (a = e.velocity) && void 0 !== a ? a : 0) * t.factor + 3.6 * u;
                    o && 0 !== c.status ? (c.value -= l, c.value < 0 && (c.status = 0, c.value += c.value)) : (c.value += l, o && c.value > n && (c.status = 1, c.value -= c.value % n)), c.value > n && (c.value %= n)
                }
            }
            var u = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "init",
                    value: function(t) {
                        var e, r, i = this.container;
                        t.stroke = t.options.stroke instanceof Array ? Object(o.o)(t.options.stroke, t.id, t.options.reduceDuplicates) : t.options.stroke, t.strokeWidth = t.stroke.width * i.retina.pixelRatio;
                        var a = null !== (e = Object(n.b)(t.stroke.color)) && void 0 !== e ? e : t.getFillColor();
                        a && (t.strokeColor = Object(n.d)(a, null === (r = t.stroke.color) || void 0 === r ? void 0 : r.animation, i.retina.reduceFactor))
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var e, r, n, o, i = null === (e = t.stroke) || void 0 === e ? void 0 : e.color;
                        return !t.destroyed && !t.spawning && !!i && (void 0 !== (null === (r = t.strokeColor) || void 0 === r ? void 0 : r.h.value) && i.animation.h.enable || void 0 !== (null === (n = t.strokeColor) || void 0 === n ? void 0 : n.s.value) && i.animation.s.enable || void 0 !== (null === (o = t.strokeColor) || void 0 === o ? void 0 : o.l.value) && i.animation.l.enable)
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.isEnabled(t) && function(t, e) {
                            var r, n, o, i, a, u, l, f, s, h;
                            if (null === (r = t.stroke) || void 0 === r ? void 0 : r.color) {
                                var p = t.stroke.color.animation,
                                    v = null !== (o = null === (n = t.strokeColor) || void 0 === n ? void 0 : n.h) && void 0 !== o ? o : null === (i = t.color) || void 0 === i ? void 0 : i.h;
                                v && c(e, v, p.h, 360, !1);
                                var y = null !== (u = null === (a = t.strokeColor) || void 0 === a ? void 0 : a.s) && void 0 !== u ? u : null === (l = t.color) || void 0 === l ? void 0 : l.s;
                                y && c(e, y, p.s, 100, !0);
                                var d = null !== (s = null === (f = t.strokeColor) || void 0 === f ? void 0 : f.l) && void 0 !== s ? s : null === (h = t.color) || void 0 === h ? void 0 : h.l;
                                d && c(e, d, p.l, 100, !0)
                            }
                        }(t, e)
                    }
                }]) && a(e.prototype, r), i && a(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

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

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                u(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

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
                                        var u = h(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var f = u.arg,
                                                s = f.value;
                                            return s && "object" == l(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = u(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), u(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function s(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function h(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            s(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            s(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function p(t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = h(f().mark((function t(e) {
                    return f().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("strokeColor", (function(t) {
                                    return new u(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        KzlG: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return k
            }));
            var n = r("0qtW");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    c = a.iterator || "@@iterator",
                    u = a.asyncIterator || "@@asyncIterator",
                    l = a.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, c, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, c) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var i;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function c() {
                                return new e((function(i, c) {
                                    ! function n(i, a, c, u) {
                                        var l = h(t[i], t, a);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == o(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, a, i, c)
                                }))
                            }
                            return i = i ? i.then(c, c) : c()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, c, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function a(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function c(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function c(t) {
                            a(i, n, o, c, u, "next", t)
                        }

                        function u(t) {
                            a(i, n, o, c, u, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }
            var u = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;

            function l(t) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c(i().mark((function t(e) {
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise((function(t) {
                                    e.loading = !0;
                                    var r = new Image;
                                    r.addEventListener("load", (function() {
                                        e.element = r, e.loading = !1, t()
                                    })), r.addEventListener("error", (function() {
                                        e.error = !0, e.loading = !1, console.error("Error tsParticles - loading image: ".concat(e.source)), t()
                                    })), r.src = e.source
                                })));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function s(t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = c(i().mark((function t(e) {
                    var r;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ("svg" === e.type) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3, l(e);
                            case 3:
                                return t.abrupt("return");
                            case 4:
                                return e.loading = !0, t.next = 7, fetch(e.source);
                            case 7:
                                if (r = t.sent, e.loading = !1, r.ok || (console.error("Error tsParticles - Image not found"), e.error = !0), e.error) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 13, r.text();
                            case 13:
                                e.svgData = t.sent;
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function p(t, e, r, o) {
                var i, a, c, f = function(t, e, r) {
                        var o = t.svgData;
                        if (!o) return "";
                        var i = Object(n.i)(e, r);
                        if (o.includes("fill")) return o.replace(u, (function() {
                            return i
                        }));
                        var a = o.indexOf(">");
                        return "".concat(o.substring(0, a), ' fill="').concat(i, '"').concat(o.substring(a))
                    }(t, r, null !== (a = null === (i = o.opacity) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 1),
                    s = new Blob([f], {
                        type: "image/svg+xml"
                    }),
                    h = URL || window.URL || window.webkitURL || window,
                    p = h.createObjectURL(s),
                    v = new Image,
                    y = {
                        data: Object.assign(Object.assign({}, t), {
                            svgData: f
                        }),
                        ratio: e.width / e.height,
                        replaceColor: null !== (c = e.replaceColor) && void 0 !== c ? c : e.replace_color,
                        source: e.src
                    };
                return v.addEventListener("load", (function() {
                    var e = o.image;
                    e && (e.loaded = !0, t.element = v), h.revokeObjectURL(p)
                })), v.addEventListener("error", (function() {
                    h.revokeObjectURL(p);
                    var e = Object.assign(Object.assign({}, t), {
                        error: !1,
                        loading: !0
                    });
                    l(e).then((function() {
                        var r = o.image;
                        r && (t.element = e.element, r.loaded = !0)
                    }))
                })), v.src = p, y
            }

            function v(t) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function y() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                y = function() {
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

                function l(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
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
                var s = {};

                function h() {}

                function p() {}

                function d() {}
                var m = {};
                u(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = h.prototype = Object.create(m);

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
                                        var u = f(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                s = l.value;
                                            return s && "object" == v(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, a(l)
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
                            return P()
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
                            var u = f(t, e, r);
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
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), u(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(l(e, r, n, o), i);
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), s
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function d(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function m(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var g, w = function(t, e, r, n, o) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
                },
                b = function(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                },
                x = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), g.set(this, void 0), w(this, g, [], "f")
                    }
                    var e, r, n, o, i;
                    return e = t, (r = [{
                        key: "getSidesCount",
                        value: function() {
                            return 12
                        }
                    }, {
                        key: "getImages",
                        value: function(t) {
                            var e = b(this, g, "f").find((function(e) {
                                return e.id === t.id
                            }));
                            return e || (b(this, g, "f").push({
                                id: t.id,
                                images: []
                            }), this.getImages(t))
                        }
                    }, {
                        key: "addImage",
                        value: function(t, e) {
                            var r = this.getImages(t);
                            null == r || r.images.push(e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            w(this, g, [], "f")
                        }
                    }, {
                        key: "draw",
                        value: function(t, e, r, n) {
                            var o, i, a = e.image,
                                c = null === (o = null == a ? void 0 : a.data) || void 0 === o ? void 0 : o.element;
                            if (c) {
                                var u = null !== (i = null == a ? void 0 : a.ratio) && void 0 !== i ? i : 1,
                                    l = {
                                        x: -r,
                                        y: -r
                                    };
                                (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = n), t.drawImage(c, l.x, l.y, 2 * r, 2 * r / u), (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = 1)
                            }
                        }
                    }, {
                        key: "loadShape",
                        value: function(t) {
                            var e, r, n, o = this;
                            if ("image" === t.shape || "images" === t.shape) {
                                var i, a = this.getImages(t.container).images,
                                    c = t.shapeData,
                                    u = a.find((function(t) {
                                        return t.source === c.src
                                    }));
                                if (u) {
                                    if (!u.error) {
                                        var l = t.getFillColor();
                                        (i = u.svgData && c.replaceColor && l ? p(u, c, l, t) : {
                                            data: u,
                                            loaded: !0,
                                            ratio: c.width / c.height,
                                            replaceColor: null !== (e = c.replaceColor) && void 0 !== e ? e : c.replace_color,
                                            source: c.src
                                        }).ratio || (i.ratio = 1);
                                        var f = {
                                            image: i,
                                            fill: null !== (r = c.fill) && void 0 !== r ? r : t.fill,
                                            close: null !== (n = c.close) && void 0 !== n ? n : t.close
                                        };
                                        t.image = f.image, t.fill = f.fill, t.close = f.close
                                    }
                                } else this.loadImageShape(t.container, c).then((function() {
                                    o.loadShape(t)
                                }))
                            }
                        }
                    }, {
                        key: "loadImageShape",
                        value: (o = y().mark((function t(e, r) {
                            var n, o, i;
                            return y().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = r.src) {
                                            t.next = 3;
                                            break
                                        }
                                        throw new Error("Error tsParticles - No image.src");
                                    case 3:
                                        return t.prev = 3, o = {
                                            source: n,
                                            type: n.substr(n.length - 3),
                                            error: !1,
                                            loading: !0
                                        }, this.addImage(e, o), i = r.replaceColor ? s : l, t.next = 9, i(o);
                                    case 9:
                                        t.next = 14;
                                        break;
                                    case 11:
                                        throw t.prev = 11, t.t0 = t.catch(3), new Error("tsParticles error - ".concat(r.src, " not found"));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [3, 11]
                            ])
                        })), i = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, n) {
                                var i = o.apply(t, e);

                                function a(t) {
                                    d(i, r, n, a, c, "next", t)
                                }

                                function c(t) {
                                    d(i, r, n, a, c, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function(t, e) {
                            return i.apply(this, arguments)
                        })
                    }]) && m(e.prototype, r), n && m(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function L(t) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                E = function() {
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

                function l(t, e, r, o) {
                    var i = e && e.prototype instanceof h ? e : h,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: x(t, r, c)
                    }), a
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
                var s = {};

                function h() {}

                function p() {}

                function v() {}
                var y = {};
                u(y, i, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(S([])));
                m && m !== e && r.call(m, i) && (y = m);
                var g = v.prototype = h.prototype = Object.create(y);

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
                                        var u = f(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                s = l.value;
                                            return s && "object" == L(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, a(l)
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
                            return P()
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
                            var u = f(t, e, r);
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
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = v, n(g, "constructor", {
                    value: v,
                    configurable: !0
                }), n(v, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = u(v, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(b.prototype), u(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), u(g, c, "Generator"), u(g, i, (function() {
                    return this
                })), u(g, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), s
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function O(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function j(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            O(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            O(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function k(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = j(E().mark((function t(e) {
                    var r;
                    return E().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = new x, t.next = 3, e.addShape("image", r);
                            case 3:
                                return t.next = 5, e.addShape("images", r);
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            g = new WeakMap
        },
        UM4E: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return s
            }));
            var n = r("0qtW"),
                o = r("Bvs5");

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var a = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, a;
                return e = t, (r = [{
                    key: "init",
                    value: function(t) {
                        var e = t.options.roll;
                        if (e.enable)
                            if (t.roll = {
                                    angle: Math.random() * Math.PI * 2,
                                    speed: Object(o.o)(e.speed) / 360
                                }, e.backColor) t.backColor = Object(n.b)(e.backColor);
                            else if (e.darken.enable && e.enlighten.enable) {
                            var r = Math.random() >= .5 ? "darken" : "enlighten";
                            t.roll.alter = {
                                type: r,
                                value: Object(o.o)("darken" === r ? e.darken.value : e.enlighten.value)
                            }
                        } else e.darken.enable ? t.roll.alter = {
                            type: "darken",
                            value: Object(o.o)(e.darken.value)
                        } : e.enlighten.enable && (t.roll.alter = {
                            type: "enlighten",
                            value: Object(o.o)(e.enlighten.value)
                        });
                        else t.roll = {
                            angle: 0,
                            speed: 0
                        }
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var e = t.options.roll;
                        return !t.destroyed && !t.spawning && e.enable
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.isEnabled(t) && function(t, e) {
                            var r = t.options.roll;
                            if (t.roll && r.enable) {
                                var n = t.roll.speed * e.factor,
                                    o = 2 * Math.PI;
                                t.roll.angle += n, t.roll.angle > o && (t.roll.angle -= o)
                            }
                        }(t, e)
                    }
                }]) && i(e.prototype, r), a && i(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                u = function() {
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
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
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
                                    ! function n(o, i, a, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == c(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, u)
                                            }), (function(t) {
                                                n("throw", t, a, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, u)
                                            }))
                                        }
                                        u(l.arg)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function l(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function f(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            l(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            l(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function s(t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = f(u().mark((function t(e) {
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("roll", (function() {
                                    return new a
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        XXxQ: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("Bvs5");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "init",
                    value: function(t) {
                        var e = t.options.rotate;
                        t.rotate = {
                            enable: e.animation.enable,
                            value: Object(n.o)(e.value) * Math.PI / 180
                        };
                        var r = e.direction;
                        switch ("random" === r && (r = Math.floor(2 * Math.random()) > 0 ? "counter-clockwise" : "clockwise"), r) {
                            case "counter-clockwise":
                            case "counterClockwise":
                                t.rotate.status = 1;
                                break;
                            case "clockwise":
                                t.rotate.status = 0
                        }
                        var o = t.options.rotate.animation;
                        o.enable && (t.rotate.velocity = Object(n.o)(o.speed) / 360 * this.container.retina.reduceFactor, o.sync || (t.rotate.velocity *= Math.random()))
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var e = t.options.rotate,
                            r = e.animation;
                        return !t.destroyed && !t.spawning && !e.path && r.enable
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.isEnabled(t) && function(t, e) {
                            var r, n = t.rotate;
                            if (n) {
                                var o = t.options.rotate.animation,
                                    i = (null !== (r = n.velocity) && void 0 !== r ? r : 0) * e.factor,
                                    a = 2 * Math.PI;
                                if (o.enable) switch (n.status) {
                                    case 0:
                                        n.value += i, n.value > a && (n.value -= a);
                                        break;
                                    case 1:
                                    default:
                                        n.value -= i, n.value < 0 && (n.value += a)
                                }
                            }
                        }(t, e)
                    }
                }]) && o(e.prototype, r), i && o(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
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
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
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

            function f(t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l(c().mark((function t(e) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("angle", (function(t) {
                                    return new i(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        bYpf: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return g
            }));
            var n = r("3wFu");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    n = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    c = a.iterator || "@@iterator",
                    u = a.asyncIterator || "@@asyncIterator",
                    l = a.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, c, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, c) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var i;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function c() {
                                return new e((function(i, c) {
                                    ! function n(i, a, c, u) {
                                        var l = h(t[i], t, a);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == o(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, a, i, c)
                                }))
                            }
                            return i = i ? i.then(c, c) : c()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, c, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function a(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e)
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

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function u(t, e, r, n, o, i, a) {
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
            var f = ["text", "character", "char"],
                s = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, o, c, s;
                    return e = t, (r = [{
                        key: "getSidesCount",
                        value: function() {
                            return 12
                        }
                    }, {
                        key: "init",
                        value: (c = i().mark((function t(e) {
                            var r, o, c, u, l, s;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = e.actualOptions, !f.find((function(t) {
                                                return Object(n.l)(t, r.particles.shape.type)
                                            }))) {
                                            t.next = 14;
                                            break
                                        }
                                        if (!((o = f.map((function(t) {
                                                return r.particles.shape.options[t]
                                            })).find((function(t) {
                                                return !!t
                                            }))) instanceof Array)) {
                                            t.next = 11;
                                            break
                                        }
                                        c = [], u = a(o);
                                        try {
                                            for (u.s(); !(l = u.n()).done;) s = l.value, c.push(Object(n.p)(s))
                                        } catch (t) {
                                            u.e(t)
                                        } finally {
                                            u.f()
                                        }
                                        return t.next = 9, Promise.allSettled(c);
                                    case 9:
                                        t.next = 14;
                                        break;
                                    case 11:
                                        if (void 0 === o) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.next = 14, Object(n.p)(o);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })), s = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, n) {
                                var o = c.apply(t, e);

                                function i(t) {
                                    u(o, r, n, i, a, "next", t)
                                }

                                function a(t) {
                                    u(o, r, n, i, a, "throw", t)
                                }
                                i(void 0)
                            }))
                        }, function(t) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "draw",
                        value: function(t, e, r, o) {
                            var i, a, c, u = e.shapeData;
                            if (void 0 !== u) {
                                var l = u.value;
                                if (void 0 !== l) {
                                    var f = e;
                                    void 0 === f.text && (f.text = l instanceof Array ? Object(n.o)(l, e.randomIndexData) : l);
                                    var s = f.text,
                                        h = null !== (i = u.style) && void 0 !== i ? i : "",
                                        p = null !== (a = u.weight) && void 0 !== a ? a : "400",
                                        v = 2 * Math.round(r),
                                        y = null !== (c = u.font) && void 0 !== c ? c : "Verdana",
                                        d = e.fill,
                                        m = s.length * r / 2;
                                    t.font = "".concat(h, " ").concat(p, " ").concat(v, 'px "').concat(y, '"');
                                    var g = {
                                        x: -m,
                                        y: r / 2
                                    };
                                    t.globalAlpha = o, d ? t.fillText(s, g.x, g.y) : t.strokeText(s, g.x, g.y), t.globalAlpha = 1
                                }
                            }
                        }
                    }]) && l(e.prototype, r), o && l(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function h(t) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function p() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                p = function() {
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

                function l(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
                        a = Object.create(i.prototype),
                        c = new _(o || []);
                    return n(a, "_invoke", {
                        value: E(t, r, c)
                    }), a
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
                var s = {};

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                u(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

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
                                        var u = f(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                s = l.value;
                                            return s && "object" == h(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, c)
                                            }), (function(t) {
                                                n("throw", t, a, c)
                                            })) : e.resolve(s).then((function(t) {
                                                l.value = t, a(l)
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
                            return P()
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
                            var u = f(t, e, r);
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
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = u(d, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), u(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(l(e, r, n, o), i);
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), s
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function v(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return y(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(t, e)
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

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function d(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function m(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            d(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            d(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function g(t) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = m(p().mark((function t(e) {
                    var r, n, o, i;
                    return p().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                r = new s, n = v(f), t.prev = 2, n.s();
                            case 4:
                                if ((o = n.n()).done) {
                                    t.next = 10;
                                    break
                                }
                                return i = o.value, t.next = 8, e.addShape(i, r);
                            case 8:
                                t.next = 4;
                                break;
                            case 10:
                                t.next = 15;
                                break;
                            case 12:
                                t.prev = 12, t.t0 = t.catch(2), n.e(t.t0);
                            case 15:
                                return t.prev = 15, n.f(), t.finish(15);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 12, 15, 18]
                    ])
                })))).apply(this, arguments)
            }
        },
        "eNv/": function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return l
            }));
            var o = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, o;
                return e = t, (r = [{
                    key: "getSidesCount",
                    value: function() {
                        return 1
                    }
                }, {
                    key: "draw",
                    value: function(t, e, r) {
                        t.moveTo(-r / 2, 0), t.lineTo(r / 2, 0)
                    }
                }]) && n(e.prototype, r), o && n(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

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
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, c, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, c) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
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
                                        var l = h(t[o], t, a);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == i(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, c, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function c(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            c(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            c(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(t) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = u(a().mark((function t(e) {
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addShape("line", new o);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        hcMC: function(t, e, r) {
            "use strict";
            r.d(e, "n", (function() {
                return a
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "f", (function() {
                return u
            })), r.d(e, "g", (function() {
                return l
            })), r.d(e, "c", (function() {
                return f
            })), r.d(e, "m", (function() {
                return s
            })), r.d(e, "e", (function() {
                return h
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "k", (function() {
                return v
            })), r.d(e, "l", (function() {
                return y
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "i", (function() {
                return m
            })), r.d(e, "d", (function() {
                return g
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

            function c(t, e) {
                t.clearRect(0, 0, e.width, e.height)
            }

            function u(t, e, r, a, c, u, l, f, s, h, p, v) {
                var y = !1;
                if (Object(o.i)(r, a) <= c) i(t, r, a), y = !0;
                else if (l) {
                    var d, m, g = {
                            x: a.x - u.width,
                            y: a.y
                        },
                        w = Object(o.j)(r, g);
                    if (w.distance <= c) {
                        var b = r.y - w.dy / w.dx * r.x;
                        d = {
                            x: 0,
                            y: b
                        }, m = {
                            x: u.width,
                            y: b
                        }
                    } else {
                        var x = {
                                x: a.x,
                                y: a.y - u.height
                            },
                            L = Object(o.j)(r, x);
                        if (L.distance <= c) {
                            var E = -(r.y - L.dy / L.dx * r.x) / (L.dy / L.dx);
                            d = {
                                x: E,
                                y: 0
                            }, m = {
                                x: E,
                                y: u.height
                            }
                        } else {
                            var O = {
                                    x: a.x - u.width,
                                    y: a.y - u.height
                                },
                                j = Object(o.j)(r, O);
                            if (j.distance <= c) {
                                var k = r.y - j.dy / j.dx * r.x;
                                m = {
                                    x: (d = {
                                        x: -k / (j.dy / j.dx),
                                        y: k
                                    }).x + u.width,
                                    y: d.y + u.height
                                }
                            }
                        }
                    }
                    d && m && (i(t, r, d), i(t, a, m), y = !0)
                }
                if (y) {
                    if (t.lineWidth = e, f && (t.globalCompositeOperation = s), t.strokeStyle = Object(n.k)(h, p), v.enable) {
                        var _ = Object(n.c)(v.color);
                        _ && (t.shadowBlur = v.blur, t.shadowColor = Object(n.k)(_))
                    }
                    t.stroke()
                }
            }

            function l(t, e, r, o, i, a, c, u) {
                ! function(t, e, r, n) {
                    t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(r.x, r.y), t.lineTo(n.x, n.y), t.closePath()
                }(t, e, r, o), i && (t.globalCompositeOperation = a), t.fillStyle = Object(n.k)(c, u), t.fill()
            }

            function f(t, e, r, n, o) {
                t.save(), i(t, n, o), t.lineWidth = e, t.strokeStyle = r, t.stroke(), t.restore()
            }

            function s(t, e, r, o) {
                var i = Math.floor(r.getRadius() / e.getRadius()),
                    a = e.getFillColor(),
                    c = r.getFillColor();
                if (a && c) {
                    var u = e.getPosition(),
                        l = r.getPosition(),
                        f = Object(n.a)(a, c, e.getRadius(), r.getRadius()),
                        s = t.createLinearGradient(u.x, u.y, l.x, l.y);
                    return s.addColorStop(0, Object(n.i)(a, o)), s.addColorStop(i > 1 ? 1 : i, Object(n.k)(f, o)), s.addColorStop(1, Object(n.i)(c, o)), s
                }
            }

            function h(t, e, r, o, a, c) {
                t.save(), i(t, r, o), t.strokeStyle = Object(n.k)(a, c), t.lineWidth = e, t.stroke(), t.restore()
            }

            function p(t, e, r, o, i, a, c, u, l, f) {
                var s, h, p, d, m = r.getPosition(),
                    g = r.options.tilt,
                    w = r.options.roll;
                if (e.save(), g.enable || w.enable) {
                    var b = w.enable && r.roll,
                        x = g.enable && r.tilt,
                        L = b && ("horizontal" === w.mode || "both" === w.mode),
                        E = b && ("vertical" === w.mode || "both" === w.mode);
                    e.setTransform(L ? Math.cos(r.roll.angle) : 1, x ? Math.cos(r.tilt.value) * r.tilt.cosDirection : 0, x ? Math.sin(r.tilt.value) * r.tilt.sinDirection : 0, E ? Math.sin(r.roll.angle) : 1, m.x, m.y)
                } else e.translate(m.x, m.y);
                e.beginPath();
                var O = (null !== (h = null === (s = r.rotate) || void 0 === s ? void 0 : s.value) && void 0 !== h ? h : 0) + (r.options.rotate.path ? r.velocity.angle : 0);
                0 !== O && e.rotate(O), a && (e.globalCompositeOperation = c);
                var j = r.shadowColor;
                f.enable && j && (e.shadowBlur = f.blur, e.shadowColor = Object(n.k)(j), e.shadowOffsetX = f.offset.x, e.shadowOffsetY = f.offset.y), i.fill && (e.fillStyle = i.fill);
                var k = r.stroke;
                e.lineWidth = null !== (p = r.strokeWidth) && void 0 !== p ? p : 0, i.stroke && (e.strokeStyle = i.stroke), v(t, e, r, u, l, o), (null !== (d = null == k ? void 0 : k.width) && void 0 !== d ? d : 0) > 0 && e.stroke(), r.close && e.closePath(), r.fill && e.fill(), e.restore(), e.save(), g.enable && r.tilt ? e.setTransform(1, Math.cos(r.tilt.value) * r.tilt.cosDirection, Math.sin(r.tilt.value) * r.tilt.sinDirection, 1, m.x, m.y) : e.translate(m.x, m.y), 0 !== O && e.rotate(O), a && (e.globalCompositeOperation = c), y(t, e, r, u, l, o), e.restore()
            }

            function v(t, e, r, n, o, i) {
                if (r.shape) {
                    var a = t.drawers.get(r.shape);
                    a && a.draw(e, r, n, o, i, t.retina.pixelRatio)
                }
            }

            function y(t, e, r, n, o, i) {
                if (r.shape) {
                    var a = t.drawers.get(r.shape);
                    (null == a ? void 0 : a.afterEffect) && a.afterEffect(e, r, n, o, i, t.retina.pixelRatio)
                }
            }

            function d(t, e, r) {
                e.draw && (t.save(), e.draw(t, r), t.restore())
            }

            function m(t, e, r, n) {
                e.drawParticle && (t.save(), e.drawParticle(t, r, n), t.restore())
            }

            function g(t, e, r, o, i, a, c, u, l) {
                if (!(a <= 0)) {
                    var f = e.getPosition();
                    r && (t.strokeStyle = Object(n.i)(r, i)), t.lineWidth = a;
                    var s = c * Math.PI / 180;
                    t.beginPath(), t.ellipse(f.x, f.y, o / 2, 2 * o, s, u, l), t.stroke()
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
        hqX8: function(t, e, r) {},
        ilkc: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return s
            }));
            var n = r("0qtW"),
                o = r("Bvs5");

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var a = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, a;
                return e = t, (r = [{
                    key: "getColorStyles",
                    value: function(t, e, r, i) {
                        var a = t.options.twinkle.particles,
                            c = a.enable && Math.random() < a.frequency,
                            u = t.options.zIndex,
                            l = Math.pow(1 - t.zIndexFactor, u.opacityRate),
                            f = c ? Object(o.o)(a.opacity) * l : i,
                            s = Object(n.b)(a.color),
                            h = s ? Object(n.i)(s, f) : void 0,
                            p = {},
                            v = c && h;
                        return p.fill = v ? h : void 0, p.stroke = v ? h : void 0, p
                    }
                }, {
                    key: "init",
                    value: function() {}
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return t.options.twinkle.particles.enable
                    }
                }, {
                    key: "update",
                    value: function() {}
                }]) && i(e.prototype, r), a && i(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                u = function() {
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
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
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
                                    ! function n(o, i, a, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == c(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, a, u)
                                            }), (function(t) {
                                                n("throw", t, a, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, a(f)
                                            }), (function(t) {
                                                return n("throw", t, a, u)
                                            }))
                                        }
                                        u(l.arg)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function l(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function f(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            l(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            l(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function s(t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = f(u().mark((function t(e) {
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("twinkle", (function() {
                                    return new a
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        jz3o: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return l
            }));
            var o = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, o;
                return e = t, (r = [{
                    key: "getSidesCount",
                    value: function(t) {
                        var e, r, n = t.shapeData;
                        return null !== (r = null !== (e = null == n ? void 0 : n.sides) && void 0 !== e ? e : null == n ? void 0 : n.nb_sides) && void 0 !== r ? r : 5
                    }
                }, {
                    key: "draw",
                    value: function(t, e, r) {
                        var n, o = e.shapeData,
                            i = this.getSidesCount(e),
                            a = null !== (n = null == o ? void 0 : o.inset) && void 0 !== n ? n : 2;
                        t.moveTo(0, 0 - r);
                        for (var c = 0; c < i; c++) t.rotate(Math.PI / i), t.lineTo(0, 0 - r * a), t.rotate(Math.PI / i), t.lineTo(0, 0 - r)
                    }
                }]) && n(e.prototype, r), o && n(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

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
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, c, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, c) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
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
                                        var l = h(t[o], t, a);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == i(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, c, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function c(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            c(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            c(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(t) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = u(a().mark((function t(e) {
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addShape("star", new o);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        "p77+": function(t, e, r) {},
        ve9a: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("Bvs5");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return !t.destroyed
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        if (this.isEnabled(t)) {
                            var r = t.life,
                                o = !1;
                            if (t.spawning) {
                                if (r.delayTime += e.value, !(r.delayTime >= t.life.delay)) return;
                                o = !0, t.spawning = !1, r.delayTime = 0, r.time = 0
                            }
                            if (-1 !== r.duration && !(t.spawning || (o ? r.time = 0 : r.time += e.value, r.time < r.duration)))
                                if (r.time = 0, t.life.count > 0 && t.life.count--, 0 !== t.life.count) {
                                    var i = this.container.canvas.size,
                                        a = Object(n.s)(0, i.width),
                                        c = Object(n.s)(0, i.width);
                                    t.position.x = Object(n.r)(a), t.position.y = Object(n.r)(c), t.spawning = !0, r.delayTime = 0, r.time = 0, t.reset();
                                    var u = t.options.life;
                                    r.delay = 1e3 * Object(n.o)(u.delay.value), r.duration = 1e3 * Object(n.o)(u.duration.value)
                                } else t.destroy()
                        }
                    }
                }]) && o(e.prototype, r), i && o(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
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
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
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

            function f(t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l(c().mark((function t(e) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("life", (function(t) {
                                    return new i(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        w66q: function(t, e, r) {},
        wPbT: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("Bvs5");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = e
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "init",
                    value: function(t) {
                        var e = t.options.tilt;
                        t.tilt = {
                            enable: e.enable,
                            value: Object(n.o)(e.value) * Math.PI / 180,
                            sinDirection: Math.random() >= .5 ? 1 : -1,
                            cosDirection: Math.random() >= .5 ? 1 : -1
                        };
                        var r = e.direction;
                        switch ("random" === r && (r = Math.floor(2 * Math.random()) > 0 ? "counter-clockwise" : "clockwise"), r) {
                            case "counter-clockwise":
                            case "counterClockwise":
                                t.tilt.status = 1;
                                break;
                            case "clockwise":
                                t.tilt.status = 0
                        }
                        var o = t.options.tilt.animation;
                        o.enable && (t.tilt.velocity = Object(n.o)(o.speed) / 360 * this.container.retina.reduceFactor, o.sync || (t.tilt.velocity *= Math.random()))
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var e = t.options.tilt.animation;
                        return !t.destroyed && !t.spawning && e.enable
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.isEnabled(t) && function(t, e) {
                            var r;
                            if (t.tilt) {
                                var n = t.options.tilt.animation,
                                    o = (null !== (r = t.tilt.velocity) && void 0 !== r ? r : 0) * e.factor,
                                    i = 2 * Math.PI;
                                if (n.enable) switch (t.tilt.status) {
                                    case 0:
                                        t.tilt.value += o, t.tilt.value > i && (t.tilt.value -= i);
                                        break;
                                    case 1:
                                    default:
                                        t.tilt.value -= o, t.tilt.value < 0 && (t.tilt.value += i)
                                }
                            }
                        }(t, e)
                    }
                }]) && o(e.prototype, r), i && o(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
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
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
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

            function f(t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l(c().mark((function t(e) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.addParticleUpdater("tilt", (function(t) {
                                    return new i(t)
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        z9Ic: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r.d(e, "a", (function() {
                return f
            }));
            var o = Math.sqrt(2),
                i = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, i;
                    return e = t, (r = [{
                        key: "getSidesCount",
                        value: function() {
                            return 4
                        }
                    }, {
                        key: "draw",
                        value: function(t, e, r) {
                            t.rect(-r / o, -r / o, 2 * r / o, 2 * r / o)
                        }
                    }]) && n(e.prototype, r), i && n(e, i), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
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
                    u = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, o) {
                    var i = e && e.prototype instanceof v ? e : v,
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

                function v() {}

                function y() {}

                function d() {}
                var m = {};
                f(m, i, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(S([])));
                w && w !== e && r.call(w, i) && (m = w);
                var b = d.prototype = v.prototype = Object.create(m);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function L(t, e) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new e((function(o, c) {
                                    ! function n(o, i, c, u) {
                                        var l = h(t[o], t, i);
                                        if ("throw" !== l.type) {
                                            var f = l.arg,
                                                s = f.value;
                                            return s && "object" == a(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                                n("next", t, c, u)
                                            }), (function(t) {
                                                n("throw", t, c, u)
                                            })) : e.resolve(s).then((function(t) {
                                                f.value = t, c(f)
                                            }), (function(t) {
                                                return n("throw", t, c, u)
                                            }))
                                        }
                                        u(l.arg)
                                    }(n, i, o, c)
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
                            return P()
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

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function S(t) {
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
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = d, n(b, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(d, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, f(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(L.prototype), f(L.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new L(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(b), f(b, l, "Generator"), f(b, i, (function() {
                    return this
                })), f(b, "toString", (function() {
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
                }, t.values = S, _.prototype = {
                    constructor: _,
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), p
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
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
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

            function f(t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = l(c().mark((function t(e) {
                    var r;
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = new i, t.next = 3, e.addShape("edge", r);
                            case 3:
                                return t.next = 5, e.addShape("square", r);
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        }
    }
]);