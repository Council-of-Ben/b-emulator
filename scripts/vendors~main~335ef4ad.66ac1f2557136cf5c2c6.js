(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        "+DqO": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return v
            }));
            var n = e("Bvs5");
            var o = e("3wFu");

            function i(t, r) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, r) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == e) return;
                    var n, o, i = [],
                        a = !0,
                        c = !1;
                    try {
                        for (e = e.call(t); !(a = (n = e.next()).done) && (i.push(n.value), !r || i.length !== r); a = !0);
                    } catch (t) {
                        c = !0, o = t
                    } finally {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    return i
                }(t, r) || a(t, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, r) {
                if (t) {
                    if ("string" == typeof t) return c(t, r);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? c(t, r) : void 0
                }
            }

            function c(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function u(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var l = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, c;
                return r = t, (e = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return !t.destroyed && !t.spawning
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        var e, n, o, i, a = t.options.move.outModes;
                        this.updateOutMode(t, r, null !== (e = a.bottom) && void 0 !== e ? e : a.default, "bottom"), this.updateOutMode(t, r, null !== (n = a.left) && void 0 !== n ? n : a.default, "left"), this.updateOutMode(t, r, null !== (o = a.right) && void 0 !== o ? o : a.default, "right"), this.updateOutMode(t, r, null !== (i = a.top) && void 0 !== i ? i : a.default, "top")
                    }
                }, {
                    key: "updateOutMode",
                    value: function(t, r, e, n) {
                        switch (e) {
                            case "bounce":
                            case "bounce-vertical":
                            case "bounce-horizontal":
                            case "bounceVertical":
                            case "bounceHorizontal":
                            case "split":
                                this.bounce(t, r, n, e);
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
                    value: function(t, r) {
                        var e = this.container;
                        Object(o.m)(t.position, e.canvas.size, t.getRadius(), r) || e.particles.remove(t, void 0, !0)
                    }
                }, {
                    key: "out",
                    value: function(t, r) {
                        var e = this.container;
                        if (!Object(o.m)(t.position, e.canvas.size, t.getRadius(), r)) {
                            var n = t.options.move.warp,
                                i = e.canvas.size,
                                a = {
                                    bottom: i.height + t.getRadius() + t.offset.y,
                                    left: -t.getRadius() - t.offset.x,
                                    right: i.width + t.getRadius() + t.offset.x,
                                    top: -t.getRadius() - t.offset.y
                                },
                                c = t.getRadius(),
                                u = Object(o.d)(t.position, c);
                            "right" === r && u.left > i.width + t.offset.x ? (t.position.x = a.left, t.initialPosition.x = t.position.x, n || (t.position.y = Math.random() * i.height, t.initialPosition.y = t.position.y)) : "left" === r && u.right < -t.offset.x && (t.position.x = a.right, t.initialPosition.x = t.position.x, n || (t.position.y = Math.random() * i.height, t.initialPosition.y = t.position.y)), "bottom" === r && u.top > i.height + t.offset.y ? (n || (t.position.x = Math.random() * i.width, t.initialPosition.x = t.position.x), t.position.y = a.top, t.initialPosition.y = t.position.y) : "top" === r && u.bottom < -t.offset.y && (n || (t.position.x = Math.random() * i.width, t.initialPosition.x = t.position.x), t.position.y = a.bottom, t.initialPosition.y = t.position.y)
                        }
                    }
                }, {
                    key: "bounce",
                    value: function(t, r, e, c) {
                        var u, l = this.container,
                            f = !1,
                            s = function(t, r) {
                                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!e) {
                                    if (Array.isArray(t) || (e = a(t)) || r && t && "number" == typeof t.length) {
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
                                var i, c = !0,
                                    u = !1;
                                return {
                                    s: function() {
                                        e = e.call(t)
                                    },
                                    n: function() {
                                        var t = e.next();
                                        return c = t.done, t
                                    },
                                    e: function(t) {
                                        u = !0, i = t
                                    },
                                    f: function() {
                                        try {
                                            c || null == e.return || e.return()
                                        } finally {
                                            if (u) throw i
                                        }
                                    }
                                }
                            }(l.plugins);
                        try {
                            for (s.s(); !(u = s.n()).done;) {
                                var h = i(u.value, 2)[1];
                                if (void 0 !== h.particleBounce && (f = h.particleBounce(t, r, e)), f) break
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
                                    var r = t.particle.velocity.x,
                                        e = !1;
                                    if ("right" === t.direction && t.bounds.right >= t.canvasSize.width && r > 0 || "left" === t.direction && t.bounds.left <= 0 && r < 0) {
                                        var o = Object(n.o)(t.particle.options.bounce.horizontal.value);
                                        t.particle.velocity.x *= -o, e = !0
                                    }
                                    if (e) {
                                        var i = t.offset.x + t.size;
                                        t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - i : t.bounds.left <= 0 && (t.particle.position.x = i), "split" === t.outMode && t.particle.destroy()
                                    }
                                }
                            }({
                                particle: t,
                                outMode: c,
                                direction: e,
                                bounds: d,
                                canvasSize: m,
                                offset: v,
                                size: y
                            }),
                            function(t) {
                                if ("bounce" === t.outMode || "bounce-vertical" === t.outMode || "bounceVertical" === t.outMode || "split" === t.outMode) {
                                    var r = t.particle.velocity.y,
                                        e = !1;
                                    if ("bottom" === t.direction && t.bounds.bottom >= t.canvasSize.height && r > 0 || "top" === t.direction && t.bounds.top <= 0 && r < 0) {
                                        var o = Object(n.o)(t.particle.options.bounce.vertical.value);
                                        t.particle.velocity.y *= -o, e = !0
                                    }
                                    if (!e) return;
                                    var i = t.offset.y + t.size;
                                    t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - i : t.bounds.top <= 0 && (t.particle.position.y = i), "split" === t.outMode && t.particle.destroy()
                                }
                            }({
                                particle: t,
                                outMode: c,
                                direction: e,
                                bounds: d,
                                canvasSize: m,
                                offset: v,
                                size: y
                            })
                        }
                    }
                }, {
                    key: "none",
                    value: function(t, r) {
                        if ((!t.options.move.distance.horizontal || "left" !== r && "right" !== r) && (!t.options.move.distance.vertical || "top" !== r && "bottom" !== r)) {
                            var e = t.options.move.gravity,
                                n = this.container,
                                i = n.canvas.size,
                                a = t.getRadius();
                            if (e.enable) {
                                var c = t.position;
                                (!e.inverse && c.y > i.height + a && "bottom" === r || e.inverse && c.y < -a && "top" === r) && n.particles.remove(t)
                            } else {
                                if (t.velocity.y > 0 && t.position.y <= i.height + a || t.velocity.y < 0 && t.position.y >= -a || t.velocity.x > 0 && t.position.x <= i.width + a || t.velocity.x < 0 && t.position.x >= -a) return;
                                Object(o.m)(t.position, n.canvas.size, a, r) || n.particles.remove(t)
                            }
                        }
                    }
                }]) && u(r.prototype, e), c && u(r, c), Object.defineProperty(r, "prototype", {
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
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                t.wrap = u;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                c(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

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
                                    var u = l(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            h = s.value;
                                        return h && "object" == f(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(h).then((function(t) {
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, c(w, "constructor", y), c(y, "constructor", v), v.displayName = c(y, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
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

            function p(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (y = p(s().mark((function t(r) {
                    return s().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("outModes", (function(t) {
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
        "+t9f": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return f
            }));
            var n = e("Bvs5");

            function o(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, i;
                return r = t, (e = [{
                    key: "init",
                    value: function(t) {
                        var r = t.options.opacity;
                        t.opacity = {
                            enable: r.animation.enable,
                            max: Object(n.m)(r.value),
                            min: Object(n.n)(r.value),
                            value: Object(n.o)(r.value),
                            loops: 0,
                            maxLoops: Object(n.o)(r.animation.count)
                        };
                        var e = r.animation;
                        if (e.enable) {
                            t.opacity.status = 0;
                            var o = r.value;
                            switch (t.opacity.min = Object(n.n)(o), t.opacity.max = Object(n.m)(o), e.startValue) {
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
                            t.opacity.velocity = Object(n.o)(e.speed) / 100 * this.container.retina.reduceFactor, e.sync || (t.opacity.velocity *= Math.random())
                        }
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var r, e, n, o;
                        return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((null !== (r = t.opacity.maxLoops) && void 0 !== r ? r : 0) <= 0 || (null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) > 0 && (null !== (n = t.opacity.loops) && void 0 !== n ? n : 0) < (null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0))
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        this.isEnabled(t) && function(t, r) {
                            var e, o, i, a, c;
                            if (t.opacity) {
                                var u = t.opacity.min,
                                    l = t.opacity.max;
                                if (!(t.destroyed || !t.opacity.enable || (null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) > 0 && (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) > (null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0))) {
                                    switch (t.opacity.status) {
                                        case 0:
                                            t.opacity.value >= l ? (t.opacity.status = 1, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value += (null !== (a = t.opacity.velocity) && void 0 !== a ? a : 0) * r.factor;
                                            break;
                                        case 1:
                                            t.opacity.value <= u ? (t.opacity.status = 0, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value -= (null !== (c = t.opacity.velocity) && void 0 !== c ? c : 0) * r.factor
                                    }! function(t, r, e, n) {
                                        switch (t.options.opacity.animation.destroy) {
                                            case "max":
                                                r >= n && t.destroy();
                                                break;
                                            case "min":
                                                r <= e && t.destroy()
                                        }
                                    }(t, t.opacity.value, u, l), t.destroyed || (t.opacity.value = Object(n.g)(t.opacity.value, u, l))
                                }
                            }
                        }(t, r)
                    }
                }]) && o(r.prototype, e), i && o(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (s = l(c().mark((function t(r) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("opacity", (function(t) {
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
        "0qtW": function(t, r, e) {
            "use strict";
            e.d(r, "c", (function() {
                return u
            })), e.d(r, "b", (function() {
                return l
            })), e.d(r, "t", (function() {
                return f
            })), e.d(r, "w", (function() {
                return s
            })), e.d(r, "x", (function() {
                return h
            })), e.d(r, "m", (function() {
                return p
            })), e.d(r, "o", (function() {
                return v
            })), e.d(r, "l", (function() {
                return y
            })), e.d(r, "n", (function() {
                return d
            })), e.d(r, "p", (function() {
                return m
            })), e.d(r, "r", (function() {
                return g
            })), e.d(r, "q", (function() {
                return w
            })), e.d(r, "s", (function() {
                return b
            })), e.d(r, "u", (function() {
                return x
            })), e.d(r, "v", (function() {
                return L
            })), e.d(r, "h", (function() {
                return E
            })), e.d(r, "k", (function() {
                return O
            })), e.d(r, "i", (function() {
                return j
            })), e.d(r, "j", (function() {
                return k
            })), e.d(r, "a", (function() {
                return _
            })), e.d(r, "f", (function() {
                return S
            })), e.d(r, "g", (function() {
                return P
            })), e.d(r, "e", (function() {
                return G
            })), e.d(r, "d", (function() {
                return N
            }));
            var n = e("Bvs5"),
                o = e("j5nf"),
                i = e("3wFu");

            function a(t, r, e) {
                var n = e;
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (r - t) * n : n < .5 ? r : n < 2 / 3 ? t + (r - t) * (2 / 3 - n) * 6 : t
            }

            function c(t) {
                if (t.startsWith("rgb")) {
                    var r = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return r ? {
                        a: r.length > 4 ? parseFloat(r[5]) : 1,
                        b: parseInt(r[3], 10),
                        g: parseInt(r[2], 10),
                        r: parseInt(r[1], 10)
                    } : void 0
                }
                if (t.startsWith("hsl")) {
                    var e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return e ? v({
                        a: e.length > 4 ? parseFloat(e[5]) : 1,
                        h: parseInt(e[1], 10),
                        l: parseInt(e[3], 10),
                        s: parseInt(e[2], 10)
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
                var o = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (function(t, r, e, n, o) {
                        return r + r + e + e + n + n + (void 0 !== o ? o + o : "")
                    })),
                    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(o);
                return i ? {
                    a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                    b: parseInt(i[3], 16),
                    g: parseInt(i[2], 16),
                    r: parseInt(i[1], 16)
                } : void 0
            }

            function u(t, r) {
                var e, n, a, c = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (void 0 !== t) {
                    var l, f = "string" == typeof t ? {
                        value: t
                    } : t;
                    if ("string" == typeof f.value) l = f.value === o.a.randomColorValue ? E() : h(f.value);
                    else if (f.value instanceof Array) {
                        var s = Object(i.o)(f.value, r, c);
                        l = u({
                            value: s
                        })
                    } else {
                        var v = f.value,
                            y = null !== (e = v.rgb) && void 0 !== e ? e : f.value;
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

            function l(t, r) {
                var e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    n = u(t, r, e);
                return void 0 !== n ? f(n) : void 0
            }

            function f(t) {
                var r = t.r / 255,
                    e = t.g / 255,
                    n = t.b / 255,
                    o = Math.max(r, e, n),
                    i = Math.min(r, e, n),
                    a = {
                        h: 0,
                        l: (o + i) / 2,
                        s: 0
                    };
                return o !== i && (a.s = a.l < .5 ? (o - i) / (o + i) : (o - i) / (2 - o - i), a.h = r === o ? (e - n) / (o - i) : a.h = e === o ? 2 + (n - r) / (o - i) : 4 + (r - e) / (o - i)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a
            }

            function s(t) {
                var r;
                return null === (r = c(t)) || void 0 === r ? void 0 : r.a
            }

            function h(t) {
                return c(t)
            }

            function p(t) {
                var r = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    e = {
                        h: t.h / 360,
                        l: t.l / 100,
                        s: t.s / 100
                    };
                if (0 === e.s) r.b = e.l, r.g = e.l, r.r = e.l;
                else {
                    var n = e.l < .5 ? e.l * (1 + e.s) : e.l + e.s - e.l * e.s,
                        o = 2 * e.l - n;
                    r.r = a(o, n, e.h + 1 / 3), r.g = a(o, n, e.h), r.b = a(o, n, e.h - 1 / 3)
                }
                return r.r = Math.floor(255 * r.r), r.g = Math.floor(255 * r.g), r.b = Math.floor(255 * r.b), r
            }

            function v(t) {
                var r = p(t);
                return {
                    a: t.a,
                    b: r.b,
                    g: r.g,
                    r: r.r
                }
            }

            function y(t) {
                var r = t.l / 100,
                    e = r + t.s / 100 * Math.min(r, 1 - r),
                    n = e ? 2 * (1 - r / e) : 0;
                return {
                    h: t.h,
                    s: 100 * n,
                    v: 100 * e
                }
            }

            function d(t) {
                var r = y(t);
                return {
                    a: t.a,
                    h: r.h,
                    s: r.s,
                    v: r.v
                }
            }

            function m(t) {
                var r = t.v / 100,
                    e = r * (1 - t.s / 100 / 2),
                    n = 0 === e || 1 === e ? 0 : (r - e) / Math.min(e, 1 - e);
                return {
                    h: t.h,
                    l: 100 * e,
                    s: 100 * n
                }
            }

            function g(t) {
                var r = m(t);
                return {
                    a: t.a,
                    h: r.h,
                    l: r.l,
                    s: r.s
                }
            }

            function w(t) {
                var r, e = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    n = t.h / 60,
                    o = t.s / 100,
                    i = t.v / 100,
                    a = i * o,
                    c = a * (1 - Math.abs(n % 2 - 1));
                if (n >= 0 && n <= 1 ? r = {
                        r: a,
                        g: c,
                        b: 0
                    } : n > 1 && n <= 2 ? r = {
                        r: c,
                        g: a,
                        b: 0
                    } : n > 2 && n <= 3 ? r = {
                        r: 0,
                        g: a,
                        b: c
                    } : n > 3 && n <= 4 ? r = {
                        r: 0,
                        g: c,
                        b: a
                    } : n > 4 && n <= 5 ? r = {
                        r: c,
                        g: 0,
                        b: a
                    } : n > 5 && n <= 6 && (r = {
                        r: a,
                        g: 0,
                        b: c
                    }), r) {
                    var u = i - a;
                    e.r = Math.floor(255 * (r.r + u)), e.g = Math.floor(255 * (r.g + u)), e.b = Math.floor(255 * (r.b + u))
                }
                return e
            }

            function b(t) {
                var r = w(t);
                return {
                    a: t.a,
                    b: r.b,
                    g: r.g,
                    r: r.r
                }
            }

            function x(t) {
                var r = {
                        r: t.r / 255,
                        g: t.g / 255,
                        b: t.b / 255
                    },
                    e = Math.max(r.r, r.g, r.b),
                    n = e - Math.min(r.r, r.g, r.b),
                    o = 0;
                return e === r.r ? o = (r.g - r.b) / n * 60 : e === r.g ? o = 60 * (2 + (r.b - r.r) / n) : e === r.b && (o = 60 * (4 + (r.r - r.g) / n)), {
                    h: o,
                    s: 100 * (e ? n / e : 0),
                    v: 100 * e
                }
            }

            function L(t) {
                var r = x(t);
                return {
                    a: t.a,
                    h: r.h,
                    s: r.s,
                    v: r.v
                }
            }

            function E(t) {
                var r = null != t ? t : 0;
                return {
                    b: Math.floor(Object(n.r)(Object(n.s)(r, 256))),
                    g: Math.floor(Object(n.r)(Object(n.s)(r, 256))),
                    r: Math.floor(Object(n.r)(Object(n.s)(r, 256)))
                }
            }

            function O(t, r) {
                return "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(null != r ? r : 1, ")")
            }

            function j(t, r) {
                return "hsla(".concat(t.h, ", ").concat(t.s, "%, ").concat(t.l, "%, ").concat(null != r ? r : 1, ")")
            }

            function k(t, r) {
                return j(m(t), r)
            }

            function _(t, r, e, o) {
                var i = t,
                    a = r;
                return void 0 === i.r && (i = p(t)), void 0 === a.r && (a = p(r)), {
                    b: Object(n.q)(i.b, a.b, e, o),
                    g: Object(n.q)(i.g, a.g, e, o),
                    r: Object(n.q)(i.r, a.r, e, o)
                }
            }

            function S(t, r, e) {
                var n, i;
                if (e === o.a.randomColorValue) return E();
                if ("mid" !== e) return e;
                var a = null !== (n = t.getFillColor()) && void 0 !== n ? n : t.getStrokeColor(),
                    c = null !== (i = null == r ? void 0 : r.getFillColor()) && void 0 !== i ? i : null == r ? void 0 : r.getStrokeColor();
                if (a && c && r) return _(a, c, t.getRadius(), r.getRadius());
                var u = null != a ? a : c;
                return u ? p(u) : void 0
            }

            function P(t, r, e) {
                var n = "string" == typeof t ? t : t.value;
                return n === o.a.randomColorValue ? e ? u({
                    value: n
                }) : r ? o.a.randomColorValue : o.a.midColorValue : u({
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

            function N(t, r, e) {
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
                return r && (T(n.h, r.h, e), T(n.s, r.s, e), T(n.l, r.l, e)), n
            }

            function T(t, r, e) {
                if (t.enable = r.enable, t.enable) {
                    if (t.velocity = Object(n.o)(r.speed) / 100 * e, r.sync) return;
                    t.status = 0, t.velocity *= Math.random(), t.value && (t.value *= Math.random())
                } else t.velocity = 0
            }
        },
        "3wFu": function(t, r, e) {
            "use strict";
            e.d(r, "n", (function() {
                return p
            })), e.d(r, "a", (function() {
                return v
            })), e.d(r, "e", (function() {
                return y
            })), e.d(r, "l", (function() {
                return d
            })), e.d(r, "p", (function() {
                return m
            })), e.d(r, "c", (function() {
                return w
            })), e.d(r, "o", (function() {
                return b
            })), e.d(r, "m", (function() {
                return x
            })), e.d(r, "b", (function() {
                return L
            })), e.d(r, "d", (function() {
                return E
            })), e.d(r, "h", (function() {
                return O
            })), e.d(r, "k", (function() {
                return j
            })), e.d(r, "j", (function() {
                return k
            })), e.d(r, "r", (function() {
                return _
            })), e.d(r, "i", (function() {
                return S
            })), e.d(r, "g", (function() {
                return P
            })), e.d(r, "f", (function() {
                return G
            })), e.d(r, "q", (function() {
                return N
            }));
            var n = e("Bvs5"),
                o = e("U1gX");

            function i() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                i = function() {
                    return t
                };
                var t = {},
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
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

            function c(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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

            function l(t, r) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return f(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return f(t, r)
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

            function f(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function s(t, r, e, n, o, i) {
                var a = {
                    bounced: !1
                };
                return r.min < n.min || r.min > n.max || r.max < n.min || r.max > n.max || (t.max >= e.min && t.max <= (e.max + e.min) / 2 && o > 0 || t.min <= e.max && t.min > (e.max + e.min) / 2 && o < 0) && (a.velocity = o * -i, a.bounced = !0), a
            }

            function h(t, r) {
                if (!(r instanceof Array)) return t.matches(r);
                var e, n = l(r);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var o = e.value;
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

            function d(t, r) {
                return t === r || r instanceof Array && r.indexOf(t) > -1
            }

            function m(t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = u(i().mark((function t(r) {
                    var e, n;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, document.fonts.load("".concat(null !== (e = r.weight) && void 0 !== e ? e : "400", " 36px '").concat(null !== (n = r.font) && void 0 !== n ? n : "Verdana", "'"));
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

            function b(t, r) {
                var e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    n = void 0 !== r && e ? r % t.length : w(t);
                return t[n]
            }

            function x(t, r, e, n) {
                return L(E(t, null != e ? e : 0), r, n)
            }

            function L(t, r, e) {
                var n = !0;
                return e && "bottom" !== e || (n = t.top < r.height), !n || e && "left" !== e || (n = t.right > 0), !n || e && "right" !== e || (n = t.left < r.width), !n || e && "top" !== e || (n = t.bottom > 0), n
            }

            function E(t, r) {
                return {
                    bottom: t.y + r,
                    left: t.x - r,
                    right: t.x + r,
                    top: t.y - r
                }
            }

            function O(t) {
                for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) e[n - 1] = arguments[n];
                for (var o = 0, i = e; o < i.length; o++) {
                    var c = i[o];
                    if (null != c)
                        if ("object" === a(c)) {
                            var u = Array.isArray(c);
                            !u || "object" === a(t) && t && Array.isArray(t) ? u || "object" === a(t) && t && !Array.isArray(t) || (t = {}) : t = [];
                            var l = function(r) {
                                if ("__proto__" === r) return "continue";
                                var e = c[r],
                                    n = "object" === a(e),
                                    o = t;
                                o[r] = n && Array.isArray(e) ? e.map((function(t) {
                                    return O(o[r], t)
                                })) : O(o[r], e)
                            };
                            for (var f in c) l(f)
                        } else t = c
                }
                return t
            }

            function j(t, r) {
                return r instanceof Array ? !!r.find((function(r) {
                    return r.enable && d(t, r.mode)
                })) : d(t, r.mode)
            }

            function k(t, r, e) {
                if (r instanceof Array) {
                    var n, o = l(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value,
                                a = i.mode;
                            i.enable && d(t, a) && _(i, e)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                } else {
                    var c = r.mode;
                    r.enable && d(t, c) && _(r, e)
                }
            }

            function _(t, r) {
                var e = t.selectors;
                if (e instanceof Array) {
                    var n, o = l(e);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            r(n.value, t)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                } else r(e, t)
            }

            function S(t, r) {
                if (r && t) return t instanceof Array ? t.find((function(t) {
                    return h(r, t.selectors)
                })) : h(r, t.selectors) ? t : void 0
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

            function G(t, r) {
                var e = t.velocity.sub(r.velocity),
                    o = e.x,
                    i = e.y,
                    a = [t.position, r.position],
                    c = a[0],
                    u = a[1],
                    l = Object(n.j)(u, c),
                    f = l.dx,
                    s = l.dy;
                if (!(o * f + i * s < 0)) {
                    var h = -Math.atan2(s, f),
                        p = t.mass,
                        v = r.mass,
                        y = t.velocity.rotate(h),
                        d = r.velocity.rotate(h),
                        m = Object(n.h)(y, d, p, v),
                        g = Object(n.h)(d, y, p, v),
                        w = m.rotate(-h),
                        b = g.rotate(-h);
                    t.velocity.x = w.x * t.factor.x, t.velocity.y = w.y * t.factor.y, r.velocity.x = b.x * r.factor.x, r.velocity.y = b.y * r.factor.y
                }
            }

            function N(t, r) {
                var e = E(t.getPosition(), t.getRadius()),
                    o = s({
                        min: e.left,
                        max: e.right
                    }, {
                        min: e.top,
                        max: e.bottom
                    }, {
                        min: r.left,
                        max: r.right
                    }, {
                        min: r.top,
                        max: r.bottom
                    }, t.velocity.x, Object(n.p)(t.options.bounce.horizontal));
                o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
                var i = s({
                    min: e.top,
                    max: e.bottom
                }, {
                    min: e.left,
                    max: e.right
                }, {
                    min: r.top,
                    max: r.bottom
                }, {
                    min: r.left,
                    max: r.right
                }, t.velocity.y, Object(n.p)(t.options.bounce.vertical));
                i.bounced && (void 0 !== i.velocity && (t.velocity.y = i.velocity), void 0 !== i.position && (t.position.y = i.position))
            }
        },
        "473K": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return h
            }));
            var n = e("0qtW"),
                o = e("Bvs5");

            function i(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function a(t, r, e, n, i) {
                var a, c = r;
                if (c && e.enable) {
                    var u = Object(o.r)(e.offset),
                        l = (null !== (a = r.velocity) && void 0 !== a ? a : 0) * t.factor + 3.6 * u;
                    i && 0 !== c.status ? (c.value -= l, c.value < 0 && (c.status = 0, c.value += c.value)) : (c.value += l, i && c.value > n && (c.status = 1, c.value -= c.value % n)), c.value > n && (c.value %= n)
                }
            }
            var c = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, o;
                return r = t, (e = [{
                    key: "init",
                    value: function(t) {
                        var r = Object(n.b)(t.options.color, t.id, t.options.reduceDuplicates);
                        r && (t.color = Object(n.d)(r, t.options.color.animation, this.container.retina.reduceFactor))
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var r, e, n, o = t.options.color.animation;
                        return !t.destroyed && !t.spawning && (void 0 !== (null === (r = t.color) || void 0 === r ? void 0 : r.h.value) && o.h.enable || void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.s.value) && o.s.enable || void 0 !== (null === (n = t.color) || void 0 === n ? void 0 : n.l.value) && o.l.enable)
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        ! function(t, r) {
                            var e, n, o, i = t.options.color.animation;
                            void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.h) && a(r, t.color.h, i.h, 360, !1), void 0 !== (null === (n = t.color) || void 0 === n ? void 0 : n.s) && a(r, t.color.s, i.s, 100, !0), void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.l) && a(r, t.color.l, i.l, 100, !0)
                        }(t, r)
                    }
                }]) && i(r.prototype, e), o && i(r, o), Object.defineProperty(r, "prototype", {
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

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                c(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

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
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == u(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, a(f)
                                        }), (function(t) {
                                            return n("throw", t, a, c)
                                        }))
                                    }
                                    c(l.arg)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, c(w, "constructor", y), c(y, "constructor", v), v.displayName = c(y, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), c(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
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

            function s(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (p = s(l().mark((function t(r) {
                    return l().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("color", (function(t) {
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
        "6I6a": function(t, r, e) {},
        "8AKg": function(t, r, e) {
            "use strict";

            function n(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            e.d(r, "a", (function() {
                return l
            }));
            var o = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var r, e, o;
                return r = t, (e = [{
                    key: "getSidesCount",
                    value: function() {
                        return 12
                    }
                }, {
                    key: "draw",
                    value: function(t, r, e) {
                        t.arc(0, 0, e, 0, 2 * Math.PI, !1)
                    }
                }]) && n(r.prototype, e), o && n(r, o), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
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
                                    var l = s(t[o], t, a);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == i(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function c(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (f = u(a().mark((function t(r) {
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addShape("circle", new o);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        Aadh: function(t, r, e) {},
        Bvs5: function(t, r, e) {
            "use strict";
            e.d(r, "g", (function() {
                return o
            })), e.d(r, "q", (function() {
                return i
            })), e.d(r, "r", (function() {
                return a
            })), e.d(r, "o", (function() {
                return c
            })), e.d(r, "n", (function() {
                return u
            })), e.d(r, "m", (function() {
                return l
            })), e.d(r, "s", (function() {
                return f
            })), e.d(r, "p", (function() {
                return s
            })), e.d(r, "j", (function() {
                return h
            })), e.d(r, "i", (function() {
                return p
            })), e.d(r, "l", (function() {
                return v
            })), e.d(r, "k", (function() {
                return y
            })), e.d(r, "h", (function() {
                return d
            })), e.d(r, "a", (function() {
                return m
            })), e.d(r, "d", (function() {
                return g
            })), e.d(r, "e", (function() {
                return w
            })), e.d(r, "f", (function() {
                return b
            })), e.d(r, "b", (function() {
                return x
            })), e.d(r, "c", (function() {
                return L
            }));
            var n = e("U1gX");

            function o(t, r, e) {
                return Math.min(Math.max(t, r), e)
            }

            function i(t, r, e, n) {
                return Math.floor((t * e + r * n) / (e + n))
            }

            function a(t) {
                var r = l(t),
                    e = u(t);
                return r === e && (e = 0), Math.random() * (r - e) + e
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

            function f(t, r) {
                if (t === r || void 0 === r && "number" == typeof t) return t;
                var e = u(t),
                    n = l(t);
                return void 0 !== r ? {
                    min: Math.min(e, r),
                    max: Math.max(n, r)
                } : f(e, n)
            }

            function s(t) {
                var r = t.random,
                    e = "boolean" == typeof r ? {
                        enable: r,
                        minimumValue: 0
                    } : r,
                    n = e.enable,
                    o = e.minimumValue;
                return c(n ? f(t.value, o) : t.value)
            }

            function h(t, r) {
                var e = t.x - r.x,
                    n = t.y - r.y;
                return {
                    dx: e,
                    dy: n,
                    distance: Math.sqrt(e * e + n * n)
                }
            }

            function p(t, r) {
                return h(t, r).distance
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
                var r = n.a.origin;
                return r.length = 1, r.angle = t, r
            }

            function d(t, r, e, o) {
                return n.a.create(t.x * (e - o) / (e + o) + 2 * r.x * o / (e + o), t.y)
            }

            function m(t, r) {
                switch (r) {
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
                var r, e;
                return void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.x) && void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.y) ? {
                    x: t.position.x * t.size.width / 100,
                    y: t.position.y * t.size.height / 100
                } : void 0
            }

            function w(t) {
                var r, e, n, o;
                return {
                    x: (null !== (e = null === (r = t.position) || void 0 === r ? void 0 : r.x) && void 0 !== e ? e : 100 * Math.random()) * t.size.width / 100,
                    y: (null !== (o = null === (n = t.position) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : 100 * Math.random()) * t.size.height / 100
                }
            }

            function b(t) {
                var r, e, n = {
                    x: void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.x) ? c(t.position.x) : void 0,
                    y: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.y) ? c(t.position.y) : void 0
                };
                return w({
                    size: t.size,
                    position: n
                })
            }

            function x(t) {
                var r, e, n, o;
                return {
                    x: null !== (e = null === (r = t.position) || void 0 === r ? void 0 : r.x) && void 0 !== e ? e : Math.random() * t.size.width,
                    y: null !== (o = null === (n = t.position) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : Math.random() * t.size.height
                }
            }

            function L(t) {
                var r, e, n = {
                    x: void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.x) ? c(t.position.x) : void 0,
                    y: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.y) ? c(t.position.y) : void 0
                };
                return x({
                    size: t.size,
                    position: n
                })
            }
        },
        GHz4: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return f
            }));
            var n = e("Bvs5");

            function o(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var r, e, i;
                return r = t, (e = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var r, e, n, o;
                        return !t.destroyed && !t.spawning && t.size.enable && ((null !== (r = t.size.maxLoops) && void 0 !== r ? r : 0) <= 0 || (null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) > 0 && (null !== (n = t.size.loops) && void 0 !== n ? n : 0) < (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0))
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        this.isEnabled(t) && function(t, r) {
                            var e, o, i, a, c = (null !== (e = t.size.velocity) && void 0 !== e ? e : 0) * r.factor,
                                u = t.size.min,
                                l = t.size.max;
                            if (!(t.destroyed || !t.size.enable || (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0) > 0 && (null !== (i = t.size.loops) && void 0 !== i ? i : 0) > (null !== (a = t.size.maxLoops) && void 0 !== a ? a : 0))) {
                                switch (t.size.status) {
                                    case 0:
                                        t.size.value >= l ? (t.size.status = 1, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value += c;
                                        break;
                                    case 1:
                                        t.size.value <= u ? (t.size.status = 0, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value -= c
                                }! function(t, r, e, n) {
                                    switch (t.options.size.animation.destroy) {
                                        case "max":
                                            r >= n && t.destroy();
                                            break;
                                        case "min":
                                            r <= e && t.destroy()
                                    }
                                }(t, t.size.value, u, l), t.destroyed || (t.size.value = Object(n.g)(t.size.value, u, l))
                            }
                        }(t, r)
                    }
                }]) && o(r.prototype, e), i && o(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (s = l(c().mark((function t(r) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("size", (function() {
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
        GNcM: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return f
            }));
            var n = e("Bvs5");

            function o(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, i;
                return r = t, (e = [{
                    key: "init",
                    value: function(t) {
                        var r = t.options.wobble;
                        r.enable ? t.wobble = {
                            angle: Math.random() * Math.PI * 2,
                            speed: Object(n.o)(r.speed) / 360
                        } : t.wobble = {
                            angle: 0,
                            speed: 0
                        }, t.retina.wobbleDistance = Object(n.o)(r.distance) * this.container.retina.pixelRatio
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return !t.destroyed && !t.spawning && t.options.wobble.enable
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        this.isEnabled(t) && function(t, r) {
                            var e;
                            if (t.options.wobble.enable && t.wobble) {
                                var n = t.wobble.speed * r.factor,
                                    o = (null !== (e = t.retina.wobbleDistance) && void 0 !== e ? e : 0) * r.factor / (1e3 / 60),
                                    i = 2 * Math.PI;
                                t.wobble.angle += n, t.wobble.angle > i && (t.wobble.angle -= i), t.position.x += o * Math.cos(t.wobble.angle), t.position.y += o * Math.abs(Math.sin(t.wobble.angle))
                            }
                        }(t, r)
                    }
                }]) && o(r.prototype, e), i && o(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (s = l(c().mark((function t(r) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("wobble", (function(t) {
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
        I5g1: function(t, r, e) {},
        K6ZH: function(t, r, e) {
            "use strict";

            function n(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            e.d(r, "a", (function() {
                return P
            }));
            var o = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var r, e, o;
                return r = t, (e = [{
                    key: "getSidesCount",
                    value: function(t) {
                        var r, e, n = t.shapeData;
                        return null !== (e = null !== (r = null == n ? void 0 : n.sides) && void 0 !== r ? r : null == n ? void 0 : n.nb_sides) && void 0 !== e ? e : 5
                    }
                }, {
                    key: "draw",
                    value: function(t, r, e) {
                        var n = this.getCenter(r, e),
                            o = this.getSidesData(r, e),
                            i = o.count.numerator * o.count.denominator,
                            a = o.count.numerator / o.count.denominator,
                            c = 180 * (a - 2) / a,
                            u = Math.PI - Math.PI * c / 180;
                        if (t) {
                            t.beginPath(), t.translate(n.x, n.y), t.moveTo(0, 0);
                            for (var l = 0; l < i; l++) t.lineTo(o.length, 0), t.translate(o.length, 0), t.rotate(u)
                        }
                    }
                }]) && n(r.prototype, e), o && n(r, o), Object.defineProperty(r, "prototype", {
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

            function a(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function u(t, r) {
                return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                })(t, r)
            }

            function l(t) {
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
                    var e, n = s(t);
                    if (r) {
                        var o = s(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return f(this, e)
                }
            }

            function f(t, r) {
                if (r && ("object" === i(r) || "function" == typeof r)) return r;
                if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
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
                    }), r && u(t, r)
                }(i, t);
                var r, e, n, o = l(i);

                function i() {
                    return a(this, i), o.apply(this, arguments)
                }
                return r = i, (e = [{
                    key: "getSidesData",
                    value: function(t, r) {
                        var e, n, o = t.shapeData,
                            i = null !== (n = null !== (e = null == o ? void 0 : o.sides) && void 0 !== e ? e : null == o ? void 0 : o.nb_sides) && void 0 !== n ? n : 5;
                        return {
                            count: {
                                denominator: 1,
                                numerator: i
                            },
                            length: 2.66 * r / (i / 3)
                        }
                    }
                }, {
                    key: "getCenter",
                    value: function(t, r) {
                        return {
                            x: -r / (this.getSidesCount(t) / 3.5),
                            y: -r / .76
                        }
                    }
                }]) && c(r.prototype, e), n && c(r, n), Object.defineProperty(r, "prototype", {
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

            function v(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, r) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                })(t, r)
            }

            function m(t) {
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
                    var e, n = w(t);
                    if (r) {
                        var o = w(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return g(this, e)
                }
            }

            function g(t, r) {
                if (r && ("object" === p(r) || "function" == typeof r)) return r;
                if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
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
                    }), r && d(t, r)
                }(i, t);
                var r, e, n, o = m(i);

                function i() {
                    return v(this, i), o.apply(this, arguments)
                }
                return r = i, (e = [{
                    key: "getSidesCount",
                    value: function() {
                        return 3
                    }
                }, {
                    key: "getSidesData",
                    value: function(t, r) {
                        return {
                            count: {
                                denominator: 2,
                                numerator: 3
                            },
                            length: 2 * r
                        }
                    }
                }, {
                    key: "getCenter",
                    value: function(t, r) {
                        return {
                            x: -r,
                            y: r / 1.66
                        }
                    }
                }]) && y(r.prototype, e), n && y(r, n), Object.defineProperty(r, "prototype", {
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
                    var o = r && r.prototype instanceof s ? r : s,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                    var c = b(a, e);
                                    if (c) {
                                        if (c === f) continue;
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
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === f) continue;
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
                t.wrap = u;
                var f = {};

                function s() {}

                function h() {}

                function p() {}
                var v = {};
                c(v, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    d = y && y(y(k([])));
                d && d !== r && e.call(d, o) && (v = d);
                var m = p.prototype = s.prototype = Object.create(v);

                function g(t) {
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
                                    var u = l(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var f = u.arg,
                                            s = f.value;
                                        return s && "object" == x(s) && e.call(s, "__await") ? r.resolve(s.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(s).then((function(t) {
                                            f.value = t, a(f)
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
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, b(t, r), "throw" === r.method)) return f;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = l(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, f) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, f)
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return h.prototype = p, c(m, "constructor", p), c(p, "constructor", h), h.displayName = c(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(u(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), c(m, a, "Generator"), c(m, o, (function() {
                    return this
                })), c(m, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), f
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function E(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function O(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (k = O(L().mark((function t(r) {
                    return L().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addShape("polygon", new h);
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
                return (S = O(L().mark((function t(r) {
                    return L().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addShape("triangle", new b);
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
                return (G = O(L().mark((function t(r) {
                    return L().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, j(r);
                            case 2:
                                return t.next = 4, _(r);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        KmHF: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return p
            }));
            var n = e("0qtW"),
                o = e("3wFu"),
                i = e("Bvs5");

            function a(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, r, e, n, o) {
                var a, c = r;
                if (c && c.enable) {
                    var u = Object(i.r)(e.offset),
                        l = (null !== (a = r.velocity) && void 0 !== a ? a : 0) * t.factor + 3.6 * u;
                    o && 0 !== c.status ? (c.value -= l, c.value < 0 && (c.status = 0, c.value += c.value)) : (c.value += l, o && c.value > n && (c.status = 1, c.value -= c.value % n)), c.value > n && (c.value %= n)
                }
            }
            var u = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, i;
                return r = t, (e = [{
                    key: "init",
                    value: function(t) {
                        var r, e, i = this.container;
                        t.stroke = t.options.stroke instanceof Array ? Object(o.o)(t.options.stroke, t.id, t.options.reduceDuplicates) : t.options.stroke, t.strokeWidth = t.stroke.width * i.retina.pixelRatio;
                        var a = null !== (r = Object(n.b)(t.stroke.color)) && void 0 !== r ? r : t.getFillColor();
                        a && (t.strokeColor = Object(n.d)(a, null === (e = t.stroke.color) || void 0 === e ? void 0 : e.animation, i.retina.reduceFactor))
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var r, e, n, o, i = null === (r = t.stroke) || void 0 === r ? void 0 : r.color;
                        return !t.destroyed && !t.spawning && !!i && (void 0 !== (null === (e = t.strokeColor) || void 0 === e ? void 0 : e.h.value) && i.animation.h.enable || void 0 !== (null === (n = t.strokeColor) || void 0 === n ? void 0 : n.s.value) && i.animation.s.enable || void 0 !== (null === (o = t.strokeColor) || void 0 === o ? void 0 : o.l.value) && i.animation.l.enable)
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        this.isEnabled(t) && function(t, r) {
                            var e, n, o, i, a, u, l, f, s, h;
                            if (null === (e = t.stroke) || void 0 === e ? void 0 : e.color) {
                                var p = t.stroke.color.animation,
                                    v = null !== (o = null === (n = t.strokeColor) || void 0 === n ? void 0 : n.h) && void 0 !== o ? o : null === (i = t.color) || void 0 === i ? void 0 : i.h;
                                v && c(r, v, p.h, 360, !1);
                                var y = null !== (u = null === (a = t.strokeColor) || void 0 === a ? void 0 : a.s) && void 0 !== u ? u : null === (l = t.color) || void 0 === l ? void 0 : l.s;
                                y && c(r, y, p.s, 100, !0);
                                var d = null !== (s = null === (f = t.strokeColor) || void 0 === f ? void 0 : f.l) && void 0 !== s ? s : null === (h = t.color) || void 0 === h ? void 0 : h.l;
                                d && c(r, d, p.l, 100, !0)
                            }
                        }(t, r)
                    }
                }]) && a(r.prototype, e), i && a(r, i), Object.defineProperty(r, "prototype", {
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
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                c(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

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
                                    var u = s(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var f = u.arg,
                                            h = f.value;
                                        return h && "object" == l(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, a(f)
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
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return h;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, c(w, "constructor", y), c(y, "constructor", v), v.displayName = c(y, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function s(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function h(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (v = h(f().mark((function t(r) {
                    return f().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("strokeColor", (function(t) {
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
        KzlG: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return k
            }));
            var n = e("0qtW");

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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, a) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(i, a) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(i, a, c, u) {
                                    var l = s(t[i], t, a);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == o(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(i, a, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
                    if (t) {
                        var r = t[a];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, a, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function a(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function c(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (f = c(i().mark((function t(r) {
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise((function(t) {
                                    r.loading = !0;
                                    var e = new Image;
                                    e.addEventListener("load", (function() {
                                        r.element = e, r.loading = !1, t()
                                    })), e.addEventListener("error", (function() {
                                        r.error = !0, r.loading = !1, console.error("Error tsParticles - loading image: ".concat(r.source)), t()
                                    })), e.src = r.source
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
                return (h = c(i().mark((function t(r) {
                    var e;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ("svg" === r.type) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3, l(r);
                            case 3:
                                return t.abrupt("return");
                            case 4:
                                return r.loading = !0, t.next = 7, fetch(r.source);
                            case 7:
                                if (e = t.sent, r.loading = !1, e.ok || (console.error("Error tsParticles - Image not found"), r.error = !0), r.error) {
                                    t.next = 14;
                                    break
                                }
                                return t.next = 13, e.text();
                            case 13:
                                r.svgData = t.sent;
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function p(t, r, e, o) {
                var i, a, c, f = function(t, r, e) {
                        var o = t.svgData;
                        if (!o) return "";
                        var i = Object(n.i)(r, e);
                        if (o.includes("fill")) return o.replace(u, (function() {
                            return i
                        }));
                        var a = o.indexOf(">");
                        return "".concat(o.substring(0, a), ' fill="').concat(i, '"').concat(o.substring(a))
                    }(t, e, null !== (a = null === (i = o.opacity) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 1),
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
                        ratio: r.width / r.height,
                        replaceColor: null !== (c = r.replaceColor) && void 0 !== c ? c : r.replace_color,
                        source: r.src
                    };
                return v.addEventListener("load", (function() {
                    var r = o.image;
                    r && (r.loaded = !0, t.element = v), h.revokeObjectURL(p)
                })), v.addEventListener("error", (function() {
                    h.revokeObjectURL(p);
                    var r = Object.assign(Object.assign({}, t), {
                        error: !1,
                        loading: !0
                    });
                    l(r).then((function() {
                        var e = o.image;
                        e && (t.element = r.element, e.loaded = !0)
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
                    var o = r && r.prototype instanceof s ? r : s,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                        if (c === f) continue;
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
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === f) continue;
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
                t.wrap = u;
                var f = {};

                function s() {}

                function h() {}

                function p() {}
                var d = {};
                c(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = p.prototype = s.prototype = Object.create(d);

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
                                    var u = l(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var f = u.arg,
                                            s = f.value;
                                        return s && "object" == v(s) && e.call(s, "__await") ? r.resolve(s.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(s).then((function(t) {
                                            f.value = t, a(f)
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
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return f;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = l(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, f) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, f)
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), f
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function d(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function m(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var g, w = function(t, r, e, n, o) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof r ? t !== r || !o : !r.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? o.call(t, e) : o ? o.value = e : r.set(t, e), e
                },
                b = function(t, r, e, n) {
                    if ("a" === e && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof r ? t !== r || !n : !r.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === e ? n : "a" === e ? n.call(t) : n ? n.value : r.get(t)
                },
                x = function() {
                    function t() {
                        ! function(t, r) {
                            if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), g.set(this, void 0), w(this, g, [], "f")
                    }
                    var r, e, n, o, i;
                    return r = t, (e = [{
                        key: "getSidesCount",
                        value: function() {
                            return 12
                        }
                    }, {
                        key: "getImages",
                        value: function(t) {
                            var r = b(this, g, "f").find((function(r) {
                                return r.id === t.id
                            }));
                            return r || (b(this, g, "f").push({
                                id: t.id,
                                images: []
                            }), this.getImages(t))
                        }
                    }, {
                        key: "addImage",
                        value: function(t, r) {
                            var e = this.getImages(t);
                            null == e || e.images.push(r)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            w(this, g, [], "f")
                        }
                    }, {
                        key: "draw",
                        value: function(t, r, e, n) {
                            var o, i, a = r.image,
                                c = null === (o = null == a ? void 0 : a.data) || void 0 === o ? void 0 : o.element;
                            if (c) {
                                var u = null !== (i = null == a ? void 0 : a.ratio) && void 0 !== i ? i : 1,
                                    l = {
                                        x: -e,
                                        y: -e
                                    };
                                (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = n), t.drawImage(c, l.x, l.y, 2 * e, 2 * e / u), (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = 1)
                            }
                        }
                    }, {
                        key: "loadShape",
                        value: function(t) {
                            var r, e, n, o = this;
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
                                            replaceColor: null !== (r = c.replaceColor) && void 0 !== r ? r : c.replace_color,
                                            source: c.src
                                        }).ratio || (i.ratio = 1);
                                        var f = {
                                            image: i,
                                            fill: null !== (e = c.fill) && void 0 !== e ? e : t.fill,
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
                        value: (o = y().mark((function t(r, e) {
                            var n, o, i;
                            return y().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.src) {
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
                                        }, this.addImage(r, o), i = e.replaceColor ? s : l, t.next = 9, i(o);
                                    case 9:
                                        t.next = 14;
                                        break;
                                    case 11:
                                        throw t.prev = 11, t.t0 = t.catch(3), new Error("tsParticles error - ".concat(e.src, " not found"));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [3, 11]
                            ])
                        })), i = function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(e, n) {
                                var i = o.apply(t, r);

                                function a(t) {
                                    d(i, e, n, a, c, "next", t)
                                }

                                function c(t) {
                                    d(i, e, n, a, c, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function(t, r) {
                            return i.apply(this, arguments)
                        })
                    }]) && m(r.prototype, e), n && m(r, n), Object.defineProperty(r, "prototype", {
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
                    var o = r && r.prototype instanceof s ? r : s,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                    var c = b(a, e);
                                    if (c) {
                                        if (c === f) continue;
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
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === f) continue;
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
                t.wrap = u;
                var f = {};

                function s() {}

                function h() {}

                function p() {}
                var v = {};
                c(v, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    d = y && y(y(k([])));
                d && d !== r && e.call(d, o) && (v = d);
                var m = p.prototype = s.prototype = Object.create(v);

                function g(t) {
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
                                    var u = l(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var f = u.arg,
                                            s = f.value;
                                        return s && "object" == L(s) && e.call(s, "__await") ? r.resolve(s.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(s).then((function(t) {
                                            f.value = t, a(f)
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
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, b(t, r), "throw" === r.method)) return f;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = l(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, f) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, f)
                }

                function x(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function O(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function k(t) {
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
                return h.prototype = p, c(m, "constructor", p), c(p, "constructor", h), h.displayName = c(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(u(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), c(m, a, "Generator"), c(m, o, (function() {
                    return this
                })), c(m, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), f
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function O(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function j(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (_ = j(E().mark((function t(r) {
                    var e;
                    return E().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = new x, t.next = 3, r.addShape("image", e);
                            case 3:
                                return t.next = 5, r.addShape("images", e);
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            g = new WeakMap
        },
        UM4E: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return s
            }));
            var n = e("0qtW"),
                o = e("Bvs5");

            function i(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var a = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var r, e, a;
                return r = t, (e = [{
                    key: "init",
                    value: function(t) {
                        var r = t.options.roll;
                        if (r.enable)
                            if (t.roll = {
                                    angle: Math.random() * Math.PI * 2,
                                    speed: Object(o.o)(r.speed) / 360
                                }, r.backColor) t.backColor = Object(n.b)(r.backColor);
                            else if (r.darken.enable && r.enlighten.enable) {
                            var e = Math.random() >= .5 ? "darken" : "enlighten";
                            t.roll.alter = {
                                type: e,
                                value: Object(o.o)("darken" === e ? r.darken.value : r.enlighten.value)
                            }
                        } else r.darken.enable ? t.roll.alter = {
                            type: "darken",
                            value: Object(o.o)(r.darken.value)
                        } : r.enlighten.enable && (t.roll.alter = {
                            type: "enlighten",
                            value: Object(o.o)(r.enlighten.value)
                        });
                        else t.roll = {
                            angle: 0,
                            speed: 0
                        }
                    }
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        var r = t.options.roll;
                        return !t.destroyed && !t.spawning && r.enable
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        this.isEnabled(t) && function(t, r) {
                            var e = t.options.roll;
                            if (t.roll && e.enable) {
                                var n = t.roll.speed * r.factor,
                                    o = 2 * Math.PI;
                                t.roll.angle += n, t.roll.angle > o && (t.roll.angle -= o)
                            }
                        }(t, r)
                    }
                }]) && i(r.prototype, e), a && i(r, a), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == c(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, a, u)
                                        }), (function(t) {
                                            n("throw", t, a, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, a(f)
                                        }), (function(t) {
                                            return n("throw", t, a, u)
                                        }))
                                    }
                                    u(l.arg)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, a, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function l(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function f(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (h = f(u().mark((function t(r) {
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("roll", (function() {
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
        XXxQ: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return f
            }));
            var n = e("Bvs5");

            function o(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, i;
                return r = t, (e = [{
                    key: "init",
                    value: function(t) {
                        var r = t.options.rotate;
                        t.rotate = {
                            enable: r.animation.enable,
                            value: Object(n.o)(r.value) * Math.PI / 180
                        };
                        var e = r.direction;
                        switch ("random" === e && (e = Math.floor(2 * Math.random()) > 0 ? "counter-clockwise" : "clockwise"), e) {
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
                        var r = t.options.rotate,
                            e = r.animation;
                        return !t.destroyed && !t.spawning && !r.path && e.enable
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        this.isEnabled(t) && function(t, r) {
                            var e, n = t.rotate;
                            if (n) {
                                var o = t.options.rotate.animation,
                                    i = (null !== (e = n.velocity) && void 0 !== e ? e : 0) * r.factor,
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
                        }(t, r)
                    }
                }]) && o(r.prototype, e), i && o(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (s = l(c().mark((function t(r) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("angle", (function(t) {
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
        bYpf: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return g
            }));
            var n = e("3wFu");

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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, a) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(i, a) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(i, a, c, u) {
                                    var l = s(t[i], t, a);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == o(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(i, a, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
                    if (t) {
                        var r = t[a];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function r() {
                                    for (; ++n < t.length;)
                                        if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                                    return r.value = void 0, r.done = !0, r
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, a, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function a(t, r) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return c(t, r)
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
                    u = !1;
                return {
                    s: function() {
                        e = e.call(t)
                    },
                    n: function() {
                        var t = e.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function c(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var f = ["text", "character", "char"],
                s = function() {
                    function t() {
                        ! function(t, r) {
                            if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var r, e, o, c, s;
                    return r = t, (e = [{
                        key: "getSidesCount",
                        value: function() {
                            return 12
                        }
                    }, {
                        key: "init",
                        value: (c = i().mark((function t(r) {
                            var e, o, c, u, l, s;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = r.actualOptions, !f.find((function(t) {
                                                return Object(n.l)(t, e.particles.shape.type)
                                            }))) {
                                            t.next = 14;
                                            break
                                        }
                                        if (!((o = f.map((function(t) {
                                                return e.particles.shape.options[t]
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
                                r = arguments;
                            return new Promise((function(e, n) {
                                var o = c.apply(t, r);

                                function i(t) {
                                    u(o, e, n, i, a, "next", t)
                                }

                                function a(t) {
                                    u(o, e, n, i, a, "throw", t)
                                }
                                i(void 0)
                            }))
                        }, function(t) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "draw",
                        value: function(t, r, e, o) {
                            var i, a, c, u = r.shapeData;
                            if (void 0 !== u) {
                                var l = u.value;
                                if (void 0 !== l) {
                                    var f = r;
                                    void 0 === f.text && (f.text = l instanceof Array ? Object(n.o)(l, r.randomIndexData) : l);
                                    var s = f.text,
                                        h = null !== (i = u.style) && void 0 !== i ? i : "",
                                        p = null !== (a = u.weight) && void 0 !== a ? a : "400",
                                        v = 2 * Math.round(e),
                                        y = null !== (c = u.font) && void 0 !== c ? c : "Verdana",
                                        d = r.fill,
                                        m = s.length * e / 2;
                                    t.font = "".concat(h, " ").concat(p, " ").concat(v, 'px "').concat(y, '"');
                                    var g = {
                                        x: -m,
                                        y: e / 2
                                    };
                                    t.globalAlpha = o, d ? t.fillText(s, g.x, g.y) : t.strokeText(s, g.x, g.y), t.globalAlpha = 1
                                }
                            }
                        }
                    }]) && l(r.prototype, e), o && l(r, o), Object.defineProperty(r, "prototype", {
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
                    var o = r && r.prototype instanceof s ? r : s,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                        if (c === f) continue;
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
                                    if (n = e.done ? "completed" : "suspendedYield", u.arg === f) continue;
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
                t.wrap = u;
                var f = {};

                function s() {}

                function v() {}

                function y() {}
                var d = {};
                c(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = s.prototype = Object.create(d);

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
                                    var u = l(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var f = u.arg,
                                            s = f.value;
                                        return s && "object" == h(s) && e.call(s, "__await") ? r.resolve(s.__await).then((function(t) {
                                            n("next", t, a, c)
                                        }), (function(t) {
                                            n("throw", t, a, c)
                                        })) : r.resolve(s).then((function(t) {
                                            f.value = t, a(f)
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
                            if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return f;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = l(e, t.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, f) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, f)
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, c(w, "constructor", y), c(y, "constructor", v), v.displayName = c(y, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), f
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function v(t, r) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return y(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return y(t, r)
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

            function y(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function d(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function m(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (w = m(p().mark((function t(r) {
                    var e, n, o, i;
                    return p().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e = new s, n = v(f), t.prev = 2, n.s();
                            case 4:
                                if ((o = n.n()).done) {
                                    t.next = 10;
                                    break
                                }
                                return i = o.value, t.next = 8, r.addShape(i, e);
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
        "eNv/": function(t, r, e) {
            "use strict";

            function n(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            e.d(r, "a", (function() {
                return l
            }));
            var o = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var r, e, o;
                return r = t, (e = [{
                    key: "getSidesCount",
                    value: function() {
                        return 1
                    }
                }, {
                    key: "draw",
                    value: function(t, r, e) {
                        t.moveTo(-e / 2, 0), t.lineTo(e / 2, 0)
                    }
                }]) && n(r.prototype, e), o && n(r, o), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
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
                                    var l = s(t[o], t, a);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == i(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function c(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (f = u(a().mark((function t(r) {
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addShape("line", new o);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        hcMC: function(t, r, e) {
            "use strict";
            e.d(r, "n", (function() {
                return a
            })), e.d(r, "b", (function() {
                return c
            })), e.d(r, "f", (function() {
                return u
            })), e.d(r, "g", (function() {
                return l
            })), e.d(r, "c", (function() {
                return f
            })), e.d(r, "m", (function() {
                return s
            })), e.d(r, "e", (function() {
                return h
            })), e.d(r, "h", (function() {
                return p
            })), e.d(r, "k", (function() {
                return v
            })), e.d(r, "l", (function() {
                return y
            })), e.d(r, "j", (function() {
                return d
            })), e.d(r, "i", (function() {
                return m
            })), e.d(r, "d", (function() {
                return g
            })), e.d(r, "a", (function() {
                return w
            }));
            var n = e("0qtW"),
                o = e("Bvs5");

            function i(t, r, e) {
                t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(e.x, e.y), t.closePath()
            }

            function a(t, r, e) {
                t.save(), t.fillStyle = null != e ? e : "rgba(0,0,0,0)", t.fillRect(0, 0, r.width, r.height), t.restore()
            }

            function c(t, r) {
                t.clearRect(0, 0, r.width, r.height)
            }

            function u(t, r, e, a, c, u, l, f, s, h, p, v) {
                var y = !1;
                if (Object(o.i)(e, a) <= c) i(t, e, a), y = !0;
                else if (l) {
                    var d, m, g = {
                            x: a.x - u.width,
                            y: a.y
                        },
                        w = Object(o.j)(e, g);
                    if (w.distance <= c) {
                        var b = e.y - w.dy / w.dx * e.x;
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
                            L = Object(o.j)(e, x);
                        if (L.distance <= c) {
                            var E = -(e.y - L.dy / L.dx * e.x) / (L.dy / L.dx);
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
                                j = Object(o.j)(e, O);
                            if (j.distance <= c) {
                                var k = e.y - j.dy / j.dx * e.x;
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
                    d && m && (i(t, e, d), i(t, a, m), y = !0)
                }
                if (y) {
                    if (t.lineWidth = r, f && (t.globalCompositeOperation = s), t.strokeStyle = Object(n.k)(h, p), v.enable) {
                        var _ = Object(n.c)(v.color);
                        _ && (t.shadowBlur = v.blur, t.shadowColor = Object(n.k)(_))
                    }
                    t.stroke()
                }
            }

            function l(t, r, e, o, i, a, c, u) {
                ! function(t, r, e, n) {
                    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(e.x, e.y), t.lineTo(n.x, n.y), t.closePath()
                }(t, r, e, o), i && (t.globalCompositeOperation = a), t.fillStyle = Object(n.k)(c, u), t.fill()
            }

            function f(t, r, e, n, o) {
                t.save(), i(t, n, o), t.lineWidth = r, t.strokeStyle = e, t.stroke(), t.restore()
            }

            function s(t, r, e, o) {
                var i = Math.floor(e.getRadius() / r.getRadius()),
                    a = r.getFillColor(),
                    c = e.getFillColor();
                if (a && c) {
                    var u = r.getPosition(),
                        l = e.getPosition(),
                        f = Object(n.a)(a, c, r.getRadius(), e.getRadius()),
                        s = t.createLinearGradient(u.x, u.y, l.x, l.y);
                    return s.addColorStop(0, Object(n.i)(a, o)), s.addColorStop(i > 1 ? 1 : i, Object(n.k)(f, o)), s.addColorStop(1, Object(n.i)(c, o)), s
                }
            }

            function h(t, r, e, o, a, c) {
                t.save(), i(t, e, o), t.strokeStyle = Object(n.k)(a, c), t.lineWidth = r, t.stroke(), t.restore()
            }

            function p(t, r, e, o, i, a, c, u, l, f) {
                var s, h, p, d, m = e.getPosition(),
                    g = e.options.tilt,
                    w = e.options.roll;
                if (r.save(), g.enable || w.enable) {
                    var b = w.enable && e.roll,
                        x = g.enable && e.tilt,
                        L = b && ("horizontal" === w.mode || "both" === w.mode),
                        E = b && ("vertical" === w.mode || "both" === w.mode);
                    r.setTransform(L ? Math.cos(e.roll.angle) : 1, x ? Math.cos(e.tilt.value) * e.tilt.cosDirection : 0, x ? Math.sin(e.tilt.value) * e.tilt.sinDirection : 0, E ? Math.sin(e.roll.angle) : 1, m.x, m.y)
                } else r.translate(m.x, m.y);
                r.beginPath();
                var O = (null !== (h = null === (s = e.rotate) || void 0 === s ? void 0 : s.value) && void 0 !== h ? h : 0) + (e.options.rotate.path ? e.velocity.angle : 0);
                0 !== O && r.rotate(O), a && (r.globalCompositeOperation = c);
                var j = e.shadowColor;
                f.enable && j && (r.shadowBlur = f.blur, r.shadowColor = Object(n.k)(j), r.shadowOffsetX = f.offset.x, r.shadowOffsetY = f.offset.y), i.fill && (r.fillStyle = i.fill);
                var k = e.stroke;
                r.lineWidth = null !== (p = e.strokeWidth) && void 0 !== p ? p : 0, i.stroke && (r.strokeStyle = i.stroke), v(t, r, e, u, l, o), (null !== (d = null == k ? void 0 : k.width) && void 0 !== d ? d : 0) > 0 && r.stroke(), e.close && r.closePath(), e.fill && r.fill(), r.restore(), r.save(), g.enable && e.tilt ? r.setTransform(1, Math.cos(e.tilt.value) * e.tilt.cosDirection, Math.sin(e.tilt.value) * e.tilt.sinDirection, 1, m.x, m.y) : r.translate(m.x, m.y), 0 !== O && r.rotate(O), a && (r.globalCompositeOperation = c), y(t, r, e, u, l, o), r.restore()
            }

            function v(t, r, e, n, o, i) {
                if (e.shape) {
                    var a = t.drawers.get(e.shape);
                    a && a.draw(r, e, n, o, i, t.retina.pixelRatio)
                }
            }

            function y(t, r, e, n, o, i) {
                if (e.shape) {
                    var a = t.drawers.get(e.shape);
                    (null == a ? void 0 : a.afterEffect) && a.afterEffect(r, e, n, o, i, t.retina.pixelRatio)
                }
            }

            function d(t, r, e) {
                r.draw && (t.save(), r.draw(t, e), t.restore())
            }

            function m(t, r, e, n) {
                r.drawParticle && (t.save(), r.drawParticle(t, e, n), t.restore())
            }

            function g(t, r, e, o, i, a, c, u, l) {
                if (!(a <= 0)) {
                    var f = r.getPosition();
                    e && (t.strokeStyle = Object(n.i)(e, i)), t.lineWidth = a;
                    var s = c * Math.PI / 180;
                    t.beginPath(), t.ellipse(f.x, f.y, o / 2, 2 * o, s, u, l), t.stroke()
                }
            }

            function w(t, r, e) {
                return {
                    h: t.h,
                    s: t.s,
                    l: t.l + ("darken" === r ? -1 : 1) * e
                }
            }
        },
        hqX8: function(t, r, e) {},
        ilkc: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return s
            }));
            var n = e("0qtW"),
                o = e("Bvs5");

            function i(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var a = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var r, e, a;
                return r = t, (e = [{
                    key: "getColorStyles",
                    value: function(t, r, e, i) {
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
                }]) && i(r.prototype, e), a && i(r, a), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new r((function(n, a) {
                                ! function n(o, i, a, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == c(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, a, u)
                                        }), (function(t) {
                                            n("throw", t, a, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, a(f)
                                        }), (function(t) {
                                            return n("throw", t, a, u)
                                        }))
                                    }
                                    u(l.arg)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, a, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function l(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function f(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (h = f(u().mark((function t(r) {
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("twinkle", (function() {
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
        jz3o: function(t, r, e) {
            "use strict";

            function n(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            e.d(r, "a", (function() {
                return l
            }));
            var o = function() {
                function t() {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var r, e, o;
                return r = t, (e = [{
                    key: "getSidesCount",
                    value: function(t) {
                        var r, e, n = t.shapeData;
                        return null !== (e = null !== (r = null == n ? void 0 : n.sides) && void 0 !== r ? r : null == n ? void 0 : n.nb_sides) && void 0 !== e ? e : 5
                    }
                }, {
                    key: "draw",
                    value: function(t, r, e) {
                        var n, o = r.shapeData,
                            i = this.getSidesCount(r),
                            a = null !== (n = null == o ? void 0 : o.inset) && void 0 !== n ? n : 2;
                        t.moveTo(0, 0 - e);
                        for (var c = 0; c < i; c++) t.rotate(Math.PI / i), t.lineTo(0, 0 - e * a), t.rotate(Math.PI / i), t.lineTo(0, 0 - e)
                    }
                }]) && n(r.prototype, e), o && n(r, o), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    c = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
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
                                    var l = s(t[o], t, a);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == i(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, c, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function c(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function u(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (f = u(a().mark((function t(r) {
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addShape("star", new o);
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        "p77+": function(t, r, e) {},
        ve9a: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return f
            }));
            var n = e("Bvs5");

            function o(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, i;
                return r = t, (e = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "isEnabled",
                    value: function(t) {
                        return !t.destroyed
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        if (this.isEnabled(t)) {
                            var e = t.life,
                                o = !1;
                            if (t.spawning) {
                                if (e.delayTime += r.value, !(e.delayTime >= t.life.delay)) return;
                                o = !0, t.spawning = !1, e.delayTime = 0, e.time = 0
                            }
                            if (-1 !== e.duration && !(t.spawning || (o ? e.time = 0 : e.time += r.value, e.time < e.duration)))
                                if (e.time = 0, t.life.count > 0 && t.life.count--, 0 !== t.life.count) {
                                    var i = this.container.canvas.size,
                                        a = Object(n.s)(0, i.width),
                                        c = Object(n.s)(0, i.width);
                                    t.position.x = Object(n.r)(a), t.position.y = Object(n.r)(c), t.spawning = !0, e.delayTime = 0, e.time = 0, t.reset();
                                    var u = t.options.life;
                                    e.delay = 1e3 * Object(n.o)(u.delay.value), e.duration = 1e3 * Object(n.o)(u.duration.value)
                                } else t.destroy()
                        }
                    }
                }]) && o(r.prototype, e), i && o(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (s = l(c().mark((function t(r) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("life", (function(t) {
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
        w66q: function(t, r, e) {},
        wPbT: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return f
            }));
            var n = e("Bvs5");

            function o(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var i = function() {
                function t(r) {
                    ! function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.container = r
                }
                var r, e, i;
                return r = t, (e = [{
                    key: "init",
                    value: function(t) {
                        var r = t.options.tilt;
                        t.tilt = {
                            enable: r.enable,
                            value: Object(n.o)(r.value) * Math.PI / 180,
                            sinDirection: Math.random() >= .5 ? 1 : -1,
                            cosDirection: Math.random() >= .5 ? 1 : -1
                        };
                        var e = r.direction;
                        switch ("random" === e && (e = Math.floor(2 * Math.random()) > 0 ? "counter-clockwise" : "clockwise"), e) {
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
                        var r = t.options.tilt.animation;
                        return !t.destroyed && !t.spawning && r.enable
                    }
                }, {
                    key: "update",
                    value: function(t, r) {
                        this.isEnabled(t) && function(t, r) {
                            var e;
                            if (t.tilt) {
                                var n = t.options.tilt.animation,
                                    o = (null !== (e = t.tilt.velocity) && void 0 !== e ? e : 0) * r.factor,
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
                        }(t, r)
                    }
                }]) && o(r.prototype, e), i && o(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (s = l(c().mark((function t(r) {
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.addParticleUpdater("tilt", (function(t) {
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
        z9Ic: function(t, r, e) {
            "use strict";

            function n(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            e.d(r, "a", (function() {
                return f
            }));
            var o = Math.sqrt(2),
                i = function() {
                    function t() {
                        ! function(t, r) {
                            if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var r, e, i;
                    return r = t, (e = [{
                        key: "getSidesCount",
                        value: function() {
                            return 4
                        }
                    }, {
                        key: "draw",
                        value: function(t, r, e) {
                            t.rect(-e / o, -e / o, 2 * e / o, 2 * e / o)
                        }
                    }]) && n(r.prototype, e), i && n(r, i), Object.defineProperty(r, "prototype", {
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
                    r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function l(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function f(t, r, e, n) {
                    var o = r && r.prototype instanceof p ? r : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
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
                                var u = s(t, r, e);
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

                function s(t, r, e) {
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
                t.wrap = f;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var d = {};
                l(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== r && e.call(g, o) && (d = g);
                var w = y.prototype = p.prototype = Object.create(d);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        l(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function x(t, r) {
                    var n;
                    this._invoke = function(o, i) {
                        function c() {
                            return new r((function(n, c) {
                                ! function n(o, i, c, u) {
                                    var l = s(t[o], t, i);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                                            n("next", t, c, u)
                                        }), (function(t) {
                                            n("throw", t, c, u)
                                        })) : r.resolve(h).then((function(t) {
                                            f.value = t, c(f)
                                        }), (function(t) {
                                            return n("throw", t, c, u)
                                        }))
                                    }
                                    u(l.arg)
                                }(o, i, n, c)
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
                    var n = s(e, t.iterator, r.arg);
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function k(t) {
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
                return v.prototype = y, l(w, "constructor", y), l(y, "constructor", v), v.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), l(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(f(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), l(w, u, "Generator"), l(w, o, (function() {
                    return this
                })), l(w, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: r,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, r, e, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void e(t)
                }
                c.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function l(t) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(r, e);

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
                return (s = l(c().mark((function t(r) {
                    var e;
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = new i, t.next = 3, r.addShape("edge", e);
                            case 3:
                                return t.next = 5, r.addShape("square", e);
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