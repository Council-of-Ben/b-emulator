(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        "/gDf": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("55Ip"),
                u = a("Ty5D"),
                d = a("TSYQ"),
                p = a.n(d),
                m = a("wd/R"),
                _ = a.n(m),
                f = a("cpGi"),
                h = a("JeI0"),
                y = a.n(h),
                g = a("H1WH"),
                b = a("FKJl"),
                v = a("E8Bj"),
                w = a("XTAU"),
                x = a("ca/f"),
                k = a("3k2l"),
                C = a("DPg2"),
                O = a.n(C),
                E = a("Xst1"),
                j = a.n(E),
                B = a("74sb"),
                I = a("qnYv"),
                S = a("i4/Q"),
                N = a("lmLo");

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); i = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return r
                }(e, t) || G(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                F = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    r = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var o = t && t.prototype instanceof d ? t : d,
                        r = Object.create(o.prototype),
                        i = new k(n || []);
                    return r._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(o, r) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw r;
                                return O()
                            }
                            for (a.method = o, a.arg = r;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = v(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, i), r
                }

                function c(e, t, a) {
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
                e.wrap = l;
                var u = {};

                function d() {}

                function p() {}

                function m() {}
                var _ = {};
                s(_, o, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    h = f && f(f(C([])));
                h && h !== t && a.call(h, o) && (_ = h);
                var y = m.prototype = d.prototype = Object.create(_);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, r) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, r, i, s) {
                                    var l = c(e[o], e, r);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            d = u.value;
                                        return d && "object" == P(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(d).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(o, r, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = m, s(y, "constructor", m), s(m, "constructor", p), p.displayName = s(m, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var i = new b(l(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, o, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                i = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var s = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (s) {
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
                        var i = r ? r.completion : {};
                        return i.type = e, i.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function D(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(a), !0).forEach((function(t) {
                        L(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : D(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function L(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function z(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? R(e, t) : void 0
                }
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function A(e, t, a, n, o, r, i) {
                try {
                    var s = e[r](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function H(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var r = e.apply(t, a);

                        function i(e) {
                            A(r, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            A(r, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function V(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function q(e, t) {
                return (q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function U(e) {
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
                    return Y(this, a)
                }
            }

            function Y(e, t) {
                if (t && ("object" === P(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return W(e)
            }

            function W(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function J(e) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var X = function(e, t) {
                    return e.playCount !== t.playCount ? t.playCount - e.playCount : e.title < t.title ? -1 : e.title > t.title ? 1 : 0
                },
                Z = function(e) {
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
                        }), t && q(e, t)
                    }(m, e);
                    var t, a, n, r, i, s, l, u, d = U(m);

                    function m(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, m), (t = d.call(this, e)).state = {
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
                        }, t.loading = !1, t.gotPlus = !1, t.plus = !1, t.here = !0, t.onEdit = t.onEdit.bind(W(t)), t.onDelete = t.onDelete.bind(W(t)), t.onDeleteConfirm = t.onDeleteConfirm.bind(W(t)), t.onCopy = t.onCopy.bind(W(t)), t.onCopyConfirm = t.onCopyConfirm.bind(W(t)), t.onMerge = t.onMerge.bind(W(t)), t.onMergeConfirm = t.onMergeConfirm.bind(W(t)), t.onHost = t.onHost.bind(W(t)), t.onSolo = t.onSolo.bind(W(t)), t.getIsPlus = t.getIsPlus.bind(W(t)), t.setDisplay = t.setDisplay.bind(W(t)), t.setRole = t.setRole.bind(W(t)), t.openFolder = t.openFolder.bind(W(t)), t.newFolder = t.newFolder.bind(W(t)), t.createFolder = t.createFolder.bind(W(t)), t.editFolder = t.editFolder.bind(W(t)), t.addToFolder = t.addToFolder.bind(W(t)), t.removeFromFolder = t.removeFromFolder.bind(W(t)), t.deleteFolder = t.deleteFolder.bind(W(t)), t.shouldShowFolder = t.shouldShowFolder.bind(W(t)), t.copyToClipboard = t.copyToClipboard.bind(W(t)), t.endTour = t.endTour.bind(W(t)), t
                    }
                    return t = m, (a = [{
                        key: "componentDidMount",
                        value: (u = H(F().mark((function e() {
                            var t, a = this;
                            return F().wrap((function(e) {
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
                                        }), I.a.get("/api/users/allsets").then((function(e) {
                                            if (a.here) {
                                                var n = z(e.data.games);
                                                n.sort(X);
                                                var o = z(n),
                                                    r = M({}, e.data.folders),
                                                    i = n.map((function(e) {
                                                        return e._id
                                                    }));
                                                Object.values(r).forEach((function(e) {
                                                    e.sets.forEach((function(e) {
                                                        var t = i.indexOf(e); - 1 !== t && (n.splice(t, 1), i.splice(t, 1))
                                                    }))
                                                }));
                                                var s = !1;
                                                e.data.news && "welcome" !== e.data.modalMessage && (s = !0, I.a.put("/api/users/setnews", {
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
                                                    showNews: s,
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
                            }), I.a.delete("/api/games", {
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
                        value: (l = H(F().mark((function e(t) {
                            var a = this;
                            return F().wrap((function(e) {
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
                            }), I.a.post("/api/games/copy", {
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
                        value: (s = H(F().mark((function e(t) {
                            var a = this;
                            return F().wrap((function(e) {
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
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "onMergeConfirm",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loading: !0
                            }), I.a.post("/api/games/merge", {
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
                            I.a.put("/api/users/plan").then((function(a) {
                                t.here && (t.gotPlus = !0, "Starter" === a.data.plan ? t.plus = !1 : t.plus = !0, e())
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
                            var t = M({}, e),
                                a = this.state.allGames.map((function(e) {
                                    return e._id
                                })),
                                n = z(this.state.allGames);
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
                            }), I.a.put("/api/users/setrole", {
                                name: this.state.user.name,
                                role: e
                            }).then((function() {
                                t.props.user.getLoggedIn(), t.here && t.setState({
                                    user: M(M({}, t.state.user), {}, {
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
                            o.sort(X), setTimeout((function() {
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
                        value: (i = H(F().mark((function e() {
                            var t = this;
                            return F().wrap((function(e) {
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
                            return i.apply(this, arguments)
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
                                }), I.a.put("/api/users/folders/new", {
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
                                }), I.a.put("/api/users/folders/edit", {
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
                        value: (r = H(F().mark((function e() {
                            var t = this;
                            return F().wrap((function(e) {
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
                                        return e.next = 6, I.a.put("/api/users/folders/removeset", {
                                            folderName: this.state.folderName,
                                            setId: this.state.movingGame._id
                                        }).then().catch((function(e) {
                                            Object(b.b)(e)
                                        }));
                                    case 6:
                                        I.a.put("/api/users/folders/addsets", {
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
                            this.loading || (this.loading = !0, I.a.put("/api/users/folders/removeset", {
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
                            }), I.a.put("/api/users/folders/delete", {
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
                            Object(B.c)("".concat("https://dashboard.blooket.com", "/set/").concat(e)), clearTimeout(this.copyTimeout), this.setState({
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
                            }), e && I.a.put("/api/users/setmessage", {
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
                            }, o.a.createElement(w.a, {
                                title: "Dashboard | Blooket",
                                desc: "The Dashboard allows you to access your question sets, favorites, game history, and news about Blooket events!"
                            }), o.a.createElement(S.a, {
                                user: this.state.user,
                                page: "My Sets",
                                newNews: this.state.showNews,
                                afterNews: function() {
                                    return e.setState({
                                        showNews: !1
                                    })
                                },
                                topContent: this.state.ready && (this.state.games.length > 0 || Object.keys(this.state.folders).length > 0) ? o.a.createElement(o.a.Fragment, null, this.state.inFolder ? null : o.a.createElement("div", {
                                    className: O.a.topFolderButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: this.newFolder
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-folder-plus", O.a.topFolderIcon)
                                })), o.a.createElement("div", {
                                    className: O.a.searchBar
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-search", O.a.searchIcon)
                                }), o.a.createElement("input", {
                                    className: O.a.searchInput,
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
                                className: O.a.header
                            }, "My Sets"), 0 === this.state.allGames.length && this.state.ready ? o.a.createElement("div", {
                                style: {
                                    display: "flex"
                                }
                            }, o.a.createElement("div", {
                                className: O.a.nothingContainer
                            }, o.a.createElement("div", {
                                className: O.a.nothingHeader
                            }, "You'll Need a Question Set to Host!"), o.a.createElement("div", {
                                className: O.a.nothingButtonsRow
                            }, o.a.createElement(N.a, {
                                color: "#9a49aa",
                                onClick: function() {
                                    return e.props.history.push("/create")
                                },
                                outsideClass: O.a.nothingButton
                            }, o.a.createElement("div", {
                                className: O.a.nothingButtonInside
                            }, o.a.createElement("i", {
                                className: p()("fas fa-edit", O.a.nothingIcon)
                            }), "Create a Set")), o.a.createElement(N.a, {
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.props.history.push("/discover")
                                },
                                outsideClass: O.a.nothingButton
                            }, o.a.createElement("div", {
                                className: O.a.nothingButtonInside
                            }, o.a.createElement("i", {
                                className: p()("fas fa-compass", O.a.nothingIcon)
                            }), "Discover Sets"))), o.a.createElement("a", {
                                href: "https://www.youtube.com/watch?v=hhn7dAP6BF8",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: O.a.nothingLink
                            }, "Getting Started Tutorial"))) : null, this.state.allGames.length > 0 ? o.a.createElement("div", {
                                className: O.a.folderHolder
                            }, this.state.inFolder ? o.a.createElement(N.a, {
                                outsideClass: O.a.folderButton,
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.setDisplay(e.state.folders)
                                }
                            }, o.a.createElement("div", {
                                className: O.a.folderButtonInside,
                                style: {
                                    minWidth: 0
                                }
                            }, o.a.createElement("i", {
                                className: p()("fas fa-reply", O.a.folderButtonIcon)
                            }), "Back")) : Object.entries(this.state.folders).map((function(t, a) {
                                var n = T(t, 2),
                                    r = n[0],
                                    i = n[1];
                                return e.shouldShowFolder(r, i) ? o.a.createElement(N.a, {
                                    outsideClass: O.a.folderButton,
                                    color: i.color,
                                    style: {
                                        zIndex: Object.keys(e.state.folders).length - a
                                    },
                                    key: r,
                                    onClick: function() {
                                        return e.openFolder(r, i)
                                    }
                                }, o.a.createElement("div", {
                                    className: O.a.folderButtonInside
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-folder", O.a.folderButtonIcon)
                                }), r, o.a.createElement("div", {
                                    className: O.a.folderButtonDropdown,
                                    role: "button",
                                    tabIndex: 0
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-ellipsis-v", O.a.folderButtonDropdownIcon)
                                }), o.a.createElement("div", {
                                    className: O.a.folderButtonDropdownMenu
                                }, o.a.createElement("div", {
                                    className: O.a.folderButtonDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            editingFolder: !0,
                                            folderName: r,
                                            folderColor: i.color,
                                            oldFolderName: r
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-pencil-alt", O.a.folderButtonDropdownOptionIcon)
                                }), "Edit"), o.a.createElement("div", {
                                    className: O.a.folderButtonDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            deleting: !0,
                                            deleteFolder: r
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-trash-alt", O.a.folderButtonDropdownOptionIcon)
                                }), "Delete"))))) : null
                            }))) : null, o.a.createElement("div", {
                                className: O.a.container
                            }, this.state.games.filter((function(t) {
                                return t.title.toLowerCase().includes(e.state.searchInput.toLowerCase())
                            })).map((function(t) {
                                return o.a.createElement("div", {
                                    key: t._id,
                                    className: O.a.setContainer
                                }, t.coverImage ? o.a.createElement("div", {
                                    className: O.a.setImageFiller
                                }, o.a.createElement(y.a, {
                                    height: 180
                                }, o.a.createElement("img", {
                                    src: Object(B.f)(t.coverImage.url),
                                    alt: "Cover",
                                    className: O.a.coverImage,
                                    draggable: !1
                                }))) : o.a.createElement("div", {
                                    className: O.a.setFillerContainer
                                }, o.a.createElement("div", {
                                    className: O.a.setFillerText
                                }, "Blooket")), e.state.inFolder ? o.a.createElement("div", {
                                    "data-tip": "Remove from Folder",
                                    className: O.a.removeFromFolder,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.removeFromFolder(t._id)
                                    }
                                }, o.a.createElement("i", {
                                    className: "fas fa-folder-minus"
                                })) : null, t.private ? null : o.a.createElement(c.b, {
                                    className: O.a.viewButton,
                                    "data-tip": "View Set",
                                    to: "/set/".concat(t._id)
                                }, o.a.createElement("i", {
                                    className: "far fa-eye"
                                })), o.a.createElement("div", {
                                    className: O.a.setQuestionsContainer
                                }, o.a.createElement("div", {
                                    className: O.a.setQuestionsText
                                }, "".concat(Object(B.k)(t.questions.length), " ").concat(1 === t.questions.length ? "Question" : "Questions"))), o.a.createElement("div", {
                                    className: O.a.setHeader
                                }, t.title), o.a.createElement("div", {
                                    className: O.a.setSpacer
                                }), o.a.createElement("div", {
                                    className: O.a.setPlays
                                }, "".concat(Object(B.k)(t.playCount), " ").concat(1 === t.playCount ? "Play" : "Plays")), o.a.createElement("div", {
                                    className: O.a.setLastEdit
                                }, "Edited ".concat(_()(t.date).fromNow())), o.a.createElement("div", {
                                    className: O.a.setHorizontalDivider
                                }), o.a.createElement("div", {
                                    className: O.a.setBottomContainer
                                }, o.a.createElement("i", {
                                    "data-tip": "Edit",
                                    className: p()(O.a.pencilIcon, "fas fa-pencil-alt"),
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
                                    className: O.a.setVerticalDivider
                                }), o.a.createElement("i", {
                                    "data-tip": "Delete",
                                    className: p()(O.a.trashIcon, "fas fa-trash-alt"),
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onDelete(t._id)
                                    }
                                }), o.a.createElement("div", {
                                    className: O.a.setVerticalDivider
                                }), o.a.createElement("div", {
                                    className: O.a.setDropdown,
                                    role: "button",
                                    tabIndex: 0
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-cog", O.a.setDropdownIcon)
                                }), o.a.createElement("div", {
                                    className: O.a.setDropdownMenu
                                }, o.a.createElement("div", {
                                    className: O.a.setDropdownOption,
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
                                    className: p()("fas fa-folder", O.a.setDropdownOptionIcon)
                                }), "Move"), o.a.createElement("div", {
                                    className: O.a.setDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onCopy(t)
                                    }
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-copy", O.a.setDropdownOptionIcon)
                                }), "Copy"), o.a.createElement("div", {
                                    className: O.a.setDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onMerge(t)
                                    }
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-random", O.a.setDropdownOptionIcon)
                                }), "Merge"), t.private ? null : o.a.createElement("div", {
                                    className: O.a.setDropdownOption,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.copyToClipboard(t._id)
                                    }
                                }, o.a.createElement("i", {
                                    className: p()("fas fa-link", O.a.setDropdownOptionIcon)
                                }), "Link", e.state.justCopied ? o.a.createElement("div", {
                                    className: O.a.justCopied
                                }, "Copied!") : null)))), o.a.createElement("div", {
                                    className: O.a.setHorizontalDivider
                                }), o.a.createElement("div", {
                                    className: O.a.setPlayContainer
                                }, o.a.createElement("div", {
                                    className: O.a.playButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onSolo(t._id)
                                    }
                                }, o.a.createElement("i", {
                                    className: p()(O.a.playIcon, "fas fa-user-astronaut")
                                }), o.a.createElement("div", {
                                    className: O.a.setPlayText
                                }, "Solo")), o.a.createElement("div", {
                                    className: O.a.setVerticalDivider,
                                    style: {
                                        height: 50
                                    }
                                }), o.a.createElement(N.a, {
                                    outsideClass: O.a.hostButton,
                                    color: "#0bc2cf",
                                    onClick: function() {
                                        return e.onHost(t._id)
                                    }
                                }, o.a.createElement("div", {
                                    className: O.a.hostButtonInside
                                }, o.a.createElement("i", {
                                    className: p()(O.a.playIcon, "fas fa-play")
                                }), o.a.createElement("div", {
                                    className: O.a.setPlayText
                                }, "Host")))), e.state.mergeGame._id === t._id ? o.a.createElement("div", {
                                    className: O.a.mergeContainer
                                }, o.a.createElement("div", {
                                    className: O.a.mergeName
                                }, "Choose a set to merge with", o.a.createElement("div", {
                                    style: {
                                        fontWeight: "normal",
                                        fontSize: 14,
                                        lineHeight: "17px",
                                        marginTop: 10
                                    }
                                }, "This will add all questions from the set you select to this set")), o.a.createElement("div", {
                                    className: O.a.mergeButton,
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
                                    className: O.a.mergeSetButton,
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
                            }), this.state.deleting ? o.a.createElement(x.a, {
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
                            }) : this.state.copying || this.state.noFolder ? this.state.copyGame.title ? o.a.createElement(x.a, {
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
                            }) : o.a.createElement(x.a, {
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
                            }) : this.state.creatingFolder || this.state.editingFolder ? o.a.createElement(x.a, {
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
                            }) : this.state.noMerge ? o.a.createElement(x.a, {
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
                            }) : this.state.mergeGame2._id ? o.a.createElement(x.a, {
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
                            }) : this.state.movingGame ? o.a.createElement(x.a, {
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
                                    className: O.a.moveText
                                }, "Choose a location to move the set to:"), o.a.createElement("div", {
                                    className: O.a.locationsHolder
                                }, Object.keys(this.state.folders).length > 0 ? Object.entries(this.state.folders).map((function(t) {
                                    var a = T(t, 2),
                                        n = a[0],
                                        r = a[1];
                                    return o.a.createElement(N.a, {
                                        outsideClass: O.a.locationFolderButton,
                                        color: r.color,
                                        key: n,
                                        onClick: function() {
                                            return e.setState({
                                                moveLocation: n
                                            })
                                        }
                                    }, o.a.createElement("div", {
                                        className: O.a.locationFolderButtonInside
                                    }, o.a.createElement("i", {
                                        className: p()("fas fa-folder", O.a.locationFolderButtonIcon)
                                    }), n))
                                })) : o.a.createElement("div", {
                                    className: O.a.noFoldersText
                                }, "No Folders Created")), o.a.createElement("div", {
                                    className: O.a.moveLocation
                                }, "Location: ".concat("" === this.state.moveLocation ? "No Folder" : this.state.moveLocation)))
                            }) : this.state.ready && this.state.noRole ? o.a.createElement(x.a, {
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
                            }) : this.state.ready && !g.isMobile && this.state.tour ? o.a.createElement(k.a, {
                                done: this.endTour
                            }) : null))
                        }
                    }]) && V(t.prototype, a), n && V(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), m
                }(o.a.Component);
            Z.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            t.a = Object(v.c)(Object(u.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(Z)))
        },
        "5Eab": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                i = a("/MKj"),
                s = a("Ty5D"),
                l = a("E8Bj"),
                c = a("74sb");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _(e) {
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
                    var a, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(e, t) {
                if (t && ("object" === u(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var y = function(e) {
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
                    }), t && m(e, t)
                }(r, e);
                var t, a, n, o = _(r);

                function r() {
                    return d(this, r), o.apply(this, arguments)
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        Object(c.j)(), window.location.href = "".concat("https://id.blooket.com", "/login")
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]) && p(t.prototype, a), n && p(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(o.a.Component);
            y.propTypes = {};
            t.a = Object(l.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(y)))
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
                }
            }
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
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___153FZ-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__rateIcon___11Qwv-camelCase{font-size:28px;line-height:35px;margin:auto 10px;color:#3a3a3a;outline:none;cursor:pointer;transition:all .1s linear}.styles__rateIcon___11Qwv-camelCase:hover{color:#0bc2cf}.styles__tooltip___21a_3-camelCase{font-family:Nunito,sans-serif!important;font-size:15px!important;line-height:19px!important;padding:6px 13px!important;text-align:center!important}.styles__tokenBalance___1FHgT-camelCase{margin:0 10px;display:flex}.styles__mTokenBalance___2dSI3-camelCase,.styles__tokenBalance___1FHgT-camelCase{height:55px;background-color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding:0 10px 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);justify-content:center;align-items:center;font-size:22px;font-weight:700;color:#3a3a3a}.styles__mTokenBalance___2dSI3-camelCase{position:absolute;top:0;right:10px;display:none}.styles__tokenBalanceIcon___3MGhs-camelCase{width:30px;height:30px;margin-right:7px}.styles__leftColumn___2MTgv-camelCase{margin:25px 0 35px 5%;width:calc(90% - 250px);padding-bottom:20px}.styles__packsWrapper___2hBF4-camelCase{display:grid;grid-template-columns:repeat(auto-fill,210px);grid-gap:25px;width:100%}.styles__packContainer___3RwSU-camelCase{width:210px;height:210px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;position:relative;background-color:#0bc2cf;border-radius:10px;overflow:hidden;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2);box-sizing:border-box;will-change:transform;transition:.2s}.styles__packContainer___3RwSU-camelCase:hover{transform:scale(.95)}.styles__packImgContainer___3NABW-camelCase{height:100%;position:relative}.styles__packShadow___2TA17-camelCase{width:70%;filter:brightness(0) invert(100%);opacity:.5}.styles__packImg___3to1S-camelCase,.styles__packShadow___2TA17-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(10deg)}.styles__packImg___3to1S-camelCase{width:65%}.styles__packBottom___37drt-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;height:24px;padding:0 12px;background-color:rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:18px;color:#fff;text-shadow:1px 1px 0 grey;border-top-right-radius:10px;border-bottom-right-radius:10px;position:absolute;bottom:12px;left:0}.styles__packPriceImg___1FaDF-camelCase{width:16px;height:16px;margin-right:7px}.styles__subheader___GVBz_-camelCase{font-size:34px;font-weight:700;margin:20px 0}.styles__weeklyWrapper___1N5wN-camelCase{display:flex;flex-flow:row wrap;width:100%;margin:-12.5px}.styles__weeklyContainer___I6YST-camelCase{width:270px;height:190px;margin:12.5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;position:relative;background:linear-gradient(#0bc2cf,#146cd2);border-radius:10px;overflow:hidden;box-shadow:inset 0 -7px rgba(0,0,0,.2);display:flex;flex-direction:column;align-items:center;justify-content:center;will-change:transform;transition:.2s}.styles__weeklyContainer___I6YST-camelCase:hover{transform:scale(.95)}.styles__weeklyName___1-QhF-camelCase{font-size:22px;text-align:center;position:absolute;width:100%;left:0;top:10px}.styles__weeklyName___1-QhF-camelCase,.styles__weeklyTitle___2PwID-camelCase{font-family:Titan One,sans-serif;color:#fff;text-shadow:1px 1px 0 grey}.styles__weeklyTitle___2PwID-camelCase{font-size:28px;padding:5px 10px;background-color:rgba(0,0,0,.2);border-radius:10px}.styles__weeklyBanner___318lh-camelCase{width:90%}.styles__weeklyBottom___2Xhbw-camelCase{justify-content:center;padding:0 12px;background-color:rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:18px;text-shadow:1px 1px 0 grey;border-top-right-radius:10px;border-bottom-right-radius:10px;left:0}.styles__weeklyBottom___2Xhbw-camelCase,.styles__weeklyRarity___1sPj5-camelCase{display:flex;flex-direction:row;align-items:center;height:24px;color:#fff;position:absolute;bottom:15px}.styles__weeklyRarity___1sPj5-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:14px;padding:0 7px 0 12px;right:0;border-top-left-radius:10px;border-bottom-left-radius:10px}.styles__storeContainer___FgOVv-camelCase{position:fixed;right:2.5%;width:250px;height:375px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__storeImg___2c3cG-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__cashierBlook___iI1UH-camelCase{position:absolute;bottom:110px;right:60px;width:70px;transform:rotate(10deg)}.styles__instantButton___2ezEk-camelCase{position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.1);color:#3a3a3a;border-radius:5px;font-size:12px;height:20px;padding:0 10px;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;pointer-events:all}.styles__instantButton___2ezEk-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__openBackground___-U4oX-camelCase{position:fixed;top:0;left:0;width:100%;height:100%;z-index:25;overflow:hidden}.styles__openContainer___3paFG-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);width:400px;border-radius:10px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;box-shadow:0 0 4px rgba(0,0,0,.15);background-color:#fff}.styles__openingContainer___2OmG9-camelCase{animation:styles__growIn___1R3Nj-camelCase .2s linear .5s forwards}@keyframes styles__growIn___1R3Nj-camelCase{0%{transform:translate(-50%,-50%) scale(0)}to{transform:translate(-50%,-50%) scale(1)}}.styles__openingContainerEpic___3TzCR-camelCase{animation:styles__epicOpen___1Ajao-camelCase 1.5s linear .5s forwards}@keyframes styles__epicOpen___1Ajao-camelCase{0%{transform:translate(calc(-50% - 25vw),calc(-50% - 25vh)) rotate(15deg) scale(.1)}25%{transform:translate(calc(-50% - 25vw),calc(-50% - 25vh)) rotate(15deg) scale(.1)}25.1%{transform:translate(calc(-50% + 25vw),calc(-50% + 25vh)) rotate(-15deg) scale(.2)}50%{transform:translate(calc(-50% + 25vw),calc(-50% + 25vh)) rotate(-15deg) scale(.2)}50.1%{transform:translate(calc(-50% - 25vw),calc(-50% + 25vh)) rotate(15deg) scale(.3)}75%{transform:translate(calc(-50% - 25vw),calc(-50% + 25vh)) rotate(15deg) scale(.3)}75.1%{transform:translate(calc(-50% + 25vw),calc(-50% - 25vh)) rotate(-15deg) scale(.4)}99.9%{transform:translate(calc(-50% + 25vw),calc(-50% - 25vh)) rotate(-15deg) scale(.4)}to{transform:translate(-50%,-50%) rotate(0) scale(1)}}.styles__openingContainerLegendary___RbJZ_-camelCase{animation:styles__legendaryOpen___1ihkU-camelCase 2.5s ease-in 1s forwards}@keyframes styles__legendaryOpen___1ihkU-camelCase{0%{transform:translate(calc(-50% - 25vw),calc(-50% - 100vh)) scale(.1)}35%{transform:translate(calc(-50% - 25vw),calc(-50% + 100vh)) scale(.1)}35.1%{transform:translate(calc(-50% + 25vw),calc(-50% - 100vh)) scale(.3)}70%{transform:translate(calc(-50% + 25vw),calc(-50% + 100vh)) scale(.3)}70.1%{transform:translate(-50%,calc(-50% - 100vh)) scale(1)}to{transform:translate(-50%,-50%) scale(1)}}.styles__openingContainerChroma___3VBd5-camelCase{animation:styles__chromaOpen___2_fhq-camelCase 2s linear 1.5s forwards}@keyframes styles__chromaOpen___2_fhq-camelCase{0%{transform:translate(-50%,-50%) rotate(0deg) scale(0)}10%{transform:translate(-50%,-50%) rotate(180deg) scale(.1)}20%{transform:translate(-50%,-50%) rotate(1turn) scale(.2)}30%{transform:translate(-50%,-50%) rotate(540deg) scale(.3)}40%{transform:translate(-50%,-50%) rotate(2turn) scale(.4)}50%{transform:translate(-50%,-50%) rotate(900deg) scale(.5)}60%{transform:translate(-50%,-50%) rotate(3turn) scale(.6)}70%{transform:translate(-50%,-50%) rotate(1260deg) scale(.7)}80%{transform:translate(-50%,-50%) rotate(4turn) scale(.8)}90%{transform:translate(-50%,-50%) rotate(1620deg) scale(.9)}to{transform:translate(-50%,-50%) rotate(5turn) scale(1)}}.styles__blookBackground___3rt4N-camelCase{width:100%;height:100%}.styles__openingPackContainer___1ZQzY-camelCase,.styles__openPackContainer___2m4Yf-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:667px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__openPackContainer___2m4Yf-camelCase{outline:none;cursor:pointer}.styles__openingPackContainer___1ZQzY-camelCase{animation:styles__dropPack___12OV_-camelCase .2s linear .4s forwards}@keyframes styles__dropPack___12OV_-camelCase{0%{transform:translate(-50%,-50%)}to{transform:translate(-50%,50vh)}}.styles__openPack___3QxCP-camelCase{width:400px;height:667px;background-size:4400px 667px;background-repeat:no-repeat}.styles__isOpeningPack___1qY5t-camelCase{animation:styles__open___1v-ch-camelCase .4s steps(10) forwards}@keyframes styles__open___1v-ch-camelCase{0%{background-position:0}to{background-position:-4000px}}.styles__unlockedBlookImage___wC4gr-camelCase{position:absolute;bottom:85px;left:105px;width:190px}.styles__unlockedText___1diat-camelCase{position:absolute;top:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center}.styles__unlockedBlook___2pr1Z-camelCase{text-shadow:0 3px 3px rgba(0,0,0,.2);width:100%;height:50px;text-align:center}.styles__rarityText___1PfSA-camelCase{font-size:30px;-webkit-text-stroke:#3a3a3a 1.5px}.styles__bottomText___3_k10-camelCase{position:absolute;bottom:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center;font-size:30px;text-shadow:0 0 4px rgba(0,0,0,.4)}.styles__bottomShadow___10ZLG-camelCase{width:100%;position:absolute;bottom:0;left:0;height:50px;box-shadow:inset 0 -9px rgba(0,0,0,.2);border-bottom-left-radius:10px;border-bottom-right-radius:10px}.styles__cornerIcon___24o3Z-camelCase{width:400px;position:absolute;bottom:-20px;right:-20px;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.2;transform:rotate(-35deg)}.styles__openBigButton___3KmDM-camelCase,.styles__phaserContainer___1Ffxs-camelCase{width:100%;height:100%;position:absolute;top:0;left:0}.styles__openBigButton___3KmDM-camelCase{outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:100}.styles__canOpen___2znG2-camelCase{cursor:pointer}.styles__mInstantButton___3lgNk-camelCase{display:none;background-color:rgba(0,0,0,.1);color:#3a3a3a;border-radius:5px;font-size:12px;height:20px;padding:0 10px;margin:0 5%;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__mInstantButton___3lgNk-camelCase:hover{background-color:rgba(0,0,0,.2)}@media only screen and (max-width:1010px){.styles__storeContainer___FgOVv-camelCase{display:none}.styles__mInstantButton___3lgNk-camelCase{display:flex}.styles__leftColumn___2MTgv-camelCase{margin:25px 5% 35px;width:90%}.styles__packsWrapper___2hBF4-camelCase,.styles__weeklyWrapper___1N5wN-camelCase{justify-content:center}.styles__weeklyWrapper___1N5wN-camelCase{margin:0 -12.5px;width:unset}}@media only screen and (max-width:850px){.styles__mTokenBalance___2dSI3-camelCase{display:flex}}@media only screen and (max-width:600px){.styles__openContainer___3paFG-camelCase{width:300px}.styles__openingPackContainer___1ZQzY-camelCase,.styles__openPack___3QxCP-camelCase,.styles__openPackContainer___2m4Yf-camelCase{width:300px;height:500px}.styles__openPack___3QxCP-camelCase{background-size:3300px 500px}@keyframes styles__open___1v-ch-camelCase{0%{background-position:0}to{background-position:-3000px}}.styles__unlockedBlookImage___wC4gr-camelCase{position:absolute;bottom:64px;left:78.5px;width:143px}.styles__unlockedText___1diat-camelCase{top:5px;left:2.5%;width:95%}.styles__unlockedBlook___2pr1Z-camelCase{width:100%;height:30px}.styles__bottomText___3_k10-camelCase,.styles__rarityText___1PfSA-camelCase{font-size:20px}.styles__bottomText___3_k10-camelCase{bottom:15px}.styles__cornerIcon___24o3Z-camelCase{width:270px}}", ""]), t.locals = {
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
                weeklyBottom: "styles__weeklyBottom___2Xhbw-camelCase",
                weeklyRarity: "styles__weeklyRarity___1sPj5-camelCase",
                storeContainer: "styles__storeContainer___FgOVv-camelCase",
                storeImg: "styles__storeImg___2c3cG-camelCase",
                cashierBlook: "styles__cashierBlook___iI1UH-camelCase",
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
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("Ty5D"),
                u = a("tMKq"),
                d = a.n(u),
                p = a("H1WH"),
                m = a("Xst1"),
                _ = a.n(m),
                f = a("J+dS"),
                h = a.n(f),
                y = a("oQ+7"),
                g = a("XTAU"),
                b = a("0oXL");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k(e) {
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
                    var a, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return C(this, a)
                }
            }

            function C(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
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
                    }), t && x(e, t)
                }(i, e);
                var t, a, n, r = k(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = r.call(this, e)).state = {}, t
                }
                return t = i, (a = [{
                    key: "render",
                    value: function() {
                        return "/" !== window.location.pathname && this.props.match.params ? o.a.createElement("div", {
                            className: p.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, o.a.createElement(g.a, {
                            title: "404 | Blooket",
                            desc: "I don't know what is, but this ain't it chief."
                        }), o.a.createElement(y.a, null), o.a.createElement("div", {
                            className: _.a.regularBody
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
                                        value: p.isMobile ? 19 : 65,
                                        density: {
                                            enable: !1,
                                            value_area: p.isMobile ? 900 : 350
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
                }]) && w(t.prototype, a), n && w(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            E.propTypes = {
                match: l.a.object
            };
            t.a = Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(E))
        },
        "SB7+": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("Ty5D"),
                u = a("H1WH"),
                d = a("cpGi"),
                p = a("KAy6"),
                m = a.n(p),
                _ = a("TSYQ"),
                f = a.n(_),
                h = a("4HzQ"),
                y = a("lNlg"),
                g = a("FKJl"),
                b = a("E8Bj"),
                v = a("fGzD"),
                w = a("0oXL"),
                x = a("pMTK"),
                k = a("Xst1"),
                C = a.n(k),
                O = a("Gnp4"),
                E = a.n(O),
                j = a("XTAU"),
                B = a("ca/f"),
                I = a("MDrD"),
                S = a("74sb"),
                N = a("qnYv"),
                P = a("i4/Q"),
                T = a("xP+p"),
                F = a("1O+K"),
                D = a.n(F);

            function M(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function L(e, t, a) {
                return t && M(e.prototype, t), a && M(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var z = new(L((function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.scene = null, this.particles = null, this.rarity = null
                }))),
                G = window.MarketBlookParticles = {
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
                R = new D.a.Class({
                    Extends: D.a.GameObjects.Image,
                    initialize: function() {
                        D.a.GameObjects.Image.call(this, z.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
                    },
                    spawn: function(e, t, a, n, o, r, i, s, l) {
                        this.setTexture(l), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], z.scene.physics.velocityFromAngle(n, o, this.body.velocity), this.body.setGravityY(r), this.body.setAngularVelocity(i), this.lifespan = s
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                });

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return U(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || q(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); i = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return r
                }(e, t) || q(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                if (e) {
                    if ("string" == typeof e) return U(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? U(e, t) : void 0
                }
            }

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function Y(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function W(e, t) {
                return (W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = Z(e);
                    if (t) {
                        var o = Z(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return X(this, a)
                }
            }

            function X(e, t) {
                if (t && ("object" === A(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function Z(e) {
                return (Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Q = function(e) {
                    if ("center" === e) {
                        var t = Object(S.m)(-115, -65);
                        return {
                            x: z.scene.cameras.main.worldView.width / 2,
                            y: z.scene.cameras.main.worldView.height / 2,
                            scale: Object(S.m)(.7, 1),
                            angle: t,
                            velocity: Object(S.m)(600, 750),
                            gravity: 700,
                            angVelocity: (t > -90 ? 1 : -1) * Object(S.m)(125, 175),
                            lifespan: 2500
                        }
                    }
                    if ("right" === e) return {
                        x: z.scene.cameras.main.worldView.width,
                        y: Object(S.m)(0, z.scene.cameras.main.worldView.height),
                        scale: Object(S.m)(.7, 1),
                        angle: -180,
                        velocity: Object(S.m)(600, 750),
                        gravity: 0,
                        angVelocity: Object(S.m)(-175, -125),
                        lifespan: 2500
                    };
                    if ("left" === e) return {
                        x: 0,
                        y: Object(S.m)(0, z.scene.cameras.main.worldView.height),
                        scale: Object(S.m)(.7, 1),
                        angle: 0,
                        velocity: Object(S.m)(600, 750),
                        gravity: 0,
                        angVelocity: Object(S.m)(125, 175),
                        lifespan: 2500
                    };
                    if ("right-bottom" === e) return {
                        x: z.scene.cameras.main.worldView.width,
                        y: z.scene.cameras.main.worldView.height,
                        scale: Object(S.m)(.7, 1),
                        angle: Object(S.m)(-160, -110),
                        velocity: Object(S.m)(600, 750),
                        gravity: 500,
                        angVelocity: Object(S.m)(-175, -125),
                        lifespan: 2500
                    };
                    if ("left-bottom" === e) return {
                        x: 0,
                        y: z.scene.cameras.main.worldView.height,
                        scale: Object(S.m)(.7, 1),
                        angle: Object(S.m)(-70, -20),
                        velocity: Object(S.m)(600, 750),
                        gravity: 500,
                        angVelocity: Object(S.m)(125, 175),
                        lifespan: 2500
                    };
                    if ("top" === e) return {
                        x: Object(S.m)(0, z.scene.cameras.main.worldView.width),
                        y: -50,
                        scale: Object(S.m)(.7, 1),
                        angle: 90,
                        velocity: Object(S.m)(0, 50),
                        gravity: 700,
                        angVelocity: Object(S.m)(-150, 150),
                        lifespan: 2500
                    };
                    if ("right-shower" === e) return {
                        x: z.scene.cameras.main.worldView.width,
                        y: Object(S.m)(0, z.scene.cameras.main.worldView.height),
                        scale: Object(S.m)(.7, 1),
                        angle: Object(S.m)(-180, -130),
                        velocity: Object(S.m)(600, 750),
                        gravity: 500,
                        angVelocity: Object(S.m)(-175, -125),
                        lifespan: 2500
                    };
                    if ("left-shower" === e) return {
                        x: 0,
                        y: Object(S.m)(0, z.scene.cameras.main.worldView.height),
                        scale: Object(S.m)(.7, 1),
                        angle: Object(S.m)(-50, 0),
                        velocity: Object(S.m)(600, 750),
                        gravity: 500,
                        angVelocity: Object(S.m)(125, 175),
                        lifespan: 2500
                    };
                    if ("right-diamond" === e) {
                        var a = Object(S.m)(0, z.scene.cameras.main.worldView.height);
                        return {
                            x: z.scene.cameras.main.worldView.width,
                            y: a,
                            scale: Object(S.m)(.7, 1),
                            angle: a > z.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                            velocity: Object(S.m)(600, 750),
                            gravity: 0,
                            angVelocity: Object(S.m)(-175, -125),
                            lifespan: 2500
                        }
                    }
                    if ("left-diamond" === e) {
                        var n = Object(S.m)(0, z.scene.cameras.main.worldView.height);
                        return {
                            x: 0,
                            y: n,
                            scale: Object(S.m)(.7, 1),
                            angle: n > z.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                            velocity: Object(S.m)(600, 750),
                            gravity: 0,
                            angVelocity: Object(S.m)(125, 175),
                            lifespan: 2500
                        }
                    }
                    return "center-spread" === e ? {
                        x: z.scene.cameras.main.worldView.width / 2,
                        y: z.scene.cameras.main.worldView.height / 2,
                        scale: Object(S.m)(.7, 1),
                        angle: Object(S.m)(0, 360),
                        velocity: Object(S.m)(600, 750),
                        gravity: 0,
                        angVelocity: Object(S.m)(-175, 175),
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
                        }), t && W(e, t)
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
                            Object.entries(G).filter((function(t) {
                                return V(t, 1)[0].includes(e.rarity)
                            })).forEach((function(t) {
                                var a = V(t, 2),
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
                            z.scene = this, z.rarity = "", z.particles = this.physics.add.group({
                                classType: R,
                                runChildUpdate: !0
                            }), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", (function(t) {
                                z.rarity = t, e.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1
                            }))
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (z.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                if ("Uncommon" === z.rarity)
                                    for (var a = 0; a < 2; a++) {
                                        var n = z.particles.get();
                                        n && n.spawn.apply(n, H(Object.values(Q("center"))).concat(["uncommon-".concat(Object(S.n)(1, 8))]))
                                    } else if ("Rare" === z.rarity)
                                        for (var o = 0; o < 2; o++) {
                                            var r = z.particles.get();
                                            r && r.spawn.apply(r, H(Object.values(Q(o % 2 == 0 ? "left-bottom" : "right-bottom"))).concat(["rare-".concat(Object(S.n)(1, 8))]))
                                        } else if ("Epic" === z.rarity)
                                            for (var i = 0; i < 2; i++) {
                                                var s = z.particles.get();
                                                s && s.spawn.apply(s, H(Object.values(Q(i % 2 == 0 ? "left-shower" : "right-shower"))).concat(["epic-".concat(Object(S.n)(1, 8))]))
                                            } else if ("Legendary" === z.rarity)
                                                for (var l = 0; l < 3; l++) {
                                                    var c = z.particles.get();
                                                    c && c.spawn.apply(c, H(Object.values(Q("top"))).concat(["legendary-".concat(Object(S.n)(1, 8))]))
                                                } else if ("Chroma" === z.rarity)
                                                    for (var u = 0; u < 3; u++) {
                                                        var d = z.particles.get();
                                                        d && d.spawn.apply(d, H(Object.values(Q(u % 2 == 0 ? "left-diamond" : "right-diamond"))).concat(["chroma-".concat(Object(S.n)(1, 8))]))
                                                    }
                                this.nextParticle = 20, this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
                            }
                        }
                    }]) && Y(t.prototype, a), n && Y(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(D.a.Scene),
                $ = function(e) {
                    return {
                        type: D.a.WEBGL,
                        parent: "phaser-market",
                        width: "100%",
                        height: "100%",
                        scale: {
                            mode: D.a.Scale.NONE,
                            autoCenter: D.a.Scale.CENTER_BOTH
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
                ae = a("Dzm6");

            function ne(e) {
                return (ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function oe(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function re(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); i = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ie(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ie(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function se() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                se = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    r = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var o = t && t.prototype instanceof d ? t : d,
                        r = Object.create(o.prototype),
                        i = new k(n || []);
                    return r._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(o, r) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw r;
                                return O()
                            }
                            for (a.method = o, a.arg = r;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = v(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, i), r
                }

                function c(e, t, a) {
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
                e.wrap = l;
                var u = {};

                function d() {}

                function p() {}

                function m() {}
                var _ = {};
                s(_, o, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    h = f && f(f(C([])));
                h && h !== t && a.call(h, o) && (_ = h);
                var y = m.prototype = d.prototype = Object.create(_);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, r) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, r, i, s) {
                                    var l = c(e[o], e, r);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            d = u.value;
                                        return d && "object" == ne(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(d).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(o, r, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = m, s(y, "constructor", m), s(m, "constructor", p), p.displayName = s(m, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), s(b.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var i = new b(l(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, o, (function() {
                    return this
                })), s(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                i = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var s = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (s) {
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
                        var i = r ? r.completion : {};
                        return i.type = e, i.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function le(e, t, a, n, o, r, i) {
                try {
                    var s = e[r](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function ce(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var r = e.apply(t, a);

                        function i(e) {
                            le(r, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            le(r, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function ue(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function de(e, t) {
                return (de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function pe(e) {
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
                    var a, n = fe(e);
                    if (t) {
                        var o = fe(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return me(this, a)
                }
            }

            function me(e, t) {
                if (t && ("object" === ne(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return _e(e)
            }

            function _e(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function fe(e) {
                return (fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var he = window.ShopData = [{
                    id: "theater",
                    type: "banner",
                    data: te.a.theater
                }, {
                    id: "sushi",
                    type: "banner",
                    data: te.a.sushi
                }, {
                    id: "thoughtful",
                    type: "title",
                    data: ae.a.thoughtful
                }, {
                    id: "starStudent",
                    type: "title",
                    data: ae.a.starStudent
                }],
                ye = {
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
                ge = function(e) {
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
                        }), t && de(e, t)
                    }(s, e);
                    var t, a, n, r, i = pe(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = i.call(this, e)).state = {
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
                            titles: []
                        }, t.here = !0, t.handleBigClick = t.handleBigClick.bind(_e(t)), t.viewPack = t.viewPack.bind(_e(t)), t.buyPack = t.buyPack.bind(_e(t)), t.startOpening = t.startOpening.bind(_e(t)), t.buyItem = t.buyItem.bind(_e(t)), t
                    }
                    return t = s, (a = [{
                        key: "componentDidMount",
                        value: (r = ce(se().mark((function e() {
                            var t, a = this;
                            return se().wrap((function(e) {
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
                                        }), N.a.get("/api/users/market").then((function(e) {
                                            a.here && a.setState({
                                                tokens: e.data.tokens,
                                                banners: e.data.banners || [],
                                                titles: e.data.titles || []
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
                            this.state.tokens < v.a[t] || this.state.loadingPack || (this.setState({
                                loadingPack: !0,
                                tokens: this.state.tokens - v.a[t]
                            }), N.a.put("/api/users/unlockblook", {
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
                                    game: $(Object(x.a)(e.data.unlockedBlook)),
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
                                var t = Object(x.a)(this.state.unlockedBlook);
                                this.setState({
                                    opening: !0
                                }, ce(se().mark((function a() {
                                    return se().wrap((function(a) {
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
                                                    e.state.game.instance.events.emit("start-particles", Object(x.a)(e.state.unlockedBlook))
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
                            }), N.a.put("/api/users/buy/".concat(this.state.currentItem.type), {
                                id: this.state.currentItem.id
                            }).then((function(t) {
                                e.setState({
                                    loadingItem: !1,
                                    currentItem: null,
                                    banners: "banner" === e.state.currentItem.type ? t.data : e.state.banners,
                                    titles: "title" === e.state.currentItem.type ? t.data : e.state.titles
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
                                className: u.isMobile ? C.a.mBody : C.a.body
                            }, o.a.createElement(j.a, {
                                title: "Market | Blooket",
                                desc: "Use the market to buy packs with tokens that are collected from games. There are tons of new Blooks to unlock, and this is the best place to get them."
                            }), o.a.createElement(P.a, {
                                user: this.state.user,
                                page: "Market",
                                topContent: o.a.createElement("div", {
                                    className: E.a.tokenBalance
                                }, o.a.createElement("img", {
                                    src: ee.a.basic.token,
                                    alt: "Token",
                                    className: E.a.tokenBalanceIcon,
                                    draggable: !1
                                }), Object(S.k)(this.state.tokens))
                            }), o.a.createElement("div", {
                                className: C.a.profileBody
                            }, o.a.createElement("div", {
                                className: E.a.header
                            }, "Market"), o.a.createElement("div", {
                                className: E.a.mTokenBalance
                            }, o.a.createElement("img", {
                                src: ee.a.basic.token,
                                alt: "Token",
                                className: E.a.tokenBalanceIcon,
                                draggable: !1
                            }), Object(S.k)(this.state.tokens)), o.a.createElement("div", {
                                style: {
                                    display: "flex"
                                }
                            }, o.a.createElement("div", {
                                className: E.a.mInstantButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return r.setState({
                                        instantOpen: !r.state.instantOpen
                                    })
                                }
                            }, "Instant Open: ".concat(this.state.instantOpen ? "On" : "Off"))), o.a.createElement("div", {
                                className: E.a.storeContainer
                            }, o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657064190/Media/market/blook_cashier.svg",
                                alt: "Mark the Cashier",
                                className: E.a.cashierBlook,
                                draggable: !1
                            }), o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657064190/Media/market/Mini_store.svg",
                                alt: "Store",
                                className: E.a.storeImg,
                                draggable: !1
                            }), o.a.createElement("div", {
                                className: E.a.instantButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return r.setState({
                                        instantOpen: !r.state.instantOpen
                                    })
                                }
                            }, "Instant Open: ".concat(this.state.instantOpen ? "On" : "Off"))), o.a.createElement("div", {
                                className: E.a.leftColumn
                            }, o.a.createElement("div", {
                                className: E.a.packsWrapper
                            }, Object.entries(ye).map((function(e) {
                                var t = re(e, 2),
                                    a = t[0],
                                    n = t[1];
                                return o.a.createElement("div", {
                                    className: E.a.packContainer,
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
                                    className: E.a.packImgContainer
                                }, o.a.createElement("img", {
                                    src: Object(S.d)(n.url),
                                    alt: a,
                                    className: E.a.packShadow,
                                    draggable: !1
                                }), o.a.createElement("img", {
                                    src: Object(S.d)(n.url),
                                    alt: a,
                                    className: E.a.packImg,
                                    draggable: !1
                                })), o.a.createElement("div", {
                                    className: E.a.packBottom
                                }, o.a.createElement("img", {
                                    src: ee.a.basic.token,
                                    alt: "Token",
                                    className: E.a.packPriceImg,
                                    draggable: !1
                                }), v.a[a]))
                            }))), o.a.createElement("div", {
                                className: E.a.subheader
                            }, "Weekly Shop"), o.a.createElement("div", {
                                className: E.a.weeklyWrapper
                            }, he.map((function(e) {
                                return o.a.createElement("div", {
                                    key: e.id,
                                    className: E.a.weeklyContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: "title" === e.type && r.state.titles.includes(e.id) || "banner" === e.type && r.state.banners.includes(e.id) ? function() {} : function() {
                                        return r.setState({
                                            currentItem: e
                                        })
                                    }
                                }, o.a.createElement("div", {
                                    className: E.a.weeklyName
                                }, "title" === e.type ? "Title" : e.data.name), "banner" === e.type ? o.a.createElement("img", {
                                    src: e.data.url,
                                    alt: e.data.name,
                                    className: E.a.weeklyBanner,
                                    draggable: !1
                                }) : o.a.createElement("div", {
                                    className: E.a.weeklyTitle
                                }, e.data.name), "title" === e.type && r.state.titles.includes(e.id) || "banner" === e.type && r.state.banners.includes(e.id) ? o.a.createElement("div", {
                                    className: E.a.weeklyBottom
                                }, "Owned") : o.a.createElement("div", {
                                    className: E.a.weeklyBottom
                                }, o.a.createElement("img", {
                                    src: ee.a.basic.token,
                                    alt: "Token",
                                    className: E.a.packPriceImg,
                                    draggable: !1
                                }), Object(S.k)(e.data.price)), o.a.createElement("div", {
                                    className: E.a.weeklyRarity,
                                    style: {
                                        backgroundColor: S.o[e.data.rarity]
                                    }
                                }, e.data.rarity))
                            }))))), this.state.currentPack ? o.a.createElement(B.a, {
                                content: o.a.createElement("div", null, o.a.createElement(d.a, {
                                    place: "left",
                                    effect: "solid",
                                    multiline: !0,
                                    html: !0,
                                    clickable: !0,
                                    className: E.a.tooltip
                                }), "Purchase the ".concat(this.state.currentPack, " Pack"), o.a.createElement("i", {
                                    className: f()(E.a.rateIcon, "far fa-question-circle"),
                                    "data-tip": m.a.renderToStaticMarkup(o.a.createElement("div", null, o.a.createElement("div", null, "Pack Rates:"), Object(v.b)(this.state.currentPack).map((function(e) {
                                        return o.a.createElement("div", {
                                            key: e[0]
                                        }, "".concat(e[0], ": ").concat(e[1], "%"))
                                    }))))
                                }), "for ".concat(Object(S.k)(v.a[this.state.currentPack]), " tokens?")),
                                loading: this.state.loadingPack,
                                buttonOne: this.state.tokens >= v.a[this.state.currentPack] ? {
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
                                buttonTwo: this.state.tokens >= v.a[this.state.currentPack] ? {
                                    text: "No",
                                    click: function() {
                                        return r.buyPack(!1)
                                    },
                                    color: "blue"
                                } : null
                            }) : this.state.currentItem ? o.a.createElement(B.a, {
                                text: "Purchase the ".concat(this.state.currentItem.data.name, " ").concat(this.state.currentItem.type, " for ").concat(Object(S.k)(this.state.currentItem.data.price), " tokens?"),
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
                                className: E.a.openBackground,
                                style: {
                                    background: ye[I.a[this.state.unlockedBlook].set].background
                                }
                            }, o.a.createElement("img", {
                                src: T.c[I.a[this.state.unlockedBlook].set],
                                alt: "Icon",
                                className: E.a.cornerIcon,
                                draggable: !1
                            }), o.a.createElement(y.a, {
                                game: this.state.game
                            }), o.a.createElement("div", {
                                className: E.a.phaserContainer,
                                id: "phaser-market"
                            }), o.a.createElement("div", {
                                className: f()(E.a.openContainer, (e = {}, oe(e, E.a.openingContainer, this.state.opening), oe(e, E.a.openingContainerEpic, this.state.opening && "Epic" === Object(x.a)(this.state.unlockedBlook)), oe(e, E.a.openingContainerLegendary, this.state.opening && "Legendary" === Object(x.a)(this.state.unlockedBlook)), oe(e, E.a.openingContainerChroma, this.state.opening && "Chroma" === Object(x.a)(this.state.unlockedBlook)), e))
                            }, o.a.createElement("img", {
                                src: Object(S.d)(T.b[I.a[this.state.unlockedBlook].set]),
                                alt: "Background",
                                className: E.a.blookBackground,
                                draggable: !1
                            }), o.a.createElement(w.a, {
                                name: this.state.unlockedBlook,
                                className: E.a.unlockedBlookImage
                            }), o.a.createElement("div", {
                                className: E.a.unlockedText
                            }, o.a.createElement(h.Textfit, {
                                className: E.a.unlockedBlook,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: 40
                            }, this.state.unlockedBlook), o.a.createElement("div", {
                                className: E.a.rarityText,
                                style: {
                                    color: S.o[Object(x.a)(this.state.unlockedBlook)]
                                }
                            }, Object(x.a)(this.state.unlockedBlook))), o.a.createElement("div", {
                                className: E.a.bottomText
                            }, "".concat((t = this.state.unlockedBlook, a = Object(v.b)(I.a[t].set), n = 0, a.forEach((function(e) {
                                e[0] === t && (n = e[1])
                            })), n), "%").concat(this.state.newUnlock ? " - NEW!" : "")), o.a.createElement("div", {
                                className: E.a.bottomShadow
                            })), o.a.createElement("div", {
                                className: this.state.opening ? E.a.openingPackContainer : E.a.openPackContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.startOpening
                            }, o.a.createElement("div", {
                                className: f()(E.a.openPack, oe({}, E.a.isOpeningPack, this.state.opening)),
                                style: {
                                    backgroundImage: "url(".concat(Object(S.d)(ye[I.a[this.state.unlockedBlook].set].animUrl), ")")
                                }
                            })), o.a.createElement("div", {
                                className: f()(E.a.openBigButton, oe({}, E.a.canOpen, !this.state.opening && this.state.canOpen || this.state.opening && this.state.doneOpening)),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.handleBigClick
                            })) : null)
                        }
                    }]) && ue(t.prototype, a), n && ue(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(o.a.Component);
            ge.propTypes = {
                user: l.a.object
            };
            t.a = Object(b.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(ge)))
        },
        VWYR: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return g
            }));
            var n = a("q1tI"),
                o = a.n(n),
                r = a("Ty5D"),
                i = a("E8Bj"),
                s = a("74sb");

            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
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
                    var a, n = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return m(this, a)
                }
            }

            function m(e, t) {
                if (t && ("object" === l(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function _(e) {
                return (_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                f = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    r = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var o = t && t.prototype instanceof p ? t : p,
                        r = Object.create(o.prototype),
                        i = new O(n || []);
                    return r._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(o, r) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw r;
                                return j()
                            }
                            for (a.method = o, a.arg = r;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = x(i, a);
                                    if (s) {
                                        if (s === d) continue;
                                        return s
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
                    }(e, a, i), r
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

                function p() {}

                function m() {}

                function _() {}
                var h = {};
                s(h, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    g = y && y(y(E([])));
                g && g !== t && a.call(g, o) && (h = g);
                var b = _.prototype = p.prototype = Object.create(h);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var n;
                    this._invoke = function(o, r) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, r, i, s) {
                                    var c = u(e[o], e, r);
                                    if ("throw" !== c.type) {
                                        var d = c.arg,
                                            p = d.value;
                                        return p && "object" == l(p) && a.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            d.value = e, i(d)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, r, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function E(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return m.prototype = _, s(b, "constructor", _), s(_, "constructor", m), m.displayName = s(_, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(w.prototype), s(w.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var i = new w(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(b), s(b, i, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = E, O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                i = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var s = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (s) {
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
                        var i = r ? r.completion : {};
                        return i.type = e, i.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), C(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function h(e, t, a, n, o, r, i) {
                try {
                    var s = e[r](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var r = e.apply(t, a);

                        function i(e) {
                            h(r, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            h(r, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var g = function() {
                    var e = y(f().mark((function e() {
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    window.location.href = "".concat("https://id.blooket.com", "/logout");
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function(e) {
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
                        }), t && d(e, t)
                    }(i, e);
                    var t, a, n, o, r = p(i);

                    function i() {
                        return c(this, i), r.apply(this, arguments)
                    }
                    return t = i, (a = [{
                        key: "componentDidMount",
                        value: (o = y(f().mark((function e() {
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        Object(s.j)(), g();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]) && u(t.prototype, a), n && u(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), i
                }(o.a.Component);
            t.a = Object(i.c)(Object(r.g)(b))
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