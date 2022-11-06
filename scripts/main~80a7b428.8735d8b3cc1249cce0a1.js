(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        "25NL": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("TSYQ"),
                s = a.n(r),
                i = a("17x9"),
                l = a.n(i),
                c = a("yzbm"),
                _ = a("H1WH"),
                u = a("FKJl"),
                m = a("bQY/"),
                p = a.n(m),
                d = a("pkss"),
                f = a("qnYv");

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                y = function() {
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
                        i = new N(o || []);
                    return n(s, "_invoke", {
                        value: w(e, a, i)
                    }), s
                }

                function _(e, t, a) {
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
                var u = {};

                function m() {}

                function p() {}

                function d() {}
                var f = {};
                l(f, r, (function() {
                    return this
                }));
                var x = Object.getPrototypeOf,
                    g = x && x(x(S([])));
                g && g !== t && a.call(g, r) && (f = g);
                var b = d.prototype = m.prototype = Object.create(f);

                function C(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = _(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                u = c.value;
                                            return u && "object" == h(u) && a.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(u).then((function(e) {
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

                function w(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return T()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = k(s, a);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = _(e, t, a);
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
                }

                function k(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = _(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function I(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function N(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function S(e) {
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
                        next: T
                    }
                }

                function T() {
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
                }), p.displayName = l(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, l(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, C(v.prototype), l(v.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new v(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, C(b), l(b, i, "Generator"), l(b, r, (function() {
                    return this
                })), l(b, "toString", (function() {
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
                }, e.values = S, N.prototype = {
                    constructor: N,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
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
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), I(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    I(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function x(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function g(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = k(e);
                    if (t) {
                        var o = k(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return v(this, a)
                }
            }

            function v(e, t) {
                if (t && ("object" === h(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return w(e)
            }

            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && b(e, t)
                }(m, e);
                var t, a, n, r, i, l = C(m);

                function m(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, m), (t = l.call(this, e)).state = {
                        error: "",
                        showUnsplash: !1,
                        urlInput: "",
                        showURL: !1
                    }, t.loading = !1, t.dropzoneRef = o.a.createRef(), t.onImageDrop = t.onImageDrop.bind(w(t)), t.onURLSubmit = t.onURLSubmit.bind(w(t)), t
                }
                return t = m, (a = [{
                    key: "onImageDrop",
                    value: function(e) {
                        var t = e[0];
                        t ? this.props.onDone(URL.createObjectURL(t), t) : this.setState({
                            error: "Error Uploading the File."
                        })
                    }
                }, {
                    key: "onURLSubmit",
                    value: (r = y().mark((function e(t) {
                        var a, n = this;
                        return y().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.preventDefault(), !this.loading) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (this.loading = !0, a = "", this.state.urlInput) {
                                        e.next = 9;
                                        break
                                    }
                                    a = "Where's the URL?", e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11, new Promise((function(e) {
                                        f.a.get("/api/games/is-image", {
                                            params: {
                                                url: n.state.urlInput
                                            }
                                        }).then((function(t) {
                                            e(t.data)
                                        })).catch((function(t) {
                                            Object(u.b)(t), e(!1)
                                        }))
                                    }));
                                case 11:
                                    e.sent || (a = "We can't find a supported image for that URL.");
                                case 13:
                                    a ? this.setState({
                                        error: a
                                    }) : this.props.onDone(this.state.urlInput), this.loading = !1;
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var o = r.apply(e, t);

                            function s(e) {
                                x(o, a, n, s, i, "next", e)
                            }

                            function i(e) {
                                x(o, a, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function(e) {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, n = this;
                        return this.state.showUnsplash ? o.a.createElement(d.a, {
                            select: function(e) {
                                return n.props.onDone(e, null)
                            },
                            close: function() {
                                return n.setState({
                                    showUnsplash: !1
                                })
                            }
                        }) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: p.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose
                        }), o.a.createElement("div", {
                            className: p.a.mainContainer
                        }, this.state.showURL ? o.a.createElement("form", {
                            onSubmit: this.onURLSubmit
                        }, o.a.createElement("div", {
                            className: p.a.header
                        }, "Upload by URL"), o.a.createElement("div", {
                            className: p.a.text
                        }, "Enter image address:"), o.a.createElement("input", {
                            className: s()(p.a.urlInput, (e = {}, t = p.a.inputFilled, a = this.state.urlInput, t in e ? Object.defineProperty(e, t, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = a, e)),
                            placeholder: "Image url...",
                            onChange: function(e) {
                                return n.setState({
                                    urlInput: e.target.value,
                                    error: ""
                                })
                            },
                            value: this.state.urlInput,
                            type: "text",
                            autoFocus: _.isMobile ? "" : "autofocus"
                        }), o.a.createElement("div", {
                            className: p.a.buttonRow
                        }, o.a.createElement("div", {
                            className: p.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return n.setState({
                                    showURL: !1
                                })
                            }
                        }, "Back"), o.a.createElement("div", {
                            className: p.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.onURLSubmit
                        }, "Submit"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: p.a.header
                        }, "Image Uploader"), o.a.createElement("div", {
                            className: p.a.uploadButtonContainer
                        }, o.a.createElement("div", {
                            className: p.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return n.setState({
                                    showUnsplash: !0
                                })
                            }
                        }, o.a.createElement("i", {
                            className: s()(p.a.uploadIcon, "fas fa-image")
                        }), o.a.createElement("div", {
                            className: p.a.uploadText
                        }, "Image", o.a.createElement("br", null), "Gallery")), o.a.createElement("div", {
                            className: p.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return n.dropzoneRef.current.open()
                            }
                        }, o.a.createElement("i", {
                            className: s()(p.a.uploadIcon, "fas fa-file-upload")
                        }), o.a.createElement("div", {
                            className: p.a.uploadText
                        }, "Upload", o.a.createElement("br", null), "a File")), o.a.createElement("div", {
                            className: p.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return n.setState({
                                    showURL: !0,
                                    urlInput: ""
                                })
                            }
                        }, o.a.createElement("i", {
                            className: s()(p.a.uploadIcon, "fas fa-link")
                        }), o.a.createElement("div", {
                            className: p.a.uploadText
                        }, "Upload", o.a.createElement("br", null), "by URL"))), o.a.createElement(c.a, {
                            multiple: !1,
                            accept: "image/jpeg, image/png, image/gif, image/svg+xml",
                            onDropAccepted: this.onImageDrop,
                            onDropRejected: function() {
                                n.setState({
                                    error: "Image Denied (Check Size < 2.5 MB)"
                                })
                            },
                            className: p.a.dropContainer,
                            activeClassName: p.a.activeDropContainer,
                            ref: this.dropzoneRef,
                            maxSize: 25e5
                        }, o.a.createElement("i", {
                            className: s()("fas fa-file-image", p.a.dropzoneIcon)
                        }), "Or Drag and Drop a File Here (< 2.5 MB)")), this.state.error ? o.a.createElement("div", {
                            className: p.a.errorContainer
                        }, o.a.createElement("i", {
                            className: s()(p.a.errorIcon, "fas fa-times-circle")
                        }), o.a.createElement("div", {
                            className: p.a.errorText
                        }, this.state.error)) : null))
                    }
                }]) && g(t.prototype, a), n && g(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), m
            }(o.a.Component);
            E.propTypes = {
                onClose: l.a.func.isRequired,
                onDone: l.a.func.isRequired
            }, t.a = E
        },
        "5nyl": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___3YKeO-camelCase{left:0;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___6hjAF-camelCase,.styles__modal___3YKeO-camelCase{position:fixed;top:0;width:100%;height:100%}.styles__mainContainer___6hjAF-camelCase{right:0;max-width:1050px;background-color:#fff;z-index:5;animation:styles__slideIn___PweGA-camelCase .3s linear forwards}@keyframes styles__slideIn___PweGA-camelCase{0%{transform:translateX(100%)}to{transform:translateX(0)}}.styles__slideOut___2qPxq-camelCase{animation:styles__slideOut___2qPxq-camelCase .15s linear forwards}@keyframes styles__slideOut___2qPxq-camelCase{0%{transform:translateX(0)}to{transform:translateX(100%)}}.styles__closeIcon___2dOk--camelCase{position:absolute;top:5px;left:5px;font-size:22px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;display:none}.styles__top___2Rv9d-camelCase{height:95px;justify-content:center;align-items:center;border-bottom:3px solid #e0e0e0;padding-top:5px;box-sizing:border-box;z-index:3}.styles__searchContainer___200va-camelCase,.styles__top___2Rv9d-camelCase{display:flex;flex-direction:row}.styles__searchContainer___200va-camelCase{width:85%;min-width:300px;border:3px solid #0bc2cf;border-radius:6px;height:50px;background-color:#fff}.styles__searchIcon___-YGln-camelCase{font-size:25px;color:#fff;background-color:#0bc2cf;border-radius:5px;line-height:42px;margin:3px 3px 3px 10px;width:46px;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__searchInput___3YyVQ-camelCase{border:none;margin:6px 2px 4px 15px;height:40px;width:calc(100% - 51px);font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__searchInput___3YyVQ-camelCase::-webkit-search-cancel-button,.styles__searchInput___3YyVQ-camelCase::-webkit-search-decoration,.styles__searchInput___3YyVQ-camelCase::-webkit-search-results-button,.styles__searchInput___3YyVQ-camelCase::-webkit-search-results-decoration{-webkit-appearance:none}.styles__filtersHolder___Np-g6-camelCase{position:relative;display:block}.styles__filterIcon___3B3jN-camelCase{font-size:23px;color:#fff;background-color:#9a49aa;border-radius:5px;margin-left:10px;height:46px;width:46px;display:flex;justify-content:center;align-items:center;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media only screen and (max-width:750px){.styles__filtersHolder___Np-g6-camelCase{display:none}}.styles__filtersColumn___3gQQN-camelCase{display:none;flex-direction:column;position:absolute;top:46px;right:0;width:200px}.styles__filtersHolder___Np-g6-camelCase:hover>.styles__filtersColumn___3gQQN-camelCase{display:flex}.styles__filterRow___31wnb-camelCase{background-color:#fff;border-radius:5px;box-shadow:0 0 4px 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;padding:5px 10px;margin:2.5px 0;font-family:Nunito,sans-serif;font-size:16px;color:#3a3a3a;flex:1}.styles__filters___2QcHy-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-top:3px}.styles__checkBox___1aHZZ-camelCase{width:20px;height:20px;display:flex;justify-content:center;align-items:center;border:2px solid #3a3a3a;border-radius:6px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#3a3a3a;background-color:#fff;transition:.2s}.styles__checkIcon___3NhOg-camelCase{font-size:14px;margin:auto}.styles__checkYes___16d0X-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___A3ur5-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}.styles__left___36IK7-camelCase{position:absolute;top:95px;left:0;width:35%;height:calc(100% - 95px);padding:10px;box-sizing:border-box;border-right:3px solid #e0e0e0;z-index:2}.styles__nothingContainer___377mF-camelCase{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:24px;font-weight:700}.styles__nothingBlook___2uW5j-camelCase{width:100px;height:115px;margin-bottom:10px}.styles__hitsHolder___LLk1k-camelCase{flex-direction:column;padding:0 5px;height:100%;overflow-y:auto;overflow-x:hidden}.styles__hitContainer___11utO-camelCase,.styles__hitsHolder___LLk1k-camelCase{display:flex;width:100%;box-sizing:border-box}.styles__hitContainer___11utO-camelCase{flex-direction:row;align-items:center;margin:5px 0;padding:5px;border-radius:7px;border:3px solid #e0e0e0;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__hitContainer___11utO-camelCase:hover{transform:scale(.95)}.styles__hitImageContainer___1qVuH-camelCase{width:100px;min-width:100px;height:90px;border-radius:5px;margin-right:5px;overflow:hidden;display:flex;justify-content:center;align-items:center;position:relative}.styles__coverImage___1ad2Z-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__setFillerText___3OORu-camelCase{font-family:Titan One,sans-serif;font-size:20px;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__setQuestionsText___1TN7B-camelCase{position:absolute;bottom:5px;right:5px;background-color:rgba(0,0,0,.6);border-radius:4px;color:#fff;font-size:12px;padding:3px 5px}.styles__hitRight___3-sgR-camelCase{display:flex;flex-direction:column;min-height:90px;overflow-x:hidden;width:calc(100% - 105px)}.styles__setHeader___3JIfH-camelCase{font-size:16px;line-height:18px;font-weight:700;word-wrap:break-word}.styles__setSpacer___26nnk-camelCase{width:100%;height:5px;flex-grow:2}.styles__setPlays___18iwg-camelCase{font-size:12px;display:flex;flex-direction:row;align-items:center}.styles__verifiedIcon___3BZTt-camelCase{color:#0bc2cf;margin-left:8px}.styles__setDescText___pOM_u-camelCase{font-size:12px}.styles__setAuthorContainer___3-8GJ-camelCase{display:flex;flex-direction:row;align-items:center}.styles__authorIcon___2XXXs-camelCase{font-size:10px;margin-right:5px}.styles__showMoreButton___1LpHt-camelCase{width:170px;min-height:40px;background-color:#0bc2cf;border-radius:5px;margin:15px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:none;font-family:Nunito,sans-serif;font-size:20px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__showMoreButton___1LpHt-camelCase:hover{transform:scale(.95)}.styles__right___1iD6k-camelCase{position:absolute;top:95px;right:0;width:65%;height:calc(100% - 95px);padding:10px;box-sizing:border-box;background-color:#f7f7f7;z-index:-1}.styles__questionsHolder___1CTvY-camelCase{padding:0 10px;width:100%;height:100%;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.styles__questionSection___PMWu3-camelCase,.styles__questionsHolder___1CTvY-camelCase{display:flex;flex-direction:column}.styles__questionContainer___2Nudz-camelCase{width:100%;min-height:100px;padding:0;margin:15px 0 0;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;z-index:1}.styles__questionImageContainer___1qfQ6-camelCase{width:120px;height:100px;background-color:#333;margin:auto 0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__questionImage___3rY_C-camelCase,.styles__questionImageContainer___1qfQ6-camelCase{border-top-left-radius:7px;border-bottom-left-radius:7px}.styles__questionImage___3rY_C-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__imageNumber___zbsWP-camelCase{font-family:Titan One,sans-serif;font-size:36px;color:#fff;text-shadow:2px 2px 8px grey;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__questionFunc___ORpa_-camelCase{margin:10px;width:27.5%;display:flex;justify-content:center;align-items:center}.styles__qMathField___3hW_w-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:16px!important}.styles__questionCenterContainer___n9Jtl-camelCase{display:flex;flex-direction:column;margin:5px 10px 5px 15px;width:calc(100% - 210px);min-height:85px}.styles__questionWithFunc___fFsXT-camelCase{width:calc(72.5% - 230px)}.styles__questionText___14Agk-camelCase{font-size:18px;line-height:21px;padding:5px 0;box-sizing:border-box;color:#3a3a3a;word-wrap:break-word;flex-grow:1;white-space:pre-line}.styles__addedContainer___1O2sq-camelCase,.styles__addQuestionButton___10JG--camelCase{width:80px;min-width:80px;height:80px;margin:auto 10px;display:flex;justify-content:center;align-items:center;font-weight:700}.styles__addQuestionButton___10JG--camelCase{border-radius:5px;background-color:#9a49aa;box-shadow:0 0 4px 2px rgba(0,0,0,.2);flex-direction:column;font-size:13px;line-height:15px;font-family:Nunito,sans-serif;color:#fff;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__addQuestionButton___10JG--camelCase:hover{transform:scale(.95)}.styles__addIcon___99Ryd-camelCase{font-size:32px;margin-bottom:5px}.styles__answerContainer___25d56-camelCase{width:calc(95% - 10px);padding:0 5px;margin:0 2.5% 10px;overflow:hidden;background-color:#fff;border-bottom-left-radius:7px;border-bottom-right-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row}.styles__answerText___3oGNk-camelCase{font-family:Nunito,sans-serif;font-size:14px;line-height:16px;color:#fff;text-align:center}.styles__answer___3CahM-camelCase{padding:5px;word-wrap:break-word;overflow-x:hidden}.styles__answer___3CahM-camelCase,.styles__answerImgContainer___3Lggr-camelCase{min-height:40px;margin:10px 5px;border-radius:7px;flex-grow:1;flex-basis:25%;display:flex;justify-content:center;align-items:center}.styles__answerImgContainer___3Lggr-camelCase{max-height:60px;overflow:none}.styles__answerImg___3He3q-camelCase{margin:auto;width:90%;height:90%;-o-object-fit:contain;object-fit:contain}.styles__answerImg___3He3q-camelCase,.styles__mathField___195d--camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mathField___195d--camelCase{cursor:default!important;color:#fff;border-color:#fff;font-size:12px!important}.styles__faded___DWtFK-camelCase{opacity:.5}@media only screen and (max-width:1200px){.styles__closeIcon___2dOk--camelCase{display:block}}@media only screen and (max-width:900px){.styles__mainContainer___6hjAF-camelCase{top:0;height:100%;z-index:20}.styles__left___36IK7-camelCase{top:unset;bottom:0;width:100%;height:120px;padding:10px;border-right:none;border-top:3px solid #e0e0e0}.styles__nothingContainer___377mF-camelCase{font-size:20px}.styles__nothingBlook___2uW5j-camelCase{width:70px;height:80.5px;margin-bottom:5px}.styles__hitsHolder___LLk1k-camelCase{display:flex;flex-direction:row;padding:5px 0;overflow-y:hidden;overflow-x:auto}.styles__hitContainer___11utO-camelCase{width:90vw;min-width:320px;margin:0 5px}.styles__hitImageContainer___1qVuH-camelCase{width:80px;min-width:80px;height:60px}.styles__setFillerText___3OORu-camelCase{font-size:16px;padding:2px 4px}.styles__setQuestionsText___1TN7B-camelCase{font-size:10px}.styles__hitRight___3-sgR-camelCase{min-height:60px;width:calc(100% - 85px)}.styles__setHeader___3JIfH-camelCase{font-size:12px;line-height:14px}.styles__setSpacer___26nnk-camelCase{height:0;flex-grow:2}.styles__setDescText___pOM_u-camelCase,.styles__setPlays___18iwg-camelCase{font-size:10px}.styles__setEditedText___3gPsH-camelCase{display:none}.styles__authorIcon___2XXXs-camelCase{font-size:8px;margin-right:3px}.styles__showMoreButton___1LpHt-camelCase{min-width:140px;min-height:35px;margin:auto 15px;font-size:18px}.styles__right___1iD6k-camelCase{top:95px;right:0;width:100%;height:calc(100% - 215px)}}@media only screen and (max-width:600px){.styles__questionContainer___2Nudz-camelCase{flex-direction:column}.styles__questionImageContainer___1qfQ6-camelCase{width:100%;height:100px;border-bottom-left-radius:0;border-top-right-radius:7px}.styles__questionImage___3rY_C-camelCase{-o-object-fit:contain;object-fit:contain}.styles__imageNumber___zbsWP-camelCase{font-size:42px}.styles__questionFunc___ORpa_-camelCase{width:90%;margin:10px auto}.styles__questionCenterContainer___n9Jtl-camelCase{margin:5px auto;width:90%;height:auto}.styles__questionText___14Agk-camelCase{margin-bottom:10px}.styles__addedContainer___1O2sq-camelCase,.styles__addQuestionButton___10JG--camelCase{width:160px;min-width:160px;height:40px;margin:5px auto}.styles__addQuestionButton___10JG--camelCase{flex-direction:row;font-size:16px;line-height:18px}.styles__addIcon___99Ryd-camelCase{font-size:18px;margin-bottom:0;margin-right:5px}.styles__answerContainer___25d56-camelCase{flex-direction:column}.styles__answer___3CahM-camelCase,.styles__answerImgContainer___3Lggr-camelCase{margin:4px}}", ""]), t.locals = {
                modal: "styles__modal___3YKeO-camelCase",
                mainContainer: "styles__mainContainer___6hjAF-camelCase",
                slideIn: "styles__slideIn___PweGA-camelCase",
                slideOut: "styles__slideOut___2qPxq-camelCase",
                closeIcon: "styles__closeIcon___2dOk--camelCase",
                top: "styles__top___2Rv9d-camelCase",
                searchContainer: "styles__searchContainer___200va-camelCase",
                searchIcon: "styles__searchIcon___-YGln-camelCase",
                searchInput: "styles__searchInput___3YyVQ-camelCase",
                filtersHolder: "styles__filtersHolder___Np-g6-camelCase",
                filterIcon: "styles__filterIcon___3B3jN-camelCase",
                filtersColumn: "styles__filtersColumn___3gQQN-camelCase",
                filterRow: "styles__filterRow___31wnb-camelCase",
                filters: "styles__filters___2QcHy-camelCase",
                checkBox: "styles__checkBox___1aHZZ-camelCase",
                checkIcon: "styles__checkIcon___3NhOg-camelCase",
                checkYes: "styles__checkYes___16d0X-camelCase",
                checkNo: "styles__checkNo___A3ur5-camelCase",
                left: "styles__left___36IK7-camelCase",
                nothingContainer: "styles__nothingContainer___377mF-camelCase",
                nothingBlook: "styles__nothingBlook___2uW5j-camelCase",
                hitsHolder: "styles__hitsHolder___LLk1k-camelCase",
                hitContainer: "styles__hitContainer___11utO-camelCase",
                hitImageContainer: "styles__hitImageContainer___1qVuH-camelCase",
                coverImage: "styles__coverImage___1ad2Z-camelCase",
                setFillerText: "styles__setFillerText___3OORu-camelCase",
                setQuestionsText: "styles__setQuestionsText___1TN7B-camelCase",
                hitRight: "styles__hitRight___3-sgR-camelCase",
                setHeader: "styles__setHeader___3JIfH-camelCase",
                setSpacer: "styles__setSpacer___26nnk-camelCase",
                setPlays: "styles__setPlays___18iwg-camelCase",
                verifiedIcon: "styles__verifiedIcon___3BZTt-camelCase",
                setDescText: "styles__setDescText___pOM_u-camelCase",
                setAuthorContainer: "styles__setAuthorContainer___3-8GJ-camelCase",
                authorIcon: "styles__authorIcon___2XXXs-camelCase",
                showMoreButton: "styles__showMoreButton___1LpHt-camelCase",
                right: "styles__right___1iD6k-camelCase",
                questionsHolder: "styles__questionsHolder___1CTvY-camelCase",
                questionSection: "styles__questionSection___PMWu3-camelCase",
                questionContainer: "styles__questionContainer___2Nudz-camelCase",
                questionImageContainer: "styles__questionImageContainer___1qfQ6-camelCase",
                questionImage: "styles__questionImage___3rY_C-camelCase",
                imageNumber: "styles__imageNumber___zbsWP-camelCase",
                questionFunc: "styles__questionFunc___ORpa_-camelCase",
                qMathField: "styles__qMathField___3hW_w-camelCase",
                questionCenterContainer: "styles__questionCenterContainer___n9Jtl-camelCase",
                questionWithFunc: "styles__questionWithFunc___fFsXT-camelCase",
                questionText: "styles__questionText___14Agk-camelCase",
                addedContainer: "styles__addedContainer___1O2sq-camelCase",
                addQuestionButton: "styles__addQuestionButton___10JG--camelCase",
                addIcon: "styles__addIcon___99Ryd-camelCase",
                answerContainer: "styles__answerContainer___25d56-camelCase",
                answerText: "styles__answerText___3oGNk-camelCase",
                answer: "styles__answer___3CahM-camelCase",
                answerImgContainer: "styles__answerImgContainer___3Lggr-camelCase",
                answerImg: "styles__answerImg___3He3q-camelCase",
                mathField: "styles__mathField___195d--camelCase",
                faded: "styles__faded___DWtFK-camelCase",
                setEditedText: "styles__setEditedText___3gPsH-camelCase"
            }
        },
        "5rT7": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___lRkq8-camelCase{background-color:#9a49aa;width:100%;height:55px;margin:0;padding:0;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;z-index:15;position:fixed;top:0;left:0}.styles__headerTextLeft___3pmok-camelCase{font-size:40px;text-align:left;margin-left:40px;font-family:Titan One,sans-serif;text-decoration:none}.styles__headerTextLeft___3pmok-camelCase,.styles__mHamburgerIcon___2Je1h-camelCase{color:#fff;line-height:55px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__mHamburgerIcon___2Je1h-camelCase{font-size:30px;width:40px;position:absolute;top:0;right:20px;opacity:0;text-align:center;display:none}.styles__mNavMenu___AQ1_Z-camelCase{position:fixed;left:100vw;top:0;width:80vw;height:100%;background-color:rgba(154,73,170,.95);overflow-x:hidden;overflow-y:scroll;z-index:50;transition:.2s;display:none}.styles__closeIcon___6Bq7v-camelCase{position:absolute;top:25px;right:35px;color:#f1f1f1;font-size:35px;font-weight:700;transition:.3s;outline:none;text-decoration:none;cursor:pointer}.styles__closeIcon___6Bq7v-camelCase:focus,.styles__closeIcon___6Bq7v-camelCase:hover{color:#bbb}.styles__mNavColumn___2P-Hi-camelCase{position:absolute;display:flex;flex-direction:column;justify-content:flex-start;top:60px;left:34px}.styles__mNavContainer___1hW0E-camelCase{height:40px;width:400px;display:flex;flex-direction:row;align-items:center;margin-top:3px;margin-bottom:3px;outline:none;text-decoration:none}.styles__mNavText___hwM-N-camelCase{font-family:Nunito,sans-serif;font-size:24px;padding-left:9px}.styles__mNavIcon___2lvnV-camelCase,.styles__mNavText___hwM-N-camelCase{line-height:40px;color:#fff}.styles__mNavIcon___2lvnV-camelCase{font-size:25px;width:35px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerRight___3MqKm-camelCase{margin-right:40px;justify-content:right}.styles__headerRight___3MqKm-camelCase,.styles__navContainer___361rJ-camelCase{display:flex;flex-direction:row;align-items:center}.styles__navContainer___361rJ-camelCase{height:52px;border-bottom:3px;border-bottom-color:hsla(0,0%,100%,0);border-bottom-style:solid;padding:0 15px;max-width:28px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:all .3s linear;overflow:hidden;text-decoration:none}.styles__selected___5nUkk-camelCase{border-bottom-color:#fff}.styles__expand___2FhE3-camelCase{max-width:175px}.styles__navContainer___361rJ-camelCase:focus,.styles__navContainer___361rJ-camelCase:hover{max-width:175px;border-bottom-color:#fff;transition:all .3s linear}.styles__navContainer___361rJ-camelCase:focus>.styles__navText___1wmac-camelCase,.styles__navContainer___361rJ-camelCase:hover>.styles__navText___1wmac-camelCase{opacity:1;transition:all .3s linear}.styles__navText___1wmac-camelCase{font-family:Nunito,sans-serif;line-height:55px;font-size:20px;color:#fff;padding-left:9px;opacity:0}.styles__listIcon___14Cum-camelCase{line-height:52px}.styles__createIcon___26fPU-camelCase,.styles__listIcon___14Cum-camelCase{font-size:25px;color:#fff;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__createIcon___26fPU-camelCase{line-height:50px}.styles__statsIcon___1liMg-camelCase{font-size:29px;line-height:53px}.styles__statsIcon___1liMg-camelCase,.styles__storeIcon___oQj2v-camelCase{color:#fff;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__storeIcon___oQj2v-camelCase{font-size:24px;line-height:51px}.styles__logoutIcon___1wJ2--camelCase{font-size:26px;color:#fff;line-height:52px;width:25px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media only screen and (max-width:850px){.styles__header___lRkq8-camelCase{position:absolute}.styles__headerTextLeft___3pmok-camelCase{font-size:36px;margin-left:20px}.styles__mHamburgerIcon___2Je1h-camelCase{display:block;opacity:1}.styles__mNavMenu___AQ1_Z-camelCase{display:block}.styles__headerRight___3MqKm-camelCase{display:none}}", ""]), t.locals = {
                header: "styles__header___lRkq8-camelCase",
                headerTextLeft: "styles__headerTextLeft___3pmok-camelCase",
                mHamburgerIcon: "styles__mHamburgerIcon___2Je1h-camelCase",
                mNavMenu: "styles__mNavMenu___AQ1_Z-camelCase",
                closeIcon: "styles__closeIcon___6Bq7v-camelCase",
                mNavColumn: "styles__mNavColumn___2P-Hi-camelCase",
                mNavContainer: "styles__mNavContainer___1hW0E-camelCase",
                mNavText: "styles__mNavText___hwM-N-camelCase",
                mNavIcon: "styles__mNavIcon___2lvnV-camelCase",
                headerRight: "styles__headerRight___3MqKm-camelCase",
                navContainer: "styles__navContainer___361rJ-camelCase",
                selected: "styles__selected___5nUkk-camelCase",
                expand: "styles__expand___2FhE3-camelCase",
                navText: "styles__navText___1wmac-camelCase",
                listIcon: "styles__listIcon___14Cum-camelCase",
                createIcon: "styles__createIcon___26fPU-camelCase",
                statsIcon: "styles__statsIcon___1liMg-camelCase",
                storeIcon: "styles__storeIcon___oQj2v-camelCase",
                logoutIcon: "styles__logoutIcon___1wJ2--camelCase"
            }
        },
        "8RFr": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("TSYQ"),
                s = a.n(r),
                i = a("17x9"),
                l = a.n(i),
                c = a("sbeJ"),
                _ = a("j9P7"),
                u = a.n(_);

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t) {
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

            function f(e) {
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
                    var a, n = x(e);
                    if (t) {
                        var o = x(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return h(this, a)
                }
            }

            function h(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return y(e)
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function x(e) {
                return (x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var g = function(e) {
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
                var t, a, n, r = f(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = r.call(this, e)).state = {
                        timer: 15,
                        recordState: c.a.NONE,
                        audioData: null,
                        error: ""
                    }, t.uploadInput = o.a.createRef(), t.onStop = t.onStop.bind(y(t)), t.onUpload = t.onUpload.bind(y(t)), t.startRecording = t.startRecording.bind(y(t)), t.pauseRecording = t.pauseRecording.bind(y(t)), t.stopRecording = t.stopRecording.bind(y(t)), t
                }
                return t = i, (a = [{
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timerInterval)
                    }
                }, {
                    key: "onStop",
                    value: function(e) {
                        var t = this;
                        this.setState({
                            audioData: null
                        }, (function() {
                            t.setState({
                                audioData: e,
                                error: ""
                            })
                        }))
                    }
                }, {
                    key: "onUpload",
                    value: function(e) {
                        var t = this;
                        e.stopPropagation(), e.preventDefault();
                        var a = e.target.files[0];
                        if (a) return a.size > 2e6 ? this.setState({
                            error: "File too big (2MB Max)"
                        }) : void this.setState({
                            audioData: null
                        }, (function() {
                            t.setState({
                                error: "",
                                audioData: {
                                    blob: a,
                                    url: URL.createObjectURL(a)
                                }
                            })
                        }))
                    }
                }, {
                    key: "startRecording",
                    value: function() {
                        var e = this;
                        this.setState({
                            recordState: c.a.START
                        }, (function() {
                            e.timerInterval = setInterval((function() {
                                var t = e.state.timer - 1;
                                e.setState({
                                    timer: t
                                }), t <= 0 && e.stopRecording()
                            }), 1e3)
                        }))
                    }
                }, {
                    key: "pauseRecording",
                    value: function() {
                        clearInterval(this.timerInterval), this.setState({
                            recordState: c.a.PAUSE
                        })
                    }
                }, {
                    key: "stopRecording",
                    value: function() {
                        clearInterval(this.timerInterval), this.setState({
                            recordState: c.a.STOP,
                            timer: 15
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: u.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose
                        }), o.a.createElement("div", {
                            className: u.a.mainContainer
                        }, o.a.createElement("div", {
                            className: u.a.header
                        }, "Audio Recorder"), o.a.createElement("div", {
                            className: u.a.text
                        }, "Record your audio:"), o.a.createElement("div", {
                            className: u.a.audioRow
                        }, o.a.createElement("div", {
                            className: u.a.audioWrapper
                        }, o.a.createElement(c.b, {
                            state: this.state.recordState,
                            onStop: this.onStop,
                            type: "audio/mpeg",
                            backgroundColor: "#fff",
                            foregroundColor: "#3a3a3a",
                            canvasWidth: 200,
                            canvasHeight: 100
                        })), [c.a.PAUSE, c.a.START].includes(this.state.recordState) ? o.a.createElement("div", {
                            className: u.a.timer
                        }, this.state.timer) : null), o.a.createElement("div", {
                            className: u.a.buttonRow
                        }, o.a.createElement("i", {
                            className: s()("fas fa-file-upload", u.a.iconButton),
                            title: "Upload",
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.uploadInput.current.click()
                            }
                        }), o.a.createElement("i", {
                            className: s()(this.state.recordState !== c.a.NONE ? "fas fa-play" : "fas fa-microphone-alt", u.a.iconButton),
                            title: "Record",
                            role: "button",
                            tabIndex: 0,
                            onClick: this.startRecording
                        }), this.state.recordState !== c.a.NONE ? o.a.createElement(o.a.Fragment, null, o.a.createElement("i", {
                            className: s()("fas fa-pause", u.a.iconButton),
                            title: "Pause",
                            role: "button",
                            tabIndex: 0,
                            onClick: this.pauseRecording
                        }), o.a.createElement("i", {
                            className: s()("fas fa-stop", u.a.iconButton),
                            title: "Stop",
                            role: "button",
                            tabIndex: 0,
                            onClick: this.stopRecording
                        })) : null), o.a.createElement("input", {
                            type: "file",
                            style: {
                                display: "none"
                            },
                            onChange: this.onUpload,
                            ref: this.uploadInput,
                            accept: "audio/*"
                        }), this.state.error ? o.a.createElement("div", {
                            className: u.a.errorContainer
                        }, o.a.createElement("i", {
                            className: s()(u.a.errorIcon, "fas fa-times-circle")
                        }), o.a.createElement("div", {
                            className: u.a.errorText
                        }, this.state.error)) : this.state.audioData ? o.a.createElement(o.a.Fragment, null, o.a.createElement("audio", {
                            controls: !0,
                            className: u.a.audio
                        }, o.a.createElement("source", {
                            src: this.state.audioData.url,
                            type: "audio/mpeg"
                        })), o.a.createElement("div", {
                            className: u.a.insertButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.props.onDone(e.state.audioData)
                            }
                        }, "Insert")) : null))
                    }
                }]) && p(t.prototype, a), n && p(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            g.propTypes = {
                onDone: l.a.func.isRequired,
                onClose: l.a.func.isRequired
            }, t.a = g
        },
        AwcY: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("TSYQ"),
                s = a.n(r),
                i = a("17x9"),
                l = a.n(i),
                c = a("yzbm"),
                _ = a("eYat"),
                u = a("Iab2"),
                m = a("ZaQo"),
                p = a.n(m),
                d = a("XOuL"),
                f = a("LHn/");

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                y = function() {
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
                        i = new N(o || []);
                    return n(s, "_invoke", {
                        value: w(e, a, i)
                    }), s
                }

                function _(e, t, a) {
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
                var u = {};

                function m() {}

                function p() {}

                function d() {}
                var f = {};
                l(f, r, (function() {
                    return this
                }));
                var x = Object.getPrototypeOf,
                    g = x && x(x(S([])));
                g && g !== t && a.call(g, r) && (f = g);
                var b = d.prototype = m.prototype = Object.create(f);

                function C(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = _(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                u = c.value;
                                            return u && "object" == h(u) && a.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(u).then((function(e) {
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

                function w(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return T()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = k(s, a);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = _(e, t, a);
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
                }

                function k(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = _(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function I(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function N(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function S(e) {
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
                        next: T
                    }
                }

                function T() {
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
                }), p.displayName = l(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, l(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, C(v.prototype), l(v.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new v(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, C(b), l(b, i, "Generator"), l(b, r, (function() {
                    return this
                })), l(b, "toString", (function() {
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
                }, e.values = S, N.prototype = {
                    constructor: N,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
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
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), I(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    I(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function x(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function g(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = k(e);
                    if (t) {
                        var o = k(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return v(this, a)
                }
            }

            function v(e, t) {
                if (t && ("object" === h(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return w(e)
            }

            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function() {
                    Object(u.saveAs)(f.a.basic.spreadsheetTemplate, "Blooket Spreadsheet Import Template.xlsx")
                },
                I = function(e) {
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
                        }), t && b(e, t)
                    }(u, e);
                    var t, a, n, r, i, l = C(u);

                    function u(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (t = l.call(this, e)).state = {
                            loading: !1
                        }, t.dropzoneRef = o.a.createRef(), t.onDrop = t.onDrop.bind(w(t)), t
                    }
                    return t = u, (a = [{
                        key: "onDrop",
                        value: (r = y().mark((function e(t) {
                            var a, n, o;
                            return y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.state.loading) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.setState({
                                                loading: !0,
                                                error: ""
                                            }), !(a = t[0])) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 7, a.text();
                                    case 7:
                                        return n = e.sent, e.next = 10, new Promise((function(e) {
                                            Object(_.parse)(n, {}, (function(t, a) {
                                                t ? Object(_.parse)(n, {
                                                    delimiter: ";"
                                                }, (function(t, a) {
                                                    e(a.slice(2).filter((function(e) {
                                                        return e.length >= 8 && "" !== e[1]
                                                    })).map((function(e) {
                                                        return e.slice(0, 9)
                                                    })))
                                                })) : e(a.slice(2).filter((function(e) {
                                                    return e.length >= 8 && "" !== e[1]
                                                })).map((function(e) {
                                                    return e.slice(0, 9)
                                                })))
                                            }))
                                        }));
                                    case 10:
                                        o = e.sent, this.props.done(null, "", !1, o), e.next = 15;
                                        break;
                                    case 14:
                                        this.setState({
                                            loading: !1,
                                            error: "Error uploading the file."
                                        });
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), i = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var o = r.apply(e, t);

                                function s(e) {
                                    x(o, a, n, s, i, "next", e)
                                }

                                function i(e) {
                                    x(o, a, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function(e) {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                className: p.a.mainContainer
                            }, o.a.createElement("i", {
                                className: s()(p.a.closeIcon, "fas fa-times"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.props.close()
                                }
                            }), o.a.createElement("div", {
                                className: p.a.header
                            }, "Import From Spreadsheet"), o.a.createElement(c.a, {
                                multiple: !1,
                                accept: ".csv",
                                onDropAccepted: this.onDrop,
                                onDropRejected: function() {
                                    return e.setState({
                                        error: "CSV Denied (Check Size < 2.5 MB)"
                                    })
                                },
                                className: p.a.dropContainer,
                                activeClassName: p.a.activeDropContainer,
                                ref: this.dropzoneRef,
                                maxSize: 25e5,
                                disableClick: !0
                            }, o.a.createElement("div", {
                                className: p.a.desc
                            }, "1. ", o.a.createElement("a", {
                                href: "https://docs.google.com/spreadsheets/d/1zg8YPkiF1sFu-p_PLbraRtOm1jlQ0uks-aCUtZCk-JI/copy",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: p.a.link
                            }, "Copy"), " or ", o.a.createElement("div", {
                                role: "button",
                                tabIndex: 0,
                                onClick: E,
                                className: p.a.link
                            }, "Download"), " our template."), o.a.createElement("div", {
                                className: p.a.desc
                            }, "2. Fill it out and export as CSV"), o.a.createElement("div", {
                                className: p.a.desc
                            }, "3. Upload Below"), this.state.loading ? o.a.createElement(d.a, null) : o.a.createElement("div", {
                                className: p.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.dropzoneRef.current.open()
                                }
                            }, "Upload CSV")), this.state.error ? o.a.createElement("div", {
                                className: p.a.errorContainer
                            }, o.a.createElement("i", {
                                className: s()(p.a.errorIcon, "fas fa-times-circle")
                            }), o.a.createElement("div", {
                                className: p.a.errorText
                            }, this.state.error)) : null)
                        }
                    }]) && g(t.prototype, a), n && g(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), u
                }(o.a.Component);
            I.propTypes = {
                done: l.a.func.isRequired,
                close: l.a.func.isRequired
            }, t.a = I
        },
        CUKT: function(e, t, a) {
            var n = a("j8ID");
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
        D1S4: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___2hp9P-camelCase{position:absolute;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___Y7P5T-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:300px;max-width:500px;width:90%;height:90%;max-height:550px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;box-sizing:border-box;padding-bottom:15px;overflow:hidden;z-index:16}.styles__mainRegularBody___2KphK-camelCase{overflow-x:hidden;overflow-y:auto;position:absolute;top:65px;left:5%;width:90%;height:calc(100% - 80px);text-align:center}.styles__mainRegularBody___2KphK-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__mainRegularBody___2KphK-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__mainRegularBody___2KphK-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__header___818O4-camelCase{position:absolute;top:0;left:0;width:100%;height:50px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;font-size:24px}.styles__group___2P3yX-camelCase{padding:3px 13px;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__groupName___Pghjq-camelCase{font-size:16px;text-align:left;padding:2px}.styles__symbolContainer___11_8H-camelCase{flex-flow:row wrap}.styles__symbol___30Xu3-camelCase,.styles__symbolContainer___11_8H-camelCase{display:flex;align-items:center}.styles__symbol___30Xu3-camelCase{border:1px solid rgba(0,0,0,.4);border-radius:3px;width:20px;height:30px;margin:2px;justify-content:center;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:transparent}.styles__symbol___30Xu3-camelCase:hover{background-color:rgba(0,0,0,.1)}.styles__link___16Uk2-camelCase{color:#0bc2cf}@media only screen and (max-width:600px){.styles__mainContainer___Y7P5T-camelCase{width:90%}}", ""]), t.locals = {
                modal: "styles__modal___2hp9P-camelCase",
                mainContainer: "styles__mainContainer___Y7P5T-camelCase",
                mainRegularBody: "styles__mainRegularBody___2KphK-camelCase",
                header: "styles__header___818O4-camelCase",
                group: "styles__group___2P3yX-camelCase",
                groupName: "styles__groupName___Pghjq-camelCase",
                symbolContainer: "styles__symbolContainer___11_8H-camelCase",
                symbol: "styles__symbol___30Xu3-camelCase",
                link: "styles__link___16Uk2-camelCase"
            }
        },
        HM3J: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainContainer___z3WcL-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:550px;width:80%;max-height:90%;min-height:60%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;overflow-x:hidden;overflow-y:auto}.styles__mainContainer___z3WcL-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__mainContainer___z3WcL-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__mainContainer___z3WcL-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__closeIcon___hvFwA-camelCase{position:absolute;top:10px;right:10px;font-size:26px;color:#3a3a3a;cursor:pointer;transition:.2s;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__closeIcon___hvFwA-camelCase:focus,.styles__closeIcon___hvFwA-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__searchContainer___3M_mS-camelCase{width:85%;min-width:300px;margin:20px auto;border:3px solid #0bc2cf;border-radius:6px;height:50px;display:flex;flex-direction:row;background-color:#fff}.styles__searchIcon___3GRxf-camelCase{font-size:25px;color:#fff;background-color:#0bc2cf;border-radius:5px;line-height:42px;margin:3px 3px 3px 10px;width:46px;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__searchInput___3mwUX-camelCase{border:none;margin:6px 2px 4px 15px;height:40px;width:calc(100% - 51px);font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__searchInput___3mwUX-camelCase::-webkit-search-cancel-button,.styles__searchInput___3mwUX-camelCase::-webkit-search-decoration,.styles__searchInput___3mwUX-camelCase::-webkit-search-results-button,.styles__searchInput___3mwUX-camelCase::-webkit-search-results-decoration{-webkit-appearance:none}.styles__loaderContainer___2i1Ip-camelCase{width:100%;margin:40px 0;display:flex;flex-direction:row;justify-content:center}.styles__logoText___2CmN6-camelCase{font-family:Nunito,sans-serif;font-size:22px;color:#3a3a3a}.styles__logoLink___2a3H9-camelCase{text-decoration:none;outline:none}.styles__unsplashLogo___vuHDR-camelCase{margin-top:10px;width:100px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__imagesHolder___1wGgU-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:0 auto}.styles__imageContainer___18Alg-camelCase{width:160px;height:180px;display:flex;flex-direction:column;margin:10px}.styles__imageButton___3HvFX-camelCase{outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;width:160px;height:160px;border-radius:5px;transition:.2s}.styles__imageButton___3HvFX-camelCase:focus,.styles__imageButton___3HvFX-camelCase:hover{transform:scale(.95)}.styles__image___pl4lW-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:5px}.styles__imageText___1LnP6-camelCase{font-family:Nunito,sans-serif;font-size:12px;margin-top:5px;text-align:left}.styles__imageLink___3yT-X-camelCase,.styles__imageText___1LnP6-camelCase{color:#3a3a3a}.styles__showMoreButton___nKuF3-camelCase{padding:5px 25px;display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;border-radius:7px;margin:25px auto;cursor:pointer;outline:none;font-family:Nunito,sans-serif;font-size:20px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__showMoreButton___nKuF3-camelCase:hover{transform:scale(.95)}@media only screen and (max-width:600px){.styles__mainContainer___z3WcL-camelCase{min-width:300px;width:90%;min-height:90%;max-height:90%;height:90%}.styles__searchContainer___3M_mS-camelCase{width:calc(100% - 30px);margin:40px auto 15px}.styles__imageContainer___18Alg-camelCase{width:120px;height:140px;margin:9px 7px}.styles__imageButton___3HvFX-camelCase{width:120px;height:120px}.styles__imageText___1LnP6-camelCase{font-size:11px}}", ""]), t.locals = {
                mainContainer: "styles__mainContainer___z3WcL-camelCase",
                closeIcon: "styles__closeIcon___hvFwA-camelCase",
                searchContainer: "styles__searchContainer___3M_mS-camelCase",
                searchIcon: "styles__searchIcon___3GRxf-camelCase",
                searchInput: "styles__searchInput___3mwUX-camelCase",
                loaderContainer: "styles__loaderContainer___2i1Ip-camelCase",
                logoText: "styles__logoText___2CmN6-camelCase",
                logoLink: "styles__logoLink___2a3H9-camelCase",
                unsplashLogo: "styles__unsplashLogo___vuHDR-camelCase",
                imagesHolder: "styles__imagesHolder___1wGgU-camelCase",
                imageContainer: "styles__imageContainer___18Alg-camelCase",
                imageButton: "styles__imageButton___3HvFX-camelCase",
                image: "styles__image___pl4lW-camelCase",
                imageText: "styles__imageText___1LnP6-camelCase",
                imageLink: "styles__imageLink___3yT-X-camelCase",
                showMoreButton: "styles__showMoreButton___nKuF3-camelCase"
            }
        },
        IPze: function(e, t, a) {
            var n = a("y7sT");
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
        Ip1f: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("TSYQ"),
                s = a.n(r),
                i = a("17x9"),
                l = a.n(i),
                c = a("IPze"),
                _ = a.n(c),
                u = a("XOuL");

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t) {
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

            function f(e) {
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
                    var a, n = x(e);
                    if (t) {
                        var o = x(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return h(this, a)
                }
            }

            function h(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return y(e)
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function x(e) {
                return (x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var g = function(e) {
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
                var t, a, n, r = f(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = r.call(this, e)).state = {
                        stage: 1,
                        input: "",
                        loading: !1,
                        isFlipped: !1
                    }, t.onCreate = t.onCreate.bind(y(t)), t
                }
                return t = i, (a = [{
                    key: "onCreate",
                    value: function(e) {
                        this.setState({
                            loading: !0
                        }), this.props.done(e, this.state.input, this.state.isFlipped)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: _.a.mainContainer
                        }, o.a.createElement("i", {
                            className: s()(_.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.props.close()
                            }
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549659668/SVG/QuizletFullLogo.svg",
                            alt: "Quizlet",
                            className: _.a.logoHeader
                        }), o.a.createElement("div", {
                            className: _.a.stepHeader
                        }, 1 === this.state.stage ? "Step 1: Find a Set" : 2 === this.state.stage ? "Step 2: How to Export" : "Step 3: Paste and Create"), 1 === this.state.stage ? o.a.createElement("div", null, o.a.createElement("div", {
                            className: _.a.stepDesc
                        }, "Any of Quizlet's sets can quickly be converted into a Blooket set! Then, you can go back and edit it to make it your own. Once you find a set, hit the next button below.", " For the best results, use Quizlet sets that list the answer first and the question second."), o.a.createElement("div", {
                            className: _.a.buttonContainer
                        }, o.a.createElement("a", {
                            className: _.a.button,
                            href: "https://quizlet.com/latest",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, o.a.createElement("i", {
                            className: s()(_.a.userIcon, "fas fa-user-astronaut")
                        }), o.a.createElement("div", {
                            className: _.a.buttonText
                        }, "Your Quizlet")), o.a.createElement("a", {
                            className: _.a.button,
                            href: "https://quizlet.com/subject",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, o.a.createElement("i", {
                            className: s()(_.a.searchIcon, "fas fa-search")
                        }), o.a.createElement("div", {
                            className: _.a.buttonText
                        }, "Search Quizlet")))) : 2 === this.state.stage ? o.a.createElement("div", null, o.a.createElement("div", {
                            className: _.a.stepDesc
                        }, "Follow the steps below to export a set from Quizlet. Then, hit the next button after copying the set."), o.a.createElement("div", {
                            className: _.a.exportStep
                        }, o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549673561/QuizletImportStep1.png",
                            alt: "Export Step One",
                            className: _.a.imageStep
                        }), o.a.createElement("div", {
                            className: _.a.exportInstructions
                        }, "Click the '3 dots' button on the set you want to export")), o.a.createElement("div", {
                            className: _.a.exportStep
                        }, o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549673561/QuizletImportStep2.png",
                            alt: "Export Step Two",
                            className: _.a.imageStep
                        }), o.a.createElement("div", {
                            className: _.a.exportInstructions
                        }, "Under the dropdown menu, click 'Export'")), o.a.createElement("div", {
                            className: _.a.exportStep
                        }, o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549673561/QuizletImportStep3.png",
                            alt: "Export Step Three",
                            className: _.a.imageStep3
                        }), o.a.createElement("div", {
                            className: _.a.exportInstructions
                        }, "Leave 'Tab' and 'New line' selected, then click 'Copy Text'"))) : o.a.createElement("div", null, o.a.createElement("div", {
                            className: _.a.stepDesc
                        }, "Now, paste the text into the text box below and hit the 'Add Questions' button under it."), o.a.createElement("div", {
                            className: _.a.stepRow
                        }, o.a.createElement("div", {
                            className: s()(_.a.checkBox, this.state.isFlipped ? _.a.checkYes : _.a.checkNo),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isFlipped: !e.state.isFlipped
                                })
                            }
                        }, o.a.createElement("i", {
                            className: s()(_.a.checkIcon, "fas fa-check")
                        })), o.a.createElement("div", {
                            className: _.a.checkText
                        }, "Flip questions and answers")), o.a.createElement("textarea", {
                            className: _.a.input,
                            onChange: function(t) {
                                return e.setState({
                                    input: t.target.value
                                })
                            },
                            "data-gramm_editor": "false"
                        })), this.state.loading ? o.a.createElement(u.a, null) : 3 === this.state.stage ? o.a.createElement("div", {
                            className: _.a.nextButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function(t) {
                                return e.onCreate(t)
                            }
                        }, "Add Questions") : o.a.createElement("div", {
                            className: _.a.nextButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    stage: e.state.stage + 1
                                })
                            }
                        }, "Next Step"))
                    }
                }]) && p(t.prototype, a), n && p(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            g.propTypes = {
                done: l.a.func.isRequired,
                close: l.a.func.isRequired
            }, t.a = g
        },
        JMOU: function(e, t, a) {
            var n = a("D1S4");
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
        "O/BK": function(e, t, a) {
            var n = a("qRUB");
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
        VUSw: function(e, t, a) {
            var n = a("HM3J");
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
        VgLj: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("17x9"),
                s = a.n(r),
                i = a("TSYQ"),
                l = a.n(i),
                c = a("55Ip"),
                _ = a("H1WH"),
                u = a("Yz+4"),
                m = a.n(u),
                p = a("qnYv");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function h(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function x(e) {
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
                    var a, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return g(this, a)
                }
            }

            function g(e, t) {
                if (t && ("object" === d(t) || "function" == typeof t)) return t;
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
            var C = function(e) {
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
                    }), t && y(e, t)
                }(s, e);
                var t, a, n, r = x(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = r.call(this, e)).state = {
                        ready: !1,
                        open: !1,
                        logoutLink: ""
                    }, t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        p.a.get("/api/config").then((function(t) {
                            e.setState({
                                logoutLink: "".concat(t.data.frontendIDBase, "/logout")
                            })
                        })), this.timeout = setTimeout((function() {
                            e.setState({
                                ready: !0
                            })
                        }), 100)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, n, r, s, i, u = this;
                        return o.a.createElement("div", {
                            className: m.a.header
                        }, _.isMobile ? o.a.createElement("div", {
                            className: m.a.headerTextLeft
                        }, "Blooket") : o.a.createElement(c.b, {
                            className: m.a.headerTextLeft,
                            to: "/"
                        }, "Blooket"), o.a.createElement("i", {
                            className: l()(m.a.mHamburgerIcon, "fas fa-bars"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return u.setState({
                                    open: !0
                                })
                            }
                        }), o.a.createElement("div", {
                            className: m.a.mNavMenu,
                            style: {
                                transform: this.state.open ? "translateX(-100%)" : null
                            }
                        }, o.a.createElement("i", {
                            className: l()(m.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return u.setState({
                                    open: !1
                                })
                            }
                        }), o.a.createElement("div", {
                            className: m.a.mNavColumn
                        }, o.a.createElement("a", {
                            className: m.a.mNavContainer,
                            href: "".concat("https://www.blooket.com", "/")
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-paper-plane")
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Landing Page")), o.a.createElement("a", {
                            className: m.a.mNavContainer,
                            href: "".concat("https://play.blooket.com", "/play")
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-play")
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Play")), o.a.createElement(c.b, {
                            className: m.a.mNavContainer,
                            to: "/discover"
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-compass")
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Discover")), o.a.createElement(c.b, {
                            className: m.a.mNavContainer,
                            to: "/dashboard"
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-home"),
                            style: {
                                fontSize: 26
                            }
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Dashboard")), o.a.createElement(c.b, {
                            className: m.a.mNavContainer,
                            to: "/create"
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-edit")
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Create")), o.a.createElement(c.b, {
                            className: m.a.mNavContainer,
                            to: "/stats"
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-chart-bar"),
                            style: {
                                fontSize: 29
                            }
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Stats")), o.a.createElement(c.b, {
                            className: m.a.mNavContainer,
                            to: "/market"
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-store")
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Market")), o.a.createElement(c.b, {
                            className: m.a.mNavContainer,
                            to: "/blooks"
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-suitcase")
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Blooks")), o.a.createElement(c.b, {
                            className: m.a.mNavContainer,
                            to: "/settings"
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-cog"),
                            style: {
                                fontSize: 26
                            }
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Settings")), o.a.createElement("a", {
                            className: m.a.mNavContainer,
                            href: this.state.logoutLink
                        }, o.a.createElement("i", {
                            className: l()(m.a.mNavIcon, "fas fa-sign-out-alt"),
                            style: {
                                fontSize: 26
                            }
                        }), o.a.createElement("div", {
                            className: m.a.mNavText
                        }, "Logout")))), o.a.createElement("div", {
                            className: m.a.headerRight
                        }, o.a.createElement("a", {
                            className: m.a.navContainer,
                            href: "".concat("https://play.blooket.com", "/play")
                        }, o.a.createElement("i", {
                            className: l()(m.a.listIcon, "fas fa-play")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Play")), o.a.createElement(c.b, {
                            className: l()(m.a.navContainer, (e = {}, f(e, m.a.selected, "Discover" === this.props.page), f(e, m.a.expand, "Discover" === this.props.page && !this.state.ready), e)),
                            to: "/discover"
                        }, o.a.createElement("i", {
                            className: l()(m.a.listIcon, "fas fa-compass")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Discover")), o.a.createElement(c.b, {
                            className: l()(m.a.navContainer, (t = {}, f(t, m.a.selected, "Dashboard" === this.props.page), f(t, m.a.expand, "Dashboard" === this.props.page && !this.state.ready), t)),
                            to: "/dashboard"
                        }, o.a.createElement("i", {
                            className: l()(m.a.listIcon, "fas fa-home")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Dashboard")), o.a.createElement(c.b, {
                            className: l()(m.a.navContainer, (a = {}, f(a, m.a.selected, "Create" === this.props.page), f(a, m.a.expand, "Create" === this.props.page && !this.state.ready), a)),
                            to: "/create"
                        }, o.a.createElement("i", {
                            className: l()(m.a.createIcon, "fas fa-edit")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Create")), o.a.createElement(c.b, {
                            className: l()(m.a.navContainer, (n = {}, f(n, m.a.selected, "Stats" === this.props.page), f(n, m.a.expand, "Stats" === this.props.page && !this.state.ready), n)),
                            to: "/stats"
                        }, o.a.createElement("i", {
                            className: l()(m.a.statsIcon, "fas fa-chart-bar")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Stats")), o.a.createElement(c.b, {
                            className: l()(m.a.navContainer, (r = {}, f(r, m.a.selected, "Market" === this.props.page), f(r, m.a.expand, "Market" === this.props.page && !this.state.ready), r)),
                            to: "/market"
                        }, o.a.createElement("i", {
                            className: l()(m.a.storeIcon, "fas fa-store")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Market")), o.a.createElement(c.b, {
                            className: l()(m.a.navContainer, (s = {}, f(s, m.a.selected, "Blooks" === this.props.page), f(s, m.a.expand, "Blooks" === this.props.page && !this.state.ready), s)),
                            to: "/blooks"
                        }, o.a.createElement("i", {
                            className: l()(m.a.listIcon, "fas fa-suitcase")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Blooks")), o.a.createElement(c.b, {
                            className: l()(m.a.navContainer, (i = {}, f(i, m.a.selected, "Settings" === this.props.page), f(i, m.a.expand, "Settings" === this.props.page && !this.state.ready), i)),
                            to: "/settings"
                        }, o.a.createElement("i", {
                            className: l()(m.a.listIcon, "fas fa-cog")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Settings")), o.a.createElement("a", {
                            className: m.a.navContainer,
                            href: this.state.logoutLink
                        }, o.a.createElement("i", {
                            className: l()(m.a.logoutIcon, "fas fa-sign-out-alt")
                        }), o.a.createElement("div", {
                            className: m.a.navText
                        }, "Logout"))))
                    }
                }]) && h(t.prototype, a), n && h(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            C.propTypes = {
                page: s.a.string
            }, t.a = C
        },
        Vy2N: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___2wtJM-camelCase{position:absolute;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___3sH0Q-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;z-index:16;overflow:hidden}.styles__header___3Vtay-camelCase{position:absolute;top:0;left:0;width:100%;height:50px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;font-size:24px}.styles__text___2JvVh-camelCase{text-align:center;width:95%;margin:70px auto 5px;font-size:22px}.styles__uploadButtonContainer___3cMeT-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:65px auto 0}.styles__uploadButton___2esYM-camelCase{border-radius:5px;width:95px;height:42px;margin:5px 15px;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;background-color:#3378ff;transition:.2s}.styles__uploadButton___2esYM-camelCase:focus,.styles__uploadButton___2esYM-camelCase:hover{background-color:#004de6}.styles__uploadIcon___1udog-camelCase{font-size:20px;margin-right:7px;width:22px;text-align:center}.styles__uploadText___2FOVV-camelCase{font-size:14px;line-height:15px}.styles__dropContainer___20eYZ-camelCase{height:100px;width:80%;border:1px dashed #666;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:15px auto;font-size:14px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__activeDropContainer___31k9F-camelCase{background-color:rgba(11,194,207,.3)}.styles__dropzoneIcon___3stiE-camelCase{color:#fff;background-color:#3378ff;border-radius:7px;width:35px;height:35px;font-size:18px;margin-bottom:10px;display:flex;justify-content:center;align-items:center}.styles__urlInput___H4nKR-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;padding:5px 10px;width:90%;margin:10px auto;box-sizing:border-box;font-size:18px;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__urlInput___H4nKR-camelCase:-moz-placeholder,.styles__urlInput___H4nKR-camelCase:-ms-input-placeholder,.styles__urlInput___H4nKR-camelCase::-moz-placeholder,.styles__urlInput___H4nKR-camelCase::-webkit-input-placeholder{color:#999}.styles__urlInput___H4nKR-camelCase::-webkit-inner-spin-button,.styles__urlInput___H4nKR-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__inputFilled___1jI7h-camelCase,.styles__urlInput___H4nKR-camelCase:focus{border-color:#3378ff}.styles__buttonRow___rgfPg-camelCase{flex-direction:row;justify-content:space-evenly;width:80%;margin:10px auto 25px}.styles__button___2Eg2o-camelCase,.styles__buttonRow___rgfPg-camelCase{display:flex;align-items:center}.styles__button___2Eg2o-camelCase{border-radius:5px;width:90px;height:35px;font-size:18px;justify-content:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;background-color:#3378ff;transition:.2s}.styles__button___2Eg2o-camelCase:focus,.styles__button___2Eg2o-camelCase:hover{background-color:#004de6}.styles__errorContainer___1aUPm-camelCase{border:2px solid #ce1313;border-radius:4px;width:90%;padding:5px 10px;box-sizing:border-box;margin:0 auto 15px;display:flex;flex-direction:row;align-items:center}.styles__errorIcon___Gu1MQ-camelCase{font-size:16px;color:#ce1313;margin-right:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___oPNrh-camelCase{font-size:14px}", ""]), t.locals = {
                modal: "styles__modal___2wtJM-camelCase",
                mainContainer: "styles__mainContainer___3sH0Q-camelCase",
                header: "styles__header___3Vtay-camelCase",
                text: "styles__text___2JvVh-camelCase",
                uploadButtonContainer: "styles__uploadButtonContainer___3cMeT-camelCase",
                uploadButton: "styles__uploadButton___2esYM-camelCase",
                uploadIcon: "styles__uploadIcon___1udog-camelCase",
                uploadText: "styles__uploadText___2FOVV-camelCase",
                dropContainer: "styles__dropContainer___20eYZ-camelCase",
                activeDropContainer: "styles__activeDropContainer___31k9F-camelCase",
                dropzoneIcon: "styles__dropzoneIcon___3stiE-camelCase",
                urlInput: "styles__urlInput___H4nKR-camelCase",
                inputFilled: "styles__inputFilled___1jI7h-camelCase",
                buttonRow: "styles__buttonRow___rgfPg-camelCase",
                button: "styles__button___2Eg2o-camelCase",
                errorContainer: "styles__errorContainer___1aUPm-camelCase",
                errorIcon: "styles__errorIcon___Gu1MQ-camelCase",
                errorText: "styles__errorText___oPNrh-camelCase"
            }
        },
        "Yz+4": function(e, t, a) {
            var n = a("5rT7");
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
        "Z+lD": function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a("q1tI"),
                    o = a.n(n),
                    r = a("TSYQ"),
                    s = a.n(r),
                    i = a("17x9"),
                    l = a.n(i),
                    c = a("UiDi"),
                    _ = a.n(c),
                    u = a("cpGi"),
                    m = a("EDFO"),
                    p = a("FKJl"),
                    d = a("CUKT"),
                    f = a.n(d),
                    h = a("qnYv"),
                    y = a("swc+"),
                    x = a("25NL"),
                    g = a("Z1o9"),
                    b = a("8RFr"),
                    C = a("j03a"),
                    v = a("vCpj"),
                    w = a("ca/f"),
                    k = a("7yjp");

                function E(e) {
                    return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function I(e) {
                    return function(e) {
                        if (Array.isArray(e)) return N(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return N(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === a && e.constructor && (a = e.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return N(e, t)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function N(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n
                }

                function S(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), a.push.apply(a, n)
                    }
                    return a
                }

                function T(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(a), !0).forEach((function(t) {
                            j(e, t, a[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : S(Object(a)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                        }))
                    }
                    return e
                }

                function j(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }

                function O(e, t) {
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

                function z(e) {
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
                        var a, n = P(e);
                        if (t) {
                            var o = P(this).constructor;
                            a = Reflect.construct(n, arguments, o)
                        } else a = n.apply(this, arguments);
                        return R(this, a)
                    }
                }

                function R(e, t) {
                    if (t && ("object" === E(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return B(e)
                }

                function B(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function P(e) {
                    return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function L() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    L = function() {
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
                            i = new I(o || []);
                        return n(s, "_invoke", {
                            value: C(e, a, i)
                        }), s
                    }

                    function _(e, t, a) {
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
                    var u = {};

                    function m() {}

                    function p() {}

                    function d() {}
                    var f = {};
                    l(f, r, (function() {
                        return this
                    }));
                    var h = Object.getPrototypeOf,
                        y = h && h(h(N([])));
                    y && y !== t && a.call(y, r) && (f = y);
                    var x = d.prototype = m.prototype = Object.create(f);

                    function g(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function b(e, t) {
                        var o;
                        n(this, "_invoke", {
                            value: function(n, r) {
                                function s() {
                                    return new t((function(o, s) {
                                        ! function n(o, r, s, i) {
                                            var l = _(e[o], e, r);
                                            if ("throw" !== l.type) {
                                                var c = l.arg,
                                                    u = c.value;
                                                return u && "object" == E(u) && a.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                                    n("next", e, s, i)
                                                }), (function(e) {
                                                    n("throw", e, s, i)
                                                })) : t.resolve(u).then((function(e) {
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

                    function C(e, t, a) {
                        var n = "suspendedStart";
                        return function(o, r) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw r;
                                return S()
                            }
                            for (a.method = o, a.arg = r;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = _(e, t, a);
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
                        var n = _(a, e.iterator, t.arg);
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

                    function k(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function I(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(w, this), this.reset(!0)
                    }

                    function N(e) {
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
                            next: S
                        }
                    }

                    function S() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return p.prototype = d, n(x, "constructor", {
                        value: d,
                        configurable: !0
                    }), n(d, "constructor", {
                        value: p,
                        configurable: !0
                    }), p.displayName = l(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, l(e, i, "GeneratorFunction")), e.prototype = Object.create(x), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, g(b.prototype), l(b.prototype, s, (function() {
                        return this
                    })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                        void 0 === r && (r = Promise);
                        var s = new b(c(t, a, n, o), r);
                        return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                            return e.done ? e.value : s.next()
                        }))
                    }, g(x), l(x, i, "Generator"), l(x, r, (function() {
                        return this
                    })), l(x, "toString", (function() {
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
                    }, e.values = N, I.prototype = {
                        constructor: I,
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
                            return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(s)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var a = this.tryEntries[t];
                                if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), u
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
                                iterator: N(e),
                                resultName: t,
                                nextLoc: a
                            }, "next" === this.method && (this.arg = void 0), u
                        }
                    }, e
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

                function A(e) {
                    return function() {
                        var t = this,
                            a = arguments;
                        return new Promise((function(n, o) {
                            var r = e.apply(t, a);

                            function s(e) {
                                F(r, n, o, s, i, "next", e)
                            }

                            function i(e) {
                                F(r, n, o, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }
                Object(m.addStyles)();
                var D = function(e) {
                        if (e !== document.activeElement)
                            if (e.focus(), void 0 !== window.getSelection && void 0 !== document.createRange) {
                                var t = document.createRange();
                                t.selectNodeContents(e), t.collapse(!1);
                                var a = window.getSelection();
                                a.removeAllRanges(), a.addRange(t)
                            } else if (void 0 !== document.body.createTextRange) {
                            var n = document.body.createTextRange();
                            n.moveToElementText(e), n.collapse(!1), n.select()
                        }
                    },
                    M = function() {
                        var t = A(L().mark((function t(a) {
                            return L().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise(function() {
                                            var t = A(L().mark((function t(n) {
                                                var o;
                                                return L().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (!a.id) {
                                                                t.next = 2;
                                                                break
                                                            }
                                                            return t.abrupt("return", n(a));
                                                        case 2:
                                                            if (o = {}, !a.file) {
                                                                t.next = 9;
                                                                break
                                                            }
                                                            return t.next = 6, new Promise((function(t) {
                                                                var n = new FormData;
                                                                n.append("file", a.file), n.append("tags", ""), n.append("upload_preset", "normal"), n.append("api_key", e.env.CLOUDINARY_API_KEY), n.append("timestamp", parseInt(Date.now() / 1e3, 10)), y.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", n, {
                                                                    headers: {
                                                                        "X-Requested-With": "XMLHttpRequest"
                                                                    },
                                                                    withCredentials: !1
                                                                }).then((function(e) {
                                                                    t({
                                                                        url: e.data.secure_url,
                                                                        id: e.data.public_id
                                                                    })
                                                                })).catch((function(e) {
                                                                    Object(p.b)(e), t({})
                                                                }))
                                                            }));
                                                        case 6:
                                                            o = t.sent, t.next = 10;
                                                            break;
                                                        case 9:
                                                            a.url && (o.url = a.url, o.id = "", a.url.includes("https://images.unsplash.com") && (o.id = "u"));
                                                        case 10:
                                                            n(o);
                                                        case 11:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    H = function(e) {
                        return new Promise((function(t) {
                            var a = new FileReader;
                            a.onloadend = function() {
                                return t(a.result)
                            }, a.readAsDataURL(e)
                        }))
                    },
                    U = function() {
                        var t = A(L().mark((function t(a) {
                            return L().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise(function() {
                                            var t = A(L().mark((function t(n) {
                                                var o, r;
                                                return L().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (a && !a.id) {
                                                                t.next = 2;
                                                                break
                                                            }
                                                            return t.abrupt("return", n(a || {}));
                                                        case 2:
                                                            if (o = {}, !a.blob) {
                                                                t.next = 10;
                                                                break
                                                            }
                                                            return t.next = 6, H(a.blob);
                                                        case 6:
                                                            return r = t.sent, t.next = 9, new Promise((function(t) {
                                                                var a = new FormData;
                                                                a.append("file", r), a.append("tags", ""), a.append("upload_preset", "to_mp3"), a.append("api_key", e.env.CLOUDINARY_API_KEY), a.append("timestamp", parseInt(Date.now() / 1e3, 10)), y.a.post("https://api.cloudinary.com/v1_1/blooket/upload", a, {
                                                                    headers: {
                                                                        "X-Requested-With": "XMLHttpRequest"
                                                                    },
                                                                    withCredentials: !1
                                                                }).then((function(e) {
                                                                    t({
                                                                        url: e.data.secure_url,
                                                                        id: e.data.public_id
                                                                    })
                                                                })).catch((function(e) {
                                                                    Object(p.b)(e), t({})
                                                                }))
                                                            }));
                                                        case 9:
                                                            o = t.sent;
                                                        case 10:
                                                            n(o);
                                                        case 11:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    Q = function(e) {
                        for (var t = "", a = 0; a < e.childNodes.length; a++) e.childNodes[a].textContent ? t += e.childNodes[a].textContent : t += "\n";
                        return t = t.trim()
                    },
                    W = function(e) {
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
                        }(c, e);
                        var t, a, n, r, i, l = z(c);

                        function c(e) {
                            var t;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), t = l.call(this, e);
                            var a = e.question || {},
                                n = [];
                            if (a.correctAnswers)
                                for (var r = 0; r < a.correctAnswers.length; r++) n.push(a.answers.indexOf(a.correctAnswers[r]) + 1);
                            var s = {},
                                i = a.question || "",
                                _ = ["", ""];
                            i.includes("`*`") ? (_[1] = i.slice(i.indexOf("`*`") + 3, i.length - 3), _[0] = i.slice(0, i.indexOf("`*`"))) : _[0] = i, s.question = _[0] ? _[0].replaceAll("\n", "<br>") : "", s.qEq = _[1];
                            for (var u = {}, m = 1; m <= 4; m++) {
                                var p = a.answers && a.answers.length >= m ? a.answers[m - 1] : "",
                                    d = ["", "", {}],
                                    f = p.split("`~`");
                                2 === f.length ? d[2] = {
                                    id: f[0],
                                    url: f[1]
                                } : "`*`" === p.slice(0, 3) ? d[1] = p.slice(3, p.length - 3) : d[0] = p, u["answer".concat(m)] = d[0], u["answer".concat(m, "Eq")] = d[1], u["answer".concat(m, "Img")] = d[2]
                            }
                            return t.state = T(T(T({}, s), {}, {
                                qImg: a.image || {},
                                qAudio: a.audio || null
                            }, u), {}, {
                                equation: "",
                                correctAnswers: n,
                                timeLimit: a.timeLimit || 20,
                                random: void 0 === a.random || a.random,
                                number: a.number,
                                addingImgNum: 0,
                                addingQImg: !1,
                                addingEqNum: 0,
                                addingAudio: !1,
                                symbolTarget: 0,
                                loading: !1,
                                error: {},
                                plusMsg: ""
                            }), t.questionText = o.a.createRef(), t.answer1Text = o.a.createRef(), t.answer2Text = o.a.createRef(), t.answer3Text = o.a.createRef(), t.answer4Text = o.a.createRef(), t.gotPlus = !1, t.plus = !1, t.onKeyPress = t.onKeyPress.bind(B(t)), t.setCorrect = t.setCorrect.bind(B(t)), t.addEquation = t.addEquation.bind(B(t)), t.addAudio = t.addAudio.bind(B(t)), t.addSymbol = t.addSymbol.bind(B(t)), t.save = t.save.bind(B(t)), t
                        }
                        return t = c, (a = [{
                            key: "componentDidMount",
                            value: function() {
                                document.addEventListener("keydown", this.onKeyPress), this.state.question || D(this.questionText.current)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                document.removeEventListener("keydown", this.onKeyPress)
                            }
                        }, {
                            key: "onKeyPress",
                            value: function(e) {
                                this.state.addingImgNum || this.state.addingQImg || this.state.addingAudio || this.state.addingEqNum || this.state.symbolTarget || 13 === e.keyCode && !1 === e.shiftKey && this.save(e)
                            }
                        }, {
                            key: "getIsPlus",
                            value: (i = A(L().mark((function e(t, a) {
                                return L().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.gotPlus) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, new Promise((function(e) {
                                                h.a.get("/api/users/plan").then((function(t) {
                                                    e(t.data.hasPlus)
                                                })).catch((function(t) {
                                                    Object(p.b)(t), e(!1)
                                                }))
                                            }));
                                        case 3:
                                            this.plus = e.sent, this.gotPlus = !0;
                                        case 5:
                                            if (this.plus) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return", this.setState({
                                                plusMsg: t
                                            }));
                                        case 7:
                                            a();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "setCorrect",
                            value: function(e) {
                                var t = this.state.error;
                                ("correctAnswers" === t.type || "answer3" === t.type && 3 === e || "answer4" === t.type && 4 === e) && (t = {});
                                var a = I(this.state.correctAnswers),
                                    n = a.indexOf(e); - 1 === n ? a.push(e) : a.splice(n, 1), this.setState({
                                    correctAnswers: a,
                                    error: t
                                })
                            }
                        }, {
                            key: "addEquation",
                            value: function(e) {
                                var t, a = "q";
                                this.state.addingEqNum < 5 && (a = "answer".concat(this.state.addingEqNum)), this.setState((j(t = {}, "".concat(a, "Eq"), e), j(t, "".concat(a, "Img"), {}), j(t, "qAudio", "q" === a ? null : this.state.qAudio), j(t, "addingEqNum", 0), t))
                            }
                        }, {
                            key: "addAudio",
                            value: function(e) {
                                this.setState({
                                    addingAudio: !1,
                                    qAudio: e || this.state.qAudio,
                                    qImg: {},
                                    qEq: ""
                                })
                            }
                        }, {
                            key: "addSymbol",
                            value: function(e) {
                                5 === this.state.symbolTarget ? (this.setState({
                                    question: this.state.question + e
                                }), this.questionText.current.focus()) : (this.setState(j({}, "answer".concat(this.state.symbolTarget), this.state["answer".concat(this.state.symbolTarget)] + e)), this["answer".concat(this.state.symbolTarget, "Text")].current.focus()), this.setState({
                                    symbolTarget: 0
                                })
                            }
                        }, {
                            key: "save",
                            value: (r = A(L().mark((function e(t) {
                                var a, n, o, r, s, i, l, c, _, u, m, d, f, y, x, g = this;
                                return L().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !this.state.loading) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            for (this.setState({
                                                    loading: !0
                                                }), a = "".concat(Q(this.questionText.current)).concat(this.state.qEq ? "`*`".concat(this.state.qEq, "`*`") : "").replaceAll("<br>", "\n").replaceAll("&nbsp;", " "), n = [], o = [], r = 0; r < 4; r++) s = this.state["answer".concat(r + 1, "Img")], n.push(s), i = this.state["answer".concat(r + 1, "Eq")], s.url ? o.push("img".concat(r + 1)) : i ? o.push("`*`".concat(i, "`*`")) : o.push(Q(this["answer".concat(r + 1, "Text")].current).replaceAll("<br>", "\n").replaceAll("&nbsp;", " "));
                                            if (l = {}, a || (l = {
                                                    msg: "Where's the question?",
                                                    type: "question"
                                                }), this.state.correctAnswers[0] || (l = {
                                                    msg: "Which answer is correct?",
                                                    type: "correctAnswers"
                                                }), o[0] || (l = {
                                                    msg: "Answers 1 and 2 must be filled.",
                                                    type: "answer1"
                                                }), o[1] || (l = {
                                                    msg: "Answers 1 and 2 must be filled.",
                                                    type: "answer2"
                                                }), this.state.correctAnswers.includes(3) && !o[2] && (l = {
                                                    msg: "Answer 3 can't be correct if it doesn't exist.",
                                                    type: "answer3"
                                                }), this.state.correctAnswers.includes(4) && !o[3] && (l = {
                                                    msg: "Answer 4 can't be correct if it doesn't exist.",
                                                    type: "answer4"
                                                }), o[0] === o[1] && (l = {
                                                    msg: "No duplicate answers.",
                                                    type: "answer2"
                                                }), c = [o[0], o[1]], _ = [n[0], n[1]], u = [], this.state.correctAnswers.includes(1) && u.push(c[0]), this.state.correctAnswers.includes(2) && u.push(c[1]), o[2] && (c.includes(o[2]) ? l = {
                                                    msg: "No duplicate answers.",
                                                    type: "answer3"
                                                } : (c.push(o[2]), _.push(n[2]), this.state.correctAnswers.includes(3) && u.push(o[2]))), o[3] && (c.includes(o[3]) ? l = {
                                                    msg: "No duplicate answers.",
                                                    type: "answer4"
                                                } : (c.push(o[3]), _.push(n[3]), this.state.correctAnswers.includes(4) && u.push(o[3]))), this.setState({
                                                    error: l
                                                }), !l.msg) {
                                                e.next = 26;
                                                break
                                            }
                                            return e.abrupt("return", this.setState({
                                                loading: !1
                                            }));
                                        case 26:
                                            return m = [M(this.state.qImg), U(this.state.qAudio)], c.forEach((function(e, t) {
                                                m.push(M(_[t]))
                                            })), e.next = 30, Promise.all(m);
                                        case 30:
                                            d = e.sent, f = d[0], y = d[1], x = d.slice(2), this.props.isAdding ? h.a.put("/api/games/addquestion", {
                                                gameId: this.props.gameId,
                                                question: a,
                                                answers: c,
                                                correctAnswers: u,
                                                timeLimit: Number(this.state.timeLimit),
                                                random: this.state.random,
                                                image: f,
                                                audio: y,
                                                answerImages: x
                                            }).then((function(e) {
                                                e.data.success ? g.props.onDone(!0) : g.setState({
                                                    error: {
                                                        msg: e.data.msg,
                                                        type: "question"
                                                    },
                                                    loading: !1
                                                })
                                            })).catch((function(e) {
                                                Object(p.b)(e), g.setState({
                                                    error: {
                                                        type: "question",
                                                        msg: e.response ? e.response.data : "Something went wrong."
                                                    },
                                                    loading: !1
                                                })
                                            })) : h.a.put("/api/games/updatequestion", {
                                                number: this.state.number,
                                                gameId: this.props.gameId,
                                                question: a,
                                                answers: c,
                                                correctAnswers: u,
                                                timeLimit: Number(this.state.timeLimit),
                                                random: this.state.random,
                                                image: f,
                                                audio: y,
                                                answerImages: x
                                            }).then((function(e) {
                                                e.data.success ? g.props.onDone(!0) : g.setState({
                                                    error: {
                                                        msg: e.data.msg,
                                                        type: "question"
                                                    },
                                                    loading: !1
                                                })
                                            })).catch((function(e) {
                                                Object(p.b)(e), g.setState({
                                                    error: {
                                                        type: "question",
                                                        msg: e.response ? e.response.data : "Something went wrong."
                                                    },
                                                    loading: !1
                                                })
                                            }));
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return r.apply(this, arguments)
                            })
                        }, {
                            key: "render",
                            value: function() {
                                var e = this;
                                return o.a.createElement("div", {
                                    className: f.a.wrapper
                                }, o.a.createElement("div", {
                                    className: f.a.modal
                                }, o.a.createElement("div", {
                                    className: f.a.mainContainer
                                }, o.a.createElement(u.a, {
                                    place: "bottom",
                                    effect: "solid",
                                    className: f.a.tooltip
                                }), o.a.createElement("div", {
                                    className: f.a.header
                                }, o.a.createElement("div", {
                                    className: f.a.headerRow
                                }, o.a.createElement("div", {
                                    className: f.a.headerContainer,
                                    "data-tip": "The max time a student can spend on a question."
                                }, o.a.createElement("i", {
                                    className: s()("far fa-clock", f.a.headerIcon)
                                }), o.a.createElement("div", {
                                    className: f.a.headerText
                                }, "Time", o.a.createElement("br", null), "Limit"), o.a.createElement("input", {
                                    className: f.a.timeInput,
                                    onChange: function(t) {
                                        return e.setState({
                                            timeLimit: Math.max(0, Math.min(300, Math.floor(t.target.value)))
                                        })
                                    },
                                    type: "number",
                                    value: this.state.timeLimit
                                })), o.a.createElement("div", {
                                    className: f.a.headerContainer,
                                    "data-tip": "When checked, answers will be given in a random order."
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-random", f.a.headerIcon)
                                }), o.a.createElement("div", {
                                    className: f.a.headerText
                                }, "Random", o.a.createElement("br", null), "Order"), o.a.createElement("div", {
                                    className: s()(f.a.randomButton, j({}, f.a.isRandom, this.state.random)),
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            random: !e.state.random
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-check", f.a.randomCheck)
                                })))), o.a.createElement("div", {
                                    className: f.a.headerRow
                                }, o.a.createElement("div", {
                                    className: f.a.cancelButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.props.onDone(!1)
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-times", f.a.cancelIcon)
                                }), o.a.createElement("div", {
                                    className: f.a.cancelText
                                }, "Cancel")), o.a.createElement("div", {
                                    className: f.a.saveButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: this.save
                                }, this.state.loading ? o.a.createElement("i", {
                                    className: s()("fas fa-sync", f.a.loadingIcon)
                                }) : o.a.createElement(o.a.Fragment, null, o.a.createElement("i", {
                                    className: s()("fas fa-save", f.a.saveIcon)
                                }), o.a.createElement("div", {
                                    className: f.a.saveText
                                }, "Save"))))), o.a.createElement("div", {
                                    className: f.a.questionRegularBody
                                }, o.a.createElement("div", {
                                    className: f.a.questionContainer,
                                    style: {
                                        backgroundColor: k.a.default.background
                                    }
                                }, o.a.createElement("div", {
                                    className: f.a.questionLeftContainer
                                }, o.a.createElement("div", {
                                    className: f.a.questionButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            addingQImg: !0
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-image", f.a.questionIcon)
                                }), "Image"), o.a.createElement("div", {
                                    className: f.a.questionButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            addingEqNum: 5,
                                            equation: e.state.qEq
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-superscript", f.a.questionIcon)
                                }), "Math"), o.a.createElement("div", {
                                    className: f.a.questionButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.getIsPlus("Record Question Audio", (function() {
                                            return e.setState({
                                                addingAudio: !0
                                            })
                                        }))
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-microphone-alt", f.a.questionIcon)
                                }), "Audio")), this.state.qAudio ? o.a.createElement("div", {
                                    className: f.a.questionImgWrapper
                                }, o.a.createElement(v.a, {
                                    audioUrl: this.state.qAudio.url
                                }), o.a.createElement("div", {
                                    className: f.a.removeQButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            qAudio: null
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-trash-alt", f.a.removeQIcon)
                                }), "Remove")) : this.state.qImg.url ? o.a.createElement("div", {
                                    className: f.a.questionImgWrapper
                                }, o.a.createElement("div", {
                                    className: f.a.questionImgContainer
                                }, o.a.createElement("img", {
                                    src: this.state.qImg.url,
                                    alt: "Upload",
                                    className: f.a.img,
                                    draggable: !1
                                })), o.a.createElement("div", {
                                    className: f.a.removeQButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            qImg: {}
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-trash-alt", f.a.removeQIcon)
                                }), "Remove")) : this.state.qEq ? o.a.createElement("div", {
                                    className: f.a.questionEqWrapper
                                }, o.a.createElement(m.StaticMathField, {
                                    className: f.a.mathField,
                                    style: {
                                        marginBottom: 5
                                    }
                                }, this.state.qEq), o.a.createElement("div", {
                                    className: f.a.removeQButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            qEq: ""
                                        })
                                    }
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-trash-alt", f.a.removeQIcon)
                                }), "Remove")) : null, o.a.createElement("div", {
                                    className: s()(f.a.questionTextContainer, j({}, f.a.errorBorder, "question" === this.state.error.type)),
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return D(e.questionText.current)
                                    }
                                }, this.state.question ? null : o.a.createElement("div", {
                                    className: f.a.placeholder,
                                    style: {
                                        color: k.a.default.text
                                    }
                                }, "Question Text"), o.a.createElement(_.a, {
                                    className: f.a.questionText,
                                    style: {
                                        color: k.a.default.text
                                    },
                                    onChange: function(t) {
                                        return e.setState({
                                            question: t.target.value,
                                            error: "question" === e.state.error.type ? {} : e.state.error
                                        })
                                    },
                                    html: this.state.question,
                                    innerRef: this.questionText,
                                    "data-gramm_editor": !1
                                }), o.a.createElement("i", {
                                    className: s()(f.a.keyboardIcon, "far fa-keyboard"),
                                    "data-tip": "Show Symbol Keyboard",
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            symbolTarget: 5
                                        })
                                    }
                                })), this.state.error.msg ? o.a.createElement("div", {
                                    className: f.a.errorContainer
                                }, this.state.error.msg) : null), o.a.createElement("div", {
                                    className: f.a.answersHolder
                                }, [1, 2, 3, 4].map((function(t) {
                                    return o.a.createElement("div", {
                                        className: f.a.answerWrapper,
                                        key: t
                                    }, o.a.createElement("div", {
                                        className: f.a.answerContainer,
                                        style: {
                                            backgroundColor: k.a.default.answers[t - 1].background
                                        }
                                    }, o.a.createElement("div", {
                                        className: f.a.answerLeftContainer
                                    }, o.a.createElement("div", {
                                        className: s()(f.a.correctButton, j({}, f.a.correctAnswer, e.state.correctAnswers.includes(t))),
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setCorrect(t)
                                        }
                                    }, o.a.createElement("i", {
                                        className: s()("fas fa-check", f.a.correctCheck)
                                    })), o.a.createElement("div", {
                                        className: f.a.answerButtonRow
                                    }, o.a.createElement("div", {
                                        className: f.a.answerIconButton,
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.getIsPlus("Add Answer Images", (function() {
                                                return e.setState({
                                                    addingImgNum: t
                                                })
                                            }))
                                        },
                                        "data-tip": "Add Image"
                                    }, o.a.createElement("i", {
                                        className: s()("fas fa-image", f.a.answerIcon)
                                    })), o.a.createElement("div", {
                                        className: f.a.answerIconButton,
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setState({
                                                addingEqNum: t,
                                                equation: e.state["answer".concat(t, "Eq")]
                                            })
                                        },
                                        "data-tip": "Add Math"
                                    }, o.a.createElement("i", {
                                        className: s()("fas fa-superscript", f.a.answerIcon)
                                    })))), e.state["answer".concat(t, "Img")].url ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                        className: f.a.answerImgContainer
                                    }, o.a.createElement("img", {
                                        src: e.state["answer".concat(t, "Img")].url,
                                        alt: "Upload",
                                        className: f.a.img,
                                        draggable: !1
                                    })), o.a.createElement("div", {
                                        className: f.a.removeButton,
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setState(j({}, "answer".concat(t, "Img"), {}))
                                        }
                                    }, o.a.createElement("i", {
                                        className: s()("fas fa-trash-alt", f.a.answerIcon)
                                    }))) : e.state["answer".concat(t, "Eq")] ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                        className: f.a.answerImgContainer
                                    }, o.a.createElement(m.StaticMathField, {
                                        className: f.a.mathAnswerField
                                    }, e.state["answer".concat(t, "Eq")])), o.a.createElement("div", {
                                        className: f.a.removeButton,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return e.setState(j({}, "answer".concat(t, "Eq"), ""))
                                        }
                                    }, o.a.createElement("i", {
                                        className: s()("fas fa-trash-alt", f.a.answerIcon)
                                    }))) : o.a.createElement("div", {
                                        className: s()(f.a.answerTextContainer, j({}, f.a.errorBorder, e.state.error.type === "answer".concat(t) || "correctAnswers" === e.state.error.type && [1, 2].includes(t))),
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return D(e["answer".concat(t, "Text")].current)
                                        }
                                    }, e.state["answer".concat(t)] ? null : o.a.createElement("div", {
                                        className: f.a.placeholder,
                                        style: {
                                            color: k.a.default.answers[t - 1].text
                                        }
                                    }, "Answer ".concat(t).concat(t > 2 ? " (Optional)" : "")), o.a.createElement(_.a, {
                                        className: f.a.answerText,
                                        style: {
                                            color: k.a.default.answers[t - 1].text
                                        },
                                        onChange: function(a) {
                                            var n;
                                            return e.setState((j(n = {}, "answer".concat(t), a.target.value), j(n, "error", e.state.error.type === "answer".concat(t) ? {} : e.state.error), n))
                                        },
                                        html: e.state["answer".concat(t)],
                                        innerRef: e["answer".concat(t, "Text")],
                                        "data-gramm_editor": !1
                                    }), o.a.createElement("i", {
                                        className: s()(f.a.keyboardIcon, "far fa-keyboard"),
                                        "data-tip": "Show Symbol Keyboard",
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setState({
                                                symbolTarget: t
                                            })
                                        }
                                    }))))
                                })))))), this.state.addingImgNum || this.state.addingQImg ? o.a.createElement(x.a, {
                                    onClose: function() {
                                        return e.setState({
                                            addingImgNum: 0,
                                            addingQImg: !1
                                        })
                                    },
                                    onDone: function(t, a) {
                                        var n;
                                        return e.setState((j(n = {
                                            addingImgNum: 0,
                                            addingQImg: !1
                                        }, e.state.addingQImg ? "qImg" : "answer".concat(e.state.addingImgNum, "Img"), {
                                            url: t,
                                            file: a
                                        }), j(n, "qEq", e.state.addingQImg ? "" : e.state.qEq), j(n, "qAudio", e.state.addingQImg ? null : e.state.qAudio), j(n, "answer".concat(e.state.addingImgNum, "Eq"), e.state.addingQImg ? e.state["answer".concat(e.state.addingImgNum, "Eq")] : ""), n))
                                    }
                                }) : this.state.addingEqNum ? o.a.createElement(g.a, {
                                    equation: this.state.equation,
                                    onDone: this.addEquation,
                                    onClose: function() {
                                        return e.setState({
                                            addingEqNum: 0
                                        })
                                    }
                                }) : this.state.addingAudio ? o.a.createElement(b.a, {
                                    onDone: this.addAudio,
                                    onClose: function() {
                                        return e.setState({
                                            addingAudio: !1
                                        })
                                    }
                                }) : this.state.symbolTarget ? o.a.createElement(C.a, {
                                    select: this.addSymbol
                                }) : this.state.plusMsg ? o.a.createElement(w.a, {
                                    text: "Get Blooket Plus to ".concat(this.state.plusMsg, "!"),
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
                                                plusMsg: ""
                                            })
                                        },
                                        color: "blue"
                                    }
                                }) : null)
                            }
                        }]) && O(t.prototype, a), n && O(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), c
                    }(o.a.Component);
                W.propTypes = {
                    onDone: l.a.func.isRequired,
                    question: l.a.object,
                    gameId: l.a.string,
                    isAdding: l.a.bool,
                    history: l.a.object.isRequired
                }, t.a = W
            }).call(this, a("8oxB"))
        },
        Z1o9: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("17x9"),
                s = a.n(r),
                i = a("EDFO"),
                l = [
                    [{
                        text: "+",
                        latex: "+"
                    }, {
                        text: "-",
                        latex: "-"
                    }, {
                        text: "\\cdot",
                        latex: "\\cdot"
                    }, {
                        text: "\\times",
                        latex: "\\times"
                    }, {
                        text: "\\div",
                        latex: "\\div"
                    }, {
                        text: "=",
                        latex: "="
                    }, {
                        text: "\\pm",
                        latex: "\\pm"
                    }, {
                        text: "\\ne",
                        latex: "\\ne"
                    }, {
                        text: "\\pi",
                        latex: "\\pi"
                    }, {
                        text: "∞",
                        latex: "∞"
                    }],
                    [{
                        text: "a^2",
                        latex: "^2"
                    }, {
                        text: "a^b",
                        latex: "^{ }",
                        offset: 1
                    }, {
                        text: "\\frac{a}{b}",
                        latex: "\\frac{ }{ }",
                        offset: 2
                    }, {
                        text: "a_b",
                        latex: "_{ }",
                        offset: 1
                    }, {
                        text: "|a|",
                        latex: "| |",
                        offset: 1
                    }, {
                        text: "\\sqrt{a}",
                        latex: "\\sqrt{ }",
                        offset: 1
                    }, {
                        text: "\\sqrt[b]{a}",
                        latex: "\\sqrt[ ]{ }",
                        offset: 2
                    }, {
                        text: "\\overline{a}",
                        latex: "\\overline{ }",
                        offset: 1
                    }, {
                        text: "\\overleftarrow{ab}",
                        latex: "\\overleftarrow{ }",
                        offset: 1
                    }, {
                        text: "\\overrightarrow{ab}",
                        latex: "\\overrightarrow{ }",
                        offset: 1
                    }, {
                        text: "\\lim _{a \\to b}",
                        latex: "\\lim _{ \\to }",
                        offset: 2,
                        fontSize: 12
                    }, {
                        text: "\\sum _{b}^{a}",
                        latex: "\\sum _{ }^{ }",
                        offset: 2,
                        fontSize: 12
                    }, {
                        text: "\\prod _{b}^{a}",
                        latex: "\\prod _{ }^{ }",
                        offset: 2,
                        fontSize: 12
                    }, {
                        text: "\\lceil a\\rceil",
                        latex: "\\lceil { }\\rceil",
                        offset: 1
                    }, {
                        text: "\\lfloor a\\rfloor",
                        latex: "\\lfloor { }\\rfloor",
                        offset: 1
                    }, {
                        text: "\\ln a",
                        latex: "\\ln { }"
                    }, {
                        text: "\\log _ba",
                        latex: "\\log _{ }{ }",
                        offset: 1,
                        fontSize: 14
                    }, {
                        text: "\\int _b^a",
                        latex: "\\int _{ }^{ }",
                        offset: 2,
                        fontSize: 14
                    }],
                    [{
                        text: "<",
                        latex: "<"
                    }, {
                        text: ">",
                        latex: ">"
                    }, {
                        text: "∠",
                        latex: "∠"
                    }, {
                        text: "\\degree",
                        latex: "\\degree"
                    }, {
                        text: "\\circ",
                        latex: "\\circ"
                    }, {
                        text: "\\le",
                        latex: "\\le"
                    }, {
                        text: "\\ge",
                        latex: "\\ge"
                    }, {
                        text: "⊥",
                        latex: "⊥"
                    }, {
                        text: "\\parallel",
                        latex: "\\parallel"
                    }, {
                        text: "⇐",
                        latex: "⇐"
                    }, {
                        text: "⇒",
                        latex: "⇒"
                    }, {
                        text: "⇔",
                        latex: "⇔"
                    }, {
                        text: "~",
                        latex: "~"
                    }, {
                        text: "\\approx",
                        latex: "\\approx"
                    }, {
                        text: "\\cong",
                        latex: "\\cong"
                    }, {
                        text: "←",
                        latex: "←"
                    }, {
                        text: "→",
                        latex: "→"
                    }, {
                        text: "↔",
                        latex: "↔"
                    }],
                    [{
                        text: "ℕ",
                        latex: "ℕ"
                    }, {
                        text: "ℤ",
                        latex: "ℤ"
                    }, {
                        text: "ℚ",
                        latex: "ℚ"
                    }, {
                        text: "ℝ",
                        latex: "ℝ"
                    }, {
                        text: "ℂ",
                        latex: "ℂ"
                    }, {
                        text: "∀",
                        latex: "∀"
                    }, {
                        text: "∃",
                        latex: "∃"
                    }, {
                        text: "∈",
                        latex: "∈"
                    }, {
                        text: "∉",
                        latex: "∉"
                    }, {
                        text: "∅",
                        latex: "∅"
                    }, {
                        text: "∧",
                        latex: "∧"
                    }, {
                        text: "∨",
                        latex: "∨"
                    }, {
                        text: "⊂",
                        latex: "⊂"
                    }, {
                        text: "⊄",
                        latex: "⊄"
                    }, {
                        text: "∩",
                        latex: "∩"
                    }, {
                        text: "∪",
                        latex: "∪"
                    }, {
                        text: "⊆",
                        latex: "⊆"
                    }, {
                        text: "⊈",
                        latex: "⊈"
                    }],
                    [{
                        text: "Α",
                        latex: "Α"
                    }, {
                        text: "Β",
                        latex: "Β"
                    }, {
                        text: "Γ",
                        latex: "Γ"
                    }, {
                        text: "Δ",
                        latex: "Δ"
                    }, {
                        text: "Ε",
                        latex: "Ε"
                    }, {
                        text: "Ζ",
                        latex: "Ζ"
                    }, {
                        text: "Η",
                        latex: "Η"
                    }, {
                        text: "Θ",
                        latex: "Θ"
                    }, {
                        text: "Ι",
                        latex: "Ι"
                    }, {
                        text: "Κ",
                        latex: "Κ"
                    }, {
                        text: "Λ",
                        latex: "Λ"
                    }, {
                        text: "Μ",
                        latex: "Μ"
                    }, {
                        text: "Ν",
                        latex: "Ν"
                    }, {
                        text: "Ξ",
                        latex: "Ξ"
                    }, {
                        text: "Ο",
                        latex: "Ο"
                    }, {
                        text: "Π",
                        latex: "Π"
                    }, {
                        text: "Ρ",
                        latex: "Ρ"
                    }, {
                        text: "Σ",
                        latex: "Σ"
                    }, {
                        text: "Τ",
                        latex: "Τ"
                    }, {
                        text: "Υ",
                        latex: "Υ"
                    }, {
                        text: "Φ",
                        latex: "Φ"
                    }, {
                        text: "Χ",
                        latex: "Χ"
                    }, {
                        text: "Ψ",
                        latex: "Ψ"
                    }, {
                        text: "Ω",
                        latex: "Ω"
                    }, {
                        text: "∇",
                        latex: "∇"
                    }],
                    [{
                        text: "α",
                        latex: "α"
                    }, {
                        text: "β",
                        latex: "β"
                    }, {
                        text: "γ",
                        latex: "γ"
                    }, {
                        text: "δ",
                        latex: "δ"
                    }, {
                        text: "ε",
                        latex: "ε"
                    }, {
                        text: "ζ",
                        latex: "ζ"
                    }, {
                        text: "η",
                        latex: "η"
                    }, {
                        text: "θ",
                        latex: "θ"
                    }, {
                        text: "ι",
                        latex: "ι"
                    }, {
                        text: "κ",
                        latex: "κ"
                    }, {
                        text: "λ",
                        latex: "λ"
                    }, {
                        text: "μ",
                        latex: "μ"
                    }, {
                        text: "ν",
                        latex: "ν"
                    }, {
                        text: "ξ",
                        latex: "ξ"
                    }, {
                        text: "ο",
                        latex: "ο"
                    }, {
                        text: "\\pi",
                        latex: "\\pi"
                    }, {
                        text: "ρ",
                        latex: "ρ"
                    }, {
                        text: "ς",
                        latex: "ς"
                    }, {
                        text: "σ",
                        latex: "σ"
                    }, {
                        text: "τ",
                        latex: "τ"
                    }, {
                        text: "υ",
                        latex: "υ"
                    }, {
                        text: "φ",
                        latex: "φ"
                    }, {
                        text: "χ",
                        latex: "χ"
                    }, {
                        text: "ψ",
                        latex: "ψ"
                    }, {
                        text: "ω",
                        latex: "ω"
                    }, {
                        text: "∂",
                        latex: "∂"
                    }, {
                        text: "ϵ",
                        latex: "ϵ"
                    }, {
                        text: "ϑ",
                        latex: "ϑ"
                    }, {
                        text: "ϰ",
                        latex: "ϰ"
                    }, {
                        text: "ɸ",
                        latex: "ɸ"
                    }, {
                        text: "ϱ",
                        latex: "ϱ"
                    }]
                ],
                c = a("rI6f"),
                _ = a.n(c);

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function m(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
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
                    var a, n = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(e, t) {
                if (t && ("object" === u(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return h(e)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(i.addStyles)();
            var x = function(e) {
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
                }(s, e);
                var t, a, n, r = d(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = r.call(this, e)).state = {
                        latex: e.equation || ""
                    }, t.mathField = null, t.onKeyPress = t.onKeyPress.bind(h(t)), t.addLatex = t.addLatex.bind(h(t)), t.submitLatex = t.submitLatex.bind(h(t)), t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        document.addEventListener("keypress", this.onKeyPress)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("keypress", this.onKeyPress)
                    }
                }, {
                    key: "onKeyPress",
                    value: function(e) {
                        13 === (e || window.event).keyCode && this.submitLatex()
                    }
                }, {
                    key: "addLatex",
                    value: function(e) {
                        this.mathField.write(e.latex), this.mathField.focus();
                        for (var t = 0; t < e.offset; t++) this.mathField.keystroke("Left")
                    }
                }, {
                    key: "submitLatex",
                    value: function(e) {
                        e && e.preventDefault(), this.props.onDone(this.state.latex)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: _.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose
                        }), o.a.createElement("div", {
                            className: _.a.mainContainer
                        }, o.a.createElement("div", {
                            className: _.a.header
                        }, "Equation Editor"), o.a.createElement("form", {
                            onSubmit: this.submitLatex,
                            className: _.a.topRow
                        }, o.a.createElement("div", {
                            className: _.a.mathInputWrapper
                        }, o.a.createElement(i.EditableMathField, {
                            latex: this.state.latex,
                            onChange: function(t) {
                                e.setState({
                                    latex: t.latex()
                                })
                            },
                            mathquillDidMount: function(t) {
                                e.mathField = t, e.mathField.focus()
                            },
                            className: _.a.mathInput
                        })), o.a.createElement("div", {
                            className: _.a.insertButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.submitLatex
                        }, "Insert")), o.a.createElement("div", {
                            className: _.a.bottomWrapper
                        }, o.a.createElement("div", {
                            className: _.a.buttonRow
                        }, o.a.createElement("div", {
                            className: _.a.importantButtons
                        }, l[0].map((function(t, a) {
                            return o.a.createElement("div", {
                                key: a,
                                className: _.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.addLatex(t)
                                }
                            }, o.a.createElement(i.StaticMathField, {
                                className: _.a.mathField,
                                style: {
                                    fontSize: t.fontSize
                                }
                            }, t.text))
                        })))), o.a.createElement("div", {
                            style: {
                                height: 10
                            }
                        }), o.a.createElement("div", {
                            className: _.a.buttonRow
                        }, l.slice(1, 4).map((function(t, a) {
                            return o.a.createElement("div", {
                                className: _.a.topButtons,
                                key: a
                            }, t.map((function(t, a) {
                                return o.a.createElement("div", {
                                    key: a,
                                    className: _.a.button,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.addLatex(t)
                                    }
                                }, o.a.createElement(i.StaticMathField, {
                                    className: _.a.mathField,
                                    style: {
                                        fontSize: t.fontSize
                                    }
                                }, t.text))
                            })))
                        }))), o.a.createElement("div", {
                            style: {
                                height: 15
                            }
                        }), o.a.createElement("div", {
                            className: _.a.buttonRow
                        }, l.slice(4).map((function(t, a) {
                            return o.a.createElement("div", {
                                className: _.a.bottomButtons,
                                key: a
                            }, t.map((function(t, a) {
                                return o.a.createElement("div", {
                                    key: a,
                                    className: _.a.button,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.addLatex(t)
                                    }
                                }, o.a.createElement(i.StaticMathField, {
                                    className: _.a.mathField,
                                    style: {
                                        fontSize: t.fontSize
                                    }
                                }, t.text))
                            })))
                        }))))))
                    }
                }]) && m(t.prototype, a), n && m(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            x.propTypes = {
                equation: s.a.string,
                onDone: s.a.func.isRequired,
                onClose: s.a.func.isRequired
            };
            t.a = x
        },
        ZRb8: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___16a0f-camelCase{position:absolute;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___2y5Yx-camelCase{position:absolute;top:calc(50% + 100px);left:50%;transform:translate(-50%,-50%);width:90%;max-width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;z-index:16;overflow:hidden}.styles__header___1Wk6X-camelCase{position:absolute;top:0;left:0;width:100%;height:50px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;font-size:24px}.styles__text___2a02P-camelCase{text-align:center;width:95%;margin:65px auto 5px;font-size:22px}.styles__audioRow___3YY7Y-camelCase{margin:10px 0;width:100%;position:relative;height:104px}.styles__audioWrapper___1TJ_0-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;width:200px;height:100px;margin:0 auto;overflow:hidden}.styles__timer___1sggT-camelCase{position:absolute;font-size:18px;width:60px;text-align:center;top:50%;right:20px;transform:translateY(-50%)}.styles__buttonRow___FFEHZ-camelCase{flex-flow:row wrap;width:90%;margin:10px 5%}.styles__buttonRow___FFEHZ-camelCase,.styles__iconButton___35SDU-camelCase{display:flex;align-items:center;justify-content:center}.styles__iconButton___35SDU-camelCase{width:45px;height:45px;font-size:20px;color:#fff;background-color:#3378ff;border-radius:5px;margin:5px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__iconButton___35SDU-camelCase:focus,.styles__iconButton___35SDU-camelCase:hover{background-color:#004de6}.styles__audio___1u7Ra-camelCase{margin:0 auto}.styles__insertButton___2ifT4-camelCase{border-radius:5px;width:90px;height:35px;font-size:18px;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:10px auto 20px;color:#fff;background-color:#3378ff;transition:.2s}.styles__insertButton___2ifT4-camelCase:focus,.styles__insertButton___2ifT4-camelCase:hover{background-color:#004de6}.styles__errorContainer___1kSq1-camelCase{border:2px solid #ce1313;border-radius:4px;width:90%;padding:5px 10px;box-sizing:border-box;margin:0 auto 15px;display:flex;flex-direction:row;align-items:center}.styles__errorIcon___2ZURM-camelCase{font-size:16px;color:#ce1313;margin-right:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1DCmd-camelCase{font-size:14px}", ""]), t.locals = {
                modal: "styles__modal___16a0f-camelCase",
                mainContainer: "styles__mainContainer___2y5Yx-camelCase",
                header: "styles__header___1Wk6X-camelCase",
                text: "styles__text___2a02P-camelCase",
                audioRow: "styles__audioRow___3YY7Y-camelCase",
                audioWrapper: "styles__audioWrapper___1TJ_0-camelCase",
                timer: "styles__timer___1sggT-camelCase",
                buttonRow: "styles__buttonRow___FFEHZ-camelCase",
                iconButton: "styles__iconButton___35SDU-camelCase",
                audio: "styles__audio___1u7Ra-camelCase",
                insertButton: "styles__insertButton___2ifT4-camelCase",
                errorContainer: "styles__errorContainer___1kSq1-camelCase",
                errorIcon: "styles__errorIcon___2ZURM-camelCase",
                errorText: "styles__errorText___1DCmd-camelCase"
            }
        },
        ZVxu: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("TSYQ"),
                s = a.n(r),
                i = a("55Ip"),
                l = a("17x9"),
                c = a.n(l),
                _ = a("H1WH"),
                u = a("JeI0"),
                m = a.n(u),
                p = a("wd/R"),
                d = a.n(p),
                f = a("EDFO"),
                h = a("FKJl"),
                y = a("Xst1"),
                x = a.n(y),
                g = a("kb5n"),
                b = a.n(g),
                C = a("XOuL"),
                v = a("0oXL"),
                w = a("vCpj"),
                k = a("qnYv"),
                E = a("74sb"),
                I = a("7yjp");

            function N(e) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
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
                        value: C(e, a, i)
                    }), s
                }

                function _(e, t, a) {
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
                var u = {};

                function m() {}

                function p() {}

                function d() {}
                var f = {};
                l(f, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(I([])));
                y && y !== t && a.call(y, r) && (f = y);
                var x = d.prototype = m.prototype = Object.create(f);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = _(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                u = c.value;
                                            return u && "object" == N(u) && a.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(u).then((function(e) {
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

                function C(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return S()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = v(s, a);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = _(e, t, a);
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
                    var n = _(a, e.iterator, t.arg);
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

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function I(e) {
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
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = d, n(x, "constructor", {
                    value: d,
                    configurable: !0
                }), n(d, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = l(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, l(e, i, "GeneratorFunction")), e.prototype = Object.create(x), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), l(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new b(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(x), l(x, i, "Generator"), l(x, r, (function() {
                    return this
                })), l(x, "toString", (function() {
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
                }, e.values = I, E.prototype = {
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
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), u
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
                            iterator: I(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function j(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return O(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, t) {
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

            function z(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function R(e, t) {
                return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function B(e) {
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
                    var a, n = F(e);
                    if (t) {
                        var o = F(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return P(this, a)
                }
            }

            function P(e, t) {
                if (t && ("object" === N(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return L(e)
            }

            function L(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function F(e) {
                return (F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(f.addStyles)();
            var A = function(e) {
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
                    }), t && R(e, t)
                }(u, e);
                var t, a, n, r, l, c = B(u);

                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (t = c.call(this, e)).state = {
                        searchQuery: "",
                        searched: !1,
                        hits: [],
                        hasMore: !1,
                        pageIndex: 0,
                        minQuestions: 1,
                        hasCoverImage: !1,
                        minPlays: 10,
                        setSelected: null,
                        zoomedImage: "",
                        addingNum: 0,
                        addedNums: [],
                        isClosing: !1,
                        hasPlus: !1
                    }, t.loading = !1, t.setsContainer = o.a.createRef(), t.questionsContainer = o.a.createRef(), t.onSearch = t.onSearch.bind(L(t)), t.getSet = t.getSet.bind(L(t)), t.addQuestion = t.addQuestion.bind(L(t)), t.close = t.close.bind(L(t)), t
                }
                return t = u, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        k.a.get("/api/users/plan").then((function(t) {
                            e.setState({
                                hasPlus: t.data.hasPlus
                            })
                        })).catch((function(e) {
                            Object(h.b)(e)
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.closeTimeout)
                    }
                }, {
                    key: "onSearch",
                    value: function(e, t) {
                        var a = this;
                        if (e && e.preventDefault(), !this.loading) {
                            this.loading = !0;
                            var n = t;
                            n || (n = 0), k.a.get("/api/games/search", {
                                params: {
                                    text: this.state.searchQuery,
                                    page: n,
                                    minQuestions: this.state.minQuestions,
                                    hasCoverImage: this.state.hasCoverImage,
                                    minPlays: this.state.minPlays
                                }
                            }).then((function(e) {
                                a.loading = !1;
                                var t = e.data;
                                if (0 === n) {
                                    var o = {
                                        searched: !0,
                                        hits: t,
                                        hasMore: 24 === t.length,
                                        pageIndex: n,
                                        setSelected: null
                                    };
                                    a.setState(o, (function() {
                                        a.setsContainer && a.setsContainer.current && (a.setsContainer.current.scrollTop = 0, a.setsContainer.current.scrollLeft = 0)
                                    }))
                                } else a.setState({
                                    hits: a.state.hits.concat(t),
                                    hasMore: 24 === t.length,
                                    pageIndex: n
                                })
                            })).catch((function(e) {
                                a.loading = !1, Object(h.b)(e)
                            }))
                        }
                    }
                }, {
                    key: "getSet",
                    value: function(e) {
                        var t = this;
                        k.a.get("/api/games", {
                            params: {
                                gameId: e._id
                            }
                        }).then((function(e) {
                            var a = e.data;
                            a.questions.sort((function(e, t) {
                                return e.number - t.number
                            })), t.setState({
                                setSelected: a,
                                addedNums: []
                            }, (function() {
                                t.questionsContainer && t.questionsContainer.current && (t.questionsContainer.current.scrollTop = 0)
                            }))
                        }))
                    }
                }, {
                    key: "addQuestion",
                    value: (r = T().mark((function e(t) {
                        var a = this;
                        return T().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.state.addingNum) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.setState({
                                        addingNum: t.number
                                    }), e.next = 5, new Promise((function(e) {
                                        return a.props.onAdd(t, e)
                                    }));
                                case 5:
                                    this.setState({
                                        addedNums: [].concat(j(this.state.addedNums), [t.number]),
                                        addingNum: 0
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), l = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var o = r.apply(e, t);

                            function s(e) {
                                q(o, a, n, s, i, "next", e)
                            }

                            function i(e) {
                                q(o, a, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function(e) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "close",
                    value: function() {
                        var e = this;
                        this.setState({
                            isClosing: !0
                        }), this.closeTimeout = setTimeout((function() {
                            e.props.onClose()
                        }), 200)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: b.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.close
                        }), o.a.createElement("div", {
                            className: s()(b.a.mainContainer, S({}, b.a.slideOut, this.state.isClosing))
                        }, o.a.createElement("i", {
                            className: s()(b.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.close
                        }), o.a.createElement("div", {
                            className: b.a.top
                        }, o.a.createElement("form", {
                            onSubmit: this.onSearch,
                            className: b.a.searchContainer
                        }, o.a.createElement("input", {
                            className: b.a.searchInput,
                            type: "search",
                            value: this.state.searchQuery,
                            onChange: function(t) {
                                return e.setState({
                                    searchQuery: t.target.value.slice(0, 50)
                                })
                            },
                            placeholder: "Search for a Set...",
                            autoFocus: _.isMobile ? "" : "autofocus"
                        }), o.a.createElement("i", {
                            className: s()(b.a.searchIcon, "fas fa-search"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.onSearch
                        })), this.state.searched && this.state.searchQuery ? o.a.createElement("div", {
                            className: b.a.filtersHolder
                        }, o.a.createElement("i", {
                            className: s()(b.a.filterIcon, "fas fa-sliders-h")
                        }), o.a.createElement("div", {
                            className: b.a.filtersColumn
                        }, o.a.createElement("div", {
                            className: b.a.filterRow,
                            style: {
                                alignItems: "center"
                            }
                        }, "Has Cover Image:", o.a.createElement("div", {
                            className: s()(b.a.checkBox, this.state.hasCoverImage ? b.a.checkYes : b.a.checkNo),
                            role: "button",
                            tabIndex: 0,
                            style: {
                                marginLeft: "auto"
                            },
                            onClick: function() {
                                return e.setState({
                                    hasCoverImage: !e.state.hasCoverImage
                                }, (function(t) {
                                    return e.onSearch(t, 0)
                                }))
                            }
                        }, o.a.createElement("i", {
                            className: s()(b.a.checkIcon, "fas fa-check")
                        }))), o.a.createElement("div", {
                            className: b.a.filterRow,
                            style: {
                                flexDirection: "column"
                            }
                        }, "Minimum Questions:", o.a.createElement("div", {
                            className: b.a.filters
                        }, [1, 5, 10, 25, 50].map((function(t) {
                            return o.a.createElement("div", {
                                className: s()(b.a.checkBox, e.state.minQuestions === t ? b.a.checkYes : b.a.checkNo),
                                role: "button",
                                tabIndex: 0,
                                key: t,
                                onClick: function() {
                                    return e.setState({
                                        minQuestions: t
                                    }, (function(t) {
                                        return e.onSearch(t, 0)
                                    }))
                                }
                            }, o.a.createElement("div", {
                                className: b.a.checkIcon
                            }, t))
                        })))), o.a.createElement("div", {
                            className: b.a.filterRow,
                            style: {
                                flexDirection: "column"
                            }
                        }, "Minimum Plays:", o.a.createElement("div", {
                            className: b.a.filters
                        }, [10, 100, 500, 1e3].map((function(t) {
                            return o.a.createElement("div", {
                                className: s()(b.a.checkBox, e.state.minPlays === t ? b.a.checkYes : b.a.checkNo),
                                role: "button",
                                tabIndex: 0,
                                key: t,
                                style: {
                                    width: 30
                                },
                                onClick: function() {
                                    return e.setState({
                                        minPlays: t
                                    }, (function(t) {
                                        return e.onSearch(t, 0)
                                    }))
                                }
                            }, o.a.createElement("div", {
                                className: b.a.checkIcon
                            }, Object(E.p)(t)))
                        })))))) : null), o.a.createElement("div", {
                            className: b.a.left
                        }, this.state.loading ? o.a.createElement("div", {
                            className: b.a.nothingContainer
                        }, o.a.createElement(C.a, null)) : this.state.searched ? 0 === this.state.hits.length ? o.a.createElement("div", {
                            className: b.a.nothingContainer
                        }, o.a.createElement(v.a, {
                            name: "Blobfish",
                            className: b.a.nothingBlook
                        }), "No Results") : o.a.createElement("div", {
                            className: b.a.hitsHolder,
                            ref: this.setsContainer
                        }, this.state.hits.map((function(t) {
                            return o.a.createElement("div", {
                                className: b.a.hitContainer,
                                key: t._id,
                                style: {
                                    borderColor: e.state.setSelected && e.state.setSelected._id === t._id ? "#0bc2cf" : null
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.getSet(t)
                                }
                            }, o.a.createElement("div", {
                                className: b.a.hitImageContainer,
                                style: {
                                    backgroundColor: t.coverImage ? "#333" : "#0bc2cf"
                                }
                            }, t.coverImage ? o.a.createElement(m.a, {
                                height: 100
                            }, o.a.createElement("img", {
                                src: Object(E.f)(t.coverImage.url),
                                alt: "Cover",
                                className: b.a.coverImage,
                                draggable: !1
                            })) : o.a.createElement("div", {
                                className: b.a.setFillerText
                            }, "Blooket"), o.a.createElement("div", {
                                className: b.a.setQuestionsText
                            }, "".concat(Object(E.j)(t.questions.length), " Qs"))), o.a.createElement("div", {
                                className: b.a.hitRight
                            }, o.a.createElement("div", {
                                className: b.a.setHeader
                            }, t.title), o.a.createElement("div", {
                                className: b.a.setSpacer
                            }), o.a.createElement("div", {
                                className: b.a.setPlays
                            }, "".concat(Object(E.j)(t.playCount), " ").concat(1 === t.playCount ? "Play" : "Plays"), t.verified ? o.a.createElement("i", {
                                className: s()("fas fa-check-square", b.a.verifiedIcon)
                            }) : null), o.a.createElement("div", {
                                className: s()(b.a.setDescText, b.a.setEditedText)
                            }, "Edited ".concat(d()(t.date).fromNow())), o.a.createElement("div", {
                                className: b.a.setAuthorContainer
                            }, o.a.createElement("i", {
                                className: s()(b.a.authorIcon, "fas fa-user")
                            }), o.a.createElement("div", {
                                className: b.a.setDescText
                            }, t.author))))
                        })), this.state.hasMore > 0 && !this.state.loading ? o.a.createElement("div", {
                            className: b.a.showMoreButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function(t) {
                                return e.onSearch(t, e.state.pageIndex + 1)
                            }
                        }, "Show More") : null) : o.a.createElement("div", {
                            className: b.a.nothingContainer
                        }, o.a.createElement(v.a, {
                            name: "Chameleon",
                            className: b.a.nothingBlook
                        }), "Waiting to Search")), o.a.createElement("div", {
                            className: b.a.right
                        }, this.state.setSelected ? o.a.createElement("div", {
                            className: b.a.questionsHolder,
                            ref: this.questionsContainer
                        }, this.state.setSelected.questions.map((function(t) {
                            return o.a.createElement("div", {
                                key: t.number,
                                className: b.a.questionSection
                            }, o.a.createElement("div", {
                                className: b.a.questionContainer
                            }, o.a.createElement("div", {
                                className: b.a.questionImageContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: !t.image || !t.image.url || t.audio && t.audio.url ? function() {} : function() {
                                    return e.setState({
                                        zoomedImage: t.image.url
                                    })
                                },
                                style: {
                                    cursor: !t.image || !t.image.url || t.audio && t.audio.url ? "default" : "cursor",
                                    backgroundColor: !t.image || !t.image.url || t.audio && t.audio.url ? "#0bc2cf" : "#333333"
                                }
                            }, !t.image || !t.image.url || t.audio && t.audio.url ? null : _.isMobile ? o.a.createElement("img", {
                                src: Object(E.f)(t.image.url),
                                alt: "Question Background",
                                className: b.a.questionImage
                            }) : o.a.createElement(m.a, {
                                height: 130,
                                width: 170
                            }, o.a.createElement("img", {
                                src: Object(E.f)(t.image.url),
                                alt: "Question Background",
                                className: b.a.questionImage
                            })), o.a.createElement("div", {
                                className: b.a.imageNumber
                            }, t.number)), t.audio && t.audio.url ? o.a.createElement("div", {
                                className: b.a.questionFunc
                            }, o.a.createElement(w.a, {
                                audioUrl: t.audio.url,
                                width: "40%"
                            })) : t.question.includes("`*`") ? o.a.createElement("div", {
                                className: b.a.questionFunc
                            }, o.a.createElement(f.StaticMathField, {
                                className: b.a.qMathField
                            }, t.question.slice(t.question.indexOf("`*`") + 3, t.question.length - 3))) : null, o.a.createElement("div", {
                                className: s()(b.a.questionCenterContainer, S({}, b.a.questionWithFunc, t.question.includes("`*`") || t.audio && t.audio.url))
                            }, o.a.createElement("div", {
                                className: b.a.questionText
                            }, t.question.includes("`*`") ? t.question.slice(0, t.question.indexOf("`*`")) : t.question)), e.state.addingNum === t.number ? o.a.createElement("div", {
                                className: b.a.addedContainer
                            }, o.a.createElement(C.a, null)) : e.state.addedNums.includes(t.number) ? o.a.createElement("div", {
                                className: b.a.addedContainer
                            }, "Added!") : (t.audio && t.audio.url || t.answers.join("").includes("`~`")) && !e.state.hasPlus ? o.a.createElement(i.b, {
                                to: "/upgrade",
                                className: b.a.addQuestionButton,
                                style: {
                                    backgroundColor: "#ff7b24"
                                }
                            }, o.a.createElement("i", {
                                className: s()("fas fa-plus-square", b.a.addIcon)
                            }), "Plus Required") : o.a.createElement("div", {
                                className: b.a.addQuestionButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.addQuestion(t)
                                }
                            }, o.a.createElement("i", {
                                className: s()("fas fa-plus-square", b.a.addIcon)
                            }), "Add Question")), o.a.createElement("div", {
                                className: b.a.answerContainer
                            }, t.answers.map((function(e, a) {
                                return 2 === e.split("`~`").length ? o.a.createElement("div", {
                                    className: s()(b.a.answerImgContainer, S({}, b.a.faded, !t.correctAnswers.includes(e))),
                                    style: {
                                        backgroundColor: I.a.default.answers[a].background
                                    },
                                    key: e
                                }, o.a.createElement("img", {
                                    src: Object(E.f)(e.split("`~`")[1]),
                                    alt: "Answer",
                                    className: b.a.answerImg,
                                    draggable: !1
                                })) : "`*`" === e.slice(0, 3) ? o.a.createElement("div", {
                                    className: s()(b.a.answerImgContainer, S({}, b.a.faded, !t.correctAnswers.includes(e))),
                                    style: {
                                        backgroundColor: I.a.default.answers[a].background
                                    },
                                    key: e
                                }, o.a.createElement(f.StaticMathField, {
                                    className: b.a.mathField
                                }, e.slice(3, e.length - 3))) : o.a.createElement("div", {
                                    className: s()(b.a.answer, S({}, b.a.faded, !t.correctAnswers.includes(e))),
                                    style: {
                                        backgroundColor: I.a.default.answers[a].background
                                    },
                                    key: e
                                }, o.a.createElement("div", {
                                    className: b.a.answerText
                                }, e))
                            }))))
                        }))) : o.a.createElement("div", {
                            className: b.a.nothingContainer
                        }, "Select a set to view it here"))), this.state.zoomedImage ? o.a.createElement("div", {
                            className: s()(x.a.modal, x.a.modalButton),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    zoomedImage: ""
                                })
                            }
                        }, o.a.createElement("img", {
                            src: Object(E.f)(this.state.zoomedImage, !0),
                            alt: "Upload",
                            className: x.a.bigImage,
                            draggable: !1
                        })) : null)
                    }
                }]) && z(t.prototype, a), n && z(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), u
            }(o.a.Component);
            A.propTypes = {
                onAdd: c.a.func.isRequired,
                onClose: c.a.func.isRequired
            }, t.a = A
        },
        ZXaF: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___2nvjP-camelCase{position:absolute;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___1RAiv-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:650px;height:800px;max-height:90%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;z-index:16;overflow:hidden;flex-direction:column}.styles__header___1U0IH-camelCase,.styles__mainContainer___1RAiv-camelCase{position:absolute;display:flex}.styles__header___1U0IH-camelCase{top:0;left:0;width:100%;height:50px;flex-direction:row;align-items:center;justify-content:center;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;font-size:24px}.styles__topRow___2VUb9-camelCase{margin:70px auto 10px;justify-content:space-between;width:90%}.styles__mathInputWrapper___323bt-camelCase,.styles__topRow___2VUb9-camelCase{display:flex;flex-direction:row;align-items:center}.styles__mathInputWrapper___323bt-camelCase{width:calc(100% - 110px);min-height:70px;padding:5px 10px;box-sizing:border-box;border:2px solid rgba(0,0,0,.17)!important;border-radius:5px!important;text-align:left}.styles__mathInputWrapper___323bt-camelCase[focus-within]{border-color:#3378ff!important}.styles__mathInputWrapper___323bt-camelCase:focus-within{border-color:#3378ff!important}.styles__mathInput___3a-iu-camelCase{box-shadow:none!important;border:none!important;width:100%}.styles__insertButton___1oyLR-camelCase,.styles__mathInput___3a-iu-camelCase{font-size:18px;outline:none}.styles__insertButton___1oyLR-camelCase{border-radius:5px;width:90px;height:35px;display:flex;align-items:center;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;background-color:#3378ff;transition:.2s}.styles__insertButton___1oyLR-camelCase:focus,.styles__insertButton___1oyLR-camelCase:hover{background-color:#004de6}.styles__bottomWrapper___2aAol-camelCase{margin:10px auto 15px;width:calc(95% - 20px);padding:0 10px;flex-grow:1;overflow-y:auto}.styles__button___1sh0e-camelCase{border:1px solid rgba(0,0,0,.4);border-radius:3px;width:50px;height:50px;display:flex;justify-content:center;align-items:center;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:transparent}.styles__button___1sh0e-camelCase:hover{background-color:rgba(0,0,0,.1)}.styles__mathField____d8YC-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer!important;color:#3a3a3a;border-color:#3a3a3a}.styles__buttonRow___LbqX8-camelCase{display:flex;flex-flow:row wrap;justify-content:space-between;margin:5px 0;width:100%}.styles__bottomButtons___1Nkoy-camelCase,.styles__importantButtons___WH7-H-camelCase,.styles__topButtons___2ETH_-camelCase{width:100%;display:grid;justify-content:center;align-content:flex-start;grid-template-columns:repeat(auto-fill,50px);grid-gap:8px}.styles__topButtons___2ETH_-camelCase{width:30%}.styles__bottomButtons___1Nkoy-camelCase{width:49%}", ""]), t.locals = {
                modal: "styles__modal___2nvjP-camelCase",
                mainContainer: "styles__mainContainer___1RAiv-camelCase",
                header: "styles__header___1U0IH-camelCase",
                topRow: "styles__topRow___2VUb9-camelCase",
                mathInputWrapper: "styles__mathInputWrapper___323bt-camelCase",
                mathInput: "styles__mathInput___3a-iu-camelCase",
                insertButton: "styles__insertButton___1oyLR-camelCase",
                bottomWrapper: "styles__bottomWrapper___2aAol-camelCase",
                button: "styles__button___1sh0e-camelCase",
                mathField: "styles__mathField____d8YC-camelCase",
                buttonRow: "styles__buttonRow___LbqX8-camelCase",
                bottomButtons: "styles__bottomButtons___1Nkoy-camelCase",
                importantButtons: "styles__importantButtons___WH7-H-camelCase",
                topButtons: "styles__topButtons___2ETH_-camelCase"
            }
        },
        ZaQo: function(e, t, a) {
            var n = a("uCac");
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
        "bQY/": function(e, t, a) {
            var n = a("Vy2N");
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
        "ca/f": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("17x9"),
                s = a.n(r),
                i = a("H1WH"),
                l = a("TSYQ"),
                c = a.n(l),
                _ = a("O/BK"),
                u = a.n(_),
                m = a("Xst1"),
                p = a.n(m),
                d = a("lmLo"),
                f = a("XOuL"),
                h = a("LHn/"),
                y = a("0oXL"),
                x = a("74sb");

            function g(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var b = ["#1f77b4", "#ffa31e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#b3dc23", "#0bc2cf"],
                C = function(e) {
                    var t = e.text,
                        a = e.content,
                        n = e.buttonOne,
                        r = e.buttonTwo,
                        s = e.loading,
                        l = e.numValue,
                        _ = e.numChange,
                        m = e.numTotal,
                        C = e.priceValue,
                        v = e.priceChange,
                        w = e.timeValue,
                        k = e.timeChange,
                        E = e.stringValue,
                        I = e.stringChange,
                        N = e.stringPlaceholder,
                        S = e.stringValue2,
                        T = e.stringChange2,
                        j = e.stringPlaceholder2,
                        O = e.colorValue,
                        q = e.colorChange,
                        z = e.error,
                        R = e.onSubmit,
                        B = e.isDark,
                        P = e.blook;
                    return o.a.createElement("div", {
                        className: p.a.modal
                    }, o.a.createElement("form", {
                        onSubmit: R ? function(e) {
                            return R(e)
                        } : function(e) {
                            return e.preventDefault()
                        },
                        className: u.a.container,
                        style: {
                            backgroundColor: B ? "#1a1a1a" : null
                        }
                    }, o.a.createElement("div", {
                        className: u.a.text,
                        style: {
                            color: B ? "#fff" : null
                        }
                    }, P ? o.a.createElement(y.a, {
                        name: P,
                        className: u.a.blook
                    }) : null, t || a), s ? o.a.createElement(f.a, null) : o.a.createElement("div", {
                        className: u.a.holder
                    }, void 0 !== l ? o.a.createElement("div", {
                        className: u.a.numRow
                    }, o.a.createElement("div", {
                        className: c()(u.a.inputContainer, g({}, u.a.inputFilled, l)),
                        style: {
                            width: 80,
                            margin: 0
                        }
                    }, o.a.createElement("input", {
                        className: u.a.input,
                        style: {
                            width: 60
                        },
                        placeholder: "",
                        onChange: _,
                        value: l,
                        type: "tel",
                        autoFocus: i.isMobile ? "" : "autofocus"
                    })), o.a.createElement("div", {
                        className: u.a.numTotal
                    }, "/ ".concat(Object(x.j)(m)))) : null, void 0 !== C ? o.a.createElement("div", {
                        className: c()(u.a.inputContainer, g({}, u.a.inputFilled, C))
                    }, o.a.createElement("input", {
                        className: u.a.input,
                        placeholder: "Price",
                        onChange: v,
                        value: C,
                        type: "number",
                        autoFocus: i.isMobile ? "" : "autofocus"
                    }), o.a.createElement("img", {
                        src: h.a.basic.token,
                        alt: "Token",
                        className: u.a.token,
                        draggable: !1
                    })) : null, void 0 !== w ? o.a.createElement("div", {
                        className: c()(u.a.inputContainer, g({}, u.a.inputFilled, w))
                    }, o.a.createElement("input", {
                        className: u.a.input,
                        placeholder: "Time",
                        onChange: k,
                        value: w,
                        type: "number",
                        autoFocus: i.isMobile || void 0 !== C ? "" : "autofocus"
                    }), o.a.createElement("i", {
                        className: c()(u.a.icon, "far fa-clock")
                    })) : null, void 0 !== E ? o.a.createElement("div", {
                        className: c()(u.a.inputContainer, g({}, u.a.inputFilled, E)),
                        style: {
                            width: "80%"
                        }
                    }, o.a.createElement("input", {
                        className: u.a.longInput,
                        placeholder: N || "Name",
                        onChange: I,
                        value: E,
                        type: "text",
                        autoFocus: i.isMobile || void 0 !== E ? "" : "autofocus"
                    })) : null, void 0 !== S ? o.a.createElement("div", {
                        className: c()(u.a.inputContainer, g({}, u.a.inputFilled, S)),
                        style: {
                            width: "80%"
                        }
                    }, o.a.createElement("input", {
                        className: u.a.longInput,
                        placeholder: j || "Name",
                        onChange: T,
                        value: S,
                        type: "text",
                        autoFocus: i.isMobile || void 0 !== S ? "" : "autofocus"
                    })) : null, void 0 !== O ? o.a.createElement("div", {
                        className: u.a.colorsHolder
                    }, b.map((function(e) {
                        return o.a.createElement("div", {
                            className: u.a.colorContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return q(e)
                            },
                            key: e,
                            style: {
                                backgroundColor: e
                            }
                        }, e === O ? o.a.createElement("i", {
                            className: "fas fa-check"
                        }) : null)
                    }))) : null, z ? o.a.createElement("div", {
                        className: u.a.errorContainer
                    }, o.a.createElement("i", {
                        className: c()(u.a.errorIcon, "fas fa-times-circle")
                    }), o.a.createElement("div", {
                        className: u.a.errorText
                    }, z)) : null, o.a.createElement("div", {
                        className: u.a.buttonContainer
                    }, n ? o.a.createElement(d.a, {
                        onClick: n.click,
                        outsideClass: u.a.button,
                        insideClass: u.a.buttonInside,
                        color: "orange" === n.color ? "#ff7b24" : "red" === n.color ? "#ce1313" : "green" === n.color ? "#4bc22e" : "black" === n.color ? "#3a3a3a" : "#0bc2cf"
                    }, n.text) : null, r ? o.a.createElement(d.a, {
                        onClick: r.click,
                        outsideClass: u.a.button,
                        insideClass: u.a.buttonInside,
                        color: "orange" === r.color ? "#ff7b24" : "red" === r.color ? "#ce1313" : "green" === r.color ? "#4bc22e" : "black" === r.color ? "#3a3a3a" : "#0bc2cf"
                    }, r.text) : null)), o.a.createElement("input", {
                        type: "submit",
                        style: {
                            opacity: 0,
                            display: "none"
                        }
                    })))
                };
            C.propTypes = {
                text: s.a.string,
                content: s.a.element,
                buttonOne: s.a.shape({
                    text: s.a.string,
                    click: s.a.func,
                    color: s.a.string
                }),
                buttonTwo: s.a.shape({
                    text: s.a.string,
                    click: s.a.func,
                    color: s.a.string
                }),
                loading: s.a.bool,
                numValue: s.a.number,
                numChange: s.a.func,
                numTotal: s.a.number,
                priceValue: s.a.any,
                priceChange: s.a.func,
                timeValue: s.a.any,
                timeChange: s.a.func,
                stringValue: s.a.string,
                stringChange: s.a.func,
                stringPlaceholder: s.a.string,
                stringValue2: s.a.string,
                stringChange2: s.a.func,
                stringPlaceholder2: s.a.string,
                colorValue: s.a.string,
                colorChange: s.a.func,
                error: s.a.string,
                onSubmit: s.a.func,
                isDark: s.a.bool,
                blook: s.a.string
            }, t.a = C
        },
        "i4/Q": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("17x9"),
                s = a.n(r),
                i = a("TSYQ"),
                l = a.n(i),
                c = a("55Ip"),
                _ = a("cpGi"),
                u = a("kRG3"),
                m = a.n(u),
                p = a("Xst1"),
                d = a.n(p),
                f = a("LHn/"),
                h = a("0oXL"),
                y = a("y9k9"),
                x = a("lmLo");

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return w(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function C(e, t) {
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
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return w(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? w(e, t) : void 0
                }
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            var k = {
                    Play: {
                        icon: "fas fa-play",
                        link: "".concat("https://play.blooket.com", "/play"),
                        realLink: !0
                    },
                    Discover: {
                        icon: "fas fa-compass",
                        link: "/discover"
                    },
                    "Set Creator": {
                        icon: "fas fa-edit",
                        link: "/create"
                    },
                    "My Sets": {
                        icon: "fas fa-list",
                        link: "/my-sets"
                    },
                    Favorites: {
                        icon: "fas fa-star",
                        link: "/favorites"
                    },
                    Homework: {
                        icon: "fas fa-file-alt",
                        link: "/homeworks",
                        noMobile: !0
                    },
                    History: {
                        icon: "fas fa-history",
                        link: "/history",
                        noMobile: !0
                    },
                    Classes: {
                        icon: "fas fa-chalkboard-teacher",
                        link: "/classes",
                        showIf: function(e) {
                            return "Bot" === e.name
                        },
                        noMobile: !0
                    },
                    "Group Plan": {
                        icon: "fas fa-users",
                        link: "/group-plan",
                        showIf: function(e) {
                            return e.groupId
                        }
                    },
                    Market: {
                        icon: "fas fa-store",
                        link: "/market"
                    },
                    Blooks: {
                        icon: "fas fa-suitcase",
                        link: "/blooks"
                    },
                    Stats: {
                        icon: "fas fa-chart-bar",
                        link: "/stats"
                    },
                    Settings: {
                        icon: "fas fa-cog",
                        link: "/settings"
                    },
                    Logout: {
                        icon: "fas fa-sign-out-alt",
                        link: "".concat("https://id.blooket.com", "/logout"),
                        realLink: !0
                    }
                },
                E = {
                    big: "Play",
                    medium: ["Stats", "Blooks", "Market", "Discover", "Set Creator", "My Sets", "Favorites", "Group Plan"],
                    small: ["History", "Homework", "Settings"]
                },
                I = {
                    big: "Set Creator",
                    medium: ["Discover", "My Sets", "Favorites", "History", "Homework", "Classes", "Play", "Group Plan", "Settings"],
                    small: ["Stats", "Blooks", "Market"]
                },
                N = function(e) {
                    var t = e.page,
                        a = e.user,
                        r = e.topContent,
                        s = e.newNews,
                        i = e.afterNews,
                        u = C(Object(n.useState)(!1), 2),
                        p = u[0],
                        v = u[1],
                        w = C(Object(n.useState)(!1), 2),
                        N = w[0],
                        S = w[1],
                        T = a || {},
                        j = "Student" === T.role ? E : I;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: m.a.sidebar
                    }, o.a.createElement("img", {
                        src: f.a.basic.blooket,
                        alt: "Blooket",
                        className: m.a.logo
                    }), o.a.createElement(x.a, {
                        color: "#0bc2cf",
                        linkTo: k[j.big].link,
                        outsideClass: m.a.bigButton
                    }, o.a.createElement("div", {
                        className: m.a.bigButtonInside
                    }, o.a.createElement("i", {
                        className: l()(k[j.big].icon, m.a.bigIcon)
                    }), "Set Creator" === j.big ? "Create" : j.big)), j.medium.filter((function(e) {
                        return !k[e].showIf || k[e].showIf(T)
                    })).map((function(e) {
                        var a, n;
                        return k[e].realLink ? o.a.createElement("a", {
                            href: k[e].link,
                            key: e,
                            className: l()(m.a.pageButton, (a = {}, b(a, m.a.pageSelected, t === e), b(a, m.a.noMobile, k[e].noMobile), a))
                        }, o.a.createElement("i", {
                            className: l()(m.a.pageIcon, k[e].icon)
                        }), o.a.createElement("div", {
                            className: m.a.pageText
                        }, e)) : o.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            className: l()(m.a.pageButton, (n = {}, b(n, m.a.pageSelected, t === e), b(n, m.a.noMobile, k[e].noMobile), n))
                        }, o.a.createElement("i", {
                            className: l()(m.a.pageIcon, k[e].icon)
                        }), o.a.createElement("div", {
                            className: m.a.pageText
                        }, e))
                    })), T.role ? o.a.createElement("div", {
                        className: m.a.bottomRow
                    }, o.a.createElement(_.a, {
                        place: "top",
                        effect: "solid",
                        className: d.a.tooltip
                    }), j.small.map((function(e) {
                        return o.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            "data-tip": e,
                            className: l()(m.a.smallButton, b({}, m.a.noMobile, k[e].noMobile))
                        }, o.a.createElement("i", {
                            className: l()(m.a.bottomIcon, k[e].icon)
                        }))
                    })), o.a.createElement("div", {
                        className: m.a.smallButton,
                        "data-tip": "News",
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return v(!0)
                        }
                    }, o.a.createElement("i", {
                        className: l()("far fa-newspaper", m.a.bottomIcon)
                    }))) : null, T.hasPlus || "Teacher" !== T.role ? null : o.a.createElement(c.b, {
                        className: m.a.plusButton,
                        to: "/upgrade"
                    }, o.a.createElement("i", {
                        className: l()("fas fa-plus", m.a.plusIcon)
                    }), "Upgrade to Plus")), o.a.createElement("div", {
                        className: m.a.topRightRow
                    }, r, o.a.createElement("div", {
                        className: m.a.profileContainer,
                        role: "button",
                        tabIndex: 0
                    }, o.a.createElement("div", {
                        className: m.a.profileRow
                    }, o.a.createElement(h.a, {
                        name: T.blook || "Chick",
                        className: m.a.profileBlook
                    }), T.name || ""), o.a.createElement("i", {
                        className: l()("fas fa-angle-down", m.a.profileDropdownIcon)
                    }), o.a.createElement("div", {
                        className: m.a.profileDropdownMenu
                    }, o.a.createElement(c.b, {
                        className: m.a.profileDropdownOption,
                        to: "/settings"
                    }, o.a.createElement("i", {
                        className: l()("fas fa-cog", m.a.profileDropdownOptionIcon)
                    }), "Settings"), o.a.createElement("a", {
                        className: m.a.profileDropdownOption,
                        href: "".concat("https://id.blooket.com", "/logout")
                    }, o.a.createElement("i", {
                        className: l()("fas fa-sign-out-alt", m.a.profileDropdownOptionIcon)
                    }), "Logout")))), o.a.createElement("div", {
                        className: m.a.mNavBar
                    }, o.a.createElement("img", {
                        src: f.a.basic.blooket,
                        alt: "Blooket",
                        className: m.a.mLogo
                    }), o.a.createElement("i", {
                        className: l()(m.a.mHamburgerIcon, "fas fa-bars"),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return S(!0)
                        }
                    })), o.a.createElement("div", {
                        className: d.a.modal,
                        style: {
                            opacity: N ? 1 : 0,
                            transition: "200ms",
                            pointerEvents: "none"
                        }
                    }), o.a.createElement("div", {
                        className: m.a.mSidebar,
                        style: {
                            transform: N ? "translateX(-100%)" : null
                        }
                    }, o.a.createElement("i", {
                        className: l()(m.a.closeIcon, "fas fa-times"),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return S(!1)
                        }
                    }), o.a.createElement(x.a, {
                        color: "#0bc2cf",
                        linkTo: k[j.big].link,
                        outsideClass: m.a.bigButton
                    }, o.a.createElement("div", {
                        className: m.a.bigButtonInside
                    }, o.a.createElement("i", {
                        className: l()(k[j.big].icon, m.a.bigIcon)
                    }), "Set Creator" === j.big ? "Create" : j.big)), [].concat(g(j.medium), ["Logout"]).filter((function(e) {
                        return !k[e].showIf || k[e].showIf(T)
                    })).map((function(e) {
                        var a, n;
                        return k[e].realLink ? o.a.createElement("a", {
                            href: k[e].link,
                            key: e,
                            className: l()(m.a.pageButton, (a = {}, b(a, m.a.pageSelected, t === e), b(a, m.a.noMobile, k[e].noMobile), a))
                        }, o.a.createElement("i", {
                            className: l()(m.a.pageIcon, k[e].icon)
                        }), o.a.createElement("div", {
                            className: m.a.pageText
                        }, e)) : o.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            className: l()(m.a.pageButton, (n = {}, b(n, m.a.pageSelected, t === e), b(n, m.a.noMobile, k[e].noMobile), n))
                        }, o.a.createElement("i", {
                            className: l()(m.a.pageIcon, k[e].icon)
                        }), o.a.createElement("div", {
                            className: m.a.pageText
                        }, e))
                    })), o.a.createElement("div", {
                        className: m.a.bottomRow,
                        style: {
                            marginBottom: 15
                        }
                    }, j.small.map((function(e) {
                        return o.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            className: l()(m.a.smallButton, b({}, m.a.noMobile, k[e].noMobile))
                        }, o.a.createElement("i", {
                            className: l()(m.a.bottomIcon, k[e].icon)
                        }))
                    })), o.a.createElement("div", {
                        className: m.a.smallButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return v(!0)
                        }
                    }, o.a.createElement("i", {
                        className: l()("far fa-newspaper", m.a.bottomIcon)
                    })))), o.a.createElement(y.a, {
                        isShown: p || s,
                        onClose: function() {
                            s && i(), v(!1)
                        }
                    }))
                };
            N.propTypes = {
                page: s.a.string,
                user: s.a.object,
                topContent: s.a.element,
                newNews: s.a.bool,
                afterNews: s.a.func
            }, t.a = N
        },
        j03a: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("17x9"),
                s = a.n(r),
                i = a("JMOU"),
                l = a.n(i);

            function c(e, t) {
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
                    if ("string" == typeof e) return _(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            var u = {
                    Superscript: ["¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "⁰", "⁺", "⁻", "⁼", "⁽", "⁾"],
                    Subscript: ["₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₀", "₊", "₋", "₌", "₍", "₎"],
                    "Lowercase Accents": ["á", "é", "í", "ó", "ú", "ã", "ñ", "õ", "à", "è", "ì", "ò", "ù", "ý", "â", "ê", "î", "ô", "û", "ä", "ë", "ï", "ö", "ü", "ÿ", "ç", "ø", "å", "æ", "œ"],
                    "Uppercase Accents": ["Á", "É", "Í", "Ó", "Ú", "Ã", "Ñ", "Õ", "À", "È", "Ì", "Ò", "Ù", "Ý", "Â", "Ê", "Î", "Ô", "Û", "ä", "ë", "ï", "ö", "ü", "ÿ", "Ç", "Ø", "Å", "Æ", "Œ"],
                    Common: ["°", "¿", "¡", "÷", "×", "±", "•", "≠", "≈", "≤", "≥", "↑", "↓", "→", "←", "√", "∫", "∞"],
                    "Lowercase Greek": ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"],
                    "Uppercase Greek": ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"]
                },
                m = function(e) {
                    var t = e.select;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: l.a.modal,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return t("")
                        }
                    }), o.a.createElement("div", {
                        className: l.a.mainContainer
                    }, o.a.createElement("div", {
                        className: l.a.header
                    }, "Symbol Keyboard"), o.a.createElement("div", {
                        className: l.a.mainRegularBody
                    }, Object.entries(u).map((function(e) {
                        var a = c(e, 2),
                            n = a[0],
                            r = a[1];
                        return o.a.createElement("div", {
                            className: l.a.group,
                            key: n
                        }, o.a.createElement("div", {
                            className: l.a.groupName
                        }, n), o.a.createElement("div", {
                            className: l.a.symbolContainer
                        }, r.map((function(e) {
                            return o.a.createElement("div", {
                                className: l.a.symbol,
                                key: e,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return t(e)
                                }
                            }, e)
                        }))))
                    })), o.a.createElement("a", {
                        href: "https://symbolsalad.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: l.a.link
                    }, "More Symbols")), o.a.createElement("div", {
                        style: {
                            height: 20
                        }
                    })))
                };
            m.propTypes = {
                select: s.a.func.isRequired
            }, t.a = m
        },
        j8ID: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__wrapper___29Oho-camelCase{margin:0;padding:0;position:fixed;z-index:5}.styles__modal___3It9q-camelCase,.styles__wrapper___29Oho-camelCase{height:100%;width:100%;top:0;left:0}.styles__modal___3It9q-camelCase{position:absolute;z-index:15;overflow:auto;background-color:rgba(0,0,0,.6)}.styles__mainContainer___3D-r6-camelCase{width:85%;height:85%;max-width:1100px;max-height:700px;background-color:#fff;border-radius:7px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__header___36gb1-camelCase{position:absolute;top:0;left:0;width:100%;height:55px;justify-content:space-between;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;border-top-left-radius:7px;border-top-right-radius:7px}.styles__header___36gb1-camelCase,.styles__headerContainer___PuqBU-camelCase,.styles__headerRow___16jFw-camelCase{display:flex;flex-direction:row;align-items:center}.styles__headerContainer___PuqBU-camelCase{height:42px;border:2px solid #fff;border-radius:5px;color:#fff;padding:0 7px;box-sizing:border-box;margin:auto 10px}.styles__headerIcon___1oSqv-camelCase{font-size:26px}.styles__headerText___2ojyr-camelCase{margin:auto 10px;font-size:14px;line-height:14px}.styles__timeInput___206Z4-camelCase{border:2px solid #fff;border-radius:5px;background-color:#9a49aa;padding:0 5px;width:38px;font-size:18px;font-family:Nunito,sans-serif;text-align:right;color:#fff;outline:none}.styles__timeInput___206Z4-camelCase::-webkit-inner-spin-button,.styles__timeInput___206Z4-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__randomButton___2HsrZ-camelCase{display:flex;justify-content:center;align-items:center;border:2px solid #fff;border-radius:5px;box-sizing:border-box;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__randomCheck___2Us1Y-camelCase{font-size:16px;color:#fff;opacity:0;transition:.2s}.styles__isRandom___3g16D-camelCase>.styles__randomCheck___2Us1Y-camelCase{opacity:1}.styles__cancelButton___38eWZ-camelCase{border:3px solid #fff;border-radius:5px;color:#fff;padding:0 7px;box-sizing:border-box;margin:auto 10px;font-size:16px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__cancelButton___38eWZ-camelCase:hover{transform:scale(.95)}.styles__cancelIcon___3I-Ya-camelCase{font-size:18px;display:none}.styles__cancelText___33X_I-camelCase{font-size:16px}.styles__saveButton___1Mdgu-camelCase{border-radius:5px;color:#9a49aa;background-color:#fff;display:flex;flex-direction:row;align-items:center;padding:7px 12px;box-sizing:border-box;margin:auto 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__saveButton___1Mdgu-camelCase:hover{transform:scale(.95)}.styles__saveIcon___1I1z5-camelCase{font-size:18px;margin-right:7px}.styles__saveText___GfbGg-camelCase{font-size:18px;font-weight:700}.styles__loadingIcon___3a3fN-camelCase{font-size:18px;animation:styles__spin___1rbXp-camelCase 1s linear infinite}@keyframes styles__spin___1rbXp-camelCase{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.styles__questionRegularBody___2lrUv-camelCase{position:absolute;left:0;top:55px;height:calc(100% - 55px);width:100%}.styles__questionContainer___-CrZi-camelCase{width:90%;height:40%;background-color:#fff;position:absolute;top:2.5%;left:5%;display:flex;flex-direction:row;align-items:center}.styles__questionLeftContainer___1K9Du-camelCase{width:85px;height:100%;margin-right:4%}.styles__questionButton___1-47Y-camelCase,.styles__questionLeftContainer___1K9Du-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__questionButton___1-47Y-camelCase{background-color:#3378ff;color:#fff;font-size:14px;border-radius:5px;margin:5px 0;width:65px;height:60px;box-shadow:2px 2px 0 0 #2960cc;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__questionButton___1-47Y-camelCase:hover{background-color:#004de6}.styles__questionIcon___1ym67-camelCase{font-size:24px}.styles__questionImgWrapper___FoBkL-camelCase{width:30%;height:100%;margin-right:4%;flex-direction:column}.styles__questionImgContainer___1f59d-camelCase,.styles__questionImgWrapper___FoBkL-camelCase{display:flex;justify-content:center;align-items:center}.styles__questionImgContainer___1f59d-camelCase{width:100%;height:80%}.styles__questionEqWrapper___x-bqP-camelCase{width:40%;height:100%;margin-right:4%;flex-direction:column}.styles__questionEqWrapper___x-bqP-camelCase,.styles__removeQButton___2CRbg-camelCase{display:flex;justify-content:center;align-items:center}.styles__removeQButton___2CRbg-camelCase{margin-top:7px;flex-direction:row;font-size:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;background-color:rgba(0,0,0,.1);border-radius:5px;padding:3px 7px;opacity:.7}.styles__removeQButton___2CRbg-camelCase:hover{opacity:.9}.styles__removeQIcon___4V5Jb-camelCase{font-size:10px;margin-right:5px}.styles__questionTextContainer___39Cd5-camelCase{width:calc(85% - 85px);height:80%;text-align:center;overflow:hidden;display:flex;justify-content:center;align-items:center;flex-grow:1;border-radius:5px;border:3px solid #fff;box-sizing:border-box;outline:none;cursor:text;position:relative;font-size:20px}.styles__questionTextContainer___39Cd5-camelCase:hover,.styles__questionTextContainer___39Cd5-camelCase[focus-within]{border:3px solid #0bc2cf}.styles__questionTextContainer___39Cd5-camelCase:focus-within,.styles__questionTextContainer___39Cd5-camelCase:hover{border:3px solid #0bc2cf}.styles__questionTextContainer___39Cd5-camelCase[focus-within]{background-color:rgba(0,0,0,.02)}.styles__questionTextContainer___39Cd5-camelCase:focus-within{background-color:rgba(0,0,0,.02)}.styles__questionText___3-Uio-camelCase{padding:10px;box-sizing:border-box;outline:none}.styles__placeholder___2G84o-camelCase,.styles__questionText___3-Uio-camelCase{width:100%;text-align:center}.styles__placeholder___2G84o-camelCase{opacity:.6;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;font-size:20px}.styles__errorContainer___3ba57-camelCase{border:2px solid #ce1313;border-radius:5px;width:330px;width:20%;margin-left:2.5%;padding:10px;box-sizing:border-box;font-size:16px;line-height:18px;text-align:center}.styles__imageContainer___1Hz7z-camelCase{width:30%;height:85%;margin-right:5%;display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__img___2BpS6-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__answersHolder___1sYeZ-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:space-evenly;position:absolute;top:45%;left:0;height:calc(55% - 5px);width:calc(100% - 10px);padding:0 5px 5px}.styles__answerWrapper___2bsy8-camelCase{margin:auto;width:calc(50% - 6px);height:calc(50% - 6px);overflow:hidden}.styles__answerContainer___1ZDcZ-camelCase{margin:auto;width:100%;height:calc(100% - .9vh);border-radius:5px;overflow:hidden;padding-bottom:.9vh;box-shadow:inset 0 -.9vh 0 0 rgba(0,0,0,.2)}.styles__answerContainer___1ZDcZ-camelCase,.styles__answerLeftContainer___1dHXT-camelCase{display:flex;justify-content:center;align-items:center}.styles__answerLeftContainer___1dHXT-camelCase{width:75px;height:100%;flex-direction:column;margin-right:5%}.styles__correctButton___3QZva-camelCase{display:flex;justify-content:center;align-items:center;border:4px solid #fff;border-radius:5px;box-sizing:border-box;width:45px;height:45px;box-shadow:2px 2px 0 0 #646464;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__correctButton___3QZva-camelCase:hover{transform:scale(.95)}.styles__correctCheck___3UggB-camelCase{font-size:22px;color:#fff;opacity:0;transition:.2s}.styles__correctButton___3QZva-camelCase:hover>.styles__correctCheck___3UggB-camelCase{opacity:1}.styles__correctAnswer___30Xyg-camelCase{background-color:#4bc22e}.styles__correctAnswer___30Xyg-camelCase>.styles__correctCheck___3UggB-camelCase{opacity:1}.styles__answerButtonRow___DK6WB-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:100%;margin-top:15px}.styles__answerIconButton___1jaiF-camelCase{display:flex;justify-content:center;align-items:center;border:2px solid #fff;border-radius:5px;box-sizing:border-box;width:30px;height:22px;box-shadow:1px 1px 0 0 #646464;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__answerIconButton___1jaiF-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__answerIcon___R716B-camelCase{font-size:12px;color:#fff}.styles__answerTextContainer___3NOPU-camelCase{height:80%;width:calc(85% - 75px);text-align:center;overflow:hidden;display:flex;justify-content:center;align-items:center;border-radius:5px;border:3px solid transparent;box-sizing:border-box;outline:none;cursor:text;position:relative;font-size:20px}.styles__answerTextContainer___3NOPU-camelCase:hover,.styles__answerTextContainer___3NOPU-camelCase[focus-within]{border:3px solid #0bc2cf}.styles__answerTextContainer___3NOPU-camelCase:focus-within,.styles__answerTextContainer___3NOPU-camelCase:hover{border:3px solid #0bc2cf}.styles__answerTextContainer___3NOPU-camelCase[focus-within]{background-color:rgba(0,0,0,.2)}.styles__answerTextContainer___3NOPU-camelCase:focus-within{background-color:rgba(0,0,0,.2)}.styles__answerText___12Rxt-camelCase{padding:10px;width:100%;box-sizing:border-box;text-align:center;outline:none}.styles__answerImgContainer___1Fg_v-camelCase{height:80%;width:calc(85% - 115px);display:flex;justify-content:center;align-items:center}.styles__answerImg___1lA6N-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__removeButton___2TXR9-camelCase{display:flex;justify-content:center;align-items:center;border:2px solid #fff;border-radius:5px;box-sizing:border-box;width:30px;height:30px;margin-left:10px;box-shadow:1px 1px 0 0 #646464;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__removeButton___2TXR9-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__mathField___Kj8_5-camelCase{cursor:pointer!important;color:#3a3a3a;border-color:#3a3a3a}.styles__mathAnswerField___2U8_U-camelCase,.styles__mathField___Kj8_5-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:20px!important}.styles__mathAnswerField___2U8_U-camelCase{cursor:default!important;color:#fff;border-color:#fff}.styles__keyboardIcon___1aY9f-camelCase{width:20px;display:flex;justify-content:center;align-items:center;margin:auto 0 auto auto;font-size:18px;cursor:pointer;color:rgba(0,0,0,.3);position:absolute;bottom:2px;right:5px;opacity:0;pointer-events:all}.styles__answerTextContainer___3NOPU-camelCase>.styles__keyboardIcon___1aY9f-camelCase{color:hsla(0,0%,100%,.3)}.styles__keyboardIcon___1aY9f-camelCase:hover{color:#0bc2cf}.styles__answerTextContainer___3NOPU-camelCase[focus-within]>.styles__keyboardIcon___1aY9f-camelCase,.styles__questionTextContainer___39Cd5-camelCase[focus-within]>.styles__keyboardIcon___1aY9f-camelCase{opacity:1}.styles__answerTextContainer___3NOPU-camelCase:focus-within>.styles__keyboardIcon___1aY9f-camelCase,.styles__questionTextContainer___39Cd5-camelCase:focus-within>.styles__keyboardIcon___1aY9f-camelCase{opacity:1}.styles__errorBorder___2OH1U-camelCase{border:2px solid #ce1313}.styles__tooltip___3zlqF-camelCase{font-family:Nunito,sans-serif!important;font-size:14px!important;padding:5px 10px!important;max-width:185px!important;text-align:center!important}@media only screen and (max-width:700px){.styles__wrapper___29Oho-camelCase{height:100%;width:100%;top:0;z-index:15}.styles__mainContainer___3D-r6-camelCase{width:95%;height:90%}.styles__headerContainer___PuqBU-camelCase{margin:auto 3px}.styles__headerIcon___1oSqv-camelCase{font-size:26px;margin-right:5px}.styles__headerText___2ojyr-camelCase{display:none}.styles__randomButton___2HsrZ-camelCase:hover>.styles__randomCheck___2Us1Y-camelCase{opacity:unset}.styles__cancelButton___38eWZ-camelCase{margin:auto 5px}.styles__cancelIcon___3I-Ya-camelCase{display:block}.styles__cancelText___33X_I-camelCase{display:none}.styles__saveIcon___1I1z5-camelCase{font-size:20px;margin-right:0}.styles__saveText___GfbGg-camelCase{display:none}.styles__placeholder___2G84o-camelCase,.styles__questionTextContainer___39Cd5-camelCase{font-size:16px}.styles__answerLeftContainer___1dHXT-camelCase{width:100px;display:flex;flex-direction:row;margin-right:2.5%}.styles__answerButtonRow___DK6WB-camelCase{display:flex;flex-direction:column;justify-content:space-evenly;align-items:space-evenly;width:40px;height:90%;margin-top:0}.styles__answerTextContainer___3NOPU-camelCase{height:85%;width:calc(90% - 100px);font-size:16px}.styles__answersHolder___1sYeZ-camelCase{flex-direction:column}.styles__answerWrapper___2bsy8-camelCase{margin:3px auto;width:calc(100% - 6px);flex-grow:1}.styles__answerTwo___2gDr8-camelCase,.styles__answerWrapper___2bsy8-camelCase{height:calc(25% - 6px)}.styles__mathField___Kj8_5-camelCase{font-size:10px!important}.styles__mathAnswerField___2U8_U-camelCase{font-size:14px!important}}", ""]), t.locals = {
                wrapper: "styles__wrapper___29Oho-camelCase",
                modal: "styles__modal___3It9q-camelCase",
                mainContainer: "styles__mainContainer___3D-r6-camelCase",
                header: "styles__header___36gb1-camelCase",
                headerContainer: "styles__headerContainer___PuqBU-camelCase",
                headerRow: "styles__headerRow___16jFw-camelCase",
                headerIcon: "styles__headerIcon___1oSqv-camelCase",
                headerText: "styles__headerText___2ojyr-camelCase",
                timeInput: "styles__timeInput___206Z4-camelCase",
                randomButton: "styles__randomButton___2HsrZ-camelCase",
                randomCheck: "styles__randomCheck___2Us1Y-camelCase",
                isRandom: "styles__isRandom___3g16D-camelCase",
                cancelButton: "styles__cancelButton___38eWZ-camelCase",
                cancelIcon: "styles__cancelIcon___3I-Ya-camelCase",
                cancelText: "styles__cancelText___33X_I-camelCase",
                saveButton: "styles__saveButton___1Mdgu-camelCase",
                saveIcon: "styles__saveIcon___1I1z5-camelCase",
                saveText: "styles__saveText___GfbGg-camelCase",
                loadingIcon: "styles__loadingIcon___3a3fN-camelCase",
                spin: "styles__spin___1rbXp-camelCase",
                questionRegularBody: "styles__questionRegularBody___2lrUv-camelCase",
                questionContainer: "styles__questionContainer___-CrZi-camelCase",
                questionLeftContainer: "styles__questionLeftContainer___1K9Du-camelCase",
                questionButton: "styles__questionButton___1-47Y-camelCase",
                questionIcon: "styles__questionIcon___1ym67-camelCase",
                questionImgWrapper: "styles__questionImgWrapper___FoBkL-camelCase",
                questionImgContainer: "styles__questionImgContainer___1f59d-camelCase",
                questionEqWrapper: "styles__questionEqWrapper___x-bqP-camelCase",
                removeQButton: "styles__removeQButton___2CRbg-camelCase",
                removeQIcon: "styles__removeQIcon___4V5Jb-camelCase",
                questionTextContainer: "styles__questionTextContainer___39Cd5-camelCase",
                questionText: "styles__questionText___3-Uio-camelCase",
                placeholder: "styles__placeholder___2G84o-camelCase",
                errorContainer: "styles__errorContainer___3ba57-camelCase",
                imageContainer: "styles__imageContainer___1Hz7z-camelCase",
                img: "styles__img___2BpS6-camelCase",
                answersHolder: "styles__answersHolder___1sYeZ-camelCase",
                answerWrapper: "styles__answerWrapper___2bsy8-camelCase",
                answerContainer: "styles__answerContainer___1ZDcZ-camelCase",
                answerLeftContainer: "styles__answerLeftContainer___1dHXT-camelCase",
                correctButton: "styles__correctButton___3QZva-camelCase",
                correctCheck: "styles__correctCheck___3UggB-camelCase",
                correctAnswer: "styles__correctAnswer___30Xyg-camelCase",
                answerButtonRow: "styles__answerButtonRow___DK6WB-camelCase",
                answerIconButton: "styles__answerIconButton___1jaiF-camelCase",
                answerIcon: "styles__answerIcon___R716B-camelCase",
                answerTextContainer: "styles__answerTextContainer___3NOPU-camelCase",
                answerText: "styles__answerText___12Rxt-camelCase",
                answerImgContainer: "styles__answerImgContainer___1Fg_v-camelCase",
                answerImg: "styles__answerImg___1lA6N-camelCase",
                removeButton: "styles__removeButton___2TXR9-camelCase",
                mathField: "styles__mathField___Kj8_5-camelCase",
                mathAnswerField: "styles__mathAnswerField___2U8_U-camelCase",
                keyboardIcon: "styles__keyboardIcon___1aY9f-camelCase",
                errorBorder: "styles__errorBorder___2OH1U-camelCase",
                tooltip: "styles__tooltip___3zlqF-camelCase",
                answerTwo: "styles__answerTwo___2gDr8-camelCase"
            }
        },
        j9P7: function(e, t, a) {
            var n = a("ZRb8");
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
        kRG3: function(e, t, a) {
            var n = a("vSJx");
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
        kb5n: function(e, t, a) {
            var n = a("5nyl");
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
        pkss: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("TSYQ"),
                s = a.n(r),
                i = a("17x9"),
                l = a.n(i),
                c = a("H1WH"),
                _ = a("FKJl"),
                u = a("Xst1"),
                m = a.n(u),
                p = a("VUSw"),
                d = a.n(p),
                f = a("LHn/"),
                h = a("XOuL"),
                y = a("htno");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return b(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function C(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function w(e) {
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
                    var a, n = I(e);
                    if (t) {
                        var o = I(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return k(this, a)
                }
            }

            function k(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return E(e)
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
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
                    }), t && v(e, t)
                }(i, e);
                var t, a, n, r = w(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = r.call(this, e)).state = {
                        loading: !1,
                        searchText: "",
                        images: [],
                        page: 1,
                        pagesLeft: 0
                    }, t.loading = !1, t.onSelect = t.onSelect.bind(E(t)), t.search = t.search.bind(E(t)), t.showMore = t.showMore.bind(E(t)), t
                }
                return t = i, (a = [{
                    key: "onSelect",
                    value: function(e) {
                        this.loading = !0, y.a.put("/c/unsplash/track-download/".concat(e.id)).catch((function(e) {
                            Object(_.b)(e)
                        })), this.props.select(e.urls.small)
                    }
                }, {
                    key: "search",
                    value: function(e) {
                        var t = this;
                        e.preventDefault(), this.loading || (this.loading = !0, this.setState({
                            loading: !0
                        }), y.a.get("/c/unsplash/search", {
                            params: {
                                query: this.state.searchText,
                                page: 1
                            }
                        }).then((function(e) {
                            t.loading = !1, t.setState({
                                images: e.data.results,
                                loading: !1,
                                page: 1,
                                pagesLeft: e.data.total_pages - 1
                            })
                        })).catch((function(e) {
                            Object(_.b)(e), t.loading = !1, t.setState({
                                loading: !1,
                                page: 1,
                                pagesLeft: 0,
                                images: []
                            })
                        })))
                    }
                }, {
                    key: "showMore",
                    value: function() {
                        var e = this;
                        if (!this.loading) {
                            this.loading = !0;
                            var t = this.state.page + 1,
                                a = this.state.pagesLeft - 1;
                            y.a.get("/c/unsplash/search", {
                                params: {
                                    query: this.state.searchText,
                                    page: t
                                }
                            }).then((function(n) {
                                e.loading = !1, e.setState({
                                    images: [].concat(g(e.state.images), g(n.data.results)),
                                    page: t,
                                    pagesLeft: a
                                })
                            })).catch((function(t) {
                                Object(_.b)(t), e.loading = !1
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: m.a.modal
                        }, o.a.createElement("div", {
                            className: d.a.mainContainer
                        }, o.a.createElement("i", {
                            className: s()(d.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.close
                        }), o.a.createElement("form", {
                            onSubmit: this.search,
                            className: d.a.searchContainer
                        }, o.a.createElement("input", {
                            className: d.a.searchInput,
                            type: "search",
                            value: this.state.searchText,
                            onChange: function(t) {
                                return e.setState({
                                    searchText: t.target.value
                                })
                            },
                            placeholder: "Search for Images...",
                            autoFocus: c.isMobile ? "" : "autofocus"
                        }), o.a.createElement("i", {
                            className: s()(d.a.searchIcon, "fas fa-search"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.search
                        })), this.state.loading ? o.a.createElement("div", {
                            className: d.a.loaderContainer
                        }, o.a.createElement(h.a, null)) : 0 === this.state.images.length ? o.a.createElement("div", {
                            className: d.a.loaderContainer
                        }, o.a.createElement("div", {
                            className: d.a.logoText
                        }, "Images By:", o.a.createElement("br", null), o.a.createElement("a", {
                            className: d.a.logoLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://www.unsplash.com/?utm_source=blooket&utm_medium=referral"
                        }, o.a.createElement("img", {
                            src: f.a.basic.unsplashLogo,
                            alt: "Images By Unsplash",
                            className: d.a.unsplashLogo,
                            draggable: !1
                        })))) : o.a.createElement("div", {
                            className: d.a.imagesHolder
                        }, this.state.images.map((function(t) {
                            return o.a.createElement("div", {
                                className: d.a.imageContainer,
                                key: t.id
                            }, o.a.createElement("div", {
                                className: d.a.imageButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onSelect(t)
                                }
                            }, o.a.createElement("img", {
                                src: t.urls.small,
                                alt: t.alt_description,
                                className: d.a.image,
                                draggable: !1
                            })), o.a.createElement("div", {
                                className: d.a.imageText
                            }, "By: ", o.a.createElement("a", {
                                className: d.a.imageLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://www.unsplash.com/@".concat(t.user.username, "?utm_source=blooket&utm_medium=referral")
                            }, t.user.name)))
                        }))), this.state.pagesLeft > 0 && !this.state.loading ? o.a.createElement("div", {
                            style: {
                                display: "inline-block",
                                margin: "0 auto"
                            }
                        }, o.a.createElement("div", {
                            className: d.a.showMoreButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.showMore
                        }, "Show More")) : null, o.a.createElement("div", {
                            style: {
                                height: 20
                            }
                        })))
                    }
                }]) && C(t.prototype, a), n && C(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            N.propTypes = {
                select: l.a.func.isRequired,
                close: l.a.func.isRequired
            }, t.a = N
        },
        qRUB: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___1BPm9-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;border-radius:7px;text-align:center;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__text___KSL4--camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}.styles__blook___1vk2V-camelCase{height:34.5px;width:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 9px -5px 0;display:inline-block}.styles__holder___3CEfN-camelCase{width:100%}.styles__inputContainer___2Fn7J-camelCase{border:3px solid rgba(0,0,0,.17);border-radius:6px;width:180px;height:50px;margin:0 auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___2Fn7J-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___2Fn7J-camelCase:focus-within{border-color:#0bc2cf}.styles__input___2vJSW-camelCase{border:none;margin:5px 0 5px 5px;padding-right:5px;padding-left:5px;width:115px;height:40px;line-height:40px;font-size:28px;text-align:right;font-weight:700;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___2vJSW-camelCase:-moz-placeholder,.styles__input___2vJSW-camelCase:-ms-input-placeholder,.styles__input___2vJSW-camelCase::-moz-placeholder,.styles__input___2vJSW-camelCase::-webkit-input-placeholder{color:#999}.styles__input___2vJSW-camelCase::-webkit-inner-spin-button,.styles__input___2vJSW-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__longInput___QVduj-camelCase{border:none;margin:5px 0 5px 5px;padding-right:5px;padding-left:5px;width:calc(100% - 20px);height:36px;line-height:36px;font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__longInput___QVduj-camelCase:-moz-placeholder,.styles__longInput___QVduj-camelCase:-ms-input-placeholder,.styles__longInput___QVduj-camelCase::-moz-placeholder,.styles__longInput___QVduj-camelCase::-webkit-input-placeholder{color:#999}.styles__longInput___QVduj-camelCase::-webkit-inner-spin-button,.styles__longInput___QVduj-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__inputFilled___3AmpF-camelCase{border-color:#3a3a3a}.styles__token___17MV4-camelCase{border-radius:6px}.styles__icon___Z-5-g-camelCase,.styles__token___17MV4-camelCase{height:30px;width:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:10px}.styles__icon___Z-5-g-camelCase{line-height:30px;font-size:28px;text-align:center}.styles__colorsHolder___162vx-camelCase{width:330px;height:50px;margin:0 auto 20px;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.styles__colorContainer___1-6bJ-camelCase{border-radius:5px;width:25px;height:25px;color:#fff;font-size:14px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__buttonContainer___2EaVD-camelCase,.styles__colorContainer___1-6bJ-camelCase{display:flex;justify-content:center;align-items:center}.styles__buttonContainer___2EaVD-camelCase{width:100%;margin-top:30px;margin-bottom:25px;flex-direction:row}.styles__button___3zpwV-camelCase{margin:auto}.styles__buttonInside___39vdp-camelCase{min-width:100px;height:35px;font-size:22px;padding:5px 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}.styles__errorContainer___2idI5-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___2Ey5t-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___2tWcX-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__numRow___xh98F-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;margin:0 auto 20px}.styles__numTotal___3LQaw-camelCase{line-height:40px;font-size:32px;font-weight:700;margin-left:10px}@media only screen and (max-width:600px){.styles__container___1BPm9-camelCase{width:310px}.styles__colorsHolder___162vx-camelCase,.styles__errorContainer___2idI5-camelCase{width:280px}.styles__colorContainer___1-6bJ-camelCase{border-radius:5px;width:23px;height:23px}}", ""]), t.locals = {
                container: "styles__container___1BPm9-camelCase",
                text: "styles__text___KSL4--camelCase",
                blook: "styles__blook___1vk2V-camelCase",
                holder: "styles__holder___3CEfN-camelCase",
                inputContainer: "styles__inputContainer___2Fn7J-camelCase",
                input: "styles__input___2vJSW-camelCase",
                longInput: "styles__longInput___QVduj-camelCase",
                inputFilled: "styles__inputFilled___3AmpF-camelCase",
                token: "styles__token___17MV4-camelCase",
                icon: "styles__icon___Z-5-g-camelCase",
                colorsHolder: "styles__colorsHolder___162vx-camelCase",
                colorContainer: "styles__colorContainer___1-6bJ-camelCase",
                buttonContainer: "styles__buttonContainer___2EaVD-camelCase",
                button: "styles__button___3zpwV-camelCase",
                buttonInside: "styles__buttonInside___39vdp-camelCase",
                errorContainer: "styles__errorContainer___2idI5-camelCase",
                errorIcon: "styles__errorIcon___2Ey5t-camelCase",
                errorText: "styles__errorText___2tWcX-camelCase",
                numRow: "styles__numRow___xh98F-camelCase",
                numTotal: "styles__numTotal___3LQaw-camelCase"
            }
        },
        rI6f: function(e, t, a) {
            var n = a("ZXaF");
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
        uCac: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainContainer___1vKtq-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:500px;min-width:300px;width:90%;max-height:90%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;justify-content:center}.styles__closeIcon___3_xsj-camelCase{position:absolute;top:15px;right:17px;font-size:26px;color:#3a3a3a;cursor:pointer;transition:.2s;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__closeIcon___3_xsj-camelCase:focus,.styles__closeIcon___3_xsj-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__header___3HWXi-camelCase{font-size:30px;font-weight:700;text-align:center;margin:10px 10%}.styles__dropContainer___21qGZ-camelCase{width:85%;padding:15px 10px;margin:10px auto 25px;box-sizing:border-box;border:2px dashed #666;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-content:center}.styles__activeDropContainer___LdGGq-camelCase{background-color:rgba(11,194,207,.3)}.styles__desc___ByhC3-camelCase{font-size:20px;text-align:center;margin:0 5% 5px}.styles__link___1JRe9-camelCase{color:#0bc2cf;display:inline;text-decoration:underline}.styles__button___rFE-U-camelCase,.styles__link___1JRe9-camelCase{cursor:pointer}.styles__button___rFE-U-camelCase{width:85%;height:40px;line-height:40px;margin:20px auto 10px;background-color:#0bc2cf;color:#fff;font-family:Nunito,sans-serif;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-size:22px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;border-radius:6px;transition:.2s}.styles__button___rFE-U-camelCase:hover{transform:scale(.95)}.styles__errorContainer___2sU88-camelCase{border:2px solid #ce1313;border-radius:5px;width:85%;box-sizing:border-box;margin:0 auto 20px;padding:5px 10px;display:flex;flex-direction:row;align-items:center}.styles__errorIcon___23sRU-camelCase{font-size:24px;color:#ce1313;margin-right:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___2Zg2a-camelCase{font-size:18px;text-align:left;color:#3a3a3a}", ""]), t.locals = {
                mainContainer: "styles__mainContainer___1vKtq-camelCase",
                closeIcon: "styles__closeIcon___3_xsj-camelCase",
                header: "styles__header___3HWXi-camelCase",
                dropContainer: "styles__dropContainer___21qGZ-camelCase",
                activeDropContainer: "styles__activeDropContainer___LdGGq-camelCase",
                desc: "styles__desc___ByhC3-camelCase",
                link: "styles__link___1JRe9-camelCase",
                button: "styles__button___rFE-U-camelCase",
                errorContainer: "styles__errorContainer___2sU88-camelCase",
                errorIcon: "styles__errorIcon___23sRU-camelCase",
                errorText: "styles__errorText___2Zg2a-camelCase"
            }
        },
        vSJx: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__sidebar___1XqWi-camelCase{position:fixed;top:0;left:0;width:220px;height:100%;padding:20px 10px 20px 0;box-sizing:border-box;background-color:#9a49aa;box-shadow:inset -10px 0 rgba(0,0,0,.2);display:flex;flex-direction:column;z-index:5}.styles__logo___16pGV-camelCase{width:80%;margin:0 auto 10px}.styles__bigButton___ifX-_-camelCase{margin:15px auto 10px}.styles__bigButtonInside___p39Zq-camelCase{font-family:Titan One,sans-serif;color:#fff;font-size:26px;text-shadow:2px 2px rgba(0,0,0,.2);height:40px;padding:0 15px;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__bigIcon___2-Xcu-camelCase{font-size:20px;margin-right:10px}.styles__plusButton___2dH73-camelCase{background-color:#ff7b24;border-radius:5px;margin:15px auto 0;padding:5px 10px;font-size:18px;font-weight:700;color:#fff;display:flex;flex-direction:row;align-items:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__plusButton___2dH73-camelCase:hover{transform:scale(.95)}.styles__plusIcon___3DQkg-camelCase{margin-right:10px;font-size:18px}.styles__pageButton___1wFuu-camelCase{position:relative;display:flex;flex-direction:row;align-items:center;height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:#fff;transition:.2s linear}.styles__pageButton___1wFuu-camelCase:hover,.styles__pageSelected___MugaH-camelCase{background-color:#fff;color:#9a49aa}.styles__pageIcon___3OSy9-camelCase{font-size:22px;width:26px;text-align:center}.styles__pageText___1eo7q-camelCase{font-family:Nunito,sans-serif;margin-left:10px;font-size:20px}.styles__bottomRow___3OozA-camelCase{flex-direction:row;justify-content:space-evenly;width:100%;margin-top:auto}.styles__bottomRow___3OozA-camelCase,.styles__smallButton___sQuq8-camelCase{display:flex;align-items:center}.styles__smallButton___sQuq8-camelCase{width:30px;height:30px;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;text-decoration:none}.styles__bottomIcon___3Fswk-camelCase{color:#fff;font-size:20px}.styles__topRightRow___dQvxc-camelCase{position:absolute;top:0;right:0;display:flex;flex-direction:row;z-index:5}.styles__profileContainer___CSuIE-camelCase{min-width:200px;height:55px;margin-left:10px;background-color:#9a49aa;border-bottom-left-radius:10px;box-sizing:border-box;padding:0 10px 8px;box-shadow:inset 0 -8px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);justify-content:center;font-size:20px;color:#fff;position:relative}.styles__profileContainer___CSuIE-camelCase,.styles__profileRow___cJa4E-camelCase{display:flex;align-items:center}.styles__profileRow___cJa4E-camelCase{flex-direction:row;height:100%}.styles__profileBlook___37mfP-camelCase{width:30px;margin-right:10px}.styles__profileDropdownIcon___3iLIX-camelCase{margin-left:auto;padding-left:10px}.styles__profileDropdownMenu___2jUAA-camelCase{position:absolute;min-width:130px;right:5px;top:calc(100% - 7px);transition:.2s;transform:rotateX(-90deg);transform-origin:top center;visibility:hidden;opacity:.3;padding:5px 0 8px;background-color:#fff;border-radius:5px;box-shadow:inset 0 -3px rgba(0,0,0,.2),0 2px 4px rgba(0,0,0,.25);display:flex;flex-direction:column;outline:none}.styles__profileContainer___CSuIE-camelCase:focus>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase[focus-within]>.styles__profileDropdownMenu___2jUAA-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__profileContainer___CSuIE-camelCase:focus-within>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase:focus>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__profileDropdownOption___ljZXD-camelCase{width:100%;background-color:#fff;font-size:18px;color:#3a3a3a;height:32px;display:flex;flex-direction:row;align-items:center;padding:0 7px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;position:relative;text-decoration:none;transition:.2s}.styles__profileDropdownOption___ljZXD-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__profileDropdownOptionIcon___15VKX-camelCase{font-size:16px;width:22px;text-align:center;margin-right:7px;opacity:.8}.styles__mNavBar___1SC0e-camelCase{background-color:#9a49aa;width:100%;box-sizing:border-box;height:55px;padding:0 15px 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:space-between;z-index:15;position:absolute;top:0;left:0;visibility:hidden}.styles__mLogo___34lD1-camelCase{width:150px}.styles__mHamburgerIcon___1Bz-E-camelCase{font-size:30px;color:#fff;width:40px;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__mSidebar___rQisY-camelCase{position:fixed;left:100vw;top:0;width:300px;height:100%;padding-top:20px;box-sizing:border-box;background-color:#9a49aa;overflow-x:hidden;overflow-y:scroll;z-index:20;display:flex;flex-direction:column;visibility:hidden;transition:transform .2s}.styles__closeIcon___IgsQm-camelCase{position:absolute;top:15px;right:25px;color:#fff;font-size:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}@media only screen and (max-width:850px){.styles__profileContainer___CSuIE-camelCase,.styles__sidebar___1XqWi-camelCase{visibility:hidden}.styles__mNavBar___1SC0e-camelCase,.styles__mSidebar___rQisY-camelCase{visibility:visible}.styles__noMobile___30L3d-camelCase{display:none}}", ""]), t.locals = {
                sidebar: "styles__sidebar___1XqWi-camelCase",
                logo: "styles__logo___16pGV-camelCase",
                bigButton: "styles__bigButton___ifX-_-camelCase",
                bigButtonInside: "styles__bigButtonInside___p39Zq-camelCase",
                bigIcon: "styles__bigIcon___2-Xcu-camelCase",
                plusButton: "styles__plusButton___2dH73-camelCase",
                plusIcon: "styles__plusIcon___3DQkg-camelCase",
                pageButton: "styles__pageButton___1wFuu-camelCase",
                pageSelected: "styles__pageSelected___MugaH-camelCase",
                pageIcon: "styles__pageIcon___3OSy9-camelCase",
                pageText: "styles__pageText___1eo7q-camelCase",
                bottomRow: "styles__bottomRow___3OozA-camelCase",
                smallButton: "styles__smallButton___sQuq8-camelCase",
                bottomIcon: "styles__bottomIcon___3Fswk-camelCase",
                topRightRow: "styles__topRightRow___dQvxc-camelCase",
                profileContainer: "styles__profileContainer___CSuIE-camelCase",
                profileRow: "styles__profileRow___cJa4E-camelCase",
                profileBlook: "styles__profileBlook___37mfP-camelCase",
                profileDropdownIcon: "styles__profileDropdownIcon___3iLIX-camelCase",
                profileDropdownMenu: "styles__profileDropdownMenu___2jUAA-camelCase",
                profileDropdownOption: "styles__profileDropdownOption___ljZXD-camelCase",
                profileDropdownOptionIcon: "styles__profileDropdownOptionIcon___15VKX-camelCase",
                mNavBar: "styles__mNavBar___1SC0e-camelCase",
                mLogo: "styles__mLogo___34lD1-camelCase",
                mHamburgerIcon: "styles__mHamburgerIcon___1Bz-E-camelCase",
                mSidebar: "styles__mSidebar___rQisY-camelCase",
                closeIcon: "styles__closeIcon___IgsQm-camelCase",
                noMobile: "styles__noMobile___30L3d-camelCase"
            }
        },
        y7sT: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainContainer___F-l_7-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__mainContainer___F-l_7-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__mainContainer___F-l_7-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__mainContainer___F-l_7-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__closeIcon___2QOPB-camelCase{position:absolute;top:15px;right:17px;font-size:26px;color:#3a3a3a;cursor:pointer;transition:.2s;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__closeIcon___2QOPB-camelCase:focus,.styles__closeIcon___2QOPB-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__logoHeader___RXMe1-camelCase{height:53px;width:244px;margin:25px auto 15px}.styles__stepHeader___2w9rW-camelCase{font-size:38px;font-weight:700;margin:10px auto}.styles__stepDesc___1No_X-camelCase,.styles__stepHeader___2w9rW-camelCase{font-family:Nunito,sans-serif;text-align:center;color:#3a3a3a}.styles__stepDesc___1No_X-camelCase{font-size:22px;margin:0 7.25% 10px}.styles__buttonContainer___3lLB0-camelCase{display:flex;flex-direction:row;width:90%;margin:20px 5%}.styles__button___2XIbe-camelCase{width:45%;height:100px;margin:0 2.5%;color:#666;border:2px solid #666;border-radius:6px;text-decoration:none;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:.2s}.styles__button___2XIbe-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__userIcon___2rnWF-camelCase{font-size:40px}.styles__searchIcon___K1x1D-camelCase,.styles__userIcon___2rnWF-camelCase{margin:10px auto;line-height:40px}.styles__searchIcon___K1x1D-camelCase{font-size:36px}.styles__buttonText___3Miva-camelCase{font-size:22px;margin:2px auto 0}.styles__buttonText___3Miva-camelCase,.styles__nextButton___1uHi6-camelCase{font-family:Nunito,sans-serif}.styles__nextButton___1uHi6-camelCase{width:85.5%;height:50px;line-height:50px;margin:10px auto 25px;color:#666;font-size:26px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;border:2px solid #666;border-radius:6px;cursor:pointer;transition:.2s}.styles__nextButton___1uHi6-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__exportStep___2hhQ0-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__imageStep___2_hBc-camelCase,.styles__imageStep3___7dWar-camelCase{margin:15px auto 5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__imageStep3___7dWar-camelCase{width:530px;height:auto}.styles__exportInstructions___yJWKA-camelCase{font-size:18px;text-align:center;margin:5px 7.25% 10px}.styles__exportInstructions___yJWKA-camelCase,.styles__input___16Z20-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__input___16Z20-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:10px auto;padding:10px;width:calc(85.5% - 24px);height:200px;font-size:16px;line-height:20px;text-align:left;outline:none;resize:none}.styles__input___16Z20-camelCase:focus{border-color:#0bc2cf}.styles__stepRow___19C9G-camelCase{flex-direction:row}.styles__checkBox___2hPoD-camelCase,.styles__stepRow___19C9G-camelCase{display:flex;justify-content:center;align-items:center}.styles__checkBox___2hPoD-camelCase{width:20px;height:20px;border-width:2px;border-style:solid;border-radius:4px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__checkIcon___1TjIY-camelCase{font-size:14px;margin:auto}.styles__checkYes___Ophdg-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___3pChq-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}.styles__checkText___2YkWn-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;margin-left:10px}@media only screen and (max-width:600px){.styles__mainContainer___F-l_7-camelCase{min-width:100px;width:90%}.styles__searchIcon___K1x1D-camelCase{margin:10px auto 0}.styles__buttonText___3Miva-camelCase{line-height:23px}.styles__imageStep___2_hBc-camelCase,.styles__imageStep3___7dWar-camelCase{margin:15px auto 5px;width:90%}}", ""]), t.locals = {
                mainContainer: "styles__mainContainer___F-l_7-camelCase",
                closeIcon: "styles__closeIcon___2QOPB-camelCase",
                logoHeader: "styles__logoHeader___RXMe1-camelCase",
                stepHeader: "styles__stepHeader___2w9rW-camelCase",
                stepDesc: "styles__stepDesc___1No_X-camelCase",
                buttonContainer: "styles__buttonContainer___3lLB0-camelCase",
                button: "styles__button___2XIbe-camelCase",
                userIcon: "styles__userIcon___2rnWF-camelCase",
                searchIcon: "styles__searchIcon___K1x1D-camelCase",
                buttonText: "styles__buttonText___3Miva-camelCase",
                nextButton: "styles__nextButton___1uHi6-camelCase",
                exportStep: "styles__exportStep___2hhQ0-camelCase",
                imageStep: "styles__imageStep___2_hBc-camelCase",
                imageStep3: "styles__imageStep3___7dWar-camelCase",
                exportInstructions: "styles__exportInstructions___yJWKA-camelCase",
                input: "styles__input___16Z20-camelCase",
                stepRow: "styles__stepRow___19C9G-camelCase",
                checkBox: "styles__checkBox___2hPoD-camelCase",
                checkIcon: "styles__checkIcon___1TjIY-camelCase",
                checkYes: "styles__checkYes___Ophdg-camelCase",
                checkNo: "styles__checkNo___3pChq-camelCase",
                checkText: "styles__checkText___2YkWn-camelCase"
            }
        }
    }
]);