(window.webpackJsonp = window.webpackJsonp || []).push([
    [27], {
        "5pEQ": function(e, t, n) {
            "use strict";
            var r;

            function o(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "d", (function() {
                return y
            }));
            var c, s = [];
            ! function(e) {
                e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(c || (c = {}));
            var l = {
                    debug: c.DEBUG,
                    verbose: c.VERBOSE,
                    info: c.INFO,
                    warn: c.WARN,
                    error: c.ERROR,
                    silent: c.SILENT
                },
                f = c.INFO,
                h = (u(r = {}, c.DEBUG, "log"), u(r, c.VERBOSE, "log"), u(r, c.INFO, "info"), u(r, c.WARN, "warn"), u(r, c.ERROR, "error"), r),
                d = function(e, t) {
                    if (!(t < e.logLevel)) {
                        var n = (new Date).toISOString(),
                            r = h[t];
                        if (!r) throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t, ")"));
                        for (var o, i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++) a[u - 2] = arguments[u];
                        (o = console)[r].apply(o, ["[".concat(n, "]  ").concat(e.name, ":")].concat(a))
                    }
                },
                p = function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.name = t, this._logLevel = f, this._logHandler = d, this._userLogHandler = null, s.push(this)
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "logLevel",
                        get: function() {
                            return this._logLevel
                        },
                        set: function(e) {
                            if (!(e in c)) throw new TypeError('Invalid value "'.concat(e, '" assigned to `logLevel`'));
                            this._logLevel = e
                        }
                    }, {
                        key: "setLogLevel",
                        value: function(e) {
                            this._logLevel = "string" == typeof e ? l[e] : e
                        }
                    }, {
                        key: "logHandler",
                        get: function() {
                            return this._logHandler
                        },
                        set: function(e) {
                            if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = e
                        }
                    }, {
                        key: "userLogHandler",
                        get: function() {
                            return this._userLogHandler
                        },
                        set: function(e) {
                            this._userLogHandler = e
                        }
                    }, {
                        key: "debug",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.DEBUG].concat(t)), this._logHandler.apply(this, [this, c.DEBUG].concat(t))
                        }
                    }, {
                        key: "log",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.VERBOSE].concat(t)), this._logHandler.apply(this, [this, c.VERBOSE].concat(t))
                        }
                    }, {
                        key: "info",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.INFO].concat(t)), this._logHandler.apply(this, [this, c.INFO].concat(t))
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.WARN].concat(t)), this._logHandler.apply(this, [this, c.WARN].concat(t))
                        }
                    }, {
                        key: "error",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.ERROR].concat(t)), this._logHandler.apply(this, [this, c.ERROR].concat(t))
                        }
                    }]) && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }();

            function v(e) {
                s.forEach((function(t) {
                    t.setLogLevel(e)
                }))
            }

            function y(e, t) {
                var n, r = o(s);
                try {
                    var i = function() {
                        var r = n.value,
                            o = null;
                        t && t.level && (o = l[t.level]), r.userLogHandler = null === e ? null : function(t, n) {
                            for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) i[a - 2] = arguments[a];
                            var u = i.map((function(e) {
                                if (null == e) return null;
                                if ("string" == typeof e) return e;
                                if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                                if (e instanceof Error) return e.message;
                                try {
                                    return JSON.stringify(e)
                                } catch (e) {
                                    return null
                                }
                            })).filter((function(e) {
                                return e
                            })).join(" ");
                            n >= (null != o ? o : t.logLevel) && e({
                                level: c[n].toLowerCase(),
                                message: u,
                                args: i,
                                type: t.name
                            })
                        }
                    };
                    for (r.s(); !(n = r.n()).done;) i()
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
        },
        "8U+m": function(e, t, n) {
            "use strict";
            var r = n("fe34"),
                o = n("IuUc"),
                i = n("UbBO"),
                a = n("H9WU"),
                u = n("5pEQ");

            function c(e, t) {
                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }

            function l(e, t) {
                if (t && ("object" === h(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function v(e, t, n) {
                return t && p(e.prototype, t), n && p(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var y = new u.b("@firebase/database-compat"),
                b = function(e) {
                    var t = "FIREBASE WARNING: " + e;
                    y.warn(t)
                },
                g = function(e, t, n, r) {
                    if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(Object(a.q)(e, t) + "must be a boolean.")
                },
                m = function(e, t, n) {
                    if (!n || void 0 !== t) switch (t) {
                        case "value":
                        case "child_added":
                        case "child_removed":
                        case "child_changed":
                        case "child_moved":
                            break;
                        default:
                            throw new Error(Object(a.q)(e, "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                    }
                },
                w = function() {
                    function e(t) {
                        d(this, e), this._delegate = t
                    }
                    return v(e, [{
                        key: "cancel",
                        value: function(e) {
                            Object(a.N)("OnDisconnect.cancel", 0, 1, arguments.length), Object(a.O)("OnDisconnect.cancel", "onComplete", e, !0);
                            var t = this._delegate.cancel();
                            return e && t.then((function() {
                                return e(null)
                            }), (function(t) {
                                return e(t)
                            })), t
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            Object(a.N)("OnDisconnect.remove", 0, 1, arguments.length), Object(a.O)("OnDisconnect.remove", "onComplete", e, !0);
                            var t = this._delegate.remove();
                            return e && t.then((function() {
                                return e(null)
                            }), (function(t) {
                                return e(t)
                            })), t
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            Object(a.N)("OnDisconnect.set", 1, 2, arguments.length), Object(a.O)("OnDisconnect.set", "onComplete", t, !0);
                            var n = this._delegate.set(e);
                            return t && n.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), n
                        }
                    }, {
                        key: "setWithPriority",
                        value: function(e, t, n) {
                            Object(a.N)("OnDisconnect.setWithPriority", 2, 3, arguments.length), Object(a.O)("OnDisconnect.setWithPriority", "onComplete", n, !0);
                            var r = this._delegate.setWithPriority(e, t);
                            return n && r.then((function() {
                                return n(null)
                            }), (function(e) {
                                return n(e)
                            })), r
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (Object(a.N)("OnDisconnect.update", 1, 2, arguments.length), Array.isArray(e)) {
                                for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                                e = n, b("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                            }
                            Object(a.O)("OnDisconnect.update", "onComplete", t, !0);
                            var o = this._delegate.update(e);
                            return t && o.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), o
                        }
                    }]), e
                }(),
                _ = function() {
                    function e(t, n) {
                        d(this, e), this.committed = t, this.snapshot = n
                    }
                    return v(e, [{
                        key: "toJSON",
                        value: function() {
                            return Object(a.N)("TransactionResult.toJSON", 0, 1, arguments.length), {
                                committed: this.committed,
                                snapshot: this.snapshot.toJSON()
                            }
                        }
                    }]), e
                }(),
                O = function() {
                    function e(t, n) {
                        d(this, e), this._database = t, this._delegate = n
                    }
                    return v(e, [{
                        key: "val",
                        value: function() {
                            return Object(a.N)("DataSnapshot.val", 0, 0, arguments.length), this._delegate.val()
                        }
                    }, {
                        key: "exportVal",
                        value: function() {
                            return Object(a.N)("DataSnapshot.exportVal", 0, 0, arguments.length), this._delegate.exportVal()
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return Object(a.N)("DataSnapshot.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
                        }
                    }, {
                        key: "exists",
                        value: function() {
                            return Object(a.N)("DataSnapshot.exists", 0, 0, arguments.length), this._delegate.exists()
                        }
                    }, {
                        key: "child",
                        value: function(t) {
                            return Object(a.N)("DataSnapshot.child", 0, 1, arguments.length), t = String(t), Object(i.g)("DataSnapshot.child", "path", t, !1), new e(this._database, this._delegate.child(t))
                        }
                    }, {
                        key: "hasChild",
                        value: function(e) {
                            return Object(a.N)("DataSnapshot.hasChild", 1, 1, arguments.length), Object(i.g)("DataSnapshot.hasChild", "path", e, !1), this._delegate.hasChild(e)
                        }
                    }, {
                        key: "getPriority",
                        value: function() {
                            return Object(a.N)("DataSnapshot.getPriority", 0, 0, arguments.length), this._delegate.priority
                        }
                    }, {
                        key: "forEach",
                        value: function(t) {
                            var n = this;
                            return Object(a.N)("DataSnapshot.forEach", 1, 1, arguments.length), Object(a.O)("DataSnapshot.forEach", "action", t, !1), this._delegate.forEach((function(r) {
                                return t(new e(n._database, r))
                            }))
                        }
                    }, {
                        key: "hasChildren",
                        value: function() {
                            return Object(a.N)("DataSnapshot.hasChildren", 0, 0, arguments.length), this._delegate.hasChildren()
                        }
                    }, {
                        key: "key",
                        get: function() {
                            return this._delegate.key
                        }
                    }, {
                        key: "numChildren",
                        value: function() {
                            return Object(a.N)("DataSnapshot.numChildren", 0, 0, arguments.length), this._delegate.size
                        }
                    }, {
                        key: "getRef",
                        value: function() {
                            return Object(a.N)("DataSnapshot.ref", 0, 0, arguments.length), new E(this._database, this._delegate.ref)
                        }
                    }, {
                        key: "ref",
                        get: function() {
                            return this.getRef()
                        }
                    }]), e
                }(),
                k = function() {
                    function e(t, n) {
                        d(this, e), this.database = t, this._delegate = n
                    }
                    return v(e, [{
                        key: "on",
                        value: function(t, n, r, o) {
                            var u, c = this;
                            Object(a.N)("Query.on", 2, 4, arguments.length), Object(a.O)("Query.on", "callback", n, !1);
                            var s = e.getCancelAndContextArgs_("Query.on", r, o),
                                l = function(e, t) {
                                    n.call(s.context, new O(c.database, e), t)
                                };
                            l.userCallback = n, l.context = s.context;
                            var f = null === (u = s.cancel) || void 0 === u ? void 0 : u.bind(s.context);
                            switch (t) {
                                case "value":
                                    return Object(i.B)(this._delegate, l, f), n;
                                case "child_added":
                                    return Object(i.x)(this._delegate, l, f), n;
                                case "child_removed":
                                    return Object(i.A)(this._delegate, l, f), n;
                                case "child_changed":
                                    return Object(i.y)(this._delegate, l, f), n;
                                case "child_moved":
                                    return Object(i.z)(this._delegate, l, f), n;
                                default:
                                    throw new Error(Object(a.q)("Query.on", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                            }
                        }
                    }, {
                        key: "off",
                        value: function(e, t, n) {
                            if (Object(a.N)("Query.off", 0, 3, arguments.length), m("Query.off", e, !0), Object(a.O)("Query.off", "callback", t, !0), Object(a.P)("Query.off", "context", n, !0), t) {
                                var r = function() {};
                                r.userCallback = t, r.context = n, Object(i.w)(this._delegate, e, r)
                            } else Object(i.w)(this._delegate, e)
                        }
                    }, {
                        key: "get",
                        value: function() {
                            var e = this;
                            return Object(i.q)(this._delegate).then((function(t) {
                                return new O(e.database, t)
                            }))
                        }
                    }, {
                        key: "once",
                        value: function(t, n, r, o) {
                            var u = this;
                            Object(a.N)("Query.once", 1, 4, arguments.length), Object(a.O)("Query.once", "callback", n, !0);
                            var c = e.getCancelAndContextArgs_("Query.once", r, o),
                                s = new a.a,
                                l = function(e, t) {
                                    var r = new O(u.database, e);
                                    n && n.call(c.context, r, t), s.resolve(r)
                                };
                            l.userCallback = n, l.context = c.context;
                            var f = function(e) {
                                c.cancel && c.cancel.call(c.context, e), s.reject(e)
                            };
                            switch (t) {
                                case "value":
                                    Object(i.B)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_added":
                                    Object(i.x)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_removed":
                                    Object(i.A)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_changed":
                                    Object(i.y)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_moved":
                                    Object(i.z)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                default:
                                    throw new Error(Object(a.q)("Query.once", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                            }
                            return s.promise
                        }
                    }, {
                        key: "limitToFirst",
                        value: function(t) {
                            return Object(a.N)("Query.limitToFirst", 1, 1, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.u)(t)))
                        }
                    }, {
                        key: "limitToLast",
                        value: function(t) {
                            return Object(a.N)("Query.limitToLast", 1, 1, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.v)(t)))
                        }
                    }, {
                        key: "orderByChild",
                        value: function(t) {
                            return Object(a.N)("Query.orderByChild", 1, 1, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.C)(t)))
                        }
                    }, {
                        key: "orderByKey",
                        value: function() {
                            return Object(a.N)("Query.orderByKey", 0, 0, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.D)()))
                        }
                    }, {
                        key: "orderByPriority",
                        value: function() {
                            return Object(a.N)("Query.orderByPriority", 0, 0, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.E)()))
                        }
                    }, {
                        key: "orderByValue",
                        value: function() {
                            return Object(a.N)("Query.orderByValue", 0, 0, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.F)()))
                        }
                    }, {
                        key: "startAt",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.N)("Query.startAt", 0, 2, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.R)(t, n)))
                        }
                    }, {
                        key: "startAfter",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.N)("Query.startAfter", 0, 2, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.Q)(t, n)))
                        }
                    }, {
                        key: "endAt",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.N)("Query.endAt", 0, 2, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.l)(t, n)))
                        }
                    }, {
                        key: "endBefore",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.N)("Query.endBefore", 0, 2, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.m)(t, n)))
                        }
                    }, {
                        key: "equalTo",
                        value: function(t, n) {
                            return Object(a.N)("Query.equalTo", 1, 2, arguments.length), new e(this.database, Object(i.H)(this._delegate, Object(i.n)(t, n)))
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return Object(a.N)("Query.toString", 0, 0, arguments.length), this._delegate.toString()
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return Object(a.N)("Query.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            if (Object(a.N)("Query.isEqual", 1, 1, arguments.length), !(t instanceof e)) {
                                var n = "Query.isEqual failed: First argument must be an instance of firebase.database.Query.";
                                throw new Error(n)
                            }
                            return this._delegate.isEqual(t._delegate)
                        }
                    }, {
                        key: "ref",
                        get: function() {
                            return new E(this.database, new i.d(this._delegate._repo, this._delegate._path))
                        }
                    }], [{
                        key: "getCancelAndContextArgs_",
                        value: function(e, t, n) {
                            var r = {
                                cancel: void 0,
                                context: void 0
                            };
                            if (t && n) r.cancel = t, Object(a.O)(e, "cancel", r.cancel, !0), r.context = n, Object(a.P)(e, "context", r.context, !0);
                            else if (t)
                                if ("object" === h(t) && null !== t) r.context = t;
                                else {
                                    if ("function" != typeof t) throw new Error(Object(a.q)(e, "cancelOrContext") + " must either be a cancel callback or a context object.");
                                    r.cancel = t
                                } return r
                        }
                    }]), e
                }(),
                E = function(e) {
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
                        }), t && c(e, t)
                    }(n, e);
                    var t = s(n);

                    function n(e, r) {
                        var o;
                        return d(this, n), (o = t.call(this, e, new i.b(r._repo, r._path, new i.c, !1))).database = e, o._delegate = r, o
                    }
                    return v(n, [{
                        key: "getKey",
                        value: function() {
                            return Object(a.N)("Reference.key", 0, 0, arguments.length), this._delegate.key
                        }
                    }, {
                        key: "child",
                        value: function(e) {
                            return Object(a.N)("Reference.child", 1, 1, arguments.length), "number" == typeof e && (e = String(e)), new n(this.database, Object(i.i)(this._delegate, e))
                        }
                    }, {
                        key: "getParent",
                        value: function() {
                            Object(a.N)("Reference.parent", 0, 0, arguments.length);
                            var e = this._delegate.parent;
                            return e ? new n(this.database, e) : null
                        }
                    }, {
                        key: "getRoot",
                        value: function() {
                            return Object(a.N)("Reference.root", 0, 0, arguments.length), new n(this.database, this._delegate.root)
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            Object(a.N)("Reference.set", 1, 2, arguments.length), Object(a.O)("Reference.set", "onComplete", t, !0);
                            var n = Object(i.N)(this._delegate, e);
                            return t && n.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), n
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (Object(a.N)("Reference.update", 1, 2, arguments.length), Array.isArray(e)) {
                                for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                                e = n, b("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                            }
                            Object(i.h)("Reference.update", this._delegate._path), Object(a.O)("Reference.update", "onComplete", t, !0);
                            var o = Object(i.S)(this._delegate, e);
                            return t && o.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), o
                        }
                    }, {
                        key: "setWithPriority",
                        value: function(e, t, n) {
                            Object(a.N)("Reference.setWithPriority", 2, 3, arguments.length), Object(a.O)("Reference.setWithPriority", "onComplete", n, !0);
                            var r = Object(i.P)(this._delegate, e, t);
                            return n && r.then((function() {
                                return n(null)
                            }), (function(e) {
                                return n(e)
                            })), r
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            Object(a.N)("Reference.remove", 0, 1, arguments.length), Object(a.O)("Reference.remove", "onComplete", e, !0);
                            var t = Object(i.K)(this._delegate);
                            return e && t.then((function() {
                                return e(null)
                            }), (function(t) {
                                return e(t)
                            })), t
                        }
                    }, {
                        key: "transaction",
                        value: function(e, t, n) {
                            var r = this;
                            Object(a.N)("Reference.transaction", 1, 3, arguments.length), Object(a.O)("Reference.transaction", "transactionUpdate", e, !1), Object(a.O)("Reference.transaction", "onComplete", t, !0), g("Reference.transaction", "applyLocally", n, !0);
                            var o = Object(i.L)(this._delegate, e, {
                                applyLocally: n
                            }).then((function(e) {
                                return new _(e.committed, new O(r.database, e.snapshot))
                            }));
                            return t && o.then((function(e) {
                                return t(null, e.committed, e.snapshot)
                            }), (function(e) {
                                return t(e, !1, null)
                            })), o
                        }
                    }, {
                        key: "setPriority",
                        value: function(e, t) {
                            Object(a.N)("Reference.setPriority", 1, 2, arguments.length), Object(a.O)("Reference.setPriority", "onComplete", t, !0);
                            var n = Object(i.O)(this._delegate, e);
                            return t && n.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), n
                        }
                    }, {
                        key: "push",
                        value: function(e, t) {
                            var r = this;
                            Object(a.N)("Reference.push", 0, 2, arguments.length), Object(a.O)("Reference.push", "onComplete", t, !0);
                            var o = Object(i.G)(this._delegate, e),
                                u = o.then((function(e) {
                                    return new n(r.database, e)
                                }));
                            t && u.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            }));
                            var c = new n(this.database, o);
                            return c.then = u.then.bind(u), c.catch = u.catch.bind(u, void 0), c
                        }
                    }, {
                        key: "onDisconnect",
                        value: function() {
                            return Object(i.h)("Reference.onDisconnect", this._delegate._path), new w(new i.a(this._delegate._repo, this._delegate._path))
                        }
                    }, {
                        key: "key",
                        get: function() {
                            return this.getKey()
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            return this.getParent()
                        }
                    }, {
                        key: "root",
                        get: function() {
                            return this.getRoot()
                        }
                    }]), n
                }(k),
                j = function() {
                    function e(t, n) {
                        var r = this;
                        d(this, e), this._delegate = t, this.app = n, this.INTERNAL = {
                            delete: function() {
                                return r._delegate._delete()
                            },
                            forceWebSockets: i.p,
                            forceLongPolling: i.o
                        }
                    }
                    return v(e, [{
                        key: "useEmulator",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            Object(i.j)(this._delegate, e, t, n)
                        }
                    }, {
                        key: "ref",
                        value: function(e) {
                            if (Object(a.N)("database.ref", 0, 1, arguments.length), e instanceof E) {
                                var t = Object(i.J)(this._delegate, e.toString());
                                return new E(this, t)
                            }
                            var n = Object(i.I)(this._delegate, e);
                            return new E(this, n)
                        }
                    }, {
                        key: "refFromURL",
                        value: function(e) {
                            var t = "database.refFromURL";
                            Object(a.N)(t, 1, 1, arguments.length);
                            var n = Object(i.J)(this._delegate, e);
                            return new E(this, n)
                        }
                    }, {
                        key: "goOffline",
                        value: function() {
                            return Object(a.N)("database.goOffline", 0, 0, arguments.length), Object(i.r)(this._delegate)
                        }
                    }, {
                        key: "goOnline",
                        value: function() {
                            return Object(a.N)("database.goOnline", 0, 0, arguments.length), Object(i.s)(this._delegate)
                        }
                    }]), e
                }();
            j.ServerValue = {
                TIMESTAMP: Object(i.M)(),
                increment: function(e) {
                    return Object(i.t)(e)
                }
            };
            var S, I = Object.freeze({
                    __proto__: null,
                    initStandalone:
                        /**
                         * @license
                         * Copyright 2017 Google LLC
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        function(e) {
                            var t = e.app,
                                n = e.url,
                                r = e.version,
                                a = e.customAuthImpl,
                                u = e.namespace,
                                c = e.nodeAdmin,
                                s = void 0 !== c && c;
                            Object(i.f)(r);
                            var l = new o.c("auth-internal", new o.b("database-standalone"));
                            return l.setComponent(new o.a("auth-internal", (function() {
                                return a
                            }), "PRIVATE")), {
                                instance: new j(Object(i.e)(t, l, void 0, n, s), t),
                                namespace: u
                            }
                        }
                }),
                x = j.ServerValue;
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            (S = r.a).INTERNAL.registerComponent(new o.a("database-compat", (function(e, t) {
                var n = t.instanceIdentifier,
                    r = e.getProvider("app-compat").getImmediate(),
                    o = e.getProvider("database").getImmediate({
                        identifier: n
                    });
                return new j(o, r)
            }), "PUBLIC").setServiceProps({
                Reference: E,
                Query: k,
                Database: j,
                DataSnapshot: O,
                enableLogging: i.k,
                INTERNAL: I,
                ServerValue: x
            }).setMultipleInstances(!0)), S.registerVersion("@firebase/database-compat", "0.2.6")
        },
        H1q0: function(e, t, n) {
            "use strict";
            n.d(t, "x", (function() {
                return H
            })), n.d(t, "F", (function() {
                return B
            }));
            var r = n("R7df");
            n.d(t, "a", (function() {
                return r.b
            })), n.d(t, "b", (function() {
                return r.e
            })), n.d(t, "c", (function() {
                return r.h
            })), n.d(t, "d", (function() {
                return r.i
            })), n.d(t, "e", (function() {
                return r.m
            })), n.d(t, "f", (function() {
                return r.k
            })), n.d(t, "g", (function() {
                return r.f
            })), n.d(t, "h", (function() {
                return r.n
            })), n.d(t, "i", (function() {
                return r.j
            })), n.d(t, "j", (function() {
                return r.sb
            })), n.d(t, "k", (function() {
                return r.tb
            })), n.d(t, "l", (function() {
                return r.l
            })), n.d(t, "m", (function() {
                return r.L
            })), n.d(t, "n", (function() {
                return r.o
            })), n.d(t, "o", (function() {
                return r.p
            })), n.d(t, "p", (function() {
                return r.eb
            })), n.d(t, "q", (function() {
                return r.J
            })), n.d(t, "r", (function() {
                return r.ab
            })), n.d(t, "s", (function() {
                return r.K
            })), n.d(t, "t", (function() {
                return r.fb
            })), n.d(t, "u", (function() {
                return r.G
            })), n.d(t, "v", (function() {
                return r.H
            })), n.d(t, "w", (function() {
                return r.gb
            })), n.d(t, "y", (function() {
                return r.x
            })), n.d(t, "z", (function() {
                return r.hb
            })), n.d(t, "A", (function() {
                return r.qb
            })), n.d(t, "B", (function() {
                return r.u
            })), n.d(t, "C", (function() {
                return r.y
            })), n.d(t, "D", (function() {
                return r.w
            })), n.d(t, "E", (function() {
                return r.d
            })), n.d(t, "G", (function() {
                return r.A
            })), n.d(t, "H", (function() {
                return r.c
            })), n.d(t, "I", (function() {
                return r.M
            })), n.d(t, "J", (function() {
                return r.T
            })), n.d(t, "K", (function() {
                return r.U
            })), n.d(t, "L", (function() {
                return r.pb
            })), n.d(t, "M", (function() {
                return r.g
            })), n.d(t, "N", (function() {
                return r.ob
            })), n.d(t, "O", (function() {
                return r.D
            })), n.d(t, "P", (function() {
                return r.s
            })), n.d(t, "Q", (function() {
                return r.rb
            })), n.d(t, "R", (function() {
                return r.jb
            })), n.d(t, "S", (function() {
                return r.mb
            })), n.d(t, "T", (function() {
                return r.V
            })), n.d(t, "U", (function() {
                return r.t
            })), n.d(t, "V", (function() {
                return r.ub
            })), n.d(t, "W", (function() {
                return r.kb
            })), n.d(t, "X", (function() {
                return r.nb
            })), n.d(t, "Y", (function() {
                return r.N
            })), n.d(t, "Z", (function() {
                return r.v
            })), n.d(t, "ab", (function() {
                return r.C
            })), n.d(t, "bb", (function() {
                return r.q
            })), n.d(t, "cb", (function() {
                return r.r
            })), n.d(t, "db", (function() {
                return r.a
            })), n.d(t, "eb", (function() {
                return r.B
            })), n.d(t, "fb", (function() {
                return r.E
            })), n.d(t, "gb", (function() {
                return r.vb
            })), n.d(t, "hb", (function() {
                return r.ib
            })), n.d(t, "ib", (function() {
                return r.lb
            })), n.d(t, "jb", (function() {
                return r.S
            })), n.d(t, "kb", (function() {
                return r.Q
            })), n.d(t, "lb", (function() {
                return r.R
            })), n.d(t, "mb", (function() {
                return r.wb
            })), n.d(t, "nb", (function() {
                return r.P
            })), n.d(t, "ob", (function() {
                return r.O
            })), n.d(t, "pb", (function() {
                return r.z
            }));
            var o = n("H9WU");
            n("WJvL"), n("5pEQ"), n("IuUc");

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    a = r.asyncIterator || "@@asyncIterator",
                    u = r.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, r) {
                    var o = t && t.prototype instanceof d ? t : d,
                        i = Object.create(o.prototype),
                        a = new j(r || []);
                    return i._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return I()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var u = O(a, n);
                                    if (u) {
                                        if (u === h) continue;
                                        return u
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = f(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, a), i
                }

                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function d() {}

                function p() {}

                function v() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    g = b && b(b(S([])));
                g && g !== t && n.call(g, o) && (y = g);
                var m = v.prototype = d.prototype = Object.create(y);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var r;
                    this._invoke = function(o, a) {
                        function u() {
                            return new t((function(r, u) {
                                ! function r(o, a, u, c) {
                                    var s = f(e[o], e, a);
                                    if ("throw" !== s.type) {
                                        var l = s.arg,
                                            h = l.value;
                                        return h && "object" == i(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            r("next", e, u, c)
                                        }), (function(e) {
                                            r("throw", e, u, c)
                                        })) : t.resolve(h).then((function(e) {
                                            l.value = e, u(l)
                                        }), (function(e) {
                                            return r("throw", e, u, c)
                                        }))
                                    }
                                    c(s.arg)
                                }(o, a, r, u)
                            }))
                        }
                        return r = r ? r.then(u, u) : u()
                    }
                }

                function O(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, O(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var r = f(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function S(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = v, s(m, "constructor", v), s(v, "constructor", p), p.displayName = s(v, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, s(e, u, "GeneratorFunction")), e.prototype = Object.create(m), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(_.prototype), s(_.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(l(t, n, r, o), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, w(m), s(m, u, "Generator"), s(m, o, (function() {
                    return this
                })), s(m, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = S, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    E(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function h() {
                return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                    var r = d(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
                    }
                }).apply(this, arguments)
            }

            function d(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = b(e)););
                return e
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function v(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                if (t && ("object" === i(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function g(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            g(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            g(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function w() {
                return window
            }
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function _(e, t, n) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = m(c().mark((function e(t, n, o) {
                    var i, a, u, s, l;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = w(), u = a.BuildInfo, Object(r.X)(n.sessionId, "AuthEvent did not contain a session ID"), e.next = 4, x(n.sessionId);
                            case 4:
                                return s = e.sent, l = {}, Object(r.Y)() ? l.ibi = u.packageName : Object(r.Z)() ? l.apn = u.packageName : Object(r.ab)(t, "operation-not-supported-in-this-environment"), u.displayName && (l.appDisplayName = u.displayName), l.sessionId = s, e.abrupt("return", Object(r.bb)(t, o, n.type, void 0, null !== (i = n.eventId) && void 0 !== i ? i : void 0, l));
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function k() {
                return (k = m(c().mark((function e(t) {
                    var n, o, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = w(), o = n.BuildInfo, i = {}, Object(r.Y)() ? i.iosBundleId = o.packageName : Object(r.Z)() ? i.androidPackageName = o.packageName : Object(r.ab)(t, "operation-not-supported-in-this-environment"), e.next = 5, Object(r.cb)(t, i);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function E(e) {
                var t = w().cordova;
                return new Promise((function(n) {
                    t.plugins.browsertab.isAvailable((function(o) {
                        var i = null;
                        o ? t.plugins.browsertab.openUrl(e) : i = t.InAppBrowser.open(e, Object(r.W)() ? "_blank" : "_system", "location=yes"), n(i)
                    }))
                }))
            }

            function j(e, t, n) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = m(c().mark((function e(t, n, o) {
                    var i, a, u;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = w(), a = i.cordova, u = function() {}, e.prev = 2, e.next = 5, new Promise((function(e, i) {
                                    var c = null;

                                    function s() {
                                        var t;
                                        e();
                                        var n = null === (t = a.plugins.browsertab) || void 0 === t ? void 0 : t.close;
                                        "function" == typeof n && n(), "function" == typeof(null == o ? void 0 : o.close) && o.close()
                                    }

                                    function l() {
                                        c || (c = window.setTimeout((function() {
                                            i(Object(r.db)(t, "redirect-cancelled-by-user"))
                                        }), 2e3))
                                    }

                                    function f() {
                                        "visible" === (null === document || void 0 === document ? void 0 : document.visibilityState) && l()
                                    }
                                    n.addPassiveListener(s), document.addEventListener("resume", l, !1), Object(r.Z)() && document.addEventListener("visibilitychange", f, !1), u = function() {
                                        n.removePassiveListener(s), document.removeEventListener("resume", l, !1), document.removeEventListener("visibilitychange", f, !1), c && window.clearTimeout(c)
                                    }
                                }));
                            case 5:
                                return e.prev = 5, u(), e.finish(5);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, , 5, 8]
                    ])
                })))).apply(this, arguments)
            }

            function I(e) {
                var t, n, o, i, a, u, c, s, l, f, h = w();
                Object(r.eb)("function" == typeof(null === (t = null == h ? void 0 : h.universalLinks) || void 0 === t ? void 0 : t.subscribe), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-universal-links-plugin-fix"
                }), Object(r.eb)(void 0 !== (null === (n = null == h ? void 0 : h.BuildInfo) || void 0 === n ? void 0 : n.packageName), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-buildInfo"
                }), Object(r.eb)("function" == typeof(null === (a = null === (i = null === (o = null == h ? void 0 : h.cordova) || void 0 === o ? void 0 : o.plugins) || void 0 === i ? void 0 : i.browsertab) || void 0 === a ? void 0 : a.openUrl), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-browsertab"
                }), Object(r.eb)("function" == typeof(null === (s = null === (c = null === (u = null == h ? void 0 : h.cordova) || void 0 === u ? void 0 : u.plugins) || void 0 === c ? void 0 : c.browsertab) || void 0 === s ? void 0 : s.isAvailable), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-browsertab"
                }), Object(r.eb)("function" == typeof(null === (f = null === (l = null == h ? void 0 : h.cordova) || void 0 === l ? void 0 : l.InAppBrowser) || void 0 === f ? void 0 : f.open), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-inappbrowser"
                })
            }

            function x(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = m(c().mark((function e(t) {
                    var n, r, o;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = A(t), e.next = 3, crypto.subtle.digest("SHA-256", n);
                            case 3:
                                return r = e.sent, o = Array.from(new Uint8Array(r)), e.abrupt("return", o.map((function(e) {
                                    return e.toString(16).padStart(2, "0")
                                })).join(""));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function A(e) {
                if (Object(r.X)(/[0-9a-zA-Z]+/.test(e), "Can only convert alpha-numeric strings"), "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
                return n
            }
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var N = function(e) {
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
                    }), t && p(e, t)
                }(r, e);
                var t, n = v(r);

                function r() {
                    var e;
                    return s(this, r), (e = n.apply(this, arguments)).passiveListeners = new Set, e.initPromise = new Promise((function(t) {
                        e.resolveInialized = t
                    })), e
                }
                return f(r, [{
                    key: "addPassiveListener",
                    value: function(e) {
                        this.passiveListeners.add(e)
                    }
                }, {
                    key: "removePassiveListener",
                    value: function(e) {
                        this.passiveListeners.delete(e)
                    }
                }, {
                    key: "resetRedirect",
                    value: function() {
                        this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1
                    }
                }, {
                    key: "onEvent",
                    value: function(e) {
                        return this.resolveInialized(), this.passiveListeners.forEach((function(t) {
                            return t(e)
                        })), h(b(r.prototype), "onEvent", this).call(this, e)
                    }
                }, {
                    key: "initialized",
                    value: (t = m(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.initPromise;
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }]), r
            }(r.F);

            function P(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return {
                    type: t,
                    eventId: n,
                    urlResponse: null,
                    sessionId: D(),
                    postBody: null,
                    tenantId: e.tenantId,
                    error: Object(r.db)(e, "no-auth-event")
                }
            }

            function C(e, t) {
                return M()._set(U(e), t)
            }

            function R(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = m(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, M()._get(U(t));
                            case 2:
                                if (!(n = e.sent)) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 6, M()._remove(U(t));
                            case 6:
                                return e.abrupt("return", n);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function $(e, t) {
                var n, o, i = function(e) {
                    var t = F(e),
                        n = t.link ? decodeURIComponent(t.link) : void 0,
                        r = F(n).link,
                        o = t.deep_link_id ? decodeURIComponent(t.deep_link_id) : void 0;
                    return F(o).link || o || r || n || e
                }(t);
                if (i.includes("/__/auth/callback")) {
                    var a = F(i),
                        u = a.firebaseError ? function(e) {
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                return null
                            }
                        }(decodeURIComponent(a.firebaseError)) : null,
                        c = null === (o = null === (n = null == u ? void 0 : u.code) || void 0 === n ? void 0 : n.split("auth/")) || void 0 === o ? void 0 : o[1],
                        s = c ? Object(r.db)(c) : null;
                    return s ? {
                        type: e.type,
                        eventId: e.eventId,
                        tenantId: e.tenantId,
                        error: s,
                        urlResponse: null,
                        sessionId: null,
                        postBody: null
                    } : {
                        type: e.type,
                        eventId: e.eventId,
                        tenantId: e.tenantId,
                        sessionId: e.sessionId,
                        urlResponse: i,
                        postBody: null
                    }
                }
                return null
            }

            function D() {
                for (var e = [], t = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = 0; n < 20; n++) {
                    var r = Math.floor(Math.random() * t.length);
                    e.push(t.charAt(r))
                }
                return e.join("")
            }

            function M() {
                return Object(r.fb)(r.hb)
            }

            function U(e) {
                return Object(r.gb)("authEvent", e.config.apiKey, e.name)
            }

            function F(e) {
                if (!(null == e ? void 0 : e.includes("?"))) return {};
                var t = a(e.split("?")),
                    n = (t[0], t.slice(1));
                return Object(o.I)(n.join("?"))
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var B = function() {
                function e() {
                    s(this, e), this._redirectPersistence = r.u, this._shouldInitProactively = !0, this.eventManagers = new Map, this.originValidationPromises = {}, this._completeRedirectFn = r.G, this._overrideRedirectResult = r.H
                }
                var t, n;
                return f(e, [{
                    key: "_initialize",
                    value: (n = m(c().mark((function e(t) {
                        var n, r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t._key(), (r = this.eventManagers.get(n)) || (r = new N(t), this.eventManagers.set(n, r), this.attachCallbackListeners(t, r)), e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "_openPopup",
                    value: function(e) {
                        Object(r.ab)(e, "operation-not-supported-in-this-environment")
                    }
                }, {
                    key: "_openRedirect",
                    value: (t = m(c().mark((function e(t, n, o, i) {
                        var a, u, s, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return I(t), e.next = 3, this._initialize(t);
                                case 3:
                                    return a = e.sent, e.next = 6, a.initialized();
                                case 6:
                                    return a.resetRedirect(), Object(r.I)(), e.next = 10, this._originValidation(t);
                                case 10:
                                    return u = P(t, o, i), e.next = 13, C(t, u);
                                case 13:
                                    return e.next = 15, _(t, u, n);
                                case 15:
                                    return s = e.sent, e.next = 18, E(s);
                                case 18:
                                    return l = e.sent, e.abrupt("return", j(t, a, l));
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, n, r, o) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "_isIframeWebStorageSupported",
                    value: function(e, t) {
                        throw new Error("Method not implemented.")
                    }
                }, {
                    key: "_originValidation",
                    value: function(e) {
                        var t = e._key();
                        return this.originValidationPromises[t] || (this.originValidationPromises[t] = function(e) {
                            return k.apply(this, arguments)
                        }(e)), this.originValidationPromises[t]
                    }
                }, {
                    key: "attachCallbackListeners",
                    value: function(e, t) {
                        var n = w(),
                            r = n.universalLinks,
                            o = n.handleOpenURL,
                            i = n.BuildInfo,
                            a = setTimeout(m(c().mark((function n() {
                                return c().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, R(e);
                                        case 2:
                                            t.onEvent(W());
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), 500),
                            u = function() {
                                var n = m(c().mark((function n(r) {
                                    var o, i;
                                    return c().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return clearTimeout(a), n.next = 3, R(e);
                                            case 3:
                                                o = n.sent, i = null, o && (null == r ? void 0 : r.url) && (i = $(o, r.url)), t.onEvent(i || W());
                                            case 7:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }();
                        void 0 !== r && "function" == typeof r.subscribe && r.subscribe(null, u);
                        var s = o,
                            l = "".concat(i.packageName.toLowerCase(), "://");
                        w().handleOpenURL = function() {
                            var e = m(c().mark((function e(t) {
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.toLowerCase().startsWith(l) && u({
                                                    url: t
                                                }), "function" == typeof s) try {
                                                s(t)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            case 2: case "end": return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }
                }]), e
            }();

            function W() {
                return {
                    type: "unknown",
                    eventId: null,
                    sessionId: null,
                    urlResponse: null,
                    postBody: null,
                    tenantId: null,
                    error: Object(r.db)("no-auth-event")
                }
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function H(e, t) {
                Object(r.J)(e)._logFramework(t)
            }
        },
        H9WU: function(e, t, n) {
            "use strict";
            (function(e) {
                function r(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null == n) return;
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }(e, t) || o(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                    }
                }

                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function a(e, t) {
                    if (t && ("object" === d(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return u(e)
                }

                function u(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function c(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return (c = function(e) {
                        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                        var n;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, r)
                        }

                        function r() {
                            return s(e, arguments, h(this).constructor)
                        }
                        return r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), f(r, e)
                    })(e)
                }

                function s(e, t, n) {
                    return (s = l() ? Reflect.construct.bind() : function(e, t, n) {
                        var r = [null];
                        r.push.apply(r, t);
                        var o = new(Function.bind.apply(e, r));
                        return n && f(o, n.prototype), o
                    }).apply(null, arguments)
                }

                function l() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }

                function f(e, t) {
                    return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function h(e) {
                    return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function d(e) {
                    return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function p(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function v(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function y(e, t, n) {
                    return t && v(e.prototype, t), n && v(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                n.d(t, "a", (function() {
                    return L
                })), n.d(t, "b", (function() {
                    return W
                })), n.d(t, "c", (function() {
                    return B
                })), n.d(t, "d", (function() {
                    return ie
                })), n.d(t, "e", (function() {
                    return w
                })), n.d(t, "f", (function() {
                    return _
                })), n.d(t, "g", (function() {
                    return k
                })), n.d(t, "h", (function() {
                    return S
                })), n.d(t, "i", (function() {
                    return E
                })), n.d(t, "j", (function() {
                    return j
                })), n.d(t, "k", (function() {
                    return Y
                })), n.d(t, "l", (function() {
                    return A
                })), n.d(t, "m", (function() {
                    return ae
                })), n.d(t, "n", (function() {
                    return I
                })), n.d(t, "o", (function() {
                    return ee
                })), n.d(t, "p", (function() {
                    return x
                })), n.d(t, "q", (function() {
                    return le
                })), n.d(t, "r", (function() {
                    return oe
                })), n.d(t, "s", (function() {
                    return ve
                })), n.d(t, "t", (function() {
                    return N
                })), n.d(t, "u", (function() {
                    return q
                })), n.d(t, "v", (function() {
                    return R
                })), n.d(t, "w", (function() {
                    return T
                })), n.d(t, "x", (function() {
                    return Z
                })), n.d(t, "y", (function() {
                    return D
                })), n.d(t, "z", (function() {
                    return U
                })), n.d(t, "A", (function() {
                    return P
                })), n.d(t, "B", (function() {
                    return C
                })), n.d(t, "C", (function() {
                    return M
                })), n.d(t, "D", (function() {
                    return $
                })), n.d(t, "E", (function() {
                    return J
                })), n.d(t, "F", (function() {
                    return V
                })), n.d(t, "G", (function() {
                    return X
                })), n.d(t, "H", (function() {
                    return ne
                })), n.d(t, "I", (function() {
                    return re
                })), n.d(t, "J", (function() {
                    return K
                })), n.d(t, "K", (function() {
                    return pe
                })), n.d(t, "L", (function() {
                    return de
                })), n.d(t, "M", (function() {
                    return G
                })), n.d(t, "N", (function() {
                    return se
                })), n.d(t, "O", (function() {
                    return fe
                })), n.d(t, "P", (function() {
                    return he
                })), n.d(t, "Q", (function() {
                    return F
                }));
                var b = !1,
                    g = !1,
                    m = "${JSCORE_VERSION}",
                    w = function(e, t) {
                        if (!e) throw _(t)
                    },
                    _ = function(e) {
                        return new Error("Firebase Database (" + m + ") INTERNAL ASSERT FAILED: " + e)
                    },
                    O = function(e) {
                        for (var t = [], n = 0, r = 0; r < e.length; r++) {
                            var o = e.charCodeAt(r);
                            o < 128 ? t[n++] = o : o < 2048 ? (t[n++] = o >> 6 | 192, t[n++] = 63 & o | 128) : 55296 == (64512 & o) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128) : (t[n++] = o >> 12 | 224, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128)
                        }
                        return t
                    },
                    k = {
                        byteToCharMap_: null,
                        charToByteMap_: null,
                        byteToCharMapWebSafe_: null,
                        charToByteMapWebSafe_: null,
                        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        get ENCODED_VALS() {
                            return this.ENCODED_VALS_BASE + "+/="
                        },
                        get ENCODED_VALS_WEBSAFE() {
                            return this.ENCODED_VALS_BASE + "-_."
                        },
                        HAS_NATIVE_SUPPORT: "function" == typeof atob,
                        encodeByteArray: function(e, t) {
                            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                            this.init_();
                            for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], o = 0; o < e.length; o += 3) {
                                var i = e[o],
                                    a = o + 1 < e.length,
                                    u = a ? e[o + 1] : 0,
                                    c = o + 2 < e.length,
                                    s = c ? e[o + 2] : 0,
                                    l = i >> 2,
                                    f = (3 & i) << 4 | u >> 4,
                                    h = (15 & u) << 2 | s >> 6,
                                    d = 63 & s;
                                c || (d = 64, a || (h = 64)), r.push(n[l], n[f], n[h], n[d])
                            }
                            return r.join("")
                        },
                        encodeString: function(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(O(e), t)
                        },
                        decodeString: function(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                                for (var t = [], n = 0, r = 0; n < e.length;) {
                                    var o = e[n++];
                                    if (o < 128) t[r++] = String.fromCharCode(o);
                                    else if (o > 191 && o < 224) {
                                        var i = e[n++];
                                        t[r++] = String.fromCharCode((31 & o) << 6 | 63 & i)
                                    } else if (o > 239 && o < 365) {
                                        var a = ((7 & o) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                                        t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a))
                                    } else {
                                        var u = e[n++],
                                            c = e[n++];
                                        t[r++] = String.fromCharCode((15 & o) << 12 | (63 & u) << 6 | 63 & c)
                                    }
                                }
                                return t.join("")
                            }(this.decodeStringToByteArray(e, t))
                        },
                        decodeStringToByteArray: function(e, t) {
                            this.init_();
                            for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], o = 0; o < e.length;) {
                                var i = n[e.charAt(o++)],
                                    a = o < e.length ? n[e.charAt(o)] : 0,
                                    u = ++o < e.length ? n[e.charAt(o)] : 64,
                                    c = ++o < e.length ? n[e.charAt(o)] : 64;
                                if (++o, null == i || null == a || null == u || null == c) throw Error();
                                var s = i << 2 | a >> 4;
                                if (r.push(s), 64 !== u) {
                                    var l = a << 4 & 240 | u >> 2;
                                    if (r.push(l), 64 !== c) {
                                        var f = u << 6 & 192 | c;
                                        r.push(f)
                                    }
                                }
                            }
                            return r
                        },
                        init_: function() {
                            if (!this.byteToCharMap_) {
                                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                                for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                            }
                        }
                    },
                    E = function(e) {
                        var t = O(e);
                        return k.encodeByteArray(t, !0)
                    },
                    j = function(e) {
                        return E(e).replace(/\./g, "")
                    },
                    S = function(e) {
                        try {
                            return k.decodeString(e, !0)
                        } catch (e) {
                            console.error("base64Decode failed: ", e)
                        }
                        return null
                    };
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function I(e) {
                    return x(void 0, e)
                }

                function x(e, t) {
                    if (!(t instanceof Object)) return t;
                    switch (t.constructor) {
                        case Date:
                            return new Date(t.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return t
                    }
                    for (var n in t) t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = x(e[n], t[n]));
                    return e
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var L = function() {
                    function e() {
                        var t = this;
                        p(this, e), this.reject = function() {}, this.resolve = function() {}, this.promise = new Promise((function(e, n) {
                            t.resolve = e, t.reject = n
                        }))
                    }
                    return y(e, [{
                        key: "wrapCallback",
                        value: function(e) {
                            var t = this;
                            return function(n, r) {
                                n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch((function() {})), 1 === e.length ? e(n) : e(n, r))
                            }
                        }
                    }]), e
                }();
                /**
                 * @license
                 * Copyright 2021 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function A(e, t) {
                    if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                    var n = t || "demo-project",
                        r = e.iat || 0,
                        o = e.sub || e.user_id;
                    if (!o) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                    var i = Object.assign({
                        iss: "https://securetoken.google.com/".concat(n),
                        aud: n,
                        iat: r,
                        exp: r + 3600,
                        auth_time: r,
                        sub: o,
                        user_id: o,
                        firebase: {
                            sign_in_provider: "custom",
                            identities: {}
                        }
                    }, e);
                    return [j(JSON.stringify({
                        alg: "none",
                        type: "JWT"
                    })), j(JSON.stringify(i)), ""].join(".")
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function N() {
                    return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
                }

                function P() {
                    return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())
                }

                function C() {
                    try {
                        return "[object process]" === Object.prototype.toString.call(e.process)
                    } catch (e) {
                        return !1
                    }
                }

                function R() {
                    return "object" === ("undefined" == typeof self ? "undefined" : d(self)) && self.self === self
                }

                function T() {
                    var e = "object" === ("undefined" == typeof chrome ? "undefined" : d(chrome)) ? chrome.runtime : "object" === ("undefined" == typeof browser ? "undefined" : d(browser)) ? browser.runtime : void 0;
                    return "object" === d(e) && void 0 !== e.id
                }

                function $() {
                    return "object" === ("undefined" == typeof navigator ? "undefined" : d(navigator)) && "ReactNative" === navigator.product
                }

                function D() {
                    var e = N();
                    return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
                }

                function M() {
                    return !0 === b || !0 === g
                }

                function U() {
                    return "object" === ("undefined" == typeof indexedDB ? "undefined" : d(indexedDB))
                }

                function F() {
                    return new Promise((function(e, t) {
                        try {
                            var n = !0,
                                r = "validate-browser-context-for-indexeddb-analytics-module",
                                o = self.indexedDB.open(r);
                            o.onsuccess = function() {
                                o.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                            }, o.onupgradeneeded = function() {
                                n = !1
                            }, o.onerror = function() {
                                var e;
                                t((null === (e = o.error) || void 0 === e ? void 0 : e.message) || "")
                            }
                        } catch (e) {
                            t(e)
                        }
                    }))
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var B = function(e) {
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
                            }), t && f(e, t)
                        }(o, e);
                        var t, n, r = (t = o, n = l(), function() {
                            var e, r = h(t);
                            if (n) {
                                var o = h(this).constructor;
                                e = Reflect.construct(r, arguments, o)
                            } else e = r.apply(this, arguments);
                            return a(this, e)
                        });

                        function o(e, t, n) {
                            var i;
                            return p(this, o), (i = r.call(this, t)).code = e, i.customData = n, i.name = "FirebaseError", Object.setPrototypeOf(u(i), o.prototype), Error.captureStackTrace && Error.captureStackTrace(u(i), W.prototype.create), i
                        }
                        return y(o)
                    }(c(Error)),
                    W = function() {
                        function e(t, n, r) {
                            p(this, e), this.service = t, this.serviceName = n, this.errors = r
                        }
                        return y(e, [{
                            key: "create",
                            value: function(e) {
                                var t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
                                    n = "".concat(this.service, "/").concat(e),
                                    r = this.errors[e],
                                    o = r ? H(r, t) : "Error",
                                    i = "".concat(this.serviceName, ": ").concat(o, " (").concat(n, ")."),
                                    a = new B(n, i, t);
                                return a
                            }
                        }]), e
                    }();

                function H(e, t) {
                    return e.replace(z, (function(e, n) {
                        var r = t[n];
                        return null != r ? String(r) : "<".concat(n, "?>")
                    }))
                }
                var z = /\{\$([^}]+)}/g;
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function V(e) {
                    return JSON.parse(e)
                }

                function G(e) {
                    return JSON.stringify(e)
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var Q = function(e) {
                        var t = {},
                            n = {},
                            r = {},
                            o = "";
                        try {
                            var i = e.split(".");
                            t = V(S(i[0]) || ""), n = V(S(i[1]) || ""), o = i[2], r = n.d || {}, delete n.d
                        } catch (e) {}
                        return {
                            header: t,
                            claims: n,
                            data: r,
                            signature: o
                        }
                    },
                    J = function(e) {
                        var t = Q(e).claims;
                        return !!t && "object" === d(t) && t.hasOwnProperty("iat")
                    },
                    q = function(e) {
                        var t = Q(e).claims;
                        return "object" === d(t) && !0 === t.admin
                    };
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function Y(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function K(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
                }

                function Z(e) {
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                    return !0
                }

                function X(e, t, n) {
                    var r = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = t.call(n, e[o], o, e));
                    return r
                }

                function ee(e, t) {
                    if (e === t) return !0;
                    for (var n = Object.keys(e), r = Object.keys(t), o = 0, i = n; o < i.length; o++) {
                        var a = i[o];
                        if (!r.includes(a)) return !1;
                        var u = e[a],
                            c = t[a];
                        if (te(u) && te(c)) {
                            if (!ee(u, c)) return !1
                        } else if (u !== c) return !1
                    }
                    for (var s = 0, l = r; s < l.length; s++) {
                        var f = l[s];
                        if (!n.includes(f)) return !1
                    }
                    return !0
                }

                function te(e) {
                    return null !== e && "object" === d(e)
                }
                /**
                 * @license
                 * Copyright 2022 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function ne(e) {
                    for (var t = [], n = function() {
                            var e = r(i[o], 2),
                                n = e[0],
                                a = e[1];
                            Array.isArray(a) ? a.forEach((function(e) {
                                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                            })) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(a))
                        }, o = 0, i = Object.entries(e); o < i.length; o++) n();
                    return t.length ? "&" + t.join("&") : ""
                }

                function re(e) {
                    var t = {};
                    return e.replace(/^\?/, "").split("&").forEach((function(e) {
                        if (e) {
                            var n = r(e.split("="), 2),
                                o = n[0],
                                i = n[1];
                            t[decodeURIComponent(o)] = decodeURIComponent(i)
                        }
                    })), t
                }

                function oe(e) {
                    var t = e.indexOf("?");
                    if (!t) return "";
                    var n = e.indexOf("#", t);
                    return e.substring(t, n > 0 ? n : void 0)
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ie = function() {
                    function e() {
                        p(this, e), this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                        for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
                        this.reset()
                    }
                    return y(e, [{
                        key: "reset",
                        value: function() {
                            this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                        }
                    }, {
                        key: "compress_",
                        value: function(e, t) {
                            t || (t = 0);
                            var n = this.W_;
                            if ("string" == typeof e)
                                for (var r = 0; r < 16; r++) n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                            else
                                for (var o = 0; o < 16; o++) n[o] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                            for (var i = 16; i < 80; i++) {
                                var a = n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16];
                                n[i] = 4294967295 & (a << 1 | a >>> 31)
                            }
                            for (var u, c, s = this.chain_[0], l = this.chain_[1], f = this.chain_[2], h = this.chain_[3], d = this.chain_[4], p = 0; p < 80; p++) {
                                p < 40 ? p < 20 ? (u = h ^ l & (f ^ h), c = 1518500249) : (u = l ^ f ^ h, c = 1859775393) : p < 60 ? (u = l & f | h & (l | f), c = 2400959708) : (u = l ^ f ^ h, c = 3395469782);
                                var v = (s << 5 | s >>> 27) + u + d + c + n[p] & 4294967295;
                                d = h, h = f, f = 4294967295 & (l << 30 | l >>> 2), l = s, s = v
                            }
                            this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[1] = this.chain_[1] + l & 4294967295, this.chain_[2] = this.chain_[2] + f & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + d & 4294967295
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (null != e) {
                                void 0 === t && (t = e.length);
                                for (var n = t - this.blockSize, r = 0, o = this.buf_, i = this.inbuf_; r < t;) {
                                    if (0 === i)
                                        for (; r <= n;) this.compress_(e, r), r += this.blockSize;
                                    if ("string" == typeof e) {
                                        for (; r < t;)
                                            if (o[i] = e.charCodeAt(r), ++r, ++i === this.blockSize) {
                                                this.compress_(o), i = 0;
                                                break
                                            }
                                    } else
                                        for (; r < t;)
                                            if (o[i] = e[r], ++r, ++i === this.blockSize) {
                                                this.compress_(o), i = 0;
                                                break
                                            }
                                }
                                this.inbuf_ = i, this.total_ += t
                            }
                        }
                    }, {
                        key: "digest",
                        value: function() {
                            var e = [],
                                t = 8 * this.total_;
                            this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                            for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] = 255 & t, t /= 256;
                            this.compress_(this.buf_);
                            for (var r = 0, o = 0; o < 5; o++)
                                for (var i = 24; i >= 0; i -= 8) e[r] = this.chain_[o] >> i & 255, ++r;
                            return e
                        }
                    }]), e
                }();

                function ae(e, t) {
                    var n = new ue(e, t);
                    return n.subscribe.bind(n)
                }
                var ue = function() {
                    function e(t, n) {
                        var r = this;
                        p(this, e), this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then((function() {
                            t(r)
                        })).catch((function(e) {
                            r.error(e)
                        }))
                    }
                    return y(e, [{
                        key: "next",
                        value: function(e) {
                            this.forEachObserver((function(t) {
                                t.next(e)
                            }))
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            this.forEachObserver((function(t) {
                                t.error(e)
                            })), this.close(e)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            this.forEachObserver((function(e) {
                                e.complete()
                            })), this.close()
                        }
                    }, {
                        key: "subscribe",
                        value: function(e, t, n) {
                            var r, i = this;
                            if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
                            void 0 === (r = function(e, t) {
                                if ("object" !== d(e) || null === e) return !1;
                                var n, r = function(e, t) {
                                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!n) {
                                        if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                            n && (e = n);
                                            var r = 0,
                                                i = function() {};
                                            return {
                                                s: i,
                                                n: function() {
                                                    return r >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[r++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: i
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var a, u = !0,
                                        c = !1;
                                    return {
                                        s: function() {
                                            n = n.call(e)
                                        },
                                        n: function() {
                                            var e = n.next();
                                            return u = e.done, e
                                        },
                                        e: function(e) {
                                            c = !0, a = e
                                        },
                                        f: function() {
                                            try {
                                                u || null == n.return || n.return()
                                            } finally {
                                                if (c) throw a
                                            }
                                        }
                                    }
                                }(t);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var i = n.value;
                                        if (i in e && "function" == typeof e[i]) return !0
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                return !1
                            }(e, ["next", "error", "complete"]) ? e : {
                                next: e,
                                error: t,
                                complete: n
                            }).next && (r.next = ce), void 0 === r.error && (r.error = ce), void 0 === r.complete && (r.complete = ce);
                            var a = this.unsubscribeOne.bind(this, this.observers.length);
                            return this.finalized && this.task.then((function() {
                                try {
                                    i.finalError ? r.error(i.finalError) : r.complete()
                                } catch (e) {}
                            })), this.observers.push(r), a
                        }
                    }, {
                        key: "unsubscribeOne",
                        value: function(e) {
                            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                        }
                    }, {
                        key: "forEachObserver",
                        value: function(e) {
                            if (!this.finalized)
                                for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
                        }
                    }, {
                        key: "sendOne",
                        value: function(e, t) {
                            var n = this;
                            this.task.then((function() {
                                if (void 0 !== n.observers && void 0 !== n.observers[e]) try {
                                    t(n.observers[e])
                                } catch (e) {
                                    "undefined" != typeof console && console.error && console.error(e)
                                }
                            }))
                        }
                    }, {
                        key: "close",
                        value: function(e) {
                            var t = this;
                            this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then((function() {
                                t.observers = void 0, t.onNoObservers = void 0
                            })))
                        }
                    }]), e
                }();

                function ce() {}
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var se = function(e, t, n, r) {
                    var o;
                    if (r < t ? o = "at least " + t : r > n && (o = 0 === n ? "none" : "no more than " + n), o) throw new Error(e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + o + ".")
                };

                function le(e, t) {
                    return "".concat(e, " failed: ").concat(t, " argument ")
                }

                function fe(e, t, n, r) {
                    if ((!r || n) && "function" != typeof n) throw new Error(le(e, t) + "must be a valid function.")
                }

                function he(e, t, n, r) {
                    if ((!r || n) && ("object" !== d(n) || null === n)) throw new Error(le(e, t) + "must be a valid context object.")
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var de = function(e) {
                        for (var t = [], n = 0, r = 0; r < e.length; r++) {
                            var o = e.charCodeAt(r);
                            if (o >= 55296 && o <= 56319) {
                                var i = o - 55296;
                                r++, w(r < e.length, "Surrogate pair missing trail surrogate."), o = 65536 + (i << 10) + (e.charCodeAt(r) - 56320)
                            }
                            o < 128 ? t[n++] = o : o < 2048 ? (t[n++] = o >> 6 | 192, t[n++] = 63 & o | 128) : o < 65536 ? (t[n++] = o >> 12 | 224, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128) : (t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128)
                        }
                        return t
                    },
                    pe = function(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ? (t += 4, n++) : t += 3
                        }
                        return t
                    };
                /**
                 * @license
                 * Copyright 2021 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function ve(e) {
                    return e && e._delegate ? e._delegate : e
                }
            }).call(this, n("yLpj"))
        },
        IuUc: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            })), n.d(t, "b", (function() {
                return b
            })), n.d(t, "c", (function() {
                return y
            }));
            var r = n("H9WU");

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                i = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    u = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, r) {
                    var o = t && t.prototype instanceof d ? t : d,
                        i = Object.create(o.prototype),
                        a = new j(r || []);
                    return i._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return I()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var u = O(a, n);
                                    if (u) {
                                        if (u === h) continue;
                                        return u
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = f(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, a), i
                }

                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function d() {}

                function p() {}

                function v() {}
                var y = {};
                s(y, a, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    g = b && b(b(S([])));
                g && g !== t && n.call(g, a) && (y = g);
                var m = v.prototype = d.prototype = Object.create(y);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var r;
                    this._invoke = function(i, a) {
                        function u() {
                            return new t((function(r, u) {
                                ! function r(i, a, u, c) {
                                    var s = f(e[i], e, a);
                                    if ("throw" !== s.type) {
                                        var l = s.arg,
                                            h = l.value;
                                        return h && "object" == o(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            r("next", e, u, c)
                                        }), (function(e) {
                                            r("throw", e, u, c)
                                        })) : t.resolve(h).then((function(e) {
                                            l.value = e, u(l)
                                        }), (function(e) {
                                            return r("throw", e, u, c)
                                        }))
                                    }
                                    c(s.arg)
                                }(i, a, r, u)
                            }))
                        }
                        return r = r ? r.then(u, u) : u()
                    }
                }

                function O(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, O(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var r = f(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function S(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                o = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = v, s(m, "constructor", v), s(v, "constructor", p), p.displayName = s(v, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, s(e, c, "GeneratorFunction")), e.prototype = Object.create(m), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(_.prototype), s(_.prototype, u, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(l(t, n, r, o), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, w(m), s(m, c, "Generator"), s(m, a, (function() {
                    return this
                })), s(m, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = S, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    E(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || l(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, t) || l(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = l(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
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
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function l(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                }
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t, n) {
                return t && d(e.prototype, t), n && d(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var v = function() {
                    function e(t, n, r) {
                        h(this, e), this.name = t, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                    }
                    return p(e, [{
                        key: "setInstantiationMode",
                        value: function(e) {
                            return this.instantiationMode = e, this
                        }
                    }, {
                        key: "setMultipleInstances",
                        value: function(e) {
                            return this.multipleInstances = e, this
                        }
                    }, {
                        key: "setServiceProps",
                        value: function(e) {
                            return this.serviceProps = e, this
                        }
                    }, {
                        key: "setInstanceCreatedCallback",
                        value: function(e) {
                            return this.onInstanceCreated = e, this
                        }
                    }]), e
                }(),
                y = function() {
                    function e(t, n) {
                        h(this, e), this.name = t, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                    }
                    var t, n;
                    return p(e, [{
                        key: "get",
                        value: function(e) {
                            var t = this.normalizeInstanceIdentifier(e);
                            if (!this.instancesDeferred.has(t)) {
                                var n = new r.a;
                                if (this.instancesDeferred.set(t, n), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                                    var o = this.getOrInitializeService({
                                        instanceIdentifier: t
                                    });
                                    o && n.resolve(o)
                                } catch (e) {}
                            }
                            return this.instancesDeferred.get(t).promise
                        }
                    }, {
                        key: "getImmediate",
                        value: function(e) {
                            var t, n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                                r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                            if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                                if (r) return null;
                                throw Error("Service ".concat(this.name, " is not available"))
                            }
                            try {
                                return this.getOrInitializeService({
                                    instanceIdentifier: n
                                })
                            } catch (e) {
                                if (r) return null;
                                throw e
                            }
                        }
                    }, {
                        key: "getComponent",
                        value: function() {
                            return this.component
                        }
                    }, {
                        key: "setComponent",
                        value: function(e) {
                            if (e.name !== this.name) throw Error("Mismatching Component ".concat(e.name, " for Provider ").concat(this.name, "."));
                            if (this.component) throw Error("Component for ".concat(this.name, " has already been provided"));
                            if (this.component = e, this.shouldAutoInitialize()) {
                                if (function(e) {
                                        return "EAGER" === e.instantiationMode
                                    }
                                    /**
                                     * @license
                                     * Copyright 2019 Google LLC
                                     *
                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                     * you may not use this file except in compliance with the License.
                                     * You may obtain a copy of the License at
                                     *
                                     *   http://www.apache.org/licenses/LICENSE-2.0
                                     *
                                     * Unless required by applicable law or agreed to in writing, software
                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                     * See the License for the specific language governing permissions and
                                     * limitations under the License.
                                     */
                                    (e)) try {
                                    this.getOrInitializeService({
                                        instanceIdentifier: "[DEFAULT]"
                                    })
                                } catch (e) {}
                                var t, n = s(this.instancesDeferred.entries());
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var r = c(t.value, 2),
                                            o = r[0],
                                            i = r[1],
                                            a = this.normalizeInstanceIdentifier(o);
                                        try {
                                            var u = this.getOrInitializeService({
                                                instanceIdentifier: a
                                            });
                                            i.resolve(u)
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }
                        }
                    }, {
                        key: "clearInstance",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                        }
                    }, {
                        key: "delete",
                        value: (t = i().mark((function e() {
                            var t;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = Array.from(this.instances.values()), e.next = 3, Promise.all([].concat(a(t.filter((function(e) {
                                            return "INTERNAL" in e
                                        })).map((function(e) {
                                            return e.INTERNAL.delete()
                                        }))), a(t.filter((function(e) {
                                            return "_delete" in e
                                        })).map((function(e) {
                                            return e._delete()
                                        })))));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = t.apply(e, n);

                                function a(e) {
                                    u(i, r, o, a, c, "next", e)
                                }

                                function c(e) {
                                    u(i, r, o, a, c, "throw", e)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "isComponentSet",
                        value: function() {
                            return null != this.component
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            return this.instances.has(e)
                        }
                    }, {
                        key: "getOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            return this.instancesOptions.get(e) || {}
                        }
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.options,
                                n = void 0 === t ? {} : t,
                                r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                            if (this.isInitialized(r)) throw Error("".concat(this.name, "(").concat(r, ") has already been initialized"));
                            if (!this.isComponentSet()) throw Error("Component ".concat(this.name, " has not been registered yet"));
                            var o, i = this.getOrInitializeService({
                                    instanceIdentifier: r,
                                    options: n
                                }),
                                a = s(this.instancesDeferred.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = c(o.value, 2),
                                        l = u[0],
                                        f = u[1],
                                        h = this.normalizeInstanceIdentifier(l);
                                    r === h && f.resolve(i)
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            return i
                        }
                    }, {
                        key: "onInit",
                        value: function(e, t) {
                            var n, r = this.normalizeInstanceIdentifier(t),
                                o = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                            o.add(e), this.onInitCallbacks.set(r, o);
                            var i = this.instances.get(r);
                            return i && e(i, r),
                                function() {
                                    o.delete(e)
                                }
                        }
                    }, {
                        key: "invokeOnInitCallbacks",
                        value: function(e, t) {
                            var n = this.onInitCallbacks.get(t);
                            if (n) {
                                var r, o = s(n);
                                try {
                                    for (o.s(); !(r = o.n()).done;) {
                                        var i = r.value;
                                        try {
                                            i(e, t)
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        }
                    }, {
                        key: "getOrInitializeService",
                        value: function(e) {
                            var t, n = e.instanceIdentifier,
                                r = e.options,
                                o = void 0 === r ? {} : r,
                                i = this.instances.get(n);
                            if (!i && this.component && (i = this.component.instanceFactory(this.container, {
                                    instanceIdentifier: (t = n, "[DEFAULT]" === t ? void 0 : t),
                                    options: o
                                }), this.instances.set(n, i), this.instancesOptions.set(n, o), this.invokeOnInitCallbacks(i, n), this.component.onInstanceCreated)) try {
                                this.component.onInstanceCreated(this.container, n, i)
                            } catch (e) {}
                            return i || null
                        }
                    }, {
                        key: "normalizeInstanceIdentifier",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            return this.component ? this.component.multipleInstances ? e : "[DEFAULT]" : e
                        }
                    }, {
                        key: "shouldAutoInitialize",
                        value: function() {
                            return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                        }
                    }]), e
                }();
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var b = function() {
                function e(t) {
                    h(this, e), this.name = t, this.providers = new Map
                }
                return p(e, [{
                    key: "addComponent",
                    value: function(e) {
                        var t = this.getProvider(e.name);
                        if (t.isComponentSet()) throw new Error("Component ".concat(e.name, " has already been registered with ").concat(this.name));
                        t.setComponent(e)
                    }
                }, {
                    key: "addOrOverwriteComponent",
                    value: function(e) {
                        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                    }
                }, {
                    key: "getProvider",
                    value: function(e) {
                        if (this.providers.has(e)) return this.providers.get(e);
                        var t = new y(e, this);
                        return this.providers.set(e, t), t
                    }
                }, {
                    key: "getProviders",
                    value: function() {
                        return Array.from(this.providers.values())
                    }
                }]), e
            }()
        },
        WJvL: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "SDK_VERSION", (function() {
                return D
            })), n.d(t, "_DEFAULT_ENTRY_NAME", (function() {
                return E
            })), n.d(t, "_addComponent", (function() {
                return x
            })), n.d(t, "_addOrOverwriteComponent", (function() {
                return L
            })), n.d(t, "_apps", (function() {
                return S
            })), n.d(t, "_clearComponents", (function() {
                return C
            })), n.d(t, "_components", (function() {
                return I
            })), n.d(t, "_getProvider", (function() {
                return N
            })), n.d(t, "_registerComponent", (function() {
                return A
            })), n.d(t, "_removeServiceInstance", (function() {
                return P
            })), n.d(t, "deleteApp", (function() {
                return B
            })), n.d(t, "getApp", (function() {
                return U
            })), n.d(t, "getApps", (function() {
                return F
            })), n.d(t, "initializeApp", (function() {
                return M
            })), n.d(t, "onLog", (function() {
                return z
            })), n.d(t, "registerVersion", (function() {
                return H
            })), n.d(t, "setLogLevel", (function() {
                return V
            }));
            var r = n("IuUc"),
                o = n("5pEQ"),
                i = n("H9WU");
            n.d(t, "FirebaseError", (function() {
                return i.c
            }));
            var a, u, c = n("HSUl");

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                l = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function u(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (e) {
                    u = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function c(e, t, n, r) {
                    var o = t && t.prototype instanceof h ? t : h,
                        i = Object.create(o.prototype),
                        a = new j(r || []);
                    return i._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return I()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var u = O(a, n);
                                    if (u) {
                                        if (u === f) continue;
                                        return u
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = s(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, a), i
                }

                function s(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var f = {};

                function h() {}

                function p() {}

                function v() {}
                var y = {};
                u(y, o, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    g = b && b(b(S([])));
                g && g !== t && n.call(g, o) && (y = g);
                var m = v.prototype = h.prototype = Object.create(y);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        u(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new t((function(r, a) {
                                ! function r(o, i, a, u) {
                                    var c = s(e[o], e, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == d(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, a, u)
                                        }), (function(e) {
                                            r("throw", e, a, u)
                                        })) : t.resolve(f).then((function(e) {
                                            l.value = e, a(l)
                                        }), (function(e) {
                                            return r("throw", e, a, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function O(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, O(e, t), "throw" === t.method)) return f;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var r = s(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, f;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function S(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = v, u(m, "constructor", v), u(v, "constructor", p), p.displayName = u(v, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, u(e, a, "GeneratorFunction")), e.prototype = Object.create(m), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(_.prototype), u(_.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(c(t, n, r, o), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, w(m), u(m, a, "Generator"), u(m, o, (function() {
                    return this
                })), u(m, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = S, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), f
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    E(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, e
            }

            function f(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            f(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            f(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = v(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
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
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function w(e, t, n) {
                return t && m(e.prototype, t), n && m(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var _ = function() {
                function e(t) {
                    g(this, e), this.container = t
                }
                return w(e, [{
                    key: "getPlatformInfoString",
                    value: function() {
                        return this.container.getProviders().map((function(e) {
                            if (function(e) {
                                    var t = e.getComponent();
                                    return "VERSION" === (null == t ? void 0 : t.type)
                                }(e)) {
                                var t = e.getImmediate();
                                return "".concat(t.library, "/").concat(t.version)
                            }
                            return null
                        })).filter((function(e) {
                            return e
                        })).join(" ")
                    }
                }]), e
            }();
            var O = "@firebase/app",
                k = new o.b("@firebase/app"),
                E = "[DEFAULT]",
                j = (b(a = {}, O, "fire-core"), b(a, "@firebase/app-compat", "fire-core-compat"), b(a, "@firebase/analytics", "fire-analytics"), b(a, "@firebase/analytics-compat", "fire-analytics-compat"), b(a, "@firebase/app-check", "fire-app-check"), b(a, "@firebase/app-check-compat", "fire-app-check-compat"), b(a, "@firebase/auth", "fire-auth"), b(a, "@firebase/auth-compat", "fire-auth-compat"), b(a, "@firebase/database", "fire-rtdb"), b(a, "@firebase/database-compat", "fire-rtdb-compat"), b(a, "@firebase/functions", "fire-fn"), b(a, "@firebase/functions-compat", "fire-fn-compat"), b(a, "@firebase/installations", "fire-iid"), b(a, "@firebase/installations-compat", "fire-iid-compat"), b(a, "@firebase/messaging", "fire-fcm"), b(a, "@firebase/messaging-compat", "fire-fcm-compat"), b(a, "@firebase/performance", "fire-perf"), b(a, "@firebase/performance-compat", "fire-perf-compat"), b(a, "@firebase/remote-config", "fire-rc"), b(a, "@firebase/remote-config-compat", "fire-rc-compat"), b(a, "@firebase/storage", "fire-gcs"), b(a, "@firebase/storage-compat", "fire-gcs-compat"), b(a, "@firebase/firestore", "fire-fst"), b(a, "@firebase/firestore-compat", "fire-fst-compat"), b(a, "fire-js", "fire-js"), b(a, "firebase", "fire-js-all"), a),
                S = new Map,
                I = new Map;

            function x(e, t) {
                try {
                    e.container.addComponent(t)
                } catch (n) {
                    k.debug("Component ".concat(t.name, " failed to register with FirebaseApp ").concat(e.name), n)
                }
            }

            function L(e, t) {
                e.container.addOrOverwriteComponent(t)
            }

            function A(e) {
                var t = e.name;
                if (I.has(t)) return k.debug("There were multiple attempts to register component ".concat(t, ".")), !1;
                I.set(t, e);
                var n, r = p(S.values());
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        x(n.value, e)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return !0
            }

            function N(e, t) {
                var n = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return n && n.triggerHeartbeat(), e.container.getProvider(t)
            }

            function P(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
                N(e, t).clearInstance(n)
            }

            function C() {
                I.clear()
            }
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var R = (b(u = {}, "no-app", "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"), b(u, "bad-app-name", "Illegal App name: '{$appName}"), b(u, "duplicate-app", "Firebase App named '{$appName}' already exists with different options or config"), b(u, "app-deleted", "Firebase App named '{$appName}' already deleted"), b(u, "invalid-app-argument", "firebase.{$appName}() takes either no argument or a Firebase App instance."), b(u, "invalid-log-argument", "First argument to `onLog` must be null or a function."), b(u, "idb-open", "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."), b(u, "idb-get", "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."), b(u, "idb-set", "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."), b(u, "idb-delete", "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."), u),
                T = new i.b("app", "Firebase", R),
                $ = function() {
                    function e(t, n, o) {
                        var i = this;
                        g(this, e), this._isDeleted = !1, this._options = Object.assign({}, t), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = o, this.container.addComponent(new r.a("app", (function() {
                            return i
                        }), "PUBLIC"))
                    }
                    return w(e, [{
                        key: "automaticDataCollectionEnabled",
                        get: function() {
                            return this.checkDestroyed(), this._automaticDataCollectionEnabled
                        },
                        set: function(e) {
                            this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return this.checkDestroyed(), this._name
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this.checkDestroyed(), this._options
                        }
                    }, {
                        key: "config",
                        get: function() {
                            return this.checkDestroyed(), this._config
                        }
                    }, {
                        key: "container",
                        get: function() {
                            return this._container
                        }
                    }, {
                        key: "isDeleted",
                        get: function() {
                            return this._isDeleted
                        },
                        set: function(e) {
                            this._isDeleted = e
                        }
                    }, {
                        key: "checkDestroyed",
                        value: function() {
                            if (this.isDeleted) throw T.create("app-deleted", {
                                appName: this._name
                            })
                        }
                    }]), e
                }(),
                D = "9.10.0";

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("object" !== d(t)) {
                    var n = t;
                    t = {
                        name: n
                    }
                }
                var o = Object.assign({
                        name: E,
                        automaticDataCollectionEnabled: !1
                    }, t),
                    a = o.name;
                if ("string" != typeof a || !a) throw T.create("bad-app-name", {
                    appName: String(a)
                });
                var u = S.get(a);
                if (u) {
                    if (Object(i.o)(e, u.options) && Object(i.o)(o, u.config)) return u;
                    throw T.create("duplicate-app", {
                        appName: a
                    })
                }
                var c, s = new r.b(a),
                    l = p(I.values());
                try {
                    for (l.s(); !(c = l.n()).done;) {
                        var f = c.value;
                        s.addComponent(f)
                    }
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
                var h = new $(e, o, s);
                return S.set(a, h), h
            }

            function U() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                    t = S.get(e);
                if (!t) throw T.create("no-app", {
                    appName: e
                });
                return t
            }

            function F() {
                return Array.from(S.values())
            }

            function B(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = h(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.name, !S.has(n)) {
                                    e.next = 6;
                                    break
                                }
                                return S.delete(n), e.next = 5, Promise.all(t.container.getProviders().map((function(e) {
                                    return e.delete()
                                })));
                            case 5:
                                t.isDeleted = !0;
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function H(e, t, n) {
                var o, i = null !== (o = j[e]) && void 0 !== o ? o : e;
                n && (i += "-".concat(n));
                var a = i.match(/\s|\//),
                    u = t.match(/\s|\//);
                if (a || u) {
                    var c = ['Unable to register library "'.concat(i, '" with version "').concat(t, '":')];
                    return a && c.push('library name "'.concat(i, '" contains illegal characters (whitespace or "/")')), a && u && c.push("and"), u && c.push('version name "'.concat(t, '" contains illegal characters (whitespace or "/")')), void k.warn(c.join(" "))
                }
                A(new r.a("".concat(i, "-version"), (function() {
                    return {
                        library: i,
                        version: t
                    }
                }), "VERSION"))
            }

            function z(e, t) {
                if (null !== e && "function" != typeof e) throw T.create("invalid-log-argument");
                Object(o.d)(e, t)
            }

            function V(e) {
                Object(o.c)(e)
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var G = "firebase-heartbeat-store",
                Q = null;

            function J() {
                return Q || (Q = Object(c.a)("firebase-heartbeat-database", 1, {
                    upgrade: function(e, t) {
                        switch (t) {
                            case 0:
                                e.createObjectStore(G)
                        }
                    }
                }).catch((function(e) {
                    throw T.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                }))), Q
            }

            function q(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = h(l().mark((function e(t) {
                    var n, r, o;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, J();
                            case 3:
                                return r = e.sent, e.abrupt("return", r.transaction(G).objectStore(G).get(X(t)));
                            case 7:
                                e.prev = 7, e.t0 = e.catch(0), e.t0 instanceof i.c ? k.warn(e.t0.message) : (o = T.create("idb-get", {
                                    originalErrorMessage: null === (n = e.t0) || void 0 === n ? void 0 : n.message
                                }), k.warn(o.message));
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function K(e, t) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = h(l().mark((function e(t, n) {
                    var r, o, a, u, c;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, J();
                            case 3:
                                return o = e.sent, a = o.transaction(G, "readwrite"), u = a.objectStore(G), e.next = 8, u.put(n, X(t));
                            case 8:
                                return e.abrupt("return", a.done);
                            case 11:
                                e.prev = 11, e.t0 = e.catch(0), e.t0 instanceof i.c ? k.warn(e.t0.message) : (c = T.create("idb-set", {
                                    originalErrorMessage: null === (r = e.t0) || void 0 === r ? void 0 : r.message
                                }), k.warn(c.message));
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 11]
                    ])
                })))).apply(this, arguments)
            }

            function X(e) {
                return "".concat(e.name, "!").concat(e.options.appId)
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var ee = function() {
                function e(t) {
                    var n = this;
                    g(this, e), this.container = t, this._heartbeatsCache = null;
                    var r = this.container.getProvider("app").getImmediate();
                    this._storage = new oe(r), this._heartbeatsCachePromise = this._storage.read().then((function(e) {
                        return n._heartbeatsCache = e, e
                    }))
                }
                var t, n;
                return w(e, [{
                    key: "triggerHeartbeat",
                    value: (n = h(l().mark((function e() {
                        var t, n, r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.container.getProvider("platform-logger").getImmediate(), n = t.getPlatformInfoString(), r = te(), null !== this._heartbeatsCache) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 6, this._heartbeatsCachePromise;
                                case 6:
                                    this._heartbeatsCache = e.sent;
                                case 7:
                                    if (this._heartbeatsCache.lastSentHeartbeatDate !== r && !this._heartbeatsCache.heartbeats.some((function(e) {
                                            return e.date === r
                                        }))) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 11:
                                    this._heartbeatsCache.heartbeats.push({
                                        date: r,
                                        agent: n
                                    });
                                case 12:
                                    return this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((function(e) {
                                        var t = new Date(e.date).valueOf();
                                        return Date.now() - t <= 2592e6
                                    })), e.abrupt("return", this._storage.overwrite(this._heartbeatsCache));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "getHeartbeatsHeader",
                    value: (t = h(l().mark((function e() {
                        var t, n, r, o, a;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null !== this._heartbeatsCache) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, this._heartbeatsCachePromise;
                                case 3:
                                    if (null !== this._heartbeatsCache && 0 !== this._heartbeatsCache.heartbeats.length) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", "");
                                case 5:
                                    if (t = te(), n = ne(this._heartbeatsCache.heartbeats), r = n.heartbeatsToSend, o = n.unsentEntries, a = Object(i.j)(JSON.stringify({
                                            version: 2,
                                            heartbeats: r
                                        })), this._heartbeatsCache.lastSentHeartbeatDate = t, !(o.length > 0)) {
                                        e.next = 15;
                                        break
                                    }
                                    return this._heartbeatsCache.heartbeats = o, e.next = 13, this._storage.overwrite(this._heartbeatsCache);
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache);
                                case 17:
                                    return e.abrupt("return", a);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }]), e
            }();

            function te() {
                return (new Date).toISOString().substring(0, 10)
            }

            function ne(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024,
                    r = [],
                    o = e.slice(),
                    i = p(e);
                try {
                    var a = function() {
                        var e = t.value,
                            i = r.find((function(t) {
                                return t.agent === e.agent
                            }));
                        if (i) {
                            if (i.dates.push(e.date), ie(r) > n) return i.dates.pop(), "break"
                        } else if (r.push({
                                agent: e.agent,
                                dates: [e.date]
                            }), ie(r) > n) return r.pop(), "break";
                        o = o.slice(1)
                    };
                    for (i.s(); !(t = i.n()).done;) {
                        var u = a();
                        if ("break" === u) break
                    }
                } catch (e) {
                    i.e(e)
                } finally {
                    i.f()
                }
                return {
                    heartbeatsToSend: r,
                    unsentEntries: o
                }
            }
            var re, oe = function() {
                function e(t) {
                    g(this, e), this.app = t, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                var t, n, r, o;
                return w(e, [{
                    key: "runIndexedDBEnvironmentCheck",
                    value: (o = h(l().mark((function e() {
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(i.z)()) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 4:
                                    return e.abrupt("return", Object(i.Q)().then((function() {
                                        return !0
                                    })).catch((function() {
                                        return !1
                                    })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "read",
                    value: (r = h(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._canUseIndexedDBPromise;
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        heartbeats: []
                                    });
                                case 7:
                                    return e.next = 9, q(this.app);
                                case 9:
                                    return t = e.sent, e.abrupt("return", t || {
                                        heartbeats: []
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "overwrite",
                    value: (n = h(l().mark((function e(t) {
                        var n, r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._canUseIndexedDBPromise;
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, this.read();
                                case 9:
                                    return r = e.sent, e.abrupt("return", K(this.app, {
                                        lastSentHeartbeatDate: null !== (n = t.lastSentHeartbeatDate) && void 0 !== n ? n : r.lastSentHeartbeatDate,
                                        heartbeats: t.heartbeats
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "add",
                    value: (t = h(l().mark((function e(t) {
                        var n, r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._canUseIndexedDBPromise;
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, this.read();
                                case 9:
                                    return r = e.sent, e.abrupt("return", K(this.app, {
                                        lastSentHeartbeatDate: null !== (n = t.lastSentHeartbeatDate) && void 0 !== n ? n : r.lastSentHeartbeatDate,
                                        heartbeats: [].concat(s(r.heartbeats), s(t.heartbeats))
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return t.apply(this, arguments)
                    })
                }]), e
            }();

            function ie(e) {
                return Object(i.j)(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            re = "", A(new r.a("platform-logger", (function(e) {
                return new _(e)
            }), "PRIVATE")), A(new r.a("heartbeat", (function(e) {
                return new ee(e)
            }), "PRIVATE")), H(O, "0.7.33", re), H(O, "0.7.33", "esm2017"), H("fire-js", "")
        },
        WZSj: function(e, t, n) {
            "use strict";
            (function(e) {
                var t = n("fe34"),
                    r = n("H1q0"),
                    o = n("IuUc"),
                    i = n("H9WU");

                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function u() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    u = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        n = t.hasOwnProperty,
                        r = "function" == typeof Symbol ? Symbol : {},
                        o = r.iterator || "@@iterator",
                        i = r.asyncIterator || "@@asyncIterator",
                        c = r.toStringTag || "@@toStringTag";

                    function s(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        s({}, "")
                    } catch (e) {
                        s = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function l(e, t, n, r) {
                        var o = t && t.prototype instanceof d ? t : d,
                            i = Object.create(o.prototype),
                            a = new j(r || []);
                        return i._invoke = function(e, t, n) {
                            var r = "suspendedStart";
                            return function(o, i) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === o) throw i;
                                    return I()
                                }
                                for (n.method = o, n.arg = i;;) {
                                    var a = n.delegate;
                                    if (a) {
                                        var u = O(a, n);
                                        if (u) {
                                            if (u === h) continue;
                                            return u
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if ("suspendedStart" === r) throw r = "completed", n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = "executing";
                                    var c = f(e, t, n);
                                    if ("normal" === c.type) {
                                        if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
                                        return {
                                            value: c.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                                }
                            }
                        }(e, n, a), i
                    }

                    function f(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = l;
                    var h = {};

                    function d() {}

                    function p() {}

                    function v() {}
                    var y = {};
                    s(y, o, (function() {
                        return this
                    }));
                    var b = Object.getPrototypeOf,
                        g = b && b(b(S([])));
                    g && g !== t && n.call(g, o) && (y = g);
                    var m = v.prototype = d.prototype = Object.create(y);

                    function w(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            s(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function _(e, t) {
                        var r;
                        this._invoke = function(o, i) {
                            function u() {
                                return new t((function(r, u) {
                                    ! function r(o, i, u, c) {
                                        var s = f(e[o], e, i);
                                        if ("throw" !== s.type) {
                                            var l = s.arg,
                                                h = l.value;
                                            return h && "object" == a(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                                r("next", e, u, c)
                                            }), (function(e) {
                                                r("throw", e, u, c)
                                            })) : t.resolve(h).then((function(e) {
                                                l.value = e, u(l)
                                            }), (function(e) {
                                                return r("throw", e, u, c)
                                            }))
                                        }
                                        c(s.arg)
                                    }(o, i, r, u)
                                }))
                            }
                            return r = r ? r.then(u, u) : u()
                        }
                    }

                    function O(e, t) {
                        var n = e.iterator[t.method];
                        if (void 0 === n) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, O(e, t), "throw" === t.method)) return h;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return h
                        }
                        var r = f(n, e.iterator, t.arg);
                        if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h;
                        var o = r.arg;
                        return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                    }

                    function k(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function E(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function j(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(k, this), this.reset(!0)
                    }

                    function S(e) {
                        if (e) {
                            var t = e[o];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var r = -1,
                                    i = function t() {
                                        for (; ++r < e.length;)
                                            if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return i.next = i
                            }
                        }
                        return {
                            next: I
                        }
                    }

                    function I() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return p.prototype = v, s(m, "constructor", v), s(v, "constructor", p), p.displayName = s(v, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, s(e, c, "GeneratorFunction")), e.prototype = Object.create(m), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, w(_.prototype), s(_.prototype, i, (function() {
                        return this
                    })), e.AsyncIterator = _, e.async = function(t, n, r, o, i) {
                        void 0 === i && (i = Promise);
                        var a = new _(l(t, n, r, o), i);
                        return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                            return e.done ? e.value : a.next()
                        }))
                    }, w(m), s(m, c, "Generator"), s(m, o, (function() {
                        return this
                    })), s(m, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return t.reverse(),
                            function n() {
                                for (; t.length;) {
                                    var r = t.pop();
                                    if (r in e) return n.value = r, n.done = !1, n
                                }
                                return n.done = !0, n
                            }
                    }, e.values = S, j.prototype = {
                        constructor: j,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                                for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                            function r(n, r) {
                                return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var i = this.tryEntries[o],
                                    a = i.completion;
                                if ("root" === i.tryLoc) return r("end");
                                if (i.tryLoc <= this.prev) {
                                    var u = n.call(i, "catchLoc"),
                                        c = n.call(i, "finallyLoc");
                                    if (u && c) {
                                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                    } else if (u) {
                                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r];
                                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var i = o;
                                    break
                                }
                            }
                            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                            var a = i ? i.completion : {};
                            return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), h
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        E(n)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, n) {
                            return this.delegate = {
                                iterator: S(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = void 0), h
                        }
                    }, e
                }

                function c(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function s(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function l(e, t, n) {
                    return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }

                function f(e, t, n, r, o, i, a) {
                    try {
                        var u = e[i](a),
                            c = u.value
                    } catch (e) {
                        return void n(e)
                    }
                    u.done ? t(c) : Promise.resolve(c).then(r, o)
                }

                function h(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                f(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                f(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }
                }

                function d() {
                    var e;
                    return (null === (e = null === self || void 0 === self ? void 0 : self.location) || void 0 === e ? void 0 : e.protocol) || null
                }

                function p() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.t)();
                    return !("file:" !== d() && "ionic:" !== d() && "capacitor:" !== d() || !e.toLowerCase().match(/iphone|ipad|ipod|android/))
                }

                function v() {
                    return Object(i.y)() && 11 === (null === document || void 0 === document ? void 0 : document.documentMode)
                }

                function y() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.t)();
                    return /Edge\/\d+/.test(e)
                }

                function b() {
                    try {
                        var e = self.localStorage,
                            t = r.s();
                        if (e) return e.setItem(t, "1"), e.removeItem(t), ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.t)();
                            return v() || y(e)
                        }() || Object(i.z)()
                    } catch (e) {
                        return g() && Object(i.z)()
                    }
                    return !1
                }

                function g() {
                    return void 0 !== e && "WorkerGlobalScope" in e && "importScripts" in e
                }

                function m() {
                    return ("http:" === d() || "https:" === d() || Object(i.w)() || p()) && !(Object(i.D)() || Object(i.B)()) && b() && !g()
                }

                function w() {
                    return p() && "undefined" != typeof document
                }

                function _() {
                    return O.apply(this, arguments)
                }

                function O() {
                    return (O = h(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (w()) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return e.abrupt("return", new Promise((function(e) {
                                        var t = setTimeout((function() {
                                            e(!1)
                                        }), 1e3);
                                        document.addEventListener("deviceready", (function() {
                                            clearTimeout(t), e(!0)
                                        }))
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var k = {
                        LOCAL: "local",
                        NONE: "none",
                        SESSION: "session"
                    },
                    E = r.p;

                function j(e, t) {
                    E(Object.values(k).includes(t), e, "invalid-persistence-type"), Object(i.D)() ? E(t !== k.SESSION, e, "unsupported-persistence-type") : Object(i.B)() ? E(t === k.NONE, e, "unsupported-persistence-type") : g() ? E(t === k.NONE || t === k.LOCAL && Object(i.z)(), e, "unsupported-persistence-type") : E(t === k.NONE || b(), e, "unsupported-persistence-type")
                }

                function S(e) {
                    return I.apply(this, arguments)
                }

                function I() {
                    return (I = h(u().mark((function e(t) {
                        var n, o;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t._initializationPromise;
                                case 2:
                                    n = x(), o = r.w("persistence", t.config.apiKey, t.name), n && n.setItem(o, t._getPersistence());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function x() {
                    var e;
                    try {
                        return (null === (e = "undefined" != typeof window ? window : null) || void 0 === e ? void 0 : e.sessionStorage) || null
                    } catch (e) {
                        return null
                    }
                }
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var L = r.p,
                    A = function() {
                        function e() {
                            c(this, e), this.browserResolver = r.t(r.A), this.cordovaResolver = r.t(r.F), this.underlyingResolver = null, this._redirectPersistence = r.B, this._completeRedirectFn = r.u, this._overrideRedirectResult = r.v
                        }
                        var t, n, o, i;
                        return l(e, [{
                            key: "_initialize",
                            value: (i = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.selectUnderlyingResolver();
                                        case 2:
                                            return e.abrupt("return", this.assertedUnderlyingResolver._initialize(t));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "_openPopup",
                            value: (o = h(u().mark((function e(t, n, r, o) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.selectUnderlyingResolver();
                                        case 2:
                                            return e.abrupt("return", this.assertedUnderlyingResolver._openPopup(t, n, r, o));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t, n, r) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "_openRedirect",
                            value: (n = h(u().mark((function e(t, n, r, o) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.selectUnderlyingResolver();
                                        case 2:
                                            return e.abrupt("return", this.assertedUnderlyingResolver._openRedirect(t, n, r, o));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t, r, o) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "_isIframeWebStorageSupported",
                            value: function(e, t) {
                                this.assertedUnderlyingResolver._isIframeWebStorageSupported(e, t)
                            }
                        }, {
                            key: "_originValidation",
                            value: function(e) {
                                return this.assertedUnderlyingResolver._originValidation(e)
                            }
                        }, {
                            key: "_shouldInitProactively",
                            get: function() {
                                return w() || this.browserResolver._shouldInitProactively
                            }
                        }, {
                            key: "assertedUnderlyingResolver",
                            get: function() {
                                return L(this.underlyingResolver, "internal-error"), this.underlyingResolver
                            }
                        }, {
                            key: "selectUnderlyingResolver",
                            value: (t = h(u().mark((function e() {
                                var t;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.underlyingResolver) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, _();
                                        case 4:
                                            t = e.sent, this.underlyingResolver = t ? this.cordovaResolver : this.browserResolver;
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function() {
                                return t.apply(this, arguments)
                            })
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function N(e) {
                    return e.unwrap()
                }

                function P(e) {
                    var t = (e instanceof i.c ? e.customData : e)._tokenResponse;
                    if (!t) return null;
                    if (!(e instanceof i.c) && "temporaryProof" in t && "phoneNumber" in t) return r.i.credentialFromResult(e);
                    var n, o = t.providerId;
                    if (!o || o === r.k.PASSWORD) return null;
                    switch (o) {
                        case r.k.GOOGLE:
                            n = r.f;
                            break;
                        case r.k.FACEBOOK:
                            n = r.d;
                            break;
                        case r.k.GITHUB:
                            n = r.e;
                            break;
                        case r.k.TWITTER:
                            n = r.o;
                            break;
                        default:
                            var a = t.oauthIdToken,
                                u = t.oauthAccessToken,
                                c = t.oauthTokenSecret,
                                s = t.pendingToken,
                                l = t.nonce;
                            return u || c || a || s ? s ? o.startsWith("saml.") ? r.m._create(o, s) : r.g._fromParams({
                                providerId: o,
                                signInMethod: o,
                                pendingToken: s,
                                idToken: a,
                                accessToken: u
                            }) : new r.h(o).credential({
                                idToken: a,
                                accessToken: u,
                                rawNonce: l
                            }) : null
                    }
                    return e instanceof i.c ? n.credentialFromError(e) : n.credentialFromResult(e)
                }

                function C(e, t) {
                    return t.catch((function(t) {
                        throw t instanceof i.c && function(e, t) {
                            var n, o, i = null === (n = t.customData) || void 0 === n ? void 0 : n._tokenResponse;
                            if ("auth/multi-factor-auth-required" === (null === (o = t) || void 0 === o ? void 0 : o.code)) t.resolver = new $(e, r.K(e, t));
                            else if (i) {
                                var a = P(t),
                                    u = t;
                                a && (u.credential = a, u.tenantId = i.tenantId || void 0, u.email = i.email || void 0, u.phoneNumber = i.phoneNumber || void 0)
                            }
                        }(e, t), t
                    })).then((function(e) {
                        var t, n = e.operationType,
                            o = e.user;
                        return {
                            operationType: n,
                            credential: (t = e, P(t)),
                            additionalUserInfo: r.J(e),
                            user: D.getOrCreate(o)
                        }
                    }))
                }

                function R(e, t) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return (T = h(u().mark((function e(t, n) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n;
                                case 2:
                                    return r = e.sent, e.abrupt("return", {
                                        verificationId: r.verificationId,
                                        confirm: function(e) {
                                            return C(t, r.confirm(e))
                                        }
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var $ = function() {
                        function e(t, n) {
                            c(this, e), this.resolver = n, this.auth = t.wrapped()
                        }
                        return l(e, [{
                            key: "session",
                            get: function() {
                                return this.resolver.session
                            }
                        }, {
                            key: "hints",
                            get: function() {
                                return this.resolver.hints
                            }
                        }, {
                            key: "resolveSignIn",
                            value: function(e) {
                                return C(N(this.auth), this.resolver.resolveSignIn(e))
                            }
                        }]), e
                    }(),
                    D = function() {
                        function e(t) {
                            c(this, e), this._delegate = t, this.multiFactor = r.T(t)
                        }
                        var t, n, o, i, a, s, f;
                        return l(e, [{
                            key: "delete",
                            value: function() {
                                return this._delegate.delete()
                            }
                        }, {
                            key: "reload",
                            value: function() {
                                return this._delegate.reload()
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return this._delegate.toJSON()
                            }
                        }, {
                            key: "getIdTokenResult",
                            value: function(e) {
                                return this._delegate.getIdTokenResult(e)
                            }
                        }, {
                            key: "getIdToken",
                            value: function(e) {
                                return this._delegate.getIdToken(e)
                            }
                        }, {
                            key: "linkAndRetrieveDataWithCredential",
                            value: function(e) {
                                return this.linkWithCredential(e)
                            }
                        }, {
                            key: "linkWithCredential",
                            value: (f = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", C(this.auth, r.P(this._delegate, t)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return f.apply(this, arguments)
                            })
                        }, {
                            key: "linkWithPhoneNumber",
                            value: (s = h(u().mark((function e(t, n) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", R(this.auth, r.Q(this._delegate, t, n)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t) {
                                return s.apply(this, arguments)
                            })
                        }, {
                            key: "linkWithPopup",
                            value: (a = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", C(this.auth, r.R(this._delegate, t, A)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return a.apply(this, arguments)
                            })
                        }, {
                            key: "linkWithRedirect",
                            value: (i = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, S(r.q(this.auth));
                                        case 2:
                                            return e.abrupt("return", r.S(this._delegate, t, A));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "reauthenticateAndRetrieveDataWithCredential",
                            value: function(e) {
                                return this.reauthenticateWithCredential(e)
                            }
                        }, {
                            key: "reauthenticateWithCredential",
                            value: (o = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", C(this.auth, r.U(this._delegate, t)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "reauthenticateWithPhoneNumber",
                            value: function(e, t) {
                                return R(this.auth, r.V(this._delegate, e, t))
                            }
                        }, {
                            key: "reauthenticateWithPopup",
                            value: function(e) {
                                return C(this.auth, r.W(this._delegate, e, A))
                            }
                        }, {
                            key: "reauthenticateWithRedirect",
                            value: (n = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, S(r.q(this.auth));
                                        case 2:
                                            return e.abrupt("return", r.X(this._delegate, t, A));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "sendEmailVerification",
                            value: function(e) {
                                return r.Y(this._delegate, e)
                            }
                        }, {
                            key: "unlink",
                            value: (t = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.jb(this._delegate, t);
                                        case 2:
                                            return e.abrupt("return", this);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return t.apply(this, arguments)
                            })
                        }, {
                            key: "updateEmail",
                            value: function(e) {
                                return r.kb(this._delegate, e)
                            }
                        }, {
                            key: "updatePassword",
                            value: function(e) {
                                return r.lb(this._delegate, e)
                            }
                        }, {
                            key: "updatePhoneNumber",
                            value: function(e) {
                                return r.mb(this._delegate, e)
                            }
                        }, {
                            key: "updateProfile",
                            value: function(e) {
                                return r.nb(this._delegate, e)
                            }
                        }, {
                            key: "verifyBeforeUpdateEmail",
                            value: function(e, t) {
                                return r.ob(this._delegate, e, t)
                            }
                        }, {
                            key: "emailVerified",
                            get: function() {
                                return this._delegate.emailVerified
                            }
                        }, {
                            key: "isAnonymous",
                            get: function() {
                                return this._delegate.isAnonymous
                            }
                        }, {
                            key: "metadata",
                            get: function() {
                                return this._delegate.metadata
                            }
                        }, {
                            key: "phoneNumber",
                            get: function() {
                                return this._delegate.phoneNumber
                            }
                        }, {
                            key: "providerData",
                            get: function() {
                                return this._delegate.providerData
                            }
                        }, {
                            key: "refreshToken",
                            get: function() {
                                return this._delegate.refreshToken
                            }
                        }, {
                            key: "tenantId",
                            get: function() {
                                return this._delegate.tenantId
                            }
                        }, {
                            key: "displayName",
                            get: function() {
                                return this._delegate.displayName
                            }
                        }, {
                            key: "email",
                            get: function() {
                                return this._delegate.email
                            }
                        }, {
                            key: "photoURL",
                            get: function() {
                                return this._delegate.photoURL
                            }
                        }, {
                            key: "providerId",
                            get: function() {
                                return this._delegate.providerId
                            }
                        }, {
                            key: "uid",
                            get: function() {
                                return this._delegate.uid
                            }
                        }, {
                            key: "auth",
                            get: function() {
                                return this._delegate.auth
                            }
                        }], [{
                            key: "getOrCreate",
                            value: function(t) {
                                return e.USER_MAP.has(t) || e.USER_MAP.set(t, new e(t)), e.USER_MAP.get(t)
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                D.USER_MAP = new WeakMap;
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var M = r.p,
                    U = function() {
                        function e(t, n) {
                            if (c(this, e), this.app = t, n.isInitialized()) return this._delegate = n.getImmediate(), void this.linkUnderlyingAuth();
                            var o = t.options.apiKey;
                            M(o, "invalid-api-key", {
                                appName: t.name
                            }), M(o, "invalid-api-key", {
                                appName: t.name
                            });
                            var i = "undefined" != typeof window ? A : void 0;
                            this._delegate = n.initialize({
                                options: {
                                    persistence: B(o, t.name),
                                    popupRedirectResolver: i
                                }
                            }), this._delegate._updateErrorMap(r.H), this.linkUnderlyingAuth()
                        }
                        var t, n, o, i, a;
                        return l(e, [{
                            key: "emulatorConfig",
                            get: function() {
                                return this._delegate.emulatorConfig
                            }
                        }, {
                            key: "currentUser",
                            get: function() {
                                return this._delegate.currentUser ? D.getOrCreate(this._delegate.currentUser) : null
                            }
                        }, {
                            key: "languageCode",
                            get: function() {
                                return this._delegate.languageCode
                            },
                            set: function(e) {
                                this._delegate.languageCode = e
                            }
                        }, {
                            key: "settings",
                            get: function() {
                                return this._delegate.settings
                            }
                        }, {
                            key: "tenantId",
                            get: function() {
                                return this._delegate.tenantId
                            },
                            set: function(e) {
                                this._delegate.tenantId = e
                            }
                        }, {
                            key: "useDeviceLanguage",
                            value: function() {
                                this._delegate.useDeviceLanguage()
                            }
                        }, {
                            key: "signOut",
                            value: function() {
                                return this._delegate.signOut()
                            }
                        }, {
                            key: "useEmulator",
                            value: function(e, t) {
                                r.E(this._delegate, e, t)
                            }
                        }, {
                            key: "applyActionCode",
                            value: function(e) {
                                return r.y(this._delegate, e)
                            }
                        }, {
                            key: "checkActionCode",
                            value: function(e) {
                                return r.C(this._delegate, e)
                            }
                        }, {
                            key: "confirmPasswordReset",
                            value: function(e, t) {
                                return r.D(this._delegate, e, t)
                            }
                        }, {
                            key: "createUserWithEmailAndPassword",
                            value: (a = h(u().mark((function e(t, n) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", C(this._delegate, r.G(this._delegate, t, n)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t) {
                                return a.apply(this, arguments)
                            })
                        }, {
                            key: "fetchProvidersForEmail",
                            value: function(e) {
                                return this.fetchSignInMethodsForEmail(e)
                            }
                        }, {
                            key: "fetchSignInMethodsForEmail",
                            value: function(e) {
                                return r.I(this._delegate, e)
                            }
                        }, {
                            key: "isSignInWithEmailLink",
                            value: function(e) {
                                return r.O(this._delegate, e)
                            }
                        }, {
                            key: "getRedirectResult",
                            value: (i = h(u().mark((function e() {
                                var t;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return M(m(), this._delegate, "operation-not-supported-in-this-environment"), e.next = 3, r.L(this._delegate, A);
                                        case 3:
                                            if (t = e.sent) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                credential: null,
                                                user: null
                                            });
                                        case 6:
                                            return e.abrupt("return", C(this._delegate, Promise.resolve(t)));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function() {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "addFrameworkForLogging",
                            value: function(e) {
                                r.x(this._delegate, e)
                            }
                        }, {
                            key: "onAuthStateChanged",
                            value: function(e, t, n) {
                                var r = F(e, t, n),
                                    o = r.next,
                                    i = r.error,
                                    a = r.complete;
                                return this._delegate.onAuthStateChanged(o, i, a)
                            }
                        }, {
                            key: "onIdTokenChanged",
                            value: function(e, t, n) {
                                var r = F(e, t, n),
                                    o = r.next,
                                    i = r.error,
                                    a = r.complete;
                                return this._delegate.onIdTokenChanged(o, i, a)
                            }
                        }, {
                            key: "sendSignInLinkToEmail",
                            value: function(e, t) {
                                return r.ab(this._delegate, e, t)
                            }
                        }, {
                            key: "sendPasswordResetEmail",
                            value: function(e, t) {
                                return r.Z(this._delegate, e, t || void 0)
                            }
                        }, {
                            key: "setPersistence",
                            value: (o = h(u().mark((function e(t) {
                                var n, o;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            j(this._delegate, t), e.t0 = t, e.next = e.t0 === k.SESSION ? 4 : e.t0 === k.LOCAL ? 6 : e.t0 === k.NONE ? 11 : 13;
                                            break;
                                        case 4:
                                            return n = r.B, e.abrupt("break", 14);
                                        case 6:
                                            return e.next = 8, r.t(r.N)._isAvailable();
                                        case 8:
                                            return o = e.sent, n = o ? r.N : r.z, e.abrupt("break", 14);
                                        case 11:
                                            return n = r.M, e.abrupt("break", 14);
                                        case 13:
                                            return e.abrupt("return", r.r("argument-error", {
                                                appName: this._delegate.name
                                            }));
                                        case 14:
                                            return e.abrupt("return", this._delegate.setPersistence(n));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "signInAndRetrieveDataWithCredential",
                            value: function(e) {
                                return this.signInWithCredential(e)
                            }
                        }, {
                            key: "signInAnonymously",
                            value: function() {
                                return C(this._delegate, r.bb(this._delegate))
                            }
                        }, {
                            key: "signInWithCredential",
                            value: function(e) {
                                return C(this._delegate, r.cb(this._delegate, e))
                            }
                        }, {
                            key: "signInWithCustomToken",
                            value: function(e) {
                                return C(this._delegate, r.db(this._delegate, e))
                            }
                        }, {
                            key: "signInWithEmailAndPassword",
                            value: function(e, t) {
                                return C(this._delegate, r.eb(this._delegate, e, t))
                            }
                        }, {
                            key: "signInWithEmailLink",
                            value: function(e, t) {
                                return C(this._delegate, r.fb(this._delegate, e, t))
                            }
                        }, {
                            key: "signInWithPhoneNumber",
                            value: function(e, t) {
                                return R(this._delegate, r.gb(this._delegate, e, t))
                            }
                        }, {
                            key: "signInWithPopup",
                            value: (n = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return M(m(), this._delegate, "operation-not-supported-in-this-environment"), e.abrupt("return", C(this._delegate, r.hb(this._delegate, t, A)));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "signInWithRedirect",
                            value: (t = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return M(m(), this._delegate, "operation-not-supported-in-this-environment"), e.next = 3, S(this._delegate);
                                        case 3:
                                            return e.abrupt("return", r.ib(this._delegate, t, A));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return t.apply(this, arguments)
                            })
                        }, {
                            key: "updateCurrentUser",
                            value: function(e) {
                                return this._delegate.updateCurrentUser(e)
                            }
                        }, {
                            key: "verifyPasswordResetCode",
                            value: function(e) {
                                return r.pb(this._delegate, e)
                            }
                        }, {
                            key: "unwrap",
                            value: function() {
                                return this._delegate
                            }
                        }, {
                            key: "_delete",
                            value: function() {
                                return this._delegate._delete()
                            }
                        }, {
                            key: "linkUnderlyingAuth",
                            value: function() {
                                var e = this;
                                this._delegate.wrapped = function() {
                                    return e
                                }
                            }
                        }]), e
                    }();

                function F(e, t, n) {
                    var r = e;
                    "function" != typeof e && (r = e.next, t = e.error, n = e.complete);
                    var o = r;
                    return {
                        next: function(e) {
                            return o(e && D.getOrCreate(e))
                        },
                        error: t,
                        complete: n
                    }
                }

                function B(e, t) {
                    var n = function(e, t) {
                        var n = x();
                        if (!n) return [];
                        var o = r.w("persistence", e, t);
                        switch (n.getItem(o)) {
                            case k.NONE:
                                return [r.M];
                            case k.LOCAL:
                                return [r.N, r.B];
                            case k.SESSION:
                                return [r.B];
                            default:
                                return []
                        }
                    }(e, t);
                    if ("undefined" == typeof self || n.includes(r.N) || n.push(r.N), "undefined" != typeof window)
                        for (var o = 0, i = [r.z, r.B]; o < i.length; o++) {
                            var a = i[o];
                            n.includes(a) || n.push(a)
                        }
                    return n.includes(r.M) || n.push(r.M), n
                }
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                U.Persistence = k;
                var W = function() {
                    function e() {
                        c(this, e), this.providerId = "phone", this._delegate = new r.i(N(t.a.auth()))
                    }
                    return l(e, [{
                        key: "verifyPhoneNumber",
                        value: function(e, t) {
                            return this._delegate.verifyPhoneNumber(e, t)
                        }
                    }, {
                        key: "unwrap",
                        value: function() {
                            return this._delegate
                        }
                    }], [{
                        key: "credential",
                        value: function(e, t) {
                            return r.i.credential(e, t)
                        }
                    }]), e
                }();
                W.PHONE_SIGN_IN_METHOD = r.i.PHONE_SIGN_IN_METHOD, W.PROVIDER_ID = r.i.PROVIDER_ID;
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var H, z = r.p,
                    V = function() {
                        function e(n, o) {
                            var i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.a.app();
                            c(this, e), z(null === (i = a.options) || void 0 === i ? void 0 : i.apiKey, "invalid-api-key", {
                                appName: a.name
                            }), this._delegate = new r.l(n, o, a.auth()), this.type = this._delegate.type
                        }
                        return l(e, [{
                            key: "clear",
                            value: function() {
                                this._delegate.clear()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return this._delegate.render()
                            }
                        }, {
                            key: "verify",
                            value: function() {
                                return this._delegate.verify()
                            }
                        }]), e
                    }();
                (H = t.a).INTERNAL.registerComponent(new o.a("auth-compat", (function(e) {
                    var t = e.getProvider("app-compat").getImmediate(),
                        n = e.getProvider("auth");
                    return new U(t, n)
                }), "PUBLIC").setServiceProps({
                    ActionCodeInfo: {
                        Operation: {
                            EMAIL_SIGNIN: r.a.EMAIL_SIGNIN,
                            PASSWORD_RESET: r.a.PASSWORD_RESET,
                            RECOVER_EMAIL: r.a.RECOVER_EMAIL,
                            REVERT_SECOND_FACTOR_ADDITION: r.a.REVERT_SECOND_FACTOR_ADDITION,
                            VERIFY_AND_CHANGE_EMAIL: r.a.VERIFY_AND_CHANGE_EMAIL,
                            VERIFY_EMAIL: r.a.VERIFY_EMAIL
                        }
                    },
                    EmailAuthProvider: r.c,
                    FacebookAuthProvider: r.d,
                    GithubAuthProvider: r.e,
                    GoogleAuthProvider: r.f,
                    OAuthProvider: r.h,
                    SAMLAuthProvider: r.n,
                    PhoneAuthProvider: W,
                    PhoneMultiFactorGenerator: r.j,
                    RecaptchaVerifier: V,
                    TwitterAuthProvider: r.o,
                    Auth: U,
                    AuthCredential: r.b,
                    Error: i.c
                }).setInstantiationMode("LAZY").setMultipleInstances(!1)), H.registerVersion("@firebase/auth-compat", "0.2.20")
            }).call(this, n("yLpj"))
        },
        fe34: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var r, o = n("H9WU"),
                i = n("IuUc"),
                a = n("WJvL"),
                u = n("5pEQ");

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var l = function() {
                    function e(t, n) {
                        var r = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this._delegate = t, this.firebase = n, Object(a._addComponent)(t, new i.a("app-compat", (function() {
                            return r
                        }), "PUBLIC")), this.container = t.container
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "automaticDataCollectionEnabled",
                        get: function() {
                            return this._delegate.automaticDataCollectionEnabled
                        },
                        set: function(e) {
                            this._delegate.automaticDataCollectionEnabled = e
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return this._delegate.name
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this._delegate.options
                        }
                    }, {
                        key: "delete",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                e._delegate.checkDestroyed(), t()
                            })).then((function() {
                                return e.firebase.INTERNAL.removeApp(e.name), Object(a.deleteApp)(e._delegate)
                            }))
                        }
                    }, {
                        key: "_getService",
                        value: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a._DEFAULT_ENTRY_NAME;
                            this._delegate.checkDestroyed();
                            var r = this._delegate.container.getProvider(e);
                            return r.isInitialized() || "EXPLICIT" !== (null === (t = r.getComponent()) || void 0 === t ? void 0 : t.instantiationMode) || r.initialize(), r.getImmediate({
                                identifier: n
                            })
                        }
                    }, {
                        key: "_removeServiceInstance",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a._DEFAULT_ENTRY_NAME;
                            this._delegate.container.getProvider(e).clearInstance(t)
                        }
                    }, {
                        key: "_addComponent",
                        value: function(e) {
                            Object(a._addComponent)(this._delegate, e)
                        }
                    }, {
                        key: "_addOrOverwriteComponent",
                        value: function(e) {
                            Object(a._addOrOverwriteComponent)(this._delegate, e)
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return {
                                name: this.name,
                                automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
                                options: this.options
                            }
                        }
                    }]) && s(t.prototype, n), r && s(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                f = (c(r = {}, "no-app", "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"), c(r, "invalid-app-argument", "firebase.{$appName}() takes either no argument or a Firebase App instance."), r),
                h = new o.b("app-compat", "Firebase", f);
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var d =
                /**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function e() {
                    var t =
                        /**
                         * @license
                         * Copyright 2019 Google LLC
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        function(e) {
                            var t = {},
                                n = {
                                    __esModule: !0,
                                    initializeApp: function(r) {
                                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            u = a.initializeApp(r, i);
                                        if (Object(o.k)(t, u.name)) return t[u.name];
                                        var c = new e(u, n);
                                        return t[u.name] = c, c
                                    },
                                    app: r,
                                    registerVersion: a.registerVersion,
                                    setLogLevel: a.setLogLevel,
                                    onLog: a.onLog,
                                    apps: null,
                                    SDK_VERSION: a.SDK_VERSION,
                                    INTERNAL: {
                                        registerComponent: function(t) {
                                            var i = t.name,
                                                u = i.replace("-compat", "");
                                            if (a._registerComponent(t) && "PUBLIC" === t.type) {
                                                var c = function() {
                                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
                                                    if ("function" != typeof e[u]) throw h.create("invalid-app-argument", {
                                                        appName: i
                                                    });
                                                    return e[u]()
                                                };
                                                void 0 !== t.serviceProps && Object(o.p)(c, t.serviceProps), n[u] = c, e.prototype[u] = function() {
                                                    for (var e = this._getService.bind(this, i), n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                                                    return e.apply(this, t.multipleInstances ? r : [])
                                                }
                                            }
                                            return "PUBLIC" === t.type ? n[u] : null
                                        },
                                        removeApp: function(e) {
                                            delete t[e]
                                        },
                                        useAsService: function(e, t) {
                                            if ("serverAuth" === t) return null;
                                            return t
                                        },
                                        modularAPIs: a
                                    }
                                };

                            function r(e) {
                                if (e = e || a._DEFAULT_ENTRY_NAME, !Object(o.k)(t, e)) throw h.create("no-app", {
                                    appName: e
                                });
                                return t[e]
                            }
                            return n.default = n, Object.defineProperty(n, "apps", {
                                get: function() {
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }
                            }), r.App = e, n
                        }(l);
                    return t.INTERNAL = Object.assign(Object.assign({}, t.INTERNAL), {
                        createFirebaseNamespace: e,
                        extendNamespace: function(e) {
                            Object(o.p)(t, e)
                        },
                        createSubscribe: o.m,
                        ErrorFactory: o.b,
                        deepExtend: o.p
                    }), t
                }(),
                p = new u.b("@firebase/app-compat");
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            if (Object(o.v)() && void 0 !== self.firebase) {
                p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
                var v = self.firebase.SDK_VERSION;
                v && v.indexOf("LITE") >= 0 && p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
            }
            var y, b = d;
            Object(a.registerVersion)("@firebase/app-compat", "0.1.34", y)
        },
        ggPL: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function a(e, t) {
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
            }

            function u(e) {
                var t = h();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }

            function c(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return s(e)
            }

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (l = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return f(e, arguments, p(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), d(r, e)
                })(e)
            }

            function f(e, t, n) {
                return (f = h() ? Reflect.construct.bind() : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new(Function.bind.apply(e, r));
                    return n && d(o, n.prototype), o
                }).apply(null, arguments)
            }

            function h() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, t) || _(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                y = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function u(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (e) {
                    u = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function c(e, t, n, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        i = Object.create(o.prototype),
                        a = new j(r || []);
                    return i._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return I()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var u = O(a, n);
                                    if (u) {
                                        if (u === l) continue;
                                        return u
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = s(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, a), i
                }

                function s(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var l = {};

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    b = v && v(v(S([])));
                b && b !== t && n.call(b, o) && (p = b);
                var g = d.prototype = f.prototype = Object.create(p);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        u(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new t((function(r, a) {
                                ! function r(o, i, a, u) {
                                    var c = s(e[o], e, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == m(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, a, u)
                                        }), (function(e) {
                                            r("throw", e, a, u)
                                        })) : t.resolve(f).then((function(e) {
                                            l.value = e, a(l)
                                        }), (function(e) {
                                            return r("throw", e, a, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function O(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, O(e, t), "throw" === t.method)) return l;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = s(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function S(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = d, u(g, "constructor", d), u(d, "constructor", h), h.displayName = u(d, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, u(e, a, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(_.prototype), u(_.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(c(t, n, r, o), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, w(g), u(g, a, "Generator"), u(g, o, (function() {
                    return this
                })), u(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = S, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), l
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    E(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, e
            }

            function b(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            b(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            b(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || _(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(e, t) : void 0
                }
            }

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, "a", (function() {
                return K
            })), n.d(t, "b", (function() {
                return R
            })), n.d(t, "c", (function() {
                return I
            })), n.d(t, "d", (function() {
                return ee
            }));
            var k = !1,
                E = "undefined" != typeof window ? window : {},
                j = E.document || {
                    head: {}
                },
                S = {
                    $flags$: 0,
                    $resourcesUrl$: "",
                    jmp: function(e) {
                        return e()
                    },
                    raf: function(e) {
                        return requestAnimationFrame(e)
                    },
                    ael: function(e, t, n, r) {
                        return e.addEventListener(t, n, r)
                    },
                    rel: function(e, t, n, r) {
                        return e.removeEventListener(t, n, r)
                    },
                    ce: function(e, t) {
                        return new CustomEvent(e, t)
                    }
                },
                I = function(e) {
                    return Promise.resolve(e)
                },
                x = function() {
                    try {
                        return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replace
                    } catch (e) {}
                    return !1
                }(),
                L = "{visibility:hidden}.hydrated{visibility:inherit}",
                A = new WeakMap,
                N = function(e, t, n) {
                    var r = ie.get(e);
                    x && n ? (r = r || new CSSStyleSheet).replace(t) : r = t, ie.set(e, r)
                },
                P = function(e) {
                    var t = e.$cmpMeta$,
                        n = e.$hostElement$,
                        r = (t.$tagName$, function() {});
                    ! function(e, t, n, r) {
                        var o = C(t),
                            i = ie.get(o);
                        if (e = 11 === e.nodeType ? e : j, i)
                            if ("string" == typeof i) {
                                e = e.head || e;
                                var a, u = A.get(e);
                                u || A.set(e, u = new Set), u.has(o) || ((a = j.createElement("style")).innerHTML = i, e.insertBefore(a, e.querySelector("link")), u && u.add(o))
                            } else e.adoptedStyleSheets.includes(i) || (e.adoptedStyleSheets = [].concat(w(e.adoptedStyleSheets), [i]))
                    }(n.getRootNode(), t);
                    r()
                },
                C = function(e, t) {
                    return "sc-" + e.$tagName$
                },
                R = function(e) {
                    return X(e).$hostElement$
                },
                T = function(e, t) {
                    t && !e.$onRenderResolve$ && t["s-p"] && t["s-p"].push(new Promise((function(t) {
                        return e.$onRenderResolve$ = t
                    })))
                },
                $ = function(e, t) {
                    if (e.$flags$ |= 16, !(4 & e.$flags$)) {
                        T(e, e.$ancestorComponent$);
                        return he((function() {
                            return D(e, t)
                        }))
                    }
                    e.$flags$ |= 512
                },
                D = function(e, t) {
                    var n = (e.$cmpMeta$.$tagName$, function() {}),
                        r = e.$lazyInstance$;
                    return n(), H(void 0, (function() {
                        return M(e, r, t)
                    }))
                },
                M = function() {
                    var e = g(y().mark((function e(t, n, r) {
                        var o, i, a, u, c, s;
                        return y().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    o = t.$hostElement$, t.$cmpMeta$.$tagName$, i = function() {}, a = o["s-rc"], r && P(t), t.$cmpMeta$.$tagName$, u = function() {}, U(t, n), a && (a.map((function(e) {
                                        return e()
                                    })), o["s-rc"] = void 0), u(), i(), c = o["s-p"], s = function() {
                                        return F(t)
                                    }, 0 === c.length ? s() : (Promise.all(c).then(s), t.$flags$ |= 4, c.length = 0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function(e, t, n) {
                    try {
                        t = t.render && t.render(), e.$flags$ &= -17, e.$flags$ |= 2
                    } catch (t) {
                        ne(t, e.$hostElement$)
                    }
                    return null
                },
                F = function(e) {
                    e.$cmpMeta$.$tagName$;
                    var t = e.$hostElement$,
                        n = function() {},
                        r = e.$ancestorComponent$;
                    64 & e.$flags$ ? n() : (e.$flags$ |= 64, z(t), n(), e.$onReadyResolve$(t), r || B()), e.$onInstanceResolve$(t), e.$onRenderResolve$ && (e.$onRenderResolve$(), e.$onRenderResolve$ = void 0), 512 & e.$flags$ && fe((function() {
                        return $(e, !1)
                    })), e.$flags$ &= -517
                },
                B = function(e) {
                    z(j.documentElement), fe((function() {
                        return e = E, t = "appload", n = {
                            detail: {
                                namespace: "ionphaser"
                            }
                        }, r = S.ce(t, n), e.dispatchEvent(r), r;
                        var e, t, n, r
                    }))
                },
                W = function(e, t, n) {
                    if (e && e[t]) try {
                        return e[t](n)
                    } catch (e) {
                        ne(e)
                    }
                },
                H = function(e, t) {
                    return e && e.then ? e.then(t) : t()
                },
                z = function(e) {
                    return e.classList.add("hydrated")
                },
                V = function(e, t) {
                    return null != e && ("object" !== (n = m(n = e)) && "function" !== n) && 4 & t ? "false" !== e && ("" === e || !!e) : e;
                    var n
                },
                G = function(e, t, n) {
                    if (t.$members$) {
                        e.watchers && (t.$watchers$ = e.watchers);
                        var r = Object.entries(t.$members$),
                            o = e.prototype;
                        if (r.map((function(e) {
                                var r = v(e, 2),
                                    i = r[0],
                                    a = v(r[1], 1)[0];
                                31 & a || 2 & n && 32 & a ? Object.defineProperty(o, i, {
                                    get: function() {
                                        return e = i, X(this).$instanceValues$.get(e);
                                        var e
                                    },
                                    set: function(e) {
                                        ! function(e, t, n, r) {
                                            var o = X(e),
                                                i = o.$hostElement$,
                                                a = o.$instanceValues$.get(t),
                                                u = o.$flags$,
                                                c = o.$lazyInstance$;
                                            if (n = V(n, r.$members$[t][0]), !(8 & u && void 0 !== a || n === a) && (o.$instanceValues$.set(t, n), c)) {
                                                if (r.$watchers$ && 128 & u) {
                                                    var s = r.$watchers$[t];
                                                    s && s.map((function(e) {
                                                        try {
                                                            c[e](n, a, t)
                                                        } catch (e) {
                                                            ne(e, i)
                                                        }
                                                    }))
                                                }
                                                2 == (18 & u) && $(o, !1)
                                            }
                                        }(this, i, e, t)
                                    },
                                    configurable: !0,
                                    enumerable: !0
                                }) : 1 & n && 64 & a && Object.defineProperty(o, i, {
                                    value: function() {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        var r = X(this);
                                        return r.$onInstancePromise$.then((function() {
                                            var e;
                                            return (e = r.$lazyInstance$)[i].apply(e, t)
                                        }))
                                    }
                                })
                            })), 1 & n) {
                            var i = new Map;
                            o.attributeChangedCallback = function(e, t, n) {
                                var r = this;
                                S.jmp((function() {
                                    var t = i.get(e);
                                    r[t] = (null !== n || "boolean" != typeof r[t]) && n
                                }))
                            }, e.observedAttributes = r.filter((function(e) {
                                var t = v(e, 2);
                                t[0];
                                return 15 & t[1][0]
                            })).map((function(e) {
                                var t = v(e, 2),
                                    n = t[0],
                                    r = t[1][1] || n;
                                return i.set(r, n), r
                            }))
                        }
                    }
                    return e
                },
                Q = function() {
                    var e = g(y().mark((function e(t, n, r, o, i) {
                        var a, u, c, s, l, f, h;
                        return y().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 != (32 & n.$flags$)) {
                                        e.next = 18;
                                        break
                                    }
                                    if (n.$flags$ |= 32, !(i = oe(r)).then) {
                                        e.next = 9;
                                        break
                                    }
                                    return a = function() {}, e.next = 7, i;
                                case 7:
                                    i = e.sent, a();
                                case 9:
                                    i.isProxied || (r.$watchers$ = i.watchers, G(i, r, 2), i.isProxied = !0), r.$tagName$, u = function() {}, n.$flags$ |= 8;
                                    try {
                                        new i(n)
                                    } catch (e) {
                                        ne(e)
                                    }
                                    n.$flags$ &= -9, n.$flags$ |= 128, u(), J(n.$lazyInstance$), i.style && (c = i.style, s = C(r), ie.has(s) || (r.$tagName$, l = function() {}, N(s, c, !!(1 & r.$flags$)), l()));
                                case 18:
                                    f = n.$ancestorComponent$, h = function() {
                                        return $(n, !0)
                                    }, f && f["s-rc"] ? f["s-rc"].push(h) : h();
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r, o, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                J = function(e) {
                    W(e, "connectedCallback")
                },
                q = function(e) {
                    if (0 == (1 & S.$flags$)) {
                        var t = X(e),
                            n = t.$cmpMeta$,
                            r = (n.$tagName$, function() {});
                        if (1 & t.$flags$) J(t.$lazyInstance$);
                        else {
                            t.$flags$ |= 1;
                            for (var o = e; o = o.parentNode || o.host;)
                                if (o["s-p"]) {
                                    T(t, t.$ancestorComponent$ = o);
                                    break
                                } n.$members$ && Object.entries(n.$members$).map((function(t) {
                                var n = v(t, 2),
                                    r = n[0];
                                if (31 & v(n[1], 1)[0] && e.hasOwnProperty(r)) {
                                    var o = e[r];
                                    delete e[r], e[r] = o
                                }
                            })), Q(e, t, n)
                        }
                        r()
                    }
                },
                Y = function(e) {
                    if (0 == (1 & S.$flags$)) {
                        var t = X(e).$lazyInstance$;
                        W(t, "disconnectedCallback")
                    }
                },
                K = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = function() {},
                        c = [],
                        f = n.exclude || [],
                        h = E.customElements,
                        d = j.head,
                        p = d.querySelector("meta[charset]"),
                        v = j.createElement("style"),
                        y = [],
                        b = !0;
                    Object.assign(S, n), S.$resourcesUrl$ = new URL(n.resourcesUrl || "./", j.baseURI).href, e.map((function(e) {
                        return e[1].map((function(n) {
                            var o = {
                                $flags$: n[0],
                                $tagName$: n[1],
                                $members$: n[2],
                                $listeners$: n[3]
                            };
                            o.$members$ = n[2], o.$watchers$ = {};
                            var d = o.$tagName$,
                                p = function(e) {
                                    a(c, e);
                                    var n = u(c);

                                    function c(e) {
                                        var t;
                                        return r(this, c), e = s(t = n.call(this, e)), te(e, o), t
                                    }
                                    return i(c, [{
                                        key: "connectedCallback",
                                        value: function() {
                                            var e = this;
                                            t && (clearTimeout(t), t = null), b ? y.push(this) : S.jmp((function() {
                                                return q(e)
                                            }))
                                        }
                                    }, {
                                        key: "disconnectedCallback",
                                        value: function() {
                                            var e = this;
                                            S.jmp((function() {
                                                return Y(e)
                                            }))
                                        }
                                    }, {
                                        key: "componentOnReady",
                                        value: function() {
                                            return X(this).$onReadyPromise$
                                        }
                                    }]), c
                                }(l(HTMLElement));
                            o.$lazyBundleId$ = e[0], f.includes(d) || h.get(d) || (c.push(d), h.define(d, G(p, o, 1)))
                        }))
                    })), v.innerHTML = c + L, v.setAttribute("data-styles", ""), d.insertBefore(v, p ? p.nextSibling : d.firstChild), b = !1, y.length ? y.map((function(e) {
                        return e.connectedCallback()
                    })) : S.jmp((function() {
                        return t = setTimeout(B, 30)
                    })), o()
                },
                Z = new WeakMap,
                X = function(e) {
                    return Z.get(e)
                },
                ee = function(e, t) {
                    return Z.set(t.$lazyInstance$ = e, t)
                },
                te = function(e, t) {
                    var n = {
                        $flags$: 0,
                        $hostElement$: e,
                        $cmpMeta$: t,
                        $instanceValues$: new Map
                    };
                    return n.$onInstancePromise$ = new Promise((function(e) {
                        return n.$onInstanceResolve$ = e
                    })), n.$onReadyPromise$ = new Promise((function(e) {
                        return n.$onReadyResolve$ = e
                    })), e["s-p"] = [], e["s-rc"] = [], Z.set(e, n)
                },
                ne = function(e, t) {
                    return (0, console.error)(e, t)
                },
                re = new Map,
                oe = function(e, t, r) {
                    var o = e.$tagName$.replace(/-/g, "_"),
                        i = e.$lazyBundleId$,
                        a = re.get(i);
                    return a ? a[o] : n("ZNWz")("./".concat(i, ".entry.js")).then((function(e) {
                        return re.set(i, e), e[o]
                    }), ne)
                },
                ie = new Map,
                ae = [],
                ue = [],
                ce = function(e, t) {
                    return function(n) {
                        e.push(n), k || (k = !0, t && 4 & S.$flags$ ? fe(le) : S.raf(le))
                    }
                },
                se = function(e) {
                    for (var t = 0; t < e.length; t++) try {
                        e[t](performance.now())
                    } catch (e) {
                        ne(e)
                    }
                    e.length = 0
                },
                le = function e() {
                    se(ae), se(ue), (k = ae.length > 0) && S.raf(e)
                },
                fe = function(e) {
                    return I().then(e)
                },
                he = ce(ue, !0)
        },
        lNlg: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return k
            }));
            var r = n("q1tI"),
                o = n.n(r),
                i = function(e) {
                    return e.replace(/([A-Z])/g, (function(e) {
                        return "-".concat(e[0].toLowerCase())
                    }))
                };

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var u = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e instanceof Element) {
                        var r = c(e.classList, t, n);
                        "" !== r && (e.className = r), Object.keys(t).forEach((function(n) {
                            if ("children" !== n && "style" !== n && "ref" !== n && "class" !== n && "className" !== n && "forwardedRef" !== n)
                                if (0 === n.indexOf("on") && n[2] === n[2].toUpperCase()) {
                                    var r = n.substring(2),
                                        o = r[0].toLowerCase() + r.substring(1);
                                    "undefined" == typeof document || s(o, document) || l(e, o, t[n])
                                } else {
                                    e[n] = t[n], "string" === a(t[n]) ? e.setAttribute(i(n), t[n]) : e[n] = t[n]
                                }
                        }))
                    }
                },
                c = function(e, t, n) {
                    var r = t.className || t.class,
                        o = n.className || n.class,
                        i = f(e),
                        a = f(r ? r.split(" ") : []),
                        u = f(o ? o.split(" ") : []),
                        c = [];
                    return i.forEach((function(e) {
                        a.has(e) ? (c.push(e), a.delete(e)) : u.has(e) || c.push(e)
                    })), a.forEach((function(e) {
                        return c.push(e)
                    })), c.join(" ")
                },
                s = function(e, t) {
                    var n = "on" + e,
                        r = n in t;
                    if (!r) {
                        var o = t.createElement("div");
                        o.setAttribute(n, "return;"), r = "function" == typeof o[n]
                    }
                    return r
                },
                l = function(e, t, n) {
                    var r = e.__events || (e.__events = {}),
                        o = r[t];
                    o && e.removeEventListener(t, o), e.addEventListener(t, r[t] = function(e) {
                        n && n.call(this, e)
                    })
                },
                f = function(e) {
                    var t = new Map;
                    return e.forEach((function(e) {
                        return t.set(e, e)
                    })), t
                },
                h = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e) {
                        return t.forEach((function(t) {
                            "function" == typeof t ? t(e) : null != t && (t.current = e)
                        }))
                    }
                };

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }

            function b(e, t) {
                if (t && ("object" === d(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var m = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                },
                w = function(e, t, n) {
                    var r = e.toLowerCase().split("-").map((function(e) {
                            return e.charAt(0).toUpperCase() + e.slice(1)
                        })).join(""),
                        i = function(t) {
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
                                }), t && v(e, t)
                            }(f, t);
                            var i, a, c, l = y(f);

                            function f(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, f), (t = l.call(this, e)).setComponentElRef = function(e) {
                                    t.componentEl = e
                                }, t
                            }
                            return i = f, c = [{
                                key: "displayName",
                                get: function() {
                                    return r
                                }
                            }], (a = [{
                                key: "componentDidMount",
                                value: function() {
                                    this.componentDidUpdate(this.props)
                                }
                            }, {
                                key: "componentDidUpdate",
                                value: function(e) {
                                    u(this.componentEl, this.props, e)
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var t = this.props,
                                        r = t.children,
                                        i = t.forwardedRef,
                                        a = t.style,
                                        u = (t.className, t.ref, m(t, ["children", "forwardedRef", "style", "className", "ref"])),
                                        c = Object.keys(u).reduce((function(e, t) {
                                            if (0 === t.indexOf("on") && t[2] === t[2].toUpperCase()) {
                                                var n = t.substring(2).toLowerCase();
                                                "undefined" != typeof document && s(n, document) && (e[t] = u[t])
                                            } else e[t] = u[t];
                                            return e
                                        }), {});
                                    n && (c = n(this.props, c));
                                    var l = Object.assign(Object.assign({}, c), {
                                        ref: h(i, this.setComponentElRef),
                                        style: a
                                    });
                                    return o.a.createElement(e, l, r)
                                }
                            }]) && p(i.prototype, a), c && p(i, c), Object.defineProperty(i, "prototype", {
                                writable: !1
                            }), f
                        }(o.a.Component);
                    return t && (i.contextType = t),
                        function(e, t) {
                            var n = function(t, n) {
                                return o.a.createElement(e, Object.assign({}, t, {
                                    forwardedRef: n
                                }))
                            };
                            return n.displayName = t, o.a.forwardRef(n)
                        }(i, r)
                };
            n("i8i4");
            var _ = n("ggPL"),
                O = function(e, t) {
                    return "undefined" == typeof window ? Promise.resolve() : Object(_.c)().then((function() {
                        return Object(_.a)([
                            ["ion-phaser", [
                                [0, "ion-phaser", {
                                    game: [1040],
                                    initialize: [4],
                                    getInstance: [64],
                                    destroy: [64]
                                }]
                            ]]
                        ], t)
                    }))
                };
            ! function() {
                if ("undefined" != typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
                    var e = HTMLElement;
                    window.HTMLElement = function() {
                        return Reflect.construct(e, [], this.constructor)
                    }, HTMLElement.prototype = e.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e)
                }
            }(),
            function() {
                var e = [];
                if ("undefined" != typeof window) {
                    var t = window;
                    t.customElements && (!t.Element || t.Element.prototype.closest && t.Element.prototype.matches && t.Element.prototype.remove && t.Element.prototype.getRootNode) || e.push(n.e(11).then(n.t.bind(null, "Tx8Z", 7)));
                    "function" == typeof Object.assign && Object.entries && Array.prototype.find && Array.prototype.includes && String.prototype.startsWith && String.prototype.endsWith && (!t.NodeList || t.NodeList.prototype.forEach) && t.fetch && function() {
                        try {
                            var e = new URL("b", "http://a");
                            return e.pathname = "c%20d", "http://a/c%20d" === e.href && e.searchParams
                        } catch (e) {
                            return !1
                        }
                    }() && "undefined" != typeof WeakMap || e.push(n.e(36).then(n.t.bind(null, "7mIA", 7)))
                }
                return Promise.all(e)
            }().then((function() {
                return O()
            }));
            var k = w("ion-phaser")
        }
    }
]);