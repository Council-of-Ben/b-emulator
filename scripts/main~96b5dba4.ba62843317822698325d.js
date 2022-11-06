(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        "/gDf": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                d = a("TSYQ"),
                m = a.n(d),
                _ = a("wd/R"),
                p = a.n(_),
                f = a("cpGi"),
                h = a("JeI0"),
                y = a.n(h),
                g = a("H1WH"),
                b = a("FKJl"),
                x = a("E8Bj"),
                v = a("XTAU"),
                w = a("ca/f"),
                C = a("3k2l"),
                k = a("DPg2"),
                E = a.n(k),
                O = a("Xst1"),
                j = a.n(O),
                N = a("74sb"),
                S = a("qnYv"),
                I = a("i4/Q"),
                B = a("lmLo");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || R(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                D = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new E(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function _() {}

                function p() {}
                var f = {};
                l(f, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(O([])));
                y && y !== t && a.call(y, r) && (f = y);
                var g = p.prototype = m.prototype = Object.create(f);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == T(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return _.prototype = p, n(g, "constructor", {
                    value: p,
                    configurable: !0
                }), n(p, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = l(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(x.prototype), l(x.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new x(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function F(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(a), !0).forEach((function(t) {
                        M(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : F(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function M(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function L(e) {
                return function(e) {
                    if (Array.isArray(e)) return A(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || R(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, t) {
                if (e) {
                    if ("string" == typeof e) return A(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? A(e, t) : void 0
                }
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function q(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function H(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var r = e.apply(t, a);

                        function s(e) {
                            q(r, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            q(r, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function G(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function U(e, t) {
                return (U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Y(e) {
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
                    var a, n = J(e);
                    if (t) {
                        var o = J(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return Q(this, a)
                }
            }

            function Q(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return V(e)
            }

            function V(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function J(e) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var W = function(e, t) {
                    return e.playCount !== t.playCount ? t.playCount - e.playCount : e.title < t.title ? -1 : e.title > t.title ? 1 : 0
                },
                X = function(e) {
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
                        }), t && U(e, t)
                    }(_, e);
                    var t, a, n, r, s, i, l, u, d = Y(_);

                    function _(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, _), (t = d.call(this, e)).state = {
                            allGames: [],
                            games: [],
                            folders: {},
                            user: null,
                            deleteId: "",
                            deleting: !1,
                            loading: !1,
                            copyGame: !1,
                            copying: !1,
                            noFolder: !1,
                            creatingFolder: !1,
                            editingFolder: !1,
                            folderName: "",
                            oldFolderName: "",
                            folderColor: "#1f77b4",
                            folderError: "",
                            deleteFolder: "",
                            inFolder: !1,
                            justCopied: !1,
                            mergeGame: {},
                            mergeGame2: {},
                            noMerge: !1,
                            searchInput: "",
                            noRole: !1,
                            loadingRole: !1,
                            showNews: !1
                        }, t.loading = !1, t.gotPlus = !1, t.plus = !1, t.here = !0, t.onEdit = t.onEdit.bind(V(t)), t.onDelete = t.onDelete.bind(V(t)), t.onDeleteConfirm = t.onDeleteConfirm.bind(V(t)), t.onCopy = t.onCopy.bind(V(t)), t.onCopyConfirm = t.onCopyConfirm.bind(V(t)), t.onMerge = t.onMerge.bind(V(t)), t.onMergeConfirm = t.onMergeConfirm.bind(V(t)), t.onHost = t.onHost.bind(V(t)), t.onSolo = t.onSolo.bind(V(t)), t.getIsPlus = t.getIsPlus.bind(V(t)), t.setDisplay = t.setDisplay.bind(V(t)), t.setRole = t.setRole.bind(V(t)), t.openFolder = t.openFolder.bind(V(t)), t.newFolder = t.newFolder.bind(V(t)), t.createFolder = t.createFolder.bind(V(t)), t.editFolder = t.editFolder.bind(V(t)), t.addToFolder = t.addToFolder.bind(V(t)), t.removeFromFolder = t.removeFromFolder.bind(V(t)), t.deleteFolder = t.deleteFolder.bind(V(t)), t.shouldShowFolder = t.shouldShowFolder.bind(V(t)), t.copyToClipboard = t.copyToClipboard.bind(V(t)), t.endTour = t.endTour.bind(V(t)), t
                    }
                    return t = _, (a = [{
                        key: "componentDidMount",
                        value: (u = H(D().mark((function e() {
                            var t, a = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (t = e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return Object(b.b)("MySetsPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 7:
                                        this.setState({
                                            user: t
                                        }), S.a.get("/api/users/allsets").then((function(e) {
                                            if (a.here) {
                                                var n = L(e.data.games);
                                                n.sort(W);
                                                var o = L(n),
                                                    r = z({}, e.data.folders),
                                                    s = n.map((function(e) {
                                                        return e._id
                                                    }));
                                                Object.values(r).forEach((function(e) {
                                                    e.sets.forEach((function(e) {
                                                        var t = s.indexOf(e); - 1 !== t && (n.splice(t, 1), s.splice(t, 1))
                                                    }))
                                                }));
                                                var i = !1;
                                                e.data.news && "welcome" !== e.data.modalMessage && (i = !0, S.a.put("/api/users/setnews", {
                                                    name: t.name,
                                                    news: !1
                                                }).catch((function(e) {
                                                    console.error(e)
                                                }))), a.setState({
                                                    allGames: o,
                                                    games: n,
                                                    folders: r,
                                                    noRole: !t.role,
                                                    tour: "welcome" === e.data.modalMessage,
                                                    showNews: i,
                                                    ready: !0
                                                })
                                            }
                                        })).catch((function(e) {
                                            Object(b.b)(e)
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return u.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.loading = !0, this.here = !1, clearTimeout(this.copyTimeout)
                        }
                    }, {
                        key: "onEdit",
                        value: function(e) {
                            this.loading || (this.loading = !0, this.props.history.push("/edit?id=".concat(e)))
                        }
                    }, {
                        key: "onDelete",
                        value: function(e) {
                            this.setState({
                                deleteId: e,
                                deleting: !0
                            })
                        }
                    }, {
                        key: "onDeleteConfirm",
                        value: function(e) {
                            var t = this;
                            this.loading || (this.loading = !0, e ? (this.setState({
                                loading: !0
                            }), S.a.delete("/api/games", {
                                params: {
                                    gameId: this.state.deleteId
                                }
                            }).then((function() {
                                if (t.here) {
                                    var e = JSON.parse(JSON.stringify(t.state.games)),
                                        a = e.map((function(e) {
                                            return e._id
                                        })).indexOf(t.state.deleteId); - 1 !== a && e.splice(a, 1);
                                    var n = JSON.parse(JSON.stringify(t.state.allGames)); - 1 !== (a = n.map((function(e) {
                                        return e._id
                                    })).indexOf(t.state.deleteId)) && n.splice(a, 1), t.setState({
                                        games: e,
                                        allGames: n,
                                        deleteId: "",
                                        loading: !1,
                                        deleting: !1
                                    }), t.loading = !1
                                }
                            })).catch((function(e) {
                                Object(b.b)(e)
                            }))) : (this.loading = !1, this.setState({
                                deleteId: "",
                                deleting: !1
                            })))
                        }
                    }, {
                        key: "onCopy",
                        value: (l = H(D().mark((function e(t) {
                            var a = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.loading) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.loading = !0, this.gotPlus) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 6, new Promise((function(e) {
                                            return a.getIsPlus(e)
                                        }));
                                    case 6:
                                        this.plus ? this.setState({
                                            copyGame: t,
                                            copying: !0
                                        }) : this.setState({
                                            copying: !0
                                        }), this.loading = !1;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "onCopyConfirm",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loading: !0
                            }), S.a.post("/api/games/copy", {
                                newAuthor: this.state.copyGame.author,
                                id: this.state.copyGame._id,
                                isDuplicate: !1
                            }).then((function(t) {
                                e.here && e.props.history.push("/edit?id=".concat(t.data._id))
                            })).catch((function(t) {
                                e.here && (Object(b.b)(t), e.loading = !1, e.setState({
                                    copying: !1,
                                    loading: !1
                                }))
                            })))
                        }
                    }, {
                        key: "onMerge",
                        value: (i = H(D().mark((function e(t) {
                            var a = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.loading) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.loading = !0, this.gotPlus) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 6, new Promise((function(e) {
                                            return a.getIsPlus(e)
                                        }));
                                    case 6:
                                        this.plus ? this.setState({
                                            mergeGame: t
                                        }) : this.setState({
                                            noMerge: !0
                                        }), this.loading = !1;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "onMergeConfirm",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loading: !0
                            }), S.a.post("/api/games/merge", {
                                game1Id: this.state.mergeGame._id,
                                game2Id: this.state.mergeGame2._id
                            }).then((function(t) {
                                e.here && e.props.history.push("/edit?id=".concat(t.data._id))
                            })).catch((function(t) {
                                e.here && (Object(b.b)(t), e.loading = !1, e.setState({
                                    loading: !1,
                                    mergeGame: {},
                                    mergeGame2: {}
                                }))
                            })))
                        }
                    }, {
                        key: "onHost",
                        value: function(e) {
                            this.loading || (this.loading = !0, window.open("".concat("https://play.blooket.com", "/host?id=").concat(e), "_blank").focus(), window.location.reload())
                        }
                    }, {
                        key: "onSolo",
                        value: function(e) {
                            this.loading || (this.loading = !0, window && (window.open("".concat("https://play.blooket.com", "/solo?id=").concat(e), "_blank").focus(), window.location.reload()))
                        }
                    }, {
                        key: "getIsPlus",
                        value: function(e) {
                            var t = this;
                            S.a.get("/api/users/plan").then((function(a) {
                                t.here && (t.gotPlus = !0, t.plus = a.data.hasPlus, e())
                            })).catch((function(a) {
                                t.here && (Object(b.b)(a), t.loading = !1, t.setState({
                                    copying: !1,
                                    noMerge: !0,
                                    noFolder: !0
                                }, e))
                            }))
                        }
                    }, {
                        key: "setDisplay",
                        value: function(e) {
                            var t = z({}, e),
                                a = this.state.allGames.map((function(e) {
                                    return e._id
                                })),
                                n = L(this.state.allGames);
                            Object.values(t).forEach((function(e) {
                                e.sets.forEach((function(e) {
                                    var t = a.indexOf(e); - 1 !== t && (n.splice(t, 1), a.splice(t, 1))
                                }))
                            })), this.setState({
                                games: n,
                                folders: t,
                                inFolder: !1
                            })
                        }
                    }, {
                        key: "setRole",
                        value: function(e) {
                            var t = this;
                            this.setState({
                                loadingRole: !0
                            }), S.a.put("/api/users/setrole", {
                                name: this.state.user.name,
                                role: e
                            }).then((function() {
                                t.props.user.getLoggedIn(), t.here && t.setState({
                                    user: z(z({}, t.state.user), {}, {
                                        role: e
                                    }),
                                    loadingRole: !1,
                                    noRole: !1
                                })
                            })).catch((function(e) {
                                Object(b.b)(e), t.setState({
                                    loadingRole: !1
                                })
                            }))
                        }
                    }, {
                        key: "openFolder",
                        value: function(e, t) {
                            var a = this,
                                n = t.sets,
                                o = this.state.allGames.filter((function(e) {
                                    return n.includes(e._id)
                                }));
                            o.sort(W), setTimeout((function() {
                                a.state.editingFolder || a.state.deleting || a.setState({
                                    games: o,
                                    folderName: e,
                                    folderColor: t.color,
                                    inFolder: !0,
                                    searchInput: e.toLowerCase().includes(a.state.searchInput.toLowerCase()) ? "" : a.state.searchInput
                                })
                            }))
                        }
                    }, {
                        key: "newFolder",
                        value: (s = H(D().mark((function e() {
                            var t = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.loading) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.loading = !0, this.gotPlus) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 6, new Promise((function(e) {
                                            return t.getIsPlus(e)
                                        }));
                                    case 6:
                                        this.plus ? this.setState({
                                            creatingFolder: !0,
                                            folderName: "",
                                            folderColor: "#1f77b4"
                                        }) : this.setState({
                                            noFolder: !0
                                        }), this.loading = !1;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "createFolder",
                        value: function() {
                            var e = this;
                            if (!this.loading) {
                                if (this.loading = !0, !this.state.folderName) return this.loading = !1, void this.setState({
                                    folderError: "You need a folder name."
                                });
                                this.setState({
                                    loading: !0
                                }), S.a.put("/api/users/folders/new", {
                                    folderName: this.state.folderName,
                                    folderColor: this.state.folderColor
                                }).then((function(t) {
                                    e.here && (t.data.success ? e.setState({
                                        folders: t.data.user.folders,
                                        creatingFolder: !1,
                                        loading: !1
                                    }) : e.setState({
                                        folderError: t.data.msg,
                                        loading: !1
                                    }), e.loading = !1)
                                })).catch((function(t) {
                                    e.here && (Object(b.b)(t), e.loading = !1, e.setState({
                                        creatingFolder: !1,
                                        loading: !1
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "editFolder",
                        value: function() {
                            var e = this;
                            if (!this.loading) {
                                if (this.loading = !0, !this.state.folderName) return this.loading = !1, void this.setState({
                                    folderError: "You need a folder name."
                                });
                                this.setState({
                                    loading: !0
                                }), S.a.put("/api/users/folders/edit", {
                                    oldFolderName: this.state.oldFolderName,
                                    folderName: this.state.folderName,
                                    folderColor: this.state.folderColor
                                }).then((function(t) {
                                    e.here && (t.data.success ? e.setState({
                                        folders: t.data.user.folders,
                                        editingFolder: !1,
                                        loading: !1
                                    }) : e.setState({
                                        folderError: t.data.msg,
                                        loading: !1
                                    }), e.loading = !1)
                                })).catch((function(t) {
                                    e.here && (Object(b.b)(t), e.loading = !1, e.setState({
                                        editingFolder: !1,
                                        loading: !1
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "addToFolder",
                        value: (r = H(D().mark((function e() {
                            var t = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.loading) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.loading = !0, !this.state.inFolder || !this.state.folderName) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 6, S.a.put("/api/users/folders/removeset", {
                                            folderName: this.state.folderName,
                                            setId: this.state.movingGame._id
                                        }).then().catch((function(e) {
                                            Object(b.b)(e)
                                        }));
                                    case 6:
                                        S.a.put("/api/users/folders/addsets", {
                                            folderName: this.state.moveLocation,
                                            sets: [this.state.movingGame._id]
                                        }).then((function(e) {
                                            if (t.here) {
                                                var a = e.data || t.state.folders;
                                                t.setDisplay(a), t.setState({
                                                    movingGame: ""
                                                }), t.loading = !1
                                            }
                                        })).catch((function(e) {
                                            t.here && (Object(b.b)(e), t.loading = !1, t.setState({
                                                movingGame: ""
                                            }))
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "removeFromFolder",
                        value: function(e) {
                            var t = this;
                            this.loading || (this.loading = !0, S.a.put("/api/users/folders/removeset", {
                                folderName: this.state.folderName,
                                setId: e
                            }).then((function(a) {
                                if (t.here) {
                                    var n = a.data || t.state.folders,
                                        o = JSON.parse(JSON.stringify(t.state.games)),
                                        r = o.map((function(e) {
                                            return e._id
                                        })).indexOf(e); - 1 !== r && o.splice(r, 1), t.setState({
                                        folders: n,
                                        games: o
                                    }), t.loading = !1
                                }
                            })).catch((function(e) {
                                t.here && (Object(b.b)(e), t.loading = !1)
                            })))
                        }
                    }, {
                        key: "deleteFolder",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loading: !0
                            }), S.a.put("/api/users/folders/delete", {
                                folderName: this.state.deleteFolder
                            }).then((function(t) {
                                if (e.here) {
                                    var a = t.data || e.state.folders;
                                    e.setDisplay(a), e.setState({
                                        deleting: !1,
                                        deleteFolder: "",
                                        loading: !1
                                    }), e.loading = !1
                                }
                            })).catch((function(t) {
                                e.here && (Object(b.b)(t), e.loading = !1, e.setState({
                                    deleting: !1,
                                    deleteFolder: "",
                                    loading: !1
                                }))
                            })))
                        }
                    }, {
                        key: "shouldShowFolder",
                        value: function(e, t) {
                            if (e.toLowerCase().includes(this.state.searchInput.toLowerCase())) return !0;
                            for (var a = t.sets, n = this.state.allGames.filter((function(e) {
                                    return a.includes(e._id)
                                })), o = 0; o < n.length; o++)
                                if (n[o].title.toLowerCase().includes(this.state.searchInput.toLowerCase())) return !0;
                            return !1
                        }
                    }, {
                        key: "copyToClipboard",
                        value: function(e) {
                            var t = this;
                            Object(N.c)("".concat("https://dashboard.blooket.com", "/set/").concat(e)), clearTimeout(this.copyTimeout), this.setState({
                                justCopied: !0
                            }, (function() {
                                t.copyTimeout = setTimeout((function() {
                                    t.setState({
                                        justCopied: !1
                                    })
                                }), 1200)
                            }))
                        }
                    }, {
                        key: "endTour",
                        value: function(e) {
                            this.setState({
                                tour: !1
                            }), e && S.a.put("/api/users/setmessage", {
                                name: this.state.user.name,
                                message: ""
                            }).catch((function(e) {
                                Object(b.b)(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                className: g.isMobile ? j.a.mBody : j.a.body
                            }, o.a.createElement(v.a, {
                                title: "Dashboard | Blooket",
                                desc: "The Dashboard allows you to access your question sets, favorites, game history, and news about Blooket events!"
                            }), o.a.createElement(I.a, {
                                user: this.state.user,
                                page: "My Sets",
                                newNews: this.state.showNews,
                                afterNews: function() {
                                    return e.setState({
                                        showNews: !1
                                    })
                                },
                                topContent: this.state.ready && (this.state.games.length > 0 || Object.keys(this.state.folders).length > 0) ? o.a.createElement(o.a.Fragment, null, this.state.inFolder ? null : o.a.createElement("div", {
                                    className: E.a.topFolderButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: this.newFolder
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-folder-plus", E.a.topFolderIcon)
                                })), o.a.createElement("div", {
                                    className: E.a.searchBar
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-search", E.a.searchIcon)
                                }), o.a.createElement("input", {
                                    className: E.a.searchInput,
                                    placeholder: "Search your sets...",
                                    onChange: function(t) {
                                        return e.setState({
                                            searchInput: t.target.value
                                        })
                                    },
                                    value: this.state.searchInput,
                                    type: "text"
                                }))) : null
                            }), o.a.createElement("div", {
                                className: j.a.profileBody
                            }, o.a.createElement("div", {
                                className: E.a.header
                            }, "My Sets"), 0 === this.state.allGames.length && this.state.ready ? o.a.createElement("div", {
                                style: {
                                    display: "flex"
                                }
                            }, o.a.createElement("div", {
                                className: E.a.nothingContainer
                            }, o.a.createElement("div", {
                                className: E.a.nothingHeader
                            }, "You'll Need a Question Set to Host!"), o.a.createElement("div", {
                                className: E.a.nothingButtonsRow
                            }, o.a.createElement(B.a, {
                                color: "#9a49aa",
                                onClick: function() {
                                    return e.props.history.push("/create")
                                },
                                outsideClass: E.a.nothingButton
                            }, o.a.createElement("div", {
                                className: E.a.nothingButtonInside
                            }, o.a.createElement("i", {
                                className: m()("fas fa-edit", E.a.nothingIcon)
                            }), "Create a Set")), o.a.createElement(B.a, {
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.props.history.push("/discover")
                                },
                                outsideClass: E.a.nothingButton
                            }, o.a.createElement("div", {
                                className: E.a.nothingButtonInside
                            }, o.a.createElement("i", {
                                className: m()("fas fa-compass", E.a.nothingIcon)
                            }), "Discover Sets"))), o.a.createElement("a", {
                                href: "https://www.youtube.com/watch?v=hhn7dAP6BF8",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: E.a.nothingLink
                            }, "Getting Started Tutorial"))) : null, this.state.allGames.length > 0 ? o.a.createElement("div", {
                                className: E.a.folderHolder
                            }, this.state.inFolder ? o.a.createElement(B.a, {
                                outsideClass: E.a.folderButton,
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.setDisplay(e.state.folders)
                                }
                            }, o.a.createElement("div", {
                                className: E.a.folderButtonInside,
                                style: {
                                    minWidth: 0
                                }
                            }, o.a.createElement("i", {
                                className: m()("fas fa-reply", E.a.folderButtonIcon)
                            }), "Back")) : Object.entries(this.state.folders).map((function(t, a) {
                                var n = P(t, 2),
                                    r = n[0],
                                    s = n[1];
                                return e.shouldShowFolder(r, s) ? o.a.createElement(B.a, {
                                    outsideClass: E.a.folderButton,
                                    color: s.color,
                                    style: {
                                        zIndex: Object.keys(e.state.folders).length - a
                                    },
                                    key: r,
                                    onClick: function() {
                                        return e.openFolder(r, s)
                                    }
                                }, o.a.createElement("div", {
                                    className: E.a.folderButtonInside
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-folder", E.a.folderButtonIcon)
                                }), r, o.a.createElement("div", {
                                    className: E.a.folderButtonDropdown,
                                    role: "button",
                                    tabIndex: 0
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-ellipsis-v", E.a.folderButtonDropdownIcon)
                                }), o.a.createElement("div", {
                                    className: E.a.folderButtonDropdownMenu
                                }, o.a.createElement("div", {
                                    className: E.a.folderButtonDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            editingFolder: !0,
                                            folderName: r,
                                            folderColor: s.color,
                                            oldFolderName: r
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-pencil-alt", E.a.folderButtonDropdownOptionIcon)
                                }), "Edit"), o.a.createElement("div", {
                                    className: E.a.folderButtonDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            deleting: !0,
                                            deleteFolder: r
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-trash-alt", E.a.folderButtonDropdownOptionIcon)
                                }), "Delete"))))) : null
                            }))) : null, o.a.createElement("div", {
                                className: E.a.container
                            }, this.state.games.filter((function(t) {
                                return t.title.toLowerCase().includes(e.state.searchInput.toLowerCase())
                            })).map((function(t) {
                                return o.a.createElement("div", {
                                    key: t._id,
                                    className: E.a.setContainer
                                }, t.coverImage ? o.a.createElement("div", {
                                    className: E.a.setImageFiller
                                }, o.a.createElement(y.a, {
                                    height: 180
                                }, o.a.createElement("img", {
                                    src: Object(N.f)(t.coverImage.url),
                                    alt: "Cover",
                                    className: E.a.coverImage,
                                    draggable: !1
                                }))) : o.a.createElement("div", {
                                    className: E.a.setFillerContainer
                                }, o.a.createElement("div", {
                                    className: E.a.setFillerText
                                }, "Blooket")), e.state.inFolder ? o.a.createElement("div", {
                                    "data-tip": "Remove from Folder",
                                    className: E.a.removeFromFolder,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.removeFromFolder(t._id)
                                    }
                                }, o.a.createElement("i", {
                                    className: "fas fa-folder-minus"
                                })) : null, t.private ? null : o.a.createElement(c.b, {
                                    className: E.a.viewButton,
                                    "data-tip": "View Set",
                                    to: "/set/".concat(t._id)
                                }, o.a.createElement("i", {
                                    className: "far fa-eye"
                                })), o.a.createElement("div", {
                                    className: E.a.setQuestionsContainer
                                }, o.a.createElement("div", {
                                    className: E.a.setQuestionsText
                                }, "".concat(Object(N.j)(t.questions.length), " ").concat(1 === t.questions.length ? "Question" : "Questions"))), o.a.createElement("div", {
                                    className: E.a.setHeader
                                }, t.title), o.a.createElement("div", {
                                    className: E.a.setSpacer
                                }), o.a.createElement("div", {
                                    className: E.a.setPlays
                                }, "".concat(Object(N.j)(t.playCount), " ").concat(1 === t.playCount ? "Play" : "Plays")), o.a.createElement("div", {
                                    className: E.a.setLastEdit
                                }, "Edited ".concat(p()(t.date).fromNow())), o.a.createElement("div", {
                                    className: E.a.setHorizontalDivider
                                }), o.a.createElement("div", {
                                    className: E.a.setBottomContainer
                                }, o.a.createElement("i", {
                                    "data-tip": "Edit",
                                    className: m()(E.a.pencilIcon, "fas fa-pencil-alt"),
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onEdit(t._id)
                                    }
                                }), o.a.createElement(f.a, {
                                    place: "top",
                                    effect: "solid",
                                    className: j.a.tooltip
                                }), o.a.createElement("div", {
                                    className: E.a.setVerticalDivider
                                }), o.a.createElement("i", {
                                    "data-tip": "Delete",
                                    className: m()(E.a.trashIcon, "fas fa-trash-alt"),
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onDelete(t._id)
                                    }
                                }), o.a.createElement("div", {
                                    className: E.a.setVerticalDivider
                                }), o.a.createElement("div", {
                                    className: E.a.setDropdown,
                                    role: "button",
                                    tabIndex: 0
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-cog", E.a.setDropdownIcon)
                                }), o.a.createElement("div", {
                                    className: E.a.setDropdownMenu
                                }, o.a.createElement("div", {
                                    className: E.a.setDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            movingGame: t,
                                            oldMoveLocation: "",
                                            moveLocation: ""
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-folder", E.a.setDropdownOptionIcon)
                                }), "Move"), o.a.createElement("div", {
                                    className: E.a.setDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onCopy(t)
                                    }
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-copy", E.a.setDropdownOptionIcon)
                                }), "Copy"), o.a.createElement("div", {
                                    className: E.a.setDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onMerge(t)
                                    }
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-random", E.a.setDropdownOptionIcon)
                                }), "Merge"), t.private ? null : o.a.createElement("div", {
                                    className: E.a.setDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.copyToClipboard(t._id)
                                    }
                                }, o.a.createElement("i", {
                                    className: m()("fas fa-link", E.a.setDropdownOptionIcon)
                                }), "Link", e.state.justCopied ? o.a.createElement("div", {
                                    className: E.a.justCopied
                                }, "Copied!") : null)))), o.a.createElement("div", {
                                    className: E.a.setHorizontalDivider
                                }), o.a.createElement("div", {
                                    className: E.a.setPlayContainer
                                }, o.a.createElement("div", {
                                    className: E.a.playButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onSolo(t._id)
                                    }
                                }, o.a.createElement("i", {
                                    className: m()(E.a.playIcon, "fas fa-user-astronaut")
                                }), o.a.createElement("div", {
                                    className: E.a.setPlayText
                                }, "Solo")), o.a.createElement("div", {
                                    className: E.a.setVerticalDivider,
                                    style: {
                                        height: 50
                                    }
                                }), o.a.createElement(B.a, {
                                    outsideClass: E.a.hostButton,
                                    color: "#0bc2cf",
                                    onClick: function() {
                                        return e.onHost(t._id)
                                    }
                                }, o.a.createElement("div", {
                                    className: E.a.hostButtonInside
                                }, o.a.createElement("i", {
                                    className: m()(E.a.playIcon, "fas fa-play")
                                }), o.a.createElement("div", {
                                    className: E.a.setPlayText
                                }, "Host")))), e.state.mergeGame._id === t._id ? o.a.createElement("div", {
                                    className: E.a.mergeContainer
                                }, o.a.createElement("div", {
                                    className: E.a.mergeName
                                }, "Choose a set to merge with", o.a.createElement("div", {
                                    style: {
                                        fontWeight: "normal",
                                        fontSize: 14,
                                        lineHeight: "17px",
                                        marginTop: 10
                                    }
                                }, "This will add all questions from the set you select to this set")), o.a.createElement("div", {
                                    className: E.a.mergeButton,
                                    role: "button",
                                    tabIndex: 0,
                                    style: {
                                        color: "#3a3a3a"
                                    },
                                    onClick: function() {
                                        return e.setState({
                                            mergeGame: {}
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: "fas fa-times",
                                    style: {
                                        marginRight: 9
                                    }
                                }), "Cancel")) : e.state.mergeGame._id ? o.a.createElement("div", {
                                    className: E.a.mergeSetButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            mergeGame2: t
                                        })
                                    }
                                }) : null)
                            }))), o.a.createElement("div", {
                                style: {
                                    height: 30
                                }
                            }), this.state.deleting ? o.a.createElement(w.a, {
                                text: "Do you really want to delete this ".concat(this.state.deleteFolder ? "folder (this will not delete the sets inside)" : "set", "?"),
                                loading: this.state.loading,
                                buttonOne: {
                                    text: "Yes",
                                    click: this.state.deleteFolder ? this.deleteFolder : function() {
                                        return e.onDeleteConfirm(!0)
                                    },
                                    color: "red"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: this.state.deleteFolder ? function() {
                                        return e.setState({
                                            deleting: !1,
                                            deleteFolder: ""
                                        })
                                    } : function() {
                                        return e.onDeleteConfirm(!1)
                                    },
                                    color: "blue"
                                }
                            }) : this.state.copying || this.state.noFolder ? this.state.copyGame.title ? o.a.createElement(w.a, {
                                text: this.state.loading ? "Copying..." : 'Do you want to create a copy of "'.concat(this.state.copyGame.title, '"?'),
                                loading: this.state.loading,
                                buttonOne: {
                                    text: "Yes",
                                    click: this.onCopyConfirm,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        e.setState({
                                            copying: !1,
                                            loading: !1,
                                            copyGame: {}
                                        }), e.loading = !1
                                    },
                                    color: "blue"
                                }
                            }) : o.a.createElement(w.a, {
                                text: this.state.noFolder ? "Get Blooket Plus to Create Folders" : "Get Blooket Plus to Copy Sets",
                                buttonOne: {
                                    text: "Upgrade",
                                    click: function() {
                                        return e.props.history.push("/upgrade")
                                    },
                                    color: "orange"
                                },
                                buttonTwo: {
                                    text: "Not Now",
                                    click: function() {
                                        e.setState({
                                            copying: !1,
                                            loading: !1,
                                            noFolder: !1
                                        }), e.loading = !1
                                    },
                                    color: "blue"
                                }
                            }) : this.state.creatingFolder || this.state.editingFolder ? o.a.createElement(w.a, {
                                text: this.state.creatingFolder ? "Enter a folder name and select a color:" : "You can change the folder name and color below:",
                                loading: this.state.loading,
                                stringValue: this.state.folderName,
                                stringChange: function(t) {
                                    return e.setState({
                                        folderName: t.target.value
                                    })
                                },
                                colorChange: function(t) {
                                    return e.setState({
                                        folderColor: t
                                    })
                                },
                                colorValue: this.state.folderColor,
                                onSubmit: function(t) {
                                    t.preventDefault(), e.state.creatingFolder ? e.createFolder() : e.editFolder()
                                },
                                error: this.state.folderError,
                                buttonOne: {
                                    text: this.state.creatingFolder ? "Create" : "Edit",
                                    click: this.state.creatingFolder ? this.createFolder : this.editFolder,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return e.setState({
                                            creatingFolder: !1,
                                            editingFolder: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.noMerge ? o.a.createElement(w.a, {
                                text: "Get Blooket Plus to Merge Sets",
                                buttonOne: {
                                    text: "Upgrade",
                                    click: function() {
                                        return e.props.history.push("/upgrade")
                                    },
                                    color: "orange"
                                },
                                buttonTwo: {
                                    text: "Not Now",
                                    click: function() {
                                        return e.setState({
                                            noMerge: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.mergeGame2._id ? o.a.createElement(w.a, {
                                text: this.state.loading ? "Merging..." : "Do you want to merge these two sets?",
                                loading: this.state.loading,
                                buttonOne: {
                                    text: "Yes",
                                    click: this.onMergeConfirm,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.setState({
                                            mergeGame: {},
                                            mergeGame2: {}
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.movingGame ? o.a.createElement(w.a, {
                                loading: this.state.loading,
                                buttonOne: this.state.moveLocation !== this.state.oldMoveLocation ? {
                                    text: "Move",
                                    click: this.addToFolder,
                                    color: "blue"
                                } : null,
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return e.setState({
                                            movingGame: !1
                                        })
                                    },
                                    color: "blue"
                                },
                                content: o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                    className: E.a.moveText
                                }, "Choose a location to move the set to:"), o.a.createElement("div", {
                                    className: E.a.locationsHolder
                                }, Object.keys(this.state.folders).length > 0 ? Object.entries(this.state.folders).map((function(t) {
                                    var a = P(t, 2),
                                        n = a[0],
                                        r = a[1];
                                    return o.a.createElement(B.a, {
                                        outsideClass: E.a.locationFolderButton,
                                        color: r.color,
                                        key: n,
                                        onClick: function() {
                                            return e.setState({
                                                moveLocation: n
                                            })
                                        }
                                    }, o.a.createElement("div", {
                                        className: E.a.locationFolderButtonInside
                                    }, o.a.createElement("i", {
                                        className: m()("fas fa-folder", E.a.locationFolderButtonIcon)
                                    }), n))
                                })) : o.a.createElement("div", {
                                    className: E.a.noFoldersText
                                }, "No Folders Created")), o.a.createElement("div", {
                                    className: E.a.moveLocation
                                }, "Location: ".concat("" === this.state.moveLocation ? "No Folder" : this.state.moveLocation)))
                            }) : this.state.ready && this.state.noRole ? o.a.createElement(w.a, {
                                text: this.state.loadingRole ? "Saving..." : "Who are you?",
                                loading: this.state.loadingRole,
                                buttonOne: {
                                    text: "Teacher",
                                    click: function() {
                                        return e.setRole("Teacher")
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Student",
                                    click: function() {
                                        return e.setRole("Student")
                                    },
                                    color: "blue"
                                }
                            }) : this.state.ready && !g.isMobile && this.state.tour ? o.a.createElement(C.a, {
                                done: this.endTour
                            }) : null))
                        }
                    }]) && G(t.prototype, a), n && G(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), _
                }(o.a.Component);
            X.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            t.a = Object(x.c)(Object(u.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(X)))
        },
        "7EjP": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___1nw_w-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__nothingContainer___1n7H1-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;background-color:rgba(0,0,0,.1);border:2px solid #3a3a3a;border-radius:7px;margin:50px auto;max-width:80%}.styles__nothingHeader___3fgC9-camelCase{font-size:30px;font-weight:700;color:#3a3a3a}.styles__nothingButtonsRow___JJ9GL-camelCase{display:flex;flex-flow:row wrap;justify-content:center;margin:10px 0}.styles__nothingButton___48ZDJ-camelCase{margin:10px 20px}.styles__nothingButtonInside___2_Fw--camelCase{height:35px;font-size:26px;padding:0 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__nothingIcon___2r0ZY-camelCase{font-size:24px;margin-right:10px}.styles__homeworksContainer___1iE9E-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:0 5% 20px}.styles__gameHolder___EfOCM-camelCase{width:100%;margin:10px 0}.styles__container___11GoR-camelCase,.styles__gameHolder___EfOCM-camelCase{display:flex;flex-direction:row}.styles__container___11GoR-camelCase{min-height:80px;flex-grow:1;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;text-decoration:none;overflow:hidden;transition:.2s}.styles__container___11GoR-camelCase:hover{transform:scale(.98)}.styles__hwIcon___3Stfm-camelCase{margin:auto 15px;width:55px;text-align:center;font-size:57px}.styles__textContainer___Rj2a6-camelCase{display:flex;flex-direction:column;width:calc(100% - 125px)}.styles__hwTitle___1fEu7-camelCase{width:100%;font-size:30px;line-height:33px;margin-top:7px;font-weight:700;text-align:left;word-wrap:break-word}.styles__hwTitle___1fEu7-camelCase,.styles__infoRow___oxmIG-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__infoRow___oxmIG-camelCase{margin-top:8px;font-size:17px;display:flex;flex-flow:row wrap}.styles__info___hV7Eh-camelCase{display:flex;flex-direction:row;align-items:center;margin:2.5px 10px}.styles__bodyContainer___2-j1R-camelCase,.styles__deleteButton___3Ynb7-camelCase{display:flex;flex-direction:column}.styles__deleteButton___3Ynb7-camelCase{height:80px;width:70px;background-color:#fff;color:#3a3a3a;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:auto 0 auto 20px;font-size:15px;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__deleteButton___3Ynb7-camelCase:hover{transform:scale(.95);color:#ce1313}.styles__moreButton___1Q-Xq-camelCase{margin:10px auto 20px}.styles__moreButtonInside___1t97F-camelCase{padding:2px 10px;font-weight:700;font-size:22px;text-shadow:0 1.5px rgba(0,0,0,.2)}", ""]), t.locals = {
                header: "styles__header___1nw_w-camelCase",
                nothingContainer: "styles__nothingContainer___1n7H1-camelCase",
                nothingHeader: "styles__nothingHeader___3fgC9-camelCase",
                nothingButtonsRow: "styles__nothingButtonsRow___JJ9GL-camelCase",
                nothingButton: "styles__nothingButton___48ZDJ-camelCase",
                nothingButtonInside: "styles__nothingButtonInside___2_Fw--camelCase",
                nothingIcon: "styles__nothingIcon___2r0ZY-camelCase",
                homeworksContainer: "styles__homeworksContainer___1iE9E-camelCase",
                gameHolder: "styles__gameHolder___EfOCM-camelCase",
                container: "styles__container___11GoR-camelCase",
                hwIcon: "styles__hwIcon___3Stfm-camelCase",
                textContainer: "styles__textContainer___Rj2a6-camelCase",
                hwTitle: "styles__hwTitle___1fEu7-camelCase",
                infoRow: "styles__infoRow___oxmIG-camelCase",
                info: "styles__info___hV7Eh-camelCase",
                bodyContainer: "styles__bodyContainer___2-j1R-camelCase",
                deleteButton: "styles__deleteButton___3Ynb7-camelCase",
                moreButton: "styles__moreButton___1Q-Xq-camelCase",
                moreButtonInside: "styles__moreButtonInside___1t97F-camelCase"
            }
        },
        DPg2: function(e, t, a) {
            var n = a("vUFf");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        Dzm6: function(e, t, a) {
            "use strict";
            t.a = {
                newbie: {
                    name: "Newbie",
                    price: 0,
                    rarity: "Common"
                },
                earlyBird: {
                    name: "Early Bird",
                    price: 100,
                    rarity: "Uncommon"
                },
                lineLeader: {
                    name: "Line Leader",
                    price: 250,
                    rarity: "Uncommon"
                },
                studious: {
                    name: "Studious",
                    price: 100,
                    rarity: "Uncommon"
                },
                smartyPants: {
                    name: "Smarty Pants",
                    price: 250,
                    rarity: "Uncommon"
                },
                thoughtful: {
                    name: "Thoughtful",
                    price: 100,
                    rarity: "Uncommon"
                },
                starStudent: {
                    name: "Star Student",
                    price: 250,
                    rarity: "Uncommon"
                },
                creative: {
                    name: "Creative",
                    price: 100,
                    rarity: "Uncommon"
                },
                pumpkinSpice: {
                    name: "Pumpkin Spice",
                    price: 500,
                    rarity: "Rare"
                },
                spooky: {
                    name: "Spooky",
                    price: 500,
                    rarity: "Rare"
                },
                trickOrTreat: {
                    name: "Trick or Treat",
                    price: 500,
                    rarity: "Rare"
                }
            }
        },
        GnGQ: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                d = a("H1WH"),
                m = a("wd/R"),
                _ = a.n(m),
                p = a("TSYQ"),
                f = a.n(p),
                h = a("FKJl"),
                y = a("E8Bj"),
                g = a("Xst1"),
                b = a.n(g),
                x = a("tL71"),
                v = a.n(x),
                w = a("XTAU"),
                C = a("ca/f"),
                k = a("qnYv"),
                E = a("i4/Q"),
                O = a("lmLo"),
                j = a("1d8D");

            function N(e) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                S = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new E(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function _() {}

                function p() {}
                var f = {};
                l(f, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(O([])));
                y && y !== t && a.call(y, r) && (f = y);
                var g = p.prototype = m.prototype = Object.create(f);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == N(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return _.prototype = p, n(g, "constructor", {
                    value: p,
                    configurable: !0
                }), n(p, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = l(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(x.prototype), l(x.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new x(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function I(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(a), !0).forEach((function(t) {
                        T(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function T(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function P(e) {
                return function(e) {
                    if (Array.isArray(e)) return D(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return D(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function F(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function z(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function M(e, t) {
                return (M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = q(e);
                    if (t) {
                        var o = q(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return R(this, a)
                }
            }

            function R(e, t) {
                if (t && ("object" === N(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return A(e)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var H = function(e) {
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
                    }), t && M(e, t)
                }(l, e);
                var t, a, n, r, s, i = L(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        user: null,
                        homeworks: [],
                        numHomeworks: 20,
                        ready: !1,
                        deleteId: "",
                        deleteCheck: !1,
                        loading: !1
                    }, t.here = !0, t.onDeleteConfirm = t.onDeleteConfirm.bind(A(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (r = S().mark((function e() {
                        var t, a = this;
                        return S().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(h.b)("HomeworksPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.setState({
                                        user: t
                                    }), k.a.get("/api/users/homeworks").then((function(e) {
                                        var t = P(e.data.map((function(e) {
                                            return B(B({}, e), {}, {
                                                isEnded: _()(e.startTime).add(e.duration, "minutes").isBefore()
                                            })
                                        })));
                                        t.sort((function(e, t) {
                                            return _()(t.startTime).add(t.duration, "minutes").diff(_()(e.startTime).add(e.duration, "minutes"))
                                        })), a.here && a.setState({
                                            homeworks: t,
                                            ready: !0
                                        })
                                    })).catch((function(e) {
                                        Object(h.b)(e)
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var o = r.apply(e, t);

                            function s(e) {
                                F(o, a, n, s, i, "next", e)
                            }

                            function i(e) {
                                F(o, a, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "onDeleteConfirm",
                    value: function(e) {
                        var t = this;
                        if (!this.state.loading) {
                            if (!e) return this.setState({
                                deleteCheck: !1,
                                deleteId: ""
                            });
                            this.setState({
                                loading: !0
                            }), k.a.delete("/api/homeworks", {
                                params: {
                                    id: this.state.deleteId
                                }
                            }).then((function() {
                                if (t.here) {
                                    var e = P(t.state.homeworks);
                                    e.splice(e.map((function(e) {
                                        return e._id
                                    })).indexOf(t.state.deleteId), 1), t.setState({
                                        loading: !1,
                                        deleteCheck: !1,
                                        deleteId: "",
                                        homeworks: e
                                    })
                                }
                            })).catch((function(e) {
                                t.setState({
                                    deleteCheck: !1,
                                    deleteId: ""
                                }), Object(h.b)(e)
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: d.isMobile ? b.a.mBody : b.a.body
                        }, o.a.createElement(w.a, {
                            title: "Homework | Blooket",
                            desc: "View your recent homework and review how the players performed and what questions were most missed."
                        }), o.a.createElement(E.a, {
                            user: this.state.user,
                            page: "Homework"
                        }), o.a.createElement("div", {
                            className: b.a.profileBody
                        }, o.a.createElement("div", {
                            className: v.a.header
                        }, "Homework"), o.a.createElement("div", {
                            className: v.a.homeworksContainer
                        }, this.state.homeworks.length > 0 ? this.state.homeworks.slice(0, this.state.numHomeworks).map((function(t) {
                            return o.a.createElement("div", {
                                className: v.a.gameHolder,
                                key: t._id
                            }, o.a.createElement(c.b, {
                                className: v.a.container,
                                to: "/homework/".concat(t._id)
                            }, o.a.createElement("i", {
                                className: f()("far fa-file-alt", v.a.hwIcon),
                                style: {
                                    color: t.isEnded ? "#737373" : "#0bc2cf"
                                }
                            }), o.a.createElement("div", {
                                className: v.a.textContainer
                            }, o.a.createElement("div", {
                                className: v.a.hwTitle
                            }, t.title), o.a.createElement("div", {
                                className: v.a.infoRow
                            }, o.a.createElement("div", {
                                className: v.a.info
                            }, o.a.createElement("i", {
                                className: "fas fa-gamepad",
                                style: {
                                    marginRight: 7.5
                                }
                            }), j.a[t.settings.type].name), o.a.createElement("div", {
                                className: v.a.info
                            }, o.a.createElement("i", {
                                className: "fas fa-users",
                                style: {
                                    marginRight: 7.5
                                }
                            }), t.resultIds ? t.resultIds.length : 0), o.a.createElement("div", {
                                className: v.a.info
                            }, o.a.createElement("i", {
                                className: "far fa-clock",
                                style: {
                                    marginRight: 7.5
                                }
                            }), "Due ".concat(_()(t.startTime).add(t.duration, "minutes").fromNow()))))), o.a.createElement("div", {
                                className: v.a.deleteButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        deleteCheck: !0,
                                        deleteId: t._id
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: "fas fa-trash-alt",
                                style: {
                                    fontSize: 28,
                                    paddingBottom: 8,
                                    paddingTop: 10
                                }
                            }), "Delete"))
                        })) : this.state.ready ? o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement("div", {
                            className: v.a.nothingContainer
                        }, o.a.createElement("div", {
                            className: v.a.nothingHeader
                        }, "You haven't assigned any Homeworks yet :("), o.a.createElement("div", {
                            className: v.a.nothingButtonsRow
                        }, o.a.createElement(O.a, {
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.props.history.push("/faq")
                            },
                            outsideClass: v.a.nothingButton
                        }, o.a.createElement("div", {
                            className: v.a.nothingButtonInside
                        }, o.a.createElement("i", {
                            className: f()("fas fa-question-circle", v.a.nothingIcon)
                        }), "Learn How to Assign HW"))))) : null, this.state.homeworks.length > this.state.numHomeworks ? o.a.createElement(O.a, {
                            outsideClass: v.a.moreButton,
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.setState({
                                    numHomeworks: e.state.numHomeworks + 20
                                })
                            }
                        }, o.a.createElement("div", {
                            className: v.a.moreButtonInside
                        }, "Show More")) : null)), this.state.deleteCheck ? o.a.createElement(C.a, {
                            text: "Do you really want to delete this homework?",
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
                        }) : null)
                    }
                }]) && z(t.prototype, a), n && z(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            H.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(y.c)(Object(u.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(H)))
        },
        Gnp4: function(e, t, a) {
            var n = a("KYQD");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        "J+dS": function(e, t, a) {
            var n = a("lPxx");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        KYQD: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___153FZ-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__rateIcon___11Qwv-camelCase{font-size:28px;line-height:35px;margin:auto 10px;color:#3a3a3a;outline:none;cursor:pointer;transition:all .1s linear}.styles__rateIcon___11Qwv-camelCase:hover{color:#0bc2cf}.styles__tooltip___21a_3-camelCase{font-family:Nunito,sans-serif!important;font-size:15px!important;line-height:19px!important;padding:6px 13px!important;text-align:center!important}.styles__tokenBalance___1FHgT-camelCase{margin:0 10px;display:flex}.styles__mTokenBalance___2dSI3-camelCase,.styles__tokenBalance___1FHgT-camelCase{height:55px;background-color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding:0 10px 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);justify-content:center;align-items:center;font-size:22px;font-weight:700;color:#3a3a3a}.styles__mTokenBalance___2dSI3-camelCase{position:absolute;top:0;right:10px;display:none}.styles__tokenBalanceIcon___3MGhs-camelCase{width:30px;height:30px;margin-right:7px}.styles__leftColumn___2MTgv-camelCase{margin:25px 0 35px 5%;width:calc(90% - 250px);padding-bottom:20px}.styles__packsWrapper___2hBF4-camelCase{display:grid;grid-template-columns:repeat(auto-fill,210px);grid-gap:25px;width:100%}.styles__packContainer___3RwSU-camelCase{width:210px;height:210px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;position:relative;background-color:#0bc2cf;border-radius:10px;overflow:hidden;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2);box-sizing:border-box;will-change:transform;transition:.2s}.styles__packContainer___3RwSU-camelCase:hover{transform:scale(.95)}.styles__packImgContainer___3NABW-camelCase{height:100%;position:relative}.styles__packShadow___2TA17-camelCase{width:70%;filter:brightness(0) invert(100%);opacity:.5}.styles__packImg___3to1S-camelCase,.styles__packShadow___2TA17-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(10deg)}.styles__packImg___3to1S-camelCase{width:65%}.styles__packBottom___37drt-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;height:24px;padding:0 12px;background-color:rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:18px;color:#fff;text-shadow:1px 1px 0 grey;border-top-right-radius:10px;border-bottom-right-radius:10px;position:absolute;bottom:12px;left:0}.styles__packPriceImg___1FaDF-camelCase{width:16px;height:16px;margin-right:7px}.styles__subheader___GVBz_-camelCase{font-size:34px;font-weight:700;margin:20px 0}.styles__weeklyWrapper___1N5wN-camelCase{display:flex;flex-flow:row wrap;width:100%;margin:-12.5px}.styles__weeklyContainer___I6YST-camelCase{width:270px;height:190px;margin:12.5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;position:relative;background:linear-gradient(#0bc2cf,#146cd2);border-radius:10px;overflow:hidden;box-shadow:inset 0 -7px rgba(0,0,0,.2);display:flex;flex-direction:column;align-items:center;justify-content:center;will-change:transform;transition:.2s}.styles__weeklyContainer___I6YST-camelCase:hover{transform:scale(.95)}.styles__weeklyName___1-QhF-camelCase{font-size:20px;text-align:center;position:absolute;width:100%;left:0;top:10px}.styles__weeklyName___1-QhF-camelCase,.styles__weeklyTitle___2PwID-camelCase{font-family:Titan One,sans-serif;color:#fff;text-shadow:1px 1px 0 grey}.styles__weeklyTitle___2PwID-camelCase{font-size:28px;padding:5px 10px;background-color:rgba(0,0,0,.2);border-radius:10px}.styles__weeklyBanner___318lh-camelCase{width:90%}.styles__weeklyPart___2Icho-camelCase{width:40%}.styles__weeklyBottom___2Xhbw-camelCase{justify-content:center;padding:0 12px;background-color:rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:18px;text-shadow:1px 1px 0 grey;border-top-right-radius:10px;border-bottom-right-radius:10px;left:0}.styles__weeklyBottom___2Xhbw-camelCase,.styles__weeklyRarity___1sPj5-camelCase{display:flex;flex-direction:row;align-items:center;height:24px;color:#fff;position:absolute;bottom:15px}.styles__weeklyRarity___1sPj5-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:14px;padding:0 7px 0 12px;right:0;border-top-left-radius:10px;border-bottom-left-radius:10px}.styles__storeContainer___FgOVv-camelCase{position:fixed;right:2.5%;width:250px;height:375px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__storeImg___2c3cG-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__cashierBlook___iI1UH-camelCase{position:absolute;bottom:110px;right:60px;width:70px;transform:rotate(10deg)}.styles__fallStoreImg___2NvMw-camelCase{position:absolute;top:50%;left:0;width:250px;height:267px;transform:translateY(-50%)}.styles__fallCashierBlook___3dIaO-camelCase{bottom:172px;right:40px;width:65px}.styles__fallCashierBlook___3dIaO-camelCase,.styles__spookyCashierBlook___3dZAC-camelCase{position:absolute;transform:rotate(10deg)}.styles__spookyCashierBlook___3dZAC-camelCase{bottom:85px;right:60px;width:70px}.styles__instantButton___2ezEk-camelCase{position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.1);color:#3a3a3a;border-radius:5px;font-size:12px;height:20px;padding:0 10px;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;pointer-events:all}.styles__instantButton___2ezEk-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__openBackground___-U4oX-camelCase{position:fixed;top:0;left:0;width:100%;height:100%;z-index:25;overflow:hidden}.styles__openContainer___3paFG-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);width:400px;border-radius:10px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;box-shadow:0 0 4px rgba(0,0,0,.15);background-color:#fff}.styles__openingContainer___2OmG9-camelCase{animation:styles__growIn___1R3Nj-camelCase .2s linear .5s forwards}@keyframes styles__growIn___1R3Nj-camelCase{0%{transform:translate(-50%,-50%) scale(0)}to{transform:translate(-50%,-50%) scale(1)}}.styles__openingContainerEpic___3TzCR-camelCase{animation:styles__epicOpen___1Ajao-camelCase 1.5s linear .5s forwards}@keyframes styles__epicOpen___1Ajao-camelCase{0%{transform:translate(calc(-50% - 25vw),calc(-50% - 25vh)) rotate(15deg) scale(.1)}25%{transform:translate(calc(-50% - 25vw),calc(-50% - 25vh)) rotate(15deg) scale(.1)}25.1%{transform:translate(calc(-50% + 25vw),calc(-50% + 25vh)) rotate(-15deg) scale(.2)}50%{transform:translate(calc(-50% + 25vw),calc(-50% + 25vh)) rotate(-15deg) scale(.2)}50.1%{transform:translate(calc(-50% - 25vw),calc(-50% + 25vh)) rotate(15deg) scale(.3)}75%{transform:translate(calc(-50% - 25vw),calc(-50% + 25vh)) rotate(15deg) scale(.3)}75.1%{transform:translate(calc(-50% + 25vw),calc(-50% - 25vh)) rotate(-15deg) scale(.4)}99.9%{transform:translate(calc(-50% + 25vw),calc(-50% - 25vh)) rotate(-15deg) scale(.4)}to{transform:translate(-50%,-50%) rotate(0) scale(1)}}.styles__openingContainerLegendary___RbJZ_-camelCase{animation:styles__legendaryOpen___1ihkU-camelCase 2.5s ease-in 1s forwards}@keyframes styles__legendaryOpen___1ihkU-camelCase{0%{transform:translate(calc(-50% - 25vw),calc(-50% - 100vh)) scale(.1)}35%{transform:translate(calc(-50% - 25vw),calc(-50% + 100vh)) scale(.1)}35.1%{transform:translate(calc(-50% + 25vw),calc(-50% - 100vh)) scale(.3)}70%{transform:translate(calc(-50% + 25vw),calc(-50% + 100vh)) scale(.3)}70.1%{transform:translate(-50%,calc(-50% - 100vh)) scale(1)}to{transform:translate(-50%,-50%) scale(1)}}.styles__openingContainerChroma___3VBd5-camelCase{animation:styles__chromaOpen___2_fhq-camelCase 2s linear 1.5s forwards}@keyframes styles__chromaOpen___2_fhq-camelCase{0%{transform:translate(-50%,-50%) rotate(0deg) scale(0)}10%{transform:translate(-50%,-50%) rotate(180deg) scale(.1)}20%{transform:translate(-50%,-50%) rotate(1turn) scale(.2)}30%{transform:translate(-50%,-50%) rotate(540deg) scale(.3)}40%{transform:translate(-50%,-50%) rotate(2turn) scale(.4)}50%{transform:translate(-50%,-50%) rotate(900deg) scale(.5)}60%{transform:translate(-50%,-50%) rotate(3turn) scale(.6)}70%{transform:translate(-50%,-50%) rotate(1260deg) scale(.7)}80%{transform:translate(-50%,-50%) rotate(4turn) scale(.8)}90%{transform:translate(-50%,-50%) rotate(1620deg) scale(.9)}to{transform:translate(-50%,-50%) rotate(5turn) scale(1)}}.styles__blookBackground___3rt4N-camelCase{width:100%;height:100%}.styles__openingPackContainer___1ZQzY-camelCase,.styles__openPackContainer___2m4Yf-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:667px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__openPackContainer___2m4Yf-camelCase{outline:none;cursor:pointer}.styles__openingPackContainer___1ZQzY-camelCase{animation:styles__dropPack___12OV_-camelCase .2s linear .4s forwards}@keyframes styles__dropPack___12OV_-camelCase{0%{transform:translate(-50%,-50%)}to{transform:translate(-50%,50vh)}}.styles__openPack___3QxCP-camelCase{width:400px;height:667px;background-size:4400px 667px;background-repeat:no-repeat}.styles__isOpeningPack___1qY5t-camelCase{animation:styles__open___1v-ch-camelCase .4s steps(10) forwards}@keyframes styles__open___1v-ch-camelCase{0%{background-position:0}to{background-position:-4000px}}.styles__unlockedBlookImage___wC4gr-camelCase{position:absolute;bottom:85px;left:105px;width:190px}.styles__unlockedText___1diat-camelCase{position:absolute;top:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center}.styles__unlockedBlook___2pr1Z-camelCase{text-shadow:0 3px 3px rgba(0,0,0,.2);width:100%;height:50px;text-align:center}.styles__rarityText___1PfSA-camelCase{font-size:30px;-webkit-text-stroke:#3a3a3a 1.5px}.styles__bottomText___3_k10-camelCase{position:absolute;bottom:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center;font-size:30px;text-shadow:0 0 4px rgba(0,0,0,.4)}.styles__bottomShadow___10ZLG-camelCase{width:100%;position:absolute;bottom:0;left:0;height:50px;box-shadow:inset 0 -9px rgba(0,0,0,.2);border-bottom-left-radius:10px;border-bottom-right-radius:10px}.styles__cornerIcon___24o3Z-camelCase{width:400px;position:absolute;bottom:-20px;right:-20px;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.2;transform:rotate(-35deg)}.styles__openBigButton___3KmDM-camelCase,.styles__phaserContainer___1Ffxs-camelCase{width:100%;height:100%;position:absolute;top:0;left:0}.styles__openBigButton___3KmDM-camelCase{outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:100}.styles__canOpen___2znG2-camelCase{cursor:pointer}.styles__mInstantButton___3lgNk-camelCase{display:none;background-color:rgba(0,0,0,.1);color:#3a3a3a;border-radius:5px;font-size:12px;height:20px;padding:0 10px;margin:0 5%;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__mInstantButton___3lgNk-camelCase:hover{background-color:rgba(0,0,0,.2)}@media only screen and (max-width:1010px){.styles__storeContainer___FgOVv-camelCase{display:none}.styles__mInstantButton___3lgNk-camelCase{display:flex}.styles__leftColumn___2MTgv-camelCase{margin:25px 5% 35px;width:90%}.styles__packsWrapper___2hBF4-camelCase,.styles__weeklyWrapper___1N5wN-camelCase{justify-content:center}.styles__weeklyWrapper___1N5wN-camelCase{margin:0 -12.5px;width:unset}}@media only screen and (max-width:850px){.styles__mTokenBalance___2dSI3-camelCase{display:flex}}@media only screen and (max-width:600px){.styles__openContainer___3paFG-camelCase{width:300px}.styles__openingPackContainer___1ZQzY-camelCase,.styles__openPack___3QxCP-camelCase,.styles__openPackContainer___2m4Yf-camelCase{width:300px;height:500px}.styles__openPack___3QxCP-camelCase{background-size:3300px 500px}@keyframes styles__open___1v-ch-camelCase{0%{background-position:0}to{background-position:-3000px}}.styles__unlockedBlookImage___wC4gr-camelCase{position:absolute;bottom:64px;left:78.5px;width:143px}.styles__unlockedText___1diat-camelCase{top:5px;left:2.5%;width:95%}.styles__unlockedBlook___2pr1Z-camelCase{width:100%;height:30px}.styles__bottomText___3_k10-camelCase,.styles__rarityText___1PfSA-camelCase{font-size:20px}.styles__bottomText___3_k10-camelCase{bottom:15px}.styles__cornerIcon___24o3Z-camelCase{width:270px}}", ""]), t.locals = {
                header: "styles__header___153FZ-camelCase",
                rateIcon: "styles__rateIcon___11Qwv-camelCase",
                tooltip: "styles__tooltip___21a_3-camelCase",
                tokenBalance: "styles__tokenBalance___1FHgT-camelCase",
                mTokenBalance: "styles__mTokenBalance___2dSI3-camelCase",
                tokenBalanceIcon: "styles__tokenBalanceIcon___3MGhs-camelCase",
                leftColumn: "styles__leftColumn___2MTgv-camelCase",
                packsWrapper: "styles__packsWrapper___2hBF4-camelCase",
                packContainer: "styles__packContainer___3RwSU-camelCase",
                packImgContainer: "styles__packImgContainer___3NABW-camelCase",
                packShadow: "styles__packShadow___2TA17-camelCase",
                packImg: "styles__packImg___3to1S-camelCase",
                packBottom: "styles__packBottom___37drt-camelCase",
                packPriceImg: "styles__packPriceImg___1FaDF-camelCase",
                subheader: "styles__subheader___GVBz_-camelCase",
                weeklyWrapper: "styles__weeklyWrapper___1N5wN-camelCase",
                weeklyContainer: "styles__weeklyContainer___I6YST-camelCase",
                weeklyName: "styles__weeklyName___1-QhF-camelCase",
                weeklyTitle: "styles__weeklyTitle___2PwID-camelCase",
                weeklyBanner: "styles__weeklyBanner___318lh-camelCase",
                weeklyPart: "styles__weeklyPart___2Icho-camelCase",
                weeklyBottom: "styles__weeklyBottom___2Xhbw-camelCase",
                weeklyRarity: "styles__weeklyRarity___1sPj5-camelCase",
                storeContainer: "styles__storeContainer___FgOVv-camelCase",
                storeImg: "styles__storeImg___2c3cG-camelCase",
                cashierBlook: "styles__cashierBlook___iI1UH-camelCase",
                fallStoreImg: "styles__fallStoreImg___2NvMw-camelCase",
                fallCashierBlook: "styles__fallCashierBlook___3dIaO-camelCase",
                spookyCashierBlook: "styles__spookyCashierBlook___3dZAC-camelCase",
                instantButton: "styles__instantButton___2ezEk-camelCase",
                openBackground: "styles__openBackground___-U4oX-camelCase",
                openContainer: "styles__openContainer___3paFG-camelCase",
                openingContainer: "styles__openingContainer___2OmG9-camelCase",
                growIn: "styles__growIn___1R3Nj-camelCase",
                openingContainerEpic: "styles__openingContainerEpic___3TzCR-camelCase",
                epicOpen: "styles__epicOpen___1Ajao-camelCase",
                openingContainerLegendary: "styles__openingContainerLegendary___RbJZ_-camelCase",
                legendaryOpen: "styles__legendaryOpen___1ihkU-camelCase",
                openingContainerChroma: "styles__openingContainerChroma___3VBd5-camelCase",
                chromaOpen: "styles__chromaOpen___2_fhq-camelCase",
                blookBackground: "styles__blookBackground___3rt4N-camelCase",
                openingPackContainer: "styles__openingPackContainer___1ZQzY-camelCase",
                openPackContainer: "styles__openPackContainer___2m4Yf-camelCase",
                dropPack: "styles__dropPack___12OV_-camelCase",
                openPack: "styles__openPack___3QxCP-camelCase",
                isOpeningPack: "styles__isOpeningPack___1qY5t-camelCase",
                open: "styles__open___1v-ch-camelCase",
                unlockedBlookImage: "styles__unlockedBlookImage___wC4gr-camelCase",
                unlockedText: "styles__unlockedText___1diat-camelCase",
                unlockedBlook: "styles__unlockedBlook___2pr1Z-camelCase",
                rarityText: "styles__rarityText___1PfSA-camelCase",
                bottomText: "styles__bottomText___3_k10-camelCase",
                bottomShadow: "styles__bottomShadow___10ZLG-camelCase",
                cornerIcon: "styles__cornerIcon___24o3Z-camelCase",
                openBigButton: "styles__openBigButton___3KmDM-camelCase",
                phaserContainer: "styles__phaserContainer___1Ffxs-camelCase",
                canOpen: "styles__canOpen___2znG2-camelCase",
                mInstantButton: "styles__mInstantButton___3lgNk-camelCase"
            }
        },
        Lcud: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("tMKq"),
                d = a.n(u),
                m = a("H1WH"),
                _ = a("Xst1"),
                p = a.n(_),
                f = a("J+dS"),
                h = a.n(f),
                y = a("oQ+7"),
                g = a("XTAU"),
                b = a("0oXL");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function C(e) {
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
                    var a, n = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return k(this, a)
                }
            }

            function k(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var O = function(e) {
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
                    }), t && w(e, t)
                }(s, e);
                var t, a, n, r = C(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = r.call(this, e)).state = {}, t
                }
                return t = s, (a = [{
                    key: "render",
                    value: function() {
                        return "/" !== window.location.pathname && this.props.match.params ? o.a.createElement("div", {
                            className: m.isMobile ? p.a.mBody : p.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, o.a.createElement(g.a, {
                            title: "404 | Blooket",
                            desc: "I don't know what is, but this ain't it chief."
                        }), o.a.createElement(y.a, null), o.a.createElement("div", {
                            className: p.a.regularBody
                        }, o.a.createElement(d.a, {
                            height: "calc(100vh - 61px)",
                            width: "100vw",
                            style: {
                                padding: 0,
                                margin: 0
                            },
                            className: h.a.particles,
                            params: {
                                particles: {
                                    number: {
                                        value: m.isMobile ? 19 : 65,
                                        density: {
                                            enable: !1,
                                            value_area: m.isMobile ? 900 : 350
                                        }
                                    },
                                    color: {
                                        value: "#fff"
                                    },
                                    shape: {
                                        type: "circle",
                                        stroke: {
                                            width: 0,
                                            color: "#fff"
                                        },
                                        polygon: {
                                            nb_sides: 5
                                        }
                                    },
                                    opacity: {
                                        value: .7,
                                        random: !1,
                                        anim: {
                                            enable: !1,
                                            speed: 1,
                                            opacity_min: .6,
                                            sync: !1
                                        }
                                    },
                                    size: {
                                        value: 3,
                                        random: !0,
                                        anim: {
                                            enable: !1,
                                            speed: 40,
                                            size_min: .1,
                                            sync: !1
                                        }
                                    },
                                    line_linked: {
                                        enable: !0,
                                        distance: 150,
                                        color: "#fff",
                                        opacity: .6,
                                        width: 1.25
                                    },
                                    move: {
                                        enable: !0,
                                        speed: 2,
                                        direction: "none",
                                        random: !1,
                                        straight: !1,
                                        out_mode: "out",
                                        bounce: !1,
                                        attract: {
                                            enable: !1,
                                            rotateX: 600,
                                            rotateY: 1200
                                        }
                                    }
                                },
                                interactivity: {
                                    detect_on: "window",
                                    events: {
                                        onhover: {
                                            enable: !0,
                                            mode: "repulse"
                                        },
                                        onclick: {
                                            enable: !0,
                                            mode: "repulse"
                                        },
                                        resize: !0
                                    },
                                    modes: {
                                        repulse: {
                                            distance: 100,
                                            duration: .4
                                        }
                                    }
                                },
                                retina_detect: !0
                            }
                        }), o.a.createElement("div", {
                            className: h.a.container
                        }, o.a.createElement("div", {
                            className: h.a.containerHeader
                        }, "4", o.a.createElement(b.a, {
                            name: "Blobfish",
                            className: h.a.blook
                        }), "4"), o.a.createElement("div", {
                            className: h.a.containerText
                        }, "I don't know what you were looking for,", o.a.createElement("br", null), "but it's not this.")))) : o.a.createElement(c.a, {
                            to: "/my-sets"
                        })
                    }
                }]) && v(t.prototype, a), n && v(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            O.propTypes = {
                match: l.a.object
            };
            t.a = Object(c.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(O))
        },
        "SB7+": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("H1WH"),
                d = a("cpGi"),
                m = a("KAy6"),
                _ = a.n(m),
                p = a("TSYQ"),
                f = a.n(p),
                h = a("4HzQ"),
                y = a("lNlg"),
                g = a("FKJl"),
                b = a("E8Bj"),
                x = a("fGzD"),
                v = a("0oXL"),
                w = a("pMTK"),
                C = a("Xst1"),
                k = a.n(C),
                E = a("Gnp4"),
                O = a.n(E),
                j = a("XTAU"),
                N = a("ca/f"),
                S = a("MDrD"),
                I = a("74sb"),
                B = a("qnYv"),
                T = a("i4/Q"),
                P = a("xP+p"),
                D = a("1O+K"),
                F = a.n(D);

            function z(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function M(e, t, a) {
                return t && z(e.prototype, t), a && z(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var L = new(M((function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.scene = null, this.particles = null, this.rarity = null
                }))),
                R = window.MarketBlookParticles = {
                    "uncommon-1": {
                        url: "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg",
                        width: 25,
                        height: 25
                    },
                    "uncommon-2": {
                        url: "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg",
                        width: 25,
                        height: 25
                    },
                    "uncommon-3": {
                        url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg",
                        width: 25,
                        height: 25
                    },
                    "uncommon-4": {
                        url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg",
                        width: 30,
                        height: 30
                    },
                    "uncommon-5": {
                        url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg",
                        width: 30,
                        height: 30
                    },
                    "uncommon-6": {
                        url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg",
                        width: 30,
                        height: 30
                    },
                    "uncommon-7": {
                        url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg",
                        width: 30,
                        height: 30
                    },
                    "rare-1": {
                        url: "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg",
                        width: 25,
                        height: 25
                    },
                    "rare-2": {
                        url: "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg",
                        width: 25,
                        height: 25
                    },
                    "rare-3": {
                        url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg",
                        width: 30,
                        height: 30
                    },
                    "rare-4": {
                        url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg",
                        width: 30,
                        height: 30
                    },
                    "rare-5": {
                        url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg",
                        width: 30,
                        height: 30
                    },
                    "rare-6": {
                        url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg",
                        width: 30,
                        height: 30
                    },
                    "rare-7": {
                        url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg",
                        width: 25,
                        height: 25
                    },
                    "epic-1": {
                        url: "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg",
                        width: 25,
                        height: 25
                    },
                    "epic-2": {
                        url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg",
                        width: 25,
                        height: 25
                    },
                    "epic-3": {
                        url: "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg",
                        width: 30,
                        height: 30
                    },
                    "epic-4": {
                        url: "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg",
                        width: 30,
                        height: 30
                    },
                    "epic-5": {
                        url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg",
                        width: 30,
                        height: 30
                    },
                    "epic-6": {
                        url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg",
                        width: 30,
                        height: 30
                    },
                    "epic-7": {
                        url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg",
                        width: 25,
                        height: 25
                    },
                    "legendary-1": {
                        url: "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg",
                        width: 25,
                        height: 25
                    },
                    "legendary-2": {
                        url: "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg",
                        width: 25,
                        height: 25
                    },
                    "legendary-3": {
                        url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg",
                        width: 25,
                        height: 25
                    },
                    "legendary-4": {
                        url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg",
                        width: 30,
                        height: 30
                    },
                    "legendary-5": {
                        url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg",
                        width: 30,
                        height: 30
                    },
                    "legendary-6": {
                        url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg",
                        width: 25,
                        height: 25
                    },
                    "legendary-7": {
                        url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg",
                        width: 30,
                        height: 30
                    },
                    "chroma-1": {
                        url: "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg",
                        width: 25,
                        height: 25
                    },
                    "chroma-2": {
                        url: "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg",
                        width: 25,
                        height: 25
                    },
                    "chroma-3": {
                        url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg",
                        width: 30,
                        height: 30
                    },
                    "chroma-4": {
                        url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg",
                        width: 30,
                        height: 30
                    },
                    "chroma-5": {
                        url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg",
                        width: 30,
                        height: 30
                    },
                    "chroma-6": {
                        url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg",
                        width: 30,
                        height: 30
                    },
                    "chroma-7": {
                        url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg",
                        width: 25,
                        height: 25
                    }
                },
                A = new F.a.Class({
                    Extends: F.a.GameObjects.Image,
                    initialize: function() {
                        F.a.GameObjects.Image.call(this, L.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
                    },
                    spawn: function(e, t, a, n, o, r, s, i, l) {
                        this.setTexture(l), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], L.scene.physics.velocityFromAngle(n, o, this.body.velocity), this.body.setGravityY(r), this.body.setAngularVelocity(s), this.lifespan = i
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                });

            function q(e) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return Y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || U(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                if (e) {
                    if ("string" == typeof e) return Y(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Y(e, t) : void 0
                }
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function Q(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function V(e, t) {
                return (V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function J(e) {
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
                    var a, n = X(e);
                    if (t) {
                        var o = X(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return W(this, a)
                }
            }

            function W(e, t) {
                if (t && ("object" === q(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function X(e) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Z = function(e) {
                    if ("center" === e) {
                        var t = Object(I.l)(-115, -65);
                        return {
                            x: L.scene.cameras.main.worldView.width / 2,
                            y: L.scene.cameras.main.worldView.height / 2,
                            scale: Object(I.l)(.7, 1),
                            angle: t,
                            velocity: Object(I.l)(600, 750),
                            gravity: 700,
                            angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                            lifespan: 2500
                        }
                    }
                    if ("right" === e) return {
                        x: L.scene.cameras.main.worldView.width,
                        y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                        scale: Object(I.l)(.7, 1),
                        angle: -180,
                        velocity: Object(I.l)(600, 750),
                        gravity: 0,
                        angVelocity: Object(I.l)(-175, -125),
                        lifespan: 2500
                    };
                    if ("left" === e) return {
                        x: 0,
                        y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                        scale: Object(I.l)(.7, 1),
                        angle: 0,
                        velocity: Object(I.l)(600, 750),
                        gravity: 0,
                        angVelocity: Object(I.l)(125, 175),
                        lifespan: 2500
                    };
                    if ("right-bottom" === e) return {
                        x: L.scene.cameras.main.worldView.width,
                        y: L.scene.cameras.main.worldView.height,
                        scale: Object(I.l)(.7, 1),
                        angle: Object(I.l)(-160, -110),
                        velocity: Object(I.l)(600, 750),
                        gravity: 500,
                        angVelocity: Object(I.l)(-175, -125),
                        lifespan: 2500
                    };
                    if ("left-bottom" === e) return {
                        x: 0,
                        y: L.scene.cameras.main.worldView.height,
                        scale: Object(I.l)(.7, 1),
                        angle: Object(I.l)(-70, -20),
                        velocity: Object(I.l)(600, 750),
                        gravity: 500,
                        angVelocity: Object(I.l)(125, 175),
                        lifespan: 2500
                    };
                    if ("top" === e) return {
                        x: Object(I.l)(0, L.scene.cameras.main.worldView.width),
                        y: -50,
                        scale: Object(I.l)(.7, 1),
                        angle: 90,
                        velocity: Object(I.l)(0, 50),
                        gravity: 700,
                        angVelocity: Object(I.l)(-150, 150),
                        lifespan: 2500
                    };
                    if ("right-shower" === e) return {
                        x: L.scene.cameras.main.worldView.width,
                        y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                        scale: Object(I.l)(.7, 1),
                        angle: Object(I.l)(-180, -130),
                        velocity: Object(I.l)(600, 750),
                        gravity: 500,
                        angVelocity: Object(I.l)(-175, -125),
                        lifespan: 2500
                    };
                    if ("left-shower" === e) return {
                        x: 0,
                        y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                        scale: Object(I.l)(.7, 1),
                        angle: Object(I.l)(-50, 0),
                        velocity: Object(I.l)(600, 750),
                        gravity: 500,
                        angVelocity: Object(I.l)(125, 175),
                        lifespan: 2500
                    };
                    if ("right-diamond" === e) {
                        var a = Object(I.l)(0, L.scene.cameras.main.worldView.height);
                        return {
                            x: L.scene.cameras.main.worldView.width,
                            y: a,
                            scale: Object(I.l)(.7, 1),
                            angle: a > L.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                            velocity: Object(I.l)(600, 750),
                            gravity: 0,
                            angVelocity: Object(I.l)(-175, -125),
                            lifespan: 2500
                        }
                    }
                    if ("left-diamond" === e) {
                        var n = Object(I.l)(0, L.scene.cameras.main.worldView.height);
                        return {
                            x: 0,
                            y: n,
                            scale: Object(I.l)(.7, 1),
                            angle: n > L.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                            velocity: Object(I.l)(600, 750),
                            gravity: 0,
                            angVelocity: Object(I.l)(125, 175),
                            lifespan: 2500
                        }
                    }
                    return "center-spread" === e ? {
                        x: L.scene.cameras.main.worldView.width / 2,
                        y: L.scene.cameras.main.worldView.height / 2,
                        scale: Object(I.l)(.7, 1),
                        angle: Object(I.l)(0, 360),
                        velocity: Object(I.l)(600, 750),
                        gravity: 0,
                        angVelocity: Object(I.l)(-175, 175),
                        lifespan: 2500
                    } : {}
                },
                K = function(e) {
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
                        }), t && V(e, t)
                    }(r, e);
                    var t, a, n, o = J(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = o.call(this)).rarity = e.toLowerCase(), t
                    }
                    return t = r, (a = [{
                        key: "preload",
                        value: function() {
                            var e = this;
                            Object.entries(R).filter((function(t) {
                                return G(t, 1)[0].includes(e.rarity)
                            })).forEach((function(t) {
                                var a = G(t, 2),
                                    n = a[0],
                                    o = a[1];
                                e.load.svg(n, o.url, {
                                    width: o.width,
                                    height: o.height
                                })
                            }))
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = this;
                            L.scene = this, L.rarity = "", L.particles = this.physics.add.group({
                                classType: A,
                                runChildUpdate: !0
                            }), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", (function(t) {
                                L.rarity = t, e.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1
                            }))
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (L.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                if ("Uncommon" === L.rarity)
                                    for (var a = 0; a < 2; a++) {
                                        var n = L.particles.get();
                                        n && n.spawn.apply(n, H(Object.values(Z("center"))).concat(["uncommon-".concat(Object(I.m)(1, 8))]))
                                    } else if ("Rare" === L.rarity)
                                        for (var o = 0; o < 2; o++) {
                                            var r = L.particles.get();
                                            r && r.spawn.apply(r, H(Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom"))).concat(["rare-".concat(Object(I.m)(1, 8))]))
                                        } else if ("Epic" === L.rarity)
                                            for (var s = 0; s < 2; s++) {
                                                var i = L.particles.get();
                                                i && i.spawn.apply(i, H(Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower"))).concat(["epic-".concat(Object(I.m)(1, 8))]))
                                            } else if ("Legendary" === L.rarity)
                                                for (var l = 0; l < 3; l++) {
                                                    var c = L.particles.get();
                                                    c && c.spawn.apply(c, H(Object.values(Z("top"))).concat(["legendary-".concat(Object(I.m)(1, 8))]))
                                                } else if ("Chroma" === L.rarity)
                                                    for (var u = 0; u < 3; u++) {
                                                        var d = L.particles.get();
                                                        d && d.spawn.apply(d, H(Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond"))).concat(["chroma-".concat(Object(I.m)(1, 8))]))
                                                    }
                                this.nextParticle = 20, this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
                            }
                        }
                    }]) && Q(t.prototype, a), n && Q(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(F.a.Scene),
                $ = function(e) {
                    return {
                        type: F.a.WEBGL,
                        parent: "phaser-market",
                        width: "100%",
                        height: "100%",
                        scale: {
                            mode: F.a.Scale.NONE,
                            autoCenter: F.a.Scale.CENTER_BOTH
                        },
                        transparent: !0,
                        physics: {
                            default: "arcade"
                        },
                        scene: new K(e)
                    }
                },
                ee = a("LHn/"),
                te = a("gISs"),
                ae = a("Dzm6"),
                ne = {
                    hat37: {
                        name: "Bunny Costume Head",
                        price: 100,
                        rarity: "Uncommon",
                        type: "hat",
                        num: 37
                    },
                    clothing44: {
                        name: "Bunny Costume Body",
                        price: 100,
                        rarity: "Uncommon",
                        type: "clothing",
                        num: 44
                    },
                    nose8: {
                        name: "Bunny Costume Nose",
                        price: 100,
                        rarity: "Uncommon",
                        type: "nose",
                        num: 8
                    },
                    hat38: {
                        name: "Gator Costume Head",
                        price: 200,
                        rarity: "Rare",
                        type: "hat",
                        num: 38
                    },
                    clothing45: {
                        name: "Gator Costume Body",
                        price: 200,
                        rarity: "Rare",
                        type: "clothing",
                        num: 45
                    },
                    hat39: {
                        name: "Unicorn Costume Head",
                        price: 300,
                        rarity: "Epic",
                        type: "hat",
                        num: 39
                    },
                    clothing46: {
                        name: "Unicorn Costume Body",
                        price: 300,
                        rarity: "Epic",
                        type: "clothing",
                        num: 46
                    },
                    hat40: {
                        name: "Cardboard Robot",
                        price: 300,
                        rarity: "Epic",
                        type: "hat",
                        num: 40
                    },
                    item33: {
                        name: "Candy Bag",
                        price: 100,
                        rarity: "Uncommon",
                        type: "item",
                        num: 33
                    },
                    item32: {
                        name: "Candy Pumpkin",
                        price: 250,
                        rarity: "Rare",
                        type: "item",
                        num: 32
                    }
                },
                oe = a("8qja"),
                re = a("ZbWA");

            function se(e) {
                return (se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ie(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ce(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ce(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ce(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function ue() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                ue = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new E(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function _() {}

                function p() {}
                var f = {};
                l(f, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(O([])));
                y && y !== t && a.call(y, r) && (f = y);
                var g = p.prototype = m.prototype = Object.create(f);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == se(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return _.prototype = p, n(g, "constructor", {
                    value: p,
                    configurable: !0
                }), n(p, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = l(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(x.prototype), l(x.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new x(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function de(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function me(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var r = e.apply(t, a);

                        function s(e) {
                            de(r, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            de(r, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function _e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function pe(e, t) {
                return (pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function fe(e) {
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
                    var a, n = ge(e);
                    if (t) {
                        var o = ge(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return he(this, a)
                }
            }

            function he(e, t) {
                if (t && ("object" === se(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return ye(e)
            }

            function ye(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ge(e) {
                return (ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var be = window.ShopData = [{
                    id: "spooky",
                    type: "banner",
                    data: te.a.spooky
                }, {
                    id: "spiders",
                    type: "banner",
                    data: te.a.spiders
                }, {
                    id: "coffin",
                    type: "banner",
                    data: te.a.coffin
                }, {
                    id: "pumpkins",
                    type: "banner",
                    data: te.a.pumpkins
                }, {
                    id: "spooky",
                    type: "title",
                    data: ae.a.spooky
                }, {
                    id: "trickOrTreat",
                    type: "title",
                    data: ae.a.trickOrTreat
                }, {
                    id: "hat37",
                    type: "part",
                    data: ne.hat37
                }, {
                    id: "clothing44",
                    type: "part",
                    data: ne.clothing44
                }, {
                    id: "nose8",
                    type: "part",
                    data: ne.nose8
                }, {
                    id: "hat38",
                    type: "part",
                    data: ne.hat38
                }, {
                    id: "clothing45",
                    type: "part",
                    data: ne.clothing45
                }, {
                    id: "hat39",
                    type: "part",
                    data: ne.hat39
                }, {
                    id: "clothing46",
                    type: "part",
                    data: ne.clothing46
                }, {
                    id: "hat40",
                    type: "part",
                    data: ne.hat40
                }, {
                    id: "item33",
                    type: "part",
                    data: ne.item33
                }, {
                    id: "item32",
                    type: "part",
                    data: ne.item32
                }],
                xe = {
                    Spooky: {
                        url: "https://media.blooket.com/image/upload/v1666216071/Media/market/Spooky_pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1666216073/Media/market/animation_spooky_pack.png",
                        background: "radial-gradient(circle, rgba(82,82,82,1) 0%, rgba(26,26,26,1) 100%)"
                    },
                    "Ice Monster": {
                        url: "https://media.blooket.com/image/upload/v1663063471/Media/market/ice_monsters_pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1663063472/Media/market/animation_ice_monsters_pack.png",
                        background: "radial-gradient(circle, rgba(29,76,94,1) 0%, rgba(0,52,73,1) 100%)"
                    },
                    Dino: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Dino_pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009551/Media/market/animation_dino_pack.png",
                        background: "radial-gradient(circle, rgba(160,189,65,1) 0%, rgba(21,59,49,1) 100%)"
                    },
                    Aquatic: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Aquatic_pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009551/Media/market/animation_aquatic_pack.png",
                        background: "radial-gradient(circle, rgba(0,204,255,1) 0%, rgba(0,51,204,1) 100%)"
                    },
                    Safari: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Safari_Pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009552/Media/market/animation_safari_pack.png",
                        background: "radial-gradient(circle, rgba(255,219,77,1) 0%, rgba(255,102,0,1) 100%)"
                    },
                    Bot: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Bot_Pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009551/Media/market/animation_bot_pack.png",
                        background: "radial-gradient(circle, rgba(51,204,51,1) 0%, rgba(45,134,89,1) 100%)"
                    },
                    Space: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Space_Pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009552/Media/market/animation_space_pack.png",
                        background: "radial-gradient(circle, rgba(28,37,156,1) 0%, rgba(7,0,40,1) 100%)"
                    },
                    Breakfast: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Breakfast_Pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009551/Media/market/animation_breakfast_pack.png",
                        background: "radial-gradient(circle, rgba(255,166,95,1) 0%, rgba(193,85,35,1) 100%)"
                    },
                    Medieval: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Medieval_Pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009551/Media/market/animation_medieval_pack.png",
                        background: "radial-gradient(circle, rgba(200,200,200,1) 0%, rgba(110,110,110,1) 100%)"
                    },
                    Wonderland: {
                        url: "https://media.blooket.com/image/upload/v1661921783/Media/market/png/Wonderland_Pack.png",
                        animUrl: "https://media.blooket.com/image/upload/v1662009551/Media/market/animation_wonderland_pack.png",
                        background: "radial-gradient(circle, rgba(0,170,255,1) 0%, rgba(97,32,87,1) 100%)"
                    }
                },
                ve = function(e) {
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
                        }), t && pe(e, t)
                    }(i, e);
                    var t, a, n, r, s = fe(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = s.call(this, e)).state = {
                            tokens: 0,
                            currentPack: "",
                            unlockedBlook: "",
                            newUnlock: !1,
                            openPack: !1,
                            opening: !1,
                            canOpen: !1,
                            doneOpening: !1,
                            instantOpen: !1,
                            user: null,
                            game: null,
                            currentItem: null,
                            loadingItem: !1,
                            banners: [],
                            titles: [],
                            blookParts: {}
                        }, t.here = !0, t.handleBigClick = t.handleBigClick.bind(ye(t)), t.viewPack = t.viewPack.bind(ye(t)), t.buyPack = t.buyPack.bind(ye(t)), t.startOpening = t.startOpening.bind(ye(t)), t.buyItem = t.buyItem.bind(ye(t)), t
                    }
                    return t = i, (a = [{
                        key: "componentDidMount",
                        value: (r = me(ue().mark((function e() {
                            var t, a = this;
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (t = e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return Object(g.b)("MarketPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 7:
                                        this.setState({
                                            user: t
                                        }), B.a.get("/api/users/market").then((function(e) {
                                            a.here && a.setState({
                                                tokens: e.data.tokens,
                                                banners: e.data.banners || [],
                                                titles: e.data.titles || [],
                                                blookParts: e.data.blookParts || {}
                                            })
                                        })).catch((function(e) {
                                            Object(g.b)(e)
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1, clearTimeout(this.openTimeout), clearTimeout(this.particleTimeout), clearTimeout(this.canOpenTimeout)
                        }
                    }, {
                        key: "handleBigClick",
                        value: function() {
                            !this.state.opening && this.state.canOpen ? this.startOpening() : this.state.doneOpening && this.setState({
                                opening: !1,
                                doneOpening: !1,
                                openPack: !1,
                                currentPack: "",
                                unlockedBlook: ""
                            })
                        }
                    }, {
                        key: "viewPack",
                        value: function(e) {
                            this.setState({
                                currentPack: e
                            })
                        }
                    }, {
                        key: "buyPack",
                        value: function(e, t) {
                            var a = this;
                            if (!e) return this.setState({
                                currentPack: ""
                            });
                            this.state.tokens < x.a[t] || this.state.loadingPack || (this.setState({
                                loadingPack: !0,
                                tokens: this.state.tokens - x.a[t]
                            }), B.a.put("/api/users/unlockblook", {
                                name: this.state.user.name,
                                box: t
                            }).then((function(e) {
                                a.setState({
                                    loadingPack: !1,
                                    currentPack: t,
                                    openPack: !0,
                                    unlockedBlook: e.data.unlockedBlook,
                                    tokens: e.data.tokens,
                                    newUnlock: e.data.isNewBlook,
                                    game: $(Object(w.a)(e.data.unlockedBlook)),
                                    canOpen: !1
                                }, (function() {
                                    a.canOpenTimeout = setTimeout((function() {
                                        a.setState({
                                            canOpen: !0
                                        })
                                    }), 200)
                                }))
                            })).catch((function(e) {
                                Object(g.b)(e), a.setState({
                                    loadingPack: !1,
                                    currentPack: ""
                                })
                            })))
                        }
                    }, {
                        key: "startOpening",
                        value: function() {
                            var e = this;
                            if (!this.state.opening) {
                                var t = Object(w.a)(this.state.unlockedBlook);
                                this.setState({
                                    opening: !0
                                }, me(ue().mark((function a() {
                                    return ue().wrap((function(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (e.state.game.instance) {
                                                    a.next = 5;
                                                    break
                                                }
                                                return a.next = 3, new Promise((function(e) {
                                                    return setTimeout(e, 500)
                                                }));
                                            case 3:
                                                a.next = 0;
                                                break;
                                            case 5:
                                                e.openTimeout = setTimeout((function() {
                                                    e.setState({
                                                        doneOpening: !0
                                                    })
                                                }), ["Uncommon", "Rare"].includes(t) ? 750 : "Chroma" === t ? 2e3 : 1250), e.particleTimeout = setTimeout((function() {
                                                    e.state.game.instance.events.emit("start-particles", Object(w.a)(e.state.unlockedBlook))
                                                }), 100);
                                            case 7:
                                            case "end":
                                                return a.stop()
                                        }
                                    }), a)
                                }))))
                            }
                        }
                    }, {
                        key: "buyItem",
                        value: function() {
                            var e = this;
                            this.state.loadingItem || this.state.tokens < this.state.currentItem.data.price || (this.setState({
                                loadingItem: !0,
                                tokens: this.state.tokens - this.state.currentItem.data.price
                            }), B.a.put("/api/users/buy/".concat(this.state.currentItem.type), {
                                id: this.state.currentItem.id
                            }).then((function(t) {
                                e.setState({
                                    loadingItem: !1,
                                    currentItem: null,
                                    banners: "banner" === e.state.currentItem.type ? t.data : e.state.banners,
                                    titles: "title" === e.state.currentItem.type ? t.data : e.state.titles,
                                    blookParts: "part" === e.state.currentItem.type ? t.data : e.state.blookParts
                                })
                            })).catch((function(t) {
                                Object(g.b)(t), e.setState({
                                    loadingItem: !1,
                                    currentItem: null
                                })
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n, r = this;
                            return o.a.createElement("div", {
                                className: u.isMobile ? k.a.mBody : k.a.body
                            }, o.a.createElement(j.a, {
                                title: "Market | Blooket",
                                desc: "Use the market to buy packs with tokens that are collected from games. There are tons of new Blooks to unlock, and this is the best place to get them."
                            }), o.a.createElement(T.a, {
                                user: this.state.user,
                                page: "Market",
                                topContent: o.a.createElement("div", {
                                    className: O.a.tokenBalance
                                }, o.a.createElement("img", {
                                    src: ee.a.basic.token,
                                    alt: "Token",
                                    className: O.a.tokenBalanceIcon,
                                    draggable: !1
                                }), Object(I.j)(this.state.tokens))
                            }), o.a.createElement("div", {
                                className: k.a.profileBody
                            }, o.a.createElement("div", {
                                className: O.a.header
                            }, "Market"), o.a.createElement("div", {
                                className: O.a.mTokenBalance
                            }, o.a.createElement("img", {
                                src: ee.a.basic.token,
                                alt: "Token",
                                className: O.a.tokenBalanceIcon,
                                draggable: !1
                            }), Object(I.j)(this.state.tokens)), o.a.createElement("div", {
                                style: {
                                    display: "flex"
                                }
                            }, o.a.createElement("div", {
                                className: O.a.mInstantButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return r.setState({
                                        instantOpen: !r.state.instantOpen
                                    })
                                }
                            }, "Instant Open: ".concat(this.state.instantOpen ? "On" : "Off"))), o.a.createElement("div", {
                                className: O.a.storeContainer
                            }, oe.a ? o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1667603304/Media/fall/blook_cashier_fall.svg",
                                alt: "Mark the Cashier",
                                className: O.a.fallCashierBlook,
                                draggable: !1
                            }), o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1667703131/Media/fall/mini_store_fall_v2.svg",
                                alt: "Store",
                                className: O.a.fallStoreImg,
                                draggable: !1
                            })) : oe.b ? o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1666250408/Media/spooky/blook_cashier_halloween_1.svg",
                                alt: "Mark the Cashier",
                                className: O.a.spookyCashierBlook,
                                draggable: !1
                            }), o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1666220384/Media/spooky/Mini_halloween_market_250x375.png",
                                alt: "Store",
                                className: O.a.storeImg,
                                draggable: !1
                            })) : o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657064190/Media/market/blook_cashier.svg",
                                alt: "Mark the Cashier",
                                className: O.a.cashierBlook,
                                draggable: !1
                            }), o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657064190/Media/market/Mini_store.svg",
                                alt: "Store",
                                className: O.a.storeImg,
                                draggable: !1
                            })), o.a.createElement("div", {
                                className: O.a.instantButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return r.setState({
                                        instantOpen: !r.state.instantOpen
                                    })
                                }
                            }, "Instant Open: ".concat(this.state.instantOpen ? "On" : "Off"))), o.a.createElement("div", {
                                className: O.a.leftColumn
                            }, o.a.createElement("div", {
                                className: O.a.packsWrapper
                            }, Object.entries(xe).map((function(e) {
                                var t = le(e, 2),
                                    a = t[0],
                                    n = t[1];
                                return o.a.createElement("div", {
                                    className: O.a.packContainer,
                                    style: {
                                        background: n.background
                                    },
                                    key: a,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: r.state.instantOpen ? function() {
                                        return r.buyPack(!0, a)
                                    } : function() {
                                        return r.viewPack(a)
                                    }
                                }, o.a.createElement("div", {
                                    className: O.a.packImgContainer
                                }, o.a.createElement("img", {
                                    src: Object(I.d)(n.url),
                                    alt: a,
                                    className: O.a.packShadow,
                                    draggable: !1
                                }), o.a.createElement("img", {
                                    src: Object(I.d)(n.url),
                                    alt: a,
                                    className: O.a.packImg,
                                    draggable: !1
                                })), o.a.createElement("div", {
                                    className: O.a.packBottom
                                }, o.a.createElement("img", {
                                    src: ee.a.basic.token,
                                    alt: "Token",
                                    className: O.a.packPriceImg,
                                    draggable: !1
                                }), x.a[a]))
                            }))), o.a.createElement("div", {
                                className: O.a.subheader
                            }, "Spooky Shop", o.a.createElement("span", {
                                style: {
                                    fontSize: 12
                                }
                            }, "   Ends 11/6")), o.a.createElement("div", {
                                className: O.a.weeklyWrapper
                            }, be.map((function(e, t) {
                                return o.a.createElement("div", {
                                    key: t,
                                    className: O.a.weeklyContainer,
                                    style: {
                                        background: xe.Spooky.background
                                    },
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: "title" === e.type && r.state.titles.includes(e.id) || "banner" === e.type && r.state.banners.includes(e.id) || "part" === e.type && r.state.blookParts[e.data.type] && r.state.blookParts[e.data.type].includes(e.data.num) ? function() {} : function() {
                                        return r.setState({
                                            currentItem: e
                                        })
                                    }
                                }, o.a.createElement("div", {
                                    className: O.a.weeklyName
                                }, "title" === e.type ? "Title" : e.data.name), "banner" === e.type ? o.a.createElement("img", {
                                    src: e.data.url,
                                    alt: e.data.name,
                                    className: O.a.weeklyBanner,
                                    draggable: !1
                                }) : "part" === e.type ? o.a.createElement("img", {
                                    src: re.a[e.data.type][e.data.num].url,
                                    alt: e.data.name,
                                    className: O.a.weeklyPart,
                                    draggable: !1
                                }) : o.a.createElement("div", {
                                    className: O.a.weeklyTitle
                                }, e.data.name), "title" === e.type && r.state.titles.includes(e.id) || "banner" === e.type && r.state.banners.includes(e.id) || "part" === e.type && r.state.blookParts[e.data.type] && r.state.blookParts[e.data.type].includes(e.data.num) ? o.a.createElement("div", {
                                    className: O.a.weeklyBottom
                                }, "Owned") : o.a.createElement("div", {
                                    className: O.a.weeklyBottom
                                }, o.a.createElement("img", {
                                    src: ee.a.basic.token,
                                    alt: "Token",
                                    className: O.a.packPriceImg,
                                    draggable: !1
                                }), Object(I.j)(e.data.price)), o.a.createElement("div", {
                                    className: O.a.weeklyRarity,
                                    style: {
                                        backgroundColor: I.n[e.data.rarity]
                                    }
                                }, e.data.rarity))
                            }))))), this.state.currentPack ? o.a.createElement(N.a, {
                                content: o.a.createElement("div", null, o.a.createElement(d.a, {
                                    place: "left",
                                    effect: "solid",
                                    multiline: !0,
                                    html: !0,
                                    clickable: !0,
                                    className: O.a.tooltip
                                }), "Purchase the ".concat(this.state.currentPack, " Pack"), o.a.createElement("i", {
                                    className: f()(O.a.rateIcon, "far fa-question-circle"),
                                    "data-tip": _.a.renderToStaticMarkup(o.a.createElement("div", null, o.a.createElement("div", null, "Pack Rates:"), Object(x.b)(this.state.currentPack).map((function(e) {
                                        return o.a.createElement("div", {
                                            key: e[0]
                                        }, "".concat(e[0], ": ").concat(e[1], "%"))
                                    }))))
                                }), "for ".concat(Object(I.j)(x.a[this.state.currentPack]), " tokens?")),
                                loading: this.state.loadingPack,
                                buttonOne: this.state.tokens >= x.a[this.state.currentPack] ? {
                                    text: "Yes",
                                    click: function() {
                                        return r.buyPack(!0, r.state.currentPack)
                                    },
                                    color: "blue"
                                } : {
                                    text: "Not Enough Tokens",
                                    click: function() {
                                        return r.buyPack(!1)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: this.state.tokens >= x.a[this.state.currentPack] ? {
                                    text: "No",
                                    click: function() {
                                        return r.buyPack(!1)
                                    },
                                    color: "blue"
                                } : null
                            }) : this.state.currentItem ? o.a.createElement(N.a, {
                                text: "Purchase the ".concat(this.state.currentItem.data.name, " ").concat(this.state.currentItem.type, " for ").concat(Object(I.j)(this.state.currentItem.data.price), " tokens?"),
                                loading: this.state.loadingItem,
                                buttonOne: this.state.tokens >= this.state.currentItem.data.price ? {
                                    text: "Yes",
                                    click: this.buyItem,
                                    color: "blue"
                                } : {
                                    text: "Not Enough Tokens",
                                    click: function() {
                                        return r.setState({
                                            currentItem: null
                                        })
                                    },
                                    color: "blue"
                                },
                                buttonTwo: this.state.tokens >= this.state.currentItem.data.price ? {
                                    text: "No",
                                    click: function() {
                                        return r.setState({
                                            currentItem: null
                                        })
                                    },
                                    color: "blue"
                                } : null
                            }) : null, this.state.openPack ? o.a.createElement("div", {
                                className: O.a.openBackground,
                                style: {
                                    background: xe[S.a[this.state.unlockedBlook].set].background
                                }
                            }, o.a.createElement("img", {
                                src: P.c[S.a[this.state.unlockedBlook].set],
                                alt: "Icon",
                                className: O.a.cornerIcon,
                                draggable: !1
                            }), o.a.createElement(y.a, {
                                game: this.state.game
                            }), o.a.createElement("div", {
                                className: O.a.phaserContainer,
                                id: "phaser-market"
                            }), o.a.createElement("div", {
                                className: f()(O.a.openContainer, (e = {}, ie(e, O.a.openingContainer, this.state.opening), ie(e, O.a.openingContainerEpic, this.state.opening && "Epic" === Object(w.a)(this.state.unlockedBlook)), ie(e, O.a.openingContainerLegendary, this.state.opening && "Legendary" === Object(w.a)(this.state.unlockedBlook)), ie(e, O.a.openingContainerChroma, this.state.opening && "Chroma" === Object(w.a)(this.state.unlockedBlook)), e))
                            }, o.a.createElement("img", {
                                src: Object(I.d)(P.b[S.a[this.state.unlockedBlook].set]),
                                alt: "Background",
                                className: O.a.blookBackground,
                                draggable: !1
                            }), o.a.createElement(v.a, {
                                name: this.state.unlockedBlook,
                                className: O.a.unlockedBlookImage
                            }), o.a.createElement("div", {
                                className: O.a.unlockedText
                            }, o.a.createElement(h.Textfit, {
                                className: O.a.unlockedBlook,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: 40
                            }, this.state.unlockedBlook), o.a.createElement("div", {
                                className: O.a.rarityText,
                                style: {
                                    color: I.n[Object(w.a)(this.state.unlockedBlook)]
                                }
                            }, Object(w.a)(this.state.unlockedBlook))), o.a.createElement("div", {
                                className: O.a.bottomText
                            }, "".concat((t = this.state.unlockedBlook, a = Object(x.b)(S.a[t].set), n = 0, a.forEach((function(e) {
                                e[0] === t && (n = e[1])
                            })), n), "%").concat(this.state.newUnlock ? " - NEW!" : "")), o.a.createElement("div", {
                                className: O.a.bottomShadow
                            })), o.a.createElement("div", {
                                className: this.state.opening ? O.a.openingPackContainer : O.a.openPackContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.startOpening
                            }, o.a.createElement("div", {
                                className: f()(O.a.openPack, ie({}, O.a.isOpeningPack, this.state.opening)),
                                style: {
                                    backgroundImage: "url(".concat(Object(I.d)(xe[S.a[this.state.unlockedBlook].set].animUrl), ")")
                                }
                            })), o.a.createElement("div", {
                                className: f()(O.a.openBigButton, ie({}, O.a.canOpen, !this.state.opening && this.state.canOpen || this.state.opening && this.state.doneOpening)),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.handleBigClick
                            })) : null)
                        }
                    }]) && _e(t.prototype, a), n && _e(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), i
                }(o.a.Component);
            ve.propTypes = {
                user: l.a.object
            };
            t.a = Object(b.c)(Object(c.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(ve)))
        },
        gISs: function(e, t, a) {
            "use strict";
            t.a = {
                starter: {
                    name: "Starter",
                    url: "https://media.blooket.com/image/upload/v1664361085/Banners/starter.svg",
                    price: 0,
                    rarity: "Common"
                },
                chalkboard: {
                    name: "Chalkboard",
                    url: "https://media.blooket.com/image/upload/v1664245897/Banners/chalkboard.svg",
                    price: 100,
                    rarity: "Uncommon"
                },
                slime: {
                    name: "Slime",
                    url: "https://media.blooket.com/image/upload/v1664260480/Banners/slime.svg",
                    price: 500,
                    rarity: "Rare"
                },
                bookshelf: {
                    name: "Bookshelf",
                    url: "https://media.blooket.com/image/upload/v1664874204/Banners/bookshelf.svg",
                    price: 100,
                    rarity: "Uncommon"
                },
                toasterPastry: {
                    name: "Toaster Pastry",
                    url: "https://media.blooket.com/image/upload/v1664874204/Banners/toasterPastry.svg",
                    price: 500,
                    rarity: "Rare"
                },
                theater: {
                    name: "Theater",
                    url: "https://media.blooket.com/image/upload/v1665549438/Banners/theater.svg",
                    price: 100,
                    rarity: "Uncommon"
                },
                sushi: {
                    name: "Sushi",
                    url: "https://media.blooket.com/image/upload/v1665549438/Banners/sushi.svg",
                    price: 500,
                    rarity: "Rare"
                },
                workbench: {
                    name: "Workbench",
                    url: "https://media.blooket.com/image/upload/v1666065519/Banners/workbench.svg",
                    price: 100,
                    rarity: "Uncommon"
                },
                spooky: {
                    name: "Spooky",
                    url: "https://media.blooket.com/image/upload/v1666685985/Banners/spooky.svg",
                    price: 100,
                    rarity: "Uncommon"
                },
                spiders: {
                    name: "Spiders",
                    url: "https://media.blooket.com/image/upload/v1666685985/Banners/spiders.svg",
                    price: 500,
                    rarity: "Rare"
                },
                coffin: {
                    name: "Coffin",
                    url: "https://media.blooket.com/image/upload/v1666685985/Banners/coffin.svg",
                    price: 500,
                    rarity: "Rare"
                },
                pumpkins: {
                    name: "Pumpkins",
                    url: "https://media.blooket.com/image/upload/v1666685985/Banners/pumpkins.svg",
                    price: 750,
                    rarity: "Epic"
                }
            }
        },
        lPxx: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___1AWco-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:520px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__containerHeader___246oi-camelCase{text-align:center;font-size:200px;margin:0 20px;font-family:Titan One,sans-serif;color:#3a3a3a;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__blook___2NK26-camelCase{height:160px;margin:auto 10px}@media only screen and (max-width:600px){.styles__container___1AWco-camelCase{width:320px}.styles__containerHeader___246oi-camelCase{font-size:130px}.styles__blook___2NK26-camelCase{height:100px}}.styles__containerText___2l6Nk-camelCase{text-align:center;font-size:24px;margin:10px 30px 20px;font-family:Nunito,sans-serif;color:#3a3a3a}", ""]), t.locals = {
                container: "styles__container___1AWco-camelCase",
                containerHeader: "styles__containerHeader___246oi-camelCase",
                blook: "styles__blook___2NK26-camelCase",
                containerText: "styles__containerText___2l6Nk-camelCase"
            }
        },
        ouvC: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                d = a("wd/R"),
                m = a.n(d),
                _ = a("JeI0"),
                p = a.n(_),
                f = a("TSYQ"),
                h = a.n(f),
                y = a("H1WH"),
                g = a("ymym"),
                b = a("3WHO"),
                x = a("G5je"),
                v = a("4HzQ"),
                w = a.n(v),
                C = a("EDFO"),
                k = a("FKJl"),
                E = a("E8Bj"),
                O = a("Xst1"),
                j = a.n(O),
                N = a("vFMZ"),
                S = a.n(N),
                I = a("i4/Q"),
                B = a("ca/f"),
                T = a("XTAU"),
                P = a("0oXL"),
                D = a("vCpj"),
                F = a("Y018"),
                z = a("liux"),
                M = a("O+AO"),
                L = a("5Kqo"),
                R = a("cQOM"),
                A = a("/9rF"),
                q = a("qnYv"),
                H = a("74sb");

            function G(e) {
                return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function U(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(a), !0).forEach((function(t) {
                        Q(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : U(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function Q(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function V(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || ne(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function J() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                J = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new E(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function _() {}

                function p() {}
                var f = {};
                l(f, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(O([])));
                y && y !== t && a.call(y, r) && (f = y);
                var g = p.prototype = m.prototype = Object.create(f);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == G(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return _.prototype = p, n(g, "constructor", {
                    value: p,
                    configurable: !0
                }), n(p, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = l(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(x.prototype), l(x.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new x(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function W(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function X(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Z(e, t) {
                return (Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function K(e) {
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
                    var a, n = te(e);
                    if (t) {
                        var o = te(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return $(this, a)
                }
            }

            function $(e, t) {
                if (t && ("object" === G(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return ee(e)
            }

            function ee(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function te(e) {
                return (te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ae(e) {
                return function(e) {
                    if (Array.isArray(e)) return oe(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ne(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ne(e, t) {
                if (e) {
                    if ("string" == typeof e) return oe(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? oe(e, t) : void 0
                }
            }

            function oe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            Object(C.addStyles)(), b.d.register(b.a);
            var re = [].concat(ae(Object.keys(F.a)), ae(Object.keys(z.a)), ae(Object.keys(M.a)), ae(Object.keys(L.a)), ae(Object.keys(R.a)), ae(Object.keys(A.a))),
                se = function(e) {
                    e.sort((function(e, t) {
                        var a = e.corrects / Math.max(e.corrects + e.incorrects, 1),
                            n = t.corrects / Math.max(t.corrects + t.incorrects, 1);
                        return 1 === a && 1 === n ? e.corrects - t.corrects : a === n ? t.incorrects - e.incorrects : a - n
                    }))
                },
                ie = function(e, t) {
                    return {
                        datasets: [{
                            data: [e, t, e || t ? 0 : 1],
                            backgroundColor: ["#4bc22e", "#c43a35", "#737373"],
                            hoverBackgroundColor: ["#4bc22e", "#c43a35", "#737373"]
                        }]
                    }
                },
                le = function(e) {
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
                        }), t && Z(e, t)
                    }(l, e);
                    var t, a, n, r, s, i = K(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            ready: !1,
                            set: "",
                            type: "",
                            date: "",
                            endDate: "",
                            id: "",
                            hwTitle: "",
                            isEnded: !1,
                            daysLeft: 0,
                            numPlayers: 0,
                            corrects: 0,
                            incorrects: 0,
                            stdQuestions: [],
                            questions: [],
                            standings: [],
                            deleteCheck: !1,
                            loading: !1,
                            plus: !1,
                            justCopied: !1,
                            sortedBy: "number",
                            plusModal: !1,
                            standingShown: {},
                            deleteStanding: {},
                            extendPop: !1,
                            extendAmount: 0,
                            zoomedImage: "",
                            user: null
                        }, t.id = t.props.match.params.id, t.loading = !1, t.here = !0, t.onDeleteConfirm = t.onDeleteConfirm.bind(ee(t)), t.onDeleteStanding = t.onDeleteStanding.bind(ee(t)), t.extendHW = t.extendHW.bind(ee(t)), t.refresh = t.refresh.bind(ee(t)), t.copyToClipboard = t.copyToClipboard.bind(ee(t)), t.changeSort = t.changeSort.bind(ee(t)), t.downloadResult = t.downloadResult.bind(ee(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (r = J().mark((function e() {
                            var t, a = this;
                            return J().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.id) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        if (t = e.sent) {
                                            e.next = 9;
                                            break
                                        }
                                        return Object(k.b)("HomeworkPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 9:
                                        this.setState({
                                            user: t
                                        }), this.refresh(), q.a.get("/api/users/plan").then((function(e) {
                                            a.here && a.setState({
                                                plus: e.data.hasPlus
                                            })
                                        })).catch((function(e) {
                                            Object(k.b)(e)
                                        }));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var o = r.apply(e, t);

                                function s(e) {
                                    W(o, a, n, s, i, "next", e)
                                }

                                function i(e) {
                                    W(o, a, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
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
                            this.loading || (this.loading = !0, e ? (this.setState({
                                loading: !0
                            }), q.a.delete("/api/homeworks", {
                                params: {
                                    id: this.id
                                }
                            }).then((function() {
                                t.here && t.props.history.push("/homeworks")
                            })).catch((function(e) {
                                Object(k.b)(e)
                            }))) : (this.loading = !1, this.setState({
                                deleteCheck: !1
                            })))
                        }
                    }, {
                        key: "onDeleteStanding",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loading: !0
                            }), q.a.put("/api/homeworks/delete-result", {
                                resultId: this.state.deleteStanding._id,
                                hwId: this.state.deleteStanding.hwId,
                                name: this.state.deleteStanding.name
                            }).then((function() {
                                e.here && (e.loading = !1, e.setState({
                                    deleteStanding: {}
                                }, e.refresh))
                            })).catch((function(e) {
                                Object(k.b)(e)
                            })))
                        }
                    }, {
                        key: "extendHW",
                        value: function(e) {
                            var t = this;
                            e.preventDefault(), this.loading || (this.state.extendAmount <= 0 ? this.setState({
                                extendPop: !1
                            }) : (this.loading = !0, this.setState({
                                loading: !0
                            }), q.a.put("/api/homeworks/extend", {
                                hwId: this.id,
                                minutes: 24 * this.state.extendAmount * 60,
                                plus: this.state.plus
                            }).then((function() {
                                t.here && (t.loading = !1, t.setState({
                                    extendPop: !1
                                }, t.refresh))
                            })).catch((function(e) {
                                t.loading = !1, t.setState({
                                    extendPop: !1
                                }), Object(k.b)(e)
                            }))))
                        }
                    }, {
                        key: "refresh",
                        value: function() {
                            var e = this;
                            this.setState({
                                standings: []
                            }), q.a.get("/api/homeworks/byid/results", {
                                params: {
                                    id: this.id
                                }
                            }).then((function(t) {
                                if (e.here)
                                    if (t.data && t.data.metaData) {
                                        for (var a = t.data.metaData, n = t.data.results, o = 0, r = 0, s = {}, i = 0; i < a.questions.length; i++) s[a.questions[i].number] = [0, 0];
                                        var l = [];
                                        n.forEach((function(e) {
                                            if (e.data) {
                                                var t = 0;
                                                e.data && e.data.corrects && Object.entries(e.data.corrects).forEach((function(e) {
                                                    var a = V(e, 2),
                                                        n = a[0],
                                                        r = a[1];
                                                    o += r, s[n] && (s[n][0] += r), t += r
                                                }));
                                                var a = 0;
                                                e.data && e.data.incorrects && Object.entries(e.data.incorrects).forEach((function(e) {
                                                    var t = V(e, 2),
                                                        n = t[0],
                                                        o = t[1];
                                                    r += o, s[n] && (s[n][1] += o), a += o
                                                }));
                                                var n = Object(H.k)(re);
                                                l.push(Y(Y({}, e), {}, {
                                                    blook: n,
                                                    numCorrects: t,
                                                    numIncorrects: a
                                                }))
                                            }
                                        }));
                                        var c = a.questions.map((function(e) {
                                            return Y(Y({}, e), {}, {
                                                corrects: s[e.number][0],
                                                incorrects: s[e.number][1]
                                            })
                                        }));
                                        "Tower" === a.settings.type ? l.sort((function(e, t) {
                                            return t.data.stage - e.data.stage
                                        })) : "Factory" === a.settings.type ? l.sort((function(e, t) {
                                            return t.data.cash - e.data.cash
                                        })) : "Cafe" === a.settings.type ? l.sort((function(e, t) {
                                            return t.data.day - e.data.day
                                        })) : "Defense" === a.settings.type ? l.sort((function(e, t) {
                                            return t.data.round - e.data.round
                                        })) : "Kingdom" === a.settings.type ? l.sort((function(e, t) {
                                            return t.data.guests - e.data.guests
                                        })) : "Brawl" === a.settings.type && l.sort((function(e, t) {
                                            return t.data.level - e.data.level
                                        })), "number" === e.state.sortedBy ? c.sort((function(e, t) {
                                            return e.number - t.number
                                        })) : "incorrects" === e.state.sortedBy && se(c), e.setState({
                                            ready: !0,
                                            set: a.title,
                                            type: a.settings.type,
                                            date: m()(a.startTime).format("MM/DD/YY"),
                                            endDate: m()(a.startTime).add(a.duration, "minutes").format("MM/DD/YY - h:mm a"),
                                            id: a._id,
                                            hwTitle: a.title,
                                            isEnded: m()(a.startTime).add(a.duration, "minutes").isBefore(m.a.utc()) || a.noEnd,
                                            daysLeft: m()(a.startTime).add(a.duration, "minutes").diff(m.a.utc(), "days"),
                                            numPlayers: l.length,
                                            corrects: o,
                                            incorrects: r,
                                            standings: l,
                                            questions: c,
                                            stdQuestions: c,
                                            loading: !1
                                        })
                                    } else e.setState({
                                        ready: !0
                                    })
                            })).catch((function(t) {
                                e.setState({
                                    ready: !0
                                }), Object(k.b)(t)
                            }))
                        }
                    }, {
                        key: "copyToClipboard",
                        value: function() {
                            var e = this,
                                t = document.createElement("textarea");
                            t.value = "".concat("https://play.blooket.com", "/play?hwId=").concat(this.state.id), t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t);
                            var a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                            t.select(), document.execCommand("copy"), document.body.removeChild(t), a && (document.getSelection().removeAllRanges(), document.getSelection().addRange(a)), clearTimeout(this.copyTimeout), this.setState({
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
                        key: "changeSort",
                        value: function(e) {
                            var t = JSON.parse(JSON.stringify(this.state.questions));
                            "number" === e ? t.sort((function(e, t) {
                                return e.number - t.number
                            })) : "incorrects" === e && se(t), this.setState({
                                questions: t,
                                sortedBy: e
                            })
                        }
                    }, {
                        key: "downloadResult",
                        value: function() {
                            var e = this,
                                t = [
                                    [{
                                        value: "Name"
                                    }, {
                                        value: "Corrects"
                                    }, {
                                        value: "Incorrects"
                                    }, {
                                        value: "Percentage"
                                    }, {
                                        value: "Tower" === this.state.type ? "Stages" : "Defense" === this.state.type ? "Rounds" : "Kingdom" === this.state.type ? "Guests" : "Brawl" === this.state.type ? "Level" : "Cafe" === this.state.type ? "Days" : "Cash"
                                    }]
                                ];
                            this.state.standings.forEach((function(a) {
                                t.push([{
                                    value: a.name
                                }, {
                                    value: a.numCorrects,
                                    type: "number"
                                }, {
                                    value: a.numIncorrects,
                                    type: "number"
                                }, {
                                    value: Math.round(a.numCorrects / (a.numCorrects + a.numIncorrects || 1) * 100),
                                    type: "number"
                                }, {
                                    value: "Tower" === e.state.type ? a.data.stage : "Defense" === e.state.type ? a.data.round : "Kingdom" === e.state.type ? a.data.level : "Brawl" === e.state.type ? a.data.xp : "Cafe" === e.state.type ? a.data.day : a.data.cash,
                                    type: "number"
                                }])
                            }));
                            var a = {
                                filename: this.state.date && this.state.date.includes("/") ? "Blooket Results - ".concat(this.state.date.replaceAll("/", "-")) : "Blooket Results",
                                sheet: {
                                    data: t
                                }
                            };
                            Object(x.a)(a)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (!this.props.match.params.id) return Object(k.b)("HomeworkPage cannot be rendered without id"), void(window.location.href = "".concat("https://id.blooket.com", "/login"));
                            if (this.state.ready && !this.state.set) return Object(k.b)("HomeworkPage cannot be rendered without this.state.set"), o.a.createElement(u.a, {
                                to: "/404"
                            });
                            var t = {},
                                a = {};
                            return this.state.standingShown.name && (t = this.state.standingShown.data.corrects || {}, a = this.state.standingShown.data.incorrects || {}), o.a.createElement("div", {
                                className: y.isMobile ? j.a.mBody : j.a.body
                            }, o.a.createElement(T.a, {
                                title: "Homework | Blooket",
                                desc: "View your recent homework and review how the players performed and what questions were most missed."
                            }), o.a.createElement(I.a, {
                                user: this.state.user,
                                page: "Homework"
                            }), o.a.createElement("div", {
                                className: j.a.profileBodyMax
                            }, this.state.ready ? o.a.createElement("div", {
                                className: S.a.fullContainer
                            }, this.state.isEnded ? o.a.createElement("div", null, o.a.createElement("div", {
                                className: S.a.hwText
                            }, this.state.hwTitle), o.a.createElement("div", {
                                className: S.a.joinText
                            }, "This HW closed on ".concat(this.state.endDate))) : o.a.createElement("div", {
                                className: S.a.hwContainer
                            }, o.a.createElement("div", {
                                className: S.a.hwText
                            }, this.state.hwTitle), o.a.createElement("div", {
                                className: S.a.joinText
                            }, "Players can join at (click to copy):"), o.a.createElement("div", {
                                className: S.a.linkContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.copyToClipboard
                            }, o.a.createElement("div", {
                                className: S.a.linkText
                            }, "".concat("https://play.blooket.com", "/play?hwId=").concat(this.state.id), this.state.justCopied ? o.a.createElement("div", {
                                className: S.a.copiedNotification
                            }, "Copied!") : null)), o.a.createElement("div", {
                                className: S.a.endDateText
                            }, "HW Closes At: ".concat(this.state.endDate)), o.a.createElement("i", {
                                className: h()("fas fa-angle-down", S.a.downIcon)
                            })), o.a.createElement("div", {
                                className: S.a.setText
                            }, this.state.set), o.a.createElement("div", {
                                className: S.a.row
                            }, o.a.createElement("div", {
                                className: S.a.column
                            }, o.a.createElement("div", {
                                className: S.a.miniTopContainer
                            }, o.a.createElement("div", {
                                className: S.a.miniTopText
                            }, this.state.date)), o.a.createElement("div", {
                                className: S.a.chartContainer
                            }, o.a.createElement(g.a, {
                                data: ie(this.state.corrects, this.state.incorrects),
                                options: {
                                    maintainAspectRatio: !1,
                                    responsive: !0,
                                    legend: {
                                        display: !1
                                    },
                                    tooltips: {
                                        enabled: !1
                                    },
                                    animation: {
                                        duration: 1500,
                                        easing: "easeInQuint"
                                    },
                                    layout: {
                                        padding: 15
                                    }
                                }
                            }), o.a.createElement("div", {
                                className: S.a.chartPercentage
                            }, "".concat(Math.round(this.state.corrects / Math.max(this.state.corrects + this.state.incorrects, 1) * 100), "%"), o.a.createElement("div", {
                                style: {
                                    fontSize: 15,
                                    lineHeight: "16px"
                                }
                            }, "Correct")))), o.a.createElement("div", {
                                className: S.a.column
                            }, o.a.createElement("div", {
                                className: S.a.correctContainer
                            }, o.a.createElement("div", {
                                className: S.a.correctText
                            }, "".concat(this.state.numPlayers, " ").concat(1 === this.state.numPlayers ? "Player" : "Players"))), o.a.createElement("div", {
                                className: S.a.correctContainer
                            }, o.a.createElement("div", {
                                className: S.a.correctText,
                                style: {
                                    color: "#4bc22e"
                                }
                            }, "".concat(Object(H.j)(this.state.corrects), " Correct"))), o.a.createElement("div", {
                                className: S.a.correctContainer
                            }, o.a.createElement("div", {
                                className: S.a.correctText,
                                style: {
                                    color: "#c43a35"
                                }
                            }, "".concat(Object(H.j)(this.state.incorrects), " Incorrect"))), this.state.plus ? o.a.createElement("div", {
                                className: S.a.downloadButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.downloadResult
                            }, o.a.createElement("i", {
                                className: "fas fa-table",
                                style: {
                                    marginRight: 15
                                }
                            }), "Download") : null)), o.a.createElement("div", {
                                className: S.a.row
                            }, o.a.createElement("div", {
                                className: S.a.refreshButton,
                                style: {
                                    backgroundColor: "#ce1313"
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        deleteCheck: !0
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: h()(S.a.refreshIcon, "fas fa-trash-alt")
                            }), "Delete"), o.a.createElement("div", {
                                className: S.a.refreshButton,
                                style: {
                                    backgroundColor: "#9a49aa"
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        extendPop: !0,
                                        extendAmount: 1
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: h()(S.a.refreshIcon, "fas fa-history")
                            }), this.state.isEnded ? "Reopen" : "Extend"), o.a.createElement("div", {
                                className: S.a.refreshButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.refresh
                            }, o.a.createElement("i", {
                                className: h()("fas fa-sync-alt", S.a.refreshIcon)
                            }), "Refresh")), this.state.standings.length > 0 ? o.a.createElement("div", {
                                className: S.a.qHolder
                            }, o.a.createElement("div", {
                                className: S.a.headerContainer
                            }, o.a.createElement("div", {
                                className: S.a.headerText
                            }, "Leaderboard")), ["Tower", "Cafe", "Defense"].includes(this.state.type) ? o.a.createElement("div", {
                                className: S.a.keyContainer
                            }, o.a.createElement("div", {
                                className: S.a.keyGroup
                            }, o.a.createElement("i", {
                                className: h()("fas fa-user", S.a.keyIcon),
                                style: {
                                    color: "#4bc22e"
                                }
                            }), "Cafe" === this.state.type ? "Café Open" : "Alive"), o.a.createElement("div", {
                                className: S.a.keyGroup
                            }, o.a.createElement("i", {
                                className: h()("fas fa-user-slash", S.a.keyIcon),
                                style: {
                                    color: "#c43a35"
                                }
                            }), "Cafe" === this.state.type ? "Closed Down" : "Dead")) : null, this.state.standings.map((function(t) {
                                return o.a.createElement("div", {
                                    className: S.a.standingHolder,
                                    key: t._id
                                }, o.a.createElement("div", {
                                    className: S.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            plusModal: !e.state.plus,
                                            standingShown: e.state.plus && (t.numCorrects || t.numIncorrects) ? t : {}
                                        })
                                    }
                                }, t.numCorrects || t.numIncorrects ? o.a.createElement("div", {
                                    className: S.a.accuracyText
                                }, "".concat(Math.round(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100), "%"), o.a.createElement("div", {
                                    className: S.a.accuracySmallText
                                }, "Correct")) : o.a.createElement("div", {
                                    className: S.a.leftEarlyText
                                }, "No", o.a.createElement("br", null), "Progress"), ["Tower", "Cafe", "Defense"].includes(e.state.type) ? o.a.createElement("i", {
                                    className: h()(t.data.alive ? "fas fa-user" : "fas fa-user-slash", S.a.standingIcon),
                                    style: {
                                        color: t.data.alive ? "#4bc22e" : "#c43a35"
                                    }
                                }) : o.a.createElement(P.a, {
                                    name: t.blook,
                                    className: S.a.blookImage
                                }), o.a.createElement(w.a, {
                                    className: S.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: 26
                                }, t.name), o.a.createElement("div", {
                                    className: S.a.barContainer
                                }, o.a.createElement("div", {
                                    className: S.a.correctBar,
                                    style: {
                                        width: t.numCorrects || t.numIncorrects ? "".concat(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100, "%") : "100%",
                                        minWidth: t.numCorrects ? 50 : null
                                    }
                                }, t.numCorrects ? o.a.createElement("div", {
                                    className: S.a.barText
                                }, t.numCorrects) : null), t.numIncorrects ? o.a.createElement("div", {
                                    className: S.a.barText
                                }, t.numIncorrects) : null), "Tower" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.statText
                                }, 34 === t.data.stage ? "Ascended the Tower!" : "Cleared ".concat(t.data.stage, " ").concat(1 === t.data.stage ? "Stage" : "Stages")) : "Factory" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.statText
                                }, "$".concat(Object(H.j)(t.data.cash))) : "Cafe" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.statText
                                }, "Day ".concat(t.data.day)) : "Defense" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.statText
                                }, "Round ".concat(t.data.round - 1)) : "Kingdom" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.statText
                                }, Object(H.j)(t.data.guests), o.a.createElement("i", {
                                    className: h()("fas fa-users", S.a.statIcon)
                                })) : "Brawl" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.statText
                                }, "Level ".concat(t.data.level)) : null), o.a.createElement("div", {
                                    className: S.a.deleteStanding,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            deleteStanding: t
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: "fas fa-trash-alt",
                                    style: {
                                        fontSize: 28,
                                        paddingBottom: 8,
                                        paddingTop: 10
                                    }
                                }), "Delete"))
                            }))) : null, o.a.createElement("div", {
                                className: S.a.qHolder
                            }, o.a.createElement("div", {
                                className: S.a.headerContainer
                            }, o.a.createElement("div", {
                                className: S.a.headerText
                            }, "Questions")), o.a.createElement("div", {
                                className: S.a.sortedContainer
                            }, o.a.createElement("div", {
                                className: S.a.sortedText
                            }, "Sorted By:"), o.a.createElement("div", {
                                className: S.a.sortedButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeSort("number")
                                },
                                style: {
                                    color: "number" === this.state.sortedBy ? "#fff" : "#3a3a3a",
                                    backgroundColor: "number" === this.state.sortedBy ? "#0bc2cf" : "#fff"
                                }
                            }, "Question #"), o.a.createElement("div", {
                                className: S.a.sortedButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeSort("incorrects")
                                },
                                style: {
                                    color: "incorrects" === this.state.sortedBy ? "#fff" : "#3a3a3a",
                                    backgroundColor: "incorrects" === this.state.sortedBy ? "#0bc2cf" : "#fff"
                                }
                            }, "Incorrect %")), this.state.questions.map((function(t) {
                                return o.a.createElement("div", {
                                    key: t.number,
                                    className: S.a.questionContainer
                                }, o.a.createElement("div", {
                                    className: S.a.questionImageContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: t.image ? function() {
                                        return e.setState({
                                            zoomedImage: t.image
                                        })
                                    } : function() {},
                                    style: {
                                        cursor: t.image ? "cursor" : "default"
                                    }
                                }, t.image ? o.a.createElement(p.a, {
                                    height: 130,
                                    width: 170
                                }, o.a.createElement("img", {
                                    src: Object(H.f)(t.image),
                                    alt: "Question Background",
                                    className: S.a.questionImage
                                })) : o.a.createElement("div", {
                                    className: S.a.imageNumber,
                                    style: {
                                        marginLeft: t.image ? -170 : 0
                                    }
                                }, t.number)), t.audio ? o.a.createElement("div", {
                                    className: S.a.questionFunc
                                }, o.a.createElement(D.a, {
                                    audioUrl: t.audio,
                                    width: "45%"
                                })) : t.text.includes("`*`") ? o.a.createElement("div", {
                                    className: S.a.questionFunc
                                }, o.a.createElement(C.StaticMathField, {
                                    className: S.a.qMathField
                                }, t.text.slice(t.text.indexOf("`*`") + 3, t.text.length - 3))) : null, o.a.createElement("div", {
                                    className: h()(S.a.questionCenterContainer, Q({}, S.a.questionWithFunc, t.text.includes("`*`") || t.audio))
                                }, o.a.createElement("div", {
                                    className: S.a.questionText
                                }, t.text.includes("`*`") ? t.text.slice(0, t.text.indexOf("`*`")) : t.text), o.a.createElement("div", {
                                    className: S.a.answerText
                                }, "Answer: ", Object(H.e)(t.correctAnswers))), o.a.createElement("div", {
                                    className: S.a.questionStatsContainer
                                }, o.a.createElement(g.a, {
                                    data: ie(t.corrects, t.incorrects),
                                    options: {
                                        cutout: "75%",
                                        maintainAspectRatio: !1,
                                        responsive: !0,
                                        legend: {
                                            display: !1
                                        },
                                        tooltips: {
                                            enabled: !1
                                        },
                                        animation: {
                                            duration: 0
                                        },
                                        layout: {
                                            padding: 2
                                        }
                                    }
                                }), o.a.createElement("div", {
                                    className: S.a.questionStats
                                }, "".concat(t.corrects, "/").concat(t.incorrects + t.corrects), o.a.createElement("div", {
                                    style: {
                                        fontSize: 13,
                                        lineHeight: "14px"
                                    }
                                }, "Correct"))))
                            })))) : null), this.state.zoomedImage ? o.a.createElement("div", {
                                className: h()(j.a.modal, j.a.modalButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: ""
                                    })
                                }
                            }, o.a.createElement("img", {
                                src: Object(H.f)(this.state.zoomedImage, !0),
                                alt: "Upload",
                                className: j.a.bigImage,
                                draggable: !1
                            })) : null, this.state.deleteCheck ? o.a.createElement(B.a, {
                                text: "Do you really want to delete this HW?",
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
                            }) : this.state.plusModal ? o.a.createElement("div", {
                                className: j.a.modal
                            }, o.a.createElement("div", {
                                className: S.a.plusModalContainer
                            }, o.a.createElement("i", {
                                className: h()("fas fa-times", S.a.plusTimes),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        plusModal: !1
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: S.a.plusText
                            }, "Get Blooket Plus For Detailed Game Reports!"), o.a.createElement(c.b, {
                                className: S.a.upgradeButton,
                                to: "/upgrade"
                            }, "Upgrade"))) : this.state.deleteStanding.name ? o.a.createElement(B.a, {
                                text: 'Do you want to delete "'.concat(this.state.deleteStanding.name, '"?'),
                                loading: this.state.loading,
                                buttonOne: {
                                    text: "Yes",
                                    click: this.onDeleteStanding,
                                    color: "red"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.setState({
                                            deleteStanding: {}
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.extendPop ? o.a.createElement(B.a, {
                                text: this.state.loading ? "Processing..." : !this.state.isEnded && (this.state.plus ? 365 : 14) - this.state.daysLeft <= 0 ? "Homework is already open for the max time (".concat(this.state.plus ? 365 : 14, " days).") : "How long would you like to ".concat(this.state.isEnded ? "reopen" : "extend", " this homework for (in days)?"),
                                loading: this.state.loading,
                                timeValue: !this.state.isEnded && (this.state.plus ? 365 : 14) - this.state.daysLeft <= 0 ? void 0 : this.state.extendAmount,
                                timeChange: function(t) {
                                    return e.setState({
                                        extendAmount: Math.min(e.state.plus ? 365 - (e.state.isEnded ? 0 : e.state.daysLeft) : 14 - (e.state.isEnded ? 0 : e.state.daysLeft), Math.max(0, Math.round(t.target.value)))
                                    })
                                },
                                onSubmit: this.extendHW,
                                buttonOne: !this.state.isEnded && (this.state.plus ? 365 : 14) - this.state.daysLeft <= 0 ? null : {
                                    text: "Confirm",
                                    click: this.extendHW,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return e.setState({
                                            extendPop: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.standingShown.name ? o.a.createElement("div", {
                                className: j.a.modal
                            }, o.a.createElement("div", {
                                className: S.a.modalButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        standingShown: {}
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: S.a.standingModalContainer
                            }, o.a.createElement("i", {
                                className: h()("fas fa-times", S.a.plusTimes),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        standingShown: {}
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: S.a.modalRow
                            }, ["Tower", "Cafe", "Defense"].includes(this.state.type) ? o.a.createElement("i", {
                                className: h()(this.state.standingShown.data.alive ? "fas fa-user" : "fas fa-user-slash", S.a.modalIcon),
                                style: {
                                    color: this.state.standingShown.data.alive ? "#4bc22e" : "#c43a35"
                                }
                            }) : o.a.createElement(P.a, {
                                name: this.state.standingShown.blook,
                                className: S.a.modalBlook
                            }), o.a.createElement("div", {
                                className: S.a.modalColumn
                            }, this.state.standingShown.name, o.a.createElement("div", {
                                className: S.a.modalDesc
                            }, "Tower" === this.state.type ? 34 === this.state.standingShown.data.stage ? "Ascended the Tower!" : "Cleared ".concat(this.state.standingShown.data.stage, " ").concat(1 === this.state.standingShown.data.stage ? "Stage" : "Stages") : "Factory" === this.state.type ? "$".concat(Object(H.j)(this.state.standingShown.data.cash)) : "Cafe" === this.state.type ? "Day ".concat(this.state.standingShown.data.day) : "Defense" === this.state.type ? "Round ".concat(this.state.standingShown.data.round - 1) : "Kingdom" === this.state.type ? "".concat(Object(H.j)(this.state.standingShown.data.guests), " ").concat(1 === this.state.standingShown.data.guests ? "Guest" : "Guests") : "Kingdom" === this.state.type ? "Level ".concat(this.state.standingShown.data.level) : null)), o.a.createElement("div", {
                                className: S.a.modalStats
                            }, o.a.createElement(g.a, {
                                data: ie(this.state.standingShown.numCorrects, this.state.standingShown.numIncorrects),
                                options: {
                                    cutout: "75%",
                                    maintainAspectRatio: !1,
                                    responsive: !0,
                                    legend: {
                                        display: !1
                                    },
                                    tooltips: {
                                        enabled: !1
                                    },
                                    animation: {
                                        duration: 0
                                    },
                                    layout: {
                                        padding: 0
                                    }
                                }
                            }), o.a.createElement("div", {
                                className: S.a.modalStatsText
                            }, this.state.standingShown.numCorrects || this.state.standingShown.numIncorrects ? "".concat(Math.round(this.state.standingShown.numCorrects / (this.state.standingShown.numCorrects + this.state.standingShown.numIncorrects) * 100), "%") : "0%", o.a.createElement("div", {
                                style: {
                                    fontSize: 9,
                                    lineHeight: "10px"
                                }
                            }, "Correct")))), o.a.createElement("div", {
                                className: S.a.mainDivider
                            }, " "), this.state.stdQuestions.map((function(n, r) {
                                return o.a.createElement("div", {
                                    key: n.number,
                                    className: S.a.modalQuestionColumn,
                                    style: {
                                        paddingBottom: r + 1 === e.state.stdQuestions.length ? 10 : 0
                                    }
                                }, o.a.createElement("div", {
                                    className: S.a.modalQuestionRow
                                }, n.audio ? o.a.createElement("div", {
                                    className: S.a.modalFuncContainer
                                }, o.a.createElement(D.a, {
                                    audioUrl: n.audio,
                                    width: "55%"
                                })) : n.image ? o.a.createElement(p.a, {
                                    height: 70,
                                    width: 80
                                }, o.a.createElement("img", {
                                    src: Object(H.f)(n.image),
                                    alt: "Question Background",
                                    className: S.a.modalQuestionImage
                                })) : n.text.includes("`*`") ? o.a.createElement("div", {
                                    className: S.a.modalFuncContainer
                                }, o.a.createElement(C.StaticMathField, {
                                    className: S.a.qModalMathField
                                }, n.text.slice(n.text.indexOf("`*`") + 3, n.text.length - 3))) : null, o.a.createElement("div", {
                                    style: {
                                        paddingLeft: 10,
                                        fontWeight: "bold"
                                    }
                                }, "".concat(n.number, ".")), o.a.createElement("div", {
                                    className: S.a.modalQuestionText
                                }, n.text.includes("`*`") ? n.text.slice(0, n.text.indexOf("`*`")) : n.text), o.a.createElement("div", {
                                    className: S.a.modalQuestionStats
                                }, o.a.createElement(g.a, {
                                    data: ie(Object.keys(t).includes(n.number.toString()) ? t[n.number] : 0, Object.keys(a).includes(n.number.toString()) ? a[n.number] : 0),
                                    options: {
                                        cutout: "75%",
                                        maintainAspectRatio: !1,
                                        responsive: !0,
                                        legend: {
                                            display: !1
                                        },
                                        tooltips: {
                                            enabled: !1
                                        },
                                        animation: {
                                            duration: 0
                                        },
                                        layout: {
                                            padding: 0
                                        }
                                    }
                                }), o.a.createElement("div", {
                                    className: S.a.modalStatsText
                                }, "".concat(Object.keys(t).includes(n.number.toString()) ? t[n.number] : 0, "/").concat((Object.keys(t).includes(n.number.toString()) ? t[n.number] : 0) + (Object.keys(a).includes(n.number.toString()) ? a[n.number] : 0))))), r + 1 !== e.state.stdQuestions.length ? o.a.createElement("div", {
                                    className: S.a.divider
                                }, " ") : null)
                            })))) : null)
                        }
                    }]) && X(t.prototype, a), n && X(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(o.a.Component);
            le.propTypes = {
                match: l.a.object,
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(E.c)(Object(u.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(le)))
        },
        puNZ: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__fullContainer___2W6at-camelCase{width:85%;margin:0 7.5% 10px}.styles__fullContainer___2W6at-camelCase,.styles__hwContainer___N5c0Y-camelCase{display:flex;flex-direction:column;align-items:center}.styles__hwContainer___N5c0Y-camelCase{min-height:calc(100vh - 55px);width:100%;position:relative}.styles__hwContainer___N5c0Y-camelCase,.styles__hwText___5ljoo-camelCase{justify-content:center}.styles__hwText___5ljoo-camelCase{background-color:#9a49aa;border-radius:7px;display:flex;flex-direction:row;align-items:center;margin:60px auto 0;color:#fff;line-height:64px;font-size:64px;font-family:Titan One,sans-serif;text-align:center;padding:20px 30px 26px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__joinText___2X0lO-camelCase{margin:30px auto;color:#3a3a3a;font-size:36px;padding:4px 15px;font-weight:700}.styles__joinText___2X0lO-camelCase,.styles__linkContainer___3N1tm-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__linkContainer___3N1tm-camelCase{background-color:#0bc2cf;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:0 auto;font-size:32px;padding:10px 20px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);outline:none;cursor:pointer;transition:.2s}.styles__linkContainer___3N1tm-camelCase:hover{transform:scale(.97)}.styles__linkText___1fQ6X-camelCase{text-decoration:underline;color:#fff;position:relative;outline:none;font-weight:700}.styles__copiedNotification___3EEea-camelCase{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:5px;font-family:Nunito,sans-serif;color:#fff;font-size:18px;padding:5px 10px}.styles__endDateText___3CEw7-camelCase{margin:30px auto;padding:4px 15px;font-family:Nunito,sans-serif;font-weight:700}.styles__downIcon___3hBDw-camelCase,.styles__endDateText___3CEw7-camelCase{color:#3a3a3a;font-size:34px;text-align:center}.styles__downIcon___3hBDw-camelCase{position:absolute;bottom:10px;left:calc(50% - 25px);width:50px}.styles__refreshButton___3yzcn-camelCase{width:250px;background-color:#0bc2cf;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:30px auto 0;color:#fff;font-size:30px;padding:7px 0 13px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);font-family:Nunito,sans-serif;font-weight:700;text-align:center;outline:none;cursor:pointer;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__refreshButton___3yzcn-camelCase:hover{transform:scale(.95)}.styles__refreshIcon___cv0Lg-camelCase{font-size:30px;margin-right:15px}.styles__setText___27Ub2-camelCase{background-color:#fff;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:10px auto 0;color:#3a3a3a;line-height:48px;font-size:48px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:20px 30px 26px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__row___3dxNe-camelCase{display:flex;flex-flow:row wrap;justify-content:space-around;width:100%;margin:5px 0}.styles__miniTopContainer___qLjgO-camelCase{min-width:240px;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;justify-content:center;margin:25px auto}.styles__miniTopText___2h_RU-camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:13px 25px}.styles__chartContainer___3t1ot-camelCase{min-width:300px;min-height:300px;width:25vw;height:25vw;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:0;display:flex;flex-direction:column;position:relative}.styles__chartPercentage___3aaVc-camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__column___3z19_-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 20px}.styles__correctContainer___1bzJu-camelCase{min-width:300px;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;justify-content:center;margin:10px auto}.styles__correctText___26lfU-camelCase{color:#3a3a3a;font-size:40px;padding:15px 25px}.styles__correctText___26lfU-camelCase,.styles__downloadButton___2MRiS-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:center}.styles__downloadButton___2MRiS-camelCase{min-width:200px;background-color:#02723b;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:5px auto;color:#fff;font-size:20px;padding:5px 0 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__downloadButton___2MRiS-camelCase:hover{transform:scale(.96)}.styles__headerContainer___1PzC_-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;justify-content:center;width:100%;margin:30px auto 25px}.styles__headerText___3K-CP-camelCase{color:#3a3a3a;font-size:40px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 25px}.styles__sortedContainer___r3Ees-camelCase{margin:0 auto 10px;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.styles__sortedText___6f7X_-camelCase{font-size:36px;margin:5px 10px}.styles__sortedButton___orRmb-camelCase,.styles__sortedText___6f7X_-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a;font-weight:700}.styles__sortedButton___orRmb-camelCase{font-size:32px;margin:5px 20px;background-color:#fff;border-radius:7px;display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;padding:5px 15px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);transition:.2s}.styles__sortedButton___orRmb-camelCase:hover{transform:scale(.95)}.styles__qHolder___3s5e7-camelCase{width:100%;display:flex;flex-direction:column}.styles__questionContainer___NU2SD-camelCase{width:90%;min-height:130px;margin:20px 5% 15px;min-width:500px;background-color:#fff;border-radius:7px;padding:0 0 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;z-index:1}.styles__questionImageContainer___bUj55-camelCase{width:170px;height:130px;background-color:#3a3a3a;display:flex;flex-direction:row;border-top-left-radius:7px;border-bottom-left-radius:7px;overflow:hidden;margin:auto 0;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;position:relative}.styles__questionImage____WorE-camelCase{margin:auto;width:170px;height:130px;-o-object-fit:contain;object-fit:contain}.styles__imageNumber___3DP9o-camelCase{width:170px;height:130px;font-family:Titan One,sans-serif;font-size:50px;text-align:center;line-height:130px;color:#fff;text-shadow:2px 2px 8px grey;position:absolute;top:0;left:0}.styles__questionFunc___30rd0-camelCase{margin:10px;width:20%;display:flex;justify-content:center;align-items:center}.styles__qMathField___2MYLn-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:20px!important}.styles__questionCenterContainer____a8bh-camelCase{display:flex;flex-direction:column;margin:5px 10px 5px 15px;width:calc(100% - 325px);min-height:120px}.styles__questionWithFunc___36N2U-camelCase{width:calc(80% - 345px)}.styles__questionStatsContainer___27gp8-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;width:130px;height:130px;text-align:center;margin:auto 15px auto 0;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative}.styles__questionStats___3lhk8-camelCase{line-height:22px;font-size:22px;width:70%;word-wrap:break-word;font-weight:700;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__questionStats___3lhk8-camelCase,.styles__questionText___1XwBC-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__questionText___1XwBC-camelCase{font-size:20px;min-height:85px;line-height:28px;white-space:pre-line}.styles__answerText___afagS-camelCase{font-size:18px;min-height:35px;display:flex;flex-flow:row wrap;align-items:center}.styles__answerText___afagS-camelCase,.styles__questionStatText___2BmNs-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__questionStatText___2BmNs-camelCase{font-size:34px;font-weight:700;text-align:center}.styles__keyContainer___27ftu-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);justify-content:space-evenly;height:70px;width:60%;min-width:320px;margin:0 auto 12.5px}.styles__keyContainer___27ftu-camelCase,.styles__keyGroup___2gryJ-camelCase{display:flex;flex-direction:row;align-items:center}.styles__keyGroup___2gryJ-camelCase{font-family:Nunito,sans-serif;font-size:32px;color:#3a3a3a;font-weight:700}.styles__keyIcon___1lMgX-camelCase{font-size:34px;margin-right:10px}.styles__standingHolder___FJ_Dw-camelCase{width:100%;display:flex;flex-direction:row}.styles__deleteStanding___1g19g-camelCase,.styles__standingHolder___FJ_Dw-camelCase{align-items:center;justify-content:center}.styles__deleteStanding___1g19g-camelCase{height:70px;width:60px;background-color:#fff;color:#3a3a3a;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:auto 0 auto 10px;font-size:15px;display:none;flex-direction:column;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__deleteStanding___1g19g-camelCase:hover{transform:scale(.9);color:#ce1313}.styles__standingContainer___1WDXI-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;align-items:center;height:70px;width:90%;margin:10px 0;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__standingContainer___1WDXI-camelCase:hover{transform:scale(.97)}.styles__standingHolder___FJ_Dw-camelCase:hover>.styles__deleteStanding___1g19g-camelCase{display:flex}.styles__accuracyText___1iz-N-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 0 15px 10px;box-sizing:border-box;width:95px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__accuracySmallText___1FXmb-camelCase{font-size:14px;line-height:16px;font-weight:400}.styles__leftEarlyText___ICupP-camelCase{color:#3a3a3a;font-size:18px;font-family:Nunito,sans-serif;text-align:center;padding:15px 10px;box-sizing:border-box;width:95px}.styles__blookImage___1fMZz-camelCase{height:57.5px;width:50px;margin:1.25px 10px}.styles__blookImage___1fMZz-camelCase,.styles__standingIcon___3u6ds-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingIcon___3u6ds-camelCase{width:44px;margin:auto 7px;text-align:center;font-size:38px}.styles__nameText___2JYEm-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;text-align:left;padding:15px 5px 15px 10px;width:210px;height:40px;display:flex;align-items:center}.styles__barContainer___2SJx9-camelCase{width:300px;height:30px;border-radius:5px;overflow:hidden;margin:auto;background-color:#c43a35;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__barContainer___2SJx9-camelCase,.styles__correctBar___2HDeh-camelCase{display:flex;flex-direction:row;align-items:center}.styles__correctBar___2HDeh-camelCase{background-color:#4bc22e;height:100px}.styles__barText___39DO3-camelCase{display:flex;justify-content:center;align-content:center;background-color:rgba(0,0,0,.2);border-radius:3px;color:#fff;font-family:Nunito,sans-serif;font-size:16px;margin:auto 10px;box-sizing:border-box;padding:0 5px;min-width:30px}.styles__scoreRow___AqrVS-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;height:50px;flex-grow:1}.styles__pointsText___3g34k-camelCase{font-weight:700;font-family:Nunito,sans-serif;text-align:right;margin-right:7.5px}.styles__pointsText___3g34k-camelCase,.styles__scoreIcon___1VCLV-camelCase{font-size:26px;color:#3a3a3a;line-height:50px}.styles__scoreIcon___1VCLV-camelCase{margin-right:10px}.styles__statText___3SXke-camelCase{font-size:26px;font-weight:700;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;margin-right:25px;text-align:right;display:flex;align-items:center;justify-content:flex-end;flex-grow:1}.styles__statIcon___3TIib-camelCase{font-size:30px;margin-left:6px}.styles__standingQuestion___SdoTz-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;align-items:center;width:80%;margin:10px auto 7px;z-index:1}.styles__standingQuestionText___2-bJV-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;text-align:left;flex-grow:1;padding:15px 20px 15px 25px}.styles__standingAnswer___2JKue-camelCase{flex-direction:row;width:70%;margin:-20px auto 15px;z-index:-1}.styles__plusContainer___3Ddxr-camelCase,.styles__standingAnswer___2JKue-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;align-items:center}.styles__plusContainer___3Ddxr-camelCase{flex-direction:column;width:90%;margin:50px auto 20px}.styles__plusModalContainer___YnkzI-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;align-items:center;width:420px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__plusTimes___3lcef-camelCase{position:absolute;top:15px;right:17px;font-size:26px;outline:none;cursor:pointer;color:#3a3a3a;transition:.2s}.styles__plusTimes___3lcef-camelCase:hover{color:#0bc2cf}.styles__plusText___2Vpah-camelCase{color:#3a3a3a;font-size:38px;font-weight:700;padding:25px 30px 0}.styles__plusText___2Vpah-camelCase,.styles__upgradeButton___293mw-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__upgradeButton___293mw-camelCase{width:200px;height:60px;line-height:60px;background-color:#ff7b24;border-radius:7px;margin:30px auto;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);cursor:pointer;text-decoration:none;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__upgradeButton___293mw-camelCase:hover{transform:scale(1.05)}.styles__standingModalContainer___3t3Jb-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;min-height:400px;background-color:#fff;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__standingModalContainer___3t3Jb-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__standingModalContainer___3t3Jb-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__standingModalContainer___3t3Jb-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__modalRow___1tBhK-camelCase{display:flex;flex-direction:row;width:85%;margin:10px 10% 10px 5%;height:80px}.styles__modalBlook___4BEIA-camelCase{height:80px;width:70px}.styles__modalIcon___1qwjY-camelCase{height:100%;width:70px;font-size:50px;displaY:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__modalColumn___3gC7k-camelCase{margin:0 5px 0 15px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;text-align:left;flex-grow:1;color:#3a3a3a;font-size:"Nunito",sans-serif;font-size:26px;font-weight:700;word-wrap:break-word}.styles__modalDesc___3Nu0L-camelCase{font-weight:400;font-size:16px}.styles__modalStats___1qA6C-camelCase{position:relative;height:80px;width:80px}.styles__modalQuestionStats___3vw0R-camelCase{position:relative;height:70px;width:70px;margin-left:10px}.styles__modalStatsText___2jaAX-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Nunito,sans-serif;color:#3a3a3a;font-size:16px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__modalQuestionColumn___12RW5-camelCase{display:flex;flex-direction:column;width:90%;margin:0 5%}.styles__modalQuestionRow___2gpIj-camelCase{display:flex;flex-direction:row;width:100%;font-family:Nunito,sans-serif;font-size:16px;font-weight:700}.styles__modalQuestionText___3yT5p-camelCase{font-weight:400;flex-grow:1;margin-left:5px;text-align:left}.styles__modalQuestionImage___3r7Vq-camelCase{height:70px;width:80px;-o-object-fit:contain;object-fit:contain}.styles__modalFuncContainer___H9IZG-camelCase{height:70px;width:120px;display:flex;justify-content:center;align-items:center}.styles__qModalMathField___1-i_K-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:12px!important}.styles__mainDivider___2LL0R-camelCase{width:90%;margin:5px 5% 10px;background-color:rgba(0,0,0,.8)}.styles__divider___2cDFN-camelCase,.styles__mainDivider___2LL0R-camelCase{height:1px;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__divider___2cDFN-camelCase{width:100%;margin:7px 0;background-color:rgba(0,0,0,.2)}.styles__modalButton___1oGvL-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:normal;outline:none}', ""]), t.locals = {
                fullContainer: "styles__fullContainer___2W6at-camelCase",
                hwContainer: "styles__hwContainer___N5c0Y-camelCase",
                hwText: "styles__hwText___5ljoo-camelCase",
                joinText: "styles__joinText___2X0lO-camelCase",
                linkContainer: "styles__linkContainer___3N1tm-camelCase",
                linkText: "styles__linkText___1fQ6X-camelCase",
                copiedNotification: "styles__copiedNotification___3EEea-camelCase",
                endDateText: "styles__endDateText___3CEw7-camelCase",
                downIcon: "styles__downIcon___3hBDw-camelCase",
                refreshButton: "styles__refreshButton___3yzcn-camelCase",
                refreshIcon: "styles__refreshIcon___cv0Lg-camelCase",
                setText: "styles__setText___27Ub2-camelCase",
                row: "styles__row___3dxNe-camelCase",
                miniTopContainer: "styles__miniTopContainer___qLjgO-camelCase",
                miniTopText: "styles__miniTopText___2h_RU-camelCase",
                chartContainer: "styles__chartContainer___3t1ot-camelCase",
                chartPercentage: "styles__chartPercentage___3aaVc-camelCase",
                column: "styles__column___3z19_-camelCase",
                correctContainer: "styles__correctContainer___1bzJu-camelCase",
                correctText: "styles__correctText___26lfU-camelCase",
                downloadButton: "styles__downloadButton___2MRiS-camelCase",
                headerContainer: "styles__headerContainer___1PzC_-camelCase",
                headerText: "styles__headerText___3K-CP-camelCase",
                sortedContainer: "styles__sortedContainer___r3Ees-camelCase",
                sortedText: "styles__sortedText___6f7X_-camelCase",
                sortedButton: "styles__sortedButton___orRmb-camelCase",
                qHolder: "styles__qHolder___3s5e7-camelCase",
                questionContainer: "styles__questionContainer___NU2SD-camelCase",
                questionImageContainer: "styles__questionImageContainer___bUj55-camelCase",
                questionImage: "styles__questionImage____WorE-camelCase",
                imageNumber: "styles__imageNumber___3DP9o-camelCase",
                questionFunc: "styles__questionFunc___30rd0-camelCase",
                qMathField: "styles__qMathField___2MYLn-camelCase",
                questionCenterContainer: "styles__questionCenterContainer____a8bh-camelCase",
                questionWithFunc: "styles__questionWithFunc___36N2U-camelCase",
                questionStatsContainer: "styles__questionStatsContainer___27gp8-camelCase",
                questionStats: "styles__questionStats___3lhk8-camelCase",
                questionText: "styles__questionText___1XwBC-camelCase",
                answerText: "styles__answerText___afagS-camelCase",
                questionStatText: "styles__questionStatText___2BmNs-camelCase",
                keyContainer: "styles__keyContainer___27ftu-camelCase",
                keyGroup: "styles__keyGroup___2gryJ-camelCase",
                keyIcon: "styles__keyIcon___1lMgX-camelCase",
                standingHolder: "styles__standingHolder___FJ_Dw-camelCase",
                deleteStanding: "styles__deleteStanding___1g19g-camelCase",
                standingContainer: "styles__standingContainer___1WDXI-camelCase",
                accuracyText: "styles__accuracyText___1iz-N-camelCase",
                accuracySmallText: "styles__accuracySmallText___1FXmb-camelCase",
                leftEarlyText: "styles__leftEarlyText___ICupP-camelCase",
                blookImage: "styles__blookImage___1fMZz-camelCase",
                standingIcon: "styles__standingIcon___3u6ds-camelCase",
                nameText: "styles__nameText___2JYEm-camelCase",
                barContainer: "styles__barContainer___2SJx9-camelCase",
                correctBar: "styles__correctBar___2HDeh-camelCase",
                barText: "styles__barText___39DO3-camelCase",
                scoreRow: "styles__scoreRow___AqrVS-camelCase",
                pointsText: "styles__pointsText___3g34k-camelCase",
                scoreIcon: "styles__scoreIcon___1VCLV-camelCase",
                statText: "styles__statText___3SXke-camelCase",
                statIcon: "styles__statIcon___3TIib-camelCase",
                standingQuestion: "styles__standingQuestion___SdoTz-camelCase",
                standingQuestionText: "styles__standingQuestionText___2-bJV-camelCase",
                standingAnswer: "styles__standingAnswer___2JKue-camelCase",
                plusContainer: "styles__plusContainer___3Ddxr-camelCase",
                plusModalContainer: "styles__plusModalContainer___YnkzI-camelCase",
                plusTimes: "styles__plusTimes___3lcef-camelCase",
                plusText: "styles__plusText___2Vpah-camelCase",
                upgradeButton: "styles__upgradeButton___293mw-camelCase",
                standingModalContainer: "styles__standingModalContainer___3t3Jb-camelCase",
                modalRow: "styles__modalRow___1tBhK-camelCase",
                modalBlook: "styles__modalBlook___4BEIA-camelCase",
                modalIcon: "styles__modalIcon___1qwjY-camelCase",
                modalColumn: "styles__modalColumn___3gC7k-camelCase",
                modalDesc: "styles__modalDesc___3Nu0L-camelCase",
                modalStats: "styles__modalStats___1qA6C-camelCase",
                modalQuestionStats: "styles__modalQuestionStats___3vw0R-camelCase",
                modalStatsText: "styles__modalStatsText___2jaAX-camelCase",
                modalQuestionColumn: "styles__modalQuestionColumn___12RW5-camelCase",
                modalQuestionRow: "styles__modalQuestionRow___2gpIj-camelCase",
                modalQuestionText: "styles__modalQuestionText___3yT5p-camelCase",
                modalQuestionImage: "styles__modalQuestionImage___3r7Vq-camelCase",
                modalFuncContainer: "styles__modalFuncContainer___H9IZG-camelCase",
                qModalMathField: "styles__qModalMathField___1-i_K-camelCase",
                mainDivider: "styles__mainDivider___2LL0R-camelCase",
                divider: "styles__divider___2cDFN-camelCase",
                modalButton: "styles__modalButton___1oGvL-camelCase"
            }
        },
        tL71: function(e, t, a) {
            var n = a("7EjP");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        vFMZ: function(e, t, a) {
            var n = a("puNZ");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        vUFf: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___1szkq-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__topFolderButton___1_bXd-camelCase{height:55px;width:55px;margin:0 10px;background-color:#0bc2cf;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__topFolderButton___1_bXd-camelCase:hover{filter:brightness(110%)}.styles__topFolderIcon___2Of1g-camelCase{text-shadow:0 1.5px rgba(0,0,0,.2);font-size:26px;color:#fff}.styles__searchBar___3WXOq-camelCase{height:55px;margin:0 10px;background-color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding:0 10px 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;justify-content:center;align-items:center}.styles__searchBar___3WXOq-camelCase,.styles__searchIcon___2h8ZI-camelCase{font-size:20px;color:#3a3a3a}.styles__searchIcon___2h8ZI-camelCase{width:26px;text-align:center;opacity:.8;margin-right:7px}.styles__searchInput___D1V4I-camelCase{height:30px;width:calc(100% - 33px);font-size:18px;color:#3a3a3a;font-family:Nunito,sans-serif;border:none;outline:none}.styles__searchInput___D1V4I-camelCase:focus>.styles__searchIcon___2h8ZI-camelCase{color:#0bc2cf}.styles__container___2mmzL-camelCase{display:grid;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:0 5%}.styles__mergeContainer___38-3a-camelCase{width:265px;min-height:392px;height:100%;display:flex;flex-direction:column;justify-content:space-between;font-family:Nunito,sans-serif;color:#3a3a3a;overflow:hidden;position:absolute;background-color:#fff}.styles__mergeName___3N4iO-camelCase{font-size:34px;line-height:36px;font-weight:700;margin:10px 5% 0;word-wrap:break-word}.styles__mergeButton___1irsf-camelCase{width:100%;height:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:23px;font-weight:700;opacity:.85;transition:.15s}.styles__mergeButton___1irsf-camelCase:focus,.styles__mergeButton___1irsf-camelCase:hover{opacity:1}.styles__setContainer___1DR-H-camelCase{width:265px;min-height:392px;background-color:#fff;border-radius:7px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__setImageFiller___MWExp-camelCase{background-color:#333}.styles__coverImage___1F2Pq-camelCase,.styles__setImageFiller___MWExp-camelCase{width:100%;height:180px;border-top-left-radius:7px;border-top-right-radius:7px}.styles__coverImage___1F2Pq-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:auto;-o-object-fit:cover;object-fit:cover}.styles__setFillerContainer___1bqBQ-camelCase{width:100%;height:180px;background-color:#0bc2cf;border-top-left-radius:7px;border-top-right-radius:7px;display:flex;justify-content:center;align-items:center}.styles__setFillerText___3BJZ_-camelCase{font-family:Titan One,sans-serif;font-size:45px;text-align:center;margin:auto;color:#fff;text-shadow:2px 2px 8px grey}.styles__removeFromFolder___H6z9b-camelCase,.styles__setFillerText___3BJZ_-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__removeFromFolder___H6z9b-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);height:35px;width:35px;border-radius:4px;position:absolute;top:5px;left:5px;color:#3a3a3a;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:26px;transition:.15s}.styles__removeFromFolder___H6z9b-camelCase:hover{transform:scale(.95)}.styles__viewButton___1dEWV-camelCase{width:25px;position:absolute;top:147px;left:10px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;font-size:16px;display:flex;justify-content:center;align-items:center;text-decoration:none}.styles__setQuestionsContainer___2XnxC-camelCase,.styles__viewButton___1dEWV-camelCase{background-color:rgba(0,0,0,.6);height:25px;border-radius:4px}.styles__setQuestionsContainer___2XnxC-camelCase{width:145px;margin:-33px 10px 8px auto}.styles__setQuestionsText___313ed-camelCase{font-size:18px;line-height:25px;margin:auto;text-align:center;color:#fff}.styles__setHeader___AFj5l-camelCase,.styles__setQuestionsText___313ed-camelCase{font-family:Nunito,sans-serif}.styles__setHeader___AFj5l-camelCase{font-size:24px;font-weight:700;margin:10px 5% 5px;color:#3a3a3a;line-height:27px;word-wrap:break-word}.styles__setSpacer___2XAfp-camelCase{width:100%;height:15px;flex-grow:2}.styles__setPlays___2Ts34-camelCase{font-size:18px;font-weight:700;margin:5px 5% 0}.styles__setLastEdit___1gqPL-camelCase,.styles__setPlays___2Ts34-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__setLastEdit___1gqPL-camelCase{font-size:16px;margin:2px 5% 5px}.styles__setHorizontalDivider___owAej-camelCase{width:100%;height:3px;background-color:#e0e0e0}.styles__setVerticalDivider___1ppyI-camelCase{width:3px;height:40px;background-color:#e0e0e0}.styles__setBottomContainer___2EYzR-camelCase{width:100%;display:flex;flex-direction:row}.styles__pencilIcon___NCo69-camelCase{font-size:23px;color:#3a3a3a;line-height:40px;height:40px;width:calc(33.33333% - 2px);text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none}.styles__pencilIcon___NCo69-camelCase:focus,.styles__pencilIcon___NCo69-camelCase:hover{color:#0bc2cf}.styles__trashIcon___3DsO1-camelCase{font-size:23px;color:#3a3a3a;line-height:40px;height:40px;width:calc(33.33333% - 2px);text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none}.styles__trashIcon___3DsO1-camelCase:focus,.styles__trashIcon___3DsO1-camelCase:hover{color:#ce1313}.styles__setDropdown___2cxZA-camelCase{height:40px;width:calc(33.33333% - 2px);color:#3a3a3a;font-family:Nunito,sans-serif;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;outline:none}.styles__setDropdown___2cxZA-camelCase,.styles__setDropdownIcon___1k9gj-camelCase{font-size:23px}.styles__setDropdownMenu___TrsSJ-camelCase{position:absolute;min-width:100px;right:0;bottom:calc(100% - 3px);transition:.2s;transform:rotateX(-90deg);transform-origin:bottom center;visibility:hidden;opacity:.3;padding:5px 0 8px;background-color:#fff;border-radius:5px;box-shadow:inset 0 -3px rgba(0,0,0,.2),0 2px 4px rgba(0,0,0,.25);display:flex;flex-direction:column;outline:none}.styles__setDropdown___2cxZA-camelCase:focus>.styles__setDropdownMenu___TrsSJ-camelCase,.styles__setDropdown___2cxZA-camelCase:hover>.styles__setDropdownMenu___TrsSJ-camelCase,.styles__setDropdown___2cxZA-camelCase[focus-within]>.styles__setDropdownMenu___TrsSJ-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__setDropdown___2cxZA-camelCase:focus-within>.styles__setDropdownMenu___TrsSJ-camelCase,.styles__setDropdown___2cxZA-camelCase:focus>.styles__setDropdownMenu___TrsSJ-camelCase,.styles__setDropdown___2cxZA-camelCase:hover>.styles__setDropdownMenu___TrsSJ-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__setDropdownOption___-23OC-camelCase{width:100%;background-color:#fff;font-size:16px;color:#3a3a3a;height:26px;display:flex;flex-direction:row;align-items:center;padding:0 7px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;position:relative;transition:.2s}.styles__setDropdownOption___-23OC-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__setDropdownOptionIcon___3UJjD-camelCase{font-size:14px;margin-right:7px;opacity:.8}.styles__justCopied___gJdDS-camelCase{background-color:rgba(0,0,0,.6);color:#fff;position:absolute;top:0;left:0;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__justCopied___gJdDS-camelCase,.styles__setPlayContainer___3abZH-camelCase{display:flex;justify-content:center;align-items:center;width:100%}.styles__playButton___3XOXs-camelCase,.styles__setPlayContainer___3abZH-camelCase{flex-direction:row}.styles__playButton___3XOXs-camelCase{width:calc(50% - 1.5px);display:flex;justify-content:center;align-items:center;cursor:pointer;outline:none;color:#3a3a3a}.styles__playButton___3XOXs-camelCase:focus,.styles__playButton___3XOXs-camelCase:hover{color:#0bc2cf}.styles__playIcon___q_bJ9-camelCase{font-size:20px;width:24px;text-align:center;transition:all .15s linear}.styles__hostButton___1-B1H-camelCase{margin:auto}.styles__hostButtonInside___ycYhV-camelCase{width:100px;height:26px;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#fff;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__setPlayText___2HZ5r-camelCase{font-family:Nunito,sans-serif;line-height:51px;font-size:23px;font-weight:700;padding-left:9px;transition:all .15s linear}.styles__addSetButton___2tqqL-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;color:#fff;font-size:110px;display:flex;justify-content:center;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#000;opacity:.25;transition:.15s}.styles__addSetButton___2tqqL-camelCase:hover{opacity:.35}.styles__mergeSetButton___3ca77-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#000;opacity:0;transition:.2s}.styles__mergeSetButton___3ca77-camelCase:hover{opacity:.15}.styles__nothingContainer___NL3r2-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;background-color:rgba(0,0,0,.1);border:2px solid #3a3a3a;border-radius:7px;margin:50px auto;max-width:80%}.styles__nothingHeader___2frwG-camelCase{font-size:30px;font-weight:700;color:#3a3a3a}.styles__nothingButtonsRow___2DYS3-camelCase{display:flex;flex-flow:row wrap;justify-content:center;margin:10px 0}.styles__nothingButton___3zFWJ-camelCase{margin:10px 20px}.styles__nothingButtonInside___1x01W-camelCase{height:35px;font-size:26px;padding:0 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__nothingIcon___1ByB4-camelCase{font-size:24px;margin-right:10px}.styles__nothingLink___I1-OF-camelCase{color:#3a3a3a;font-size:24px;text-decoration:underline}.styles__nothingLink___I1-OF-camelCase:hover{color:#0bc2cf}.styles__folderHolder___1PJee-camelCase{display:flex;flex-flow:row wrap;width:calc(90% + 14px);margin:0 auto 15px;position:relative;z-index:4}.styles__folderButton___dvJyh-camelCase{margin:7px}.styles__folderButtonInside___3HKtf-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;min-width:150px;padding:0 10px;height:30px;font-size:20px;color:#fff;position:relative;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__folderButtonIcon___TtgZl-camelCase{margin-right:10px;font-size:22px}.styles__folderButtonDropdown___23SMv-camelCase{margin-left:auto;width:25px;height:25px;background-color:rgba(0,0,0,.3);border-radius:5px;display:flex;justify-content:center;align-items:center;position:relative;opacity:0;outline:none;transition:.2s}.styles__folderButtonDropdownIcon___2-tvs-camelCase{font-size:12px;color:#fff}.styles__folderButtonInside___3HKtf-camelCase:hover .styles__folderButtonDropdown___23SMv-camelCase{opacity:1}.styles__folderButtonDropdownMenu___1Y62d-camelCase{position:absolute;min-width:100px;right:0;top:calc(100% - 3px);transition:.2s;transform:rotateX(-90deg);transform-origin:top center;visibility:hidden;opacity:.3;padding:5px 0 8px;background-color:#fff;border-radius:5px;box-shadow:inset 0 -3px rgba(0,0,0,.2),0 2px 4px rgba(0,0,0,.25);display:flex;flex-direction:column;outline:none}.styles__folderButtonDropdown___23SMv-camelCase:focus>.styles__folderButtonDropdownMenu___1Y62d-camelCase,.styles__folderButtonDropdown___23SMv-camelCase:hover>.styles__folderButtonDropdownMenu___1Y62d-camelCase,.styles__folderButtonDropdown___23SMv-camelCase[focus-within]>.styles__folderButtonDropdownMenu___1Y62d-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__folderButtonDropdown___23SMv-camelCase:focus-within>.styles__folderButtonDropdownMenu___1Y62d-camelCase,.styles__folderButtonDropdown___23SMv-camelCase:focus>.styles__folderButtonDropdownMenu___1Y62d-camelCase,.styles__folderButtonDropdown___23SMv-camelCase:hover>.styles__folderButtonDropdownMenu___1Y62d-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__folderButtonDropdownOption___3AN4H-camelCase{width:100%;background-color:#fff;font-size:14px;color:#3a3a3a;height:22px;display:flex;flex-direction:row;align-items:center;padding:0 7px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__folderButtonDropdownOption___3AN4H-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__folderButtonDropdownOptionIcon___3fF9o-camelCase{font-size:12px;margin-right:7px;opacity:.8}.styles__moveText___3EfU2-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}.styles__locationsHolder___35r_v-camelCase{height:250px;width:100%;padding:10px;border:2px solid #666;box-sizing:border-box;margin:0 auto;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;align-items:center;overflow-y:auto}.styles__locationsHolder___35r_v-camelCase::-webkit-scrollbar{width:10px}.styles__locationsHolder___35r_v-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__locationsHolder___35r_v-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__noFoldersText___3tjAA-camelCase{font-size:20px}.styles__locationFolderButton___178GS-camelCase{margin:7px auto;width:90%}.styles__locationFolderButtonInside___3xIxn-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:100%;padding:0 10px;height:40px;font-size:24px;color:#fff;position:relative;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__locationFolderButtonIcon___1AjdK-camelCase{margin-right:10px;font-size:22px}.styles__moveLocation___1xlMi-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}@media only screen and (max-width:850px){.styles__container___2mmzL-camelCase{justify-content:center}}", ""]), t.locals = {
                header: "styles__header___1szkq-camelCase",
                topFolderButton: "styles__topFolderButton___1_bXd-camelCase",
                topFolderIcon: "styles__topFolderIcon___2Of1g-camelCase",
                searchBar: "styles__searchBar___3WXOq-camelCase",
                searchIcon: "styles__searchIcon___2h8ZI-camelCase",
                searchInput: "styles__searchInput___D1V4I-camelCase",
                container: "styles__container___2mmzL-camelCase",
                mergeContainer: "styles__mergeContainer___38-3a-camelCase",
                mergeName: "styles__mergeName___3N4iO-camelCase",
                mergeButton: "styles__mergeButton___1irsf-camelCase",
                setContainer: "styles__setContainer___1DR-H-camelCase",
                setImageFiller: "styles__setImageFiller___MWExp-camelCase",
                coverImage: "styles__coverImage___1F2Pq-camelCase",
                setFillerContainer: "styles__setFillerContainer___1bqBQ-camelCase",
                setFillerText: "styles__setFillerText___3BJZ_-camelCase",
                removeFromFolder: "styles__removeFromFolder___H6z9b-camelCase",
                viewButton: "styles__viewButton___1dEWV-camelCase",
                setQuestionsContainer: "styles__setQuestionsContainer___2XnxC-camelCase",
                setQuestionsText: "styles__setQuestionsText___313ed-camelCase",
                setHeader: "styles__setHeader___AFj5l-camelCase",
                setSpacer: "styles__setSpacer___2XAfp-camelCase",
                setPlays: "styles__setPlays___2Ts34-camelCase",
                setLastEdit: "styles__setLastEdit___1gqPL-camelCase",
                setHorizontalDivider: "styles__setHorizontalDivider___owAej-camelCase",
                setVerticalDivider: "styles__setVerticalDivider___1ppyI-camelCase",
                setBottomContainer: "styles__setBottomContainer___2EYzR-camelCase",
                pencilIcon: "styles__pencilIcon___NCo69-camelCase",
                trashIcon: "styles__trashIcon___3DsO1-camelCase",
                setDropdown: "styles__setDropdown___2cxZA-camelCase",
                setDropdownIcon: "styles__setDropdownIcon___1k9gj-camelCase",
                setDropdownMenu: "styles__setDropdownMenu___TrsSJ-camelCase",
                setDropdownOption: "styles__setDropdownOption___-23OC-camelCase",
                setDropdownOptionIcon: "styles__setDropdownOptionIcon___3UJjD-camelCase",
                justCopied: "styles__justCopied___gJdDS-camelCase",
                setPlayContainer: "styles__setPlayContainer___3abZH-camelCase",
                playButton: "styles__playButton___3XOXs-camelCase",
                playIcon: "styles__playIcon___q_bJ9-camelCase",
                hostButton: "styles__hostButton___1-B1H-camelCase",
                hostButtonInside: "styles__hostButtonInside___ycYhV-camelCase",
                setPlayText: "styles__setPlayText___2HZ5r-camelCase",
                addSetButton: "styles__addSetButton___2tqqL-camelCase",
                mergeSetButton: "styles__mergeSetButton___3ca77-camelCase",
                nothingContainer: "styles__nothingContainer___NL3r2-camelCase",
                nothingHeader: "styles__nothingHeader___2frwG-camelCase",
                nothingButtonsRow: "styles__nothingButtonsRow___2DYS3-camelCase",
                nothingButton: "styles__nothingButton___3zFWJ-camelCase",
                nothingButtonInside: "styles__nothingButtonInside___1x01W-camelCase",
                nothingIcon: "styles__nothingIcon___1ByB4-camelCase",
                nothingLink: "styles__nothingLink___I1-OF-camelCase",
                folderHolder: "styles__folderHolder___1PJee-camelCase",
                folderButton: "styles__folderButton___dvJyh-camelCase",
                folderButtonInside: "styles__folderButtonInside___3HKtf-camelCase",
                folderButtonIcon: "styles__folderButtonIcon___TtgZl-camelCase",
                folderButtonDropdown: "styles__folderButtonDropdown___23SMv-camelCase",
                folderButtonDropdownIcon: "styles__folderButtonDropdownIcon___2-tvs-camelCase",
                folderButtonDropdownMenu: "styles__folderButtonDropdownMenu___1Y62d-camelCase",
                folderButtonDropdownOption: "styles__folderButtonDropdownOption___3AN4H-camelCase",
                folderButtonDropdownOptionIcon: "styles__folderButtonDropdownOptionIcon___3fF9o-camelCase",
                moveText: "styles__moveText___3EfU2-camelCase",
                locationsHolder: "styles__locationsHolder___35r_v-camelCase",
                noFoldersText: "styles__noFoldersText___3tjAA-camelCase",
                locationFolderButton: "styles__locationFolderButton___178GS-camelCase",
                locationFolderButtonInside: "styles__locationFolderButtonInside___3xIxn-camelCase",
                locationFolderButtonIcon: "styles__locationFolderButtonIcon___1AjdK-camelCase",
                moveLocation: "styles__moveLocation___1xlMi-camelCase"
            }
        }
    }
]);